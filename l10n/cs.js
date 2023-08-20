OC.L10N.register(
    "recognize",
    {
    "Recognize" : "Rozpoznání",
    "Smart media tagging and face recognition with on-premises machine learning models" : "Inteligentní opatřování médií štítky a rozpoznávání obličejů pomocí modelů strojového učení, provozovaných přímo na serveru",
    "Status" : "Stav",
    "The machine learning models have been downloaded successfully." : "Modely strojového učení byly úspěšně staženy.",
    "The machine learning models still need to be downloaded." : "Pořád ještě je třeba stáhnout si modely strojového učení.",
    "Could not execute the Node.js binary. You may need to set the path to a working binary manually." : "Nedaří se spustit Node.js. Může být třeba ručně nastavit popis umístění fungujícího spustitelného souboru s ním.",
    "Background Jobs are not executed via cron. Recognize requires background jobs to be executed via cron." : "Úlohy na pozadí nejsou vykonávány prostřednictvím plánovače cron. Aplikace Rozpoznání ovšem vyžaduje, aby tomu tak bylo.",
    "The app is installed and will automatically classify files in background processes." : "Aplikace je nainstalovaná a bude klasifikovat obrázky v procesech, spuštěných na pozadí.",
    "None of the tagging options below are currently selected. The app will currently do nothing." : "V tuto chvíli nejsou vybrány žádné možnosti opatřování štítky. Aplikace v tuto chvíli nic nedělá.",
    "Face recognition" : "Rozpoznávání obličejů",
    "Face recognition is working. " : "Rozpoznávání obličejů funguje.",
    "An error occurred during face recognition, please check the Nextcloud logs." : "Došlo k chybě při rozpoznávání obličejů – zkontrolujte záznamy událostí (log) v Nextcloud.",
    "Waiting for status reports on face recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "Čeká se na hlášení stavu rozpoznání tváře. Pokud je tato zpráva zobrazována déle než 15 minut, podívejte se do záznamů událostí v Nextcloud.",
    "Face recognition:" : "Rozpoznávání obličejů:",
    "Queued files" : "Souborů ve frontě",
    "Last classification: " : "Naposledy klasifikováno:",
    "Scheduled background jobs: " : "Naplánované úlohy na pozadí:",
    "Last background job execution: " : "Nejnovější vykonání úlohy na pozadí:",
    "There are queued files in the face recognition queue but no background job is scheduled to process them." : "Ve frontě rozpoznávání obličejů jsou připraveny soubory, ale není naplánována žádná úloha na pozadí pro jejich zpracování.",
    "Face clustering:" : "Seskupování obličejů:",
    "faces left to cluster" : "obličejů které zbývá zařadit",
    "Last clustering run: " : "Nejnovější běh seskupování:",
    "A minimum of 120 faces per user is necessary for clustering to kick in" : "K tomu, aby proběhlo seskupování je zapotřebí alespoň 120 obličejů u konkrétního uživatele",
    "Enable face recognition (groups photos by faces that appear in them; UI is in the photos app)" : "Zapnout rozpoznávání obličejů (seskupovat fotky podle obličejů, které se na nich objevují; uživatelským rozhraním je aplikace Fotky)",
    "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~500 or more, in WASM mode ~50 is recommended)" : "Poet soubor které zpracovávat v jednotlivých bězích úlohy (ta bude naplánována co 5 minut. V nativním režimu je doporučeno cca 500 a více, v režimu WASM cca 50)",
    "Object detection & landmark recognition" : "Zjišťování objektů a pamětihodností",
    "Object recognition is working." : "Rozpoznávání objektů funguje.",
    "An error occurred during object recognition, please check the Nextcloud logs." : "Došlo k chybě při rozpoznávání objektů – zkontrolujte záznamy událostí (log) v Nextcloud.",
    "Waiting for status reports on object recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "Čeká se na hlášení stavu rozpoznávání objektů. Pokud tato zpráva přetrvává déle než 15 minut, zkontrolujte záznamy událostí (log) v Nextcloud.",
    "Object recognition:" : "Rozpoznávání objektů:",
    "There are queued files in the object detection queue but no background job is scheduled to process them." : "Ve frontě zjišťování objektů jsou připraveny soubory, ale není naplánována žádná úloha na pozadí pro jejich zpracování.",
    "Landmark recognition is working." : "Rozpoznávání pamětihodností funguje.",
    "An error occurred during landmark recognition, please check the Nextcloud logs." : "Došlo k chybě při rozpoznávání pamětihodností – zkontrolujte záznamy událostí (log) v Nextcloud.",
    "Waiting for status reports on landmark recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "Čeká se na hlášení stavu rozpoznávání pamětihodností. Pokud tato zpráva přetrvává déle než 15 minut, zkontrolujte záznamy událostí (log) v Nextcloud.",
    "Landmark recognition:" : "Rozpoznávání pamětihodností:",
    "There are queued files in the landmarks queue but no background job is scheduled to process them." : "Ve frontě zjišťování pamětihodností jsou připraveny soubory, ale není naplánována žádná úloha na pozadí pro jejich zpracování.",
    "Enable object recognition (e.g. food, vehicles, landscapes)" : "Zapnout rozpoznávání objektů (např. jídlo, dopravní prostředky, krajiny)",
    "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~100 or more, in WASM mode ~20 is recommended)" : "Poet soubor které zpracovávat v jednotlivých bězích úlohy (ta bude naplánována co 5 minut. V nativním režimu je doporučeno cca 100 a více, v režimu WASM cca 20)",
    "Enable landmark recognition (e.g. Eiffel Tower, Golden Gate Bridge)" : "Zapnout rozpoznávání pamětihodností (např. Eiffelova věž, most Golden Gate)",
    "Audio tagging" : "Označování zvuků štítky",
    "Audio recognition is working." : "Rozpoznávání zvuků funguje.",
    "An error occurred during audio recognition, please check the Nextcloud logs." : "Došlo k chybě při rozpoznávání zvuků – zkontrolujte záznamy událostí (log) v Nextcloud.",
    "Waiting for status reports on audio recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "Čeká se na hlášení stavu rozpoznávání zvuků. Pokud tato zpráva přetrvává déle než 15 minut, zkontrolujte záznamy událostí (log) v Nextcloud.",
    "Music genre recognition:" : "Rozpoznávání hudebního žánru:",
    "There are queued files but no background job is scheduled to process them." : "Ve frontě jsou připraveny soubory, ale není naplánována žádná úloha na pozadí pro jejich zpracování.",
    "Enable music genre recognition (e.g. pop, rock, folk, metal, new age)" : "Zapnout rozpoznávání hudebního žánru (např. pop, rock, folk, metal, new age)",
    "Video tagging" : "Označování videí štítky",
    "Video recognition is working." : "Rozpoznávání videí funguje.",
    "An error occurred during video recognition, please check the Nextcloud logs." : "Došlo k chybě při rozpoznávání videí – zkontrolujte záznamy událostí (log) v Nextcloud.",
    "Waiting for status reports on video recognition. If this message persists beyond 15 minutes, please check the Nextcloud logs." : "Čeká se na hlášení stavu rozpoznávání videí. Pokud tato zpráva přetrvává déle než 15 minut, zkontrolujte záznamy událostí (log) v Nextcloud.",
    "Video recognition:" : "Rozpoznávání videí:",
    "Enable human action recognition (e.g. arm wrestling, dribbling basketball, hula hooping)" : "Zapnout rozpoznávání lidských činností (např. zápasení, driblování míčem, kroužení obručí)",
    "The number of files to process per job run (A job will be scheduled every 5 minutes; For normal operation ~20 or more, in WASM mode ~5 is recommended)" : "Poet soubor které zpracovávat v jednotlivých bězích úlohy (ta bude naplánována co 5 minut. V nativním režimu je doporučeno cca 20 a více, v režimu WASM cca 5)",
    "Reset" : "Vrátit na výchozí hodnoty",
    "Click the button below to remove all tags from all files that have been classified so far." : "Pokud chcete odebrat veškeré štítky z doposud klasifikovaných souborů, klikněte na níže uvedené tlačítko.",
    "Reset tags for classified files" : "Odebrat štítky z rozpoznaných souborů",
    "Click the button below to remove all face detections from all files that have been classified so far." : "Pokud chcete odebrat veškerá rozpoznání tváří z doposud klasifikovaných souborů, klikněte na níže uvedené tlačítko.",
    "Reset faces for classified files" : "Odebrat označení tváří z rozpoznaných souborů",
    "Click the button below to rescan all files in this instance and add them to the classifier queues." : "Pokud chcete znovu naskenovat veškeré soubory na této instanci, klikněte na níže uvedené tlačítko a přidejte je tak do fronty klasifikace.",
    "Rescan all files" : "Znovu naskenovat veškeré soubory",
    "Click the button below to clear the classifier queues and clear all background jobs. This is useful when you want to do the initial classification using the terminal command." : "Pokud chcete vyčistit fronty rozřazování a úlohy na pozadí, klikněte na níže uvedené tlačítko. Toto se hodí pokud chcete provést počáteční rozřazování pomocí příkazu v terminálu.",
    "Clear queues and background jobs" : "Vyčistit fronty a úlohy na pozadí",
    "CPU cores" : "Jader procesoru",
    "By default all available CPU cores will be used which may put your system under considerable load. To avoid this, you can limit the amount of CPU Cores used. (Note: In WASM mode, currently only 1 core can be used at all times.)" : "Ve výchozím stavu budou použita veškerá dostupná jádra procesoru, což může vámi využívaný systém podstatně vytížit. Pokud se tomu chcete vyhnout, je možné množství využívaných jader procesoru omezit. (Pozn. v režimu WASM je v tuto chvíli možné využívat pouze jedno jádro.)",
    "Number of CPU Cores (0 for no limit)" : "Počet jader procesoru (0 znamená bez omezení)",
    "Tensorflow WASM mode" : "WASM režim Tensorflow",
    "Checking CPU" : "Kontrola procesoru",
    "Could not check whether your machine supports native TensorFlow operation. Make sure your OS has GNU lib C, your CPU supports AVX instructions and you are running on x86. If one of these things is not the case, you will need to run in WASM mode." : "Nepodařilo se zjistit, zda vámi využívaný server podporuje přímé fungování TensorFlow. Ověřte, zda jeho operační systém používá GNU lib C, procesor má architekturu x86 a podporuje AVX instrukce. Pokud tomu tak není, bude třeba provozovat v režimu WASM.",
    "Your machine supports native TensorFlow operation, you do not need WASM mode." : "Vámi využívaný stroj podporuje nativní fungování TensorFlow, není třeba využívat režim WASM.",
    "WASM mode was activated automatically, because your machine does not support native TensorFlow operation:" : "Protože vámi využívaný stroj nepodporuje nativní fungování TensorFlow, byl automaticky náhradně aktivován režim WASM:",
    "Enable WASM mode" : "Zapnout režim WASM",
    "Recognize uses Tensorflow for running the machine learning models. Not all installations support Tensorflow, either because the CPU does not support AVX instructions, or because the platform is not x86 (ie. on a Raspberry Pi, which is ARM), or because the Operating System that your nextcloud runs on (when using docker, then that is the OS within the docker image) does not come with GNU lib C (for example Alpine Linux, which is also used by Nextcloud AIO). In most cases, even if your installation does not support native Tensorflow operation, you can still run Tensorflow using WebAssembly (WASM) in Node.js. This is somewhat slower but still works." : "Rozpoznávání pro provozování strojově naučených modelů používá Tensorflow. Ne všechny instalace ho podporují, buď kvůli tomu, že procesor nepodporuje AVX instrukce, nebo protože není architektury x86 (např. na Raspberry Pi, které je ARM), nebo protože operační systém, na kterém je vámi využívaný Nextcloud provozován (při používání kontejnerové virtualizace, např. Docker, se jedná o ten systém, který se nachází uvnitř kontejneru) neposkytuje GNU lib C (například Alpine Linux, který je také používán v Nextcloud AIO). Ve většině případů, i když vámi využívaná instalace nepodporuje přímé provozování Tensorflow, pořád ještě je možné ho spouštět pomocí WebAssembly (WASM) v Node.js. Je to poněkud pomalejší, ale i tak to funguje.",
    "Tensorflow GPU mode" : "Režim Tensorflow na GPU",
    "Enable GPU mode" : "Zapnout GPU režim",
    "Like most machine learning models, Recognize will run even faster when using a GPU. Setting this up is non-trivial but works well when everything is setup correctly." : "Jako většina modelů strojového učení, Rozpoznávání funguje ještě rychleji s pomocí GPU. Nastavení tohoto není jednoduché, ale když je provedeno správně, funguje dobře.",
    "Learn how to setup GPU mode with Recognize" : "Zjistit jak nastavit GPU režim pro Rozpoznávání",
    "Node.js" : "Node.js",
    "Checking Node.js" : "Kontrola Node.js",
    "Node.js {version} binary was installed successfully." : "Spustitelný soubor s Node.js {version} byl úspěšně nainstalován.",
    "Checking libtensorflow" : "Kontrola libtensorflow",
    "Could not load libtensorflow in Node.js. You can try to manually install libtensorflow or run in WASM mode." : "Nedaří se načíst libtensorflow v Node.js. Je možné pokusit se nainstalovat libtensorflow ručně nebo spustit v režimu WASM.",
    "Successfully loaded libtensorflow in Node.js, but couldn't load GPU. Make sure CUDA Toolkit and cuDNN are installed and accessible, or turn off GPU mode." : "Knihovna libtensorflow úspěšně načtena do Node.js, ale nepodařilo se načíst GPU. Ověřte, že je nainstalovaný a dostupný CUDA Toolkit a cuDNN, nebo GPU režim vypněte.",
    "Libtensorflow was loaded successfully into Node.js." : "Libtensorflow bylo úspěšně nahráno do Node.js.",
    "Could not load Tensorflow WASM in Node.js. Something is wrong with your setup." : "Nepodařilo se načíst Tensorflow WASM do Node.js. S vaší instalací něco není v pořádku.",
    "Tensorflow WASM was loaded successfully into Node.js." : "Tensoflow WASM bylo úspěšně načteno do Node.js.",
    "If the shipped Node.js binary doesn't work on your system for some reason you can set the path to a custom node.js binary. Currently supported is Node v14.17 and newer v14 releases." : "Pokud dodávaný spustitelný soubor Node.js z nějakého důvodu na vámi využívaném systému nefunguje, je možné nasměrovat na uživatelsky určený spustitelný soubor node.js. V tuto chvíli je podporováno Node v14.17 a novější v řadě 14.",
    "Classifier process priority" : "Priorita procesu rozřazování",
    "Checking Nice binary" : "Kontrola spustitelného souboru s nástrojem nice",
    "Could not find the Nice binary. You may need to set the path to a working binary manually." : "Nedaří se najít spustitelný soubor s nástrojem nice. Může být třeba nastavit popis umístění funkčního programu ručně.",
    "Nice binary path" : "Popis umístění spustitelného soubor s nástrojem nice",
    "Nice value to set the priority of the Node.js processes. The value can only be from 0 to 19 since the Node.js process runs without superuser privileges. The higher the nice value, the lower the priority of the process." : "Hodnota priority (nice) procesu Node.js. Hodnota může nabývat pouze hodnot 0 až 19, protože proces Node.js je spouštěný s právy pouze běžného uživatele. Čím vyšší hodnota nice, tím nižší priorita procesu.",
    "Terminal commands" : "Příkazy v terminálu",
    "To download all models preliminary to executing the classification jobs, run the following command on the server terminal." : "Pokud chcete před vykonáním úloh určování stáhnout všechny modely, spusťte v terminálu serveru následující příkaz.",
    "To trigger a full classification run, run the following command on the server terminal. (The classification will run in multiple background jobs which can run in parallel.)" : "Pokud chcete spustit kompletní běh rozřazení, spusťte v příkazovém řádku na serveru následující příkaz. (Rozřazení bude spuštěno v podobě vícero úloh na pozadí, které mohou být spuštěné souběžně.)",
    "To run a full classification run on the terminal, run the following. (The classification will run in sequence inside your terminal.)" : "Pokud chcete spustit kompletní běh rozřazení v příkazovém řádku na serveru, spusťte následující. (Rozřazení bude spuštěno v podobě vícero úloh na pozadí, které mohou být spuštěné souběžně.)",
    "Before running a full initial classification run on the terminal, you should stop all background processing that Recognize scheduled upon installation to avoid interference." : "Než budete spouštět plné počáteční rozřazování na terminálu, pak abyste se vyhnuli interferencím, měli byste zastavit veškeré zpracovávání na pozadí, které Rozpoznávání naplánovalo při instalaci.",
    "To run a face clustering run on for each user in the terminal, run the following. (The clustering will run in sequence inside your terminal.)" : "Pokud chcete spustit shlukování obličejů pro každého z uživatelů v příkazovém řádku na serveru, spusťte následující. (Rozřazení bude spuštěno v podobě vícero úloh na pozadí, které mohou být spuštěné souběžně.)",
    "To remove all face clusters but keep the raw detected faces run the following on the terminal:" : "Pokud chcete odebrat veškeré shluky obličejů, ale chcete ponechat zjištěné bezejmenné obličeje jako takové, spusťte v příkazovém řádku na serveru následující:",
    "To remove all detected faces and face clusters run the following on the terminal:" : "Pokud chcete odebrat veškeré zjištěné obličeje a jejich shluky, spusťte v terminálu následující:",
    "You can reset the tags of all files that have been previously classified by Recognize with the following command:" : "Štítky z veškerých souborů, které byly klasifikovány aplikací Rozpoznat je možné odebrat  pomocí následujícího příkazu:",
    "You can delete all tags that no longer have any files associated with them with the following command:" : "Štítky, které už nejsou přiřazené žádným souborům je možné smazat následujícím příkazem:",
    "To remove tags that were created by Recognize version 2 from all files run the following on the terminal:" : "Pokud chcete ze všech souborů odebrat štítky, vytvořené Rozpoznávání verze 2, v příkazovém řádku na serveru spusťte:",
    "Your server does not support AVX instructions" : "Vámi využívaný server nepodporuje instrukce AVX",
    "Your server does not have an x86 64-bit CPU" : "Vámi využívaný server nemá 64 bitový procesor x86",
    "Your server uses musl libc" : "Vámi využívaný server používá knihovnu musl libc",
    "Failed to load settings" : "Nepodařilo se načíst nastavení",
    "Failed to save settings" : "Nastavení se nepodařilo uložit",
    "never" : "nikdy",
    "{time} ago" : "před {time}",
    "Cat" : "Kočka",
    "Animal" : "Zvíře",
    "Wildlife" : "Divoká příroda",
    "Nature" : "Příroda",
    "Puma" : "Puma",
    "Leopard" : "Leopard",
    "Lion" : "Lev",
    "Wild cat" : "Divoká kočka",
    "Cheetah" : "Gepard",
    "Seashore" : "Pobřeží",
    "Beach" : "Pláž",
    "Water" : "Voda",
    "Lakeside" : "Jezero",
    "Flower" : "Květina",
    "Plant" : "Rostlina",
    "Window" : "Okno",
    "Architecture" : "Architektura",
    "Stairs" : "Schody",
    "Building" : "Stavby",
    "Field" : "Pole",
    "Farm" : "Farma",
    "Landscape" : "Krajina",
    "Portrait" : "Portrét",
    "People" : "Lidé",
    "Fashion" : "Móda",
    "Ship" : "Loď",
    "Vehicle" : "Vozidlo",
    "Grasshopper" : "Luční koník",
    "Insect" : "Hmyz",
    "Fish" : "Ryba",
    "Shark" : "Žralok",
    "Chicken" : "Kuře",
    "Bird" : "Pták",
    "Ostrich" : "Pštros",
    "Owl" : "Sova",
    "Salamander" : "Mlok",
    "Frog" : "Žába",
    "Turtle" : "Želva",
    "Reptile" : "Plazi",
    "Lizard" : "Ještěrka",
    "Chameleon" : "Chameleon",
    "Crocodile" : "Krokodýl",
    "Alligator" : "Aligátor",
    "Scorpion" : "Škorpion",
    "Spider" : "Pavouk",
    "Duck" : "Kachna",
    "Worm" : "Červ",
    "Shell" : "Ulita",
    "Snail" : "Šnek",
    "Crab" : "Krab",
    "Lobster" : "Rak",
    "Cooking" : "Vaření",
    "Penguin" : "Tučňák",
    "Whale" : "Velryba",
    "Dog" : "Pes",
    "Wolf" : "Vlk",
    "Fox" : "Liška",
    "Bear" : "Medvěd",
    "Beetle" : "Brouk",
    "Butterfly" : "Motýl",
    "Rabbit" : "Králík",
    "Hippo" : "Hroch",
    "Cow" : "Kráva",
    "Buffalo" : "Bizon",
    "Sheep" : "Ovce",
    "Ape" : "Lidoop",
    "Monkey" : "Opice",
    "Lemur" : "Lemur",
    "Elephant" : "Slon",
    "Panda" : "Panda",
    "Instrument" : "Nástroj",
    "Music" : "Hudba",
    "Aircraft" : "Letadlo",
    "Airport" : "Letiště",
    "Tractor" : "Traktor",
    "Weapon" : "Zbraň",
    "Backpack" : "Batoh",
    "Shop" : "Obchod",
    "Office" : "Kancelář",
    "Outdoor" : "Venku",
    "Living" : "Bydlení",
    "Tower" : "Věž",
    "Drinks" : "Nápoje",
    "Beverage" : "Nápoje",
    "Food" : "Jídlo",
    "Shelter" : "Přístřešek",
    "Furniture" : "Nábytek",
    "Book" : "Kniha",
    "Train" : "Vlak",
    "Butcher" : "Řezník",
    "Car" : "Auto",
    "Historic" : "Historické",
    "Boat" : "Loď",
    "Electronics" : "Elektronika",
    "Indoor" : "Uvnitř",
    "Church" : "Kostel",
    "Shoe" : "Bota",
    "Candle" : "Svíčka",
    "Coffee" : "Káva",
    "Keyboard" : "Klávesnice",
    "Computer" : "Počítač",
    "Helmet" : "Přilba",
    "Wall" : "Stěna",
    "Clock" : "Hodiny",
    "Dining" : "Snídaně",
    "Kitchen" : "Kuchyně",
    "Snow" : "Sníh",
    "Dome" : "Kopule",
    "Screen" : "Obrazovka",
    "Flag" : "Vlajka",
    "Truck" : "Nákladní auto",
    "Store" : "Obchod",
    "Tool" : "Nástroj",
    "Pumpkin" : "Dýně",
    "Vegetables" : "Zelenina",
    "Photography" : "Fotografie",
    "Library" : "Knihovna",
    "Display" : "Zobrazit",
    "Bag" : "Zavazadlo",
    "Cup" : "Pohár",
    "Rocks" : "Skály",
    "Bus" : "Autobus",
    "Bowl" : "Mísa",
    "Monitor" : "Monitor",
    "Bike" : "Kolo",
    "Scooter" : "Skútr",
    "Camping" : "Kempování",
    "Cart" : "Nákupní vozík",
    "Piggy bank" : "Kasička",
    "Bottle" : "Láhev",
    "Plate" : "Talíř",
    "Camera" : "Kamera",
    "Camper" : "Obytný vůz",
    "Barbecue" : "Grilování",
    "Basket" : "Košík",
    "Diving" : "Potápění",
    "Snowmobile" : "Sněžný skútr",
    "Bridge" : "Most",
    "Couch" : "Pohovka",
    "Theater" : "Divadlo",
    "Spoon" : "Lžíce",
    "Comic" : "Komix",
    "Soup" : "Polévka",
    "Dessert" : "Dezert",
    "Bakery" : "Pečivo",
    "Fruit" : "Ovoce",
    "Pasta" : "Těstoviny",
    "Meat" : "Maso",
    "Pizza" : "Pizza",
    "Wine" : "Víno",
    "Alpine" : "Hory",
    "Mountains" : "Hory",
    "Sand" : "Písek",
    "Wool" : "Vlna",
    "Glass" : "Sklo",
    "Moment" : "Okamžik",
    "Info" : "Informace",
    "Document" : "Dokument",
    "Puzzle" : "Pucle",
    "Heritage" : "Dědictví",
    "Safe" : "Trezor",
    "Bucket" : "Bucket",
    "Baby" : "Dítě",
    "Cradle" : "Kolébka",
    "Patio" : "Terasa",
    "Mountain" : "Hora",
    "Radio telescope" : "Radioteleskop",
    "Theme park" : "Zábavní park",
    "Festival" : "Festival",
    "Event" : "Událost",
    "Monument" : "Památník",
    "Balloon" : "Balon",
    "Crib" : "Postýlka",
    "Fan" : "Větrák",
    "Gas station" : "Čerpací stanice",
    "Wood" : "Dřevo",
    "Bench" : "Lavice",
    "Parking" : "Parkoviště",
    "Traffic" : "Provoz",
    "Public transport" : "Veřejná doprava",
    "Umbrella" : "Deštník",
    "Stage" : "Jeviště",
    "Toy" : "Hračka",
    "Vase" : "Váza",
    "Mailbox" : "Poštovní schránka",
    "Sign" : "Podepsat",
    "Gallery" : "Galerie",
    "Park" : "Park"
},
"nplurals=4; plural=(n == 1 && n % 1 == 0) ? 0 : (n >= 2 && n <= 4 && n % 1 == 0) ? 1: (n % 1 != 0 ) ? 2 : 3;");
