---
id: bento-inline-gallery
title: Bento thư viện inline
permalink: "/vi/components/bento-inline-gallery/"
short_title: Thư viện inline
layout: layouts/component.njk
description: Hiển thị các slide với dấu chấm chia trang và hình thu nhỏ không bắt buộc.
---

# Bento thư viện inline

{% heroexample 'bento-inline-gallery' %}

Hiển thị các slide với dấu chấm chia trang và hình thu nhỏ không bắt buộc. Việc triển khai thư viện này sử dụng một [Bento băng chuyền cơ bản](https://www.npmjs.com/package/@bentoproject/base-carousel). Cả hai thành phần đều phải được cài đặt đúng cách cho môi trường (Thành phần web hoặc Preact).

<div class="bd-usage bd-card bd-card--light-sea-green">   <p>Sử dụng bento-inline-gallery như một thành phần web hoặc một thành phần chức năng React:</p>   <a class="bd-button" href="#web-component">↓ Thành phần web</a>   <a class="bd-button" href="#preact%2Freact-component">↓ React / Preact</a>
</div>

## Thành phần web

Bạn phải bao gồm thư viện CSS cần thiết cho mỗi thành phần Bento để đảm bảo tải đúng cách và trước khi bổ sung các phong cách tùy chọn. Hoặc sử dụng các phong cách inline nhỏ gọn được nâng cấp từ trước. Xem [Bố cục và phong cách](#layout-and-style).

### Nhập qua npm

```bash
npm install @bentoproject/inline-gallery
```

```javascript
import {defineElement as defineBentoInlineGallery} from '@bentoproject/inline-gallery';
defineBentoInlineGallery();
```

### Bao gồm qua `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.css" crossorigin="anonymous">
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
      src="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.js"
    ></script>
    <link
      rel="stylesheet"
      href="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.css"
    />

    <script
      type="module"
      async
      src="https://cdn.ampproject.org/v0/bento-base-carousel-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-base-carousel-1.0.js"
    ></script>
    <link
      rel="stylesheet"
      href="https://cdn.ampproject.org/v0/bento-base-carousel-1.0.css"
    />
  </head>
  <body>
    <bento-inline-gallery id="inline-gallery">
      <bento-inline-gallery-thumbnails
        style="height: 100px"
        loop
      ></bento-inline-gallery-thumbnails>

      <bento-base-carousel
        style="height: 200px"
        snap-align="center"
        visible-count="3"
        loop
      >
        <img src="img1.jpeg" data-thumbnail-src="img1-thumbnail.jpeg" />
        <img src="img2.jpeg" data-thumbnail-src="img2-thumbnail.jpeg" />
        <img src="img3.jpeg" data-thumbnail-src="img3-thumbnail.jpeg" />
        <img src="img4.jpeg" data-thumbnail-src="img4-thumbnail.jpeg" />
        <img src="img5.jpeg" data-thumbnail-src="img5-thumbnail.jpeg" />
        <img src="img6.jpeg" data-thumbnail-src="img6-thumbnail.jpeg" />
      </bento-base-carousel>

      <bento-inline-gallery-pagination
        style="height: 20px"
      ></bento-inline-gallery-pagination>
    </bento-inline-gallery>
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
  href="https://cdn.ampproject.org/v0/bento-inline-gallery-1.0.css"
/>
```

Hoặc, bạn cũng có thể thiết lập các phong cách nhỏ gọn được nâng cấp từ trước để sử dụng chúng inline:

```html
<style>
  bento-inline-gallery,
  bento-inline-gallery-pagination,
  bento-inline-gallery-thumbnails {
    display: block;
  }
  bento-inline-gallery {
    contain: layout;
  }
  bento-inline-gallery-pagination,
  bento-inline-gallery-thumbnails {
    overflow: hidden;
    position: relative;
  }
</style>
```

### Các thuộc tính trên `<bento-inline-gallery-pagination>`

#### `inset`

Thuộc tính boolean quy định việc hiển thị chỉ báo chia trang ở bên trong (phủ lên băng chuyền) hay không Mặc định là `false` (sai).

### Các thuộc tính trên `<bento-inline-gallery-thumbnails>`

#### `aspect-ratio`

Một Số định nghĩa tỷ lệ chiều rộng trên chiều cao để hiển thị slide. Giá trị này là không bắt buộc.

#### `loop`

Thuộc tính boolean quy định liệu hình thu nhỏ có lặp lại hay không. Mặc định là `false` (sai).

### Phong cách

Bạn có thể sử dụng bộ chọn yếu tố `bento-inline-gallery`, `bento-inline-gallery-pagination`, `bento-inline-gallery-thumbnails`, và `bento-base-carousel` để tùy ý tạo phong cách cho chỉ báo chia trang, hình thu nhỏ, và băng chuyền.

---

## Thành phần Preact/React

### Nhập qua npm

```bash
npm install @bentoproject/inline-gallery
```

```javascript
import React from 'react';
import {BentoInlineGallery} from '@bentoproject/inline-gallery/react';
import '@bentoproject/inline-gallery/styles.css';

function App() {
  return (
    <BentoInlineGallery id="inline-gallery">
      <BentoInlineGalleryThumbnails aspect-ratio="1.5" loop />
      <BentoBaseCarousel snap-align="center" visible-count="1.2" loop>
        <img src="server.com/static/inline-examples/images/image1.jpg" />
        <img src="server.com/static/inline-examples/images/image2.jpg" />
        <img src="server.com/static/inline-examples/images/image3.jpg" />
      </BentoBaseCarousel>
      <BentoInlineGalleryPagination inset />
    </BentoInlineGallery>
  );
}
```

### Bố cục và phong cách

#### Loại hộp chứa

Thành phần `BentoInlineGallery` có một loại kích cỡ bố cục được định nghĩa cụ thể. Để đảm bảo thành phần này kết xuất đúng cách, hãy áp dụng một kích cỡ cho thành phần và các con trực tiếp của nó qua một bố cục CSS mong muốn (ví dụ như một bố cục được định nghĩa với `width` (chiều rộng)). Chúng có thể được áp dụng inline:

```jsx
<BentoInlineGallery style={% raw %}{{width: 300}}{% endraw %}>...</BentoInlineGallery>
```

Hoặc thông qua `className`:

```jsx
<BentoInlineGallery className="custom-styles">...</BentoInlineGallery>
```

```css
.custom-styles {
  background-color: red;
}
```

### Đặc tính cho `BentoInlineGalleryPagination`

Ngoài các [đặc tính thông dụng](../../../docs/spec/bento-common-props.md), BentoInlineGalleryPagination hỗ trợ các đặc tính dưới đây:

#### `inset`

Thuộc tính boolean quy định việc hiển thị chỉ báo chia trang ở bên trong (phủ lên băng chuyền) hay không Mặc định là `false` (sai).

### Đặc tính cho `BentoInlineGalleryThumbnails`

Ngoài các [đặc tính thông dụng](../../../docs/spec/bento-common-props.md), BentoInlineGalleryThumbnails hỗ trợ các đặc tính dưới đây:

#### `aspectRatio`

Một Số định nghĩa tỷ lệ chiều rộng trên chiều cao để hiển thị slide (số này là không bắt buộc).

#### `loop`

Thuộc tính boolean quy định liệu hình thu nhỏ có lặp lại hay không. Mặc định là `false` (sai).