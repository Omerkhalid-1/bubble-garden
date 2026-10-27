// Bubble Garden translations.
// Word lists follow a fixed order (see the *_IDS lists in index.html).
// A word may be "Name|find form": Name is spoken on pop and shown on cards,
// the find form is used in "Find {w}!" (e.g. French "Chien|le chien").
// To add a language: copy the `en` block, translate it and give it a new key.
window.BG_LANGS = {
  en: {
    name: 'English', tts: 'en-US', dir: 'ltr',
    autoFind: w => 'the ' + w.toLowerCase(),
    ui: {
      tagline: 'Tap the bubbles. Every bubble sings.',
      toddler: 'Little Ones', toddlerSub: 'Learn animals, numbers, shapes & more',
      play: 'Play', playSub: 'Pop, collect stars and learn colours',
      learnTitle: 'What shall we learn?',
      grow: 'Grow with me', growBlurb: 'Starts with animals, then unlocks shapes, numbers, colours & more as you play',
      animals: 'Animals', numbers: 'Numbers', shapes: 'Shapes', abc: 'ABC', colours: 'Colours',
      fruits: 'Fruits', vehicles: 'Vehicles', mix: 'Mix',
      level: 'Level {n} of {m}',
      findGame: 'Find-it game', on: 'on', off: 'off',
      restart: 'Start levels over', back: 'Back',
      hint: 'Find-it asks your little one to spot one picture (ages 2½+). During play, hold 🏠 to come back here.',
      resetConfirm: 'Start all learning levels from the beginning?',
      hold: 'hold',
      find: 'Find {w}!', found: 'Yes! You found {w}!',
      wellDone: 'Well done!', fresh: 'New!', yay: 'Yay!', superStar: 'Super star!',
      kidsIntro: 'Pop the bubbles and collect stars!',
      language: 'Language',
      noVoice: 'No voice for this language on this device. Words will still show on screen.'
    },
    words: {
      animals: ['Dog', 'Cat', 'Cow', 'Duck', 'Sheep', 'Frog', 'Lion', 'Chicken', 'Bee', 'Monkey', 'Elephant', 'Rabbit'],
      numbers: ['One|number one', 'Two|number two', 'Three|number three', 'Four|number four', 'Five|number five',
        'Six|number six', 'Seven|number seven', 'Eight|number eight', 'Nine|number nine', 'Ten|number ten'],
      shapes: ['Circle', 'Square', 'Triangle', 'Star', 'Heart', 'Diamond', 'Rectangle', 'Oval'],
      colours: ['Red|the red bubble', 'Orange|the orange bubble', 'Yellow|the yellow bubble', 'Green|the green bubble',
        'Blue|the blue bubble', 'Purple|the purple bubble', 'Pink|the pink bubble', 'Brown|the brown bubble'],
      fruits: ['Apple', 'Banana', 'Mango', 'Grapes', 'Strawberry', 'Watermelon', 'Orange', 'Cherries', 'Pineapple', 'Pear'],
      vehicles: ['Car', 'Bus', 'Train', 'Aeroplane', 'Fire engine', 'Ambulance', 'Boat', 'Bicycle', 'Tractor', 'Helicopter', 'Rocket']
    }
  },

  ur: {
    name: 'اردو', tts: 'ur-PK', dir: 'rtl', digits: '۰۱۲۳۴۵۶۷۸۹',
    ui: {
      tagline: 'بلبلوں کو چھوئیں۔ ہر بلبلہ گاتا ہے۔',
      toddler: 'ننھے منے', toddlerSub: 'جانور، گنتی، شکلیں اور بہت کچھ سیکھیں',
      play: 'کھیلیں', playSub: 'بلبلے پھوڑیں، ستارے جمع کریں، رنگ سیکھیں',
      learnTitle: 'آج کیا سیکھیں؟',
      grow: 'میرے ساتھ بڑھو', growBlurb: 'جانوروں سے شروع کریں، پھر کھیلتے کھیلتے شکلیں، گنتی، رنگ اور بہت کچھ کھلتا جائے گا',
      animals: 'جانور', numbers: 'گنتی', shapes: 'شکلیں', abc: 'ABC (انگریزی)', colours: 'رنگ',
      fruits: 'پھل', vehicles: 'سواریاں', mix: 'سب کچھ',
      level: 'درجہ {n} / {m}',
      findGame: 'ڈھونڈو کھیل', on: 'آن', off: 'آف',
      restart: 'درجے دوبارہ شروع کریں', back: 'واپس',
      hint: '“ڈھونڈو” کھیل میں بچہ ایک تصویر ڈھونڈتا ہے (ڈھائی سال اور بڑے)۔ کھیل کے دوران یہاں واپس آنے کے لیے 🏠 دبائے رکھیں۔',
      resetConfirm: 'کیا سب درجے شروع سے شروع کریں؟',
      hold: 'دبائیں',
      find: '{w} ڈھونڈو!', found: 'شاباش! {w}!',
      wellDone: 'شاباش!', fresh: 'نیا!', yay: 'واہ!', superStar: 'سپر ستارہ!',
      kidsIntro: 'بلبلے پھوڑو اور ستارے جمع کرو!',
      language: 'زبان',
      noVoice: 'اس ڈیوائس پر اس زبان کی آواز نہیں ہے۔ الفاظ اسکرین پر نظر آتے رہیں گے۔'
    },
    words: {
      animals: ['کتا', 'بلی', 'گائے', 'بطخ', 'بھیڑ', 'مینڈک', 'شیر', 'مرغی', 'شہد کی مکھی', 'بندر', 'ہاتھی', 'خرگوش'],
      numbers: ['ایک', 'دو', 'تین', 'چار', 'پانچ', 'چھ', 'سات', 'آٹھ', 'نو', 'دس'],
      shapes: ['دائرہ', 'مربع', 'تکون', 'ستارہ', 'دل', 'ہیرا', 'مستطیل', 'بیضوی'],
      colours: ['لال', 'نارنجی', 'پیلا', 'ہرا', 'نیلا', 'جامنی', 'گلابی', 'بھورا'],
      fruits: ['سیب', 'کیلا', 'آم', 'انگور', 'اسٹرابیری', 'تربوز', 'سنگترہ', 'چیری', 'انناس', 'ناشپاتی'],
      vehicles: ['گاڑی', 'بس', 'ریل گاڑی', 'ہوائی جہاز', 'فائر بریگیڈ', 'ایمبولینس', 'کشتی', 'سائیکل', 'ٹریکٹر', 'ہیلی کاپٹر', 'راکٹ']
    }
  },

  fr: {
    name: 'Français', tts: 'fr-FR', dir: 'ltr',
    ui: {
      tagline: 'Touche les bulles. Chaque bulle chante.',
      toddler: 'Les petits', toddlerSub: 'Animaux, chiffres, formes et plus encore',
      play: 'Jouer', playSub: 'Éclate, gagne des étoiles et apprends les couleurs',
      learnTitle: 'Qu’allons-nous apprendre ?',
      grow: 'Grandis avec moi', growBlurb: 'Commence avec les animaux, puis débloque formes, chiffres, couleurs et plus en jouant',
      animals: 'Animaux', numbers: 'Chiffres', shapes: 'Formes', abc: 'ABC (anglais)', colours: 'Couleurs',
      fruits: 'Fruits', vehicles: 'Véhicules', mix: 'Mélange',
      level: 'Niveau {n} sur {m}',
      findGame: 'Jeu « Trouve-le »', on: 'oui', off: 'non',
      restart: 'Recommencer les niveaux', back: 'Retour',
      hint: 'Le jeu « Trouve-le » demande à votre enfant de repérer une image (dès 2 ans et demi). Pendant le jeu, maintenez 🏠 pour revenir ici.',
      resetConfirm: 'Recommencer tous les niveaux depuis le début ?',
      hold: 'maintenir',
      find: 'Trouve {w} !', found: 'Bravo ! Tu as trouvé {w} !',
      wellDone: 'Bravo !', fresh: 'Nouveau !', yay: 'Youpi !', superStar: 'Super étoile !',
      kidsIntro: 'Éclate les bulles et gagne des étoiles !',
      language: 'Langue',
      noVoice: 'Pas de voix pour cette langue sur cet appareil. Les mots s’affichent quand même.'
    },
    words: {
      animals: ['Chien|le chien', 'Chat|le chat', 'Vache|la vache', 'Canard|le canard', 'Mouton|le mouton', 'Grenouille|la grenouille',
        'Lion|le lion', 'Poule|la poule', 'Abeille|l’abeille', 'Singe|le singe', 'Éléphant|l’éléphant', 'Lapin|le lapin'],
      numbers: ['Un|le un', 'Deux|le deux', 'Trois|le trois', 'Quatre|le quatre', 'Cinq|le cinq',
        'Six|le six', 'Sept|le sept', 'Huit|le huit', 'Neuf|le neuf', 'Dix|le dix'],
      shapes: ['Cercle|le cercle', 'Carré|le carré', 'Triangle|le triangle', 'Étoile|l’étoile', 'Cœur|le cœur',
        'Losange|le losange', 'Rectangle|le rectangle', 'Ovale|l’ovale'],
      colours: ['Rouge|le rouge', 'Orange|l’orange', 'Jaune|le jaune', 'Vert|le vert', 'Bleu|le bleu',
        'Violet|le violet', 'Rose|le rose', 'Marron|le marron'],
      fruits: ['Pomme|la pomme', 'Banane|la banane', 'Mangue|la mangue', 'Raisin|le raisin', 'Fraise|la fraise',
        'Pastèque|la pastèque', 'Orange|l’orange', 'Cerises|les cerises', 'Ananas|l’ananas', 'Poire|la poire'],
      vehicles: ['Voiture|la voiture', 'Bus|le bus', 'Train|le train', 'Avion|l’avion', 'Camion de pompiers|le camion de pompiers',
        'Ambulance|l’ambulance', 'Bateau|le bateau', 'Vélo|le vélo', 'Tracteur|le tracteur', 'Hélicoptère|l’hélicoptère', 'Fusée|la fusée']
    }
  },

  zh: {
    name: '中文', tts: 'zh-CN', dir: 'ltr',
    ui: {
      tagline: '点一点泡泡，每个泡泡都会唱歌。',
      toddler: '宝宝乐园', toddlerSub: '学动物、数字、形状等等',
      play: '玩一玩', playSub: '戳泡泡、收集星星、认识颜色',
      learnTitle: '今天学什么？',
      grow: '和我一起成长', growBlurb: '从动物开始，边玩边解锁形状、数字、颜色等更多内容',
      animals: '动物', numbers: '数字', shapes: '形状', abc: 'ABC（英语）', colours: '颜色',
      fruits: '水果', vehicles: '交通工具', mix: '混合',
      level: '第 {n} 级 / 共 {m} 级',
      findGame: '找一找游戏', on: '开', off: '关',
      restart: '重新开始等级', back: '返回',
      hint: '“找一找”会请宝宝找出一张图片（适合两岁半以上）。游戏中长按 🏠 可回到这里。',
      resetConfirm: '要从头开始所有学习等级吗？',
      hold: '长按',
      find: '找一找{w}！', found: '找到了！{w}！',
      wellDone: '真棒！', fresh: '新的！', yay: '耶！', superStar: '超级星星！',
      kidsIntro: '戳破泡泡，收集星星！',
      language: '语言',
      noVoice: '此设备没有该语言的语音。文字仍会显示在屏幕上。'
    },
    words: {
      animals: ['小狗', '小猫', '奶牛', '鸭子', '小羊', '青蛙', '狮子', '母鸡', '蜜蜂', '猴子', '大象', '兔子'],
      numbers: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'],
      shapes: ['圆形', '正方形', '三角形', '星形', '心形', '菱形', '长方形', '椭圆形'],
      colours: ['红色', '橙色', '黄色', '绿色', '蓝色', '紫色', '粉色', '棕色'],
      fruits: ['苹果', '香蕉', '芒果', '葡萄', '草莓', '西瓜', '橙子', '樱桃', '菠萝', '梨'],
      vehicles: ['汽车', '公共汽车', '火车', '飞机', '消防车', '救护车', '帆船', '自行车', '拖拉机', '直升机', '火箭']
    }
  },

  es: {
    name: 'Español', tts: 'es-ES', dir: 'ltr',
    ui: {
      tagline: 'Toca las burbujas. Cada burbuja canta.',
      toddler: 'Peques', toddlerSub: 'Animales, números, formas y más',
      play: 'Jugar', playSub: 'Revienta, gana estrellas y aprende colores',
      learnTitle: '¿Qué vamos a aprender?',
      grow: 'Crece conmigo', growBlurb: 'Empieza con animales y desbloquea formas, números, colores y más mientras juegas',
      animals: 'Animales', numbers: 'Números', shapes: 'Formas', abc: 'ABC (inglés)', colours: 'Colores',
      fruits: 'Frutas', vehicles: 'Vehículos', mix: 'Mezcla',
      level: 'Nivel {n} de {m}',
      findGame: 'Juego «Encuéntralo»', on: 'sí', off: 'no',
      restart: 'Reiniciar niveles', back: 'Atrás',
      hint: '«Encuéntralo» pide a tu peque que busque una imagen (desde 2 años y medio). Durante el juego, mantén pulsado 🏠 para volver aquí.',
      resetConfirm: '¿Reiniciar todos los niveles desde el principio?',
      hold: 'mantén',
      find: '¡Busca {w}!', found: '¡Muy bien! ¡Encontraste {w}!',
      wellDone: '¡Muy bien!', fresh: '¡Nuevo!', yay: '¡Bien!', superStar: '¡Súper estrella!',
      kidsIntro: '¡Revienta las burbujas y gana estrellas!',
      language: 'Idioma',
      noVoice: 'No hay voz para este idioma en este dispositivo. Las palabras se verán en pantalla.'
    },
    words: {
      animals: ['Perro|el perro', 'Gato|el gato', 'Vaca|la vaca', 'Pato|el pato', 'Oveja|la oveja', 'Rana|la rana',
        'León|el león', 'Gallina|la gallina', 'Abeja|la abeja', 'Mono|el mono', 'Elefante|el elefante', 'Conejo|el conejo'],
      numbers: ['Uno|el uno', 'Dos|el dos', 'Tres|el tres', 'Cuatro|el cuatro', 'Cinco|el cinco',
        'Seis|el seis', 'Siete|el siete', 'Ocho|el ocho', 'Nueve|el nueve', 'Diez|el diez'],
      shapes: ['Círculo|el círculo', 'Cuadrado|el cuadrado', 'Triángulo|el triángulo', 'Estrella|la estrella', 'Corazón|el corazón',
        'Rombo|el rombo', 'Rectángulo|el rectángulo', 'Óvalo|el óvalo'],
      colours: ['Rojo|el rojo', 'Naranja|el naranja', 'Amarillo|el amarillo', 'Verde|el verde', 'Azul|el azul',
        'Morado|el morado', 'Rosa|el rosa', 'Marrón|el marrón'],
      fruits: ['Manzana|la manzana', 'Plátano|el plátano', 'Mango|el mango', 'Uvas|las uvas', 'Fresa|la fresa',
        'Sandía|la sandía', 'Naranja|la naranja', 'Cerezas|las cerezas', 'Piña|la piña', 'Pera|la pera'],
      vehicles: ['Coche|el coche', 'Autobús|el autobús', 'Tren|el tren', 'Avión|el avión', 'Camión de bomberos|el camión de bomberos',
        'Ambulancia|la ambulancia', 'Barco|el barco', 'Bicicleta|la bicicleta', 'Tractor|el tractor', 'Helicóptero|el helicóptero', 'Cohete|el cohete']
    }
  },

  ar: {
    name: 'العربية', tts: 'ar-SA', dir: 'rtl', digits: '٠١٢٣٤٥٦٧٨٩',
    ui: {
      tagline: 'المس الفقاعات. كل فقاعة تغنّي.',
      toddler: 'الصغار', toddlerSub: 'تعلّم الحيوانات والأرقام والأشكال والمزيد',
      play: 'العب', playSub: 'فرقع الفقاعات، اجمع النجوم وتعلّم الألوان',
      learnTitle: 'ماذا سنتعلّم؟',
      grow: 'انمُ معي', growBlurb: 'يبدأ بالحيوانات، ثم تُفتح الأشكال والأرقام والألوان والمزيد أثناء اللعب',
      animals: 'حيوانات', numbers: 'أرقام', shapes: 'أشكال', abc: 'ABC (إنجليزي)', colours: 'ألوان',
      fruits: 'فواكه', vehicles: 'مركبات', mix: 'منوّع',
      level: 'المستوى {n} من {m}',
      findGame: 'لعبة «ابحث»', on: 'تشغيل', off: 'إيقاف',
      restart: 'إعادة المستويات', back: 'رجوع',
      hint: 'لعبة «ابحث» تطلب من طفلك إيجاد صورة واحدة (من عمر سنتين ونصف). أثناء اللعب، اضغط مطوّلًا على 🏠 للعودة إلى هنا.',
      resetConfirm: 'هل تريد بدء جميع المستويات من جديد؟',
      hold: 'اضغط مطوّلًا',
      find: 'ابحث عن {w}!', found: 'أحسنت! {w}!',
      wellDone: 'أحسنت!', fresh: 'جديد!', yay: 'رائع!', superStar: 'نجمة رائعة!',
      kidsIntro: 'فرقع الفقاعات واجمع النجوم!',
      language: 'اللغة',
      noVoice: 'لا يوجد صوت لهذه اللغة على هذا الجهاز. ستظهر الكلمات على الشاشة.'
    },
    words: {
      animals: ['كلب', 'قطة', 'بقرة', 'بطة', 'خروف', 'ضفدع', 'أسد', 'دجاجة', 'نحلة', 'قرد', 'فيل', 'أرنب'],
      numbers: ['واحد', 'اثنان', 'ثلاثة', 'أربعة', 'خمسة', 'ستة', 'سبعة', 'ثمانية', 'تسعة', 'عشرة'],
      shapes: ['دائرة', 'مربع', 'مثلث', 'نجمة', 'قلب', 'معيّن', 'مستطيل', 'بيضاوي'],
      colours: ['أحمر', 'برتقالي', 'أصفر', 'أخضر', 'أزرق', 'بنفسجي', 'وردي', 'بني'],
      fruits: ['تفاحة', 'موزة', 'مانجو', 'عنب', 'فراولة', 'بطيخ', 'برتقالة', 'كرز', 'أناناس', 'كمثرى'],
      vehicles: ['سيارة', 'حافلة', 'قطار', 'طائرة', 'سيارة إطفاء', 'سيارة إسعاف', 'قارب', 'دراجة', 'جرار', 'مروحية', 'صاروخ']
    }
  },

  hi: {
    name: 'हिन्दी', tts: 'hi-IN', dir: 'ltr', digits: '०१२३४५६७८९',
    ui: {
      tagline: 'बुलबुलों को छुओ। हर बुलबुला गाता है।',
      toddler: 'नन्हे-मुन्ने', toddlerSub: 'जानवर, गिनती, आकार और बहुत कुछ सीखें',
      play: 'खेलो', playSub: 'बुलबुले फोड़ो, तारे जमा करो, रंग सीखो',
      learnTitle: 'आज क्या सीखें?',
      grow: 'मेरे साथ बढ़ो', growBlurb: 'जानवरों से शुरू करें, फिर खेलते-खेलते आकार, गिनती, रंग और बहुत कुछ खुलता जाएगा',
      animals: 'जानवर', numbers: 'गिनती', shapes: 'आकार', abc: 'ABC (अंग्रेज़ी)', colours: 'रंग',
      fruits: 'फल', vehicles: 'वाहन', mix: 'सब कुछ',
      level: 'स्तर {n} / {m}',
      findGame: 'ढूँढो खेल', on: 'चालू', off: 'बंद',
      restart: 'स्तर फिर से शुरू करें', back: 'वापस',
      hint: '“ढूँढो” खेल में बच्चा एक चित्र ढूँढता है (ढाई साल से ऊपर)। खेल के दौरान यहाँ लौटने के लिए 🏠 दबाए रखें।',
      resetConfirm: 'क्या सभी स्तर शुरू से शुरू करें?',
      hold: 'दबाएँ',
      find: '{w} ढूँढो!', found: 'शाबाश! {w}!',
      wellDone: 'शाबाश!', fresh: 'नया!', yay: 'वाह!', superStar: 'सुपर तारा!',
      kidsIntro: 'बुलबुले फोड़ो और तारे जमा करो!',
      language: 'भाषा',
      noVoice: 'इस डिवाइस पर इस भाषा की आवाज़ नहीं है। शब्द स्क्रीन पर दिखते रहेंगे।'
    },
    words: {
      animals: ['कुत्ता', 'बिल्ली', 'गाय', 'बत्तख', 'भेड़', 'मेंढक', 'शेर', 'मुर्गी', 'मधुमक्खी', 'बंदर', 'हाथी', 'खरगोश'],
      numbers: ['एक', 'दो', 'तीन', 'चार', 'पाँच', 'छह', 'सात', 'आठ', 'नौ', 'दस'],
      shapes: ['गोला', 'वर्ग', 'त्रिकोण', 'तारा', 'दिल', 'हीरा', 'आयत', 'अंडाकार'],
      colours: ['लाल', 'नारंगी', 'पीला', 'हरा', 'नीला', 'बैंगनी', 'गुलाबी', 'भूरा'],
      fruits: ['सेब', 'केला', 'आम', 'अंगूर', 'स्ट्रॉबेरी', 'तरबूज़', 'संतरा', 'चेरी', 'अनानास', 'नाशपाती'],
      vehicles: ['कार', 'बस', 'रेलगाड़ी', 'हवाई जहाज़', 'दमकल', 'एम्बुलेंस', 'नाव', 'साइकिल', 'ट्रैक्टर', 'हेलीकॉप्टर', 'रॉकेट']
    }
  },

  de: {
    name: 'Deutsch', tts: 'de-DE', dir: 'ltr',
    ui: {
      tagline: 'Tippe auf die Blasen. Jede Blase singt.',
      toddler: 'Die Kleinen', toddlerSub: 'Tiere, Zahlen, Formen und mehr',
      play: 'Spielen', playSub: 'Platzen lassen, Sterne sammeln, Farben lernen',
      learnTitle: 'Was lernen wir heute?',
      grow: 'Wachs mit mir', growBlurb: 'Beginnt mit Tieren und schaltet beim Spielen Formen, Zahlen, Farben und mehr frei',
      animals: 'Tiere', numbers: 'Zahlen', shapes: 'Formen', abc: 'ABC (Englisch)', colours: 'Farben',
      fruits: 'Obst', vehicles: 'Fahrzeuge', mix: 'Mix',
      level: 'Stufe {n} von {m}',
      findGame: 'Such-Spiel', on: 'an', off: 'aus',
      restart: 'Stufen neu starten', back: 'Zurück',
      hint: 'Beim Such-Spiel soll Ihr Kind ein Bild finden (ab 2½ Jahren). Während des Spiels 🏠 gedrückt halten, um hierher zurückzukehren.',
      resetConfirm: 'Alle Lernstufen von vorne beginnen?',
      hold: 'halten',
      find: 'Finde {w}!', found: 'Super! Du hast {w} gefunden!',
      wellDone: 'Gut gemacht!', fresh: 'Neu!', yay: 'Juhu!', superStar: 'Superstern!',
      kidsIntro: 'Lass die Blasen platzen und sammle Sterne!',
      language: 'Sprache',
      noVoice: 'Keine Stimme für diese Sprache auf diesem Gerät. Die Wörter erscheinen trotzdem.'
    },
    words: {
      animals: ['Hund|den Hund', 'Katze|die Katze', 'Kuh|die Kuh', 'Ente|die Ente', 'Schaf|das Schaf', 'Frosch|den Frosch',
        'Löwe|den Löwen', 'Huhn|das Huhn', 'Biene|die Biene', 'Affe|den Affen', 'Elefant|den Elefanten', 'Hase|den Hasen'],
      numbers: ['Eins|die Eins', 'Zwei|die Zwei', 'Drei|die Drei', 'Vier|die Vier', 'Fünf|die Fünf',
        'Sechs|die Sechs', 'Sieben|die Sieben', 'Acht|die Acht', 'Neun|die Neun', 'Zehn|die Zehn'],
      shapes: ['Kreis|den Kreis', 'Quadrat|das Quadrat', 'Dreieck|das Dreieck', 'Stern|den Stern', 'Herz|das Herz',
        'Raute|die Raute', 'Rechteck|das Rechteck', 'Oval|das Oval'],
      colours: ['Rot|die rote Blase', 'Orange|die orange Blase', 'Gelb|die gelbe Blase', 'Grün|die grüne Blase',
        'Blau|die blaue Blase', 'Lila|die lila Blase', 'Rosa|die rosa Blase', 'Braun|die braune Blase'],
      fruits: ['Apfel|den Apfel', 'Banane|die Banane', 'Mango|die Mango', 'Trauben|die Trauben', 'Erdbeere|die Erdbeere',
        'Wassermelone|die Wassermelone', 'Orange|die Orange', 'Kirschen|die Kirschen', 'Ananas|die Ananas', 'Birne|die Birne'],
      vehicles: ['Auto|das Auto', 'Bus|den Bus', 'Zug|den Zug', 'Flugzeug|das Flugzeug', 'Feuerwehrauto|das Feuerwehrauto',
        'Krankenwagen|den Krankenwagen', 'Boot|das Boot', 'Fahrrad|das Fahrrad', 'Traktor|den Traktor', 'Hubschrauber|den Hubschrauber', 'Rakete|die Rakete']
    }
  }
};
