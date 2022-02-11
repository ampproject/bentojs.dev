---
id: bento-stream-gallery
title: Bento dòng thư viện
permalink: "/vi/components/bento-stream-gallery/"
short_title: Dòng thư viện
layout: layouts/component.njk
description: Bento dòng thư viện dùng để hiển thị nhiều mảnh nội dung giống nhau tại một thời điểm theo trục ngang.
---

# Bento dòng thư viện

{% heroexample 'bento-stream-gallery' %}

Bento dòng thư viện dùng để hiển thị nhiều mảnh nội dung giống nhau tại một thời điểm theo trục ngang.

Đây là một ứng dụng chuyên biệt của Bento băng chuyền cơ bản và sử dụng  [ResizeObservers](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver) để điều chỉnh động kích cỡ và số slide được hiển thị dựa trên chiều rộng của hộp chứa. Để triển khai một UX tùy chỉnh hơn, hãy xem [`<bento-base-carousel>`](../../amp-base-carousel/1.0/README.md).

<div class="bd-usage bd-card bd-card--light-sea-green">   <p>Sử dụng bento-stream-gallery như một thành phần web hoặc một thành phần chức năng React:</p>   <a class="bd-button" href="#web-component">↓ Thành phần web</a>   <a class="bd-button" href="#preact%2Freact-component">↓ React / Preact</a>
</div>

## Thành phần web

Bạn phải bao gồm thư viện CSS cần thiết cho mỗi thành phần Bento để đảm bảo tải đúng cách và trước khi bổ sung các phong cách tùy chọn. Hoặc sử dụng các phong cách inline nhỏ gọn được nâng cấp từ trước. Xem [Bố cục và phong cách](#layout-and-style).

### Nhập qua npm

```bash
npm install @bentoproject/stream-gallery
```

```javascript
import {defineElement as defineBentoStreamGallery} from '@bentoproject/stream-gallery';
defineBentoStreamGallery();
```

### Bao gồm qua `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.css" crossorigin="anonymous">
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

### Tương tác và sử dụng API

Các thành phần Bento có khả năng tương tác cao thông qua API của chúng. API của thành phần `bento-stream-gallery` có thể được truy cập bằng cách bao gồm thẻ kịch bản sau trong tài liệu của bạn:

```javascript
await customElements.whenDefined('bento-stream-gallery');
const api = await streamGallery.getApi();
```

#### Hành động

##### next()

Di chuyển băng chuyền xuôi chiều theo số slide được hiển thị.

```js
api.next();
```

##### prev()

Di chuyển băng chuyền ngược chiều theo số slide được hiển thị.

```js
api.prev();
```

##### goToSlide(index: number)

Di chuyển băng chuyền đến slide được quy định bởi đối số `index`.

Lưu ý: `index` sẽ được chuẩn hóa thành một số lớn hơn hoặc bằng <code>0</code> và nhỏ hơn số slide đã cho.

```js
api.goToSlide(0); // Advance to first slide.
api.goToSlide(length - 1); // Advance to last slide.
```

#### Sự kiện

Thành phần Bento dòng thư viện cho phép bạn đăng ký và đáp lại các sự kiện sau:

##### slideChange

Sự kiện này được kích hoạt khi mục lục được hiển thị bởi băng chuyền đã thay đổi. Mục lục mới được cung cấp qua `event.data.index`.

```js
streamGallery.addEventListener('slideChange', (e) => console.log(e.data.index));
```

### Bố cục và phong cách

Mỗi thành phần Bento đều có một thư viện CSS nhỏ mà bạn phải bao gồm để đảm bảo việc tải đúng cách mà không bị [chuyển dịch nội dung](https://web.dev/cls/). Bởi yêu cầu cụ thể về thứ tự, bạn phải đảm bảo các stylesheet được bao gồm một cách thủ công trước mọi phong cách tùy chỉnh có thể có nào.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-stream-gallery-1.0.css"
/>
```

Hoặc, bạn cũng có thể thiết lập các phong cách nhỏ gọn được nâng cấp từ trước để sử dụng chúng inline:

```html
<style>
  bento-stream-gallery {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

#### Ví dụ API

Ví dụ này thể hiện cách để chuyển sang slide tiếp theo/trước và nhảy đến các slide cụ thể bằng lập trình.

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

### Thuộc tính

#### Hành vi

##### `controls`

`"always"` (luôn luôn), `"auto"` (tự động), hoặc `"never"` (không bao giờ), mặc định là `"auto"`. Thuộc tính này xác định liệu các mũi tên điều hướng tiến/lùi có được hiển thị hay không, và khi nào. Lưu ý: Khi `outset-arrows` là `true` (đúng), các mũi tên sẽ `"always"` (luôn luôn) được hiển thị.

- `always`: Các mũi tên luôn luôn được hiển thị.
- `auto`: Các mũi tên được hiển thị khi băng chuyền được tương tác gần đây bằng chuột, và không được hiển thị khi băng chuyền được tương tác gần đây bằng cảm ứng. Ở lần tải đầu tiên cho các thiết bị cảm ứng, các mũi tên được hiển thị cho đến lần tương tác đầu tiên.
- `never`: Các mũi tên không bao giờ được hiển thị.

##### `extra-space`

`"around"` (xung quanh) hoặc không được định nghĩa. Điều này xác định không gian bổ sung được phân bổ sau khi hiển thị số slide được tính trong băng chuyền. Nếu là `"around"`, các khoảng không sẽ được phân bổ quanh băng chuyền với `justify-content: center`; nếu không, khoảng không được phân bổ ở bên phải băng chuyền cho các tài liệu từ trái sang phải và bên trái cho các tài liệu từ phải sang trái.

##### `loop`

`true` (đúng) hay `false` (sai), mặc định là `true`. Nếu là true, băng chuyền sẽ cho phép người dùng di chuyển từ mục đầu tiên lùi về mục cuối cùng và ngược lại. Phải có ít nhất 3 slide để có thể tạo vòng lặp.

##### `outset-arrows`

`true` (đúng) hay `false` (sai), mặc định là `false`. Nếu true, băng chuyền sẽ hiển thị các mũi tên ở bên ngoài, hai bên của slide. Lưu ý rằng với mũi tên ở bên ngoài, hộp chứa slide sẽ có chiều dài hiệu quả nhỏ hơn 100px so với không gian được phân bổ cho hộp chứa của nó - mỗi mũi tên hai bên có kích cỡ 50px. Nếu false, băng chuyền sẽ hiển thị các mũi tên ở bên trong và phủ lên cạnh trái và cạnh phải của slide.

##### `peek`

Một số, mặc định là `0`. Điều này xác định số slide bổ sung để hiển thị (trên một hoặc hai phía của slide hiện tại) để biểu thị với người dùng rằng băng chuyền này có thể được vuốt.

#### Hiển thị slide trong thư viện

##### `min-visible-count`

Một số, mặc định là `1`. Xác định số slide tối thiểu sẽ được hiển thị ở một thời điểm cụ thể. Các giá trị phân số có thể được sử dụng để hiển thị một phần (các) slide bổ sung.

##### `max-visible-count`

Một số, mặc định là [`Number.MAX_VALUE`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE). Xác định số slide tối đa sẽ được hiển thị ở một thời điểm cụ thể. Các giá trị phân số có thể được sử dụng để hiển thị một phần (các) slide bổ sung.

##### `min-item-width`

Một số, mặc định là `1`. Xác định chiều rộng tối thiểu của mỗi mục, được sử dụng để xác định có bao nhiêu mục có thể được hiển thị cùng lúc trong chiều rộng tổng thể của thư viện.

##### `max-item-width`

Một số, mặc định là [`Number.MAX_VALUE`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE). Xác định chiều rộng tối đa của mỗi mục, được sử dụng để xác định có bao nhiêu mục có thể được hiển thị cùng lúc trong chiều rộng tổng thể của thư viện.

#### Căn chỉnh slide

##### `slide-align`

`start` (điểm đầu) hoặc `center` (trung tâm). Khi căn chỉnh điểm đầu, điểm đầu của slide (nghĩa là cạnh bên trái, khi xếp theo chiều ngang) sẽ được căn chỉnh với điểm đầu của băng chuyền. Khi căn chỉnh trung tâm, tâm của một slide sẽ được căn chỉnh với tâm của băng chuyền.

##### `snap`

`true` (đúng) hay `false` (sai), mặc định là `true`. Xác định liệu băng chuyền có cần căn chỉnh trên slide khi cuộn không.

### Phong cách

Bạn có thể sử dụng bộ chọn yếu tố `bento-stream-gallery` để tùy ý tạo phong cách cho streamGallery.

---

## Thành phần Preact/React

### Nhập qua npm

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

### Tương tác và sử dụng API

Các thành phần Bento có khả năng tương tác cao thông qua API của chúng. API của thành phần `BentoStreamGallery` có thể được truy cập bằng cách sử dụng một `ref`:

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

#### Hành động

API `BentoStreamGallery` cho phép bạn thực hiện các hành động sau:

##### next()

Di chuyển băng chuyền về phía trước số slide bằng `advanceCount`.

```javascript
ref.current.next();
```

##### prev()

Di chuyển băng chuyền về phía sau số slide bằng `advanceCount`.

```javascript
ref.current.prev();
```

##### goToSlide(index: number)

Di chuyển băng chuyền đến slide được quy định bởi đối số `index`. Lưu ý: `index` sẽ được chuẩn hóa thành một số lớn hơn hoặc bằng `0` và nhỏ hơn số slide đã cho.

```javascript
ref.current.goToSlide(0); // Advance to first slide.
ref.current.goToSlide(length - 1); // Advance to last slide.
```

#### Sự kiện

##### onSlideChange

Sự kiện này được kích hoạt khi mục lục được hiển thị bởi băng chuyền đã thay đổi.

```jsx
<BentoStreamGallery style={% raw %}{{height: 150}}{% endraw %} onSlideChange={(index) => console.log(index)}>
  <img src="puppies.jpg" />
  <img src="kittens.jpg" />
  <img src="hamsters.jpg" />
</BentoStreamGallery>
```

### Bố cục và phong cách

#### Loại hộp chứa

Thành phần `BentoStreamGallery` có một loại kích cỡ bố cục được định nghĩa cụ thể. Để đảm bảo thành phần này kết xuất đúng cách, hãy áp dụng một kích cỡ cho thành phần và các con trực tiếp của nó qua một bố cục CSS mong muốn (ví dụ như một bố cục được định nghĩa với `width` (chiều rộng)). Chúng có thể được áp dụng inline:

```jsx
<BentoStreamGallery style={% raw %}{{width: 300}}{% endraw %}>...</BentoStreamGallery>
```

Hoặc thông qua `className`:

```jsx
<BentoStreamGallery className="custom-styles">...</BentoStreamGallery>
```

```css
.custom-styles {
  background-color: red;
}
```

### Đặc tính

#### Các đặc tính thông dụng

Thành phần này hỗ trợ các [đặc tính thông dụng](../../../docs/spec/bento-common-props.md) cho các thành phần React và Preact.

#### Hành vi

##### `controls`

`"always"` (luôn luôn), `"auto"` (tự động), hoặc `"never"` (không bao giờ), mặc định là `"auto"`. Thuộc tính này xác định liệu các mũi tên điều hướng tiến/lùi có được hiển thị hay không, và khi nào. Lưu ý: Khi `outset-arrows` là `true` (đúng), các mũi tên sẽ `"always"` (luôn luôn) được hiển thị.

- `always`: Các mũi tên luôn luôn được hiển thị.
- `auto`: Các mũi tên được hiển thị khi băng chuyền được tương tác gần đây bằng chuột, và không được hiển thị khi băng chuyền được tương tác gần đây bằng cảm ứng. Ở lần tải đầu tiên cho các thiết bị cảm ứng, các mũi tên được hiển thị cho đến lần tương tác đầu tiên.
- `never`: Các mũi tên không bao giờ được hiển thị.

##### `extraSpace`

`"around"` (xung quanh) hoặc không được định nghĩa. Điều này xác định không gian bổ sung được phân bổ sau khi hiển thị số slide được tính trong băng chuyền. Nếu là `"around"`, các khoảng không sẽ được phân bổ quanh băng chuyền với `justify-content: center`; nếu không, khoảng không được phân bổ ở bên phải băng chuyền cho các tài liệu từ trái sang phải và bên trái cho các tài liệu từ phải sang trái.

##### `loop`

`true` (đúng) hay `false` (sai), mặc định là `true`. Nếu là true, băng chuyền sẽ cho phép người dùng di chuyển từ mục đầu tiên lùi về mục cuối cùng và ngược lại. Phải có ít nhất 3 slide để có thể tạo vòng lặp.

##### `outsetArrows`

`true` (đúng) hay `false` (sai), mặc định là `false`. Nếu true, băng chuyền sẽ hiển thị các mũi tên ở bên ngoài, hai bên của slide. Lưu ý rằng với mũi tên ở bên ngoài, hộp chứa slide sẽ có chiều dài hiệu quả nhỏ hơn 100px so với không gian được phân bổ cho hộp chứa của nó - mỗi mũi tên hai bên có kích cỡ 50px. Nếu false, băng chuyền sẽ hiển thị các mũi tên ở bên trong và phủ lên cạnh trái và cạnh phải của slide.

##### `peek`

Một số, mặc định là `0`. Điều này xác định số slide bổ sung để hiển thị (trên một hoặc hai phía của slide hiện tại) để biểu thị với người dùng rằng băng chuyền này có thể được vuốt.

#### Hiển thị slide trong thư viện

##### `minVisibleCount`

Một số, mặc định là `1`. Xác định số slide tối thiểu sẽ được hiển thị ở một thời điểm cụ thể. Các giá trị phân số có thể được sử dụng để hiển thị một phần (các) slide bổ sung.

##### `maxVisibleCount`

Một số, mặc định là [`Number.MAX_VALUE`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE). Xác định số slide tối đa sẽ được hiển thị ở một thời điểm cụ thể. Các giá trị phân số có thể được sử dụng để hiển thị một phần (các) slide bổ sung.

##### `minItemWidth`

Một số, mặc định là `1`. Xác định chiều rộng tối thiểu của mỗi mục, được sử dụng để xác định có bao nhiêu mục có thể được hiển thị cùng lúc trong chiều rộng tổng thể của thư viện.

##### `maxItemWidth`

Một số, mặc định là [`Number.MAX_VALUE`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_VALUE). Xác định chiều rộng tối đa của mỗi mục, được sử dụng để xác định có bao nhiêu mục có thể được hiển thị cùng lúc trong chiều rộng tổng thể của thư viện.

#### Căn chỉnh slide

##### `slideAlign`

`start` (điểm đầu) hoặc `center` (trung tâm). Khi căn chỉnh điểm đầu, điểm đầu của slide (nghĩa là cạnh bên trái, khi xếp theo chiều ngang) sẽ được căn chỉnh với điểm đầu của băng chuyền. Khi căn chỉnh trung tâm, tâm của một slide sẽ được căn chỉnh với tâm của băng chuyền.

##### `snap`

`true` (đúng) hay `false` (sai), mặc định là `true`. Xác định liệu băng chuyền có cần căn chỉnh trên slide khi cuộn không.
