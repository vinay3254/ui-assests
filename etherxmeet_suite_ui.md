# UI Design Details for `EtherxMeet_suite`

## 🎨 Colors
- `radial-gradient(circle, rgba(212,175,55,0.08) 0%, rgba(20,20,20,0) 65%)`
- `'text-green-400', 
      bg: 'bg-green-400/20' 
    },
    'ahead': { 
      icon: <TrendingUp />, 
      label: 'Ahead of Schedule', 
      color: 'text-blue-400', 
      bg: 'bg-blue-400/20' 
    },
    'behind': { 
      icon: <TrendingDown />, 
      label: 'Behind Schedule', 
      color: 'text-orange-400', 
      bg: 'bg-orange-400/20' 
    },
  }`
- `note.color,
                    }}
                  />
                ))}

              {laser.visible && (
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="absolute h-5 w-5 rounded-full bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.8)]"
                  style={{ left: laser.x - 10, top: laser.y - 10 }}
                />
              )}

              {remoteCursors.map((cursor) => (
                <motion.div
                  key={cursor.id}
                  animate={{ x: cursor.x, y: cursor.y }}
                  className="absolute left-0 top-0"
                >
                  <div className="rounded-full px-2 py-1 text-xs text-white shadow-[0_10px_24px_rgba(4,8,24,0.4)]" style={{ background: cursor.color }}>
                    {cursor.name}
                  </div>
                  <div className="ml-2 h-3 w-3 rounded-full" style={{ background: cursor.color }} />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex w-full max-w-[260px] flex-col gap-4 rounded-[28px] border border-white/10 bg-white/5 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-white/35">Board controls</p>
              <div className="mt-3 flex items-center gap-2">
                <Button variant="outline" onClick={() => setZoom((previous) => Math.max(0.6, previous - 0.1))}>
                  <ZoomOut className="h-4 w-4" />
                </Button>
                <div className="rounded-2xl border border-white/10 bg-black/10 px-4 py-2 text-sm text-white/70">
                  {Math.round(zoom * 100)}%
                </div>
                <Button variant="outline" onClick={() => setZoom((previous) => Math.min(1.8, previous + 0.1))}>
                  <ZoomIn className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-white/35">Color & stroke</p>
              <div className="mt-3 flex gap-2">
                {['#4F46E5', '#06B6D4', '#10B981', '#EF4444', '#F59E0B'].map((swatch) => (
                  <button
                    key={swatch}
                    onClick={() => setColor(swatch)}
                    className={`h-8 w-8 rounded-full border ${color === swatch ? 'border-white' : 'border-white/10'}`}
                    style={{ background: swatch }}
                  />
                ))}
              </div>
              <input
                className="mt-4 w-full"
                type="range"
                min="2"
                max="20"
                value={strokeSize}
                onChange={(event) => setStrokeSize(Number(event.target.value))}
              />
            </div>

            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-white/35">Layers</p>
              <div className="mt-3 space-y-2">
                {Object.entries(layers).map(([key, enabled]) => (
                  <button
                    key={key}
                    onClick={() => setLayers((previous) => ({ ...previous, [key]: !previous[key] }))}
                    className={`flex w-full items-center justify-between rounded-[18px] border px-3 py-2 text-sm capitalize ${
                      enabled ? 'border-cyan-400/20 bg-cyan-400/10 text-cyan-100' : 'border-white/10 bg-black/10 text-white/55'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <PanelRightOpen className="h-4 w-4" />
                      {key}
                    </span>
                    <span>{enabled ? 'Visible' : 'Hidden'}</span>
                  </button>
                ))}
              </div>
            </div>

            <label className="cursor-pointer rounded-[22px] border border-white/10 bg-black/10 px-4 py-3 text-sm text-white/65">
              <div className="flex items-center gap-2">
                <ImagePlus className="h-4 w-4" />
                Upload image
              </div>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(event) => {
                  const file = event.target.files?.[0]`
- `rgba(20, 20, 20, 0.65)`
- `'#fff', position: 'relative' }}>
        <div className="aurora-bg aurora-subtle" aria-hidden="true" />
        <TopBar />

        <main style={{ maxWidth: 1450, margin: '0 auto', padding: '24px 24px 60px', display: 'flex', flexDirection: 'column', gap: 24 }}>

          {/* ── Hero ── */}
          <div style={{
            borderRadius: 28,
            border: `1px solid ${BORDER}`,
            background: 'linear-gradient(135deg,rgba(19,21,32,0.97),rgba(10,11,16,0.92))',
            padding: '28px 32px',
            boxShadow: '0 24px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)',
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
              <div>
                <p style={{ fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(212,181,113,0.45)', margin: 0 }}>
                  Smart Recording Studio
                </p>
                <h1 style={{ margin: '8px 0 0', fontSize: 32, fontWeight: 700, letterSpacing: '-0.04em', color: '#fff', fontFamily: 'Syne, sans-serif' }}>
                  Search the room after the room
                </h1>
                <p style={{ margin: '10px 0 0', fontSize: 13, lineHeight: 1.7, color: 'rgba(255,255,255,0.7)', maxWidth: 480 }}>
                  Browse chaptered recordings, jump through transcript moments, and share structured playback.
                </p>
              </div>
              <div style={{ display: 'flex', gap: 10, flexShrink: 0 }}>
                <div style={{
                  borderRadius: 16, border: `1px solid ${BORDER}`,
                  background: 'rgba(255,255,255,0.04)',
                  padding: '14px 20px', textAlign: 'center', minWidth: 90,
                }}>
                  <p style={{ margin: 0, fontSize: 26, fontWeight: 700, color: '#fff' }}>{recordings.length}</p>
                  <p style={{ margin: '4px 0 0', fontSize: 11, color: 'rgba(255,255,255,0.65)' }}>Recordings</p>
                </div>
              </div>
            </div>

            {/* Search */}
            <div style={{ marginTop: 20, position: 'relative' }}>
              <Search style={{
                position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)',
                width: 15, height: 15, color: 'rgba(255,255,255,0.25)', pointerEvents: 'none',
              }} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search recordings by name…"
                style={{
                  width: '100%', boxSizing: 'border-box',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.09)',
                  borderRadius: 14,
                  padding: '11px 16px 11px 40px',
                  fontSize: 13, color: '#fff',
                  outline: 'none',
                  fontFamily: 'DM Sans, sans-serif',
                }}
              />
            </div>
          </div>

          {/* ── Two-column layout ── */}
          <div style={{ display: 'grid', gap: 20, gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.2fr)' }}>

            {/* Left column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>



              {/* Saved recordings list */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                  <p style={{ margin: 0, fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)' }}>
                    Saved recordings
                  </p>
                  <button
                    onClick={fetchRecordings}
                    title="Refresh"
                    style={{
                      background: 'none', border: 'none', cursor: 'pointer', padding: 4,
                      color: 'rgba(255,255,255,0.6)', display: 'flex', alignItems: 'center',
                    }}
                  >
                    <RefreshCw style={{ width: 13, height: 13, animation: recLoading ? 'spin 0.8s linear infinite' : 'none' }} />
                  </button>
                </div>
                {filteredRecordings.length === 0 ? (
                  <div style={{
                    borderRadius: 22, border: '1px dashed rgba(255,255,255,0.1)',
                    padding: '40px 24px', textAlign: 'center',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12,
                  }}>
                    <div style={{
                      width: 52, height: 52, borderRadius: '50%',
                      background: 'rgba(255,255,255,0.04)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Video style={{ width: 22, height: 22, color: 'rgba(255,255,255,0.2)' }} />
                    </div>
                    <p style={{ margin: 0, fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.65)' }}>No recordings yet</p>
                    <p style={{ margin: 0, fontSize: 11, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, maxWidth: 220 }}>
                      {recLoading ? 'Loading…' : 'Join a meeting → click Record → stop to save here'}
                    </p>
                  </div>
                ) : (
                  <motion.div style={{ display: 'flex', flexDirection: 'column', gap: 10 }} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    {filteredRecordings.map((recording) => {
                      const selected = selectedRecording?.id === recording.id`
- `radial-gradient(ellipse at 50% 45%, rgba(60, 55, 70, 0.45) 0%, rgba(13, 13, 13, 0) 65%)`
- `linear-gradient(90deg,
    transparent 0%,
    #2d2a24 15%,
    #c39a20 35%,
    #d4af37 55%,
    #b8860b 75%,
    transparent 100%
  )`
- `#f0f0f0`
- `rgba(0, 0, 0, 0.97)`
- `n.color, size: n.size,
  font: n.font, title: n.title,
  _community: n.community, _community_name: n.community_name,
  _source_file: n.source_file, _file_type: n.file_type, _degree: n.degree,
})))`
- `#d4af37 !important`
- `#000000`
- `rgba(255, 255, 255, 0.35)`
- `'#141414', color: '#fff', position: 'relative' }}>
        <div className="aurora-bg aurora-subtle" aria-hidden="true" />
        <TopBar />

        <main style={{ maxWidth: 1450, margin: '0 auto', padding: '24px 24px 60px', display: 'flex', flexDirection: 'column', gap: 24 }}>

          {/* ── Hero ── */}
          <div style={{
            borderRadius: 28,
            border: `1px solid ${BORDER}`,
            background: 'linear-gradient(135deg,rgba(19,21,32,0.97),rgba(10,11,16,0.92))',
            padding: '28px 32px',
            boxShadow: '0 24px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)',
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
              <div>
                <p style={{ fontSize: 11, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(212,181,113,0.45)', margin: 0 }}>
                  Smart Recording Studio
                </p>
                <h1 style={{ margin: '8px 0 0', fontSize: 32, fontWeight: 700, letterSpacing: '-0.04em', color: '#fff', fontFamily: 'Syne, sans-serif' }}>
                  Search the room after the room
                </h1>
                <p style={{ margin: '10px 0 0', fontSize: 13, lineHeight: 1.7, color: 'rgba(255,255,255,0.7)', maxWidth: 480 }}>
                  Browse chaptered recordings, jump through transcript moments, and share structured playback.
                </p>
              </div>
              <div style={{ display: 'flex', gap: 10, flexShrink: 0 }}>
                <div style={{
                  borderRadius: 16, border: `1px solid ${BORDER}`,
                  background: 'rgba(255,255,255,0.04)',
                  padding: '14px 20px', textAlign: 'center', minWidth: 90,
                }}>
                  <p style={{ margin: 0, fontSize: 26, fontWeight: 700, color: '#fff' }}>{recordings.length}</p>
                  <p style={{ margin: '4px 0 0', fontSize: 11, color: 'rgba(255,255,255,0.65)' }}>Recordings</p>
                </div>
              </div>
            </div>

            {/* Search */}
            <div style={{ marginTop: 20, position: 'relative' }}>
              <Search style={{
                position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)',
                width: 15, height: 15, color: 'rgba(255,255,255,0.25)', pointerEvents: 'none',
              }} />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search recordings by name…"
                style={{
                  width: '100%', boxSizing: 'border-box',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.09)',
                  borderRadius: 14,
                  padding: '11px 16px 11px 40px',
                  fontSize: 13, color: '#fff',
                  outline: 'none',
                  fontFamily: 'DM Sans, sans-serif',
                }}
              />
            </div>
          </div>

          {/* ── Two-column layout ── */}
          <div style={{ display: 'grid', gap: 20, gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.2fr)' }}>

            {/* Left column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>



              {/* Saved recordings list */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                  <p style={{ margin: 0, fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.75)' }}>
                    Saved recordings
                  </p>
                  <button
                    onClick={fetchRecordings}
                    title="Refresh"
                    style={{
                      background: 'none', border: 'none', cursor: 'pointer', padding: 4,
                      color: 'rgba(255,255,255,0.6)', display: 'flex', alignItems: 'center',
                    }}
                  >
                    <RefreshCw style={{ width: 13, height: 13, animation: recLoading ? 'spin 0.8s linear infinite' : 'none' }} />
                  </button>
                </div>
                {filteredRecordings.length === 0 ? (
                  <div style={{
                    borderRadius: 22, border: '1px dashed rgba(255,255,255,0.1)',
                    padding: '40px 24px', textAlign: 'center',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12,
                  }}>
                    <div style={{
                      width: 52, height: 52, borderRadius: '50%',
                      background: 'rgba(255,255,255,0.04)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Video style={{ width: 22, height: 22, color: 'rgba(255,255,255,0.2)' }} />
                    </div>
                    <p style={{ margin: 0, fontSize: 13, fontWeight: 500, color: 'rgba(255,255,255,0.65)' }}>No recordings yet</p>
                    <p style={{ margin: 0, fontSize: 11, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6, maxWidth: 220 }}>
                      {recLoading ? 'Loading…' : 'Join a meeting → click Record → stop to save here'}
                    </p>
                  </div>
                ) : (
                  <motion.div style={{ display: 'flex', flexDirection: 'column', gap: 10 }} variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    {filteredRecordings.map((recording) => {
                      const selected = selectedRecording?.id === recording.id`
- `rgba(220, 50, 40, 0.22)`

## 🔤 Typography (Fonts)
- `'Inter', system-ui, sans-serif`
- `'Inter', sans-serif`
- `sans-serif">WebGL not supported</p>'`
- `'DM Sans', sans-serif`
- `-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`

## 📐 Border Radius
- `9px`
- `12px`
- `9999px`
- `8px`
- `0`

## 🌤️ Shadows
- `0 4px 15px rgba(212, 175, 55, 0.25)`
- `0 0 0 2px rgba(212,175,55,0.25)`
- `0 40px 100px rgba(0, 0, 0, 0.65), inset 0 1px 0 rgba(255, 255, 255, 0.05)`
- `0 0 12px rgba(212, 175, 55, 0.15)`
- `0 0 40px rgba(212,175,55,0.15)`
