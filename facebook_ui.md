# UI Design Details for `facebook`

## 🎨 Colors
- `'var(--bg)', color: 'var(--dark-text)',
            }}
            autoFocus
          />
          <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
            <button className="btn-primary" style={{ width: 'auto', padding: '8px 20px', fontSize: '15px' }} onClick={handleEdit}>Save</button>
            <button className="btn-ghost" onClick={() => { setEditing(false)`
- `rgba(15,23,42,0.58)`
- `rgba(249,249,251,0.74)`
- `'var(--secondary-text)', fontSize: '16px' }}>
                  {profile?.friends?.length || 0} friends
                </p>
              </div>
            </div>

            <div className="profile-actions">
              {isOwn ? (
                <button className="btn-ghost" onClick={() => setShowEditModal(true)} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <EditIcon size={16} />
                  <span>Edit profile</span>
                </button>
              ) : (
                <>
                  {friendStatus === 'friends' ? (
                    <button className="btn-ghost" onClick={handleFriendAction} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <UsersIcon size={16} />
                      <span>Connected</span>
                    </button>
                  ) : friendStatus === 'pending_sent' ? (
                    <button className="btn-ghost" disabled style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <ClockIcon size={16} />
                      <span>Pending</span>
                    </button>
                  ) : friendStatus === 'pending_received' ? (
                    <>
                      <button className="btn-primary" style={{ width: 'auto', padding: '8px 16px', fontSize: '15px', display: 'flex', alignItems: 'center', gap: '6px' }} onClick={handleFriendAction}>
                        <CheckIcon size={16} />
                        <span>Accept</span>
                      </button>
                      <button className="btn-ghost" onClick={async () => { await declineFriendRequestAPI(id)`
- `linear-gradient(135deg, #10B981, #059669)`
- `rgba(255,255,255,0.84)`
- `rgba(9,11,11,0.72)`
- `rgba(255,255,255,0.66)`
- `'var(--primary)' }}>
              <LockIcon size={26} />
            </div>
            <div>
              <h2>Find Your Account</h2>
              <p style={{ fontSize: '14px', color: 'var(--secondary-text)' }}>
                Enter your email to find your account.
              </p>
            </div>
          </div>

          <div className="auth-divider" />

          {sent ? (
            <div style={{ textAlign: 'center', padding: '20px 0' }}>
              <div className="empty-state-icon" style={{ margin: '0 auto 12px' }}>
                <MailIcon size={24} />
              </div>
              <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>Check your email</h3>
              <p style={{ color: 'var(--secondary-text)', fontSize: '14px' }}>
                We sent a password reset link to <strong>{email}</strong>
              </p>
              <Link to="/login">
                <button className="btn-primary" style={{ marginTop: '20px' }}>
                  Back to Login
                </button>
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end', marginTop: '16px' }}>
                <Link to="/login">
                  <button type="button" className="btn-ghost">Cancel</button>
                </Link>
                <button type="submit" className="btn-primary" style={{ width: 'auto', padding: '10px 24px', fontSize: '15px' }} disabled={loading}>
                  {loading ? 'Sending...' : 'Search'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )`
- `rgba(44,44,46,0.58)`
- `#e53935`
- `linear-gradient(135deg, #1877F2 0%, #6EC6FF 50%, #74B9FF 100%)`
- `activeTab === tab.key ? 'var(--primary)' : 'var(--dark-text)',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="friends-grid">
          {Array(6).fill(null).map((_, i) => (
            <div key={i} className="card" style={{ overflow: 'hidden' }}>
              <div className="skeleton" style={{ width: '100%', aspectRatio: 1 }} />
              <div style={{ padding: '8px 12px 12px' }}>
                <div className="skeleton" style={{ width: '70%', height: 16, marginBottom: '8px' }} />
                <div className="skeleton" style={{ width: '100%', height: 32, borderRadius: '6px', marginBottom: '6px' }} />
                <div className="skeleton" style={{ width: '100%', height: 32, borderRadius: '6px' }} />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          {activeTab === 'requests' && (
            <>
              {requests.length === 0 ? (
                <div className="card empty-state">
                  <div className="empty-state-icon"><UsersIcon size={24} /></div>
                  <h3>No pending requests</h3>
                  <p>New invitations will appear here as people reach out.</p>
                </div>
              ) : (
                <div className="friends-grid">
                  {requests.map(req => (
                    <FriendCard
                      key={req.from._id}
                      person={req.from}
                      action="request"
                      onAction={handleRequestAction}
                      mutual={req.from.friends?.filter(fId =>
                        (user.friends || []).some(myFId => (myFId._id || myFId) === (fId._id || fId))
                      ).length}
                    />
                  ))}
                </div>
              )}
            </>
          )}

          {activeTab === 'suggestions' && (
            <>
              {suggestions.length === 0 ? (
                <div className="card empty-state">
                  <div className="empty-state-icon"><SearchIcon size={24} /></div>
                  <h3>No suggestions right now</h3>
                  <p>The recommendation list will refill as your network expands.</p>
                </div>
              ) : (
                <div className="friends-grid">
                  {suggestions.map(person => (
                    <FriendCard
                      key={person._id}
                      person={person}
                      action="suggestion"
                      onAction={handleSuggestionAction}
                      mutual={person.mutualFriends}
                    />
                  ))}
                </div>
              )}
            </>
          )}

          {activeTab === 'friends' && (
            <>
              {friends.length === 0 ? (
                <div className="card empty-state">
                  <div className="empty-state-icon"><SparkIcon size={24} /></div>
                  <h3>Your network is still starting</h3>
                  <p>Add a few people to unlock a more active home feed and messenger list.</p>
                </div>
              ) : (
                <div className="friends-grid">
                  {friends.map(friend => (
                    <FriendCard
                      key={friend._id}
                      person={friend}
                      action="friend"
                      onAction={() => {}}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  )`
- `isUserOnline(other?._id) ? 'var(--primary)' : 'var(--secondary-text)' }}>
                      {isUserOnline(other?._id) ? 'Active now' : 'Offline'}
                    </div>
                  </div>
                </>
              )`
- `form.gender === g ? 'var(--primary-light)' : 'var(--white)',
                    borderColor: form.gender === g ? 'var(--primary)' : 'var(--border)',
                  }}>
                    {g}
                    <input
                      type="radio"
                      name="gender"
                      value={g}
                      checked={form.gender === g}
                      onChange={e => setForm({ ...form, gender: e.target.value })}
                    />
                  </label>
                ))}
              </div>
              {errors.gender && <span className="error-msg">{errors.gender}</span>}
            </div>

            <p style={{ fontSize: '12px', color: 'var(--secondary-text)', marginBottom: '16px', lineHeight: '1.4' }}>
              By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy.
            </p>

            <div style={{ textAlign: 'center' }}>
              <button type="submit" className="btn-primary" style={{ width: 'auto', padding: '12px 80px', fontSize: '17px' }} disabled={loading}>
                {loading ? 'Creating...' : 'Sign Up'}
              </button>
            </div>
          </form>

          <div style={{ textAlign: 'center', marginTop: '16px' }}>
            <Link to="/login" className="auth-link">Already have an account?</Link>
          </div>
        </div>
      </div>
    </div>
  )`

## 🔤 Typography (Fonts)
- `-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "Helvetica Neue", "Segoe UI", sans-serif`
- `inherit`

## 📐 Border Radius
- `99px`
- `20px`
- `50%`
- `22px`
- `12px`

## 🌤️ Shadows
- `0 1px 0 var(--border-light), 0 2px 12px rgba(0,0,0,0.05)`
- `0 0 0 3px rgba(229,57,53,0.12)`
- `inset 0 1px 0 rgba(255,255,255,0.4),
    var(--shadow-xl)`
- `0 18px 28px -16px rgba(11,102,255,0.52)`
- `none`
