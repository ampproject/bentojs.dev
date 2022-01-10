---
id: bento-date-display
title: Bento Date Display
permalink: "/fr/components/bento-date-display/"
short_title: Affichage de la date
layout: layouts/component.njk
description: Affiche les données temporelles que vous pouvez afficher dans votre page.
---

# Bento Date Display

{% heroexample 'bento-date-display' %}

Affiche les données temporelles que vous pouvez afficher dans votre page. En fournissant des [attributs](#attributes) spécifiques dans la balise Bento Date Display, l'extension Bento Date Display renvoie une liste de paramètres temporels, que vous pouvez transmettre à [un modèle amp-mustache](../../amp-mustache/amp-mustache.md) pour l'affichage. Reportez-vous à la [liste ci-dessous pour chaque paramètre temporel renvoyé](#returned-time-parameters).

<div class="bd-usage bd-card bd-card--light-sea-green">
<p>Utilisez bento-date-display comme composant Web ou composant fonctionnel React :</p> <a class="bd-button" href="#web-component">↓ Composant Web</a> <a class="bd-button" href="#preact%2Freact-component">↓ React/Preact</a>
</div>

## Composant Web

Nous ne prenons pas en charge la version composant Web de `bento-date-display` puisque `<template>` est toujours en cours de conception. Cet effort peut être suivi dans ce [numéro](https://go.amp.dev/issue/36619).

<!--
An older version of this file contains the removed section, though it's incorrect:

https://github.com/ampproject/amphtml/blob/422d171e87571c4d125a2bf956e78e92444c10e8/extensions/amp-date-display/1.0/README.md
-->

---

## Composant Preact/React

### Importation via npm

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

### Interactivité et utilisation de l'API

Le composant Bento Date Display n'a pas d'API impérative. Cependant, le composant Bento Date Display Preact/React accepte une propriété `render` qui affiche le modèle du consommateur. Cette propriété `render` doit être une fonction que le composant Bento Date Display Preact/React peut utiliser pour afficher son modèle. Le rappel `render` recevra une variété de paramètres liés à la date que les consommateurs pourront utiliser pour interpoler dans le modèle rendu. Voir la <a href="#render" data-md-type="link">section propriété `render`</a> pour plus d'informations.

### Mise en page et style

Le composant Bento Date Display Preact/React permet aux utilisateurs d'afficher leurs propres modèles. Ces modèles peuvent utiliser des styles intégrés, des balises `<style>`, des composants Preact/React qui importent leurs propres feuilles de style.

### Accessoires

#### `datetime`

Propriété requise. Indique la date et l'heure sous la forme d'une date, d'une chaîne ou d'un nombre. Dans le cas d'une chaîne, elle doit être une chaîne de date ISO 8601 standard (par exemple 2017-08-02T15:05:05.000Z) ou la chaîne `now`. Si elle est définie sur `now`, elle utilisera le temps de chargement de la page pour afficher son modèle. Dans le cas d'un nombre, elle doit être une valeur d'époque POSIX en millisecondes.

#### `displayIn`

Propriété facultative qui peut être `"utc"` ou `"local"` et par défaut `"local"`. Cette propriété indique dans quel fuseau horaire afficher la date. Si elle est définie sur la valeur `"utc"`, le composant convertira la date donnée en UTC.

#### `locale`

Une chaîne de langue d'internationalisation pour chaque unité de minuterie. La valeur par défaut est `en` (pour l'anglais). Cette propriété prend en charge toutes les valeurs prises en charge par le navigateur de l'utilisateur.

#### `localeOptions`

L'objet `localeOptions` prend en charge toutes les options sous le paramètre [Intl.DateTimeFormat.options](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#parameters) qui spécifie le style de mise en forme à utiliser pour le format `localeString`.

Notez que si la propriété `displayIn` est réglée sur `utc`, la valeur de `localeOptions.timeZone` sera automatiquement convertie en `UTC`.

#### `render`

Rappel facultatif qui devrait afficher un modèle. Le rappel recevra un objet avec des propriétés/valeurs liées à la date exprimée dans `datetime`.

Par défaut, le composant Bento Date Display affichera la forme [`localeString` de la date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString) pour les valeurs locale et localeOption données. Consultez la section [Paramètres temporels retournés](#returned-time-parameters) pour de plus amples détails concernant la façon dont chaque propriété sera affichée.

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

### Paramètres de temps retourné

Ce tableau répertorie le format que vous pouvez spécifier dans votre modèle Moustache :

Format | Définition
--- | ---
day | 1, 2, ...12, 13, etc.
dayName | chaîne de caractères,
dayNameShort | chaîne de caractères,
dayPeriod | chaîne de caractères,
dayTwoDigit | 01, 02, 03, ..., 12, 13, etc.
hour | 0, 1, 2, 3, ..., 12, 13, ..., 22, 23
hour12 | 1, 2, 3, ..., 12, 1, 2, ..., 11, 12
hour12TwoDigit | 01, 02, ..., 12, 01, 02, ..., 11, 12
hourTwoDigit | 00, 01, 02, ..., 12, 13, ..., 22, 23
iso | Une chaîne de date ISO8601 standard, par exemple 2019-01-23T15:31:21.213Z,
localeString | Une chaîne avec une représentation sensible au langage.
minute | 0, 1, 2, ..., 58, 59
minuteTwoDigit | 00, 01, 02, ..., 58, 59
month | 1, 2, 3, ..., 12
monthName | Chaîne de nom de mois internationalisée.
monthNameShort | Chaîne de nom de mois abrégé internationalisé.,
monthTwoDigit | 01, 02, ..., 11, 12
second | 0, 1, 2, ..., 58, 59
secondTwoDigit | 00, 01, 02, ..., 58, 59
timeZoneName | Fuseau horaire internationalisé, par exemple `Pacific Daylight Time`
timeZoneNameShort | Fuseau horaire internationalisé, abrégé, par exemple `PST`
year | 0, 1, 2, ..., 1999, 2000, 2001, etc.
yearTwoDigit | 00, 01, 02, ..., 17, 18, 19, ..., 98, 99