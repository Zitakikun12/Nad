const kataKata = [
    "Aku ingin kita tetap bersama, melewati setiap waktu dengan cinta yang tetap hangat.",
    "Kamu adalah bagian terindah dalam hidupku, dan aku ingin selalu menjagamu.",
    "Bersamamu, aku merasa tenang. Kita tak perlu banyak kata, cukup saling memahami.",
    "Aku ingin tetap ada di sisimu, bukan hanya untuk hari ini, tapi selamanya.",
    "Cinta kita tidak harus sempurna, yang penting kita selalu memilih satu sama lain."
];

let index = 0;

function gantiKata() {
    index = (index + 1) % kataKata.length;
    const p = document.getElementById("kataManis");
    p.style.opacity = 0; // Animasi fade out
    setTimeout(() => {
        p.textContent = kataKata[index];
        p.style.opacity = 1; // Animasi fade in
    }, 500);
}