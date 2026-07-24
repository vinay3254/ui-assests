# UI Design Details for `MSWord-Clone`

## 🎨 Colors
- `"rgba(212,181,113,0.25)", fontFamily: "var(--font-cinzel)" }}
              >
                ✦
              </div>
            ))}

            <p
              className="mb-4 text-xs tracking-[0.3em] uppercase"
              style={{ fontFamily: "var(--font-cinzel)", color: "rgba(212,181,113,0.4)" }}
            >
              ✦ &nbsp`
- `rgba(212, 181, 113, 0.6)`
- `rgba(212, 181, 113, 0.2)`
- `cmdCopied ? "rgba(212,181,113,0.08)" : "transparent",
                  letterSpacing: "0.1em",
                }}
              >
                {cmdCopied ? "Copied ✓" : "Copy"}
              </button>
            </div>
          </div>

          {/* Stats */}
          <div
            className="animate-fade-in mt-12 flex items-center gap-8 text-center"
            style={{ animationDelay: "0.8s" }}
          >
            {[
              { val: "3.8k", label: "Stars" },
              { val: "486", label: "Forks" },
              { val: "7+", label: "Agents" },
            ].map(({ val, label }) => (
              <div key={label} className="flex flex-col gap-1">
                <span
                  className="text-gold text-2xl font-bold"
                  style={{ fontFamily: "var(--font-cinzel)" }}
                >
                  {val}
                </span>
                <span
                  className="text-xs tracking-[0.15em] uppercase"
                  style={{ fontFamily: "var(--font-cinzel)", color: "rgba(212,181,113,0.35)" }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── FEATURES ───────────────────────────── */}
        <section id="features" className="relative py-28 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <p
                className="mb-3 text-xs tracking-[0.3em] uppercase"
                style={{ fontFamily: "var(--font-cinzel)", color: "rgba(212,181,113,0.4)" }}
              >
                ✦ &nbsp`
- `rgba(212, 181, 113, 0.06)`
- `"rgba(15,17,17,0.6)",
                    fontFamily: "var(--font-cinzel)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(212,181,113,0.5)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.color = "#D4B571"`
- `#f0d898`
- `"linear-gradient(135deg, #D4B571, #6F5115)", color: "#090B0B" }}
              >
                ✦
              </div>
              <span
                className="text-xs tracking-[0.2em] uppercase"
                style={{ fontFamily: "var(--font-cinzel)", color: "rgba(212,181,113,0.4)" }}
              >
                Aurum Cloner
              </span>
            </div>
            <p
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "0.9rem",
                color: "rgba(212,181,113,0.3)",
                fontStyle: "italic",
              }}
            >
              MIT License · Built on the shoulders of extraordinary agents
            </p>
            <div className="flex items-center gap-1">
              {["◈", "◇", "◆"].map((g, i) => (
                <span
                  key={i}
                  className="text-xs"
                  style={{ color: `rgba(212,181,113,${0.2 + i * 0.15})` }}
                >
                  {g}
                </span>
              ))}
            </div>
          </div>
        </footer>
      </main>
    </>
  )`
- `"#e8dfc8",
                  letterSpacing: "0.05em",
                }}
              >
                Four Steps to{" "}
                <span className="text-gold-gradient">Perfection</span>
              </h2>
              <div className="divider-gold mt-6 max-w-xs mx-auto" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
              {STEPS.map(({ num, label, detail }, i) => (
                <div key={num} className="relative flex flex-col items-center text-center px-6 py-8 group">
                  {/* Connector line */}
                  {i < STEPS.length - 1 && (
                    <div
                      className="hidden lg:block absolute top-10 left-1/2 w-full h-px"
                      style={{
                        background: "linear-gradient(90deg, rgba(212,181,113,0.3), rgba(212,181,113,0.05))",
                        transform: "translateX(0)",
                      }}
                    />
                  )}
                  {/* Circle */}
                  <div
                    className="relative z-10 w-16 h-16 rounded-sm flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-105"
                    style={{
                      border: "1px solid rgba(212,181,113,0.3)",
                      background: "rgba(111,81,21,0.12)",
                      boxShadow: "0 0 0 0 rgba(212,181,113,0)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(212,181,113,0.2)"`
- `linear-gradient(135deg, #D4B571 0%, #a8894e 50%, #6F5115 100%)`
- `"linear-gradient(90deg, rgba(212,181,113,0.3), rgba(212,181,113,0.05))",
                        transform: "translateX(0)",
                      }}
                    />
                  )}
                  {/* Circle */}
                  <div
                    className="relative z-10 w-16 h-16 rounded-sm flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-105"
                    style={{
                      border: "1px solid rgba(212,181,113,0.3)",
                      background: "rgba(111,81,21,0.12)",
                      boxShadow: "0 0 0 0 rgba(212,181,113,0)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(212,181,113,0.2)"`
- `linear-gradient(135deg, #f0d898 0%, #D4B571 40%, #6F5115 70%, #D4B571 100%)`
- `"rgba(168,137,78,0.75)",
                fontStyle: "italic",
              }}
            >
              The most sophisticated AI cloning pipeline available.
              Open source. Production ready. Endlessly capable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-gold px-10 py-4 rounded-sm relative z-10">
                <span className="relative z-10">Launch the Template</span>
              </button>
              <button className="btn-ghost-gold px-10 py-4 rounded-sm">
                Read the Docs
              </button>
            </div>
          </div>
        </section>

        {/* ── FOOTER ─────────────────────────────── */}
        <footer
          className="py-10 px-6"
          style={{ borderTop: "1px solid rgba(212,181,113,0.08)" }}
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div
                className="w-6 h-6 rounded-sm flex items-center justify-center text-xs"
                style={{ background: "linear-gradient(135deg, #D4B571, #6F5115)", color: "#090B0B" }}
              >
                ✦
              </div>
              <span
                className="text-xs tracking-[0.2em] uppercase"
                style={{ fontFamily: "var(--font-cinzel)", color: "rgba(212,181,113,0.4)" }}
              >
                Aurum Cloner
              </span>
            </div>
            <p
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "0.9rem",
                color: "rgba(212,181,113,0.3)",
                fontStyle: "italic",
              }}
            >
              MIT License · Built on the shoulders of extraordinary agents
            </p>
            <div className="flex items-center gap-1">
              {["◈", "◇", "◆"].map((g, i) => (
                <span
                  key={i}
                  className="text-xs"
                  style={{ color: `rgba(212,181,113,${0.2 + i * 0.15})` }}
                >
                  {g}
                </span>
              ))}
            </div>
          </div>
        </footer>
      </main>
    </>
  )`
- `linear-gradient(135deg, #f5e4a8 0%, #D4B571 50%, #8a6520 100%)`
- `"#D4B571",
                      filter: "drop-shadow(0 0 8px rgba(212,181,113,0.3))",
                    }}
                  >
                    {icon}
                  </div>
                  <h3
                    className="mb-3 text-gold"
                    style={{
                      fontFamily: "var(--font-cinzel)",
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "1.05rem",
                      color: "rgba(168,137,78,0.75)",
                      lineHeight: "1.6",
                    }}
                  >
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ───────────────────────── */}
        <section id="how-it-works" className="py-28 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <p
                className="mb-3 text-xs tracking-[0.3em] uppercase"
                style={{ fontFamily: "var(--font-cinzel)", color: "rgba(212,181,113,0.4)" }}
              >
                ✦ &nbsp`

## 🔤 Typography (Fonts)
- `"Cinzel", serif`

## 📐 Border Radius
- `2px`

## 🌤️ Shadows
- `0 0 0 0 rgba(212, 181, 113, 0)`
- `0 0 20px rgba(212, 181, 113, 0.1)`
- `0 8px 40px rgba(212, 181, 113, 0.06)`
- `0 0 24px 4px rgba(212, 181, 113, 0.2)`
