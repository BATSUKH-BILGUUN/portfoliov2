 

export default function Footer() {
  return (
    <footer style={{ marginTop: 32, padding: '16px 0', borderTop: '1px solid #333', fontSize: 14, color: '#888' }}>
      <p>© {new Date().getFullYear()} My Portfolio</p>
    </footer>
  )
}
