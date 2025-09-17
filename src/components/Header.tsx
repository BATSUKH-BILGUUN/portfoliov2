import React from 'react'

type HeaderProps = {
  name: string
}

export default function Header({ name }: HeaderProps) {
  return (
    <header style={{ position: 'sticky', top: 0, backdropFilter: 'blur(8px)', background: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 0', zIndex: 10 }}>
      <a href="#home" style={{ fontWeight: 800, fontSize: 18 }}>{name}</a>
      <nav style={{ display: 'flex', gap: 16 }}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}
