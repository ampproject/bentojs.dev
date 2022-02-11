---
id: bento-date-countdown
title: Contagem Regressiva de Data no Bento
permalink: "/pt_BR/components/bento-date-countdown/"
short_title: Contagem Regressiva de Data
layout: layouts/component.njk
description: Exibe uma sequência de contagem regressiva até uma data especificada.
---

# Contagem Regressiva de Data no Bento

{% heroexample 'bento-date-countdown' %}

Você precisa incluir a biblioteca CSS necessária de cada componente Bento para garantir o carregamento adequado e antes de adicionar estilos personalizados. Ou use os estilos leves pré-upgrade disponíveis incorporados dentro da página (inline). Veja [Layout e estilo](#returned-time-parameters).

<div class="bd-usage bd-card bd-card--light-sea-green">
<p>Use bento-date-countdown como um componente da web ou um componente funcional React:</p> <a class="bd-button" href="#web-component">↓ Web Component</a> <a class="bd-button" href="#preact%2Freact-component">↓ React / Preact</a>
</div>

## Componente web

Não oferecemos suporte para a versão do componente web de `bento-date-countdown` pois o `<template>` ainda está em projeto. Esse esforço pode ser acompanhado neste [problema](https://go.amp.dev/issue/36619) .

<!--
An older version of this file contains the removed section, though it's incorrect:

https://github.com/ampproject/amphtml/blob/422d171e87571c4d125a2bf956e78e92444c10e8/extensions/amp-date-countdown/1.0/README.md
-->

---

## Componente Preact/React

### Importar via npm

```bash
npm install @bentoproject/date-countdown
```

```javascript
import React from 'react';
import {BentoDateCountdown} from '@bentoproject/date-countdown/react';
import '@bentoproject/date-countdown/styles.css';

function App() {
  return (
    <BentoDateCountdown
      datetime={200000000}
      biggestUnit={'HOURS'}
      render={(data) => (
        <div>
          <span>{`${data.days} ${data.dd} ${data.d}`}</span>
          <br />
          <span>{`${data.hours} ${data.hh} ${data.h}`}</span>
          <br />
          <span>{`${data.minutes} ${data.mm} ${data.m}`}</span>
          <br />
          <span>{`${data.seconds} ${data.ss} ${data.s}`}</span>
        </div>
      )}
    />
  );
}
```

### Interatividade e uso da API

O componente de Contagem Regressiva no Bento não possui uma API imperativa. No entanto, o componente de Contagem Regressiva no Bento Preact/React aceita uma propriedade `render` que renderiza o modelo do consumidor. Esta propriedade `render` deve ser uma função que o componente Contagem Regressiva no Bento Preact/React pode usar para renderizar seu modelo. O callback `render` receberá uma variedade de parâmetros relacionados a datas para os consumidores interpolarem no modelo renderizado. Veja a <a href="#render" data-md-type="link">seção sobre a propriedade `render`</a> para mais informações.

### Layout e estilo

O componente Preact/React Bento Date Countdown permite que os consumidores renderizem seus próprios modelos. Esses modelos podem usar estilos embutidos, tags `<style>` ou componentes Preact/React que importam suas próprias folhas de estilo.

### Propriedades

#### `datetime`

Propriedade obrigatória. Denota a data e a hora como um tipo Date, String ou Number. Se String, deve ser uma string de data ISO 8601 padrão (por exemplo, 2017-08-02T15:05:05.000Z) ou a string `now`. Se definido como `now`, usará o instante que a página carregou para renderizar seu modelo. Se for Number, deve ser um valor de época POSIX em milissegundos.

#### `locale`

Uma string de idioma de internacionalização para cada unidade de timer. O valor padrão é `en` (inglês). Esta prop suporta todos os valores suportados pelo navegador do usuário.

#### `whenEnded`

Especifica se o timer deve ser interrompido quando atingir 0 segundos. O valor pode ser definido como `stop` (default) para indicar que o timer irá parar em 0 segundos e não passará da data final ou `continue` para indicar que o timer deve continuar depois de atingir 0 segundos.

#### `biggestUnit`

Permite que o `bento-date-countdown` calcule a diferença de tempo com base no valor `biggest-unit` especificado. Por exemplo, suponha que faltem `50 days 10 hours`; se a `biggest-unit` for definida como `hours`, o resultado exibirá `1210 hours` restantes.

- Valores suportados: `days`, `hours`, `minutes`, `seconds`
- Default: `days`

#### `countUp`

Inclua esta prop para inverter a direção da contagem regressiva (para realizar uma contagem progressiva). Isto é útil para exibir o tempo decorrido desde uma determinada data do passado. Para continuar a contagem regressiva quando a data determinada estiver no passado, certifique-se de definir a prop `when-ended` com o valor de `continue`. Se a data prevista estiver no futuro, `bento-date-countdown` exibirá um valor negativo decrescente (em direção a 0).

#### `render`

Retorno de chamada opcional que deve renderizar um modelo. O retorno de chamada será fornecido um objeto com propriedades/valores relacionados à data expressa em `datetime` .

Por padrão, o componente de Contagem Regressiva no Bento exibirá a [`localeString` da Data](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString) para o local e localeOption fornecidos. Consulte a [seção Parâmetros de tempo retornados](#returned-time-parameters) para obter mais detalhes sobre como cada propriedade será exibida.

```typescript
function render(dateParams: DateParams): JSXInternal.Element;

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

## Parâmetros de tempo retornados

Esta tabela lista o formato que você pode especificar no seu modelo Mustache:

Formato | Significado
--- | ---
d | dia - 0, 1, 2,...12, 13..Infinito
dd | dia - 00, 01, 02, 03..Infinito
h | hora - 0, 1, 2,...12, 13..Infinito
hh | hora - 01, 02, 03..Infinito
m | minuto - 0, 1, 2,...12, 13..Infinito
mm | minuto - 01, 01, 02, 03..Infinito
s | segundo - 0, 1, 2,...12, 13..Infinito
ss | segundo - 00, 01, 02, 03..Infinito
days | string de internacionalização para dia ou dias
hours | string de internacionalização para hora ou horas
minutes | string de internacionalização para minuto ou minutos
seconds | string de internacionalização para segundo ou segundos

### Exemplos de valores formatados

Esta tabela fornece exemplos de valores formatados especificados num modelo Mustache e uma amostra do resultado:

Formato | Exemplo de saída | Observações
--- | --- | ---
{hh}:{mm}:{ss} | 04:24:06 | -
{h} {hours} and {m} {minutes} and {s} {seconds} | 4 horas e 1 minuto e 45 segundos | -
{d} {days} {h}:{mm} | 1 dia 5:03 | -
{d} {days} {h} {hours} {m} {minutes} | 50 dias 5 horas 10 minutos | -
{d} {days} {h} {hours} {m} {minutes} | 20 dias 5 horas 10 minutos | -
{h} {hours} {m} {minutes} | 240 horas e 10 minutos | `biggest-unit='hours'`
{d} {days} {h} {hours} {m} {minutes} | 50 天 5 小时 10 分钟 | `locale='zh-cn'`
