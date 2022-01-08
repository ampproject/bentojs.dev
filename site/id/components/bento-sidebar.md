---
id: bento-sidebar
title: Bento Sidebar
permalink: "/id/components/bento-sidebar/"
short_title: Sidebar
layout: layouts/component.njk
description: Menyediakan cara untuk menampilkan konten meta yang ditujukan untuk akses sementara, seperti navigasi, tautan, tombol, menu.
---

# Bento Sidebar

{% heroexample 'bento-sidebar' %}

Menyediakan cara untuk menampilkan konten meta yang ditujukan untuk akses sementara, seperti navigasi, tautan, tombol, menu. Bilah samping (sidebar) dapat dibuka dengan menekan tombol, sementara konten utama tetap berada di bawahnya secara visual.

<div class="bd-usage bd-card bd-card--light-sea-green">
<p>Gunakan bento-sidebar sebagai komponen web atau komponen fungsional React:</p> <a class="bd-button" href="#web-component">↓ Komponen Web</a> <a class="bd-button" href="#preact%2Freact-component">↓ React/Preact</a>
</div>

## Komponen Web

Anda harus menyertakan perpustakaan CSS yang diperlukan setiap komponen Bento untuk menjamin pemuatan yang tepat dan sebelum menambahkan gaya khusus. Atau gunakan gaya pra-peningkatan ringan yang tersedia inline. Lihat [Tata Letak dan gaya](#layout-and-style) .

### Impor melalui npm

```bash
npm install @bentoproject/sidebar
```

```javascript
import {defineElement as defineBentoSidebar} from '@bentoproject/sidebar';
defineBentoSidebar();
```

### Sertakan melalui `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-sidebar-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-sidebar-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-sidebar-1.0.css" crossorigin="anonymous">
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
      src="https://cdn.ampproject.org/v0/bento-sidebar-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-sidebar-1.0.js"
    ></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.ampproject.org/v0/bento-sidebar-1.0.css"
    />
  </head>
  <body>
    <bento-sidebar id="sidebar1" side="right" hidden>
      <ul>
        <li>Nav item 1</li>
        <li>Nav item 2</li>
        <li>Nav item 3</li>
        <li>Nav item 4</li>
        <li>Nav item 5</li>
        <li>Nav item 6</li>
      </ul>
    </bento-sidebar>

    <div class="buttons" style="margin-top: 8px">
      <button id="open-sidebar">Open sidebar</button>
    </div>

    <script>
      (async () => {
        const sidebar = document.querySelector('#sidebar1');
        await customElements.whenDefined('bento-sidebar');
        const api = await sidebar.getApi();

        // set up button actions
        document.querySelector('#open-sidebar').onclick = () => api.open();
      })();
    </script>
  </body>
</html>
```

{% endexample %}

### Interaktivitas dan penggunaan API

Komponen Bento sangat interaktif melalui API mereka. API komponen `bento-sidebar` dapat diakses dengan menyertakan tag skrip berikut ini di dokumen Anda:

```javascript
await customElements.whenDefined('bento-sidebar');
const api = await carousel.getApi();
```

#### Tindakan

API `bento-sidebar` memungkinkan Anda melakukan tindakan berikut ini:

##### open()

Membuka bilah samping.

```javascript
api.open();
```

##### close()

Menutup bilah samping.

```javascript
api.close();
```

##### toggle()

Mengalihkan status buka bilah samping.

```javascript
api.toggle(0);
```

### Tata letak dan gaya

Setiap komponen Bento memiliki perpustakaan CSS kecil yang harus Anda sertakan untuk menjamin pemuatan yang tepat tanpa [pergeseran konten](https://web.dev/cls/). Karena kekhususan berbasis urutan, Anda harus secara manual memastikan bahwa lembar gaya (stylesheet) disertakan sebelum gaya kustom apa pun.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-sidebar-1.0.css"
/>
```

Sebagai pilihan lain, Anda juga dapat membuat gaya pra-peningkatan ringan yang tersedia inline:

```html
<style>
  bento-sidebar:not([open]) {
    display: none !important;
  }
</style>
```

#### Gaya kustom

Komponen `bento-sidebar` dapat ditata dengan CSS standar.

- `width` pada `bento-sidebar` dapat diatur untuk menyesuaikan lebar dari nilai 45px yang telah ditentukan sebelumnya.
- Ketinggian `bento-sidebar` dapat diatur untuk menyesuaikan ketinggian bilah samping, jika diperlukan. Jika tingginya melebihi 100 vw, bilah samping akan memiliki bilah gulir (scrollbar) vertikal. Tinggi preset bilah samping adalah 100 vw dan dapat diganti dalam CSS untuk membuatnya lebih pendek.
- Status bilah samping saat ini ditampilkan melalui `open` yang ditetapkan pada `bento-sidebar` saat bilah samping terbuka pada halaman.

```css
bento-sidebar[open] {
  height: 100%;
  width: 50px;
}
```

### Pertimbangan UX

Saat menggunakan `<bento-sidebar>` , ingatlah bahwa pengguna Anda akan sering melihat halaman Anda pada perangkat seluler, yang mungkin menampilkan tajuk pada posisi tetap. Selain itu, browser sering kali menampilkan tajuk tetapnya sendiri di bagian atas halaman. Menambahkan elemen posisi tetap lainnya di bagian atas layar akan menghabiskan banyak ruang layar seluler dengan konten yang tidak memberikan informasi baru kepada pengguna.

Untuk alasan ini, kami merekomendasikan agar keterjangkauan untuk membuka bilah samping tidak ditempatkan di tajuk lebar penuh yang tetap.

- Bilah samping hanya dapat muncul di sisi kiri atau kanan halaman.
- Tinggi maksimal bilah samping adalah 100 vh, jika tingginya melebihi 100 vh maka akan muncul bilah gulir vertikal. Tinggi default ditetapkan ke 100 vh dalam CSS dan dapat diganti dalam CSS.
- Lebar bilah samping dapat diatur dan disesuaikan dengan menggunakan CSS.
- `<bento-sidebar>` *direkomendasikan* untuk menjadi anak langsung dari `<body>` untuk mempertahankan urutan DOM logis untuk aksesibilitas serta untuk menghindari perubahan perilakunya dengan elemen wadah. Perhatikan bahwa memiliki leluhur `bento-sidebar` dengan seperangkat `z-index` dapat menyebabkan bilah samping muncul di bawah elemen lain (seperti tajuk), dan ini merusak fungsinya.

### Atribut

#### side

Menunjukkan dari sisi halaman mana bilah samping harus dibuka, `left` atau `right`. Jika `side` tidak ditentukan, nilai `side` akan diwarisi dari atribut `dir` tag `body` (`ltr` =&gt; `left`, `rtl` =&gt; `right`); jika tidak ada `dir`, `side` distandarkan ke `left`.

#### open

Atribut ini hadir saat bilah samping terbuka.

---

## Komponen Preact/React

### Impor melalui npm

```bash
npm install @bentoproject/sidebar
```

```javascript
import React from 'react';
import {BentoSidebar} from '@bentoproject/sidebar/react';
import '@bentoproject/sidebar/styles.css';

function App() {
  return (
    <BentoSidebar>
      <ul>
        <li>Nav item 1</li>
        <li>Nav item 2</li>
        <li>Nav item 3</li>
        <li>Nav item 4</li>
        <li>Nav item 5</li>
        <li>Nav item 6</li>
      </ul>
    </BentoSidebar>
  );
}
```

### Interaktivitas dan penggunaan API

Komponen Bento sangat interaktif melalui API mereka. API komponen `BentoSidebar` dapat diakses dengan melewatkan `ref`:

```javascript
import React, {createRef} from 'react';
const ref = createRef();

function App() {
  return (
    <BentoSidebar ref={ref}>
      <ul>
        <li>Nav item 1</li>
        <li>Nav item 2</li>
        <li>Nav item 3</li>
        <li>Nav item 4</li>
        <li>Nav item 5</li>
        <li>Nav item 6</li>
      </ul>
    </BentoSidebar>
  );
}
```

#### Tindakan

API `BentoSidebar` memungkinkan Anda melakukan tindakan berikut ini:

##### open()

Membuka bilah samping.

```javascript
ref.current.open();
```

##### close()

Menutup bilah samping.

```javascript
ref.current.close();
```

##### toggle()

Mengalihkan status buka bilah samping.

```javascript
ref.current.toggle(0);
```

### Tata letak dan gaya

Komponen `BentoSidebar` dapat ditata dengan CSS standar.

- `width` pada `bento-sidebar` dapat diatur untuk menyesuaikan lebar dari nilai 45px yang telah ditentukan sebelumnya.
- Ketinggian `bento-sidebar` dapat diatur untuk menyesuaikan ketinggian bilah samping, jika diperlukan. Jika tingginya melebihi 100 vw, bilah samping akan memiliki bilah gulir (scrollbar) vertikal. Tinggi preset bilah samping adalah 100 vw dan dapat diganti dalam CSS untuk membuatnya lebih pendek.

Untuk memastikan komponen merender seperti yang Anda inginkan, pastikan untuk menerapkan ukuran pada komponen. Ini dapat diterapkan inline:

```jsx
<BentoSidebar style={% raw %}{{width: 300, height: '100%'}}{% endraw %}>
  <ul>
    <li>Nav item 1</li>
    <li>Nav item 2</li>
    <li>Nav item 3</li>
    <li>Nav item 4</li>
    <li>Nav item 5</li>
    <li>Nav item 6</li>
  </ul>
</BentoSidebar>
```

Atau melalui `className`:

```jsx
<BentoSidebar className="custom-styles">
  <ul>
    <li>Nav item 1</li>
    <li>Nav item 2</li>
    <li>Nav item 3</li>
    <li>Nav item 4</li>
    <li>Nav item 5</li>
    <li>Nav item 6</li>
  </ul>
</BentoSidebar>
```

```css
.custom-styles {
  height: 100%;
  width: 300px;
}
```

### Pertimbangan UX

Saat menggunakan `<BentoSidebar>` , ingatlah bahwa pengguna Anda akan sering melihat halaman Anda pada perangkat seluler, yang mungkin menampilkan tajuk pada posisi tetap. Selain itu, browser sering kali menampilkan tajuk tetapnya sendiri di bagian atas halaman. Menambahkan elemen posisi tetap lainnya di bagian atas layar akan menghabiskan banyak ruang layar seluler dengan konten yang tidak memberikan informasi baru kepada pengguna.

Untuk alasan ini, kami merekomendasikan agar keterjangkauan untuk membuka bilah samping tidak ditempatkan di tajuk lebar penuh yang tetap.

- Bilah samping hanya dapat muncul di sisi kiri atau kanan halaman.
- Tinggi maksimal bilah samping adalah 100 vh, jika tingginya melebihi 100 vh maka akan muncul bilah gulir vertikal. Tinggi default ditetapkan ke 100 vh dalam CSS dan dapat diganti dalam CSS.
- Lebar bilah samping dapat diatur dan disesuaikan dengan menggunakan CSS.
- `<BentoSidebar>` *direkomendasikan* untuk menjadi anak langsung dari `<body>` untuk mempertahankan urutan DOM logis untuk aksesibilitas serta untuk menghindari perubahan perilakunya dengan elemen wadah. Perhatikan bahwa memiliki leluhur `BentoSidebar` dengan seperangkat `z-index` dapat menyebabkan bilah samping muncul di bawah elemen lain (seperti tajuk), dan ini merusak fungsinya.

### Prop

#### side

Menunjukkan dari sisi halaman mana bilah samping harus dibuka, `left` atau `right`. Jika `side` tidak ditentukan, nilai `side` akan diwarisi dari atribut `dir` tag `body` (`ltr` =&gt; `left`, `rtl` =&gt; `right`); jika tidak ada `dir`, `side` distandarkan ke `left`.
