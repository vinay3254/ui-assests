# UI Design Details for `nexmeet`

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
- `#9aa0a6`
- `stickyPalette[notes.length % stickyPalette.length],
        },
      ])`
- `rgba(13, 13, 26, 0.7)`
- `rgba(32, 33, 36, 0.8)`
- `'rgba(13,13,26,0.95)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 20,
                  }}
                />
                <Bar dataKey="percentage" fill="#4F46E5" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Room energy over time" subtitle="Sentiment meter across the timeline">
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={timelineData}>
                <CartesianGrid stroke="rgba(255,255,255,0.08)" vertical={false} />
                <XAxis dataKey="minute" tick={{ fill: '#9ca3af', fontSize: 11 }} />
                <YAxis tick={{ fill: '#9ca3af', fontSize: 11 }} />
                <Tooltip
                  contentStyle={{
                    background: 'rgba(13,13,26,0.95)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: 20,
                  }}
                />
                <Line type="monotone" dataKey="score" stroke="#10B981" strokeWidth={3} dot={{ r: 4, fill: '#10B981' }} />
              </LineChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Participation equity score" subtitle="Who dominated and who needs a nudge">
            <ResponsiveContainer width="100%" height={280}>
              <RadarChart data={equityData}>
                <PolarGrid stroke="rgba(255,255,255,0.08)" />
                <PolarAngleAxis dataKey="name" tick={{ fill: '#9ca3af', fontSize: 11 }} />
                <Radar name="Speaking" dataKey="speaking" stroke="#06B6D4" fill="#06B6D4" fillOpacity={0.3} />
                <Radar name="Engagement" dataKey="engagement" stroke="#10B981" fill="#10B981" fillOpacity={0.22} />
              </RadarChart>
            </ResponsiveContainer>
          </ChartCard>

          <ChartCard title="Word cloud terms" subtitle="Themes repeated most in the meeting">
            <div className="flex flex-wrap gap-3">
              {meetingAnalytics.wordCloud.map((term) => (
                <span
                  key={term.word}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white/70"
                  style={{ fontSize: `${12 + term.count / 4}px` }}
                >
                  {term.word}
                </span>
              ))}
            </div>
          </ChartCard>
        </div>

        <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_0.9fr]">
          <section className="rounded-[34px] border border-white/10 bg-white/5 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
            <p className="text-xs uppercase tracking-[0.28em] text-white/35">Swimlane timeline</p>
            <div className="mt-5 space-y-4">
              {meetingAnalytics.speakingTime.map((entry, index) => (
                <div key={entry.participant} className="grid items-center gap-3 md:grid-cols-[180px_1fr_auto]">
                  <p className="text-sm font-medium text-white">{entry.participant}</p>
                  <div className="h-3 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-[linear-gradient(90deg,#4F46E5,#06B6D4)]"
                      style={{ width: `${entry.percentage * 2.2}%` }}
                    />
                  </div>
                  <span className="text-xs text-white/45">{entry.duration} min</span>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[34px] border border-white/10 bg-white/5 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
            <p className="text-xs uppercase tracking-[0.28em] text-white/35">Quality indicators</p>
            <div className="mt-5 space-y-3">
              <MetricRow label="Engagement score" value={`${meetingAnalytics.engagementScore}/100`} />
              <MetricRow label="Interruptions" value={`${meetingAnalytics.interruptionCount}`} />
              <MetricRow label="Questions raised" value={`${meetingAnalytics.participationMetrics.questionsAsked}`} />
              <MetricRow label="Action items created" value={`${meetingAnalytics.participationMetrics.actionItemsCreated}`} />
              <MetricRow label="Participation equity" value={meetingAnalytics.healthIndicators.inclusive ? 'Balanced' : 'Needs attention'} />
            </div>
          </section>
        </div>
      </main>
    </div>
  )`

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
- `0 8px 32px 0 rgba(0, 0, 0, 0.37)`
- `0 0 20px rgba(147, 51, 234, 0.4)`
