"use client";

import React, { useEffect, useRef } from 'react';

// Interactive WebGL cursor: a glowing metaball-style trail that follows
// the pointer, ripples outward on click, and reacts to velocity.
export default function WebGLCursor() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl', { alpha: true, antialias: true });
    if (!gl) {
      console.error('WebGL not supported');
      return;
    }

    const vertexSrc = `
      attribute vec2 aPosition;
      void main() {
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `;

    const fragmentSrc = `
      precision highp float;
      uniform vec2 uResolution;
      uniform vec2 uMouse;
      uniform float uTime;
      uniform float uVelocity;
      uniform float uClickTime;
      uniform vec2 uClickPos;

      void main() {
        vec2 uv = gl_FragCoord.xy / uResolution.xy;
        vec2 mouse = uMouse / uResolution.xy;
        float aspect = uResolution.x / uResolution.y;

        vec2 diff = uv - mouse;
        diff.x *= aspect;
        float dist = length(diff);

        float glow = smoothstep(0.18 + uVelocity * 0.02, 0.0, dist);
        vec3 col = mix(vec3(0.36, 0.45, 0.9), vec3(0.96, 0.21, 0.36), sin(uTime * 0.5) * 0.5 + 0.5);

        // click ripple
        float t = uTime - uClickTime;
        vec2 cdiff = uv - uClickPos / uResolution.xy;
        cdiff.x *= aspect;
        float cdist = length(cdiff);
        float ripple = smoothstep(0.02, 0.0, abs(cdist - t * 0.6)) * smoothstep(1.2, 0.0, t);

        vec3 finalColor = col * glow + vec3(0.1, 0.83, 0.98) * ripple;
        float alpha = clamp(glow + ripple, 0.0, 1.0);

        gl_FragColor = vec4(finalColor, alpha);
      }
    `;

    function compile(type: number, src: string) {
      const shader = gl!.createShader(type)!;
      gl!.shaderSource(shader, src);
      gl!.compileShader(shader);
      if (!gl!.getShaderParameter(shader, gl!.COMPILE_STATUS)) {
        console.error(gl!.getShaderInfoLog(shader));
      }
      return shader;
    }

    const program = gl.createProgram()!;
    gl.attachShader(program, compile(gl.VERTEX_SHADER, vertexSrc));
    gl.attachShader(program, compile(gl.FRAGMENT_SHADER, fragmentSrc));
    gl.linkProgram(program);
    gl.useProgram(program);

    const posBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );
    const aPosition = gl.getAttribLocation(program, 'aPosition');
    gl.enableVertexAttribArray(aPosition);
    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);

    const uResolution = gl.getUniformLocation(program, 'uResolution');
    const uMouse = gl.getUniformLocation(program, 'uMouse');
    const uTime = gl.getUniformLocation(program, 'uTime');
    const uVelocity = gl.getUniformLocation(program, 'uVelocity');
    const uClickTime = gl.getUniformLocation(program, 'uClickTime');
    const uClickPos = gl.getUniformLocation(program, 'uClickPos');

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let lastX = mouseX;
    let lastY = mouseY;
    let velocity = 0;
    let clickTime = -10;
    let clickX = mouseX;
    let clickY = mouseY;
    let rafId = 0;
    const start = performance.now();

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
      gl!.viewport(0, 0, canvas.width, canvas.height);
    }

    function onMove(e: MouseEvent) {
      mouseX = e.clientX * window.devicePixelRatio;
      mouseY = (window.innerHeight - e.clientY) * window.devicePixelRatio;
    }

    function onClick(e: MouseEvent) {
      clickTime = (performance.now() - start) / 1000;
      clickX = e.clientX * window.devicePixelRatio;
      clickY = (window.innerHeight - e.clientY) * window.devicePixelRatio;
    }

    function render() {
      const now = (performance.now() - start) / 1000;
      velocity = Math.min(
        Math.hypot(mouseX - lastX, mouseY - lastY) / (window.devicePixelRatio * 10),
        3
      );
      lastX = mouseX;
      lastY = mouseY;

      if (canvas) {
        gl!.uniform2f(uResolution, canvas.width, canvas.height);
      }
      gl!.uniform2f(uMouse, mouseX, mouseY);
      gl!.uniform1f(uTime, now);
      gl!.uniform1f(uVelocity, velocity);
      gl!.uniform1f(uClickTime, clickTime);
      gl!.uniform2f(uClickPos, clickX, clickY);

      gl!.clearColor(0, 0, 0, 0);
      gl!.clear(gl!.COLOR_BUFFER_BIT);
      gl!.drawArrays(gl!.TRIANGLE_STRIP, 0, 4);

      rafId = requestAnimationFrame(render);
    }

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('click', onClick);
    render();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('click', onClick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50 w-full h-full"
    />
  );
}
