const barang = (barang1,barang2,barang3,barang4,callback) => {
    return callback (barang1,barang2,barang3,barang4)
}

const add = (a,b,c,d) => {
    return a + b + c + d
}

const harga = (harga1,harga2,harga3, harga4,callback) => {
    return callback (harga1,harga2,harga3, harga4)
}

const tambah = (a,b,c,d) => {
    return a + b + c + d
}

total = barang('sabun ','odol ','ayam ','bebek ',add)
jumlah = harga(3000,2000,6000,8000,tambah)
console.log(`kamu berbelanja : ${total}senilai ${jumlah}`)