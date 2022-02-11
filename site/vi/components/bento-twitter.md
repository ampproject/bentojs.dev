---
id: bento-twitter
title: Bento Twitter
permalink: "/vi/components/bento-twitter/"
short_title: Twitter
layout: layouts/component.njk
description: Nhúng nội dung <a href="https://twitter.com">Twitter</a>, chẳng hạn như một Tweet hay Khoảnh khắc.
---

# Bento Twitter

{% heroexample 'bento-twitter' %}

Nhúng nội dung [Twitter](https://twitter.com), chẳng hạn như một Tweet hay Khoảnh khắc.

<div class="bd-usage bd-card bd-card--light-sea-green">   <p>Sử dụng bento-twitter như một thành phần web hoặc một thành phần chức năng React:</p>   <a class="bd-button" href="#web-component">↓ Thành phần web</a>   <a class="bd-button" href="#preact%2Freact-component">↓ React / Preact</a>
</div>

## Thành phần web

Bạn phải bao gồm thư viện CSS cần thiết cho mỗi thành phần Bento để đảm bảo tải đúng cách và trước khi bổ sung các phong cách tùy chọn. Hoặc sử dụng các phong cách inline nhỏ gọn được nâng cấp từ trước. Xem [Bố cục và phong cách](#layout-and-style).

### Nhập qua npm

```bash
npm install @bentoproject/twitter
```

```javascript
import {defineElement as defineBentoTwitters} from '@bentoproject/twitter';
defineBentoTwitters();
```

### Bao gồm qua `<script>`

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-twitter-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-twitter-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-twitter-1.0.css" crossorigin="anonymous">
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

### Bố cục và phong cách

Mỗi thành phần Bento đều có một thư viện CSS nhỏ mà bạn phải bao gồm để đảm bảo việc tải đúng cách mà không bị [chuyển dịch nội dung](https://web.dev/cls/). Bởi yêu cầu cụ thể về thứ tự, bạn phải đảm bảo các stylesheet được bao gồm một cách thủ công trước mọi phong cách tùy chỉnh có thể có nào.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-twitter-1.0.css"
/>
```

Hoặc, bạn cũng có thể thiết lập các phong cách nhỏ gọn được nâng cấp từ trước để sử dụng chúng inline:

```html
<style>
  bento-twitter {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

#### Loại hộp chứa

Thành phần `bento-twitter` có một loại kích cỡ bố cục được định nghĩa cụ thể. Để đảm bảo thành phần này kết xuất đúng cách, hãy áp dụng một kích cỡ cho thành phần và các con trực tiếp của nó (các slide) qua một bố cục CSS mong muốn (ví dụ như một bố cục được định nghĩa với `height` (chiều cao), `width` (chiều rộng), `aspect-ratio` (tỷ lệ khung hình), hoặc các đặc tính khác):

```css
bento-twitter {
  height: 100px;
  width: 100%;
}
```

### Thuộc tính

<table>
  <tr>
    <td width="40%"><strong>data-tweetid / data-momentid / data-timeline-source-type (bắt buộc)</strong></td>
    <td>ID của Tweet hoặc Khoảnh khắc, hoặc loại nguồn nếu một Dòng thời gian cần được hiển thị. Trong một URL như https://twitter.com/joemccann/status/640300967154597888, <code>640300967154597888</code> là ID Tweet. Trong một URL như https://twitter.com/i/moments/1009149991452135424, <code>1009149991452135424</code> là ID Khoảnh khắc. Các loại nguồn dòng thời gian hợp lệ bao gồm <code>profile</code>(hồ sơ), <code>likes</code> (lượt thích), <code>list</code> (danh sách), <code>collection</code> (bộ sưu tập), <code>url</code>, và <code>widget</code> (tiện ích).</td>
  </tr>
  <tr>
    <td width="40%"><strong>data-timeline-* (tùy chọn)</strong></td>
    <td>Khi hiển thị một dòng thời gian, cần cung cấp các đối số bổ sung ngoài <code>timeline-source-type</code>. Ví dụ, <code>data-timeline-screen-name="amphtml"</code> kết hợp với <code>data-timeline-source-type="profile"</code> sẽ hiển thị một dòng thời gian cho tài khoản AMP Twitter. Để biết thêm chi tiết về các đối số khả dụng, hãy xem phần "Dòng thời gian" trong <a href="https://developer.twitter.com/en/docs/twitter-for-websites/javascript-api/guides/scripting-factory-functions">Hướng dẫn về các chức năng nhà máy JavaScript của Twitter</a>.</td>
  </tr>
  <tr>
    <td width="40%"><strong>data-* (tùy chọn)</strong></td>
    <td>Bạn có thể quy định các tùy chọn cho giao diện của Tweet, Khoảnh khắc, hoặc Dòng thời gian bằng cách thiết lập các thuộc tính <code>data-</code>. Ví dụ, <code>data-cards="hidden"</code> sẽ bỏ kích hoạt các thiệp Twitter. Để biết thêm chi tiết về các tùy chọn khả dụng, hãy xem tài liệu của Twitter <a href="https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference">cho tweet</a>, <a href="https://developer.twitter.com/en/docs/twitter-for-websites/moments/guides/parameter-reference0">cho khoảnh khắc</a> và <a href="https://developer.twitter.com/en/docs/twitter-for-websites/timelines/guides/parameter-reference">cho dòng thời gian</a>.</td>
  </tr>
   <tr>
    <td width="40%"><strong>title (tùy chọn)</strong></td>
    <td>Quy định một thuộc tính <code>title</code> (tiêu đề) cho thành phần. Mặc định là <code>Twitter</code>.</td>
  </tr>
</table>

### Tương tác và sử dụng API

Việc thay đổi bất kỳ giá trị thuộc tính nào bằng lập trình sẽ tự động cập nhật phần tử. Ví dụ, việc thay đổi tweet id qua `data-tweetid` sẽ tự động tải tweet mới:

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

## Thành phần Preact/React

### Nhập qua npm

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

### Bố cục và phong cách

#### Loại hộp chứa

Thành phần `BentoTwitter` có một loại kích cỡ bố cục được định nghĩa cụ thể. Để đảm bảo thành phần này kết xuất đúng cách, hãy áp dụng một kích cỡ cho thành phần và các con trực tiếp của nó (các slide) qua một bố cục CSS mong muốn (ví dụ như một bố cục được định nghĩa với `height` (chiều cao), `width` (chiều rộng), `aspect-ratio` (tỷ lệ khung hình), hoặc các đặc tính khác). Chúng có thể được áp dụng inline:

```jsx
<BentoTwitter
  style={% raw %}{{width: 300, height: 100}}{% endraw %}
  tweetid="1356304203044499462"
></BentoTwitter>
```

Hoặc thông qua `className`:

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

## Đặc tính

<table>
  <tr>
    <td width="40%"><strong>tweetid / momentid / timelineSourceType (bắt buộc)</strong></td>
    <td>ID của Tweet hoặc Khoảnh khắc, hoặc loại nguồn nếu một Dòng thời gian cần được hiển thị. Trong một URL như https://twitter.com/joemccann/status/640300967154597888, <code>640300967154597888</code> là ID Tweet. Trong một URL như https://twitter.com/i/moments/1009149991452135424, <code>1009149991452135424</code> là ID Khoảnh khắc. Các loại nguồn dòng thời gian hợp lệ bao gồm <code>profile</code>(hồ sơ), <code>likes</code> (lượt thích), <code>list</code> (danh sách), <code>collection</code> (bộ sưu tập), <code>url</code>, và <code>widget</code> (tiện ích).</td>
  </tr>
  <tr>
    <td width="40%"><strong>card / conversations (tùy chọn)</strong></td>
    <td>Khi hiển thị một tweet, có thể cung cấp các đối số bổ sung ngoài <code>tweetid</code>. Ví dụ, <code>cards="hidden"</code> kết hợp với <code>conversation="none"</code> sẽ hiển thị một tweet mà không có hình thu nhỏ hay bình luận bổ sung.</td>
  </tr>
  <tr>
    <td width="40%"><strong>limit (tùy chọn)</strong></td>
    <td>Khi hiển thị một khoảnh khắc, có thể cung cấp các đối số bổ sung ngoài <code>moment</code>. Ví dụ, <code>limit="5"</code> sẽ hiển thị một khoảnh khắc nhúng với tối đa 5 thiệp.</td>
  </tr>
  <tr>
    <td width="40%"><strong>timelineScreenName / timelineUserId (tùy chọn)</strong></td>
    <td>Khi hiển thị một dòng thời gian, có thể cung cấp các đối số bổ sung ngoài <code>timelineSourceType</code>. Ví dụ, <code>timelineScreenName="amphtml"</code> kết hợp với  <code>timelineSourceType="profile"</code> sẽ hiển thị một dòng thời gian cho tài khoản AMP Twitter.</td>
  </tr>
  <tr>
    <td width="40%"><strong>options (tùy chọn)</strong></td>
    <td>Bạn có thể quy định các tùy chọn cho giao diện của Tweet, Khoảnh khắc, hoặc Dòng thời gian bằng cách chuyển một đối tượng đến đặc tính <code>options</code>. Để biết thêm chi tiết về các tùy chọn khả dụng, hãy xem tài liệu của Twitter <a href="https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference">cho tweet</a>, <a href="https://developer.twitter.com/en/docs/twitter-for-websites/moments/guides/parameter-reference0">cho khoảnh khắc</a> và <a href="https://developer.twitter.com/en/docs/twitter-for-websites/timelines/guides/parameter-reference">cho dòng thời gian</a>. Lưu ý: Khi chuyển đặc tính `options`, hãy nhớ tối ưu hoặc ghi nhớ đối tượng: <pre>const TWITTER_OPTIONS = {
  // nhớ định nghĩa các tùy chọn này một lần duy nhất trên toàn cục!
};
function MyComponent() {
  // v.v.
  return (
    &amp;ltTwitter optionsProps={TWITTER_OPTIONS} /&gt;
  );
}</pre>
</td>
  </tr>
   <tr>
    <td width="40%"><strong>title (tùy chọn)</strong></td>
    <td>Quy định <code>title</code> (tiêu đề) cho iframe thành phần. Mặc định là <code>Twitter</code>.</td>
  </tr>
</table>
