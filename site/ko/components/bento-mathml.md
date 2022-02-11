---
id: bento-mathml
title: Bento MathML
permalink: "/ko/components/bento-mathml/"
short_title: MathML
layout: layouts/component.njk
description: iframe의 MathML 수식을 렌더링합니다.
---

# Bento MathML

{% heroexample 'bento-mathml' %}

iframe의 MathML 수식을 렌더링합니다.

<div class="bd-usage bd-card bd-card--light-sea-green">   <p>bento-mathml을 웹 컴포넌트나 React 함수형 컴포넌트로 사용하세요.</p>   <a class="bd-button" href="#web-component">↓ 웹 컴포넌트</a>   <a class="bd-button" href="#preact%2Freact-component">↓ React / Preact</a>
</div>

## 웹 컴포넌트

적절한 로딩을 보장하고 사용자 지정 스타일을 추가하기 전에 각 Bento 컴포넌트의 필수 CSS 라이브러리를 삽입해야 합니다. 또는 인라인으로 지원되는 경량의 사전 업그레이드 스타일을 사용해 보세요. [레이아웃 및 스타일](#layout-and-style)을 참조하시길 바랍니다.

### npm을 통해 가져오기

```bash
npm install @bentoproject/mathml
```

```javascript
import {defineElement as defineBentoMathml} from '@bentoproject/mathml';
defineBentoMathml();
```

### `<script>`를 통해 삽입하기

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-mathml-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-mathml-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-mathml-1.0.css" crossorigin="anonymous">
```

### 예시

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

### 레이아웃 및 스타일

Bento 컴포넌트에는 [콘텐츠 이동](https://web.dev/cls/) 없이 적절한 로드를 보장하는 데 필요한 작은 CSS 라이브러리가 있습니다. 순서 기반의 특수성으로 인해 사용자 지정 스타일보다 스타일시트가 먼저 삽입되어 있는지 수동으로 확인해야 합니다.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-mathml-1.0.css"
/>
```

또는 경량의 사전 업그레이드 스타일을 인라인으로 활용할 수도 있습니다.

```html
<style>
  bento-mathml {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

### 속성

#### `data-formula`(필수)

렌더링할 수식을 지정합니다.

#### `inline`(선택 사항)

이 속성을 지정하면 컴포넌트가 인라인으로 렌더링됩니다(CSS의 `inline-block`).

#### title(선택 사항)

기본 `<iframe>` 요소에 전달할 컴포넌트의 `title` 속성을 정의합니다. 기본값은 `"MathML formula"`입니다.

### 스타일링

`bento-mathml` 요소 선택자를 사용하여 아코디언의 스타일을 자유롭게 지정할 수 있습니다.

---

## Preact/React 컴포넌트

### npm을 통해 가져오기

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

### 레이아웃 및 스타일

#### 컨테이너 유형

`BentoMathml` 컴포넌트의 경우 레이아웃 크기 유형이 정의되어 있습니다. 컴포넌트가 적절히 렌더링되려면 CSS 레이아웃(`height`, `width`, `aspect-ratio` 또는 기타 유사한 프로퍼티로 정의된 레이아웃)을 통해 컴포넌트와 직접 하위 요소에 크기를 적용해야 합니다.

```jsx
<BentoMathml style={% raw %}{{width: 300, height: 100}}{% endraw %}>...</BentoMathml>
```

또는 `className`을 통해 적용 가능합니다.

```jsx
<BentoMathml className="custom-styles">...</BentoMathml>
```

```css
.custom-styles {
  height: 40px;
  width: 147px;
}
```

### 프로퍼티

#### `formula`(필수)

렌더링할 수식을 지정합니다.

#### `inline`(선택 사항)

이 속성을 지정하면 컴포넌트가 인라인으로 렌더링됩니다(CSS의 `inline-block`).

#### title(선택 사항)

기본 `<iframe>` 요소에 전달할 컴포넌트의 `title` 속성을 정의합니다. 기본값은 `"MathML formula"`입니다.
