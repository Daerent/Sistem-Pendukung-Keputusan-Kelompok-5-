const Range1 = document.getElementById("range1")
const Range2 = document.getElementById("range2")
const Range3 = document.getElementById("range3")
const Range4 = document.getElementById("range4")
const Range5 = document.getElementById("range5")
const Range6 = document.getElementById("range6")
const Range7 = document.getElementById("range7")
const Range8 = document.getElementById("range8")
const Range9 = document.getElementById("range9")
const Range10 = document.getElementById("range10")
const Range11 = document.getElementById("range11")
const Range12 = document.getElementById("range12")


function fungsi_klik_tombol() {
    const Range = {
        C1: Range1.value,
        C2: Range2.value,
        C3: Range3.value,
        C4: Range4.value,
        C5: Range5.value,
        C6: Range6.value,
        C7: Range7.value,
        C8: Range8.value,
        C9: Range9.value,
        C10: Range10.value,
        C11: Range11.value,
        C12: Range12.value,
    };
    normalisasiBobot(Range);
}
export async function normalisasiBobot(data) {
    const { C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12 } = data;

    console.log("Nilai C1:", C1);
    console.log("Nilai C2:", C2);
    console.log("Nilai C3:", C3);
    console.log("Nilai C4:", C4);
    console.log("Nilai C5:", C5);
    console.log("Nilai C6:", C6);
    console.log("Nilai C7:", C7);
    console.log("Nilai C8:", C8);
    console.log("Nilai C9:", C9);
    console.log("Nilai C10:", C10);
    console.log("Nilai C11:", C11);
    console.log("Nilai C12:", C12);
}
const tombol = document.getElementById("anak1");
tombol.addEventListener("click", fungsi_klik_tombol);