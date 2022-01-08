---
id: bento-stream-gallery
title: Bento Stream Gallery
permalink: "/tr/components/bento-stream-gallery/"
short_title: Stream Gallery
layout: layouts/component.njk
description: Bento Stream Gallery, yatay bir eksen boyunca aynı anda birden çok benzer içerik parçasını görüntülemek içindir.
---

# Bento Stream Gallery

{% heroexample 'bento-stream-gallery' %}

Bento Stream Gallery, yatay bir eksen boyunca aynı anda birden çok benzer içerik parçasını görüntülemek içindir.

Bu, Bento Base Carousel'in bir uzmanlığıdır ve kapsayıcının genişliğine göre görüntülenen slaytların boyutunu ve sayısını dinamik olarak ayarlamak için [ResizeObservers'ı kullanır.](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver) Daha özelleştirilmiş bir UX uygulamak için bkz. [`<bento-base-carousel>`](../../amp-base-carousel/1.0/README.md).

<div class="bd-usage bd-card bd-card--light-sea-green">
<p>bento-stream-gallery'ı bir web bileşeni veya bir React işlevsel bileşeni olarak kullanın:</p> <a class="bd-button" href="#web-component">↓ Web Bileşeni</a> <a class="bd-button" href="#preact%2Freact-component">↓ React / Preact</a>
</div>

## Web Bileşeni

Uygun yüklemeyi garanti etmek için ve özel stiller eklemeden önce her Bento bileşeninin gerekli CSS kitaplığını eklemelisiniz. Veya satır içi olarak sunulan hafif ön yükseltme stillerini kullanın. [Yerleşim ve stil](#layout-and-style) konusuna bakın.

### npm ile içe aktarma

```bash
npm install @bentoproject/stream-gallery
```

```javascript
import {defineElement as defineBentoStreamGallery} from '@bentoproject/stream-gallery';
defineBentoStreamGallery();
```

### `<script>` ile ekleme

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.css" crossorigin="anonymous">
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

### Etkileşim ve API kullanımı

Bento bileşenleri, API'leri aracılığıyla yüksek düzeyde etkileşimlidir. `bento-stream-gallery` bileşen API'sine, belgenize aşağıdaki komut dosyası etiketi eklenerek erişilebilir:

```javascript
await customElements.whenDefined('bento-stream-gallery');
const api = await streamGallery.getApi();
```

#### Eylemler

##### next()

Döngüyü, görünen slayt sayısına göre ileri doğru hareket ettirir.

```js
api.next();
```

##### prev()

Döngüyü, görünen slayt sayısına göre geriye doğru hareket ettirir.

```js
api.prev();
```

##### goToSlide(index: number)

`index` bağımsız değişkeni ile belirtilen slayta döngüyü hareket ettirir.

Not: `index`, 0'dan büyük veya <code>0</code>'a eşit ve verilen slayt sayısından küçük bir sayıya normalize edilecektir.

```js
api.goToSlide(0); // Advance to first slide.
api.goToSlide(length - 1); // Advance to last slide.
```

#### Olaylar

Bento Stream Gallery bileşeni, aşağıdaki olayları kaydetmenize ve bunlara yanıt vermenize olanak tanır:

##### slideChange

Bu olay, döngü tarafından görüntülenen dizin değiştiğinde tetiklenir. Yeni dizine `event.data.index` aracılığıyla erişilebilir.

```js
streamGallery.addEventListener('slideChange', (e) => console.log(e.data.index));
```

### Yerleşim ve stil

[Her Bento bileşeni, içerik kaymaları](https://web.dev/cls/) olmadan düzgün yüklemeyi garanti etmek için eklemeniz gereken küçük bir CSS kitaplığına sahiptir. Düzene dayalı özgüllük nedeniyle, herhangi bir özel stilden önce stil sayfalarının dahil edilmesini manuel olarak sağlamalısınız.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.css"
/>
```

Alternatif olarak, hafif ön yükseltme stillerini satır içi olarak da kullanıma sunabilirsiniz:

```html
<style>
  bento-stream-gallery {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

#### API Örneği

Bu örnek, programlı olarak sonraki/önceki slayta nasıl geçileceğini ve belirli slaytlara nasıl geçileceğini gösterir.

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

### Öznitelikler

#### Davranış

##### `controls`

`"always"` , `"auto"` veya `"never"` şeklindedir ve varsayılan olarak `"auto"` olacaktır. Bu, önceki/sonraki gezinme oklarının görüntülenip görüntülenmeyeceğini ve ne zaman görüntüleneceğini belirler. Not: `outset-arrows` `true` olduğunda, oklar `"always"` gösterilir.

- `always` : Oklar her zaman gösterilir.
- `auto` : Döngü en son fare aracılığıyla etkileşim aldığında oklar gösterilir ve döngü en son dokunma yoluyla etkileşim aldığında görüntülenmez. Dokunmatik cihazlar için ilk yüklemede, ilk etkileşime kadar oklar görüntülenir.
- `never` : Oklar hiçbir zaman gösterilmez.

##### `extra-space`

Ya `"around"` ya da tanımsız. Bu, döngüde hesaplanan görünür slayt sayısını görüntüledikten sonra fazladan alanın nasıl ayrılacağını belirler. `"around"` seçilmişse, beyaz boşluk, `justify-content: center` ile döngü çevresinde eşit dağıtılır; aksi takdirde, LTR (soldan sağa) dokümanları için döngünün sağında ve RTL (sağdan sola) dokümanları için solunda yer ayrılır.

##### `loop`

`true` veya `false`; varsayılan olarak `true`. True olduğunda, döngü kullanıcının ilk öğeden son öğeye geri dönmesine izin verir ve bunun tersi de geçerlidir. Döngünün gerçekleşmesi için en az üç slayt bulunmalıdır.

##### `outset-arrows`

`true` veya `false` varsayılan olarak `false`. True olduğunda, döngü oklarını başlangıçta ve slaytların her iki tarafında görüntüler. Başlangıç oklarıyla, slayt kapsayıcısının, verilen kapsayıcı için ayrılan alandan 100 piksel daha az etkin uzunluğa sahip olacağını unutmayın - her iki tarafta ok başına 50 piksel. Yanlış olduğunda döngü oklarını slaytların sol ve sağ kenarlarının üzerinde ve üst üste bindirilmiş olarak gösterir.

##### `peek`

Bir sayı; varsayılan olarak `0`. Bu, döngünün kaydırılabilir olduğunu belirten kullanıcıya bir kolaylık olarak (geçerli slaydın bir veya iki tarafında) ek bir slaydın ne kadarının gösterileceğini belirler.

#### Galeri slayt görünürlüğü

##### `min-visible-count`

Bir sayı; varsayılan olarak `1` . Belirli bir zamanda gösterilmesi gereken minimum slayt sayısını belirler. Kesirli değerler, ek slayt(lar)ın bir kısmını görünür kılmak için kullanılabilir.

##### `max-visible-count`

Bir sayı, varsayılan olarak [`Number.MAX_VALUE`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE). Belirli bir zamanda gösterilmesi gereken maksimum slayt sayısını belirler. Kesirli değerler, ek slayt(lar)ın bir kısmını görünür kılmak için kullanılabilir.

##### `min-item-width`

Bir sayı; varsayılan olarak `1`. Galerinin toplam genişliği içinde aynı anda kaç tane tam öğenin gösterilebileceğini çözmek için kullanılan her bir öğenin minimum genişliğini belirler.

##### `max-item-width`

Bir sayı; varsayılan olarak [`Number.MAX_VALUE`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE). Galerinin toplam genişliği içinde aynı anda kaç tane tam öğenin gösterilebileceğini çözmek için kullanılan her bir öğenin maksimum genişliğini belirler.

#### Slayt tutturma

##### `slide-align`

`start` veya `center` şeklindedir. Hizalamaya başlarken, bir slaytın başlangıcı (örneğin, yatay hizalama sırasında sol kenar) bir döngü başlangıcı ile hizalanır. Merkeze hizalama sırasında, bir slaytın merkezi, bir döngünün merkezi ile hizalanır.

##### `snap`

`true` veya `false` olabilir, varsayılan olarak `true` şeklindedir. Kaydırma sırasında döngünün slaytlara tutturulmasının gerekip gerekmediğini belirler.

### Stil

StreamGallery'ye özgürce stil vermek için `bento-stream-gallery` öğe seçiciyi kullanabilirsiniz.

---

## Preact/React Bileşeni

### npm ile içe aktarma

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

### Etkileşim ve API kullanımı

Bento bileşenleri, API'leri aracılığıyla yüksek düzeyde etkileşimlidir. `BentoStreamGallery` bileşen API'sine, bir `ref` geçirerek erişilebilir:

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

#### Eylemler

`BentoStreamGallery` API, aşağıdaki eylemleri gerçekleştirmenize olanak tanır:

##### next()

`advanceCount` slaytlarıyla ileri doğru hareket ettirir.

```javascript
ref.current.next();
```

##### prev()

`advanceCount` slaytları ile döngüyü geriye doğru hareket ettirir.

```javascript
ref.current.prev();
```

##### goToSlide(index: number)

Döngüyü `index` bağımsız değişkeni tarafından belirtilen slayda taşır. Not: `index`, 0'dan büyük veya `0`'a eşit ve verilen slayt sayısından küçük bir sayıya normalize edilecektir.

```javascript
ref.current.goToSlide(0); // Advance to first slide.
ref.current.goToSlide(length - 1); // Advance to last slide.
```

#### Olaylar

##### onSlideChange

Bu olay, döngü tarafından görüntülenen dizin değiştiğinde tetiklenir.

```jsx
<BentoStreamGallery style={% raw %}{{height: 150}}{% endraw %} onSlideChange={(index) => console.log(index)}>
  <img src="puppies.jpg" />
  <img src="kittens.jpg" />
  <img src="hamsters.jpg" />
</BentoStreamGallery>
```

### Yerleşim ve stil

#### Kapsayıcı tipi

`BentoStreamGallery` bileşeninin tanımlanmış bir yerleşim boyutu türü vardır. Bileşenin doğru bir şekilde oluşturulduğundan emin olmak için, bileşene ve onun en yakın alt öğelerine istenen bir CSS yerleşimi ile bir boyut uygulamayı unutmayın (örneğin, `width` ile tanımlanmış bir düzen). Bunlar satır içinde uygulanabilir:

```jsx
<BentoStreamGallery style={% raw %}{{width: 300}}{% endraw %}>...</BentoStreamGallery>
```

Veya `className` aracılığıyla:

```jsx
<BentoStreamGallery className="custom-styles">...</BentoStreamGallery>
```

```css
.custom-styles {
  background-color: red;
}
```

### Aksesuarlar

#### Ortak aksesuarlar

Bu bileşen, React ve Preact bileşenleri için [ortak aksesuarları](../../../docs/spec/bento-common-props.md) destekler.

#### Davranış

##### `controls`

`"always"` , `"auto"` veya `"never"` şeklindedir ve varsayılan olarak `"auto"` olacaktır. Bu, önceki/sonraki gezinme oklarının görüntülenip görüntülenmeyeceğini ve ne zaman görüntüleneceğini belirler. Not: `outset-arrows` `true` olduğunda, oklar `"always"` gösterilir.

- `always` : Oklar her zaman gösterilir.
- `auto` : Döngü en son fare aracılığıyla etkileşim aldığında oklar gösterilir ve döngü en son dokunma yoluyla etkileşim aldığında görüntülenmez. Dokunmatik cihazlar için ilk yüklemede, ilk etkileşime kadar oklar görüntülenir.
- `never` : Oklar hiçbir zaman gösterilmez.

##### `extraSpace`

Ya `"around"` ya da tanımsız. Bu, döngüde hesaplanan görünür slayt sayısını görüntüledikten sonra fazladan alanın nasıl ayrılacağını belirler. `"around"` seçilmişse, beyaz boşluk, `justify-content: center` ile döngü çevresinde eşit dağıtılır; aksi takdirde, LTR (soldan sağa) dokümanları için döngünün sağında ve RTL (sağdan sola) dokümanları için solunda yer ayrılır.

##### `loop`

`true` veya `false`; varsayılan olarak `true`. True olduğunda, döngü kullanıcının ilk öğeden son öğeye geri dönmesine izin verir ve bunun tersi de geçerlidir. Döngünün gerçekleşmesi için en az üç slayt bulunmalıdır.

##### `outsetArrows`

`true` veya `false` varsayılan olarak `false`. True olduğunda, döngü oklarını başlangıçta ve slaytların her iki tarafında görüntüler. Başlangıç oklarıyla, slayt kapsayıcısının, verilen kapsayıcı için ayrılan alandan 100 piksel daha az etkin uzunluğa sahip olacağını unutmayın - her iki tarafta ok başına 50 piksel. Yanlış olduğunda döngü oklarını slaytların sol ve sağ kenarlarının üzerinde ve üst üste bindirilmiş olarak gösterir.

##### `peek`

Bir sayı; varsayılan olarak `0`. Bu, döngünün kaydırılabilir olduğunu belirten kullanıcıya bir kolaylık olarak (geçerli slaydın bir veya iki tarafında) ek bir slaydın ne kadarının gösterileceğini belirler.

#### Galeri slayt görünürlüğü

##### `minVisibleCount`

Bir sayı; varsayılan olarak `1` . Belirli bir zamanda gösterilmesi gereken minimum slayt sayısını belirler. Kesirli değerler, ek slayt(lar)ın bir kısmını görünür kılmak için kullanılabilir.

##### `maxVisibleCount`

Bir sayı, varsayılan olarak [`Number.MAX_VALUE`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE). Belirli bir zamanda gösterilmesi gereken maksimum slayt sayısını belirler. Kesirli değerler, ek slayt(lar)ın bir kısmını görünür kılmak için kullanılabilir.

##### `minItemWidth`

Bir sayı; varsayılan olarak `1`. Galerinin toplam genişliği içinde aynı anda kaç tane tam öğenin gösterilebileceğini çözmek için kullanılan her bir öğenin minimum genişliğini belirler.

##### `maxItemWidth`

Bir sayı; varsayılan olarak [`Number.MAX_VALUE`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE). Galerinin toplam genişliği içinde aynı anda kaç tane tam öğenin gösterilebileceğini çözmek için kullanılan her bir öğenin maksimum genişliğini belirler.

#### Slayt tutturma

##### `slideAlign`

`start` veya `center` şeklindedir. Hizalamaya başlarken, bir slaytın başlangıcı (örneğin, yatay hizalama sırasında sol kenar) bir döngü başlangıcı ile hizalanır. Merkeze hizalama sırasında, bir slaytın merkezi, bir döngünün merkezi ile hizalanır.

##### `snap`

`true` veya `false` olabilir, varsayılan olarak `true` şeklindedir. Kaydırma sırasında döngünün slaytlara tutturulmasının gerekip gerekmediğini belirler.
