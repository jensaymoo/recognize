OC.L10N.register(
    "recognize",
    {
    "Recognize" : "Tanıma",
    "Smart media tagging for Nextcloud" : "Nextcloud için akıllı ortam etiketleme",
    "This app goes through your media collection and adds fitting tags, automatically categorizing your photos and music.\n\n* 📷 👪 Recognizes faces from contact photos\n* 📷 🏔 Recognizes animals, landscapes, food, vehicles, buildings and other objects\n* 📷 🗼 Recognizes landmarks and monuments\n* 👂 🎵 Recognizes music genres\n* ⚡ Tagging works via Nextcloud's Collaborative Tags, allowing access by any of your apps\n  * 👂 listen to your tagged music with the audioplayer app\n  * 📷 view your tagged photos with the photos app\n\nAfter installation, you can enable tagging in the admin settings.\n\nRequirements:\n- PHP 7.4 and above\n- App \"collaborative tags\" enabled\n- For native speed:\n  - Processor: x86 64bit (with support for AVX instructions)\n  - System with glibc (usually the norm on Linux; Alpine linux and FreeBSD are *not* such systems)\n- For sub-native speed (using JavaScript mode)\n  - Processor: x86 64bit, arm64, armv7l (no AVX needed)\n  - System with glibc or musl (incl. Alpine linux)\n- ~4GB of free RAM (if you're cutting it close, make sure you have some swap available)\n\nThe app does not send any sensitive data to cloud providers or similar services. All processing is done on your Nextcloud machine, using Tensorflow.js running in Node.js, which comes bundled with this app." : "Bu uygulama, ortam koleksiyonunuzu gözden geçirir ve fotoğraflarınız ile müziklerinizi otomatik olarak kategorize ederek uygun etiketleri ekler..\n\n* 📷 👪 Kişi fotoğraflarındaki yüzleri tanır\n* 📷 🏔 Hayvanları, manzaraları, yemekleri, araçları, binaları ve diğer nesneleri tanır\n* 📷 🗼 Tabelaları ve anıtları tanır\n* 👂 🎵 Müzik türlerini tanır\n* ⚡ Etiketleme, Nextcloud İşbirlikli Etiketleri ile yapılır ve herhangi bir uygulamanızın erişimine izin verir\n  * 👂 Etiketlenmiş müziğinizi Ses oynatıcı uygulamasıyla dinleyebilirsiniz\n  * 📷 Etiketlenmiş fotoğraflarınıza Fotoğraflar uygulamasıyla bakabilirsiniz\n\nKurulumdan sonra, yönetici ayarlarından etiketleme özelliğini etkinleştirebilirsiniz..\n\nGereksinimler:\n- PHP 7.4 ve üzerindeki sürümler\n- \"İşbirlikli etiketler\" (collaborative tags) uygulaması etkinleştirilmiş olmalıdır\n- Normal hız için:\n  - İşlemci: x86 64bit (AVX komut seti desteği olan)\n  - glibc kurulu bir sistem (genellikle Linux sistemler üzerinde kuruludur. Alpine linux ve FreeBSD bunlardan değildir)\n- Normalden düşük hız için (JavaScript kipi kullanıldığında)\n  - İşlemci: x86 64bit, arm64, armv7l (AVX komut seti desteği gerekli değildir)\n  - glibc ya da musl kurulu bir sistem (Alpine linux ile birlikte)\n- ~4GB boş RAM bellek (yakın bir değer ayırıyorsanız takas dosyasının kullanıldığından emin olun.)\n\nBu uygulama, bulut hizmeti sağlayıcılarına veya benzer hizmetlere herhangi bir hassas veri göndermez. Tüm işlemler, bu uygulamayla birlikte gelen Node.js üzerinde çalışan Tensorflow.js kullanılarak Nextcloud kopyanızın kurulu olduğu bilgisayar üzerinde yapılır.",
    "Status" : "Durum",
    "Image tagging" : "Görsel etiketleme",
    "Audio tagging" : "Ses etiketleme",
    "Video tagging" : "Görüntü etiketleme",
    "Reset" : "Sıfırla",
    "Manual operation" : "El ile işlem",
    "CPU cores" : "İşlemci çekirdeği sayısı",
    "Tensorflow plain mode" : "Düz Tensorflow kipi",
    "Node.js path" : "Node.js yolu",
    "Failed to load settings" : "Ayarlar yüklenemedi",
    "Failed to save settings" : "Ayarlar kaydedilemedi",
    "Cat" : "Kedi",
    "Animal" : "Hayvan",
    "Wildlife" : "Vahşi yaşam",
    "Nature" : "Doğa",
    "Puma" : "Puma",
    "Leopard" : "Leopar",
    "Lion" : "Aslan",
    "Wild cat" : "Vahşi kedi",
    "Cheetah" : "Çita",
    "Seashore" : "Deniz kıyısı",
    "Beach" : "Plaj",
    "Water" : "Su",
    "Lakeside" : "Göl kıyısı",
    "Flower" : "Çiçek",
    "Plant" : "Bitki",
    "Window" : "Pencere",
    "Architecture" : "Mimari",
    "Stairs" : "Merdiven",
    "Building" : "Bina",
    "Field" : "Arazi",
    "Farm" : "Çiftlik",
    "Landscape" : "Manzara",
    "Portrait" : "Portre",
    "People" : "Kişiler",
    "Fashion" : "Moda",
    "Ship" : "Gemi",
    "Vehicle" : "Araç",
    "Grasshopper" : "Çekirge",
    "Insect" : "Böcek",
    "Fish" : "Balık",
    "Shark" : "Köpek balığı",
    "Chicken" : "Tavuk",
    "Bird" : "Kuş",
    "Ostrich" : "Devekuşu",
    "Owl" : "Baykuş",
    "Salamander" : "Semender",
    "Frog" : "Kurbağa",
    "Turtle" : "Kaplumbağa",
    "Reptile" : "Sürüngen",
    "Lizard" : "Kertenkele",
    "Chameleon" : "Bukalemun",
    "Crocodile" : "Timsahgil",
    "Alligator" : "Timsah",
    "Scorpion" : "Akrep",
    "Spider" : "Örümcek",
    "Duck" : "Ördek",
    "Worm" : "Solucan",
    "Shell" : "İstiridye",
    "Snail" : "Salyangoz",
    "Crab" : "Yengeç",
    "Lobster" : "Istakoz",
    "Cooking" : "Yemek pişirme",
    "Penguin" : "Penguen",
    "Whale" : "Balina",
    "Dog" : "Köpek",
    "Wolf" : "Kurt",
    "Fox" : "Tilki",
    "Bear" : "Ayı",
    "Beetle" : "Kabuklu böcek",
    "Butterfly" : "Kelebek",
    "Rabbit" : "Tavşan",
    "Hippo" : "Su aygırı",
    "Cow" : "İnek",
    "Buffalo" : "Bufalo",
    "Sheep" : "Koyun",
    "Ape" : "Goril",
    "Monkey" : "Maymun",
    "Lemur" : "Lemur",
    "Elephant" : "Fil",
    "Panda" : "Panda",
    "Instrument" : "Enstruman",
    "Music" : "Müzik",
    "Aircraft" : "Uçak",
    "Airport" : "Hava alanı",
    "Tractor" : "Traktör",
    "Weapon" : "Silah",
    "Backpack" : "Sırt çantası",
    "Shop" : "Dükkan",
    "Office" : "Ofis",
    "Outdoor" : "Açık hava",
    "Living" : "Yaşam",
    "Tower" : "Kule",
    "Drinks" : "İçki",
    "Beverage" : "Alkollü içki",
    "Food" : "Yemek",
    "Shelter" : "Barınak",
    "Furniture" : "Mobilya",
    "Book" : "Kitap",
    "Train" : "Tren",
    "Butcher" : "Kasap",
    "Car" : "Otomobil",
    "Historic" : "Tarihi",
    "Boat" : "Bot",
    "Electronics" : "Elektronik",
    "Indoor" : "Kapalı mekan",
    "Church" : "Kilise",
    "Shoe" : "Ayakkabı",
    "Candle" : "Kandil",
    "Coffee" : "Kahve",
    "Keyboard" : "Klavye",
    "Computer" : "Bilgisayar",
    "Helmet" : "Kask",
    "Wall" : "Duvar",
    "Clock" : "Saat",
    "Dining" : "Akşam yemeği",
    "Kitchen" : "Mutfak",
    "Snow" : "Kar",
    "Dome" : "Kubbe",
    "Screen" : "Ekran",
    "Flag" : "Bayrak",
    "Truck" : "Kamyon",
    "Store" : "Mağaza",
    "Tool" : "Araç",
    "Pumpkin" : "Bal kabağı",
    "Vegetables" : "Sebze",
    "Photography" : "Fotoğrafçılık",
    "Library" : "Kitaplık",
    "Display" : "Sergi",
    "Bag" : "Çanta",
    "Cup" : "Kupa",
    "Rocks" : "Kayalar",
    "Bus" : "Otobüs",
    "Bowl" : "Kase",
    "Monitor" : "Ekran",
    "Bike" : "Bisiklet",
    "Scooter" : "Skutır",
    "Camping" : "Kampçılık",
    "Cart" : "Araba",
    "Piggy bank" : "Kumbara",
    "Bottle" : "Şişe",
    "Plate" : "Tabak",
    "Camera" : "Kamera",
    "Camper" : "Kampçı",
    "Barbecue" : "Mangal",
    "Basket" : "Sepet",
    "Diving" : "Dalma",
    "Snowmobile" : "Kar aracı",
    "Bridge" : "Köprü",
    "Couch" : "Koltuk",
    "Theater" : "Tiyatro",
    "Spoon" : "Kaşık",
    "Comic" : "Karikatür",
    "Soup" : "Çorba",
    "Dessert" : "Tatlı",
    "Bakery" : "Fırın",
    "Fruit" : "Meyve",
    "Pasta" : "Makarna",
    "Meat" : "Et",
    "Pizza" : "Pizza",
    "Wine" : "Şarap",
    "Alpine" : "Alp",
    "Mountains" : "Dağlar",
    "Sand" : "Kum",
    "Wool" : "Yün",
    "Glass" : "Cam",
    "Moment" : "An",
    "Info" : "Bilgiler",
    "Document" : "Belge",
    "Puzzle" : "Yap boz",
    "Heritage" : "Miras",
    "Safe" : "Kasa",
    "Bucket" : "Buket",
    "Baby" : "Bebek",
    "Cradle" : "Beşik",
    "Patio" : "Veranda",
    "Mountain" : "Dağ",
    "Radio telescope" : "Radyo teleskop",
    "Theme park" : "Tema parkı",
    "Festival" : "Festival",
    "Event" : "Etkinlik",
    "Monument" : "Anıt",
    "Balloon" : "Balon",
    "Crib" : "Ahır",
    "Fan" : "Vantilatör",
    "Gas station" : "Yakıt istasyonu",
    "Wood" : "Ahşap",
    "Bench" : "Tezgah",
    "Parking" : "Park yeri",
    "Traffic" : "Trafik",
    "Public transport" : "Toplu taşıma",
    "Umbrella" : "Şemsiye",
    "Stage" : "Sahne",
    "Toy" : "Oyuncak",
    "Vase" : "Vazo",
    "Mailbox" : "Posta kutusu",
    "Sign" : "İşaret",
    "Gallery" : "Galeri",
    "Park" : "Park"
},
"nplurals=2; plural=(n > 1);");
