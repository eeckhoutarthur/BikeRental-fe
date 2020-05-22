# ProjectBikeRentalFE
## Start het project
Als u de angular applicatie wilt starten, opent u een nieuw terminal venster.
Zorg dat u in de projectmap zit. U kan naar deze map navigeren door rechts te klikken op de projectmap "ProjectBikeRentalFE",
vervolgens kiest u voor "Open in Terminal".

In het terminal venster typt u het commando npm start. De applicatie zou moeten runnen.
De backend API dient opgestart te zijn. Wanneer dit niet zo is zullen de bikes niet verschijnen,
je zal geen orders kunnen plaatsen of opvragen en het inloggen of registreren zal ook niet mogelijk zijn.

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
