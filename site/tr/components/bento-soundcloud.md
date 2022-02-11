---
id: bento-soundcloud
title: Bento Soundcloud
permalink: "/tr/components/bento-soundcloud/"
short_title: Soundcloud
layout: layouts/component.njk
description: Bir <a href="https://soundcloud.com">Soundcloud</a> klibi ekler.
---

# Bento Soundcloud

{% heroexample 'bento-soundcloud' %}

Bir [Soundcloud](https://soundcloud.com) klibi yerleştirir.

<div class="bd-usage bd-card bd-card--light-sea-green">
<p>bento-soundcloud'ı bir web bileşeni veya bir React işlevsel bileşeni olarak kullanın:</p> <a class="bd-button" href="#web-component">↓ Web Bileşeni</a> <a class="bd-button" href="#preact%2Freact-component">↓ React / Preact</a>
</div>

## Web Bileşeni

Uygun yüklemeyi garanti etmek için ve özel stiller eklemeden önce her Bento bileşeninin gerekli CSS kitaplığını eklemelisiniz. Veya satır içi olarak sunulan hafif ön yükseltme stillerini kullanın. [Yerleşim ve stil](#layout-and-style) konusuna bakın.

### npm ile içe aktarma

```bash
npm install @bentoproject/soundcloud
```

```javascript
import {defineElement as defineBentoSoundcloud} from '@bentoproject/soundcloud';
defineBentoSoundcloud();
```

### `<script>` ile ekleme

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.css" crossorigin="anonymous">
```

### Örnek

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
      src="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.js"
    ></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.css"
    />
    <style>
      bento-soundcloud {
        width: 300px;
        height: 300px;
      }
    </style>
  </head>
  <body>
    <bento-soundcloud
      id="my-track"
      data-trackid="89299804"
      data-visual="true"
    ></bento-soundcloud>
  </body>
</html>
```

{% endexample %}

### Yerleşim ve stil

[Her Bento bileşeni, içerik kaymaları](https://web.dev/cls/) olmadan düzgün yüklemeyi garanti etmek için eklemeniz gereken küçük bir CSS kitaplığına sahiptir. Düzene dayalı özgüllük nedeniyle, herhangi bir özel stilden önce stil sayfalarının dahil edilmesini manuel olarak sağlamalısınız.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.css"
/>
```

Alternatif olarak, hafif ön yükseltme stillerini satır içi olarak da kullanıma sunabilirsiniz:

```html
<style>
  bento-soundcloud {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

#### Kapsayıcı tipi

`bento-soundcloud` bileşeninin tanımlanmış bir yerleşim boyutu türü vardır. Bileşenin doğru bir şekilde oluşturulduğundan emin olmak için, bileşene ve onun en yakın alt öğelerine (slaytlar) istenen bir CSS yerleşimi ile bir boyut uygulamayı unutmayın (örneğin `height`, `width`, `aspect-ratio` veya bu tür diğer özelliklerle tanımlanmış bir düzen).

```css
bento-soundcloud {
  height: 100px;
  width: 100%;
}
```

### Öznitelikler

Özniteliklerden birinin programlı olarak değiştirilmesi, oynatıcının otomatik olarak güncellenmesine neden olur.

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
      src="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.js"
    ></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.css"
    />
    <style>
      bento-soundcloud {
        width: 300px;
        height: 300px;
      }
    </style>
  </head>
  <body>
    <bento-soundcloud
      id="my-track"
      data-trackid="89299804"
      data-visual="true"
    ></bento-soundcloud>
    <div class="buttons" style="margin-top: 8px">
      <button id="change-track">Change track</button>
    </div>

    <script>
      (async () => {
        const soundcloud = document.querySelector('#my-track');
        await customElements.whenDefined('bento-soundcloud');

        // set up button actions
        document.querySelector('#change-track').onclick = () => {
          soundcloud.setAttribute('data-trackid', '243169232');
          soundcloud.setAttribute('data-color', 'ff5500');
          soundcloud.removeAttribute('data-visual');
        };
      })();
    </script>
  </body>
</html>
```

{% endexample %}

##### data-track

<code>data-playlistid</code> tanımlı değilse bu öznitelik gereklidir.<br> Bu özniteliğin değeri, bir tam sayı şeklinde bir parçanın kimliğidir.

##### data-playlistid

Bu öznitelik, <code>data-trackid</code> tanımlı değilse gereklidir. Bu özniteliğin değeri, bir tam sayı şeklinde bir oynatma listesinin kimliğidir.

##### data-secret-token (isteğe bağlı)

Özel ise, parçanın gizli simgesi.

##### data-visual (isteğe bağlı)

<code>true</code> ayarlanırsa, tam genişlikte "Visual" modunu görüntüler; aksi takdirde "Classic" mod olarak görüntülenir. Varsayılan değer <code>false</code> şeklindedir.

##### data-color (isteğe bağlı)

Bu özellik, "Classic" mod için özel bir renk geçersiz kılma özelliğidir. Öznitelik "Visual" modunda yok sayılır. Başında # olmadan onaltılık bir renk değeri belirtin (ör. <code>data-color="e540ff"</code>).

---

## Preact/React Bileşeni

### npm ile içe aktarma

```bash
npm install @bentoproject/soundcloud
```

```javascript
import React from 'react';
import {BentoSoundcloud} from '@bentoproject/soundcloud/react';
import '@bentoproject/soundcloud/styles.css';

function App() {
  return <BentoSoundcloud trackId="243169232" visual={true}></BentoSoundcloud>;
}
```

### Yerleşim ve stil

#### Kapsayıcı tipi

`BentoSoundcloud` bileşeninin tanımlanmış bir yerleşim boyutu türü vardır. Bileşenin doğru bir şekilde oluşturulduğundan emin olmak için, bileşene ve onun en yakın alt öğelerine (slaytlar) istenen bir CSS yerleşimi ile bir boyut uygulamayı unutmayın (örneğin `height`, `width`, `aspect-ratio` veya bu tür diğer özelliklerle tanımlanmış bir düzen). Bunlar satır içinde uygulanabilir:

```jsx
<BentoSoundcloud
  style={% raw %}{{width: 300, height: 100}}{% endraw %}
  trackId="243169232"
  visual={true}
></BentoSoundcloud>
```

Veya `className` aracılığıyla:

```jsx
<BentoSoundcloud
  className="custom-styles"
  trackId="243169232"
  visual={true}
></BentoSoundcloud>
```

```css
.custom-styles {
  height: 100px;
  width: 100%;
}
```

### Aksesuarlar

##### trackId

<code>data-playlistid</code> tanımlı değilse bu öznitelik gereklidir.<br> Bu özniteliğin değeri, bir tam sayı şeklinde bir parçanın kimliğidir.

##### playlistId

Bu öznitelik, <code>data-trackid</code> tanımlı değilse gereklidir. Bu özniteliğin değeri, bir tam sayı şeklinde bir oynatma listesinin kimliğidir.

##### secretToken (isteğe bağlı)

Özel ise, parçanın gizli simgesi.

##### visual (isteğe bağlı)

<code>true</code> ayarlanırsa, tam genişlikte "Visual" modunu görüntüler; aksi takdirde "Classic" mod olarak görüntülenir. Varsayılan değer <code>false</code> şeklindedir.

##### color (isteğe bağlı)

Bu özellik, "Classic" mod için özel bir renk geçersiz kılma özelliğidir. Öznitelik "Visual" modunda yok sayılır. Başında # olmadan onaltılık bir renk değeri belirtin (ör. <code>data-color="e540ff"</code>).
