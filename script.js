// Interaktivitas untuk Tombol di Halaman Home
const btnBelajar = document.getElementById('btnBelajar');
if (btnBelajar) {
    btnBelajar.addEventListener('click', function() {
        alert('Ahlan wa Sahlan! Terima kasih atas ketertarikan Anda. Halaman pendaftaran kelas RQ Al-Jadiid akan segera dibuka.');
    });
}

// Penanganan Form Kontak
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Mencegah reload halaman saat submit
        
        const nama = document.getElementById('nama').value;
        
        // Memunculkan pesan sukses yang menenangkan
        alert(`Jazakallah Khairan, ${nama}. Pesan Anda telah kami terima. InsyaAllah tim RQ Al-Jadiid akan segera menghubungi Anda.`);
        
        contactForm.reset(); // Mengosongkan form kembali
    });
}