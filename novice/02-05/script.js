//DOM Selection

//getElementById = mengembalikan nilai elemen/hasil returnnya berupa element
const judul = document.getElementById('judul');
    //memodifikasi tampilan dan isi html
    judul.style.color = 'white';
    judul.style.backgroundColor = '#ccc';
    judul.innerHTML = 'ehe';

//getElementByTagName = mengembalikan nilai HTMLCollection/hasil returnnya berupa HTMLCollection
const paragraf = document.getElementsByTagName('p');
    //memodifikasi tampilan dan isi html, karena return valuenya HTMLCollection
    for (i = 0; i < paragraf.length; i++) {
    paragraf[i].style.backgroundColor = 'lightblue';
    }

const header = document.getElementsByTagName('h1') [0];
    header.style.fontSize = '10 px';

//getElementByTagName = mengembalikan nilai HTMLCollection/hasil returnnya berupa HTMLCollection
const paragraf1 = document.getElementsByClassName('p1');
    paragraf1[0].innerHTML = 'ini diubah dari javascript';