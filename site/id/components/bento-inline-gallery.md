---
id: bento-inline-gallery
title: Bento Inline Gallery
permalink: "/id/components/bento-inline-gallery/"
short_title: Inline Gallery
layout: layouts/component.njk
description: Menampilkan slide, dengan titik dan thumbnail (gambar mini) paginasi opsional.
---

# Bento Inline Gallery

{% heroexample 'bento-inline-gallery' %}

Menampilkan slide, dengan titik dan thumbnail (gambar mini) paginasi opsional. Penerapannya menggunakan [Bento Base Carousel](https://www.npmjs.com/package/@bentoproject/base-carousel). Kedua komponen ini harus diinstal dengan benar untuk lingkungan tersebut (Komponen Web vs. Preact).

<div class="bd-usage bd-card bd-card--light-sea-green">
<p>Gunakan bento-inline-gallery sebagai komponen web atau komponen fungsional React:</p> <a class="bd-button" href="#web-component">↓ Komponen Web</a> <a class="bd-button" href="#preact%2Freact-component">↓ React/Preact</a>
</div>

## Komponen Web

Anda harus menyertakan perpustakaan CSS yang diperlukan setiap komponen Bento untuk menjamin pemuatan yang tepat dan sebelum menambahkan gaya khusus. Atau gunakan gaya pra-peningkatan ringan yang tersedia inline. Lihat [Tata Letak dan gaya](#layout-and-style) .

### Impor melalui npm

```bash
npm install @bentoproject/inline-gallery
```

```javascript
import {defineElement as defineBentoInlineGallery} from '@bentoproject/inline-gallery';
defineBentoInlineGallery();
```

### Sertakan melalui `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.css" crossorigin="anonymous">
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
      src="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.js"
    ></script>
    <link
      rel="stylesheet"
      href="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.css"
    />

    <script
      type="module"
      async
      src="https://cdn.ampproject.org/v0/bento-base-carousel-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-base-carousel-1.0.js"
    ></script>
    <link
      rel="stylesheet"
      href="https://cdn.ampproject.org/v0/bento-base-carousel-1.0.css"
    />
  </head>
  <body>
    <bento-inline-gallery id="inline-gallery">
      <bento-inline-gallery-thumbnails
        style="height: 100px"
        loop
      ></bento-inline-gallery-thumbnails>

      <bento-base-carousel
        style="height: 200px"
        snap-align="center"
        visible-count="3"
        loop
      >
        <img src="img1.jpeg" data-thumbnail-src="img1-thumbnail.jpeg" />
        <img src="img2.jpeg" data-thumbnail-src="img2-thumbnail.jpeg" />
        <img src="img3.jpeg" data-thumbnail-src="img3-thumbnail.jpeg" />
        <img src="img4.jpeg" data-thumbnail-src="img4-thumbnail.jpeg" />
        <img src="img5.jpeg" data-thumbnail-src="img5-thumbnail.jpeg" />
        <img src="img6.jpeg" data-thumbnail-src="img6-thumbnail.jpeg" />
      </bento-base-carousel>

      <bento-inline-gallery-pagination
        style="height: 20px"
      ></bento-inline-gallery-pagination>
    </bento-inline-gallery>
  </body>
</html>
```

{% endexample %}

### Tata letak dan gaya

Setiap komponen Bento memiliki perpustakaan CSS kecil yang harus Anda sertakan untuk menjamin pemuatan yang tepat tanpa [pergeseran konten](https://web.dev/cls/). Karena kekhususan berbasis urutan, Anda harus secara manual memastikan bahwa lembar gaya (stylesheet) disertakan sebelum gaya kustom apa pun.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.css"
/>
```

Sebagai pilihan lain, Anda juga dapat membuat gaya pra-peningkatan ringan yang tersedia inline:

```html
<style>
  bento-inline-gallery,
  bento-inline-gallery-pagination,
  bento-inline-gallery-thumbnails {
    display: block;
  }
  bento-inline-gallery {
    contain: layout;
  }
  bento-inline-gallery-pagination,
  bento-inline-gallery-thumbnails {
    overflow: hidden;
    position: relative;
  }
</style>
```

### Atribut pada `<bento-inline-gallery-pagination>`

#### `inset`

Atribut Boolean yang menunjukkan apakah akan menampilkan indikator paginasi sebagai sisipan (melapisi korsel itu sendiri). Standarnya adalah `false`.

### Atribut pada `<bento-inline-gallery-thumbnails>`

#### `aspect-ratio`

Angka yang menentukan rasio lebar terhadap tinggi tempat slide harus ditampilkan. Nilai ini bersifat opsional.

#### `loop`

Atribut Boolean yang menunjukkan apakah thumbnail harus berulang. Standarnya adalah `false`.

### Penataan gaya

Anda dapat menggunakan pemilih elemen `bento-base-carousel`, `bento-inline-gallery`, `bento-inline-gallery-pagination`, dan `bento-inline-gallery-thumbnails` untuk mengatur gaya indikator paginasi, thumbnail, dan korsel dengan bebas.

---

## Komponen Preact/React

### Impor melalui npm

```bash
npm install @bentoproject/inline-gallery
```

```javascript
import React from 'react';
import {BentoInlineGallery} from '@bentoproject/inline-gallery/react';
import '@bentoproject/inline-gallery/styles.css';

function App() {
  return (
    <BentoInlineGallery id="inline-gallery">
      <BentoInlineGalleryThumbnails aspect-ratio="1.5" loop />
      <BentoBaseCarousel snap-align="center" visible-count="1.2" loop>
        <img src="server.com/static/inline-examples/images/image1.jpg" />
        <img src="server.com/static/inline-examples/images/image2.jpg" />
        <img src="server.com/static/inline-examples/images/image3.jpg" />
      </BentoBaseCarousel>
      <BentoInlineGalleryPagination inset />
    </BentoInlineGallery>
  );
}
```

### Tata letak dan gaya

#### Jenis wadah

Komponen `BentoInlineGallery` memiliki tipe ukuran tata letak yang ditentukan. Untuk memastikan komponen dirender dengan benar, pastikan untuk menerapkan ukuran ke komponen dan turunan langsungnya (anak) melalui tata letak CSS yang diinginkan (seperti yang ditentukan dengan `width`). Ini dapat diterapkan inline:

```jsx
<BentoInlineGallery style={% raw %}{{width: 300}}{% endraw %}>...</BentoInlineGallery>
```

Atau melalui `className`:

```jsx
<BentoInlineGallery className="custom-styles">...</BentoInlineGallery>
```

```css
.custom-styles {
  background-color: red;
}
```

### Prop untuk `BentoInlineGalleryPagination`

Selain [prop umum](../../../docs/spec/bento-common-props.md), BentoInlineGalleryPagination mendukung prop di bawah ini:

#### `inset`

Atribut Boolean yang menunjukkan apakah akan menampilkan indikator paginasi sebagai sisipan (melapisi korsel itu sendiri). Standarnya adalah `false`.

### Prop untuk `BentoInlineGalleryThumbnails`

Selain [prop umum](../../../docs/spec/bento-common-props.md), BentoInlineGalleryThumbnails mendukung prop di bawah ini:

#### `aspectRatio`

Angka yang menentukan rasio lebar terhadap tinggi tempat slide harus ditampilkan (ini bersifat opsional).

#### `loop`

Atribut Boolean yang menunjukkan apakah thumbnail harus berulang. Standarnya adalah `false`.
