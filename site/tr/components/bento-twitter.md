---
id: bento-twitter
title: Bento Twitter
permalink: "/tr/components/bento-twitter/"
short_title: Twitter
layout: layouts/component.njk
description: Bir Tweet veya Moment gibi <a href="https://twitter.com">Twitter</a> içeriğini yerleştirir.
---

# Bento Twitter

{% heroexample 'bento-twitter' %}

Bir Tweet veya Moment gibi [Twitter](https://twitter.com) içeriğini ekler.

<div class="bd-usage bd-card bd-card--light-sea-green">
<p>bento-twitter'ı bir web bileşeni veya bir React işlevsel bileşeni olarak kullanın:</p> <a class="bd-button" href="#web-component">↓ Web Bileşeni</a> <a class="bd-button" href="#preact%2Freact-component">↓ React / Preact</a>
</div>

## Web Bileşeni

Uygun yüklemeyi garanti etmek için ve özel stiller eklemeden önce her Bento bileşeninin gerekli CSS kitaplığını eklemelisiniz. Veya satır içi olarak sunulan hafif ön yükseltme stillerini kullanın. [Yerleşim ve stil](#layout-and-style) konusuna bakın.

### npm ile içe aktarma

```bash
npm install @bentoproject/twitter
```

```javascript
import {defineElement as defineBentoTwitters} from '@bentoproject/twitter';
defineBentoTwitters();
```

### `<script>` ile ekleme

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-twitter-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-twitter-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-twitter-1.0.css" crossorigin="anonymous">
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

### Yerleşim ve stil

[Her Bento bileşeni, içerik kaymaları](https://web.dev/cls/) olmadan düzgün yüklemeyi garanti etmek için eklemeniz gereken küçük bir CSS kitaplığına sahiptir. Düzene dayalı özgüllük nedeniyle, herhangi bir özel stilden önce stil sayfalarının dahil edilmesini manuel olarak sağlamalısınız.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-twitter-1.0.css"
/>
```

Alternatif olarak, hafif ön yükseltme stillerini satır içi olarak da kullanıma sunabilirsiniz:

```html
<style>
  bento-twitter {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

#### Kapsayıcı tipi

`bento-twitter` bileşeninin tanımlanmış bir yerleşim boyutu türü vardır. Bileşenin doğru bir şekilde oluşturulduğundan emin olmak için, bileşene ve onun en yakın alt öğelerine (slaytlar) istenen bir CSS yerleşimi ile bir boyut uygulamayı unutmayın (örneğin `height`, `width`, `aspect-ratio` veya bu tür diğer özelliklerle tanımlanmış bir düzen).

```css
bento-twitter {
  height: 100px;
  width: 100%;
}
```

### Öznitelikler

<table>
  <tr>
    <td width="40%"><strong>data-tweetid / data-momentid / data-timeline-source-type (gerekli)</strong></td>
    <td>Tweetin veya Moment'ın Kimliği veya bir Zaman Çizelgesi görüntülenecekse kaynak türü. https://twitter.com/joemccann/status/640300967154597888 gibi bir URL'de, <code>640300967154597888</code> tweet kimliğidir. https://twitter.com/i/moments/1009149991452135424 gibi bir URL'de <code>1009149991452135424</code> Moment kimliğidir. Geçerli zaman çizelgesi kaynak türleri arasında <code>profile</code>, <code>likes</code>, <code>list</code> , <code>collection</code>, <code>url</code> ve <code>widget</code> vardır.</td>
  </tr>
  <tr>
    <td width="40%"><strong>data-timeline-* (isteğe bağlı)</strong></td>
    <td>Bir zaman çizelgesini görüntülerken, zaman <code>timeline-source-type</code> ek olarak başka bağımsız değişkenlerin sağlanması gerekir. Örneğin <code>data-timeline-screen-name="amphtml"</code>, <code>data-timeline-source-type="profile"</code> ile birlikte AMP Twitter hesabının bir zaman çizelgesini görüntüler. Kullanılabilir argümanlarla ilgili ayrıntılar için <a href="https://developer.twitter.com/en/docs/twitter-for-websites/javascript-api/guides/scripting-factory-functions">Twitter'ın JavaScript Fabrika İşlevleri Kılavuzu'ndaki</a> "Zaman Çizelgeleri" bölümüne bakın.</td>
  </tr>
  <tr>
    <td width="40%"><strong>data-* (isteğe bağlı)</strong></td>
    <td>
<code>data-</code> özniteliklerini ayarlayarak Tweet, Moment veya Zaman Çizelgesi görünümü için seçenekleri belirleyebilirsiniz. Örneğin <code>data-cards="hidden"</code> Twitter kartlarını devre dışı bırakır. Kullanılabilir seçeneklerle ilgili ayrıntılar için, <a href="https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference">tweet'ler</a>, <a href="https://developer.twitter.com/en/docs/twitter-for-websites/moments/guides/parameter-reference0">moment'lar</a> ve <a href="https://developer.twitter.com/en/docs/twitter-for-websites/timelines/guides/parameter-reference">zaman çizelgeleri</a> için Twitter'ın belgelerine bakın.</td>
  </tr>
   <tr>
    <td width="40%"><strong>title (isteğe bağlı)</strong></td>
    <td>Bileşen için bir <code>title</code> özniteliği tanımlar. Varsayılan <code>Twitter</code>'dır.</td>
  </tr>
</table>

### Etkileşim ve API kullanımı

Öznitelik değerlerinden herhangi birinin programlı olarak değiştirilmesi, öğeyi otomatik olarak güncelleyecektir. Örneğin, tweet kimliğini `data-tweetid` aracılığıyla değiştirmek, yeni tweet'i otomatik olarak yükleyecektir:

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

## Preact/React Bileşeni

### npm ile içe aktarma

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

### Yerleşim ve stil

#### Kapsayıcı tipi

`BentoTwitter` bileşeninin tanımlanmış bir yerleşim boyutu türü vardır. Bileşenin doğru bir şekilde oluşturulduğundan emin olmak için, bileşene ve onun en yakın alt öğelerine (slaytlar) istenen bir CSS yerleşimi ile bir boyut uygulamayı unutmayın (örneğin `height`, `width`, `aspect-ratio` veya bu tür diğer özelliklerle tanımlanmış bir düzen). Bunlar satır içinde uygulanabilir:

```jsx
<BentoTwitter
  style={% raw %}{{width: 300, height: 100}}{% endraw %}
  tweetid="1356304203044499462"
></BentoTwitter>
```

Veya `className` aracılığıyla:

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

## Aksesuarlar

<table>
  <tr>
    <td width="40%"><strong>tweetid / momentid / timelineSourceType (gerekli)</strong></td>
    <td>Tweetin veya Moment'ın Kimliği veya bir Zaman Çizelgesi görüntülenecekse kaynak türü. https://twitter.com/joemccann/status/640300967154597888 gibi bir URL'de, <code>640300967154597888</code> tweet kimliğidir. https://twitter.com/i/moments/1009149991452135424 gibi bir URL'de <code>1009149991452135424</code> Moment kimliğidir. Geçerli zaman çizelgesi kaynak türleri arasında <code>profile</code>, <code>likes</code>, <code>list</code> , <code>collection</code>, <code>url</code> ve <code>widget</code> vardır.</td>
  </tr>
  <tr>
    <td width="40%"><strong>kart / sohbetler (isteğe bağlı)</strong></td>
    <td>
<code>tweetid</code>'ye ek olarak başka bağımsız değişkenler de sağlanabilir. Örneğin, <code>conversation="none"</code> ile birlikte <code>cards="hidden"</code>, ek küçük resimler veya yorumlar olmadan bir tweet görüntüler.</td>
  </tr>
  <tr>
    <td width="40%"><strong>limit (isteğe bağlı)</strong></td>
    <td>Bir moment gösterilirken, <code>moment</code>'a ek olarak başka bağımsız değişkenler de sağlanabilir. Örneğin, <code>limit="5"</code>, beş karta kadar gömülü bir moment görüntüler.</td>
  </tr>
  <tr>
    <td width="40%"><strong>timelineScreenName / timelineUserId (isteğe bağlı)</strong></td>
    <td>Bir zaman çizelgesi gösterilirken, <code>timelineSourceType</code>'a ek olarak başka bağımsız değişkenler de sağlanabilir . Örneğin, <code>timelineScreenName="amphtml"</code>, <code>timelineSourceType="profile"</code> ile birlikte AMP Twitter hesabının bir zaman çizelgesini görüntüler.</td>
  </tr>
  <tr>
    <td width="40%"><strong>options (isteğe bağlı)</strong></td>
    <td>
<code>options</code> aksesuarına bir nesne ileterek Tweet, Moment veya Zaman Çizelgesi görünümü için seçenekler belirlenebilir. Kullanılabilir seçeneklerle ilgili ayrıntılar için, <a href="https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference">tweet'ler</a>, <a href="https://developer.twitter.com/en/docs/twitter-for-websites/moments/guides/parameter-reference0">moment'lar</a> ve <a href="https://developer.twitter.com/en/docs/twitter-for-websites/timelines/guides/parameter-reference">zaman çizelgeleri</a> için Twitter'ın belgelerine bakın. Not: 'options' özelliğini geçerken, nesneyi optimize ettiğinizden veya not ettiğinizden emin olun: <pre>const TWITTER_OPTIONS = { // make sure to define these once globally! }; function MyComponent() { // etc return ( &amp;ltTwitter optionsProps={TWITTER_OPTIONS} /&gt; ); }</pre>
</td>
  </tr>
   <tr>
    <td width="40%"><strong>title (isteğe bağlı)</strong></td>
    <td>Bileşen iframe için bir <code>title</code> belirler. Varsayılan <code>Twitter</code>'dır.</td>
  </tr>
</table>
