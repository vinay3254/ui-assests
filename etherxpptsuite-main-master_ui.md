# UI Design Details for `ETHERXPPTSuite-main-master`

## 🎨 Colors
- `slideData.background }`
- `slide.textColor || '#1f2937', padding: '60px' }}
                onBlur={(e) => updateSlide(currentSlide, { title: e.target.innerHTML })}
                onFocus={(e) => {
                  if (e.target.textContent === 'Click to add title') {
                    e.target.innerHTML = ''`
- `#d1d5db`
- `'var(--primary-dark)', fontWeight: 800 }}
                >
                  <span className="text-sm">{(user?.name || user?.email || 'U').charAt(0).toUpperCase()}</span>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold" style={{ color: 'var(--text-light)' }}>{user?.name || 'Demo User'}</p>
                <p className="text-xs muted truncate">{user?.email || 'demo@example.com'}</p>
              </div>
            </div>

            {/* Wallet summary */}
            <div className="mt-3 flex items-center justify-between px-2 py-2 rounded" style={{ border: '1px solid rgba(240,165,0,0.04)' }}>
              <div>
                <div className="text-xs muted">Wallet Balance</div>
                <div className="text-sm font-semibold" style={{ color: 'var(--text-light)' }}>{user?.wallet?.balance != null ? `$${user.wallet.balance.toFixed(2)}` : '—'}</div>
              </div>
              <button className="btn-secondary text-sm" onClick={() => { setIsOpen(false)`
- `'#F0A500' }}>Create a new presentation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Blank Presentation */}
              <div
                onClick={() => handleCreateNew()}
                className={`cursor-pointer group bg-white rounded-xl border hover:shadow-xl transition-all duration-300 overflow-hidden`}
                style={{ pointerEvents: 'auto', borderColor: '#F0A500' }}
              >
              <div className="aspect-[4/3] bg-white flex items-center justify-center">
                <div className="text-center">
                  <svg className="w-16 h-16 mx-auto text-golden-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                  </svg>
                  <p className="text-lg font-semibold text-golden-500">Blank Presentation</p>
                  <p className="text-sm text-golden-500 mt-1 opacity-90">Start from scratch</p>
                </div>
              </div>
            </div>

            {/* Template Previews */}
            {filteredTemplates.slice(1, 4).map((template) => {
              const cover = template.slides?.[0] || {}`
- `(slideData.textColor || '#000000').replace('#', ''),
          align: 'center'
        })`
- `red`
- `#444`
- `'linear-gradient(135deg, #000000 50%, #FFFFFF 50%)' }}></span>
                      </button>
                      <span className="text-[10px] text-gray-600 dark:text-gray-400 mt-1">Text</span>
                      {showTextColorPicker && (
                        <div className="absolute top-full left-0 mt-1 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg z-50 p-3">
                          {/* Theme Colors */}
                          <div className="mb-3">
                            <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">Theme Colors</div>
                            <div className="grid grid-cols-6 gap-1">
                              {themeTextColors.flat().map((color, idx) => (
                                <button
                                  key={idx}
                                  onClick={() => {
                                    handleTextColor(color)`
- `slide.textColor || '#1f2937',
                            ...getAnimationStyle('title').style
                          }}
                          dangerouslySetInnerHTML={{ __html: slide.title }}
                        />
                      )}
                      {slide.content && (
                        <div
                          className={`absolute top-32 left-12 right-12 bottom-12 text-3xl outline-none ${getAnimationStyle('content').className}`}
                          style={{
                            color: slide.textColor || '#374151',
                            ...getAnimationStyle('content').style
                          }}
                          dangerouslySetInnerHTML={{ __html: slide.content }}
                        />
                      )}
                    </>
                  )`
- `#3b82f6`
- `currentSlideStyle.background || '#ffffff', textColor: currentSlideStyle.textColor || '#000000', layout: 'title-content', elements: [] }`
- `#E5E7EB !important`
- `#f9f9f9`
- `'var(--primary-dark)', fontWeight: 700 }}
          >
            <span className="text-sm">{(user?.name || user?.email || 'U').charAt(0).toUpperCase()}</span>
          </div>
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="dropdown-menu w-72 animate-in slide-in-from-top-2 duration-200" role="menu" aria-label="Account menu">
          {/* Header Section */}
          <div className="px-4 py-3">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-300">
                {user?.profilePhoto ? (
                  <img 
                    src={user.profilePhoto} 
                    alt={user?.name || 'Profile'}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none'`

## 🔤 Typography (Fonts)
- `'Inter', sans-serif`
- `'Inter', 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif`
- `Arial`
- `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`
- `Arial, sans-serif`

## 📐 Border Radius
- `12px`
- `8px`
- `5px`
- `50%`
- `10px`

## 🌤️ Shadows
- `0 8px 22px rgba(240,165,0,0.15)`
- `0 10px 24px rgba(240,165,0,0.04)`
- `0 8px 22px rgba(240,165,0,0.06)`
- `0 2px 10px rgba(0,0,0,0.1)`
- `0 6px 18px rgba(240,165,0,0.08)`
