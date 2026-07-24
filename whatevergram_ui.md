# UI Design Details for `whateverGram`

## 🎨 Colors
- `linear-gradient(170deg, var(--bg-top), var(--bg-bottom))`
- `#fff`
- `story.avatarColor }}>
                  {story.initials}
                </span>
              </span>
              <span>{story.username}</span>
            </button>
          ))}
        </div>

        <div className="feed">
          {posts.map((post, index) => (
            <article className="post-card glass fade-in-up" key={post.id} style={{ animationDelay: `${index * 70}ms` }}>
              <header className="post-head">
                <div className="user-block">
                  <span className="avatar" style={{ background: colorFromText(post.username) }}>
                    {initialsFromName(post.username)}
                  </span>
                  <div>
                    <p className="username">{post.username}</p>
                    <p className="muted-text">{post.location}</p>
                  </div>
                </div>
                <span className="muted-text">{timeAgo(post.createdAt)}</span>
              </header>

              <div className="post-media" style={{ "--start": post.gradientStart, "--end": post.gradientEnd }}>
                <span>visual</span>
              </div>

              <div className="post-actions">
                <button
                  className={`icon-button ${post.liked ? "active" : ""}`}
                  onClick={() => handleLike(post.id)}
                  type="button"
                  disabled={savingLikeForId === post.id}
                >
                  {post.liked ? "♥" : "♡"}
                </button>
                <button className={`icon-button ${post.saved ? "active" : ""}`} onClick={() => handleSave(post.id)} type="button">
                  {post.saved ? "▣" : "□"}
                </button>
              </div>

              <div className="post-meta">
                <p>
                  <strong>{formatCount(post.likes)}</strong> likes
                </p>
                <p>
                  <strong>{post.username}</strong> {post.caption}
                </p>
                <p className="muted-text">{formatCount(post.commentsCount)} comments</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    )`
- `#3b82f6`
- `linear-gradient(140deg, #3b82f6, #6366f1)`
- `rgba(148, 163, 184, 0.24)`
- `linear-gradient(145deg, var(--start), var(--end))`
- `rgba(255, 255, 255, 0.9)`
- `linear-gradient(145deg, #60a5fa, #a78bfa)`
- `#991b1b`
- `linear-gradient(135deg, #60a5fa, #f472b6, #a78bfa)`
- `linear-gradient(140deg, #60a5fa, #a78bfa)`
- `rgba(239, 68, 68, 0.12)`
- `rgba(255, 255, 255, 0.55)`
- `rgba(255, 255, 255, 0.95)`

## 🔤 Typography (Fonts)
- `"SF Pro Text",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif`

## 📐 Border Radius
- `12px`
- `20px`
- `16px`
- `14px`
- `999px`

## 🌤️ Shadows
- `0 8px 20px -18px rgba(15, 23, 42, 0.75)`
