import { hitungSMART } from './kalkulasiSMART.js';

const tombol = document.getElementById("anak1");
const formInput = document.getElementById("form-container");
const result = document.getElementById("result-pengecekan-kariawan");

const namaInput = document.getElementById("namaInput");
const jabatanInput = document.getElementById("jabatanInput");
const namaDisplay = document.getElementById("display-nama");
const jabatanDisplay = document.getElementById("display-jabatan");
const tombolKembali = document.getElementById("btn-kembali");
const valueDisplays = [
    "values1", "values2", "values3", "values4", "values5", "values6",
    "values7", "values8", "values9", "values10", "values11", "values12"
];


for (let i = 1; i <= 12; i++) {
    const range = document.getElementById(`range${i}`);
    const box = document.getElementById(`box${i}`);

    range.value = 0;
    box.textContent = "0";

    range.addEventListener("input", function() {
        box.textContent = this.value;
    });
}

tombol.addEventListener("click", () => {
    namaDisplay.textContent = namaInput.value;
    jabatanDisplay.textContent = jabatanInput.value;


    const nilaiBobot = [];
    for (let i = 1; i <= 12; i++) {
        const val = parseInt(document.getElementById(`range${i}`).value);
        nilaiBobot.push(val);
    }

    const hasilSmart = hitungSMART(nilaiBobot);

    hasilSmart.bobotNormalisasi.forEach((val, i) => {
        document.getElementById(valueDisplays[i]).textContent = val;
    });

    console.log("Nilai akhir SMART:", hasilSmart.nilaiAkhir);

    formInput.style.display = "none";
    result.style.display = "block";
});

tombolKembali.addEventListener("click", () => {
    formInput.style.display = "block";
    result.style.display = "none";
    document.getElementById("formInput").reset();
});

function hitungGeometrik(subs) {
    const hasil = subs.reduce((acc, val) => acc * val, 1);
    return Math.pow(hasil, 1 / subs.length);
}