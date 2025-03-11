# Dokumentasi Event pada Kode HTML dan JavaScript

## 1. **Event `load`**
### Deskripsi
Event ini dipicu ketika seluruh halaman beserta sumber daya seperti gambar, CSS, dan JavaScript telah dimuat sepenuhnya oleh browser.

### Implementasi
Event `load` digunakan untuk menampilkan elemen HTML yang awalnya disembunyikan.

### Kode
```javascript
function welcome() {
  alert('Sim salabim muncullah elemen-elemen HTML!');
  const contents = document.querySelector('.contents');
  contents.removeAttribute('hidden');
}

// Menggunakan event listener untuk menangani event `load`
window.addEventListener('load', welcome);
```


## 2. **Event `click`**

### Deskripsi
Event `click` dipicu ketika pengguna mengklik elemen tertentu di halaman.

### Implementasi
Event `click` digunakan untuk menghitung jumlah klik pada tombol dan menampilkan elemen tersembunyi jika jumlah klik mencapai 7.

### Kode
```javascript
function increment() {
  document.getElementById('count').innerText++;

  if (document.getElementById('count').innerText == 7) {
    const hiddenMessage = document.createElement('h4');
    hiddenMessage.innerText = 'Selamat! Anda menemukan hadiah tersembunyi...';
    const image = document.createElement('img');
    image.setAttribute(
      'src',
      'https://raw.githubusercontent.com/dicodingacademy/a315-web-pemula-labs/shared-files/catto.jpg',
    );
    const contents = document.querySelector('.contents');
    contents.appendChild(hiddenMessage).appendChild(image);
  }
}

// Menambahkan event listener pada tombol dengan id `incrementButton`
document.getElementById('incrementButton').addEventListener('click', increment);
