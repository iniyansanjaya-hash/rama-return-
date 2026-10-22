// ==========================================
// FITUR JAM & TANGGAL REAL-TIME
// ==========================================

function updateClock() {
  const now = new Date();
  
  // 1. Format Jam dan Menit (contoh: 08:26)
  let hours = now.getHours().toString().padStart(2, '0');
  let minutes = now.getMinutes().toString().padStart(2, '0');
  
  // Cari elemen jam di HTML dan ubah isinya
  const clockElement = document.querySelector(".main-clock h1");
  if(clockElement) {
    clockElement.innerText = `${hours}:${minutes}`;
  }
  
  // 2. Format Status Bar Waktu (Pojok Kiri Atas)
  const statusTimeElement = document.querySelector(".time-status");
  if(statusTimeElement) {
    statusTimeElement.innerText = `${hours}.${minutes}`;
  }

  // 3. Format Hari dan Tanggal Indonesia
  const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
  const dateString = now.toLocaleDateString('id-ID', options);
  
  // Cari elemen tanggal di HTML dan ubah isinya
  const dateElement = document.querySelector(".main-clock p");
  if(dateElement) {
    dateElement.innerText = dateString;
  }
}

// Jalankan fungsi jam pertama kali saat web dibuka
updateClock();

// Perbarui jam setiap 1 detik (1000 milidetik) agar terus bergerak
setInterval(updateClock, 1000);
