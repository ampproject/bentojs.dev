---
id: bento-soundcloud
title: Bento Soundcloud
permalink: "/ja/components/bento-soundcloud/"
short_title: Soundcloud
layout: layouts/component.njk
description: <a href="https://soundcloud.com">Soundcloud</a> クリップを埋め込みます。
---

# Bento Soundcloud

{% heroexample 'bento-soundcloud' %}

[Soundcloud](https://soundcloud.com) クリップを埋め込みます。

<div class="bd-usage bd-card bd-card--light-sea-green">
<p>bento-soundcloud をウェブコンポーネントまたは React 関数コンポーネントとして使用します。</p> <a href="#web-component" class="">↓ ウェブコンポーネント</a> <a href="#preact%2Freact-component">↓ React / Preact</a>
</div>

## ウェブコンポーネント

適切な読み込みを保証するには、Bento コンポーネントの必須 CSS ライブラリをカスタムスタイルを追加する前にインクルードする必要があります。または、インラインで使用可能な軽量のアップグレード前のスタイルを使用することも可能です。[レイアウトとスタイル](#layout-and-style)を参照してください。

### npm によるインポート

```bash
npm install @bentoproject/soundcloud
```

```javascript
import {defineElement as defineBentoSoundcloud} from '@bentoproject/soundcloud';
defineBentoSoundcloud();
```

### `<script>` によるインクルード

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.css" crossorigin="anonymous">
```

### 例

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

### レイアウトとスタイル

各 Bento コンポーネントには、[コンテンツシフト](https://web.dev/cls/)を発生させずに適切に読み込まれることを保証するために含める必要のある小さな CSS ライブラリがあります。読み取り順が重要であるため、カスタムスタイルの前にスタイルシートがインクルードされていることを手動で確認する必要があります。

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.css"
/>
```

または、軽量のアップグレード前のスタイルをインラインで使用可能にすることもできます。

```html
<style>
  bento-soundcloud {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

#### コンテナタイプ

`bento-soundcloud` コンポーネントには、定義済みのレイアウトサイズタイプがあります。コンポーネントが正しくレンダリングされるようにするには、目的の CSS レイアウト（`height`、`width`、`aspect-ratio`、またはその他の該当するプロパティで定義されたもの）を使って、コンポーネントとその直下の子コンポーネントにサイズを必ず適用してください。

```css
bento-soundcloud {
  height: 100px;
  width: 100%;
}
```

### 属性

属性の 1 つをプログラムで変更すると、プレーヤーを自動的に更新することができます。

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

この属性は、<code>data-playlistid</code> が定義されていない場合に必須です。<br> この属性の値は、トラックの整数の ID です。

##### data-playlistid

この属性は、<code>data-trackid</code> が定義されていない場合に必須です。この属性の値は、プレイリストの整数の ID です。

##### data-secret-token（オプション）

プライベートの場合、トラックのシークレットトークンです。

##### data-visual（オプション）

<code>true</code> にされている場合、全幅の "Visual" モードを表示します。そうでない場合は "Classic" モードで表示されます。デフォルト値は <code>false</code> です。

##### data-color（オプション）

この属性は、"Classic" モードをカスタムカラーでオーバーライドします。"Visual" モードの場合、属性が無視されます。先頭の # を除く 16 進数の色値を指定します（例: <code>data-color="e540ff"</code>）。

---

## Preact/React コンポーネント

### npm によるインポート

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

### レイアウトとスタイル

#### コンテナタイプ

`BentoSoundcloud` コンポーネントには、定義済みのレイアウトサイズタイプがあります。コンポーネントが正しくレンダリングされるようにするには、目的の CSS レイアウト（`height`、`width`、`aspect-ratio`、またはその他の該当するプロパティで定義されたもの）を使って、コンポーネントとその直下の子コンポーネントにサイズを必ず適用してください。これらはインラインで適用できます。

```jsx
<BentoSoundcloud
  style={% raw %}{{width: 300, height: 100}}{% endraw %}
  trackId="243169232"
  visual={true}
></BentoSoundcloud>
```

または `className` を使用します。

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

### プロップ

##### trackId

この属性は、<code>data-playlistid</code> が定義されていない場合に必須です。<br> この属性の値は、トラックの整数の ID です。

##### playlistId

この属性は、<code>data-trackid</code> が定義されていない場合に必須です。この属性の値は、プレイリストの整数の ID です。

##### secretToken（オプション）

プライベートの場合、トラックのシークレットトークンです。

##### visual（オプション）

<code>true</code> にされている場合、全幅の "Visual" モードを表示します。そうでない場合は "Classic" モードで表示されます。デフォルト値は <code>false</code> です。

##### color（オプション）

この属性は、"Classic" モードをカスタムカラーでオーバーライドします。"Visual" モードの場合、属性が無視されます。先頭の # を除く 16 進数の色値を指定します（例: <code>data-color="e540ff"</code>）。
