OC.L10N.register(
    "recognize",
    {
    "Recognize" : "Erkennen",
    "Smart media tagging for Nextcloud" : "Intelligentes Media-Tagging für Nextcloud",
    "This app goes through your media collection and adds fitting tags, automatically categorizing your photos and music.\n\n* 📷 👪 Recognizes faces from contact photos\n* 📷 🏔 Recognizes animals, landscapes, food, vehicles, buildings and other objects\n* 📷 🗼 Recognizes landmarks and monuments\n* 👂 🎵 Recognizes music genres\n* ⚡ Tagging works via Nextcloud's Collaborative Tags, allowing access by any of your apps\n  * 👂 listen to your tagged music with the audioplayer app\n  * 📷 view your tagged photos with the photos app\n\nAfter installation, you can enable tagging in the admin settings.\n\nRequirements:\n- php 7.4 and above\n- App \"collaborative tags\" enabled\n- For native speed:\n  - Processor: x86 64bit (with support for AVX instructions)\n  - System with glibc (usually the norm on Linux; Alpine linux and FreeBSD are *not* such systems)\n- For sub-native speed (using JavaScript mode)\n  - Processor: x86 64bit, arm64, armv7l (no AVX needed)\n  - System with glibc or musl (incl. Alpine linux)\n- ~4GB of free RAM (if you're cutting it close, make sure you have some swap available)\n\nThe app does not send any sensitive data to cloud providers or similar services. All processing is done on your nextcloud machine, using Tensorflow.js running in Node.js, which comes bundled with this app." : "Diese App durchsucht Deine Mediensammlung und fügt passende Tags hinzu, wodurch Deine Fotos und Musik automatisch kategorisiert werden.\n\n* 📷 👪 Erkennt Gesichter aus Kontaktfotos\n* 📷 🏔 Erkennt Tiere, Landschaften, Lebensmittel, Fahrzeuge, Gebäude und andere Objekte\n* 📷 🗼 Erkennt Sehenswürdigkeiten und Denkmäler\n* 👂 🎵 Erkennt Musikgenres\n* ⚡ Tagging funktioniert über die Collaborative Tags von Nextcloud und ermöglicht den Zugriff durch jede Deiner Apps\n* 👂 Höre Deine markierte Musik mit der Audioplayer-App\n* 📷 Schau Dir Deine markierten Fotos mit der Foto-App an\n\nNach der Installation kannst Du das Tagging in den Admin-Einstellungen aktivieren.\n\nAnforderungen:\n- PHP 7.4 und höher\n- App \"kollaborative Tags\" aktiviert\n- Für native Geschwindigkeit:\n - Prozessor: x86 64bit (mit Unterstützung für AVX-Anweisungen)\n - System mit glibc (normalerweise die Norm unter Linux; Alpine Linux und FreeBSD sind *keine* solchen Systeme)\n- Für subnative Geschwindigkeit (unter Verwendung des JavaScript-Modus)\n - Prozessor: x86 64bit, arm64, armv7l (kein AVX erforderlich)\n - System mit glibc oder musl (inkl. Alpine Linux)\n- ~4 GB freier RAM (wenn Du ihn knapp beschneiden, stelle sicher, dass etwas Swap zur Verfügung steht)\n\nDie App sendet keine sensiblen Daten an Cloud-Anbieter oder ähnliche Dienste. Die gesamte Verarbeitung erfolgt auf Deiner Nextcloud-Instanz mit Tensorflow.js, das in Node.js ausgeführt wird, das mit dieser App gebündelt ist.",
    "Status" : "Status",
    "Image tagging" : "Bild-Markierung",
    "Audio tagging" : "Audio-Markierung",
    "Video tagging" : "Video-Markierung",
    "Reset" : "Zurücksetzen",
    "Manual operation" : "Manuelle Ausführung",
    "CPU cores" : "CPU-Kerne",
    "Tensorflow plain mode" : "Tensorflow-Plain-Modus",
    "Node.js path" : "Node.js Pfad",
    "Failed to load settings" : "Einstellungen konnten nicht geladen werden",
    "Failed to save settings" : "Einstellungen konnten nicht gespeichert werden",
    "Face recognition" : "Gesichtserkennung",
    "Cat" : "Katze",
    "Animal" : "Tier",
    "Wildlife" : "Tierwelt",
    "Puma" : "Puma",
    "Leopard" : "Leopard",
    "Lion" : "Löwe",
    "Wild cat" : "Wildkatze",
    "Cheetah" : "Gepard",
    "Seashore" : "Küste",
    "Beach" : "Strand",
    "Water" : "Wasser",
    "Lakeside" : "Seeufer",
    "Flower" : "Blume",
    "Plant" : "Pflanze",
    "Nature" : "Natur",
    "Window" : "Fenster",
    "Architecture" : "Architektur",
    "Stairs" : "Treppen",
    "Building" : "Gebäude",
    "Field" : "Feld",
    "Farm" : "Bauernhof",
    "Landscape" : "Landschaft",
    "Portrait" : "Porträt",
    "Fashion" : "Mode",
    "People" : "Personen",
    "Ship" : "Schiff",
    "Vehicle" : "Fahrzeug",
    "Grasshopper" : "Heuschrecke",
    "Insect" : "Insekt",
    "Fish" : "Fisch",
    "Shark" : "Hai",
    "Chicken" : "Huhn",
    "Bird" : "Vogel",
    "Ostrich" : "Strauß",
    "Owl" : "Eule",
    "Salamander" : "Salamander",
    "Frog" : "Frosch",
    "Turtle" : "Schildkröte",
    "Reptile" : "Rptil",
    "Lizard" : "Eidechse",
    "Chameleon" : "Chamelion",
    "Crocodile" : "Krokodil",
    "Alligator" : "Aligator",
    "Scorpion" : "Skorpion",
    "Spider" : "Spinne",
    "Duck" : "Ente",
    "Worm" : "Wurm",
    "Shell" : "Muschel",
    "Snail" : "Schlange",
    "Crab" : "Krabbe",
    "Lobster" : "Hummer",
    "Cooking" : "Kochen",
    "Penguin" : "Pinguin",
    "Whale" : "Wal",
    "Dog" : "Hund",
    "Wolf" : "Wolf",
    "Fox" : "Fuchs",
    "Bear" : "Bär",
    "Beetle" : "Käfer",
    "Butterfly" : "Schmetterling",
    "Rabbit" : "Kanninchen",
    "Hippo" : "Nilpferd",
    "Cow" : "Kuh",
    "Buffalo" : "Büffel",
    "Sheep" : "Schaaf",
    "Ape" : "Affe",
    "Monkey" : "Affe",
    "Lemur" : "Lemure",
    "Elephant" : "Elefant",
    "Panda" : "Panda",
    "Instrument" : "Instrument",
    "Music" : "Musik",
    "Aircraft" : "Flugzeug",
    "Airport" : "Flughafen",
    "Tractor" : "Traktor",
    "Weapon" : "Waffe",
    "Backpack" : "Rucksack",
    "Shop" : "Geschäft",
    "Office" : "Office",
    "Outdoor" : "Draußen",
    "Living" : "Leben",
    "Tower" : "Turm",
    "Drinks" : "Getränke",
    "Beverage" : "Getränke",
    "Shelter" : "Obdach",
    "Furniture" : "Möbel",
    "Book" : "Buch",
    "Train" : "Zug",
    "Butcher" : "Schlachter",
    "Car" : "Auto",
    "Historic" : "Historisch",
    "Boat" : "Boot",
    "Electronics" : "Elektronik",
    "Indoor" : "Innen",
    "Church" : "Kirche",
    "Shoe" : "Schuh",
    "Candle" : "Kerze",
    "Coffee" : "Kaffee",
    "Keyboard" : "Tastatur",
    "Computer" : "Computer",
    "Helmet" : "Helm",
    "Wall" : "Mauer",
    "Clock" : "Uhr",
    "Dining" : "Speisen",
    "Kitchen" : "Küche",
    "Snow" : "Schnee",
    "Dome" : "Kuppel",
    "Screen" : "Bildschirm",
    "Flag" : "Fahne",
    "Truck" : "LKW",
    "Store" : "Geschäft",
    "Tool" : "Werkzeug",
    "Pumpkin" : "Kürbis",
    "Vegetables" : "Gemüse",
    "Photography" : "Fotografie",
    "Library" : "Bibliothek",
    "Display" : "Anzeige",
    "Bag" : "Tasche",
    "Cup" : "Tasse",
    "Rocks" : "Felsen",
    "Bus" : "Bus",
    "Bowl" : "Schüssel",
    "Monitor" : "Monitor",
    "Bike" : "Fahrrad",
    "Scooter" : "Roller",
    "Camping" : "Camping",
    "Cart" : "Wagen",
    "Piggy bank" : "Sparschwein",
    "Bottle" : "Flasche",
    "Plate" : "Teller",
    "Food" : "Essen",
    "Camera" : "Kamera",
    "Camper" : "Wohnmobil",
    "Barbecue" : "Grillen",
    "Basket" : "Korb",
    "Diving" : "Tauchen",
    "Snowmobile" : "Schneemobil",
    "Bridge" : "Brücke",
    "Couch" : "Couch",
    "Theater" : "Theater",
    "Spoon" : "Löffel",
    "Comic" : "Comic",
    "Soup" : "Suppe",
    "Dessert" : "Nachtisch",
    "Bakery" : "Bäckerei",
    "Fruit" : "Frucht",
    "Pasta" : "Pasta",
    "Meat" : "Fleisch",
    "Pizza" : "Pizza",
    "Wine" : "Wein",
    "Alpine" : "Alpin",
    "Mountain" : "Berg",
    "Sand" : "Sand",
    "Wool" : "Wolle",
    "Glass" : "Glas",
    "Moment" : "Moment",
    "Info" : "Info",
    "Document" : "Dokument",
    "Puzzle" : "Puzzle",
    "Heritage" : "Erbe",
    "Safe" : "Safe",
    "Bucket" : "Bucket",
    "Baby" : "Baby",
    "Cradle" : "Wiege",
    "Patio" : "Terrasse",
    "Radio telescope" : "Radioteleskop",
    "Theme park" : "Themenpark",
    "Festival" : "Festival",
    "Event" : "Ereignis",
    "Monument" : "Denkmal",
    "Balloon" : "Ballon",
    "Crib" : "Krippe",
    "Fan" : "Ventilator",
    "Gas station" : "Tankstelle",
    "Wood" : "Holf",
    "Bench" : "Bank",
    "Parking" : "Parken",
    "Traffic" : "Verkehr",
    "Public transport" : "Öffentlicher Verkehr",
    "Umbrella" : "Regenschirm",
    "Stage" : "Bühne",
    "Toy" : "Spielzeug",
    "Vase" : "Vase",
    "Mailbox" : "Briefkasten",
    "Sign" : "Signieren",
    "Gallery" : "Galerie",
    "Park" : "Park"
},
"nplurals=2; plural=(n != 1);");
