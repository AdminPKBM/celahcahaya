// Ambil elemen tombol dan elemen pesan
const button = document.getElementById('clickButton');
const message = document.getElementById('message');

// Fungsi untuk mengubah teks pesan ketika tombol diklik
button.addEventListener('click', function() {
    message.textContent = "Tombol telah diklik! Terima kasih telah mengunjungi website ini.";
});
