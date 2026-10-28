
import { useParams } from 'react-router-dom'
import useKoleksi from '../hooks/useKoleksi.js'

export default function Detail() {
  const { id } = useParams()
  const { items, hapus } = useKoleksi()

  const item = items.find(
    (data) => String(data.id) === String(id)
  )

  if (!item) {
    return (
      <main>
        <h1>Data tidak ditemukan</h1>
        <p>Item dengan ID tersebut tidak ditemukan.</p>
      </main>
    )
  }

  return (
    <main>
      <h1>{item.judul}</h1>
      <p>Kategori: {item.kategori}</p>

      <button
        onClick={() => {
          hapus(item.id)
          window.location.href = '/koleksi'
        }}
      >
        Hapus
      </button>
    </main>
  )
}
