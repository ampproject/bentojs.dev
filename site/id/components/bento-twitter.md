---
id: bento-twitter
title: Bento Twitter
permalink: "/id/components/bento-twitter/"
short_title: Twitter
layout: layouts/component.njk
description: Menyematkan konten <a href="https://twitter.com">Twitter</a>, seperti sebuah Tweet atau Moment.
---

# Bento Twitter

{% heroexample 'bento-twitter' %}

Menyematkan konten [Twitter](https://twitter.com), seperti sebuah Tweet atau Moment.

<div class="bd-usage bd-card bd-card--light-sea-green">
<p>Gunakan bento-twitter sebagai komponen web atau komponen fungsional React:</p> <a class="bd-button" href="#web-component">↓ Komponen Web</a> <a class="bd-button" href="#preact%2Freact-component">↓ React/Preact</a>
</div>

## Komponen Web

Anda harus menyertakan perpustakaan CSS yang diperlukan setiap komponen Bento untuk menjamin pemuatan yang tepat dan sebelum menambahkan gaya khusus. Atau gunakan gaya pra-peningkatan ringan yang tersedia inline. Lihat [Tata Letak dan gaya](#layout-and-style) .

### Impor melalui npm

```bash
npm install @bentoproject/twitter
```

```javascript
import {defineElement as defineBentoTwitters} from '@bentoproject/twitter';
defineBentoTwitters();
```

### Sertakan melalui `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-twitter-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-twitter-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-twitter-1.0.css" crossorigin="anonymous">
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
      src="https://cdn.ampproject.org/v0/bento-twitter-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-twitter-1.0.js"
    ></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.ampproject.org/v0/bento-twitter-1.0.css"
    />
    <style>
      bento-twitter {
        width: 375px;
        height: 472px;
      }
    </style>
  </head>
  <body>
    <bento-twitter id="my-tweet" data-tweetid="885634330868850689"></bento-twitter>
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
  href="https://cdn.ampproject.org/v0/bento-twitter-1.0.css"
/>
```

Sebagai pilihan lain, Anda juga dapat membuat gaya pra-peningkatan ringan yang tersedia inline:

```html
<style>
  bento-twitter {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

#### Jenis wadah

Komponen `bento-twitter` memiliki jenis ukuran tata letak yang telah ditentukan. Untuk memastikan bahwa komponen dirender dengan benar, pastikan untuk menerapkan ukuran pada komponen dan turunan langsungnya (slide) melalui tata letak CSS yang diinginkan (seperti yang ditentukan dengan `height`, `width`, `aspect-ratio`, atau properti sejenis lainnya):

```css
bento-twitter {
  height: 100px;
  width: 100%;
}
```

### Atribut

<table>
  <tr>
    <td width="40%"><strong>data-tweetid / data-momentid / data-timeline-source-type (diperlukan)</strong></td>
    <td>ID Tweet atau Momen, atau jenis sumber jika Lini Masa (Timeline) harus ditampilkan. Dalam URL seperti https://twitter.com/joemccann/status/640300967154597888, <code>640300967154597888</code> adalah ID tweet. Dalam URL seperti https://twitter.com/i/moments/1009149991452135424, <code>1009149991452135424</code> adalah ID momen. Jenis sumber lini masa yang valid termasuk <code>profile</code>, <code>likes</code>, <code>list</code>, <code>collection</code>, <code>url</code>, dan <code>widget</code>.</td>
  </tr>
  <tr>
    <td width="40%"><strong>data-timeline-* (opsional)</strong></td>
    <td>Saat menampilkan lini masa, argumen lebih lanjut perlu diberikan selain <code>timeline-source-type</code>. Misalnya, <code>data-timeline-screen-name="amphtml"</code> dikombinasikan dengan <code>data-timeline-source-type="profile"</code> akan menampilkan lini masa akun Twitter AMP. Untuk detail tentang argumen yang tersedia, lihat bagian "Lini Masa" di <a href="https://developer.twitter.com/en/docs/twitter-for-websites/javascript-api/guides/scripting-factory-functions">Panduan Fungsi Pabrik JavaScript Twitter</a>.</td>
  </tr>
  <tr>
    <td width="40%"><strong>data-* (opsional)</strong></td>
    <td>Anda dapat menentukan opsi untuk tampilan Tweet, Momen, atau Lini Masa dengan menetapkan atribut <code>data-</code>. Misalnya, <code>data-cards="hidden"</code> menonaktifkan kartu Twitter. Untuk mengetahui detail tentang opsi yang tersedia, lihat dokumen Twitter <a href="https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference">untuk tweet</a>, <a href="https://developer.twitter.com/en/docs/twitter-for-websites/moments/guides/parameter-reference0">untuk momen,</a> dan <a href="https://developer.twitter.com/en/docs/twitter-for-websites/timelines/guides/parameter-reference">untuk lini masa</a>.</td>
  </tr>
   <tr>
    <td width="40%"><strong>title (opsional)</strong></td>
    <td>Tentukan atribut <code>title</code> untuk komponen. Standarnya adalah <code>Twitter</code>.</td>
  </tr>
</table>

### Interaktivitas dan penggunaan API

Mengubah nilai atribut yang mana pun secara terprogram akan secara otomatis memperbarui elemen. Contoh: dengan mengubah ID tweet melalui `data-url` akan secara otomatis memuat tweet yang baru:

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
      src="https://cdn.ampproject.org/v0/bento-twitter-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-twitter-1.0.js"
    ></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.ampproject.org/v0/bento-twitter-1.0.css"
    />
    <style>
      bento-twitter {
        width: 375px;
        height: 472px;
      }
    </style>
  </head>
  <body>
    <bento-twitter id="my-tweet" data-tweetid="885634330868850689">
    </bento-twitter>
    <div class="buttons" style="margin-top: 8px">
      <button id="change-tweet">Change tweet</button>
    </div>

    <script>
      (async () => {
        const twitter = document.querySelector('#my-tweet');

        // set up button actions
        document.querySelector('#change-tweet').onclick = () => {
          twitter.setAttribute('data-tweetid', '495719809695621121');
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
npm install @bentoproject/twitter
```

```javascript
import React from 'react';
import {BentoTwitter} from '@bentoproject/twitter/react';
import '@bentoproject/twitter/styles.css';

function App() {
  return <BentoTwitter tweetid="1356304203044499462"></BentoTwitter>;
}
```

### Tata letak dan gaya

#### Jenis wadah

Komponen `BentoTwitter` memiliki jenis ukuran tata letak yang telah ditentukan. Untuk memastikan bahwa komponen dirender dengan benar, pastikan untuk menerapkan ukuran pada komponen dan turunan langsungnya (slide) melalui tata letak CSS yang diinginkan (seperti yang ditentukan dengan `height`, `width`, `aspect-ratio`, atau properti sejenis lainnya). Ini dapat diterapkan inline:

```jsx
<BentoTwitter
  style={% raw %}{{width: 300, height: 100}}{% endraw %}
  tweetid="1356304203044499462"
></BentoTwitter>
```

Atau melalui `className`:

```jsx
<BentoTwitter
  className="custom-styles"
  tweetid="1356304203044499462"
></BentoTwitter>
```

```css
.custom-styles {
  height: 100px;
  width: 100%;
}
```

## Prop

<table>
  <tr>
    <td width="40%"><strong>tweetid / momentid / timelineSourceType (diperlukan)</strong></td>
    <td>ID Tweet atau Momen, atau jenis sumber jika Lini Masa (Timeline) harus ditampilkan. Dalam URL seperti https://twitter.com/joemccann/status/640300967154597888, <code>640300967154597888</code> adalah ID tweet. Dalam URL seperti https://twitter.com/i/moments/1009149991452135424, <code>1009149991452135424</code> adalah ID momen. Jenis sumber lini masa yang valid termasuk <code>profile</code>, <code>likes</code>, <code>list</code>, <code>collection</code>, <code>url</code>, dan <code>widget</code>.</td>
  </tr>
  <tr>
    <td width="40%"><strong>card / conversations (opsional)</strong></td>
    <td>Saat menampilkan tweet, argumen lebih lanjut dapat diberikan, selain <code>tweetid</code>. Misalnya, <code>cards="hidden"</code> yang dikombinasikan dengan <code>conversation="none"</code> akan menampilkan tweet tanpa thumbnail (gambar mini) atau komentar tambahan.</td>
  </tr>
  <tr>
    <td width="40%"><strong>limit (opsional)</strong></td>
    <td>Saat menampilkan momen, argumen lebih lanjut dapat diberikan, selain <code>moment</code>. Misalnya, <code>limit="5"</code> akan menampilkan momen tersemat hingga lima kartu.</td>
  </tr>
  <tr>
    <td width="40%"><strong>timelineScreenName / timelineUserId (opsional)</strong></td>
    <td>Saat menampilkan lini masa, argumen lebih lanjut dapat diberikan, selain <code>timelineSourceType</code>. Misalnya, <code>timelineScreenName="amphtml"</code> yang dikombinasikan dengan <code>timelineSourceType="profile"</code> akan menampilkan lini masa akun Twitter AMP.</td>
  </tr>
  <tr>
    <td width="40%"><strong>options (opsional)</strong></td>
    <td>Anda dapat menentukan pilihan untuk penampilan Tweet, Moment, atau Lini Masa Timeline dengan melewatkan sebuah objek ke prop <code>options</code>. Untuk mengetahui secara lebih mendetail tentang pilihan yang tersedia, kunjungi dokumen Twitter <a href="https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference">untuk tweet</a>, <a href="https://developer.twitter.com/en/docs/twitter-for-websites/moments/guides/parameter-reference0">untuk moment</a>, dan <a href="https://developer.twitter.com/en/docs/twitter-for-websites/timelines/guides/parameter-reference">untuk lini masa</a>. Catatan: Saat melewatkan prop `options`, pastikan untuk mengoptimalkan atau mengingat objek tersebut: <pre>const TWITTER_OPTIONS = { // make sure to define these once globally! }; function MyComponent() { // etc return ( &amp;ltTwitter optionsProps={TWITTER_OPTIONS} /&gt; ); }</pre>
</td>
  </tr>
   <tr>
    <td width="40%"><strong>title (opsional)</strong></td>
    <td>Tentukan <code>title</code> untuk iframe komponen. Standarnya adalah <code>Twitter</code>.</td>
  </tr>
</table>
