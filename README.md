# ProjectBikeRentalFE
## Start het project
Als u de Angular applicatie wilt starten, opent u een nieuw terminal venster.
Zorg dat u in de projectmap zit. U kan naar deze map navigeren door rechts te klikken op de projectmap "ProjectBikeRentalFE",
vervolgens kiest u voor "Open in Terminal".

In het terminal venster typt u het commando npm start. De applicatie zou moeten runnen.
De backend API dient opgestart te zijn. Wanneer dit niet zo is zullen de bikes niet verschijnen,
je zal geen orders kunnen plaatsen of opvragen en het inloggen of registreren zal ook niet mogelijk zijn.

### Inloggegevens
  - email: arthur.eeckhout@student.hogent.be passwoord: W@woord5 --> admin
  - email: dylan.mooij@student.hogent.be passwoord: W@woord6 --> gebruiker

## Testen van de applicatie
Om de applicatie te testen maak ik gebruik van Cypress.
De testen kunt u terug vinden in ProjectBikeRentalFE/cypress/integration.
In de integration map zit er een JavaScript bestand waar de testen zijn uitgewerkt.

### Het runnen van de testen
Dit kunt u doen door terug te navigeren naar de projectmap en dit weer te openen in de terminal.

Vervolgens typt u in het terminal venster "npx cypress open".
**Zorg er voor dat het gewone project aan het runnen is.**

Er zou nu een scherm moeten verschijnen.
Nu klikt u op "tests.spec.js". De testen zouden moeten runnen en slagen.

## Extra technologie
### Integratie Google maps
Als extra technologie koos ik om google maps te gebruiken in mijn project. De kaart zal de plaats aanduiden waar de winkel gevestigd is.

Google maps implementeerde ik met behulpt van de Angular Google Maps package (AGM).
Deze package kunt u vinden op volgende site, https://angular-maps.com/

Om de data te kunnen opvragen voor deze map, hebt u een API key nodig van google. Deze is gratis te verkrijgen.
Deze API service dient u wel nog in te stellen op "Maps JavaScript API", dit kunt u configureren op Google cloud platform.
De gebruiker merkt hier zelf niets van, aangezien de key is ingesteld in de code.

Het enige nadeel is dat er nu een watermerk op de map staat. Dit komt omdat ik niet betaal voor deze service.
![](/images/overzichtMaps.png)

Wanneer de contact page van mijn Angular applicatie wordt geopend zult u de map terugvinden.
De browser zal vragen naar uw locatie. Wanneer u dit accepteert zal uw positie op de map worden aangeduid. Zo kunt u zien hoe ver u bent verwijdert van de bike rental store.

![](/images/pointOnMap.png)

Bij het hoveren over de locatie aanduiding zult u een boodschap zien. Deze boodschap verschijnt ook bij het klikken op de aanduiding.

![](/images/dialogStore.png)
![](/images/locationCustomer.png)

