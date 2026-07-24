# UI Design Details for `instagram`

## 🎨 Colors
- `#000`
- `rgba(115, 115, 115, 0.5)`

## 🔤 Typography (Fonts)
- `Georgia,serif] text-[31px] tracking-tight text-white">
                  Instagram
                </p>
              </div>
            </div>

            <nav className="space-y-1 xl:hidden">
              {desktopNavItems.map((item) => (
                <SidebarButton
                  key={item.id}
                  icon={item.icon}
                  label={item.label}
                  active={item.active}
                  collapsed={true}
                  avatar={item.avatar}
                  onClick={() => handleNavAction(item.id)}
                />
              ))}
            </nav>

            <nav className="hidden space-y-1 xl:block">
              {desktopNavItems.map((item) => (
                <SidebarButton
                  key={`${item.id}-expanded`}
                  icon={item.icon}
                  label={item.label}
                  active={item.active}
                  collapsed={false}
                  avatar={item.avatar}
                  onClick={() => handleNavAction(item.id)}
                />
              ))}
            </nav>
          </div>
        </aside>

        <div className="relative flex min-h-[100dvh] flex-1 flex-col">
          <header className="sticky top-0 z-20 flex items-center justify-between border-b border-white/10 bg-black/95 px-4 py-4 backdrop-blur md:hidden">
            <p className="[font-family:Georgia,serif] text-[30px] tracking-tight text-white">Instagram</p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => togglePanel("notifications")}
                className="rounded-full p-2 text-white transition hover:bg-white/[0.06] active:scale-[0.96]"
              >
                <Heart className="h-6 w-6" strokeWidth={2} />
              </button>
              <button
                onClick={openCreateModal}
                className="rounded-full p-2 text-white transition hover:bg-white/[0.06] active:scale-[0.96]"
              >
                <SquarePlus className="h-6 w-6" strokeWidth={2} />
              </button>
            </div>
          </header>

          <main className="flex-1 pb-[72px] pt-0 md:pb-0 md:pt-8">{renderCurrentPage()}</main>

          <nav className="fixed inset-x-0 bottom-0 z-20 border-t border-white/10 bg-black/95 px-6 py-3 backdrop-blur md:hidden">
            <div className="flex items-center justify-between">
              {mobileNavItems.map((item) => {
                const Icon = item.icon`
- `'Segoe_Script',cursive] text-[34px] tracking-tight text-white xl:block">
                Instagram
              </p>
              <span className="text-xl font-semibold tracking-tight xl:hidden">IG</span>
            </button>
          </div>

          <nav className="flex flex-1 flex-col gap-1">
            {navItems.map((item) => {
              const Icon = item.icon`
- `'Segoe_Script',cursive] text-[28px] text-white">Instagram</p>
                <div className="flex gap-1">
                  <span className="h-2 w-2 rounded-full bg-white/40" />
                  <span className="h-2 w-2 rounded-full bg-white/20" />
                </div>
              </div>
              <div className="flex-1 space-y-4 bg-[radial-gradient(circle_at_top,rgba(214,41,118,0.15),transparent_32%),radial-gradient(circle_at_bottom,rgba(250,126,30,0.18),transparent_30%)] px-4 py-5">
                <div className="rounded-[24px] border border-border bg-[#101010] p-3">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="story-ring">
                      <div className="rounded-full bg-black p-[2px]">
                        <div
                          className="h-8 w-8 rounded-full bg-cover bg-center"
                          style={{
                            backgroundImage:
                              "url('https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=160&q=80')",
                          }}
                        />
                      </div>
                    </div>
                    <div>
                      <p className="text-xs font-semibold">ava.studio</p>
                      <p className="text-[11px] text-[#a8a8a8]">New York</p>
                    </div>
                  </div>
                  <div
                    className="aspect-[4/5] rounded-[18px] bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80')",
                    }}
                  />
                </div>
                <div className="ml-auto w-[78%] rounded-[22px] border border-border bg-[#101010] p-3">
                  <div
                    className="aspect-square rounded-[18px] bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80')",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[350px]">
          <div className="border border-border bg-black px-10 py-8">
            <div className="text-center">
              <p className="[font-family:'Segoe_Script',cursive] text-[48px] text-white">Instagram</p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-2.5">
              <input
                value={form.email}
                onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                type="email"
                placeholder="Phone number, username, or email"
                className="ig-input"
              />
              <input
                value={form.password}
                onChange={(event) => setForm((current) => ({ ...current, password: event.target.value }))}
                type="password"
                placeholder="Password"
                className="ig-input"
              />

              {error ? <p className="pt-1 text-sm text-[#ff7d91]">{error}</p> : null}

              <button
                type="submit"
                disabled={submitting}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-accentSoft disabled:cursor-not-allowed disabled:opacity-70"
              >
                <span>{submitting ? "Signing in..." : "Sign in"}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <div className="my-6 flex items-center gap-4">
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[#a8a8a8]">or</span>
              <div className="h-px flex-1 bg-border" />
            </div>

            <p className="text-center text-sm text-[#a8a8a8]">
              Sign in to see photos and videos from your friends.
            </p>
          </div>

          <div className="mt-3 border border-border bg-black px-6 py-5 text-center text-sm text-[#f5f5f5]">
            Don’t have an account?{" "}
            <Link to="/register" className="font-semibold text-accent hover:text-accentSoft">
              Sign up
            </Link>
          </div>

          <p className="mt-6 text-center text-xs text-[#737373]">
            Meta · About · Blog · Jobs · Help · API · Privacy · Terms
          </p>
        </section>
      </div>
    </div>
  )`
- `'Segoe_Script',cursive] text-[31px] tracking-tight text-white">
              Instagram
            </p>
            <div className="flex items-center gap-1">
              <NavLink to="/notifications" className="relative rounded-full p-2 text-white">
                <Bell className="h-6 w-6" weight={location.pathname === "/notifications" ? "fill" : "regular"} />
                {unreadNotifications ? (
                  <span className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full bg-accent" />
                ) : null}
              </NavLink>
              <NavLink to="/messages" className="relative rounded-full p-2 text-white">
                <MessengerLogo className="h-6 w-6" weight={location.pathname === "/messages" ? "fill" : "regular"} />
                {unreadMessages ? (
                  <span className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full bg-accent" />
                ) : null}
              </NavLink>
              <button onClick={() => setComposerOpen(true)} className="rounded-full p-2 text-white">
                <PlusSquare className="h-6 w-6" />
              </button>
            </div>
          </header>

          <main className="flex-1 pb-[63px] lg:pb-0">
            <Outlet
              context={{
                openComposer: () => setComposerOpen(true),
                composerTick,
                savedPostIds,
                toggleSaved,
                sharePost,
                showToast,
                refreshChrome,
              }}
            />
          </main>

          <nav className="fixed inset-x-0 bottom-0 z-20 border-t border-border bg-black/95 px-4 py-3 backdrop-blur lg:hidden">
            <div className="flex items-center justify-between">
              <NavLink to="/" end className="rounded-full p-2 text-white">
                {({ isActive }) => <House className="h-7 w-7" weight={isActive ? "fill" : "regular"} />}
              </NavLink>
              <NavLink to="/search" className="rounded-full p-2 text-white">
                {({ isActive }) => <MagnifyingGlass className="h-7 w-7" weight={isActive ? "fill" : "regular"} />}
              </NavLink>
              <NavLink to="/explore" className="rounded-full p-2 text-white">
                {({ isActive }) => <Compass className="h-7 w-7" weight={isActive ? "fill" : "regular"} />}
              </NavLink>
              <button onClick={() => setComposerOpen(true)} className="rounded-full p-2 text-white">
                <PlusSquare className="h-7 w-7" />
              </button>
              <NavLink to="/reels" className="rounded-full p-2 text-white">
                {({ isActive }) => <FilmSlate className="h-7 w-7" weight={isActive ? "fill" : "regular"} />}
              </NavLink>
              <NavLink to={`/profile/${user?.username}`} className="rounded-full p-2 text-white">
                <img src={user?.avatar} alt={user?.username} className="h-7 w-7 rounded-full object-cover" />
              </NavLink>
            </div>
          </nav>
        </div>
      </div>

      <CreatePostModal
        open={composerOpen}
        onClose={() => setComposerOpen(false)}
        onCreated={handlePostCreated}
      />

      {toast ? (
        <div className="fixed bottom-24 left-1/2 z-50 -translate-x-1/2 rounded-full border border-border bg-[#1f1f1f] px-4 py-2 text-sm font-medium text-white shadow-lifted lg:bottom-8">
          {toast}
        </div>
      ) : null}
    </div>
  )`
- `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`

## 📐 Border Radius
- `999px`

## 🌤️ Shadows
- No specific shadows found.
