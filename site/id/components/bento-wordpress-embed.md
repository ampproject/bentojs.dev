---
id: bento-wordpress-embed
title: Bento WordPress Embed
permalink: "/id/components/bento-wordpress-embed/"
short_title: WordPress Embed
layout: layouts/component.njk
description: Sebuah iframe yang menampilkan <a href="https://make.wordpress.org/core/2015/10/28/new-embeds-feature-in-wordpress-4-4/">kutipan</a> dari halaman atau postingan WordPress.
---

# Bento WordPress Embed

{% heroexample 'bento-wordpress-embed' %}

Sebuah iframe yang menampilkan [kutipan](https://make.wordpress.org/core/2015/10/28/new-embeds-feature-in-wordpress-4-4/) dari halaman atau postingan WordPress.

<div class="bd-usage bd-card bd-card--light-sea-green">
<p>Gunakan bento-wordpress-embed sebagai komponen web atau komponen fungsional React:</p> <a class="bd-button" href="#web-component">↓ Komponen Web</a> <a class="bd-button" href="#preact%2Freact-component">↓ React/Preact</a>
</div>

## Komponen Web

Anda harus menyertakan perpustakaan CSS yang diperlukan setiap komponen Bento untuk menjamin pemuatan yang tepat dan sebelum menambahkan gaya khusus. Atau gunakan gaya pra-peningkatan ringan yang tersedia inline. Lihat [Tata Letak dan gaya](#layout-and-style) .

### Impor melalui npm

```bash
npm install @bentoproject/wordpress-embed
```

```javascript
import {defineElement as defineBentoWordpressEmbed} from '@bentoproject/wordpress-embed';
defineBentoWordpressEmbed();
```

### Sertakan melalui `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-wordpress-embed-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-wordpress-embed-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-wordpress-embed-1.0.css" crossorigin="anonymous">
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
      src="https://cdn.ampproject.org/v0/bento-wordpress-embed-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-wordpress-embed-1.0.js"
    ></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.ampproject.org/v0/bento-wordpress-embed-1.0.css"
    />
  </head>
  <body>
    <bento-wordpress-embed
      id="my-embed"
      style="width: 300px; height: 400px"
      data-url="https://make.wordpress.org/core/2015/10/28/new-embeds-feature-in-wordpress-4-4/"
    ></bento-wordpress-embed>
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
  href="https://cdn.ampproject.org/v0/bento-wordpress-embed-1.0.css"
/>
```

Sebagai pilihan lain, Anda juga dapat membuat gaya pra-peningkatan ringan yang tersedia inline:

```html
<style>
  bento-wordpress-embed {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

#### Jenis wadah

Komponen `bento-wordpress-embed` memiliki jenis ukuran tata letak yang telah ditentukan. Untuk memastikan bahwa komponen dirender dengan benar, pastikan untuk menerapkan ukuran pada komponen dan turunan langsungnya (slide) melalui tata letak CSS yang diinginkan (seperti yang ditentukan dengan `height`, `width`, `aspect-ratio`, atau properti sejenis lainnya):

```css
bento-wordpress-embed {
  height: 100px;
  width: 100%;
}
```

### Atribut

#### data-url (diperlukan)

URL postingan yang akan disematkan. Mengubah nilai atribut secara terprogram akan secara otomatis memperbarui konten yang disematkan.

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
      src="https://cdn.ampproject.org/v0/bento-wordpress-embed-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-wordpress-embed-1.0.js"
    ></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.ampproject.org/v0/bento-wordpress-embed-1.0.css"
    />
  </head>
  <body>
    <bento-wordpress-embed
      id="my-embed"
      style="width: 300px; height: 400px"
      data-url="https://make.wordpress.org/core/2015/10/28/new-embeds-feature-in-wordpress-4-4/"
    ></bento-wordpress-embed>
    <div class="buttons" style="margin-top: 8px">
      <button id="switch-button">Switch embed</button>
    </div>

    <script>
      (async () => {
        const embed = document.querySelector('#my-embed');
        await customElements.whenDefined('bento-wordpress-embed');

        // set up button actions
        document.querySelector('#switch-button').onclick = () =>
          embed.setAttribute(
            'data-url',
            'https://make.wordpress.org/core/2021/09/09/core-editor-improvement-cascading-impact-of-improvements-to-featured-images/'
          );
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
npm install @bentoproject/wordpress-embed
```

```jsx
import React from 'react';
import {BentoWordPressEmbed} from '@bentoproject/wordpress-embed/react';

function App() {
  return (
    <BentoWordPressEmbed url="https://make.wordpress.org/core/2015/10/28/new-embeds-feature-in-wordpress-4-4/"></BentoWordPressEmbed>
  );
}
```

### Tata letak dan gaya

#### Jenis wadah

Komponen `BentoWordPressEmbedl` memiliki jenis ukuran tata letak yang telah ditentukan. Untuk memastikan bahwa komponen dirender dengan benar, pastikan untuk menerapkan ukuran pada komponen dan turunan langsungnya (slide) melalui tata letak CSS yang diinginkan (seperti yang ditentukan dengan `height`, `width`, `aspect-ratio`, atau properti sejenis lainnya). Ini dapat diterapkan inline:

```jsx
<BentoWordPressEmbed
  style={% raw %}{{width: '100%', height: '100px'}}{% endraw %}
  url="https://make.wordpress.org/core/2015/10/28/new-embeds-feature-in-wordpress-4-4/"
></BentoWordPressEmbed>
```

Atau melalui `className`:

```jsx
<BentoWordPressEmbed
  className="custom-styles"
  url="https://make.wordpress.org/core/2015/10/28/new-embeds-feature-in-wordpress-4-4/"
></BentoWordPressEmbed>
```

```css
.custom-styles {
  height: 100px;
  width: 100%;
}
```

### Prop

#### url (diperlukan)

URL postingan yang akan disematkan.
