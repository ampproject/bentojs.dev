---
id: bento-sidebar
title: Bento Sidebar
permalink: "/tr/components/bento-sidebar/"
short_title: Sidebar
layout: layouts/component.njk
description: |-
  Gezinme, bağlantılar, düğmeler, menüler
  gibi geçici erişime yönelik meta içeriği görüntülemenin bir yolunu sağlar.
---

# Bento Sidebar

{% heroexample 'bento-sidebar' %}

Bento Side Bar'ı bir <a><code>&lt;bento-sidebar&gt;</code></a> web bileşeni veya Preact/React işlevsel bileşeni <a><code>&lt;BentoSidebar&gt;</code></a> olarak kullanın.

<div class="bd-usage bd-card bd-card--light-sea-green">
<p>bento-sidebar'ı bir web bileşeni veya bir React işlevsel bileşeni olarak kullanın:</p> <a class="bd-button" href="#web-component">↓ Web Bileşeni</a> <a class="bd-button" href="#preact%2Freact-component">↓ React / Preact</a>
</div>

## Web Bileşeni

Uygun yüklemeyi garanti etmek için ve özel stiller eklemeden önce her Bento bileşeninin gerekli CSS kitaplığını eklemelisiniz. Veya satır içi olarak sunulan hafif ön yükseltme stillerini kullanın. [Yerleşim ve stil](#layout-and-style) konusuna bakın.

### npm ile içe aktarma

```bash
npm install @bentoproject/sidebar
```

```javascript
import {defineElement as defineBentoSidebar} from '@bentoproject/sidebar';
defineBentoSidebar();
```

### `<script>` ile ekleme

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-sidebar-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-sidebar-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-sidebar-1.0.css" crossorigin="anonymous">
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

### Etkileşim ve API kullanımı

Bento bileşenleri, API'leri aracılığıyla yüksek düzeyde etkileşimlidir. `bento-sidebar` bileşen API'sine, belgenize aşağıdaki komut dosyası etiketi eklenerek erişilebilir:

```javascript
await customElements.whenDefined('bento-sidebar');
const api = await carousel.getApi();
```

#### Eylemler

`bento-sidebar` API, aşağıdaki eylemleri gerçekleştirmenize olanak tanır:

##### open()

Kenar çubuğunu açar.

```javascript
api.open();
```

##### close()

Kenar çubuğunu kapatır.

```javascript
api.close();
```

##### toggle()

Kenar çubuğunun açık durumunu değiştirir.

```javascript
api.toggle(0);
```

### Yerleşim ve stil

[Her Bento bileşeni, içerik kaymaları](https://web.dev/cls/) olmadan düzgün yüklemeyi garanti etmek için eklemeniz gereken küçük bir CSS kitaplığına sahiptir. Düzene dayalı özgüllük nedeniyle, herhangi bir özel stilden önce stil sayfalarının dahil edilmesini manuel olarak sağlamalısınız.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-sidebar-1.0.css"
/>
```

Alternatif olarak, hafif ön yükseltme stillerini satır içi olarak da kullanıma sunabilirsiniz:

```html
<style>
  bento-sidebar:not([open]) {
    display: none !important;
  }
</style>
```

#### Özel stiller

`bento-sidebar` bileşeni, standart CSS ile şekillendirilebilir.

- `bento-sidebar` `width` boyutu önceden belirlenmiş 45px değerinden genişliğini belirlemek için ayarlanabilir.
- Gerekirse kenar çubuğunun yüksekliğini belirlemek için `bento-sidebar` yüksekliği ayarlanabilir. Yükseklik 100vw'yi aşarsa, kenar çubuğunda dikey bir kaydırma çubuğu olacaktır. Kenar çubuğunun önceden ayarlanmış yüksekliği 100vw'dir ve kısaltmak için CSS'de geçersiz kılınabilir.
- Kenar çubuğunun mevcut durumu, kenar çubuğu sayfada açıkken `bento-sidebar` etiketinde ayarlanan `open` yoluyla gösterilir.

```css
bento-sidebar[open] {
  height: 100%;
  width: 50px;
}
```

### UX ile ilgili hususlar

`<bento-sidebar>` kullanırken, kullanıcılarınızın sayfanızı genellikle sabit konumlu bir başlık gösterecek mobil cihazlarda görüntüleyeceğini unutmayın. Ayrıca, tarayıcılar genellikle sayfanın üst kısmında kendi sabit başlıklarını gösterir. Ekranın üstüne başka bir sabit konumlu öğe eklemek, kullanıcıya yeni bilgi vermeyen içerikle birlikte büyük miktarda mobil ekran alanı kaplar.

Bu nedenle, kenar çubuğunu açma olanaklarının sabit, tam genişlikte bir başlığa yerleştirilmemesini öneririz.

- Kenar çubuğu, bir sayfanın yalnızca sol veya sağ tarafında görünebilir.
- Kenar çubuğunun maksimum yüksekliği 100vh'dir, yükseklik 100vh'yi aşarsa dikey bir kaydırma çubuğu görünür. Varsayılan yükseklik, CSS'de 100vh'ye ayarlanmıştır ve CSS'de geçersiz kılınabilir.
- Kenar çubuğunun genişliği CSS kullanılarak belirlenebilir ve ayarlanabilir.
- Erişilebilirlik için mantıksal bir DOM sırasını korumak ve davranışını bir kapsayıcı öğesi tarafından değiştirmekten kaçınmak için `<bento-sidebar>` öğesinin <code>&lt;body&gt;</code> &gt; öğesinin doğrudan alt öğesi olması <em>önerilir.</em> `z-index` ayarlanmış bir `bento-sidebar` üst öğesine sahip olmanın, kenar çubuğunun diğer öğelerin (başlıklar gibi) altında görünmesine ve işlevselliğini bozmasına neden olabileceğini unutmayın.

### Öznitelikler

#### side

Kenar çubuğunun sayfanın hangi tarafından, `left` veya `right`, açılması gerektiğini belirtir. Bir `side` belirtilmezse, `side` değeri `body` etiketinin `dir` özniteliğinden (`ltr` =&gt; `left`, `rtl` =&gt; `right`) alınır; `dir` yoksa, `side` varsayılan olarak `left` olur.

#### open

Bu öznitelik, kenar çubuğu açıkken mevcuttur.

---

## Preact/React Bileşeni

### npm ile içe aktarma

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

### Etkileşim ve API kullanımı

Bento bileşenleri, API'leri aracılığıyla yüksek düzeyde etkileşimlidir. `BentoSidebar` bileşen API'sine, bir `ref` geçirerek erişilebilir:

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

#### Eylemler

`BentoSidebar` API, aşağıdaki eylemleri gerçekleştirmenize olanak tanır:

##### open()

Kenar çubuğunu açar.

```javascript
ref.current.open();
```

##### close()

Kenar çubuğunu kapatır.

```javascript
ref.current.close();
```

##### toggle()

Kenar çubuğunun açık durumunu değiştirir.

```javascript
ref.current.toggle(0);
```

### Yerleşim ve stil

`BentoSidebar` bileşeni, standart CSS ile şekillendirilebilir.

- `bento-sidebar` `width` boyutu önceden belirlenmiş 45px değerinden genişliğini belirlemek için ayarlanabilir.
- Gerekirse kenar çubuğunun yüksekliğini belirlemek için `bento-sidebar` yüksekliği ayarlanabilir. Yükseklik 100vw'yi aşarsa, kenar çubuğunda dikey bir kaydırma çubuğu olacaktır. Kenar çubuğunun önceden ayarlanmış yüksekliği 100vw'dir ve kısaltmak için CSS'de geçersiz kılınabilir.

Bileşenin istediğiniz gibi derlenmesini sağlamak için bileşene bir boyut uyguladığınızdan emin olun. Bunlar satır içi olarak uygulanabilir:

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

Veya `className` aracılığıyla:

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

### UX ile ilgili hususlar

`<BentoSidebar>` kullanırken, kullanıcılarınızın sayfanızı genellikle sabit konumlu bir başlık gösterecek mobil cihazlarda görüntüleyeceğini unutmayın. Ayrıca, tarayıcılar genellikle sayfanın üst kısmında kendi sabit başlıklarını gösterir. Ekranın üstüne başka bir sabit konumlu öğe eklemek, kullanıcıya yeni bilgi vermeyen içerikle birlikte büyük miktarda mobil ekran alanı kaplar.

Bu nedenle, kenar çubuğunu açma olanaklarının sabit, tam genişlikte bir başlığa yerleştirilmemesini öneririz.

- Kenar çubuğu, bir sayfanın yalnızca sol veya sağ tarafında görünebilir.
- Kenar çubuğunun maksimum yüksekliği 100vh'dir, yükseklik 100vh'yi aşarsa dikey bir kaydırma çubuğu görünür. Varsayılan yükseklik, CSS'de 100vh'ye ayarlanmıştır ve CSS'de geçersiz kılınabilir.
- Kenar çubuğunun genişliği CSS kullanılarak belirlenebilir ve ayarlanabilir.
- Erişilebilirlik için mantıksal bir DOM sırasını korumak ve davranışını bir kapsayıcı öğesi tarafından değiştirmekten kaçınmak için `<BentoSidebar>` öğesinin <code>&lt;body&gt;</code> &gt; öğesinin doğrudan alt öğesi olması <em>önerilir.</em> `z-index` ayarlanmış bir `BentoSidebar` üst öğesine sahip olmanın, kenar çubuğunun diğer öğelerin (başlıklar gibi) altında görünmesine ve işlevselliğini bozmasına neden olabileceğini unutmayın.

### Aksesuarlar

#### side

Kenar çubuğunun sayfanın hangi tarafından, `left` veya `right`, açılması gerektiğini belirtir. Bir `side` belirtilmezse, `side` değeri `body` etiketinin `dir` özniteliğinden (`ltr` =&gt; `left`, `rtl` =&gt; `right`) alınır; `dir` yoksa, `side` varsayılan olarak `left` olur.
