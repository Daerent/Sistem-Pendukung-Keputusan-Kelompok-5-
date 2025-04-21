// 1. Deklarasi variable, dan ambil id dari element html button
const tombol = document.getElementById("anak1")
const result = document.getElementById("result-pengecekan-kariawan");
const formInput = document.getElementById("form-container");
// const background = document.getElementById("body")
// let judul = document.getElementById("name")

//deklarasi inputan
const Nama = document.getElementById("display-nama");
const Jabatan = document.getElementById("display-jabatan");
// const values1 = document.getElementById("values1");
// const form = document.getElementById("form_karyawan")

//deklarasi untuk range
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


//deklarasi untuk box nilai
const Box1 = document.getElementById("box1")
const Box2 = document.getElementById("box2")
const Box3 = document.getElementById("box3")
const Box4 = document.getElementById("box4")
const Box5 = document.getElementById("box5")
const Box6 = document.getElementById("box6")
const Box7 = document.getElementById("box7")
const Box8 = document.getElementById("box8")
const Box9 = document.getElementById("box9")
const Box10 = document.getElementById("box10")
const Box11 = document.getElementById("box11")
const Box12 = document.getElementById("box12")


Range1.addEventListener("input", function() {
    Box1.textContent = this.value;
  });
Range2.addEventListener("input", function() {
    Box2.textContent = this.value;
  });
Range3.addEventListener("input", function() {
    Box3.textContent = this.value;
  });
Range4.addEventListener("input", function() {
    Box4.textContent = this.value;
  });
Range5.addEventListener("input", function() {
    Box5.textContent = this.value;
  });
Range6.addEventListener("input", function() {
    Box6.textContent = this.value;
  });
  Range7.addEventListener("input", function() {
    Box7.textContent = this.value;
  });
  Range8.addEventListener("input", function() {
    Box8.textContent = this.value;
  });
  Range9.addEventListener("input", function() {
    Box9.textContent = this.value;
  });
  Range10.addEventListener("input", function() {
    Box10.textContent = this.value;
  });
  Range11.addEventListener("input", function() {
    Box11.textContent = this.value;
  });
  Range12.addEventListener("input", function() {
    Box12.textContent = this.value;
  });

function fungsi_klik_tombol(){

    Nama.textContent = namaInput.value;
    Jabatan.textContent = jabatanInput.value;

    values1.textContent = Range1.value;
    values2.textContent = Range2.value;
    values3.textContent = Range1.value;
    values4.textContent = Range1.value;
    values5.textContent = Range5.value;
    values6.textContent = Range6.value;
    values7.textContent = Range7.value;
    values8.textContent = Range8.value;
    values9.textContent = Range9.value;
    values10.textContent = Range10.value;
    values11.textContent = Range11.value;
    values12.textContent = Range12.value;

    formInput.style.display ="none";
    result.style.display = "block";
}
tombol.addEventListener("click", fungsi_klik_tombol);

















// function fungsi_klik_tombol(){
    //  console.log(nama.value)
    //  console.log(jabatan.value)
    // const displayNama = document.getElementById("nama");
    // const displayJabatan = document.getElementById("jabatan");
    
    // Tampilkan nilai di elemen result
    // displayNama.textContent = naman.value;
    // displayJabatan.textContent = jabatahn.value;

    //  nama.textContent = nama.value;
    //  jabatan.textContent = jabatan.value;

    //  formInput.style.display ="none";
    //  result.style.display = "block";
    //  console.log(range1.value)
    //  console.log(range2.value)
    //  console.log(range3.value)
    //  console.log(range4.value)
    //  console.log(range5.value)
    //  console.log(range6.value)
    //  console.log(range7.value)
    //  console.log(range8.value)
    //  console.log(range9.value)
    //  console.log(range10.value)
    //  console.log(range11.value)
    //  console.log(range12.value)

// }
// tombol.addEventListener("click", fungsi_klik_tombol);

// function tampilkanResult() {
//     // 1. Tampilkan section result
//     formInput.style.display = "none";
//     result.style.display = "block";
//   }

// document.getElementById("anak1").addEventListener("click", function() {
//     // Ganti "halaman2.html" dengan URL tujuan
//     window.location.href = "halaman2.html";
//   });


// tombol.addEventListener("click", fungsi_klik_tombol{
//     formInput.style.display ="none";
//     result.style.display = "block";
// })

// 2. Buat fungsi klik tombol untuk menampilkan halo ida
// function fungsi_klik_tombol(){
//  alert("Halo ida")

    // Ini untuk melakukan styling
    //background.style.backgroundColor = "red";
    // Ini untuk mengubah isi text dari element
    // judul.innerText = "Halo ida"

    // console.log(judul.innerText)
    // console.log(nama.value)
    // console.log(jabatan.value)
    // console.log(Box.value)
// }


// 3. Kode ini berfungsi sebagai tingkah laku dari variabel tombol
// box1.addEventListener("Click", fungsi_klik_tombol)
// box1.addEventListener("input", fungsi_klik_tombol )