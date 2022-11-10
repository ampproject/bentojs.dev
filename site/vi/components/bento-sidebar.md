---
id: bento-sidebar
title: Bento thanh bên
permalink: "/vi/components/bento-sidebar/"
short_title: Thanh bên
layout: layouts/component.njk
description: Cung cấp một cách để hiển thị nội dung siêu dữ liệu cho việc truy cập tạm thời, ví dụ như điều hướng, liên kết, nút, menu.
---

# Bento thanh bên

{% heroexample 'bento-sidebar' %}

Cung cấp một cách để hiển thị nội dung siêu dữ liệu cho việc truy cập tạm thời, ví dụ như điều hướng, liên kết, nút, menu. Thanh bên có thể được hiển thị bằng cách chạm vào một nút trong khi nội dung chính vẫn được hiển thị ở bên dưới.

<div class="bd-usage bd-card bd-card--light-sea-green">   <p>Sử dụng bento-sidebar như một thành phần web hoặc một thành phần chức năng React:</p>   <a class="bd-button" href="#web-component">↓ Thành phần web</a>   <a class="bd-button" href="#preact%2Freact-component">↓ React / Preact</a>
</div>

## Thành phần web

Bạn phải bao gồm thư viện CSS cần thiết cho mỗi thành phần Bento để đảm bảo tải đúng cách và trước khi bổ sung các phong cách tùy chọn. Hoặc sử dụng các phong cách inline nhỏ gọn được nâng cấp từ trước. Xem [Bố cục và phong cách](#layout-and-style).

### Nhập qua npm

```bash
npm install @bentoproject/sidebar
```

```javascript
import {defineElement as defineBentoSidebar} from '@bentoproject/sidebar';
defineBentoSidebar();
```

### Bao gồm qua `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-sidebar-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-sidebar-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-sidebar-1.0.css" crossorigin="anonymous">
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

### Tương tác và sử dụng API

Các thành phần Bento có khả năng tương tác cao thông qua API của chúng. API của thành phần `bento-sidebar` có thể được truy cập bằng cách bao gồm thẻ kịch bản sau trong tài liệu của bạn:

```javascript
await customElements.whenDefined('bento-sidebar');
const api = await carousel.getApi();
```

#### Hành động

API `bento-sidebar` cho phép bạn thực hiện các hành động sau:

##### open()

Mở thanh bên.

```javascript
api.open();
```

##### close()

Đóng thanh bên.

```javascript
api.close();
```

##### toggle()

Bật/tắt trạng thái mở của thanh bên.

```javascript
api.toggle(0);
```

### Bố cục và phong cách

Mỗi thành phần Bento đều có một thư viện CSS nhỏ mà bạn phải bao gồm để đảm bảo việc tải đúng cách mà không bị [chuyển dịch nội dung](https://web.dev/cls/). Bởi yêu cầu cụ thể về thứ tự, bạn phải đảm bảo các stylesheet được bao gồm một cách thủ công trước mọi phong cách tùy chỉnh có thể có nào.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-sidebar-1.0.css"
/>
```

Hoặc, bạn cũng có thể thiết lập các phong cách nhỏ gọn được nâng cấp từ trước để sử dụng chúng inline:

```html
<style>
  bento-sidebar:not([open]) {
    display: none !important;
  }
</style>
```

#### Phong cách tùy chỉnh

Thành phần `bento-sidebar` có thể được tạo phong cách bằng CSS tiêu chuẩn.

- `width` (chiều rộng) của `bento-sidebar` có thể được thiết lập để điều chỉnh chiều rộng từ giá trị 45px thiết lập sẵn.
- Height (chiều cao) của `bento-sidebar` có thể được thiết lập để điều chỉnh chiều cao của thanh bên nếu cần. Nếu chiều cao vượt quá 100vw, thanh bên sẽ có một thanh cuộn dọc. Chiều cao thiết lập sẵn của thanh bên là 100vw và có thể được ghi đè trong CSS để nó trở nên ngắn hơn.
- Trạng thái hiện tại của thanh bên được cho biết qua thuộc tính `open` được thiết lập trên thẻ `bento-sidebar` khi thanh bên được mở trên trang đó.

```css
bento-sidebar[open] {
  height: 100%;
  width: 50px;
}
```

### Các cân nhắc về UX

Khi sử dụng `<bento-sidebar>`, hãy nhớ rằng người dùng của bạn thường sẽ đọc trang của bạn trên di động, vốn có thể hiển thị một đầu đề ở vị trí cố định. Ngoài ra, các trình duyệt thường hiển thị đầu đề cố định của riêng chúng ở đầu trang. Việc bổ sung một yếu tố khác ở vị trí cố định đầu màn hình sẽ chiếm nhiều không gian trên màn hình di động để hiển thị các nội dung không mới với người dùng.

Vì lý do này, chúng tôi khuyến nghị chức năng mở một thanh bên không được đặt trong một đầu đề cố định, có chiều rộng đầy đủ.

- Thanh bên chỉ có thể được hiển thị ở bên trái hay bên phải của một trang.
- Chiều cao tối đa của thanh bên là 100vh, nếu chiều cao vượt quá 100vh, một thanh cuộn dọc sẽ xuất hiện. Chiều cao mặc định được đặt là 100vh trong CSS và có thể được ghi đè trong CSS.
- Chiều rộng của thanh bên có thể được thiết lập và điều chỉnh trong CSS.
- `<bento-sidebar>` được *khuyến khích* là con trực tiếp của `<body>` để giữ một thứ tự DOM lôgic nhằm hỗ trợ tiếp cận cũng như tránh sửa đổi hành vi của nó bởi một yếu tố hộp chứa. Lưu ý rằng việc có một tổ tiên của `bento-sidebar` với một `z-index` được thiết lập có thể khiến thanh bên xuất hiện dưới các yếu tố khác (ví dụ như đầu đề), khiến chức năng của nó bị phá vỡ.

### Thuộc tính

#### side

Biểu thị bên trang để mở thanh bên, `left` (trái) hoặc `right` (phải). Nếu một `side` (bên) không được quy định, giá trị `side` sẽ được thừa kế từ `dir` của thẻ `body` (`ltr` =&gt; `left` , `rtl` =&gt; `right`); nếu không tồn tại `dir`, `side` sẽ có mặc định là `left`.

#### open

Thuộc tính này tồn tại khi thanh bên được mở.

---

## Thành phần Preact/React

### Nhập qua npm

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

### Tương tác và sử dụng API

Các thành phần Bento có khả năng tương tác cao thông qua API của chúng. API của thành phần `BentoSidebar` có thể được truy cập bằng cách sử dụng một `ref`:

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

#### Hành động

API `BentoSidebar` cho phép bạn thực hiện các hành động sau:

##### open()

Mở thanh bên.

```javascript
ref.current.open();
```

##### close()

Đóng thanh bên.

```javascript
ref.current.close();
```

##### toggle()

Bật/tắt trạng thái mở của thanh bên.

```javascript
ref.current.toggle(0);
```

### Bố cục và phong cách

Thành phần `BentoSidebar` có thể được tạo phong cách bằng CSS tiêu chuẩn.

- `width` (chiều rộng) của `bento-sidebar` có thể được thiết lập để điều chỉnh chiều rộng từ giá trị 45px thiết lập sẵn.
- Height (chiều cao) của `bento-sidebar` có thể được thiết lập để điều chỉnh chiều cao của thanh bên nếu cần. Nếu chiều cao vượt quá 100vw, thanh bên sẽ có một thanh cuộn dọc. Chiều cao thiết lập sẵn của thanh bên là 100vw và có thể được ghi đè trong CSS để nó trở nên ngắn hơn.

Để đảm bảo thành phần này kết xuất đúng cách, hãy áp dụng một kích cỡ cho thành phần này. Chúng có thể được áp dụng inline:

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

Hoặc thông qua `className`:

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

### Các cân nhắc về UX

Khi sử dụng `<BentoSidebar>`, hãy nhớ rằng người dùng của bạn thường sẽ đọc trang của bạn trên di động, vốn có thể hiển thị một đầu đề ở vị trí cố định. Ngoài ra, các trình duyệt thường hiển thị đầu đề cố định của riêng chúng ở đầu trang. Việc bổ sung một yếu tố khác ở vị trí cố định đầu màn hình sẽ chiếm nhiều không gian trên màn hình di động để hiển thị các nội dung không mới với người dùng.

Vì lý do này, chúng tôi khuyến nghị chức năng mở một thanh bên không được đặt trong một đầu đề cố định, có chiều rộng đầy đủ.

- Thanh bên chỉ có thể được hiển thị ở bên trái hay bên phải của một trang.
- Chiều cao tối đa của thanh bên là 100vh, nếu chiều cao vượt quá 100vh, một thanh cuộn dọc sẽ xuất hiện. Chiều cao mặc định được đặt là 100vh trong CSS và có thể được ghi đè trong CSS.
- Chiều rộng của thanh bên có thể được thiết lập và điều chỉnh trong CSS.
- `<BentoSidebar>` được *khuyến khích* là con trực tiếp của `<body>` để giữ một thứ tự DOM lôgic nhằm hỗ trợ tiếp cận cũng như tránh sửa đổi hành vi của nó bởi một yếu tố hộp chứa. Lưu ý rằng việc có một tổ tiên của `BentoSidebar` với một `z-index` được thiết lập có thể khiến thanh bên xuất hiện dưới các yếu tố khác (ví dụ như đầu đề), khiến chức năng của nó bị phá vỡ.

### Đặc tính

#### side

Biểu thị bên trang để mở thanh bên, `left` (trái) hoặc `right` (phải). Nếu một `side` (bên) không được quy định, giá trị `side` sẽ được thừa kế từ `dir` của thẻ `body` (`ltr` =&gt; `left` , `rtl` =&gt; `right`); nếu không tồn tại `dir`, `side` sẽ có mặc định là `left`.
