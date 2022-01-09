---
id: bento-twitter
title: Bento Twitter
permalink: "/ko/components/bento-twitter/"
short_title: Twitter
layout: layouts/component.njk
description: 트윗이나 모멘트 등의 <a href="https://twitter.com">Twitter</a>콘텐츠를 삽입합니다.
---

# Bento Twitter

{% heroexample 'bento-twitter' %}

트윗이나 모멘트 등의 [Twitter](https://twitter.com) 콘텐츠를 삽입합니다.

<div class="bd-usage bd-card bd-card--light-sea-green">   <p>bento-twitter을 웹 컴포넌트나 React 함수형 컴포넌트로 사용하세요.</p>   <a class="bd-button" href="#web-component">↓ 웹 컴포넌트</a>   <a class="bd-button" href="#preact%2Freact-component">↓ React / Preact</a>
</div>

## 웹 컴포넌트

적절한 로딩을 보장하고 사용자 지정 스타일을 추가하기 전에 각 Bento 컴포넌트의 필수 CSS 라이브러리를 삽입해야 합니다. 또는 인라인으로 지원되는 경량의 사전 업그레이드 스타일을 사용해 보세요. [레이아웃 및 스타일](#layout-and-style)을 참조하시길 바랍니다.

### npm을 통해 가져오기

```bash
npm install @bentoproject/twitter
```

```javascript
import {defineElement as defineBentoTwitters} from '@bentoproject/twitter';
defineBentoTwitters();
```

### `<script>`를 통해 삽입하기

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-twitter-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-twitter-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-twitter-1.0.css" crossorigin="anonymous">
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

### 레이아웃 및 스타일

Bento 컴포넌트에는 [콘텐츠 이동](https://web.dev/cls/) 없이 적절한 로드를 보장하는 데 필요한 작은 CSS 라이브러리가 있습니다. 순서 기반의 특수성으로 인해 사용자 지정 스타일보다 스타일시트가 먼저 삽입되어 있는지 수동으로 확인해야 합니다.

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-twitter-1.0.css"
/>
```

또는 경량의 사전 업그레이드 스타일을 인라인으로 활용할 수도 있습니다.

```html
<style>
  bento-twitter {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

#### 컨테이너 유형

`bento-twitter` 컴포넌트의 경우 레이아웃 크기 유형이 정의되어 있습니다. 컴포넌트가 적절히 렌더링되려면 CSS 레이아웃(`height`, `width`, `aspect-ratio` 또는 기타 유사한 프로퍼티로 정의된 레이아웃)을 통해 컴포넌트와 직접 하위 요소(슬라이드)에 크기를 적용해야 합니다.

```css
bento-twitter {
  height: 100px;
  width: 100%;
}
```

### 속성

<table>
  <tr>
    <td width="40%"><strong>data-tweetid / data-momentid / data-timeline-source-type(필수)</strong></td>
    <td>트윗이나 모멘트의 ID 또는 타임라인을 표시해야 할 경우 소스 유형입니다. URL이 https://twitter.com/joemccann/status/640300967154597888인 경우 <code>640300967154597888</code>이 트윗 id입니다. URL이 https://twitter.com/i/moments/1009149991452135424인 경우<code>1009149991452135424</code>가 모멘트 id입니다. 유효한 타임라인 소스 유형에는  <code>profile</code>, <code>likes</code>, <code>list</code>, <code>collection</code>, <code>url</code> 및 <code>widget</code>이 포함됩니다.</td>
  </tr>
  <tr>
    <td width="40%"><strong>data-timeline-*(선택 사항)</strong></td>
    <td>타임라인을 표시할 경우 <code>timeline-source-type</code>과 함께 추가 인수가 제공되어야 합니다. 예를 들어, <code>data-timeline-screen-name="amphtml"</code> 및 <code>data-timeline-source-type="profile"</code>을 결합하여 AMP Twitter 계정의 타임라인을 표시할 수 있습니다. 사용 가능한 인수와 관련한 자세한 정보는 <a href="https://developer.twitter.com/en/docs/twitter-for-websites/javascript-api/guides/scripting-factory-functions">Twitter의 JavaScript 팩토리 함수 가이드</a>의 "타임라인" 섹션을 참조하세요.</td>
  </tr>
  <tr>
    <td width="40%"><strong>data-*(선택 사항)</strong></td>
    <td>
<code>data-</code> 속성을 설정하여 트윗, 모멘트 또는 타임라인 표시 옵션을 지정할 수 있습니다. 예를 들어 <code>data-cards="hidden"</code>로 설정된 경우 Twitter 카드가 비활성화됩니다. 사용 가능한 옵션을 자세히 알아보려면 <a href="https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference">트윗</a>, <a href="https://developer.twitter.com/en/docs/twitter-for-websites/moments/guides/parameter-reference0">모멘트</a> 및 <a href="https://developer.twitter.com/en/docs/twitter-for-websites/timelines/guides/parameter-reference">타임라인</a>과 관련한 Twitter 문서를 참조하세요.</td>
  </tr>
   <tr>
    <td width="40%"><strong>title(선택 사항)</strong></td>
    <td>컴포넌트의 <code>title</code> 속성을 정의합니다. 기본값은 <code>Twitter</code>입니다.</td>
  </tr>
</table>

### 상호작용 및 API 사용

속성 값을 프로그래밍 방식으로 변경하면 요소가 자동 업데이트됩니다. 예를 들어, `data-tweetid`를 통해 트윗 ID를 변경할 경우 신규 트윗이 자동으로 로드됩니다.

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

## Preact/React 컴포넌트

### npm을 통해 가져오기

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

### 레이아웃 및 스타일

#### 컨테이너 유형

`BentoTwitter` 컴포넌트의 경우 레이아웃 크기 유형이 정의되어 있습니다. 컴포넌트가 적절히 렌더링되려면 CSS 레이아웃(`height`, `width`, `aspect-ratio` 또는 기타 유사한 프로퍼티로 정의된 레이아웃)을 통해 컴포넌트와 직접 하위 요소(슬라이드)에 크기를 적용해야 합니다.

```jsx
<BentoTwitter
  style={% raw %}{{width: 300, height: 100}}{% endraw %}
  tweetid="1356304203044499462"
></BentoTwitter>
```

또는 `className`을 통해 적용 가능합니다.

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

## 프로퍼티

<table>
  <tr>
    <td width="40%"><strong>tweetid / momentid / timelineSourceType(필수)</strong></td>
    <td>트윗이나 모멘트의 ID 또는 타임라인을 표시해야 할 경우 소스 유형입니다. URL이 https://twitter.com/joemccann/status/640300967154597888인 경우 <code>640300967154597888</code>이 트윗 id입니다. URL이 https://twitter.com/i/moments/1009149991452135424인 경우<code>1009149991452135424</code>가 모멘트 id입니다. 유효한 타임라인 소스 유형에는  <code>profile</code>, <code>likes</code>, <code>list</code>, <code>collection</code>, <code>url</code> 및 <code>widget</code>이 포함됩니다.</td>
  </tr>
  <tr>
    <td width="40%"><strong>card / conversations(선택 사항)</strong></td>
    <td>트윗을 표시할 때 <code>tweetid</code>와 함께 추가 인수가 제공될 수 있습니다. 예를 들어, <code>cards="hidden"</code> 및 <code>conversation="none"</code>이 결합된 경우 추가 썸네일이나 댓글 없이 트윗이 표시됩니다.</td>
  </tr>
  <tr>
    <td width="40%"><strong>limit(선택 사항)</strong></td>
    <td>모멘트를 표시할 때 <code>moment</code>와 함께 추가 인수가 제공될 수 있습니다. 예를 들어, <code>limit="5"</code>로 설정 시 최대 5장의 카드가 포함된 임베디드 모멘트를 표시합니다.</td>
  </tr>
  <tr>
    <td width="40%"><strong>timelineScreenName / timelineUserId(선택 사항)</strong></td>
    <td>타임라인을 표시할 때 <code>timelineSourceType</code>와 함께 추가 인수가 제공될 수 있습니다. 예를 들어, <code>timelineScreenName="amphtml"</code> 및 <code>timelineSourceType="profile"</code>이 결합된 경우 추가 AMP Twitter 계정의 타임라인이 표시됩니다.</td>
  </tr>
  <tr>
    <td width="40%"><strong>options(선택 사항)</strong></td>
    <td>
<code>options</code> 프로퍼티에 객체를 전달하여 트윗, 모멘트 또는 타임라인 디자인 옵션을 지정할 수 있습니다. 사용 가능한 옵션을 자세히 알아보려면 <a href="https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference">트윗</a>, <a href="https://developer.twitter.com/en/docs/twitter-for-websites/moments/guides/parameter-reference0">모멘트</a> 및 <a href="https://developer.twitter.com/en/docs/twitter-for-websites/timelines/guides/parameter-reference">타임라인</a>과 관련한 Twitter 문서를 참조하세요. 참고: `options` 프로퍼티를 전달할 경우 객체를 최적화하거나 메모이즈해야 합니다. <pre>const TWITTER_OPTIONS = {
  // make sure to define these once globally!
};
function MyComponent() {
  // etc
  return (
    &amp;ltTwitter optionsProps={TWITTER_OPTIONS} /&gt;
  );
}</pre>
</td>
  </tr>
   <tr>
    <td width="40%"><strong>title(선택 사항)</strong></td>
    <td>컴포넌트 iframe의 <code>title</code>을 정의합니다. 기본값은 <code>Twitter</code>입니다.</td>
  </tr>
</table>
