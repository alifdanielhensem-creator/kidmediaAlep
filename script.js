// Fungsi untuk membuka bahagian tertentu
function openSection(sectionId) {
    // 1. Sembunyikan menu utama
    document.getElementById('main-menu').classList.add('hidden');
    
    // 2. Tunjukkan bahagian yang dipilih
    document.getElementById(sectionId).classList.remove('hidden');
    
    // Scroll ke atas
    window.scrollTo(0, 0);
}

// Fungsi untuk kembali ke menu utama
function goHome() {
    // 1. Sembunyikan semua section lain
    const sections = ['section-nota', 'section-latihan', 'section-tools'];
    
    sections.forEach(id => {
        document.getElementById(id).classList.add('hidden');
    });

    // 2. Tunjukkan menu utama semula
    document.getElementById('main-menu').classList.remove('hidden');
}

// Fungsi Simpan Nota (Bonus: Guna LocalStorage supaya tak hilang bila refresh)
function simpanNota() {
    const teksNota = document.getElementById('myNoteInput').value;
    
    if(teksNota.trim() === "") {
        alert("Sila tulis sesuatu dahulu!");
        return;
    }

    // Simpan dalam browser
    localStorage.setItem('notaPelajar', teksNota);
    alert("Nota berjaya disimpan!");
}

// Apabila website dibuka, check jika ada nota lama
window.onload = function() {
    const notaLama = localStorage.getItem('notaPelajar');
    if(notaLama) {
        document.getElementById('myNoteInput').value = notaLama;
    }
}
