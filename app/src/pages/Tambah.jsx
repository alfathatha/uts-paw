
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'

export default function Tambah() {
  const navigate = useNavigate()
  const { tambah } = useKoleksi()
  const [judul, setJudul] = useState('')
  const [kategori, setKategori] = useState('')
  const [error, setError] = useState('')

  function simpan(e) {
    e.preventDefault()

    if (!judul.trim()) {
      setError('Judul wajib diisi.')
      return
    }

    tambah({
      judul: judul.trim(),
      kategori: kategori.trim(),
    })

    navigate('/koleksi')
  }

  return (
    <main>
      <h1>Tambah Koleksi</h1>

      <form onSubmit={simpan}>
        <label htmlFor="judul">Judul</label>
        <input
          id="judul"
          value={judul}
          onChange={(e) => setJudul(e.target.value)}
        />

        <label htmlFor="kategori">Kategori</label>
        <input
          id="kategori"
          value={kategori}
          onChange={(e) => setKategori(e.target.value)}
        />

        {error && <p role="alert">{error}</p>}

        <button type="submit">Simpan</button>
      </form>
    </main>
  )
}
