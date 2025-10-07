import React from 'react'

export default function App(){
  const waLink = "https://wa.me/254715722359?text=Hi%20Laundry%20Spot%2C%20I%27d%20like%20to%20book%20a%20pickup."
  return (
    <div>
      <header>
        <div className="logo-row">
          <Logo />
          <div className="site-title">Laundry Spot</div>
        </div>
        <nav>
          <a href="#services">Services</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">Why Choose Us</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <h2>We Wash, Fold & Deliver — Freshness at Your Doorstep</h2>
        <p>Clean clothes, free pickup, and on-time delivery in Rongai, Gataka & Cooperative University.</p>
        <a className="cta" href={waLink} target="_blank" rel="noreferrer">📦 Book Pickup on WhatsApp</a>
      </section>

      <section id="services" className="section">
        <h3 style={{textAlign:'center',fontSize:28,fontWeight:700,marginBottom:18}}>Our Services</h3>
        <div className="services-grid">
          <div className="card">
            <div style={{fontSize:36}}>👕</div>
            <h4>Washing</h4>
            <p>Professional washing for all fabrics.</p>
          </div>
          <div className="card">
            <div style={{fontSize:36}}>📦</div>
            <h4>Folding</h4>
            <p>Neatly folded clothes, ready to wear.</p>
          </div>
          <div className="card">
            <div style={{fontSize:36}}>🚚</div>
            <h4>Pickup & Delivery</h4>
            <p>We collect, clean & deliver at no extra cost.</p>
          </div>
        </div>
      </section>

      <section id="pricing" className="section" style={{background:'rgba(30,64,175,0.12)'}}>
        <h3 style={{textAlign:'center',fontSize:28,fontWeight:700,marginBottom:18}}>Pricing</h3>
        <div className="pricing-grid">
          <div className="price-card"><h4>Full Basket</h4><p>Ksh 300</p></div>
          <div className="price-card"><h4>Duvet (4×6)</h4><p>Ksh 300</p></div>
          <div className="price-card"><h4>Duvet (5×6)</h4><p>Ksh 350</p></div>
          <div className="price-card"><h4>Fluffy Carpet</h4><p>Ksh 250</p></div>
          <div className="price-card"><h4>Jackets</h4><p>Ksh 40 each</p></div>
        </div>
        <p style={{textAlign:'center',marginTop:14,opacity:0.95}}>Pickup & Delivery — <strong>FREE</strong></p>
      </section>

      <section id="about" className="section">
        <h3 style={{textAlign:'center',fontSize:28,fontWeight:700,marginBottom:12}}>Why Choose Laundry Spot?</h3>
        <p className="about">We’re your trusted local laundry team — fast, affordable, and always fresh. From Gataka to Cooperative University, we make sure your laundry experience is smooth and stress-free.</p>
      </section>

      <section id="contact" className="section" style={{background:'rgba(13,42,88,0.16)'}}>
        <h3 style={{textAlign:'center',fontSize:28,fontWeight:700,marginBottom:12}}>Get in Touch</h3>
        <div className="contact">
          <div className="info">
            <div>📞 0715 722 359</div>
            <div>📍 Gataka — serving Rongai, Gataka, Cooperative University & nearby areas</div>
            <a className="cta" href={waLink} target="_blank" rel="noreferrer" style={{marginTop:12}}>💬 Message Us on WhatsApp</a>
          </div>
        </div>
      </section>

      <footer className="footer">© {new Date().getFullYear()} Laundry Spot. All Rights Reserved.</footer>
    </div>
  )
}

function Logo(){
  return (
    <svg width="44" height="44" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{flex:'0 0 44px'}}>
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#38bdf8"/>
          <stop offset="100%" stopColor="#1d4ed8"/>
        </linearGradient>
      </defs>
      <path d="M32 4C22 16 10 28 10 42C10 52 20 60 32 60C44 60 54 52 54 42C54 28 42 16 32 4Z" fill="url(#g1)"/>
      <path d="M32 20L40 24L36 40H28L24 24L32 20Z" fill="white" stroke="#e0f2fe" strokeWidth="1"/>
    </svg>
  )
}
