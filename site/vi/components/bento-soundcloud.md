---
id: bento-soundcloud
title: Bento Soundcloud
permalink: "/vi/components/bento-soundcloud/"
short_title: Soundcloud
layout: layouts/component.njk
description: Nhúng một đoạn <a href="https://soundcloud.com">Soundcloud</a>.
---

# Bento Soundcloud

{% heroexample 'bento-soundcloud' %}

Nhúng một đoạn video [Soundcloud](https://soundcloud.com).

<div class="bd-usage bd-card bd-card--light-sea-green">   <p>Sử dụng bento-soundcloud như một thành phần web hoặc một thành phần chức năng React:</p>   <a class="bd-button" href="#web-component">↓ Thành phần web</a>   <a class="bd-button" href="#preact%2Freact-component">↓ React / Preact</a>
</div>

## Thành phần web

Bạn phải bao gồm thư viện CSS cần thiết cho mỗi thành phần Bento để đảm bảo tải đúng cách và trước khi bổ sung các phong cách tùy chọn. Hoặc sử dụng các phong cách inline nhỏ gọn được nâng cấp từ trước. Xem [Bố cục và phong cách](#layout-and-style).

### Nhập qua npm

```bash
npm install @bentoproject/soundcloud
```

```javascript
import {defineElement as defineBentoSoundcloud} from '@bentoproject/soundcloud';
defineBentoSoundcloud();
```

### Bao gồm qua `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.css" crossorigin="anonymous">
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

### Bố cục và phong cách

Mỗi thành phần Bento đều có một thư viện CSS nhỏ mà bạn phải bao gồm để đảm bảo việc tải đúng cách mà không bị [chuyển dịch nội dung](https://web.dev/cls/). Bởi yêu cầu cụ thể về thứ tự, bạn phải đảm bảo các stylesheet được bao gồm một cách thủ công trước mọi phong cách tùy chỉnh có thể có nào.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-soundcloud-1.0.css"
/>
```

Hoặc, bạn cũng có thể thiết lập các phong cách nhỏ gọn được nâng cấp từ trước để sử dụng chúng inline:

```html
<style>
  bento-soundcloud {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

#### Loại hộp chứa

Thành phần `bento-soundcloud` có một loại kích cỡ bố cục được định nghĩa cụ thể. Để đảm bảo thành phần này kết xuất đúng cách, hãy áp dụng một kích cỡ cho thành phần và các con trực tiếp của nó (các slide) qua một bố cục CSS mong muốn (ví dụ như một bố cục được định nghĩa với `height` (chiều cao), `width` (chiều rộng), `aspect-ratio` (tỷ lệ khung hình), hoặc các đặc tính khác):

```css
bento-soundcloud {
  height: 100px;
  width: 100%;
}
```

### Thuộc tính

Việc thay đổi một thuộc tính bằng lập trình sẽ dẫn đến máy phát được tự động cập nhật.

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

Thuộc tính này là bắt buộc nếu <code>data-playlistid</code> không được định nghĩa.<br> Giá trị cho thuộc tính này là ID của một bài nhạc, một số nguyên.

##### data-playlistid

Thuộc tính này là bắt buộc nếu <code>data-trackid</code> không được định nghĩa. Giá trị cho thuộc tính này là ID của một danh sách phát, một số nguyên.

##### data-secret-token (tùy chọn)

Token bí mật của bài nhạc, nếu nó là bài nhạc riêng tư.

##### data-visual (tùy chọn)

Nếu đặt là <code>true</code> (đúng), hiển thị chế độ "Hình ảnh" toàn chiều rộng; nếu không, hiển thị chế độ "Cổ điển". Giá trị mặc định là <code>false</code> (sai).

##### data-color (tùy chọn)

Thuộc tính này ghi đè màu tùy chỉnh cho chế độ "Cổ điển". Thuộc tính này bị bỏ qua trong chế độ "Hình ảnh". Quy định một giá trị màu hệ thập lục phân, không có dấu # ở đầu (ví dụ: <code>data-color="e540ff"</code>).

---

## Thành phần Preact/React

### Nhập qua npm

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

### Bố cục và phong cách

#### Loại hộp chứa

Thành phần `BentoSoundcloud` có một loại kích cỡ bố cục được định nghĩa cụ thể. Để đảm bảo thành phần này kết xuất đúng cách, hãy áp dụng một kích cỡ cho thành phần và các con trực tiếp của nó (các slide) qua một bố cục CSS mong muốn (ví dụ như một bố cục được định nghĩa với `height` (chiều cao), `width` (chiều rộng), `aspect-ratio` (tỷ lệ khung hình), hoặc các đặc tính khác). Chúng có thể được áp dụng inline:

```jsx
<BentoSoundcloud
  style={% raw %}{{width: 300, height: 100}}{% endraw %}
  trackId="243169232"
  visual={true}
></BentoSoundcloud>
```

Hoặc thông qua `className`:

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

### Đặc tính

##### trackId

Thuộc tính này là bắt buộc nếu <code>data-playlistid</code> không được định nghĩa.<br> Giá trị cho thuộc tính này là ID của một bài nhạc, một số nguyên.

##### playlistId

Thuộc tính này là bắt buộc nếu <code>data-trackid</code> không được định nghĩa. Giá trị cho thuộc tính này là ID của một danh sách phát, một số nguyên.

##### secretToken (tùy chọn)

Token bí mật của bài nhạc, nếu nó là bài nhạc riêng tư.

##### visual (tùy chọn)

Nếu đặt là <code>true</code> (đúng), hiển thị chế độ "Hình ảnh" toàn chiều rộng; nếu không, hiển thị chế độ "Cổ điển". Giá trị mặc định là <code>false</code> (sai).

##### color (tùy chọn)

Thuộc tính này ghi đè màu tùy chỉnh cho chế độ "Cổ điển". Thuộc tính này bị bỏ qua trong chế độ "Hình ảnh". Quy định một giá trị màu hệ thập lục phân, không có dấu # ở đầu (ví dụ: <code>data-color="e540ff"</code>).
