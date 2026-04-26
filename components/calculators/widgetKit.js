import { useState } from 'react'

export const numberFmt = n => Number.isFinite(n) ? Math.round(n).toLocaleString('ko-KR') : '—'

export function Field({ label, hint, children }) {
  return (
    <label style={{ display:'block', marginBottom:14 }}>
      <span style={{ display:'block', fontSize:13, fontWeight:700, color:'#374151', marginBottom:6 }}>{label}</span>
      {children}
      {hint && <span style={{ display:'block', fontSize:11, color:'#9CA3AF', marginTop:4 }}>{hint}</span>}
    </label>
  )
}

export function NumberInput({ value, onChange, min, max, step = 1, suffix }) {
  return (
    <div style={{ display:'flex', alignItems:'center', gap:6 }}>
      <input type="number" value={value} onChange={e => onChange(Number(e.target.value))}
        min={min} max={max} step={step}
        style={{ flex:1, padding:'10px 12px', fontSize:14, border:'1px solid #E5E7EB', borderRadius:8, outline:'none' }} />
      {suffix && <span style={{ fontSize:13, color:'#64748B' }}>{suffix}</span>}
    </div>
  )
}

export function Select({ value, onChange, options }) {
  return (
    <select value={value} onChange={e => onChange(e.target.value)}
      style={{ width:'100%', padding:'10px 12px', fontSize:14, border:'1px solid #E5E7EB', borderRadius:8, background:'#fff', outline:'none' }}>
      {options.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
    </select>
  )
}

export function Result({ label, value, unit, caveat }) {
  return (
    <div style={{ marginTop:18, padding:'18px 20px', background:'linear-gradient(135deg,#EFF6FF,#E0F2FE)', borderRadius:10 }}>
      <div style={{ fontSize:12, fontWeight:700, color:'#1D4ED8', marginBottom:4 }}>{label}</div>
      <div style={{ fontSize:28, fontWeight:900, color:'#1E3A8A', letterSpacing:-0.5 }}>
        {value}{unit && <span style={{ fontSize:16, marginLeft:6, color:'#3730A3' }}>{unit}</span>}
      </div>
      {caveat && <div style={{ fontSize:12, color:'#64748B', marginTop:8 }}>{caveat}</div>}
    </div>
  )
}

export function useCalc(initial) {
  const [state, set] = useState(initial)
  const bind = key => v => set(s => ({ ...s, [key]: v }))
  return [state, bind, set]
}
