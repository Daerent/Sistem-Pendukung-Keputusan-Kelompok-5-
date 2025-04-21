export function hitungSMART(nilaiBobot) {
    const totalBobot = nilaiBobot.reduce((acc, val) => acc + val, 0);
    
    const bobotNormalisasi = nilaiBobot.map(val => parseFloat((val / totalBobot).toFixed(4)));

    const nilaiUtility = Array(12).fill(1);
    
    let nilaiAkhir = 0;
    for (let i = 0; i < 12; i++) {
      nilaiAkhir += bobotNormalisasi[i] * nilaiUtility[i];
    }
  
    return {
      bobotNormalisasi,
      nilaiAkhir: parseFloat(nilaiAkhir.toFixed(4))
    };
}
  