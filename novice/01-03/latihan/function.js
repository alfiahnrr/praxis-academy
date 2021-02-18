function jumlahVolumeDuaKubus(a,b) {
    return a * a * a + b * b * b;
} 

alert('Hasil dari dua volume kubus yang kamu masukkan adalah ' + jumlahVolumeDuaKubus (
    a = parseInt(prompt('masukkkan sisi kubus pertama')),
    b = parseInt(prompt('masukkkan sisi kubus kedua'))
))