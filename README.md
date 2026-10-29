# KI-Lernwerkstatt

Eine interaktive Lern-App für BWL und Künstliche Intelligenz. Die App verbindet Grundbegriffe, wirtschaftliche Betrachtungen und persönliche Notizen in einem übersichtlichen Lernraum.

**[KI-Lernwerkstatt öffnen](https://leonietroblgomez.github.io/ki-lernwerkstatt-pwa/)**

## Was kann die App?

- Zehn Karteikarten zu KI-Grundlagen und BWL, ergänzt durch eigene Karten und einen persönlichen Lernstand.
- Ein interaktiver Rechner zum Vergleich von Tokenkosten, monatlicher Netto-Ersparnis, Amortisationsdauer und ROI. Die voreingestellten Werte sind Beispiele und können angepasst werden.
- Eigene Notizen sowie Export und Import der lokalen Daten als JSON.
- Offline-Nutzung nach dem ersten vollständigen Laden und Installation als App auf unterstützten Geräten.
- Helles und dunkles Design; keine externen Bibliotheken oder Tracker.

## Installation auf dem Smartphone

1. Öffne den App-Link oben auf deinem Smartphone und warte, bis die Seite geladen ist.
2. **iPhone/iPad:** Tippe auf „Teilen“ und anschließend auf „Zum Home-Bildschirm“.
3. **Android:** Öffne das Browsermenü und wähle „App installieren“ oder „Zum Startbildschirm hinzufügen“.

Je nach Browser kann die Beschriftung abweichen. Für Installation und Offline-Speicherung ist HTTPS oder eine lokale Entwicklungsumgebung erforderlich.

## Lokal starten

Im Projektordner einen lokalen Webserver starten, zum Beispiel:

```sh
python3 -m http.server 8000
```

Anschließend `http://localhost:8000/` öffnen. Das direkte Öffnen der HTML-Datei reicht für die Service-Worker- und Installationsfunktion nicht aus.

## Hinweise

Lernstand, eigene Karten, Notizen und Rechnerwerte werden im lokalen Browser-Speicher des jeweiligen Geräts abgelegt. Sie werden nicht automatisch zwischen Geräten synchronisiert und können beim Löschen der Browserdaten verloren gehen. Regelmäßige JSON-Exporte ermöglichen eine Sicherung und Übertragung.

Die Rechenwerte sind illustrative Annahmen, keine aktuellen Anbieterpreise. Die Inhalte zum EU AI Act dienen dem Lernen und sind keine Rechtsberatung; aktuelle Vorschriften und Fristen sollten gesondert geprüft werden.

## Projektdateien

- `index.html` – Oberfläche, Lernkarten, Rechner und lokale Datenspeicherung
- `manifest.webmanifest` – Metadaten für die Installation
- `sw.js` – versionierter Offline-Cache
- `icons/` – lokale App-Symbole

Erstellt von Leonie Trobl Gomez.
