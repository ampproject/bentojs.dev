---
title: "<bento-fit-text>ハローワールド!</bento-fit-text>"
author: アラン・オロスコ · Bento Engineering · Google
date: '2021-12-08'
read_time: '5'
image: "./assets/img/posts/bento-announcement.png"
excerpt: "「こんにちは世界」本日、Bento コンポーネント ライブラリを完全にリリースできることを嬉しく思います。"
layout: レイアウト/post.njk
tags: 投稿
permalink: ブログ/introducing-the-bento-components-library/index.html
---

{% image "./assets/img/posts/bento-announcement.png" , "Bento コンポーネント ライブラリの開封" %}

「こんにちは世界」本日、 [Bento コンポーネント](https://bentojs.dev)を発表できることを嬉しく思います。 Bento コンポーネントとは何ですか?これらは、優れたユーザー エクスペリエンスが組み込まれたパフォーマンス コンポーネントです。ぜひお試しいただき、フィードバックをお寄せください。

Bento コンポーネントは、発行者からのフィードバックに対処するために[2 年](https://blog.amp.dev/2021/01/28/bento/)前に開始された AMP チームによるプロジェクトの成果です。これらは AMP コンポーネントと同様のパフォーマンス上の利点を提供しますが、他のライブラリやフレームワークと組み合わせることができるため、はるかに高い柔軟性を提供します。 Bento と AMP の将来について詳しくは、AMP[公式ブログ](https://blog.amp.dev/2021/12/08/introducing-bento/)を参照してください。

&lt;style&gt; .demo-container { マージントップ: 2rem;背景: #ecf1f3; } .demo-container ボタン { margin: auto;表示ブロック;パディング: 8px;フォントの太さ: 太字;テキスト変換: 大文字; } .demo-accordion { マージン: 1rem 0;オーバーフロー: 非表示;最大高さ: 380px; } .demo-accordion.show-more { max-height: unset; } .demo-accordion.show-more + ボタン { 表示: なし; } .demo-accordion &gt; section { ボーダー半径: 0.5rem;マージン: 1rem;背景: 白;バックグラウンドリピート: リピートなし; background-position: 右 1rem 上 1rem; } .demo-accordion h2 { 背景: 白;パディング: 1rem;ボーダー: なし;背景: なし; font-size: var(--font-size-18); } .demo-accordion div { パディング: 2rem;パディングトップ: 0; } .demo-accordion section[expanded] { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox ='0 0 24 24' width='24px' fill='%23000000'%3E%3Cpath d='M0 0h24v24H0V0z' fill='none'/%3E%3Cpath d='M12 8l-6 6 1.41 1.41L12 10.83 l4.59 4.58L18 14l-6-6z'/%3E%3C/svg%3E%0A"); } .demo-accordion section:not([展開]) { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height= '24px' viewBox='0 0 24 24' width='24px' fill='%23000000'%3E%3Cpath d='M24 24H0V0h24v24z' fill='none' opacity='.87'/%3E%3Cpath d= 'M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z'/%3E%3C/svg%3E%0A"); } @media のみの画面と (max-device-width: 480px) { .demo-accordion div { padding: .5rem;パディングトップ: 0; } .demo-accordion { マージン: 0;オーバーフロー: 非表示;最大高さ: 380px; } .demo-accordion &gt; セクション { margin: .5rem; } } &lt;/style&gt;

<div class="demo-container"> <bento-accordion id="demo-accordion" class="demo-accordion"> {% for example in heroExamples %}   <section>     <h2>{{ example.name }} </h2>     <div>     <div style="position: relative; padding-bottom: 56.25%; /* 16:9 */ padding-top: 25px; height: 0;">     <iframe src="%7B%7B%20example.path%20%7D%7D" loading="lazy" title="{{ example.name }}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">     </iframe>
</div>     </div>   </section> {% endfor %} </bento-accordion> <button onclick="document.querySelector('#demo-accordion').classList.add('show-more')">Show More</button> </div>

## Bento コンポーネントを選ぶ理由

アクセシブルでパフォーマンスの高い Web ページを構築するのは困難です。これは、独自の機能を構築するだけではありません。また、ページのパフォーマンスを損なわずにサードパーティの埋め込みを統合することもしばしば困難です。

良いニュースは、多くの Web ページが同様の機能を必要とするため、これらの問題を解決する Web コンポーネントの豊富なエコシステムがあることです。しかし、これは新たな問題につながります。利用可能な多くのコンポーネントのどれが最適かを判断する必要があります。コンポーネントがすべてのブラウザーで機能するかどうか、または同じページに異なるコンポーネントを混在させることによる望ましくない副作用があるかどうかを確認する必要があります。また、 [Core Web Vitals](https://web.dev/vitals/)スコアに悪影響を与えるべきではありません。

Bento コンポーネントが役に立ちます。これらは、次の 3 つの目標を念頭に置いて設計されています。

1. 優れたページ エクスペリエンス
2. フレームワークの独立性 (ただし、優れたフレームワーク サポートあり)
3. コンポーネントの分離

これが何を意味するのかを詳しく見てみましょう。

### ページ エクスペリエンス

最初のものは簡単です:**ページ エクスペリエンス**。 2021 年 8 月、 [Google 検索は、純粋な情報価値を超えてウェブページとやり取りするエクスペリエンスをユーザーがどのように認識しているかを測定する新しい一連のシグナルを導入しました](https://developers.google.com/search/docs/advanced/experience/page-experience)。ページ エクスペリエンスのランキング シグナルの重要な部分は、 [Core Web Vitals](https://web.dev/vitals/)です。 Bento コンポーネントは、優れたコア Web バイタル スコアの達成に役立ちます。

Bento コンポーネントはバンドル サイズが小さいため、必要なものだけをロードする必要があります。サイトにカルーセルを追加するためだけにフレームワーク全体は必要ありません。bento-carousel-component を使用するだけです。

Bento コンポーネントは、 [Core Web Vitals](https://web.dev/vitals/)にも役立つ可能性があります。たとえば、Bento コンポーネントは常にコンテナのサイズを尊重し、ユーザーの操作によってトリガーされた場合にのみ変更します。これにより、埋め込みが動的に挿入された場合などに発生する可能性のある[コンテンツ レイアウトのシフト](https://web.dev/cls/)が防止されます。

Bento コンポーネントのもう 1 つの利点は、リソースがデフォルトで遅延ロードされることです。外部 URL へのリクエストは、埋め込みがページ上のユーザーの位置に近づいたときにのみ発生します。これは、Facebook や Twitter などのサードパーティの埋め込みに特に役立ちます。

### フレームワークの独立性

次は**、優れたフレームワーク サポートによるフレームワークの独立性**です。 Bento コンポーネントは、任意のフレームワークまたは CMS で使用できます。

Bento コンポーネントは**Web Components**および**React/Preact components**としてパッケージ化されています。このように、Bento コンポーネントは React および Preact とのシームレスな統合を提供しますが、Web コンポーネント バージョンを使用することで他の場所でも使用できます。

Web コンポーネントの例を次に示します。

```html
<!DOCTYPE html>
<html>
  <head>
    <script async src="https://cdn.ampproject.org/bento.js"></script>
    <script
      async
      src="https://cdn.ampproject.org/v0/bento-fit-text-1.0.js"
    ></script>
    <link
      rel="stylesheet"
      href="https://cdn.ampproject.org/v0/bento-fit-text-1.0.css"
    />
  </head>
  <body>
    <bento-fit-text style="max-width: 200px; height: 60px">
      Hello world!
    </bento-fit-text>
  </body>
</html>
```

前の例では、JavaScript を記述またはバンドルしていないことに注意してください。このコードを`.html`ファイルに貼り付ければ、1 日で終わりです。これにより、Bento コンポーネントは、サーバー側のレンダリングに大きく依存する WordPress、Drupal、Eleventy などの CMS に最適です。

Bento コンポーネントは、HTML 要素から期待されるのと同じように応答します。要素の属性またはそのサブツリーを変更すると、その変更がレンダリングされた状態に反映されます。

```html
<script>
  // <bento-fit-text> responds to mutations.
  // Changing its content re-calculates its optimal font size.
  const element = document.querySelector('bento-fit-text');
  element.textContent = 'Longer text, smaller font size';
</script>
```

これにより、Bento は通常の DOM 要素とやり取りできるフレームワークに最適です。

別の例として、React アプリケーションで使用される Bento コンポーネントを次に示します。

```jsx
import React, {useRef, forwardRef} from 'react';
import {BentoLightbox} from '@bentoproject/lightbox/react';
import '@bentoproject/lightbox/styles.css';

const MyLightbox = forwardRef((_, ref) => {
  return (
    <BentoLightbox
      ref={ref}
      closeButtonAs={(props) => (
        <button {...props} aria-label="Close my fancy lightbox">
          Close!
        </button>
      )}
    >
      <h1>Hello World</h1>
    </BentoLightbox>
  );
});

function App() {
  const lightboxRef = useRef();
  return (
    <>
            <MyLightbox ref={lightboxRef} />      <button
        onClick={() => lightboxRef.current.open()}
      >
                Open      {' '}
      </button>   {' '}
    </>
  );
}
```

React で Bento コンポーネントを使用する利点は、React バージョンが Web コンポーネントの単なるラッパーではないことです。 Bento コンポーネントは、実際には React を使用して実装されています。それらは他の React コンポーネントと同様に動作するため、React アプリケーションへの統合が非常に簡単になります。

### コンポーネントの分離

最後に、見落とされがちなトピックであるコンポーネントの分離です。 Bento は、ドキュメント レベルではなく、コンポーネント レベルですべてをカプセル化します。

Web コンポーネントを使用する場合、コンポーネントのコンテンツは[Shadow Root](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM)内でレンダリングされます。これにより、スタイルがカプセル化されるため、独自に定義したスタイルがコンポーネントの実装によって破壊されることはありません。

ツイートや Instagram 投稿の埋め込みなど、サードパーティの埋め込みには、通常、ベンダーの URL からのスクリプトを含める必要があります。これらのスクリプトは予期しない動作をすることがあります。ページのあちこちに要素をプッシュしたり、追加のリソースをロードするのが早すぎたり、他の方法でホスト ドキュメントのパフォーマンスに悪影響を及ぼしたりする可能性があります。必要に応じて、サードパーティの URL からの信頼されていないスクリプトが、埋め込みを保持するドキュメントで実行される**ことはありません**。それらは「プロキシ フレーム」内で実行されるため、ページ上のレイアウトやデータとやり取りすることはできません。コンポーネントの<code>[loading](https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading)</code>プロパティを尊重するため、スクリプトは遅延ロードします。

## 箱の中は何ですか？

Bento コンポーネントの目標は、一般的な Web サイト機能にすぐに使えるソリューションを提供することです。 Bento コンポーネントを次の 3 つのカテゴリに分類できます。

**ユーザー体験**

カルーセルの実装は難しくありませんが、[コンテンツ シフトを回避し](https://bentojs.dev/components/bento-carousel/)、アクセス可能で、画像、動画、iframe などのさまざまな種類のコンテンツをサポートするカルーセルを実装するのは難しい場合があります。以下に、Bento の UI コンポーネントの例をいくつか示します。

- [Bento-lightbox-gallery](https://bentojs.dev/en/components/bento-lightbox-gallery/) : ページ上の任意の画像に`lightbox`属性を追加して、見栄えの良いライトボックス ギャラリーに追加します。
- [Bento-sidebar](https://bentojs.dev/en/components/bento-sidebar/) : 柔軟なハンバーガー メニュー。
- [bento-inline-gallery:](https://bentojs.dev/en/components/bento-lightbox-gallery/)オプションのページネーション ドットとサムネイルを含む画像カルーセル。

**サードパーティの埋め込み**

多くの場合、サードパーティの埋め込みは非常に重く、ページのパフォーマンスに悪影響を及ぼす可能性があります。 Bento コンポーネントは、適切にサンドボックス化され、遅延読み込みなどのパフォーマンスのベスト プラクティスを実装する一般的なサード パーティの埋め込み用のラッパーを提供します。アイデアを得るには、 [bento-twitter](https://bentojs.dev/en/components/bento-twitter)または[bento-instagram](https://bentojs.dev/en/components/bento-instagram)をチェックしてください。

**ユーティリティ**

単純なことに時間がかかることがよくあります。 Bento コンポーネントには、驚くほど実装が難しい小さなヘルパーが多数用意されていますが、非常に便利です。いくつかの例を次に示します。

- [Bento-fit-text](https://bentojs.dev/en/components/bento-fit-text) : 使用可能なスペースに合わせてテキストのサイズを自動的に変更します。
- [Bento-timeago](https://bentojs.dev/en/components/bento-timeago) : 30 年前や 3 時間前など、あいまいなタイムスタンプを使用して、指定された日付と時刻まで、またはそこから数えます。
- [ベントセレクター：ステロイドの](https://bentojs.dev/en/components/bento-youtube)ラジオボタン。

ただし、これらはほんの一例です。コンポーネントの完全なリストについては、 [Bento 開発者ドキュメント](https://bentojs.dev/documentation/)を参照してください。

## Bento を今すぐお試しください。

入門[ガイド](https://bentojs.dev/get-started/)を読んで、Bento コンポーネントを試すか[、利用可能なすべての](https://bentojs.dev/documentation/)コンポーネントをチェックしてください。チームは、 [GitHub](https://github.com/ampproject/bento/discussions)を通じて開発者からのフィードバックを奨励し、歓迎します。
