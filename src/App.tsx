import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Section from './components/Section'

export default function App() {
  return (
    <div>
      <Header name="Bilguun" />
      <main>
        <Section id="home" title="Сайн байна уу, би Bilguun 👋">
          <p style={{ fontSize: 18, opacity: 0.9 }}>Front-end developer | React, TypeScript, UI/UX
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 16, flexWrap: 'wrap' }}>
            <a href="#projects" style={{ padding: '10px 14px', borderRadius: 10, background: 'linear-gradient(135deg, #7C3AED, #06B6D4)', color: 'white' }}>Төслүүдийг үзэх</a>
            <a href="#contact" style={{ padding: '10px 14px', borderRadius: 10, border: '1px solid #333' }}>Холбоо барих</a>
          </div>
        </Section>
        <Section id="about" title="Тухай">
          <p>React болон TypeScript-ээр UI-г хурдан, цэвэр, дахин ашиглагдахуйц байдлаар бүтээдэг. Гүйцэтгэл, хүртээмж, UX-д анхаардаг.</p>
        </Section>
        <Section id="projects" title="Төслүүд">
          <div className="projects-grid">
            <article className="card">
              <h3>Portfolio 2025</h3>
              <p>React + Vite дээр суурилсан минимал, түргэн портфолио.</p>
              <div className="tags"><span>React</span><span>TypeScript</span><span>Vite</span></div>
            </article>
            <article className="card">
              <h3>UI Components</h3>
              <p>Компонентын сан: товч, карт, modal зэрэг UI хэсгүүд.</p>
              <div className="tags"><span>Design</span><span>Accessibility</span></div>
            </article>
            <article className="card">
              <h3>API Dashboard</h3>
              <p>REST API-тай холбогддог lightweight dashboard.</p>
              <div className="tags"><span>React Query</span><span>Charts</span></div>
            </article>
          </div>
        </Section>
        <Section id="contact" title="Холбоо барих">
          <p>Email: <a href="mailto:bebe.itgelt@gmail.com">bebe.itgelt@gmail.com</a></p>
          <p>GitHub: <a href="https://github.com/your-handle" target="_blank" rel="noreferrer">github.com/your-handle</a></p>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
