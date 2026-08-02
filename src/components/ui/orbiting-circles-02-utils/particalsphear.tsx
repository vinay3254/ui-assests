"use client";

import React, { useEffect, useRef } from "react";

export default function ParticleSphereAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl");
    if (!gl) return;

    const updateSize = () => {
      if (!canvas) return;
      canvas.width = (canvas.clientWidth || 300) * (window.devicePixelRatio || 1);
      canvas.height = (canvas.clientHeight || 300) * (window.devicePixelRatio || 1);
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    updateSize();

    const vsSource = `
      attribute vec3 aPosition;
      attribute float aSize;
      uniform float uTime;
      varying float vAlpha;

      void main() {
        float angle = uTime * 0.4;
        mat3 rotY = mat3(
          cos(angle), 0.0, sin(angle),
          0.0, 1.0, 0.0,
          -sin(angle), 0.0, cos(angle)
        );
        mat3 rotX = mat3(
          1.0, 0.0, 0.0,
          0.0, cos(angle * 0.6), -sin(angle * 0.6),
          0.0, sin(angle * 0.6), cos(angle * 0.6)
        );

        vec3 pos = rotX * rotY * aPosition;
        gl_Position = vec4(pos * 0.75, 1.0);
        gl_PointSize = aSize * (1.2 + pos.z * 0.3);
        vAlpha = smoothstep(-1.2, 1.2, pos.z + 0.5);
      }
    `;

    const fsSource = `
      precision mediump float;
      varying float vAlpha;

      void main() {
        vec2 coord = gl_PointCoord - vec2(0.5);
        float dist = length(coord);
        if (dist > 0.5) discard;
        float alpha = (1.0 - dist * 2.0) * vAlpha;
        gl_FragColor = vec4(0.7, 0.1, 0.1, alpha * 0.95);
      }
    `;

    const createShader = (glContext: WebGLRenderingContext, type: number, source: string) => {
      const shader = glContext.createShader(type);
      if (!shader) return null;
      glContext.shaderSource(shader, source);
      glContext.compileShader(shader);
      return shader;
    };

    const vert = createShader(gl, gl.VERTEX_SHADER, vsSource);
    const frag = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
    if (!vert || !frag) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vert);
    gl.attachShader(program, frag);
    gl.linkProgram(program);
    gl.useProgram(program);

    const particleCount = 500;
    const positions: number[] = [];
    const sizes: number[] = [];

    for (let i = 0; i < particleCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const radius = 1.0 + (Math.random() - 0.5) * 0.2;

      positions.push(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi)
      );
      sizes.push(Math.random() * 6 + 3);
    }

    const posBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    const aPos = gl.getAttribLocation(program, "aPosition");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 3, gl.FLOAT, false, 0, 0);

    const sizeBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, sizeBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(sizes), gl.STATIC_DRAW);

    const aSize = gl.getAttribLocation(program, "aSize");
    gl.enableVertexAttribArray(aSize);
    gl.vertexAttribPointer(aSize, 1, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(program, "uTime");

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

    let animId: number;
    const startTime = performance.now();

    const render = () => {
      const elapsed = (performance.now() - startTime) / 1000;
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.uniform1f(uTime, elapsed);
      gl.drawArrays(gl.POINTS, 0, particleCount);

      animId = requestAnimationFrame(render);
    };

    render();
    window.addEventListener("resize", updateSize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full pointer-events-none" />;
}
