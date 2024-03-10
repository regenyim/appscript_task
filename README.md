# Google Sheets Date Calculator App

Ez a JavaScript alapú Google Apps Script képes a [Google Sheets-ből](https://developers.google.com/apps-script/guides/sheets) kiolvasni a kezdő és végdátumokat. A script kiszámolja, hogy a kezdő és végdátum között hány nap telt el, majd visszaírja ezt az információt a táblázatba. Emellett minden sorhoz hozzáad egy random e-mail címet a [JSONPlaceholder](https://jsonplaceholder.typicode.com/comments) API segítségével.

## Használati utasítások

### 1. Google Sheet előkészítése

  - Nyiss meg egy Google Sheet-et.
  - A "A" oszlopban hozz létre két oszlopot: "KezdoDatum" és "VegDatum."
  - A "B" oszlopban hozz létre egy üres oszlopot a napok számolásához: "ElteltNapok."
  - Hozz létre egy további üres oszlopot a random e-mail címek számára: "RandomEmail."

### 2. Script hozzáadása a Google Sheet-hez

  - Nyisd meg a Google Sheet-et.
  - A felső menüsorban válaszd ki a "Kiterjesztések" lehetőséget, majd válaszd a "Apps Script" lehetőséget.
  - A megnyíló ablakban másold be a mellékelt [scriptet](./script.gs).