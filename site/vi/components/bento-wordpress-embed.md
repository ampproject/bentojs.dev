---
id: bento-wordpress-embed
title: Bento nhúng WordPress
permalink: "/vi/components/bento-wordpress-embed/"
short_title: Nhúng WordPress
layout: layouts/component.njk
description: Một iframe hiển thị <a href="https://make.wordpress.org/core/2015/10/28/new-embeds-feature-in-wordpress-4-4/">trích đoạn</a> của một bài đăng hay trang WordPress.
---

# Bento nhúng WordPress

{% heroexample 'bento-wordpress-embed' %}

Một iframe hiển thị [trích đoạn](https://make.wordpress.org/core/2015/10/28/new-embeds-feature-in-wordpress-4-4/) của một bài đăng hay trang WordPress.

<div class="bd-usage bd-card bd-card--light-sea-green">   <p>Sử dụng bento-wordpress-embed như một thành phần web hoặc một thành phần chức năng React:</p>   <a class="bd-button" href="#web-component">↓ Thành phần web</a>   <a class="bd-button" href="#preact%2Freact-component">↓ React / Preact</a>
</div>

## Thành phần web

Bạn phải bao gồm thư viện CSS cần thiết cho mỗi thành phần Bento để đảm bảo tải đúng cách và trước khi bổ sung các phong cách tùy chọn. Hoặc sử dụng các phong cách inline nhỏ gọn được nâng cấp từ trước. Xem [Bố cục và phong cách](#layout-and-style).

### Nhập qua npm

```bash
npm install @bentoproject/wordpress-embed
```

```javascript
import {defineElement as defineBentoWordpressEmbed} from '@bentoproject/wordpress-embed';
defineBentoWordpressEmbed();
```

### Bao gồm qua `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-wordpress-embed-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-wordpress-embed-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-wordpress-embed-1.0.css" crossorigin="anonymous">
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

### Bố cục và phong cách

Mỗi thành phần Bento đều có một thư viện CSS nhỏ mà bạn phải bao gồm để đảm bảo việc tải đúng cách mà không bị [chuyển dịch nội dung](https://web.dev/cls/). Bởi yêu cầu cụ thể về thứ tự, bạn phải đảm bảo các stylesheet được bao gồm một cách thủ công trước mọi phong cách tùy chỉnh có thể có nào.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-wordpress-embed-1.0.css"
/>
```

Hoặc, bạn cũng có thể thiết lập các phong cách nhỏ gọn được nâng cấp từ trước để sử dụng chúng inline:

```html
<style>
  bento-wordpress-embed {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

#### Loại hộp chứa

Thành phần `bento-wordpress-embed` có một loại kích cỡ bố cục được định nghĩa cụ thể. Để đảm bảo thành phần này kết xuất đúng cách, hãy áp dụng một kích cỡ cho thành phần và các con trực tiếp của nó (các slide) qua một bố cục CSS mong muốn (ví dụ như một bố cục được định nghĩa với `height` (chiều cao), `width` (chiều rộng), `aspect-ratio` (tỷ lệ khung hình), hoặc các đặc tính khác):

```css
bento-wordpress-embed {
  height: 100px;
  width: 100%;
}
```

### Thuộc tính

#### data-url (bắt buộc)

URL của bài đăng được nhúng. Việc thay đổi giá trị thuộc tính bằng lập trình sẽ tự động cập nhật nội dung đã nhúng.

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

## Thành phần Preact/React

### Nhập qua npm

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

### Bố cục và phong cách

#### Loại hộp chứa

Thành phần `BentoWordPressEmbed` có một loại kích cỡ bố cục được định nghĩa cụ thể. Để đảm bảo thành phần này kết xuất đúng cách, hãy áp dụng một kích cỡ cho thành phần và các con trực tiếp của nó (các slide) qua một bố cục CSS mong muốn (ví dụ như một bố cục được định nghĩa với `height` (chiều cao), `width` (chiều rộng), `aspect-ratio` (tỷ lệ khung hình), hoặc các đặc tính khác). Chúng có thể được áp dụng inline:

```jsx
<BentoWordPressEmbed
  style={% raw %}{{width: '100%', height: '100px'}}{% endraw %}
  url="https://make.wordpress.org/core/2015/10/28/new-embeds-feature-in-wordpress-4-4/"
></BentoWordPressEmbed>
```

Hoặc thông qua `className`:

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

### Đặc tính

#### url (bắt buộc)

URL của bài đăng được nhúng.
