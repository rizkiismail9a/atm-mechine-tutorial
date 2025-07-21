<script setup>
import AppFooter from '@/components/AppFooter.vue'
import HomeButton from '@/components/Home/HomeButton.vue'
import HomeSideBar from '@/components/Home/HomeSideBar.vue'
import { ref } from 'vue'

const menuLinks = ref([
  {
    link: '/withdrawal',
    label: 'Tarik Tunai',
  },
  {
    link: '/transfer',
    label: 'Transfer',
  },
])
</script>

<template>
  <HomeSideBar />
  <div class="home-content">
    <div class="warning-box">
      <strong>Perhatian!</strong><br />
      Ini adalah simulasi dan hanya untuk kebutuhan edukasi. Jangan pernah bagikan informasi pribadi
      Anda ke siapapun!
    </div>
    <div class="home-card">
      <h1>Belajar Menggunakan Mesin ATM dengan Mudah</h1>

      <!-- Apa itu Mesin ATM -->
      <section id="about-atm">
        <h2>Apa itu Mesin ATM?</h2>
        <p>
          Anjungan tunai mandiri (disingkat ATM; bahasa Inggris: automated teller machine atau
          automatic teller machine) adalah mesin otomatis yang dimiliki oleh bank untuk mengeluarkan
          uang tunai dengan teknik tertentu, yaitu seperti menekan tombol nomor tabungan, menekan
          nomor (kode) sesuai dengan petunjuk.
        </p>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/NCR_ATM.JPG/250px-NCR_ATM.JPG"
          alt="mesin atm"
        />
      </section>

      <!-- Penggunaan -->
      <section id="usage">
        <h2>Penggunaan</h2>
        <p>
          Pada ATM paling modern, nasabah diidentifikasi dengan memasukkan kartu ATM plastik dengan
          strip magnetik atau kartu pintar plastik dengan chip, yang berisi kartu yang bernomor unik
          dan beberapa informasi keamanan seperti tanggal kedaluwarsa atau Kode keamanan kartu
          (CVV). Autentikasi ini disediakan oleh nasabah saat memasukkan nomor identifikasi pribadi
          (PIN). ATM terbaru di Royal Bank of Scotland beroperasi tanpa kartu untuk menarik uang
          tunai hingga £100. Pelanggan awalnya harus mendaftarkan nomor ponsel mereka dan bank akan
          memberikan kode enam digit untuk masuk ke ATM untuk menarik uang tunai tersebut.
        </p>
        <p>
          Dengan menggunakan ATM, nasabah dapat mengakses rekening bank mereka untuk membuat
          penarikan, uang tunai melalui kartu debit, dan memeriksa saldo rekening mereka serta
          membeli kredit ponsel prabayar. Jika mata uang yang ditarik dari ATM berbeda dengan
          rekening bank dalam mata uang (misalnya: Penarikan Yen Jepang dari rekening bank berisi
          Dolar AS), uang tersebut akan diubah satuan mata uangnya sesuai nilai tukar saat itu.
          Dengan demikian, ATM dapat dimanfaatkan untuk transaksi pertukaran uang bagi wisatawan
          asing.
        </p>
      </section>

      <!-- Fitur -->
      <section id="features">
        <h2>Layanan Apa Saja yang Tersedia di ATM?</h2>
        <p>
          Pada ATM paling modern, beberapa layanan penting seperti penarikan tunai, setor tunai,
          transfer, hingga penarikan tunai tanpa kartu debit dapat dilakukan. Berikut ini merupakan
          layanan-layanan yang tersedia di mesin ATM modern.
        </p>

        <HomeButton v-for="(menu, i) in menuLinks" :key="i" :label="menu.label" :link="menu.link" />
      </section>

      <section id="features">
        <h2>Masalah-masalah apa saja yang dapat terjadi di ATM?</h2>

        <p>
          Meskipun ATM sangat berguna, terkadang Anda mungkin menghadapi beberapa masalah saat
          menggunakan mesin ini. Jangan panik jika Anda mengalami kesulitan, karena sebagian besar
          masalah dapat diatasi dengan mudah. Berikut ini adalah beberapa contoh masalah yang
          mungkin Anda hadapi dan cara mengatasinya.
        </p>

        <table class="atm-issue-table">
          <thead>
            <tr>
              <th>Masalah</th>
              <th>Penyebab Umum</th>
              <th>Solusi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Kartu tidak terbaca</td>
              <td>Kartu rusak / chip kotor</td>
              <td>Bersihkan kartu / ganti di bank</td>
            </tr>
            <tr>
              <td>Salah PIN 3 kali</td>
              <td>Salah ketik PIN</td>
              <td>Hubungi bank untuk reset</td>
            </tr>
            <tr>
              <td>Uang tidak keluar tapi saldo berkurang</td>
              <td>Mesin error atau habis uang</td>
              <td>Lapor ke bank dengan bukti transaksi</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  </div>
  <AppFooter />
</template>

<style scoped>
.home-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

.home-card {
  background-color: white;
  box-shadow: 0px 2px 10px rgb(213, 213, 213);
  padding: 16px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

section {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

h1,
h2 {
  font-size: 24px;
  color: #121212;
}

h2 {
  font-size: 18px;
}

p {
  color: #121212;
  font-size: 12px;
  text-align: justify;
  line-height: 18px;
  font-weight: normal;
  letter-spacing: 0.5px;
}

img {
  width: 250px;
  border-radius: 8px;
}

.warning-box {
  background-color: #fff7e6;
  color: #a15c00;
  border: 1px solid #ffe0b2;
  border-radius: 6px;
  padding: 12px 16px;
  margin-bottom: 16px;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 0 1px 4px rgba(213, 213, 213, 0.2);
}

.atm-issue-table {
  width: 100%;
  border-collapse: collapse;
  margin: 16px 0;
  background: #fafbfc;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(213, 213, 213, 0.18);
}
.atm-issue-table th,
.atm-issue-table td {
  padding: 12px 16px;
  text-align: left;
  font-size: 13px;
  border-bottom: 1px solid #ececec;
}
.atm-issue-table th {
  background: #1976d2;
  color: #fff;
  font-weight: 600;
}
.atm-issue-table tr:last-child td {
  border-bottom: none;
}
.atm-issue-table tbody tr:hover {
  background: #f0f4ff;
  transition: background 0.2s;
}
</style>
