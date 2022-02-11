---
id: bento-stream-gallery
title: Bento Stream Gallery
permalink: "/id/components/bento-stream-gallery/"
short_title: Stream Gallery
layout: layouts/component.njk
description: Bento Stream Gallery adalah untuk menampilkan beberapa konten serupa sekaligus di sepanjang sumbu horizontal.
---

# Bento Stream Gallery

{% heroexample 'bento-stream-gallery' %}

Bento Stream Gallery adalah untuk menampilkan beberapa konten serupa sekaligus di sepanjang sumbu horizontal.

Ini adalah spesialisasi Bento Base Carousel dan menggunakan [ResizeObservers](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver) untuk secara dinamis menyesuaikan ukuran dan jumlah slide yang ditampilkan berdasarkan lebar wadah. Untuk menerapkan UX yang lebih disesuaikan, lihat [`<bento-base-carousel>`](../../amp-base-carousel/1.0/README.md).

<div class="bd-usage bd-card bd-card--light-sea-green">
<p>Gunakan bento-stream-gallery sebagai komponen web atau komponen fungsional React:</p> <a class="bd-button" href="#web-component">↓ Komponen Web</a> <a class="bd-button" href="#preact%2Freact-component">↓ React/Preact</a>
</div>

## Komponen Web

Anda harus menyertakan perpustakaan CSS yang diperlukan setiap komponen Bento untuk menjamin pemuatan yang tepat dan sebelum menambahkan gaya khusus. Atau gunakan gaya pra-peningkatan ringan yang tersedia inline. Lihat [Tata Letak dan gaya](#layout-and-style) .

### Impor melalui npm

```bash
npm install @bentoproject/stream-gallery
```

```javascript
import {defineElement as defineBentoStreamGallery} from '@bentoproject/stream-gallery';
defineBentoStreamGallery();
```

### Sertakan melalui `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.css" crossorigin="anonymous">
```

### Contoh

{% example %}

```html
<!DOCTYPE html>
<html>
  <head>
    <script
      type="module"
      async
      src="https://cdn.ampproject.org/bento.mjs"
    ></script>
    <script nomodule src="https://cdn.ampproject.org/bento.js"></script>
    <script
      type="module"
      async
      src="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.js"
    ></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.css"
    />
  </head>
  <body>
    <bento-stream-gallery id="my-stream-gallery" style="height: 150px;" min-item-width="75" max-item-width="100">
      <div style="height: 100px; background: red;">A</div>
      <div style="height: 100px; background: green;">B</div>
      <div style="height: 100px; background: blue;">C</div>
      <div style="height: 100px; background: yellow;">D</div>
      <div style="height: 100px; background: purple;">E</div>
      <div style="height: 100px; background: orange;">F</div>
      <div style="height: 100px; background: fuchsia;">G</div>
    </bento-stream-gallery>
  </body>
</html>
```

{% endexample %}

### Interaktivitas dan penggunaan API

Komponen Bento sangat interaktif melalui API mereka. API komponen `bento-stream-gallery` dapat diakses dengan menyertakan tag skrip berikut ini di dokumen Anda:

```javascript
await customElements.whenDefined('bento-stream-gallery');
const api = await streamGallery.getApi();
```

#### Tindakan

##### next()

Memajukan korsel menurut jumlah slide yang terlihat.

```js
api.next();
```

##### prev()

Memundurkan korsel menurut jumlah slide yang terlihat.

```js
api.prev();
```

##### goToSlide(index: number)

Memindahkan korsel ke slide yang ditentukan oleh argumen `index`.

Catatan: `index` akan dinormalisasi ke angka yang lebih besar atau sama dengan `0` dan lebih kecil dari jumlah slide yang diberikan.

```js
api.goToSlide(0); // Advance to first slide.
api.goToSlide(length - 1); // Advance to last slide.
```

#### Peristiwa

Komponen Bento Stream Gallery memungkinkan Anda mendaftar dan merespons peristiwa berikut ini:

##### slideChange

Peristiwa ini dipicu ketika indeks yang ditampilkan oleh korsel telah berubah. Indeks baru tersedia melalui `event.data.index`.

```js
streamGallery.addEventListener('slideChange', (e) => console.log(e.data.index));
```

### Tata letak dan gaya

Setiap komponen Bento memiliki perpustakaan CSS kecil yang harus Anda sertakan untuk menjamin pemuatan yang tepat tanpa [pergeseran konten](https://web.dev/cls/). Karena kekhususan berbasis urutan, Anda harus secara manual memastikan bahwa lembar gaya (stylesheet) disertakan sebelum gaya kustom apa pun.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.css"
/>
```

Sebagai pilihan lain, Anda juga dapat membuat gaya pra-peningkatan ringan yang tersedia inline:

```html
<style>
  bento-stream-gallery {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

#### Contoh API

Contoh ini menunjukkan bagaimana secara terprogram beralih ke slide berikutnya/sebelumnya dan melompat ke slide tertentu.

{% example %}

```html
<!DOCTYPE html>
<html>
  <head>
    <script
      type="module"
      async
      src="https://cdn.ampproject.org/bento.mjs"
    ></script>
    <script nomodule src="https://cdn.ampproject.org/bento.js"></script>
    <script
      type="module"
      async
      src="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.js"
    ></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.css"
    />
  </head>
  <body>
    <bento-stream-gallery id="my-stream-gallery" style="height: 150px;" min-item-width="75" max-item-width="100">
      <div style="height: 100px; background: red;">A</div>
      <div style="height: 100px; background: green;">B</div>
      <div style="height: 100px; background: blue;">C</div>
      <div style="height: 100px; background: yellow;">D</div>
      <div style="height: 100px; background: purple;">E</div>
      <div style="height: 100px; background: orange;">F</div>
      <div style="height: 100px; background: fuchsia;">G</div>
    </bento-stream-gallery>
    <script>
      (async () => {
        const streamGallery = document.querySelector('#my-stream-gallery');
        await customElements.whenDefined('bento-stream-gallery');
        const api = await streamGallery.getApi();

        // programatically go to next slide
        api.next();
        // programatically go to prev slide
        api.prev();
        // programatically go to slide
        api.goToSlide(4);
      })();
    </script>
  </body>
</html>
```

{% endexample %}

### Atribut

#### Perilaku

##### `controls`

Baik `"always"` , `"auto"`, maupun `"never"`, default ke `"auto"`. Ini menentukan apakah dan kapan panah navigasi sebelumnya/berikutnya ditampilkan. Catatan: Jika `outset-arrows` bernilai `true`, panah akan ditampilkan `"always"`.

- `always`: Panah selalu ditampilkan.
- `auto`: Panah ditampilkan saat korsel baru saja menerima interaksi melalui mouse, dan tidak ditampilkan saat korsel baru saja menerima interaksi melalui sentuhan. Pada pemuatan pertama untuk perangkat sentuh, panah ditampilkan hingga interaksi pertama.
- `never`: Panah tidak pernah ditampilkan.

##### `extra-space`

`"around"` atau tidak terdefinisi. Ini menentukan bagaimana ruang ekstra dialokasikan setelah menampilkan jumlah slide yang terlihat di korsel yang dihitung. Jika `"around"`, spasi putih didistribusikan secara merata di sekitar korsel dengan `justify-content: center`; jika tidak, ruang dialokasikan di sebelah kanan korsel untuk dokumen LTR dan di sebelah kiri untuk dokumen RTL.

##### `loop`

Baik `true` maupun `false`, default ke `true`. Jika benar, korsel akan memungkinkan pengguna untuk berpindah dari item pertama kembali ke item terakhir dan sebaliknya. Harus ada minimal tiga slide agar perulangan bisa terjadi.

##### `outset-arrows`

Baik `true` maupun `false`, default ke `false`. Jika benar, korsel akan menampilkan panahnya di awal dan di kedua sisi slide. Perhatikan bahwa dengan panah awal, wadah slide akan memiliki panjang efektif 100px kurang dari ruang yang dialokasikan untuk wadah yang diberikan — 50px per panah di kedua sisi. Jika salah, korsel akan menampilkan panah yang disisipkan dan dihamparkan di atas tepi kiri dan kanan slide.

##### `peek`

Angka, default ke `0`. Ini menentukan berapa banyak slide tambahan yang akan ditampilkan (di satu atau kedua sisi slide saat ini) sebagai keterjangkauan kepada pengguna yang menunjukkan bahwa korsel dapat diusap.

#### Visibilitas slide galeri

##### `min-visible-count`

Angka, default ke `1`. Menentukan jumlah minimum slide yang harus ditampilkan pada waktu tertentu. Nilai pecahan dapat digunakan untuk membuat bagian dari slide tambahan terlihat.

##### `max-visible-count`

Angka, default ke [`Number.MAX_VALUE`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE). Menentukan jumlah maksimum slide yang harus ditampilkan pada waktu tertentu. Nilai pecahan dapat digunakan untuk membuat bagian dari slide tambahan terlihat.

##### `min-item-width`

Angka, default ke `1`. Menentukan lebar minimum setiap item, digunakan untuk menentukan jumlah item yang dapat ditampilkan sekaligus dalam keseluruhan lebar galeri.

##### `max-item-width`

Angka, default ke [`Number.MAX_VALUE`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE). Menentukan lebar minimum setiap item, digunakan untuk menentukan jumlah item yang dapat ditampilkan sekaligus dalam keseluruhan lebar galeri.

#### Jepretan slide

##### `slide-align`

Baik `start` maupun `center`. Saat mulai menyelaraskan, awal slide (cth.: tepi kiri, saat menyelaraskan horizontal) disejajarkan dengan awal korsel. Saat menyelaraskan tengah, bagian tengah slide disejajarkan dengan bagian tengah korsel.

##### `snap`

Baik `true` maupun `false`, default ke `true`. Menentukan apakah korsel harus terjepret (snap) pada slide saat menggulir atau tidak.

### Penataan gaya

Anda dapat menggunakan pemilih elemen `bento-stream-gallery` untuk menata gaya streamGallery dengan bebas.

---

## Komponen Preact/React

### Impor melalui npm

```bash
npm install @bentoproject/stream-gallery
```

```javascript
import React from 'react';
import {BentoStreamGallery} from '@bentoproject/stream-gallery/react';
import '@bentoproject/stream-gallery/styles.css';

function App() {
  return (
    <BentoStreamGallery style={% raw %}{{height: 150}}{% endraw %} minItemWidth="75" maxItemWidth="100">
      <img src="img1.png" />
      <img src="img2.png" />
      <img src="img3.png" />
      <img src="img4.png" />
      <img src="img5.png" />
      <img src="img6.png" />
      <img src="img7.png" />
    </BentoStreamGallery>
  );
}
```

### Interaktivitas dan penggunaan API

Komponen Bento sangat interaktif melalui API mereka. API komponen `BentoStreamGallery` dapat diakses dengan melewatkan `ref`:

```javascript
import React, {createRef} from 'react';
const ref = createRef();

function App() {
  return (
    <BentoStreamGallery ref={ref}>
      <img src="img1.png" />
      <img src="img2.png" />
      <img src="img3.png" />
      <img src="img4.png" />
      <img src="img5.png" />
      <img src="img6.png" />
      <img src="img7.png" />
    </BentoStreamGallery>
  );
}
```

#### Tindakan

API `BentoStreamGallery` memungkinkan Anda melakukan tindakan berikut ini:

##### next()

Memajukan korsel sebanyak `advanceCount` slide.

```javascript
ref.current.next();
```

##### prev()

Memundurkan korsel sebanyak `advanceCount` slide

```javascript
ref.current.prev();
```

##### goToSlide(index: number)

Memindahkan korsel ke slide yang ditentukan oleh argumen `index`. Catatan: `index` akan dinormalisasi ke angka yang lebih besar atau sama dengan `0` dan lebih kecil dari jumlah slide yang diberikan.

```javascript
ref.current.goToSlide(0); // Advance to first slide.
ref.current.goToSlide(length - 1); // Advance to last slide.
```

#### Peristiwa

##### onSlideChange

Peristiwa ini dipicu ketika indeks yang ditampilkan oleh korsel telah berubah.

```jsx
<BentoStreamGallery style={% raw %}{{height: 150}}{% endraw %} onSlideChange={(index) => console.log(index)}>
  <img src="puppies.jpg" />
  <img src="kittens.jpg" />
  <img src="hamsters.jpg" />
</BentoStreamGallery>
```

### Tata letak dan gaya

#### Jenis wadah

Komponen `BentoStreamGallery` memiliki tipe ukuran tata letak yang ditentukan. Untuk memastikan komponen dirender dengan benar, pastikan untuk menerapkan ukuran ke komponen dan turunan langsungnya (anak) melalui tata letak CSS yang diinginkan (seperti yang ditentukan dengan `width`). Ini dapat diterapkan inline:

```jsx
<BentoStreamGallery style={% raw %}{{width: 300}}{% endraw %}>...</BentoStreamGallery>
```

Atau melalui `className`:

```jsx
<BentoStreamGallery className="custom-styles">...</BentoStreamGallery>
```

```css
.custom-styles {
  background-color: red;
}
```

### Prop

#### Prop umum

Komponen ini mendukung [prop umum](../../../docs/spec/bento-common-props.md) untuk komponen React dan Preact.

#### Perilaku

##### `controls`

Baik `"always"` , `"auto"`, maupun `"never"`, default ke `"auto"`. Ini menentukan apakah dan kapan panah navigasi sebelumnya/berikutnya ditampilkan. Catatan: Jika `outset-arrows` bernilai `true`, panah akan ditampilkan `"always"`.

- `always`: Panah selalu ditampilkan.
- `auto`: Panah ditampilkan saat korsel baru saja menerima interaksi melalui mouse, dan tidak ditampilkan saat korsel baru saja menerima interaksi melalui sentuhan. Pada pemuatan pertama untuk perangkat sentuh, panah ditampilkan hingga interaksi pertama.
- `never`: Panah tidak pernah ditampilkan.

##### `extraSpace`

`"around"` atau tidak terdefinisi. Ini menentukan bagaimana ruang ekstra dialokasikan setelah menampilkan jumlah slide yang terlihat di korsel yang dihitung. Jika `"around"`, spasi putih didistribusikan secara merata di sekitar korsel dengan `justify-content: center`; jika tidak, ruang dialokasikan di sebelah kanan korsel untuk dokumen LTR dan di sebelah kiri untuk dokumen RTL.

##### `loop`

Baik `true` maupun `false`, default ke `true`. Jika benar, korsel akan memungkinkan pengguna untuk berpindah dari item pertama kembali ke item terakhir dan sebaliknya. Harus ada minimal tiga slide agar perulangan bisa terjadi.

##### `outsetArrows`

Baik `true` maupun `false`, default ke `false`. Jika benar, korsel akan menampilkan panahnya di awal dan di kedua sisi slide. Perhatikan bahwa dengan panah awal, wadah slide akan memiliki panjang efektif 100px kurang dari ruang yang dialokasikan untuk wadah yang diberikan — 50px per panah di kedua sisi. Jika salah, korsel akan menampilkan panah yang disisipkan dan dihamparkan di atas tepi kiri dan kanan slide.

##### `peek`

Angka, default ke `0`. Ini menentukan berapa banyak slide tambahan yang akan ditampilkan (di satu atau kedua sisi slide saat ini) sebagai keterjangkauan kepada pengguna yang menunjukkan bahwa korsel dapat diusap.

#### Visibilitas slide galeri

##### `minVisibleCount`

Angka, default ke `1`. Menentukan jumlah minimum slide yang harus ditampilkan pada waktu tertentu. Nilai pecahan dapat digunakan untuk membuat bagian dari slide tambahan terlihat.

##### `maxVisibleCount`

Angka, default ke [`Number.MAX_VALUE`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE). Menentukan jumlah maksimum slide yang harus ditampilkan pada waktu tertentu. Nilai pecahan dapat digunakan untuk membuat bagian dari slide tambahan terlihat.

##### `minItemWidth`

Angka, default ke `1`. Menentukan lebar minimum setiap item, digunakan untuk menentukan jumlah item yang dapat ditampilkan sekaligus dalam keseluruhan lebar galeri.

##### `maxItemWidth`

Angka, default ke [`Number.MAX_VALUE`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE). Menentukan lebar minimum setiap item, digunakan untuk menentukan jumlah item yang dapat ditampilkan sekaligus dalam keseluruhan lebar galeri.

#### Jepretan slide

##### `slideAlign`

Baik `start` maupun `center`. Saat mulai menyelaraskan, awal slide (cth.: tepi kiri, saat menyelaraskan horizontal) disejajarkan dengan awal korsel. Saat menyelaraskan tengah, bagian tengah slide disejajarkan dengan bagian tengah korsel.

##### `snap`

Baik `true` maupun `false`, default ke `true`. Menentukan apakah korsel harus terjepret (snap) pada slide saat menggulir atau tidak.
