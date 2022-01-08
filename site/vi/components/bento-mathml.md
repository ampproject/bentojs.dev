---
id: bento-mathml
title: Bento MathML
permalink: "/vi/components/bento-mathml/"
short_title: MathML
layout: layouts/component.njk
description: Kết xuất một công thức MathML trong một iframe.
---

# Bento MathML

{% heroexample 'bento-mathml' %}

Kết xuất một công thức MathML trong một iframe.

<div class="bd-usage bd-card bd-card--light-sea-green">   <p>Sử dụng bento-mathml như một thành phần web hoặc một thành phần chức năng React:</p>   <a class="bd-button" href="#web-component">↓ Thành phần web</a>   <a class="bd-button" href="#preact%2Freact-component">↓ React / Preact</a>
</div>

## Thành phần web

Bạn phải bao gồm thư viện CSS cần thiết cho mỗi thành phần Bento để đảm bảo tải đúng cách và trước khi bổ sung các phong cách tùy chọn. Hoặc sử dụng các phong cách inline nhỏ gọn được nâng cấp từ trước. Xem [Bố cục và phong cách](#layout-and-style).

### Nhập qua npm

```bash
npm install @bentoproject/mathml
```

```javascript
import {defineElement as defineBentoMathml} from '@bentoproject/mathml';
defineBentoMathml();
```

### Bao gồm qua `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-mathml-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-mathml-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-mathml-1.0.css" crossorigin="anonymous">
```

### Ví dụ

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

### Bố cục và phong cách

Mỗi thành phần Bento đều có một thư viện CSS nhỏ mà bạn phải bao gồm để đảm bảo việc tải đúng cách mà không bị [chuyển dịch nội dung](https://web.dev/cls/). Bởi yêu cầu cụ thể về thứ tự, bạn phải đảm bảo các stylesheet được bao gồm một cách thủ công trước mọi phong cách tùy chỉnh có thể có nào.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-mathml-1.0.css"
/>
```

Hoặc, bạn cũng có thể thiết lập các phong cách nhỏ gọn được nâng cấp từ trước để sử dụng chúng inline:

```html
<style>
  bento-mathml {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

### Thuộc tính

#### `data-formula` (bắt buộc)

Quy định công thức để kết xuất.

#### `inline` (tùy chọn)

Nếu được quy định, thành phần này sẽ kết xuất inline (`inline-block` trong CSS).

#### title (tùy chọn)

Quy định một thuộc tính `title` cho thành phần để nhân giống đến yếu tố `<iframe>` nền. Giá trị mặc định là `"MathML formula"`.

### Phong cách

Bạn có thể sử dụng bộ chọn yếu tố `bento-mathml` để tùy ý tạo phong cách cho accordion.

---

## Thành phần Preact/React

### Nhập qua npm

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

### Bố cục và phong cách

#### Loại hộp chứa

Thành phần `BentoMathml` có một loại kích cỡ bố cục được định nghĩa cụ thể. Để đảm bảo thành phần này kết xuất đúng cách, hãy áp dụng một kích cỡ cho thành phần và các con trực tiếp của nó qua một bố cục CSS mong muốn (ví dụ như một bố cục được định nghĩa với `height` (chiều cao), `width` (chiều rộng), `aspect-ratio` (tỷ lệ khung hình), hoặc các đặc tính khác). Chúng có thể được áp dụng inline:

```jsx
<BentoMathml style={% raw %}{{width: 300, height: 100}}{% endraw %}>...</BentoMathml>
```

Hoặc thông qua `className`:

```jsx
<BentoMathml className="custom-styles">...</BentoMathml>
```

```css
.custom-styles {
  height: 40px;
  width: 147px;
}
```

### Đặc tính

#### `formula` (bắt buộc)

Quy định công thức để kết xuất.

#### `inline` (tùy chọn)

Nếu được quy định, thành phần này sẽ kết xuất inline (`inline-block` trong CSS).

#### title (tùy chọn)

Quy định một thuộc tính `title` cho thành phần để nhân giống đến yếu tố `<iframe>` nền. Giá trị mặc định là `"MathML formula"`.
