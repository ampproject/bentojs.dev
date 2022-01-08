---
id: bento-mathml
title: Bento MathML
permalink: "/id/components/bento-mathml/"
short_title: MathML
layout: layouts/component.njk
description: Merender rumus MathML dalam sebuah iframe.
---

# Bento MathML

{% heroexample 'bento-mathml' %}

Merender rumus MathML dalam sebuah iframe.

<div class="bd-usage bd-card bd-card--light-sea-green">
<p>Gunakan bento-mathml sebagai komponen web atau komponen fungsional React:</p> <a class="bd-button" href="#web-component">↓ Komponen Web</a> <a class="bd-button" href="#preact%2Freact-component">↓ React/Preact</a>
</div>

## Komponen Web

Anda harus menyertakan perpustakaan CSS yang diperlukan setiap komponen Bento untuk menjamin pemuatan yang tepat dan sebelum menambahkan gaya khusus. Atau gunakan gaya pra-peningkatan ringan yang tersedia inline. Lihat [Tata Letak dan gaya](#layout-and-style) .

### Impor melalui npm

```bash
npm install @bentoproject/mathml
```

```javascript
import {defineElement as defineBentoMathml} from '@bentoproject/mathml';
defineBentoMathml();
```

### Sertakan melalui `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-mathml-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-mathml-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-mathml-1.0.css" crossorigin="anonymous">
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
      src="https://cdn.ampproject.org/v0/bento-mathml-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-mathml-1.0.js"
    ></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.ampproject.org/v0/bento-mathml-1.0.css"
    />
  </head>
  <body>
    <h2>The Quadratic Formula</h2>
    <bento-mathml
      style="height: 40px;"
      data-formula="\[x = {-b \pm \sqrt{b^2-4ac} \over 2a}.\]"
    ></bento-mathml>

    <h2>Inline formula</h2>
    <p>
      This is an example of a formula,
      <bento-mathml
        style="height: 40px; width: 147px"
        inline
        data-formula="\[x = {-b \pm \sqrt{b^2-4ac} \over 2a}.\]"
      ></bento-mathml>
      placed inline in the middle of a block of text.
    </p>
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
  href="https://cdn.ampproject.org/v0/bento-mathml-1.0.css"
/>
```

Sebagai pilihan lain, Anda juga dapat membuat gaya pra-peningkatan ringan yang tersedia inline:

```html
<style>
  bento-mathml {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

### Atribut

#### `data-formula` (diperlukan)

Menentukan rumus yang akan dirender.

#### `inline` (opsional)

Jika ditentukan, komponen merender inline (`inline-block` dalam CSS).

#### title (opsional)

Tentukan `title` untuk komponen yang akan disebarkan ke elemen `<iframe>` yang mendasari. Nilai standarnya adalah `"MathML formula"`.

### Penataan gaya

Anda dapat menggunakan pemilih elemen `bento-mathml` untuk menata akordeon dengan bebas.

---

## Komponen Preact/React

### Impor melalui npm

```bash
npm install @bentoproject/mathml
```

```javascript
import React from 'react';
import {BentoMathml} from '@bentoproject/mathml/react';
import '@bentoproject/mathml/styles.css';

function App() {
  return (
    <>
      <h2>The Quadratic Formula</h2>
      <BentoMathml
        style={% raw %}{{height: 40}}{% endraw %}
        formula="\[x = {-b \pm \sqrt{b^2-4ac} \over 2a}.\]"
      ></BentoMathml>

      <h2>Inline formula</h2>
      <p>
        This is an example of a formula,{' '}
        <BentoMathml
          style={% raw %}{{height: 40, width: 147}}{% endraw %}
          inline
          formula="\[x = {-b \pm \sqrt{b^2-4ac} \over 2a}.\]"
        ></BentoMathml>
        , placed inline in the middle of a block of text. This shows how the formula will fit inside a block of text and can be styled with CSS.
      </p>
    </>
  );
}
```

### Tata letak dan gaya

#### Jenis wadah

Komponen `BentoMathml` memiliki jenis ukuran tata letak yang telah ditentukan. Untuk memastikan bahwa komponen dirender dengan benar, pastikan untuk menerapkan ukuran pada komponen dan turunan (anak) langsungnya melalui tata letak CSS yang diinginkan (seperti yang ditentukan dengan `height`, `width`, `aspect-ratio`, atau properti sejenis lainnya). Ini dapat diterapkan inline:

```jsx
<BentoMathml style={% raw %}{{width: 300, height: 100}}{% endraw %}>...</BentoMathml>
```

Atau melalui `className`:

```jsx
<BentoMathml className="custom-styles">...</BentoMathml>
```

```css
.custom-styles {
  height: 40px;
  width: 147px;
}
```

### Prop

#### `formula` (diperlukan)

Menentukan rumus yang akan dirender.

#### `inline` (opsional)

Jika ditentukan, komponen merender inline (`inline-block` dalam CSS).

#### title (opsional)

Tentukan `title` untuk komponen yang akan disebarkan ke elemen `<iframe>` yang mendasari. Nilai standarnya adalah `"MathML formula"`.
