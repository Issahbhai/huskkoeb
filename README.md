HuskKøb er en simpel React Native-app til at oprette og holde styr på sin indkøbsliste

Funktioner: 
- Åbn indkøbslisten eller vejledningen fra forsiden.
- Jeg har lavet nogle eksempel varer
- Skriv en vare og tryk på Tilføj vare. Inputfeltet tømmes bagefter.
- Tom tekst og tekst med kun mellemrum bliver ikke tilføjet.
- Se varerne i en FlatList og følg antallet med tælleren.
- Tøm hele listen med Ryd listen.

Varerne ligger kun i sidens useState. De nulstilles, når siden genstartes eller når siden åbnes igen efter at være lukket med tilbageknappen. Der bruges ingen permanent lagring.


Åbn en terminal i projektmappen og kør:

npm install

For at starte app:

Browser:

npm run web

Expo åbner webappen i din browser. Web-understøttelsen bruger `react-dom`, `react-native-web` og `@expo/metro-runtime`, som installeres med `npm install`.

Telefon:


Scan QR-koden som kommer frem når du har kørt npm run web


Demovideo:
https://www.loom.com/share/01f2234c74f44d8d9e51c6af154ec793
Jeg håber at det er okay, at jeg har brugt loom. Det er jeg bekendt med fra tidligere år