# UI Design Details for `Etherx-Video-Conferencing`

## 🎨 Colors
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
- `rgba(19, 19, 43, 0.8)`
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
- `linear-gradient(135deg, #9333ea 0%, #ec4899 100%)`
- `linear-gradient(180deg, rgba(15, 20, 36, 0.66), rgba(9, 13, 24, 0.58))`
- `#090B0B`
- `'#9aa0a6' }}>{clock}</span>

          <button
            type="button"
            onClick={handleHelp}
            aria-label="Help"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '9999px',
              border: 'none',
              background: 'rgba(255,255,255,0.12)',
              color: '#e8eaed',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              lineHeight: 1,
            }}
          >
            ?
          </button>

          <button
            type="button"
            onClick={handleLogout}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '14px',
              color: '#8ab4f8',
              cursor: 'pointer',
              padding: 0,
            }}
          >
            Logout
          </button>

          <div
            aria-label="User avatar"
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '9999px',
              background: '#1a73e8',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 600,
              fontSize: '14px',
            }}
          >
            {userInitial}
          </div>
        </div>
      </nav>

      <div className="flex-1 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl"
      >
        <div className="glass-card p-8 rounded-2xl">
          <h1 className="text-3xl font-bold text-white mb-2 text-center">
            Join Meeting
          </h1>
          <p className="text-purple-200 text-center mb-8">
            Set up your camera and microphone before joining
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left: Preview Panel */}
            <div className="space-y-4">
              {/* Video Preview */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: stream ? 1 : 0.7 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-video bg-dark-900/50 rounded-xl overflow-hidden border border-purple-500/20"
              >
                {stream ? (
                  <>
                    <video
                      ref={videoRef}
                      autoPlay
                      playsInline
                      muted
                      className={`w-full h-full object-cover ${!isVideoEnabled ? 'hidden' : ''}`}
                    />
                    {!isVideoEnabled && (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-purple-900/50 to-indigo-900/50">
                        <div className="text-center">
                          <div className={`w-20 h-20 rounded-full ${AVATAR_COLORS.find(c => c.name === avatarColor)?.bg} flex items-center justify-center text-white text-2xl font-bold mx-auto mb-2`}>
                            {displayName.charAt(0).toUpperCase() || 'U'}
                          </div>
                          <p className="text-white/70">Camera is off</p>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white/50">
                      {mediaError ? (
                        <div className="px-4">
                          <VideoOff className="w-12 h-12 mx-auto mb-2 text-red-400" />
                          <p className="text-sm text-red-400">{mediaError}</p>
                        </div>
                      ) : (
                        <>
                          <div className="animate-pulse">
                            <Video className="w-12 h-12 mx-auto mb-2" />
                            <p>Requesting camera access...</p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Audio Visualizer */}
              {stream && isAudioEnabled && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <AudioVisualizer stream={stream} height={40} />
                </motion.div>
              )}

              {/* Media Controls */}
              <div className="flex gap-3 justify-center">
                <Button
                  variant={isVideoEnabled ? 'primary' : 'danger'}
                  onClick={toggleVideo}
                  disabled={!stream}
                  className="flex-1"
                >
                  {isVideoEnabled ? <Video className="w-5 h-5" /> : <VideoOff className="w-5 h-5" />}
                  <span className="ml-2">{isVideoEnabled ? 'Camera On' : 'Camera Off'}</span>
                </Button>
                <Button
                  variant={isAudioEnabled ? 'primary' : 'danger'}
                  onClick={toggleAudio}
                  disabled={!stream}
                  className="flex-1"
                >
                  {isAudioEnabled ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
                  <span className="ml-2">{isAudioEnabled ? 'Mic On' : 'Mic Off'}</span>
                </Button>
              </div>

              {/* Device Selection */}
              {stream && (
                <div className="space-y-3">
                  <DeviceSelector
                    label="Camera"
                    devices={devices.cameras}
                    onSelect={(deviceId) => switchDevice('video', deviceId)}
                  />
                  <DeviceSelector
                    label="Microphone"
                    devices={devices.microphones}
                    onSelect={(deviceId) => switchDevice('audio', deviceId)}
                  />
                </div>
              )}
            </div>

            {/* Right: Form */}
            <div className="space-y-6">
              {/* Name Input */}
              <div>
                <Input
                  label="Your Name"
                  type="text"
                  placeholder="Enter your name"
                  value={displayName}
                  onChange={handleNameChange}
                  error={nameError}
                />
              </div>

              {/* Avatar Color Picker */}
              <div>
                <label className="block text-sm font-medium text-white/90 mb-3">
                  Avatar Color
                </label>
                <div className="flex gap-2 flex-wrap">
                  {AVATAR_COLORS.map((color) => (
                    <motion.button
                      key={color.name}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setAvatarColor(color.name)}
                      className={`
                        w-12 h-12 rounded-full ${color.bg}
                        flex items-center justify-center
                        transition-all duration-200
                        ${avatarColor === color.name 
                          ? `ring-4 ring-white/50 shadow-xl ${color.glow}` 
                          : 'hover:ring-2 hover:ring-white/30'
                        }
                      `}
                    >
                      {avatarColor === color.name && (
                        <Check className="w-6 h-6 text-white" />
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Meeting Code Input */}
              <div>
                <Input
                  label="Meeting Code"
                  type="text"
                  placeholder="XXX-XXXX-XXX"
                  value={meetingCode}
                  onChange={handleCodeChange}
                  error={codeError}
                />
                <p className="mt-1.5 text-xs text-purple-300/70">
                  Format: XXX-XXXX-XXX (e.g., ABC-1234-XYZ)
                </p>
              </div>

              {/* Join Button */}
              <Button
                variant="primary"
                className="w-full text-lg py-3"
                onClick={handleJoinMeeting}
                disabled={isJoining || !displayName.trim() || !meetingCode.trim()}
                loading={isJoining}
              >
                {isJoining ? 'Joining...' : 'Join Meeting'}
              </Button>

              {/* Footer */}
              <p className="text-xs text-center text-purple-300/70">
                By joining, you agree to our Terms of Service
              </p>
            </div>
          </div>
        </div>
      </motion.div>
      </div>
    </div>
  )`
- `#090b0b`
- `#1b1c1c`
- `'app-primary' },
  { id: 'word', name: 'Word Association', icon: MessageCircle, description: 'Word cloud game', color: 'app-secondary' },
  { id: 'truths', name: '2 Truths 1 Lie', icon: Brain, description: 'Guess the lie', color: 'app-ai' },
  { id: 'trivia', name: 'Trivia Quiz', icon: Trophy, description: '5 questions', color: 'yellow-400' },
  { id: 'emoji', name: 'Emoji Mood Check', icon: Smile, description: 'How are you feeling?', color: 'pink-400' },
  { id: 'speed', name: 'Speed Networking', icon: Users, description: '2-min 1-on-1s', color: 'purple-400' },
]`
- `rgba(10, 10, 25, 0.5)`
- `linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent)`
- `#9aa0a6`
- `stickyPalette[notes.length % stickyPalette.length],
        },
      ])`
- `rgba(13, 13, 26, 0.7)`

## 🔤 Typography (Fonts)
- `'Syne', sans-serif`
- `"Google Sans", Roboto, sans-serif`
- `'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif`
- `source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace`

## 📐 Border Radius
- `12px`
- `9999px`
- `8px`
- `50%`
- `999px`

## 🌤️ Shadows
- `0 22px 60px rgba(2, 6, 18, 0.38),
      inset 0 1px 0 rgba(255, 255, 255, 0.08),
      inset 0 -1px 0 rgba(212, 175, 55, 0.08)`
- `0 0 0 10px rgba(212, 175, 55, 0.02)`
- `0 18px 40px rgba(2, 6, 18, 0.25),
      inset 0 1px 0 rgba(255, 255, 255, 0.08)`
- `0 0 0 0 rgba(212, 181, 113, 0.4)`
- `0 8px 32px 0 rgba(0, 0, 0, 0.37)`
