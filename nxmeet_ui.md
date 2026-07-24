# UI Design Details for `NXMEET`

## 🎨 Colors
- `'#00ff41', fontFamily:'monospace', fontSize:11, opacity:0.65, textShadow:'0 0 6px #00ff41' }}>
              {Array.from({length:10}).map((_,j) => <span key={j}>{chars[(i*3+j)%chars.length]}</span>)}
            </div>
          )`
- `'rgba(255,255,255,0.06)',
                border: `1px solid ${GOLD_BORDER}`,
                borderRadius: 8, padding: '10px 12px',
                fontSize: 13, color: '#fff', outline: 'none',
                fontFamily: 'monospace', marginBottom: 12,
              }}
            />

            <label style={{ display: 'block', fontSize: 11, color: '#888', marginBottom: 6, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Minimum balance required
            </label>
            <input
              type="number"
              min="1"
              value={minBalance}
              onChange={e => setMinBalance(e.target.value)}
              style={{
                width: '100%', boxSizing: 'border-box',
                background: 'rgba(255,255,255,0.06)',
                border: `1px solid ${GOLD_BORDER}`,
                borderRadius: 8, padding: '10px 12px',
                fontSize: 13, color: '#fff', outline: 'none',
                fontFamily: 'Inter, sans-serif', marginBottom: 16,
              }}
            />

            {error && (
              <p style={{ fontSize: 12, color: '#f87171', marginBottom: 12 }}>{error}</p>
            )}

            <button
              onClick={handleSet}
              disabled={saving}
              style={{
                width: '100%',
                background: saving ? 'rgba(212,175,55,0.3)' : 'linear-gradient(135deg,#d4af37,#b8860b)',
                border: 'none', color: '#000',
                fontWeight: 700, fontSize: 14,
                padding: 13, borderRadius: 10, cursor: saving ? 'wait' : 'pointer',
                marginBottom: 10,
              }}
            >
              {saving ? 'Saving…' : 'Set gate & start meeting'}
            </button>
            <button
              onClick={onSkip}
              style={{
                width: '100%', background: 'transparent', border: 'none',
                color: '#666', fontSize: 13, cursor: 'pointer', padding: 8,
              }}
            >
              Skip — open room without gate
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )`
- `#1A1A1A'>Deployed
address (Hardhat localhost): </span><code><span style='font-size:9.5pt`
- `inRoom ? '#d4af37' : 'rgba(203,213,225,0.8)', fontSize:12,
                    }}>
                      <span style={{ width:6, height:6, borderRadius:'50%', background: inRoom ? '#d4af37' : 'rgba(255,255,255,0.2)', flexShrink:0 }} />
                      {p.userName || 'Unknown'}{p.isLocal ? ' (you)' : ''}
                    </button>
                  )`
- `#a89878`
- `#1A1A1A'>Hero page — connect
  wallet, create or join a meeting. Features animated gold video background and
  <span class=SpellE>glassmorphism</span> cards.<o:p></o:p></span></p>
  </td>
 </tr>
 <tr style='mso-yfti-irow:2'>
  <td style='border:solid #E0D5C0 1.0pt`
- `rgba(220,38,38,0.08)`
- `#1A1A1A'># → Runs at http://localhost:5000<o:p></o:p></span></pre><pre
style='background:whitesmoke'><span style='color:#1A1A1A'># → Connects to MongoDB at localhost:27017<o:p></o:p></span></pre></div>

<table class=MsoNormalTable border=0 cellspacing=0 cellpadding=0 width="100%"
 style='width:100.0%`
- `'var(--text-2)', cursor: 'pointer', fontFamily: 'Geist, Inter, sans-serif', transition: 'border-color 0.15s, color 0.15s' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'`
- `rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500`
- `'#111827' }}>
      {/* Toolbar */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8, padding: '8px 16px',
        background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        flexWrap: 'wrap',
      }}>
        {/* Drawing tools */}
        <div style={{ display: 'flex', gap: 4 }}>
          <ToolBtn active={tool === 'pen'}    title="Pen"      onClick={() => setTool('pen')}>✏️</ToolBtn>
          <ToolBtn active={tool === 'eraser'} title="Eraser"   onClick={() => setTool('eraser')}>🧹</ToolBtn>
          <ToolBtn active={tool === 'line'}   title="Line"     onClick={() => setTool('line')}>╱</ToolBtn>
          <ToolBtn active={tool === 'rect'}   title="Rectangle" onClick={() => setTool('rect')}>▭</ToolBtn>
          <ToolBtn active={tool === 'circle'} title="Circle"   onClick={() => setTool('circle')}>○</ToolBtn>
          <ToolBtn active={tool === 'arrow'}  title="Arrow"    onClick={() => setTool('arrow')}>→</ToolBtn>
        </div>

        <div style={{ width: 1, height: 28, background: 'rgba(255,255,255,0.1)' }} />

        {/* Colors */}
        <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
          {COLORS.map(c => (
            <button
              key={c}
              title={c}
              onClick={() => { setColor(c)`
- `'var(--text-3)' }}>
        <div style={{ width: 28, height: 28, borderRadius: 7, background:'var(--surface-2)', display:'grid', placeItems:'center', color:'var(--accent)' }}>{icon}</div>
        <span style={{ fontSize: 12, fontWeight: 500, textTransform:'uppercase', letterSpacing:'0.04em' }}>{label}</span>
      </div>
      <div style={{ fontSize: 36, fontWeight: 600, letterSpacing:'-0.025em', marginTop: 14, lineHeight: 1, color:'var(--text)' }}>{value}</div>
      <div style={{ fontSize: 11.5, color:'var(--text-3)', marginTop: 6 }}>{delta}</div>
    </div>
  )`
- `'var(--text)' }}>Ambient Sounds</div>
          <div style={{ fontSize:11,color:'var(--text-3)' }}>
            {anyActive ? `${Object.keys(active).length} track${Object.keys(active).length>1?'s':''} playing` : 'Click a sound to start'}
          </div>
        </div>
        {anyActive && (
          <button onClick={toggleMute} style={{ padding:'5px 10px', background: muted ? 'rgba(239,68,68,0.1)' : 'var(--surface-2)', border:`1px solid ${muted ? 'rgba(239,68,68,0.3)' : 'var(--border-strong)'}`, borderRadius:8, color: muted ? '#F87171' : 'var(--text-2)', cursor:'pointer', display:'flex', alignItems:'center', gap:6, fontSize:11 }}>
            {muted ? <VolumeX size={13}/> : <Volume2 size={13}/>}
            {muted ? 'Unmute' : 'Mute all'}
          </button>
        )}
      </div>

      {/* Sound grid */}
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:8 }}>
        {SOUNDS.map(s => {
          const on = !!active[s.id]`
- `#1A1A1A'>/<span
  class=SpellE>api</span>/auth/me</span></code><span style='font-size:10.5pt`
- `C.popup, backdropFilter: 'blur(20px)',
      border: `1px solid ${C.outline}`, borderRadius: 14,
      padding: '10px 12px', display: 'flex', gap: 6,
      boxShadow: '0 8px 32px rgba(11,28,48,0.12)', zIndex: 100,
    }}>
      {REACTION_EMOJIS.map(emoji => (
        <button key={emoji} onClick={() => { onSelect(emoji)`

## 🔤 Typography (Fonts)
- `"Segoe UI Symbol",sans-serif`
- `"Calibri",sans-serif'>the platform owns your data.</span></strong>
<o:p></o:p></span></p>

<h3><span style='font-family:"Calibri",sans-serif`
- `"Times New Roman"'> on the contract<o:p></o:p></span></li>
 <li class=MsoNormal style='color:#1A1A1A`
- `"Times New Roman"'>Click
     the network dropdown at the top → <strong><span style='font-family:"Calibri",sans-serif'>Add
     a custom network</span></strong><o:p></o:p></span></li>
 <li class=MsoNormal style='color:#1A1A1A`
- `"Times New Roman"'>
     </span><code><span style='font-size:9.5pt'>#D4B571</span></code><span
     style='font-size:11.0pt`

## 📐 Border Radius
- `0 6px 6px 0`
- `16px`
- `50%`
- `2px`
- `4px`

## 🌤️ Shadows
- `0 1px 0 rgba(220,38,38,0.3), 0 4px 12px rgba(220,38,38,0.20)`
- `0 1px 2px rgba(0,0,0,.25)`
- `0 0 12px #4ade8066`
- `0 0 0 3px rgba(212, 175, 55, 0.12), 0 0 20px rgba(212, 175, 55, 0.08) !important`
- `0 0 40px rgba(212, 175, 55, 0.5), 0 0 80px rgba(184, 134, 11, 0.2)`
