# UI Design Details for `MSWord`

## 🎨 Colors
- `#2b579a !important`
- `'currentColor', borderRadius:'1px' }} />
      ))}
    </span>
  )`
- `#16a34a`
- `'none', border: 'none', color: '#e8b429', cursor: 'pointer', ...P, fontSize: 9, padding: 0, textDecoration: 'underline' }}>Re-anchor</button>
              </div>
            )}

            {/* Replies */}
            {(c.replies || []).map(reply => (
              <div key={reply._id} style={{ marginLeft: 20, marginTop: 8, paddingLeft: 10, borderLeft: '2px solid #e8e4dc' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
                  <span style={{ ...P, fontSize: 9, color: '#3a3530', fontWeight: 500 }}>{reply.author?.name || 'Unknown'}</span>
                  <span style={{ ...P, fontSize: 9, color: '#c0bbb5' }}>{relTime(reply.createdAt)}</span>
                </div>
                <p style={{ fontSize: 11, color: '#4a4540', lineHeight: 1.5, wordBreak: 'break-word' }}>{renderMentions(reply.text)}</p>
              </div>
            ))}

            {/* Reply input */}
            <div style={{ marginTop: 8, marginLeft: 20, position: 'relative' }} onClick={e => e.stopPropagation()}>
              <input
                type="text"
                placeholder="Reply… (@ to mention)"
                value={replyText[c._id] || ''}
                onChange={(e) => {
                  const value = e.target.value`
- `#18181a`
- `'#0e0e0f', borderLeft: '1px solid #1e1e20' }}>
      {/* Header */}
      <div style={{ padding: '10px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #1e1e20', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 20, height: 20, background: '#e8b429', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, color: '#0e0e0f', clipPath: 'polygon(0 0, 100% 0, 100% 75%, 82% 100%, 0 100%)' }}>✦</div>
          <span style={{ ...P, fontSize: 9, color: '#888', textTransform: 'uppercase', letterSpacing: 2 }}>AI Assistant</span>
        </div>
        <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#555', cursor: 'pointer', fontSize: 18, lineHeight: 1, padding: 0 }}>×</button>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', borderBottom: '1px solid #1e1e20', flexShrink: 0 }}>
        {['chat', 'generate', 'proofread', 'readability'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{ flex: 1, padding: '7px 0', ...P, fontSize: 8, textTransform: 'uppercase', letterSpacing: 1.5, background: 'transparent', border: 'none', cursor: 'pointer', color: activeTab === tab ? '#e8b429' : '#444', borderBottom: activeTab === tab ? '2px solid #e8b429' : '2px solid transparent', transition: 'all 0.12s' }}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'chat' && (
        <>
          <div style={{ flex: 1, overflowY: 'auto', padding: 12, display: 'flex', flexDirection: 'column', gap: 10 }} className="thin-scroll">
            {messages.map((msg, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start' }}>
                <div style={{
                  maxWidth: '85%',
                  padding: '8px 12px',
                  background: msg.role === 'user' ? '#e8b429' : '#1a1a1c',
                  color: msg.role === 'user' ? '#0e0e0f' : '#c8c4bc',
                  fontSize: 12,
                  lineHeight: 1.55,
                  wordBreak: 'break-word',
                  ...P,
                }}>
                  <p style={{ margin: 0 }}>{msg.content}</p>
                  {msg.role === 'assistant' && (
                    <button
                      onClick={() => onInsertContent(msg.content)}
                      style={{ marginTop: 6, ...P, fontSize: 9, color: '#e8b429', background: 'none', border: 'none', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: 1, padding: 0 }}
                    >
                      + Insert into doc
                    </button>
                  )}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{ background: '#1a1a1c', padding: '8px 12px', ...P, fontSize: 12, color: '#555' }}>
                  <span style={{ animation: 'pulse 1.5s infinite' }}>thinking…</span>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>
          <div style={{ padding: '10px 12px', borderTop: '1px solid #1e1e20', display: 'flex', gap: 8, flexShrink: 0 }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && !e.shiftKey && sendMessage()}
              placeholder="Ask about your document…"
              style={{ flex: 1, ...P, fontSize: 11, padding: '8px 10px', background: '#161618', border: '1px solid #2a2a2c', color: '#f5f2eb', outline: 'none' }}
              onFocus={e => e.target.style.borderColor = '#e8b429'}
              onBlur={e => e.target.style.borderColor = '#2a2a2c'}
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              style={{ ...P, fontSize: 9, padding: '0 14px', background: input.trim() && !loading ? '#e8b429' : '#1a1a1c', color: input.trim() && !loading ? '#0e0e0f' : '#444', border: 'none', cursor: input.trim() && !loading ? 'pointer' : 'not-allowed', textTransform: 'uppercase', letterSpacing: 1, transition: 'all 0.12s', flexShrink: 0 }}
            >
              Send
            </button>
          </div>
        </>
      )}

      {activeTab === 'generate' && (
        <div style={{ padding: 14, display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
          <select
            value={generateType}
            onChange={e => setGenerateType(e.target.value)}
            style={{ width: '100%', ...P, fontSize: 10, padding: '8px 10px', background: '#161618', border: '1px solid #2a2a2c', color: '#c8c4bc', outline: 'none' }}
          >
            {['document', 'report', 'essay', 'email', 'cover letter', 'resume', 'blog post', 'meeting notes'].map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          <textarea
            value={generatePrompt}
            onChange={e => setGeneratePrompt(e.target.value)}
            placeholder="Describe what you want to generate…"
            rows={7}
            style={{ width: '100%', ...P, fontSize: 11, padding: '8px 10px', background: '#161618', border: '1px solid #2a2a2c', color: '#c8c4bc', outline: 'none', resize: 'none', boxSizing: 'border-box' }}
            onFocus={e => e.target.style.borderColor = '#e8b429'}
            onBlur={e => e.target.style.borderColor = '#2a2a2c'}
          />
          <button
            onClick={runGenerate}
            disabled={loading || !generatePrompt.trim()}
            style={{ width: '100%', padding: '10px', ...P, fontSize: 10, background: loading || !generatePrompt.trim() ? '#1a1a1c' : '#e8b429', color: loading || !generatePrompt.trim() ? '#444' : '#0e0e0f', border: 'none', cursor: loading || !generatePrompt.trim() ? 'not-allowed' : 'pointer', textTransform: 'uppercase', letterSpacing: 1.5, transition: 'all 0.12s' }}
          >
            {loading ? 'Generating…' : '✦ Generate Document'}
          </button>
        </div>
      )}

      {activeTab === 'proofread' && (
        <div style={{ padding: 14, flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 10 }} className="thin-scroll">
          <button
            onClick={runProofread}
            disabled={loading}
            style={{ width: '100%', padding: '10px', ...P, fontSize: 10, background: loading ? '#1a1a1c' : '#e8b429', color: loading ? '#444' : '#0e0e0f', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', textTransform: 'uppercase', letterSpacing: 1.5 }}
          >
            {loading ? 'Proofreading…' : '⌕ Proofread Document'}
          </button>
          {proofreadResults.length > 0 ? proofreadResults.map((s, i) => (
            <div key={i} style={{ border: '1px solid #2a2a2c', padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 4 }}>
              <div style={{ ...P, fontSize: 9, textTransform: 'uppercase', letterSpacing: 1, color: s.type === 'grammar' ? '#f87171' : s.type === 'style' ? '#60a5fa' : '#fbbf24' }}>{s.type}</div>
              <div style={{ ...P, fontSize: 11, color: '#555', textDecoration: 'line-through' }}>{s.original}</div>
              <div style={{ ...P, fontSize: 11, color: '#4ade80' }}>{s.suggestion}</div>
              <div style={{ fontSize: 10, color: '#555', lineHeight: 1.5 }}>{s.explanation}</div>
            </div>
          )) : (
            <p style={{ ...P, fontSize: 10, color: '#444', textAlign: 'center', marginTop: 12 }}>Click proofread to analyze your document</p>
          )}
        </div>
      )}

      {activeTab === 'readability' && (
        <div style={{ padding: 14, flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 12 }} className="thin-scroll">
          <button
            onClick={runReadability}
            disabled={loading}
            style={{ width: '100%', padding: '10px', ...P, fontSize: 10, background: loading ? '#1a1a1c' : '#e8b429', color: loading ? '#444' : '#0e0e0f', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', textTransform: 'uppercase', letterSpacing: 1.5 }}
          >
            {loading ? 'Analyzing…' : '◈ Check Readability'}
          </button>
          {readabilityData && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ textAlign: 'center', padding: '16px 0' }}>
                <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 56, fontWeight: 700, fontStyle: 'italic', color: '#e8b429', lineHeight: 1 }}>{readabilityData.score}</div>
                <div style={{ ...P, fontSize: 9, color: '#555', textTransform: 'uppercase', letterSpacing: 1.5, marginTop: 6 }}>Readability Score</div>
                <div style={{ ...P, fontSize: 10, color: '#888', marginTop: 4 }}>{readabilityData.level}</div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                <div style={{ background: '#161618', border: '1px solid #2a2a2c', padding: '12px 8px', textAlign: 'center' }}>
                  <div style={{ ...P, fontSize: 18, fontWeight: 500, color: '#f5f2eb' }}>{readabilityData.avgSentenceLength}</div>
                  <div style={{ ...P, fontSize: 8, color: '#555', textTransform: 'uppercase', letterSpacing: 1, marginTop: 4 }}>Avg sentence</div>
                </div>
                <div style={{ background: '#161618', border: '1px solid #2a2a2c', padding: '12px 8px', textAlign: 'center' }}>
                  <div style={{ ...P, fontSize: 18, fontWeight: 500, color: '#f5f2eb' }}>{readabilityData.avgWordLength}</div>
                  <div style={{ ...P, fontSize: 8, color: '#555', textTransform: 'uppercase', letterSpacing: 1, marginTop: 4 }}>Avg word</div>
                </div>
              </div>
              {readabilityData.suggestions?.length > 0 && (
                <div>
                  <div style={{ ...P, fontSize: 9, color: '#888', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 8 }}>Suggestions</div>
                  {readabilityData.suggestions.map((s, i) => (
                    <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
                      <span style={{ color: '#e8b429', flexShrink: 0 }}>·</span>
                      <span style={{ fontSize: 11, color: '#888', lineHeight: 1.5 }}>{s}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      <style>{`@keyframes pulse { 0%,100%{opacity:0.4} 50%{opacity:1} }`}</style>
    </div>
  )`
- `'#0e0e0f', clipPath: 'polygon(0 0, 100% 0, 100% 75%, 82% 100%, 0 100%)' }}>✦</div>
          <span style={{ ...P, fontSize: 9, color: '#888', textTransform: 'uppercase', letterSpacing: 2 }}>AI Assistant</span>
        </div>
        <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#555', cursor: 'pointer', fontSize: 18, lineHeight: 1, padding: 0 }}>×</button>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', borderBottom: '1px solid #1e1e20', flexShrink: 0 }}>
        {['chat', 'generate', 'proofread', 'readability'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{ flex: 1, padding: '7px 0', ...P, fontSize: 8, textTransform: 'uppercase', letterSpacing: 1.5, background: 'transparent', border: 'none', cursor: 'pointer', color: activeTab === tab ? '#e8b429' : '#444', borderBottom: activeTab === tab ? '2px solid #e8b429' : '2px solid transparent', transition: 'all 0.12s' }}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 'chat' && (
        <>
          <div style={{ flex: 1, overflowY: 'auto', padding: 12, display: 'flex', flexDirection: 'column', gap: 10 }} className="thin-scroll">
            {messages.map((msg, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start' }}>
                <div style={{
                  maxWidth: '85%',
                  padding: '8px 12px',
                  background: msg.role === 'user' ? '#e8b429' : '#1a1a1c',
                  color: msg.role === 'user' ? '#0e0e0f' : '#c8c4bc',
                  fontSize: 12,
                  lineHeight: 1.55,
                  wordBreak: 'break-word',
                  ...P,
                }}>
                  <p style={{ margin: 0 }}>{msg.content}</p>
                  {msg.role === 'assistant' && (
                    <button
                      onClick={() => onInsertContent(msg.content)}
                      style={{ marginTop: 6, ...P, fontSize: 9, color: '#e8b429', background: 'none', border: 'none', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: 1, padding: 0 }}
                    >
                      + Insert into doc
                    </button>
                  )}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <div style={{ background: '#1a1a1c', padding: '8px 12px', ...P, fontSize: 12, color: '#555' }}>
                  <span style={{ animation: 'pulse 1.5s infinite' }}>thinking…</span>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>
          <div style={{ padding: '10px 12px', borderTop: '1px solid #1e1e20', display: 'flex', gap: 8, flexShrink: 0 }}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && !e.shiftKey && sendMessage()}
              placeholder="Ask about your document…"
              style={{ flex: 1, ...P, fontSize: 11, padding: '8px 10px', background: '#161618', border: '1px solid #2a2a2c', color: '#f5f2eb', outline: 'none' }}
              onFocus={e => e.target.style.borderColor = '#e8b429'}
              onBlur={e => e.target.style.borderColor = '#2a2a2c'}
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              style={{ ...P, fontSize: 9, padding: '0 14px', background: input.trim() && !loading ? '#e8b429' : '#1a1a1c', color: input.trim() && !loading ? '#0e0e0f' : '#444', border: 'none', cursor: input.trim() && !loading ? 'pointer' : 'not-allowed', textTransform: 'uppercase', letterSpacing: 1, transition: 'all 0.12s', flexShrink: 0 }}
            >
              Send
            </button>
          </div>
        </>
      )}

      {activeTab === 'generate' && (
        <div style={{ padding: 14, display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
          <select
            value={generateType}
            onChange={e => setGenerateType(e.target.value)}
            style={{ width: '100%', ...P, fontSize: 10, padding: '8px 10px', background: '#161618', border: '1px solid #2a2a2c', color: '#c8c4bc', outline: 'none' }}
          >
            {['document', 'report', 'essay', 'email', 'cover letter', 'resume', 'blog post', 'meeting notes'].map(t => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          <textarea
            value={generatePrompt}
            onChange={e => setGeneratePrompt(e.target.value)}
            placeholder="Describe what you want to generate…"
            rows={7}
            style={{ width: '100%', ...P, fontSize: 11, padding: '8px 10px', background: '#161618', border: '1px solid #2a2a2c', color: '#c8c4bc', outline: 'none', resize: 'none', boxSizing: 'border-box' }}
            onFocus={e => e.target.style.borderColor = '#e8b429'}
            onBlur={e => e.target.style.borderColor = '#2a2a2c'}
          />
          <button
            onClick={runGenerate}
            disabled={loading || !generatePrompt.trim()}
            style={{ width: '100%', padding: '10px', ...P, fontSize: 10, background: loading || !generatePrompt.trim() ? '#1a1a1c' : '#e8b429', color: loading || !generatePrompt.trim() ? '#444' : '#0e0e0f', border: 'none', cursor: loading || !generatePrompt.trim() ? 'not-allowed' : 'pointer', textTransform: 'uppercase', letterSpacing: 1.5, transition: 'all 0.12s' }}
          >
            {loading ? 'Generating…' : '✦ Generate Document'}
          </button>
        </div>
      )}

      {activeTab === 'proofread' && (
        <div style={{ padding: 14, flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 10 }} className="thin-scroll">
          <button
            onClick={runProofread}
            disabled={loading}
            style={{ width: '100%', padding: '10px', ...P, fontSize: 10, background: loading ? '#1a1a1c' : '#e8b429', color: loading ? '#444' : '#0e0e0f', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', textTransform: 'uppercase', letterSpacing: 1.5 }}
          >
            {loading ? 'Proofreading…' : '⌕ Proofread Document'}
          </button>
          {proofreadResults.length > 0 ? proofreadResults.map((s, i) => (
            <div key={i} style={{ border: '1px solid #2a2a2c', padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 4 }}>
              <div style={{ ...P, fontSize: 9, textTransform: 'uppercase', letterSpacing: 1, color: s.type === 'grammar' ? '#f87171' : s.type === 'style' ? '#60a5fa' : '#fbbf24' }}>{s.type}</div>
              <div style={{ ...P, fontSize: 11, color: '#555', textDecoration: 'line-through' }}>{s.original}</div>
              <div style={{ ...P, fontSize: 11, color: '#4ade80' }}>{s.suggestion}</div>
              <div style={{ fontSize: 10, color: '#555', lineHeight: 1.5 }}>{s.explanation}</div>
            </div>
          )) : (
            <p style={{ ...P, fontSize: 10, color: '#444', textAlign: 'center', marginTop: 12 }}>Click proofread to analyze your document</p>
          )}
        </div>
      )}

      {activeTab === 'readability' && (
        <div style={{ padding: 14, flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 12 }} className="thin-scroll">
          <button
            onClick={runReadability}
            disabled={loading}
            style={{ width: '100%', padding: '10px', ...P, fontSize: 10, background: loading ? '#1a1a1c' : '#e8b429', color: loading ? '#444' : '#0e0e0f', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', textTransform: 'uppercase', letterSpacing: 1.5 }}
          >
            {loading ? 'Analyzing…' : '◈ Check Readability'}
          </button>
          {readabilityData && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ textAlign: 'center', padding: '16px 0' }}>
                <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 56, fontWeight: 700, fontStyle: 'italic', color: '#e8b429', lineHeight: 1 }}>{readabilityData.score}</div>
                <div style={{ ...P, fontSize: 9, color: '#555', textTransform: 'uppercase', letterSpacing: 1.5, marginTop: 6 }}>Readability Score</div>
                <div style={{ ...P, fontSize: 10, color: '#888', marginTop: 4 }}>{readabilityData.level}</div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                <div style={{ background: '#161618', border: '1px solid #2a2a2c', padding: '12px 8px', textAlign: 'center' }}>
                  <div style={{ ...P, fontSize: 18, fontWeight: 500, color: '#f5f2eb' }}>{readabilityData.avgSentenceLength}</div>
                  <div style={{ ...P, fontSize: 8, color: '#555', textTransform: 'uppercase', letterSpacing: 1, marginTop: 4 }}>Avg sentence</div>
                </div>
                <div style={{ background: '#161618', border: '1px solid #2a2a2c', padding: '12px 8px', textAlign: 'center' }}>
                  <div style={{ ...P, fontSize: 18, fontWeight: 500, color: '#f5f2eb' }}>{readabilityData.avgWordLength}</div>
                  <div style={{ ...P, fontSize: 8, color: '#555', textTransform: 'uppercase', letterSpacing: 1, marginTop: 4 }}>Avg word</div>
                </div>
              </div>
              {readabilityData.suggestions?.length > 0 && (
                <div>
                  <div style={{ ...P, fontSize: 9, color: '#888', textTransform: 'uppercase', letterSpacing: 1.5, marginBottom: 8 }}>Suggestions</div>
                  {readabilityData.suggestions.map((s, i) => (
                    <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
                      <span style={{ color: '#e8b429', flexShrink: 0 }}>·</span>
                      <span style={{ fontSize: 11, color: '#888', lineHeight: 1.5 }}>{s}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      <style>{`@keyframes pulse { 0%,100%{opacity:0.4} 50%{opacity:1} }`}</style>
    </div>
  )`
- `#b91c1c`
- `'#ef4444', cursor: 'pointer', fontSize: 18, lineHeight: 1, padding: 0 }}
                >×</button>
              </div>
            )}

            {loading ? (
              <div className="dash-loading">
                <div className="dash-spinner" />
                <span className="dash-loading-text">Loading documents</span>
              </div>
            ) : shownDocs.length === 0 ? (
              <div className="dash-empty">
                <div className="dash-empty-glyph">
                  {showTrash ? '∅' : '◻'}
                </div>
                <div className="dash-empty-title">
                  {showTrash ? 'Trash is empty' : 'No documents yet'}
                </div>
                <div className="dash-empty-sub">
                  {showTrash ? 'Deleted documents will appear here' : 'Create a new document to get started'}
                </div>
              </div>
            ) : (
              <div className="dash-grid">
                {shownDocs.map((doc, i) => (
                  <div
                    key={doc._id}
                    className="dash-card"
                    style={{ animationDelay: `${Math.min(i * 40, 300)}ms` }}
                  >
                    {/* Thumbnail */}
                    <div onClick={() => !showTrash && navigate(`/docs/${doc._id}`)}>
                      <DocThumbLazy content={doc.content} />
                    </div>

                    {/* Body */}
                    <div className="dash-card-body">
                      <div className="dash-card-title-wrap">
                        {editingId === doc._id ? (
                          <input
                            autoFocus
                            className="dash-card-title-input"
                            value={editingTitle}
                            onChange={e => setEditingTitle(e.target.value)}
                            onBlur={() => saveRename(doc._id)}
                            onKeyDown={e => {
                              if (e.key === 'Enter') saveRename(doc._id)`
- `'rgba(0,0,0,0.42)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:50 }}
          onClick={e => { if (e.target === e.currentTarget) { setShowTableDlg(false)`
- `'#c0bbb5', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: 1 }}>Delete</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )`
- `'#e8b429', cursor: 'pointer', ...P, fontSize: 9, padding: 0, textDecoration: 'underline' }}>Re-anchor</button>
              </div>
            )}

            {/* Replies */}
            {(c.replies || []).map(reply => (
              <div key={reply._id} style={{ marginLeft: 20, marginTop: 8, paddingLeft: 10, borderLeft: '2px solid #e8e4dc' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
                  <span style={{ ...P, fontSize: 9, color: '#3a3530', fontWeight: 500 }}>{reply.author?.name || 'Unknown'}</span>
                  <span style={{ ...P, fontSize: 9, color: '#c0bbb5' }}>{relTime(reply.createdAt)}</span>
                </div>
                <p style={{ fontSize: 11, color: '#4a4540', lineHeight: 1.5, wordBreak: 'break-word' }}>{renderMentions(reply.text)}</p>
              </div>
            ))}

            {/* Reply input */}
            <div style={{ marginTop: 8, marginLeft: 20, position: 'relative' }} onClick={e => e.stopPropagation()}>
              <input
                type="text"
                placeholder="Reply… (@ to mention)"
                value={replyText[c._id] || ''}
                onChange={(e) => {
                  const value = e.target.value`
- `#444`
- `#3b82f6`
- `rgba(255, 235, 59, 0.7)`

## 🔤 Typography (Fonts)
- `Calibri,sans-serif`
- `Calibri, sans-serif`
- `'Fraunces', serif`
- `'Fira Code', monospace`
- `serif`

## 📐 Border Radius
- `0 !important`
- `12px`
- `8px`
- `0 0 1px 1px`
- `6px`

## 🌤️ Shadows
- `0 2px 8px rgba(0, 0, 0, 0.15)`
- `0 0 0 3px rgba(232, 180, 41, 0.08)`
- `3px 3px 0 #0e0e0f`
- `4px 4px 0 rgba(14,14,15,0.12)`
- `8px 8px 0 #0e0e0f`
