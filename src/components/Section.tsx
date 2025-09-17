import type { PropsWithChildren } from 'react'

type SectionProps = PropsWithChildren<{
  id: string
  title: string
}>

export default function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} style={{ margin: '56px 0', textAlign: 'left' }}>
      <h2 style={{ marginBottom: 12, letterSpacing: 0.2 }}>{title}</h2>
      <div>{children}</div>
    </section>
  )
}
