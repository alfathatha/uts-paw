import { Link } from 'react-router-dom'

export default function KartuItem({ item }) {
  const { id, judul, kategori, tanggal, lokasi, penyelenggara } = item

  return (
    <article className="kartu">
      <h3>{judul}</h3>
      <p>Kategori: {kategori}</p>
      <p>Tanggal: {tanggal}</p>
      <p>Lokasi: {lokasi}</p>
      <p>Penyelenggara: {penyelenggara}</p>
      <Link to={`/koleksi/${id}`}>Lihat detail</Link>
    </article>
  )
}