var jmlAngkot = 10;
var angkotBeroprasi = 6;
var noAngkot = 1;

for (noAngkot; noAngkot <= jmlAngkot; noAngkot++){
    if (noAngkot <= angkotBeroprasi){
        console.log('angkot no.' + noAngkot + ' beroprasi dengan baik.');
    } else  { 
        console.log('angkot no.' + noAngkot + ' sedang tidak beroprasi.');
    }
};