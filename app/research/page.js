import seed from '../../public/seed.json'

export default function Research() {
  return (
    <main style={{ maxWidth: 800, margin: '40px auto', fontFamily: 'system-ui', padding: 20 }}>
      <h1>Research Feed</h1>
      <a href="/">← Back</a>
      <div style={{ marginTop: 24 }}>
        {seed.map((item, i) => (
          <div key={i} style={{ border: '1px solid #ddd', padding: 16, marginBottom: 12, borderRadius: 8 }}>
            <strong>{item.tier.toUpperCase()}</strong> · {item.pillar}<br />
            <h3 style={{ margin: '8px 0' }}>{item.title}</h3>
            <p>{item.summary}</p>
            <a href={item.sourceURL} target="_blank">Source</a>
          </div>
        ))}
      </div>
    </main>
  )
}
