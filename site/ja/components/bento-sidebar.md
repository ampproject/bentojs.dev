---
id: bento-sidebar
title: Bento Sidebar
permalink: "/ja/components/bento-sidebar/"
short_title: Sidebar
layout: layouts/component.njk
description: ナビゲーション、リンク、ボタン、メニューなど、一時的なアクセスを意図したメタコンテンツを表示する方法を提供します。
---

# Bento Sidebar

{% heroexample 'bento-sidebar' %}

ナビゲーション、リンク、ボタン、メニューといった一時的なアクセスを狙いとしたメタコンテンツを表示できます。サイドバーは、メインコンテンツを表示したまま、その上にボタンタップで表示されます。

<div class="bd-usage bd-card bd-card--light-sea-green">
<p>bento-sidebar をウェブコンポーネントまたは React 関数コンポーネントとして使用します。</p> <a href="#web-component" class="">↓ ウェブコンポーネント</a> <a href="#preact%2Freact-component">↓ React / Preact</a>
</div>

## ウェブコンポーネント

適切な読み込みを保証するには、Bento コンポーネントの必須 CSS ライブラリをカスタムスタイルを追加する前にインクルードする必要があります。または、インラインで使用可能な軽量のアップグレード前のスタイルを使用することも可能です。[レイアウトとスタイル](#layout-and-style)を参照してください。

### npm によるインポート

```bash
npm install @bentoproject/sidebar
```

```javascript
import {defineElement as defineBentoSidebar} from '@bentoproject/sidebar';
defineBentoSidebar();
```

### `<script>` によるインクルード

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-sidebar-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-sidebar-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-sidebar-1.0.css" crossorigin="anonymous">
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

### インタラクティビティと API の使用

Bento 対応のコンポーネントは、API を通じた高いインタラクティブ性があります。`bento-sidebar` コンポーネント API にアクセスするには、次のスクリプトタグをドキュメントに含めます。

```javascript
await customElements.whenDefined('bento-sidebar');
const api = await carousel.getApi();
```

#### アクション

`bento-sidebar` API では、次のアクションを実行できます。

##### open()

サイドバーを開きます。

```javascript
api.open();
```

##### close()

サイドバーを閉じます。

```javascript
api.close();
```

##### toggle()

サイドバーの開いた状態を切り替えます。

```javascript
api.toggle(0);
```

### レイアウトとスタイル

各 Bento コンポーネントには、[コンテンツシフト](https://web.dev/cls/)を発生させずに適切に読み込まれることを保証するために含める必要のある小さな CSS ライブラリがあります。読み取り順が重要であるため、カスタムスタイルの前にスタイルシートがインクルードされていることを手動で確認する必要があります。

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-sidebar-1.0.css"
/>
```

または、軽量のアップグレード前のスタイルをインラインで使用可能にすることもできます。

```html
<style>
  bento-sidebar:not([open]) {
    display: none !important;
  }
</style>
```

#### カスタムスタイル

`bento-sidebar` コンポーネントのスタイルは、標準 CSS を使って設定できます。

- `bento-sidebar` の `width` は、 45px の既定値から幅を調整できるように設定できます。
- `bento-sidebar` の高さは、必要に応じてサイドバーの高さを調整できるように設定できます。高さが 100vw を超える場合、サイドバーに垂直スクロールバーが表示されます。サイドバーの既定の高さは 100vw であり、それより短くなるように CSS でオーバーライドすることが可能です。
- サイドバーの現在の状態は、ページのサイドバーが開かれたときに、`bento-sidebar` タグに設定されている `open` 属性を通じて公開されます。

```css
bento-sidebar[open] {
  height: 100%;
  width: 50px;
}
```

### UX に関する考慮事項

`<bento-sidebar>` を使用する際は、ページの表示はモバイルで行われることが多いため、ヘッダーの位置が固定されて表示される可能性があることに留意しておく必要があります。さらに、ブラウザ固有の固定ヘッダーがページの上部に表示されることも頻繁です。別の固定位置要素を画面の上部に追加すると、モバイル画面のスペースの大部分が、新しい情報を含まないコンテンツで埋められてしまいます。

このため、サイドバーを開くためのアフォーダンスが固定された全幅のヘッダーに配置されないようにすることを推奨します。

- サイドバーはページの左または右にのみ表示されます。
- サイドバーの max-height は 100vh です。この高さが 100vh を超える場合、垂直スクロールバーが表示されます。デフォルトの高さは CSS で 100vh に設定されているため、CSS でオーバーライドします。
- サイドバーの幅は CSS を使用して設定および調整できます。
- `<bento-sidebar>` は、アクセシビリティ向けの DOM の論理順を維持し、コンテナ要素による変更を防止するために、<code>&lt;body&gt;</code> 直下の要素とすることが<em>推奨</em>されています。`bento-sidebar` の祖先に `z-index` が設定されている場合、サイドバーが他の要素（ヘッダーなど）の下に表示され、機能しなくなる可能性があります。

### 属性

#### side

ページのどちら側からサイドバーが開くかを `left` または `right` のいずれかで指定します。`side` が指定されていない場合、`side` 値は `body` タグの `dir` 属性から継承されます（`ltr` =&gt; `left`、`rtl` =&gt; `right`）。`dir` が存在しない場合、`side` はデフォルトの `left` に設定されます。

#### open

この属性は、サイドバーが開いているときに有効です。

---

## Preact/React コンポーネント

### npm によるインポート

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

### インタラクティビティと API の使用

Bento コンポーネントには、API を通じた高いインタラクティブ性があります。`BentoSidebar` コンポーネント API にアクセスするには、`ref` を渡します。

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

#### アクション

`BentoSidebar` API では、次のアクションを実行できます。

##### open()

サイドバーを開きます。

```javascript
ref.current.open();
```

##### close()

サイドバーを閉じます。

```javascript
ref.current.close();
```

##### toggle()

サイドバーの開いた状態を切り替えます。

```javascript
ref.current.toggle(0);
```

### レイアウトとスタイル

`BentoSidebar` コンポーネントのスタイルは、標準 CSS を使って設定できます。

- `bento-sidebar` の `width` は、 45px の既定値から幅を調整できるように設定できます。
- `bento-sidebar` の高さは、必要に応じてサイドバーの高さを調整できるように設定できます。高さが 100vw を超える場合、サイドバーに垂直スクロールバーが表示されます。サイドバーの既定の高さは 100vw であり、それより短くなるように CSS でオーバーライドすることが可能です。

希望するとおりにコンポーネントがレンダリングされるようにするには、必ずコンポーネントにサイズを適用するようにしてください。以下のように、インラインで適用できます。

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

または `className` を使用します。

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

### UX に関する考慮事項

`<BentoSidebar>` を使用する際は、ページの表示はモバイルで行われることが多いため、ヘッダーの位置が固定されて表示される可能性があることに留意しておく必要があります。さらに、ブラウザ固有の固定ヘッダーがページの上部に表示されることも頻繁です。別の固定位置要素を画面の上部に追加すると、モバイル画面のスペースの大部分が、新しい情報を含まないコンテンツで埋められてしまいます。

このため、サイドバーを開くためのアフォーダンスが固定された全幅のヘッダーに配置されないようにすることを推奨します。

- サイドバーはページの左または右にのみ表示されます。
- サイドバーの max-height は 100vh です。この高さが 100vh を超える場合、垂直スクロールバーが表示されます。デフォルトの高さは CSS で 100vh に設定されているため、CSS でオーバーライドします。
- サイドバーの幅は CSS を使用して設定および調整できます。
- `<BentoSidebar>` は、アクセシビリティ向けの DOM の論理順を維持し、コンテナ要素による変更を防止するために、<code>&lt;body&gt;</code> 直下の要素とすることが<em>推奨</em>されています。`BentoSidebar` の祖先に `z-index` が設定されている場合、サイドバーが他の要素（ヘッダーなど）の下に表示され、機能しなくなる可能性があります。

### プロップ

#### side

ページのどちら側からサイドバーが開くかを `left` または `right` のいずれかで指定します。`side` が指定されていない場合、`side` 値は `body` タグの `dir` 属性から継承されます（`ltr` =&gt; `left`、`rtl` =&gt; `right`）。`dir` が存在しない場合、`side` はデフォルトの `left` に設定されます。
