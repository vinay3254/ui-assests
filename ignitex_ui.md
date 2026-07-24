# UI Design Details for `igniteX`

## 🎨 Colors
- `'var(--text-sec)', fontSize: 15 }}>Loading…</div>
          </div>
        ) : (
          <div className="products-grid" id="featured-grid">
            {featured.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        )}
      </section>

      {/* SALE BANNER */}
      <section id="sale-banner">
        <div className="banner-inner">
          <div className="banner-text">
            <span className="banner-badge">Limited Time</span>
            <h2>Summer Sale</h2>
            <p>Up to 40% off on selected accessories. No code needed.</p>
            <button className="btn-primary" onClick={() => navigate('/shop?tag=sale')}>Shop the Sale</button>
          </div>
          <div className="banner-visual">
            <img src="https://images.unsplash.com/photo-1512054502232-10a0a035d672?w=500&q=80" alt="Sale items" />
          </div>
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section id="new-arrivals" className="section-pad">
        <div className="section-header">
          <div>
            <p className="section-label">Just Dropped</p>
            <h2 className="section-title">New Arrivals</h2>
          </div>
          <Link to="/shop?tag=new" className="view-all">View All →</Link>
        </div>
        {arrivalsLoading ? (
          <div className="products-grid">
            <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '40px 0', color: 'var(--text-sec)', fontSize: 15 }}>Loading…</div>
          </div>
        ) : (
          <div className="products-grid" id="arrivals-grid">
            {arrivals.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        )}
      </section>

      {/* PROMOS */}
      <section id="promos" className="section-pad">
        <div className="promos-grid">
          <div className="promo-card promo-dark">
            <span className="promo-eyebrow">Crazy Deal</span>
            <h3>Buy 1<br />Get 1 Free</h3>
            <p>Select cases &amp`
- `rgba(255,255,255,0.08)`
- `rgba(212,181,113,.14)`
- `linear-gradient(135deg, #0D1210, #161A17)`
- `rgba(255,59,48,.08)`
- `#d1d5db`
- `rgba(255, 255, 255, 0.88)`
- `rgba(255,255,255,0.3)`
- `rgba(255,255,255,0.14)`
- `#1e1e2e`
- `rgba(23, 23, 23, 0.08)`
- `#444`
- `linear-gradient(135deg, #1A1208, #6F5115)`
- `#f9f9f9`
- `rgba(52,199,89,.1)`

## 🔤 Typography (Fonts)
- `monospace`
- `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`
- `Arial, sans-serif`
- `"Segoe UI", system-ui, -apple-system, sans-serif`
- `inherit`

## 📐 Border Radius
- `0 var(--r-pill) var(--r-pill) 0`
- `20px`
- `16px`
- `50%`
- `2px`

## 🌤️ Shadows
- `0 0 0 3px rgba(212,181,113,.12)`
- `0 8px 24px rgba(212,181,113,.35)`
- `0 6px 20px rgba(45, 106, 79, 0.3)`
- `0 4px 12px rgba(0 0 0 / .1)`
- `0 24px 80px rgba(0, 0, 0, 0.7)`
