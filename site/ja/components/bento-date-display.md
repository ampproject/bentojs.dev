---
id: bento-date-display
title: Bento Date Display
permalink: "/ja/components/bento-date-display/"
short_title: Date Display
layout: layouts/component.njk
description: ページにレンダリングできる時刻データを表示します。
---

# Bento Date Display

{% heroexample 'bento-date-display' %}

ページにレンダリングできる時刻データを表示します。Bento Date Display タグに特定の[属性](#attributes)を指定すると、Bento Date Display 拡張機能によって時刻パラメーターのリストが返されるため、それを [amp-mustache テンプレート](../../amp-mustache/amp-mustache.md)に渡してレンダリングすることができます。[返される各時刻パラメーターについては、以下のリスト](#returned-time-parameters)を参照してください。

<div class="bd-usage bd-card bd-card--light-sea-green">
<p>bento-date-display をウェブコンポーネントまたは React 関数コンポーネントとして使用します。</p> <a href="#web-component" class="">↓ ウェブコンポーネント</a> <a href="#preact%2Freact-component" class="">↓ React / Preact</a>
</div>

## ウェブコンポーネント

`<template>` サポートはまだ設計段階であるため、ウェブコンポーネントバージョンの `bento-date-display` はサポートしていません。この取り組みは、こちらの[課題](https://go.amp.dev/issue/36619)で追跡できます。

<!--
An older version of this file contains the removed section, though it's incorrect:

https://github.com/ampproject/amphtml/blob/422d171e87571c4d125a2bf956e78e92444c10e8/extensions/amp-date-display/1.0/README.md
-->

---

## Preact/React コンポーネント

### npm によるインポート

```bash
npm install @bentoproject/date-display
```

```javascript
import React from 'react';
import {BentoDateDisplay} from '@bentoproject/date-display/react';
import '@bentoproject/date-display/styles.css';

function App() {
  return (
    <BentoDateDisplay
      datetime={dateTime}
      displayIn={displayIn}
      locale={locale}
      render={(date) => (
        <div>{`ISO: ${date.iso}; locale: ${date.localeString}`}</div>
      )}
    />
  );
}
```

### インタラクティビティと API の使用

Bento Date Display コンポーネントには命令型 API がありませんが、Bento Date Display Preact/React コンポーネントは消費者のテンプレートをレンダリングする `render` プロップを受け入れます。この `render` プロップは、Bento Date Display Preact/React コンポーネントがテンプレートをレンダリングするために使用できる関数である必要があります。`render` コールバックには、消費者がレンダリングされるテンプレートを補完するための日付関連のパラメーターが提供されます。詳細については、<a href="#render" data-md-type="link">`render` プロップのセクション</a>を参照してください。

### レイアウトとスタイル

Bento Date Display Preact/React コンポーネントでは、消費者が独自のテンプレートをレンダリングすることができます。これらのテンプレートは、独自のスタイルシートをインポートする Preact/React コンポーネントであるインラインスタイルの `<style>` タグを使用できます。

### プロップ

#### `datetime`

必須プロップ。日付と時刻を日付型、文字列型、または数値型として示します。文字列である場合、標準の ISO 8601 日付型文字列（例: 2017-08-02T15:05:05.000Z）か、文字列 `now` である必要があります。`now` に設定した場合、ページがテンプレートをレンダリングするためにロードされた時刻が使用されます。数値である場合、ミリ秒単位の POSIX エポック値である必要があります。

#### `displayIn`

`"utc"` または `"local"` のいずれかで、`"local"` がデフォルト値のオプションのプロップです。このプロップは、日付がどのタイムゾーンで表示されるかを指定します。値 `"utc"` に設定された場合、コンポーネントは指定された日付を UTC に変換します。

#### `locale`

各タイマーの単位に使用される多言語化文字列。デフォルト値は `en`（英語）です。このプロップは、ユーザーのブラウザがサポートしているすべての値をサポートします。

#### `localeOptions`

`localeOptions` オブジェクトは、[Intl.DateTimeFormat.options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#parameters) パラメーターの下のすべてのオプションをサポートします。このパラメーターは、`localeString` のフォーマットに使用されるフォーマットスタイルを指定するパラメーターです。

`displayIn` プロップが `utc` に設定されている場合は、`localeOptions.timeZone` の値は自動的に `UTC` に変換されることに注意してください。

#### `render`

テンプレートをレンダリングするオプションのコールバック。このコールバックには、`datetime` で表現される日付に関連するプロパティ/値を持つオブジェクトが与えられます。

デフォルトでは、Bento Date Display コンポーネントは、特定のロケールと localeOption の [`localeString` 形態の Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString) を表示します。各プロパティの表示については、[返される時刻パラメーターのセクション](#returned-time-parameters)をご覧ください。

```typescript
(dateParams: DateParams) => JSXInternal.Element
interface DateParams {
  day: number;
  dayName: string;
  dayNameShort: string;
  dayPeriod: string;
  dayTwoDigit: string;
  hour: number;
  hour12: number;
  hour12TwoDigit: string;
  hourTwoDigit: string;
  iso: string;
  localeString: string;
  minute: number;
  minuteTwoDigit: string;
  month: number;
  monthName: string;
  monthNameShort: string;
  monthTwoDigit: string;
  second: number;
  secondTwoDigit: string;
  timeZoneName: string;
  timeZoneNameShort: string;
  year: number;
  yearTwoDi: string;
}
```

### 返される時刻パラメーター

以下の表は、Mustach テンプレートに指定できるフォーマットを記載しています。

フォーマット | 意味
--- | ---
day | 1、2、...12、13 など。
dayName | 文字列
dayNameShort | 文字列
dayPeriod | 文字列
dayTwoDigit | 01、02、03、...、12、13 など。
hour | 0、1、2、3、...、12、13、...、22、23
hour12 | 1、2、3、...、12、1、2、...、11、12
hour12TwoDigit | 01、02、...、12、01、02、...、11、12
hourTwoDigit | 00、01、02、...、12、13、...、22、23
iso | 標準の ISO8601 日付文字列。例: 2019-01-23T15:31:21.213Z
localeString | 言語を区別する表現による文字列。
minute | 0、1、2、...、58、59
minuteTwoDigit | 00、01、02、...、58、59
month | 1、2、3、...、12
monthName | 国際化対応の月名の文字列。
monthNameShort | 国際化対応の月の短縮名の文字列。
monthTwoDigit | 01、02、...、11、12
second | 0、1、2、...、58、59
secondTwoDigit | 00、01、02、...、58、59
timeZoneName | 国際化対応タイムゾーン（`Pacific Daylight Time` など）
timeZoneNameShort | 国際化対応タイムゾーンの短縮名（`PST` など）
year | 0、1、2、...、1999、2000、2001 など。
yearTwoDigit | 00、01、02、...、17、18、19、...、98、99