
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { expect, test } from 'vitest'

import App from './App.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import KartuItem from './components/KartuItem.jsx'
import TidakDitemukan from './pages/TidakDitemukan.jsx'

// Test 1: Header menampilkan judul dan menu navigasi
test('Header menampilkan judul dan menu navigasi', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>,
  )

  expect(screen.getByText('Daftar Tugas')).toBeInTheDocument()
  expect(screen.getByRole('link', { name: 'Beranda' })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: 'Koleksi' })).toBeInTheDocument()
})

// Test 2: Footer menampilkan informasi UTS
test('Footer menampilkan informasi UTS', () => {
  render(<Footer />)

  expect(
    screen.getByText('Ujian Tengah Semester Pengembangan Aplikasi Web'),
  ).toBeInTheDocument()
})

// Test 3: KartuItem menampilkan informasi kegiatan
test('KartuItem menampilkan informasi kegiatan', () => {
  const item = {
    id: '1',
    judul: 'Seminar Informatics Festival',
    kategori: 'Seminar',
    tanggal: '6 Oktober 2026',
    lokasi: 'Aula GK1',
    penyelenggara: 'HMIF ITERA',
  }

  render(
    <MemoryRouter>
      <KartuItem item={item} />
    </MemoryRouter>,
  )

  expect(screen.getByText('Seminar Informatics Festival')).toBeInTheDocument()
  expect(screen.getByText('Kategori: Seminar')).toBeInTheDocument()
  expect(screen.getByText('Tanggal: 6 Oktober 2026')).toBeInTheDocument()
  expect(screen.getByText('Lokasi: Aula GK1')).toBeInTheDocument()
  expect(screen.getByText('Penyelenggara: HMIF ITERA')).toBeInTheDocument()
})

// Test 4: Halaman TidakDitemukan menampilkan pesan 404
test('Halaman TidakDitemukan menampilkan pesan 404', () => {
  render(
    <MemoryRouter>
      <TidakDitemukan />
    </MemoryRouter>,
  )

  expect(screen.getByRole('heading', { name: '404' })).toBeInTheDocument()
  expect(screen.getByText('Halaman tidak ditemukan.')).toBeInTheDocument()
})

// Test 5: Rute tidak dikenal menampilkan halaman 404 melalui App
test('Rute tidak dikenal menampilkan 404', () => {
  render(
    <MemoryRouter initialEntries={['/tidak-ada']}>
      <App />
    </MemoryRouter>,
  )

  expect(screen.getByRole('heading', { name: '404' })).toBeInTheDocument()
})
