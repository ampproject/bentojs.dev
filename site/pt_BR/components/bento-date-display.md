---
id: bento-date-display
title: Exibição de data no Bento
permalink: "/pt_BR/components/bento-date-display/"
short_title: Exibição de data
layout: layouts/component.njk
description: Exibe dados de data que você pode processar em sua página.
---

# Exibição de data no Bento

{% heroexample 'bento-date-display' %}

Você precisa incluir a biblioteca CSS necessária de cada componente Bento para garantir o carregamento adequado e antes de adicionar estilos personalizados. Ou use os estilos leves pré-upgrade disponíveis incorporados dentro da página (inline). Veja [Layout e estilo](#attributes).

<div class="bd-usage bd-card bd-card--light-sea-green">   <p>Use bento-date-display as a web component or a React functional component:</p>   <a class="bd-button" href="#web-component">↓ Web Component</a>   <a class="bd-button" href="#preact%2Freact-component">↓ React / Preact</a>
</div>

## Componente web

Não oferecemos suporte para a versão do componente da web de `bento-date-display`, pois o suporte para `<template>` ainda está sendo desenvolvido. Esse esforço pode ser rastreado neste [problema](https://go.amp.dev/issue/36619).

<!--
An older version of this file contains the removed section, though it's incorrect:

https://github.com/ampproject/amphtml/blob/422d171e87571c4d125a2bf956e78e92444c10e8/extensions/amp-date-display/1.0/README.md
-->

---

## Componente Preact/React

### Importar via npm

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

### Interatividade e uso da API

O componente Bento Date Display não possui uma API imperativa. No entanto, o componente Preact/React Bento Date Display aceita uma propriedade `render` que renderiza o modelo do consumidor. Esta propriedade `render` deve ser uma função que o componente de exibição de data no Bento Preact/React pode usar para renderizar seu modelo. O callback `render` receberá uma variedade de parâmetros relacionados a datas para os consumidores interpolarem no modelo renderizado. Veja a <a href="#render" data-md-type="link">seção sobre a propriedade `render`</a> para mais informações.

### Layout e estilo

O componente de exibição de data no Bento Preact/React permite que os consumidores renderizem seus próprios modelos. Esses modelos podem usar estilos embutidos, tags `<style>` ou componentes Preact/React que importam suas próprias folhas de estilo.

### Propriedades

#### `datetime`

Propriedade obrigatória. Denota a data e a hora como um tipo Date, String ou Number. Se String, deve ser uma string de data ISO 8601 padrão (por exemplo, 2017-08-02T15:05:05.000Z) ou a string `now`. Se definido como `now`, usará o instante que a página carregou para renderizar seu modelo. Se for Number, deve ser um valor de época POSIX em milissegundos.

#### `displayIn`

Propriedade opcional que pode ser `"utc"` ou `"local"` com default `"local"`. Esta prop indica em qual fuso horário exibir a data. Se definida com o valor `"utc"`, o componente converterá a data fornecida em UTC.

#### `locale`

Uma string de idioma de internacionalização para cada unidade do timer. O valor padrão é `en` (inglês). Esta prop suporta todos os valores suportados pelo navegador do usuário.

#### `localeOptions`

O objeto `localeOptions` suporta todas as opções do parâmetro [Intl.DateTimeFormat.options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#parameters) que especifica o estilo de formatação a ser usado para o formato `localeString`.

Observe que se a prop `displayIn` for definido como `utc`, o valor de `localeOptions.timeZone` será automaticamente convertido para `UTC`.

#### `render`

Optional callback that should render a template. The callback will be provided an object with properties/values related to the date expressed in `datetime`.

Por padrão, o componente de exibição de data no Bento exibirá o formato [`localeString` da Data](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString) para o locale e localeOption fornecidos. Consulte a [seção Parâmetros de tempo retornados](#returned-time-parameters) para obter mais detalhes sobre como cada propriedade será exibida.

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

### Parâmetros de tempo retornados

Esta tabela lista o formato que você pode especificar no seu modelo Mustache:

Formato | Significado
--- | ---
day | 1, 2, ...12, 13, etc.
dayName | string,
dayNameShort | string,
dayPeriod | string,
dayTwoDigit | 01, 02, 03, ..., 12, 13, etc.
hour | 0, 1, 2, 3, ..., 12, 13, ..., 22, 23
hour12 | 1, 2, 3, ..., 12, 1, 2, ..., 11, 12
hour12TwoDigit | 01, 02, ..., 12, 01, 02, ..., 11, 12
hourTwoDigit | 00, 01, 02, ..., 12, 13, ..., 22, 23
iso | Uma string de data ISO8601 padrão, por exemplo, 2019-01-23T15:31:21.213Z,
localeString | Uma string com uma representação sensível ao idioma.
minute | 0, 1, 2, ..., 58, 59
minuteTwoDigit | 00, 01, 02, ..., 58, 59
month | 1, 2, 3, ..., 12
monthName | String do nome do mês internacionalizado.
monthNameShort | String abreviada do nome do mês internacionalizado.,
monthTwoDigit | 01, 02, ..., 11, 12
second | 0, 1, 2, ..., 58, 59
secondTwoDigit | 00, 01, 02, ..., 58, 59
timeZoneName | Fuso horário internacionalizado, como `Pacific Daylight Time`
timeZoneNameShort | Fuso horário internacionalizado, abreviado, como `PST`
year | 0, 1, 2, ..., 1999, 2000, 2001, etc.
yearTwoDigit | 00, 01, 02, ..., 17, 18, 19, ..., 98, 99
