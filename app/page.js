'use client'
import { useState } from 'react'

export default function Home() {
  const [age, setAge] = useState('')
  const [goal, setGoal] = useState('peptides')

  return (
    <main style={{ maxWidth: 800, margin: '40px auto', fontFamily: 'system-ui', padding: 20 }}>
      <h1>Aetherion Longevity</h1>
      <p>Profile intake for tiered protocols across four pillars.</p>

      <div style={{ margin: '24px 0' }}>
        <label>Age<br />
          <input value={age} onChange={e => setAge(e.target.value)} type="number" style={{ padding: 8, width: 120 }} />
        </label>
      </div>

      <div style={{ margin: '24px 0' }}>
        <label>Primary pillar<br />
          <select value={goal} onChange={e => setGoal(e.target.value)} style={{ padding: 8 }}>
            <option value="peptides">Peptides</option>
            <option value="food">Food</option>
            <option value="exercise">Exercise</option>
            <option value="technology">Technology</option>
          </select>
        </label>
      </div>

      <div style={{ marginTop: 32 }}>
        <h2>Your focus: {goal}</h2>
        <p>Tiers: Proven · Promising · Hypothetical · Frontier</p>
        <a href="/research">View research feed →</a>
      </div>
    </main>
  )
}
