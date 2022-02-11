---
id: bento-embedly-card
title: Bento Embedly Card
permalink: "/id/components/bento-embedly-card/"
short_title: Embedly Card
layout: layouts/component.njk
description: Menyediakan sematan yang responsif dan dapat dibagikan dengan menggunakan <a href="http://docs.embed.ly/docs/cards">kartu<Embedly/a>
---

# Bento Embedly Card

{% heroexample 'bento-embedly-card' %}

Menyediakan sematan yang responsif dan dapat dibagikan dengan menggunakan [kartu Embedly](http://docs.embed.ly/docs/cards)

Kartu adalah cara termudah untuk memanfaatkan Embedly. Untuk media apa pun, kartu menyediakan penyematan responsif dengan analisis penyematan bawaan.

Jika Anda memiliki paket berbayar, gunakan komponen `<bento-embedly-key>` atau `<BentoEmbedlyContext.Provider>` untuk menetapkan kunci API Anda. Anda hanya perlu satu kunci Bento Embedly per halaman untuk menghapus pemerekan Embedly dari kartu. Dalam halaman Anda, dapat menyertakan satu atau beberapa Bento Embedly Card.

<div class="bd-usage bd-card bd-card--light-sea-green">
<p>Gunakan bento-embedly-card sebagai komponen web atau komponen fungsional React:</p> <a class="bd-button" href="#web-component">↓ Komponen Web</a> <a class="bd-button" href="#preact%2Freact-component">↓ React/Preact</a>
</div>

## Komponen Web

Anda harus menyertakan perpustakaan CSS yang diperlukan setiap komponen Bento untuk menjamin pemuatan yang tepat dan sebelum menambahkan gaya khusus. Atau gunakan gaya pra-peningkatan ringan yang tersedia inline. Lihat [Tata Letak dan gaya](#layout-and-style) .

### Impor melalui npm

```bash
npm install @bentoproject/embedly-card
```

```javascript
import {defineElement as defineBentoEmbedlyCard} from '@bentoproject/embedly-card';
defineBentoEmbedlyCard();
```

### Sertakan melalui `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-embedly-card-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-embedly-card-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-embedly-card-1.0.css" crossorigin="anonymous">
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
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.ampproject.org/v0/bento-embedly-card-1.0.css"
    />
    <script
      type="module"
      async
      src="https://cdn.ampproject.org/v0/bento-embedly-card-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-embedly-card-1.0.js"
    ></script>
    <style>
      bento-embedly-card {
        width: 375px;
        height: 472px;
      }
    </style>
  </head>
  <body>
    <bento-embedly-key value="12af2e3543ee432ca35ac30a4b4f656a">
    </bento-embedly-key>

    <bento-embedly-card
      data-url="https://twitter.com/AMPhtml/status/986750295077040128"
      data-card-theme="dark"
      data-card-controls="0"
    >
    </bento-embedly-card>

    <bento-embedly-card
      id="my-url"
      data-url="https://www.youtube.com/watch?v=LZcKdHinUhE"
    >
    </bento-embedly-card>
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
  href="https://cdn.ampproject.org/v0/bento-embedly-card-1.0.css"
/>
```

Sebagai pilihan lain, Anda juga dapat membuat gaya pra-peningkatan ringan yang tersedia inline:

```html
<style>
  bento-embedly-card {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

#### Jenis wadah

Komponen `bento-embedly-card` memiliki jenis ukuran tata letak yang telah ditentukan. Untuk memastikan bahwa komponen dirender dengan benar, pastikan untuk menerapkan ukuran pada komponen dan turunan langsungnya (slide) melalui tata letak CSS yang diinginkan (seperti yang ditentukan dengan `height`, `width`, `aspect-ratio`, atau properti sejenis lainnya):

```css
bento-embedly-card {
  height: 100px;
  width: 100%;
}
```

### Atribut

#### `data-url`

URL untuk mengambil informasi penyematan.

#### `data-card-embed`

URL ke video atau rich media. Gunakan dengan penyematan statis seperti artikel, daripada menggunakan konten halaman statis di kartu, kartu akan menyematkan video atau rich media.

#### `data-card-image`

URL ke gambar. Menentukan gambar mana yang akan digunakan dalam kartu artikel saat `data-url` menunjuk ke sebuah artikel. Tidak semua URL gambar didukung, jika gambar tidak dimuat, coba gambar atau domain lain.

#### `data-card-controls`

Mengaktifkan ikon berbagi.

- `0`: Nonaktifkan ikon berbagi.
- `1`: Aktifkan ikon berbagi

Standarnya adalah `1`.

#### `data-card-align`

Menyelaraskan kartu. Nilai yang mungkin adalah `left`, `center`, dan `right`. Nilai default atau standar adalah `center`.

#### `data-card-recommend`

Saat rekomendasi didukung, rekomendasi yang disematkan pada video dan rich card akan dinonaktifkan. Ini adalah rekomendasi yang dibuat oleh embedly.

- `0`: Menonaktifkan rekomendasi sematan.
- `1`: Mengaktifkan rekomendasi sematan.

Nilai standarnya adalah `1`.

#### `data-card-via` (opsional)

Menentukan konten via dalam kartu. Ini adalah cara yang bagus untuk melakukan atribusi.

#### `data-card-theme` (opsional)

Memungkinkan pengaturan `dark` yang mengubah warna latar belakang wadah kartu utama. Gunakan `dark` untuk mengatur tema ini. Untuk latar belakang gelap lebih baik untuk menentukan ini. Standarnya adalah `light`, yang tidak menetapkan warna latar belakang wadah kartu utama.

#### title (opsional)

Tentukan `title` untuk komponen yang akan disebarkan ke elemen `<iframe>`. Nilai standarnya adalah `"Embedly card"`.

#### Contoh API

Mengubah nilai atribut yang mana pun secara terprogram akan secara otomatis memperbarui elemen. Contoh: dengan mengubah nilai `data-url`, Anda dapat beralih ke sematan yang berbeda.

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
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.ampproject.org/v0/bento-embedly-card-1.0.css"
    />
    <script
      type="module"
      async
      src="https://cdn.ampproject.org/v0/bento-embedly-card-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-embedly-card-1.0.js"
    ></script>
    <style>
      bento-embedly-card {
        width: 375px;
        height: 472px;
      }
    </style>
  </head>
  <body>
    <bento-embedly-key value="12af2e3543ee432ca35ac30a4b4f656a">
    </bento-embedly-key>

    <bento-embedly-card
      data-url="https://twitter.com/AMPhtml/status/986750295077040128"
      data-card-theme="dark"
      data-card-controls="0"
    >
    </bento-embedly-card>

    <bento-embedly-card
      id="my-url"
      data-url="https://www.youtube.com/watch?v=LZcKdHinUhE"
    >
    </bento-embedly-card>

    <div class="buttons" style="margin-top: 8px">
      <button id="change-url">Change embed</button>
    </div>

    <script>
      (async () => {
        const embedlyCard = document.querySelector('#my-url');
        await customElements.whenDefined('bento-embedly-card');

        // set up button actions
        document.querySelector('#change-url').onclick = () => {
          embedlyCard.setAttribute(
            'data-url',
            'https://www.youtube.com/watch?v=wcJSHR0US80'
          );
        };
      })();
    </script>
  </body>
</html>
```

{% endexample %}

---

## Komponen Preact/React

### Impor melalui npm

```bash
npm install @bentoproject/embedly-card
```

```javascript
import {BentoEmbedlyCard} from '@bentoproject/embedly-card/react';
import '@bentoproject/embedly-card/styles.css';

function App() {
  return (
    <BentoEmbedlyContext.Provider
      value={% raw %}{{apiKey: '12af2e3543ee432ca35ac30a4b4f656a'}}{% endraw %}
    >
      <BentoEmbedlyCard url="https://www.youtube.com/watch?v=LZcKdHinUhE"></BentoEmbedlyCard>
    </BentoEmbedlyContext.Provider>
  );
}
```

### Tata letak dan gaya

#### Jenis wadah

Komponen `BentoEmbedlyCard` memiliki jenis ukuran tata letak yang telah ditentukan. Untuk memastikan bahwa komponen dirender dengan benar, pastikan untuk menerapkan ukuran pada komponen dan turunan langsungnya (slide) melalui tata letak CSS yang diinginkan (seperti yang ditentukan dengan `height`, `width`, `aspect-ratio`, atau properti sejenis lainnya). Ini dapat diterapkan inline:

```jsx
<BentoEmbedlyCard
  style={% raw %}{{width: 300, height: 100}}{% endraw %}
  url="https://www.youtube.com/watch?v=LZcKdHinUhE"
></BentoEmbedlyCard>
```

Atau melalui `className`:

```jsx
<BentoEmbedlyCard
  className="custom-styles"
  url="https://www.youtube.com/watch?v=LZcKdHinUhE"
></BentoEmbedlyCard>
```

```css
.custom-styles {
  height: 100px;
  width: 100%;
}
```

### Prop

#### `url`

URL untuk mengambil informasi penyematan.

#### `cardEmbed`

URL ke video atau rich media. Gunakan dengan penyematan statis seperti artikel, daripada menggunakan konten halaman statis di kartu, kartu akan menyematkan video atau rich media.

#### `cardImage`

URL ke gambar. Menentukan gambar mana yang akan digunakan dalam kartu artikel saat `data-url` menunjuk ke sebuah artikel. Tidak semua URL gambar didukung, jika gambar tidak dimuat, coba gambar atau domain lain.

#### `cardControls`

Mengaktifkan ikon berbagi.

- `0`: Nonaktifkan ikon berbagi.
- `1`: Aktifkan ikon berbagi

Standarnya adalah `1`.

#### `cardAlign`

Menyelaraskan kartu. Nilai yang mungkin adalah `left`, `center`, dan `right`. Nilai default atau standar adalah `center`.

#### `cardRecommend`

Saat rekomendasi didukung, rekomendasi yang disematkan pada video dan rich card akan dinonaktifkan. Ini adalah rekomendasi yang dibuat oleh embedly.

- `0`: Menonaktifkan rekomendasi sematan.
- `1`: Mengaktifkan rekomendasi sematan.

Nilai standarnya adalah `1`.

#### `cardVia` (opsional)

Menentukan konten via dalam kartu. Ini adalah cara yang bagus untuk melakukan atribusi.

#### `cardTheme` (opsional)

Memungkinkan pengaturan `dark` yang mengubah warna latar belakang wadah kartu utama. Gunakan `dark` untuk mengatur tema ini. Untuk latar belakang gelap lebih baik untuk menentukan ini. Standarnya adalah `light`, yang tidak menetapkan warna latar belakang wadah kartu utama.

#### title (opsional)

Tentukan `title` untuk komponen yang akan disebarkan ke elemen `<iframe>`. Nilai standarnya adalah `"Embedly card"`.
