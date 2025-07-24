// Описываем тип для объекта с переводами (например, для названия страны или столицы)
type LocalizedString = {
  en: string;
  ru: string;
  es: string;
};

// Описываем полную структуру объекта страны
export type Country = {
  id: string;
  country: LocalizedString;
  capital: LocalizedString;
  continent: string; // Можно усложнить до 'Europe' | 'Asia' | ...
  difficulty: 'easy' | 'medium' | 'hard'; // Только эти три значения
};

// Указываем, что COUNTRIES - это массив объектов типа Country
export const COUNTRIES: Country[] = [
  {
    "id": "1",
    "country": {
      "en": "Algeria",
      "ru": "Алжир",
      "es": "Argelia"
    },
    "capital": {
      "en": "Algiers",
      "ru": "Алжир",
      "es": "Argel"
    },
    "continent": "Africa",
    "difficulty": "medium"
  },
  {
    "id": "2",
    "country": {
      "en": "Angola",
      "ru": "Ангола",
      "es": "Angola"
    },
    "capital": {
      "en": "Luanda",
      "ru": "Луанда",
      "es": "Luanda"
    },
    "continent": "Africa",
    "difficulty": "hard"
  },
  {
    "id": "3",
    "country": {
      "en": "Benin",
      "ru": "Бенин",
      "es": "Benín"
    },
    "capital": {
      "en": "Porto-Novo",
      "ru": "Порто-Ново",
      "es": "Porto-Novo"
    },
    "continent": "Africa",
    "difficulty": "hard"
  },
  {
    "id": "4",
    "country": {
      "en": "Botswana",
      "ru": "Ботсвана",
      "es": "Botsuana"
    },
    "capital": {
      "en": "Gaborone",
      "ru": "Габороне",
      "es": "Gaborone"
    },
    "continent": "Africa",
    "difficulty": "hard"
  },
  {
    "id": "5",
    "country": {
      "en": "Burkina Faso",
      "ru": "Буркина-Фасо",
      "es": "Burkina Faso"
    },
    "capital": {
      "en": "Ouagadougou",
      "ru": "Уагадугу",
      "es": "Uagadugú"
    },
    "continent": "Africa",
    "difficulty": "hard"
  },
  {
    "id": "6",
    "country": {
      "en": "Burundi",
      "ru": "Бурунди",
      "es": "Burundi"
    },
    "capital": {
      "en": "Gitega",
      "ru": "Гитега",
      "es": "Gitega"
    },
    "continent": "Africa",
    "difficulty": "hard"
  },
  {
    "id": "7",
    "country": {
      "en": "Cabo Verde",
      "ru": "Кабо-Верде",
      "es": "Cabo Verde"
    },
    "capital": {
      "en": "Praia",
      "ru": "Прая",
      "es": "Praia"
    },
    "continent": "Africa",
    "difficulty": "hard"
  },
  {
    "id": "8",
    "country": {
      "en": "Cameroon",
      "ru": "Камерун",
      "es": "Camerún"
    },
    "capital": {
      "en": "Yaoundé",
      "ru": "Яунде",
      "es": "Yaundé"
    },
    "continent": "Africa",
    "difficulty": "medium"
  },
  {
    "id": "9",
    "country": {
      "en": "Central African Republic",
      "ru": "Центральноафриканская Республика",
      "es": "República Centroafricana"
    },
    "capital": {
      "en": "Bangui",
      "ru": "Банги",
      "es": "Bangui"
    },
    "continent": "Africa",
    "difficulty": "hard"
  },
  {
    "id": "10",
    "country": {
      "en": "Chad",
      "ru": "Чад",
      "es": "Chad"
    },
    "capital": {
      "en": "N'Djamena",
      "ru": "Нджамена",
      "es": "Yamena"
    },
    "continent": "Africa",
    "difficulty": "hard"
  },
  {
    "id": "11",
    "country": {
      "en": "Comoros",
      "ru": "Коморы",
      "es": "Comoras"
    },
    "capital": {
      "en": "Moroni",
      "ru": "Морони",
      "es": "Moroni"
    },
    "continent": "Africa",
    "difficulty": "hard"
  },
  {
    "id": "12",
    "country": {
      "en": "Democratic Republic of the Congo",
      "ru": "Демократическая Республика Конго",
      "es": "República Democrática del Congo"
    },
    "capital": {
      "en": "Kinshasa",
      "ru": "Киншаса",
      "es": "Kinsasa"
    },
    "continent": "Africa",
    "difficulty": "medium"
  },
  {
    "id": "13",
    "country": {
      "en": "Republic of the Congo",
      "ru": "Республика Конго",
      "es": "República del Congo"
    },
    "capital": {
      "en": "Brazzaville",
      "ru": "Браззавиль",
      "es": "Brazzaville"
    },
    "continent": "Africa",
    "difficulty": "medium"
  },
  {
    "id": "14",
    "country": {
      "en": "Djibouti",
      "ru": "Джибути",
      "es": "Yibuti"
    },
    "capital": {
      "en": "Djibouti",
      "ru": "Джибути",
      "es": "Yibuti"
    },
    "continent": "Africa",
    "difficulty": "hard"
  },
  {
    "id": "15",
    "country": {
      "en": "Egypt",
      "ru": "Египет",
      "es": "Egipto"
    },
    "capital": {
      "en": "Cairo",
      "ru": "Каир",
      "es": "El Cairo"
    },
    "continent": "Africa",
    "difficulty": "easy"
  },
  {
    "id": "16",
    "country": {
      "en": "Equatorial Guinea",
      "ru": "Экваториальная Гвинея",
      "es": "Guinea Ecuatorial"
    },
    "capital": {
      "en": "Malabo",
      "ru": "Малабо",
      "es": "Malabo"
    },
    "continent": "Africa",
    "difficulty": "hard"
  },
  {
    "id": "17",
    "country": {
      "en": "Eritrea",
      "ru": "Эритрея",
      "es": "Eritrea"
    },
    "capital": {
      "en": "Asmara",
      "ru": "Асмэра",
      "es": "Asmara"
    },
    "continent": "Africa",
    "difficulty": "hard"
  },
  {
    "id": "18",
    "country": {
      "en": "Eswatini",
      "ru": "Эсватини",
      "es": "Esuatini"
    },
    "capital": {
      "en": "Mbabane",
      "ru": "Мбабане",
      "es": "Mbabane"
    },
    "continent": "Africa",
    "difficulty": "hard"
  },
  {
    "id": "19",
    "country": {
      "en": "Ethiopia",
      "ru": "Эфиопия",
      "es": "Etiopía"
    },
    "capital": {
      "en": "Addis Ababa",
      "ru": "Аддис-Абеба",
      "es": "Adís Abeba"
    },
    "continent": "Africa",
    "difficulty": "medium"
  },
  {
    "id": "20",
    "country": {
      "en": "Gabon",
      "ru": "Габон",
      "es": "Gabón"
    },
    "capital": {
      "en": "Libreville",
      "ru": "Либревиль",
      "es": "Libreville"
    },
    "continent": "Africa",
    "difficulty": "hard"
  },
  {
    "id": "21",
    "country": {
      "en": "Gambia",
      "ru": "Гамбия",
      "es": "Gambia"
    },
    "capital": {
      "en": "Banjul",
      "ru": "Банжул",
      "es": "Banjul"
    },
    "continent": "Africa",
    "difficulty": "hard"
  },
  {
    "id": "22",
    "country": {
      "en": "Ghana",
      "ru": "Гана",
      "es": "Ghana"
    },
    "capital": {
      "en": "Accra",
      "ru": "Аккра",
      "es": "Acra"
    },
    "continent": "Africa",
    "difficulty": "medium"
  },
  {
    "id": "23",
    "country": {
      "en": "Guinea",
      "ru": "Гвинея",
      "es": "Guinea"
    },
    "capital": {
      "en": "Conakry",
      "ru": "Конакри",
      "es": "Conakri"
    },
    "continent": "Africa",
    "difficulty": "hard"
  },
  {
    "id": "24",
    "country": {
      "en": "Guinea-Bissau",
      "ru": "Гвинея-Бисау",
      "es": "Guinea-Bisáu"
    },
    "capital": {
      "en": "Bissau",
      "ru": "Бисау",
      "es": "Bisáu"
    },
    "continent": "Africa",
    "difficulty": "hard"
  },
  {
    "id": "25",
    "country": {
      "en": "Ivory Coast",
      "ru": "Кот-д'Ивуар",
      "es": "Costa de Marfil"
    },
    "capital": {
      "en": "Yamoussoukro",
      "ru": "Ямусукро",
      "es": "Yamusukro"
    },
    "continent": "Africa",
    "difficulty": "medium"
  },
  {
    "id": "26",
    "country": {
      "en": "Kenya",
      "ru": "Кения",
      "es": "Kenia"
    },
    "capital": {
      "en": "Nairobi",
      "ru": "Найроби",
      "es": "Nairobi"
    },
    "continent": "Africa",
    "difficulty": "easy"
  },
  {
    "id": "27",
    "country": {
      "en": "Lesotho",
      "ru": "Лесото",
      "es": "Lesoto"
    },
    "capital": {
      "en": "Maseru",
      "ru": "Масеру",
      "es": "Maseru"
    },
    "continent": "Africa",
    "difficulty": "hard"
  },
  {
    "id": "28",
    "country": {
      "en": "Liberia",
      "ru": "Либерия",
      "es": "Liberia"
    },
    "capital": {
      "en": "Monrovia",
      "ru": "Монровия",
      "es": "Monrovia"
    },
    "continent": "Africa",
    "difficulty": "hard"
  },
  {
    "id": "29",
    "country": {
      "en": "Libya",
      "ru": "Ливия",
      "es": "Libia"
    },
    "capital": {
      "en": "Tripoli",
      "ru": "Триполи",
      "es": "Trípoli"
    },
    "continent": "Africa",
    "difficulty": "medium"
  },
  {
    "id": "30",
    "country": {
      "en": "Madagascar",
      "ru": "Мадагаскар",
      "es": "Madagascar"
    },
    "capital": {
      "en": "Antananarivo",
      "ru": "Антананариву",
      "es": "Antananarivo"
    },
    "continent": "Africa",
    "difficulty": "medium"
  },
  {
    "id": "31",
    "country": {
      "en": "Malawi",
      "ru": "Малави",
      "es": "Malaui"
    },
    "capital": {
      "en": "Lilongwe",
      "ru": "Лилонгве",
      "es": "Lilongüe"
    },
    "continent": "Africa",
    "difficulty": "hard"
  },
  {
    "id": "32",
    "country": {
      "en": "Mali",
      "ru": "Мали",
      "es": "Malí"
    },
    "capital": {
      "en": "Bamako",
      "ru": "Бамако",
      "es": "Bamako"
    },
    "continent": "Africa",
    "difficulty": "hard"
  },
  {
    "id": "33",
    "country": {
      "en": "Mauritania",
      "ru": "Мавритания",
      "es": "Mauritania"
    },
    "capital": {
      "en": "Nouakchott",
      "ru": "Нуакшот",
      "es": "Nuakchot"
    },
    "continent": "Africa",
    "difficulty": "hard"
  },
  {
    "id": "34",
    "country": {
      "en": "Mauritius",
      "ru": "Маврикий",
      "es": "Mauricio"
    },
    "capital": {
      "en": "Port Louis",
      "ru": "Порт-Луи",
      "es": "Port Louis"
    },
    "continent": "Africa",
    "difficulty": "hard"
  },
  {
    "id": "35",
    "country": {
      "en": "Morocco",
      "ru": "Марокко",
      "es": "Marruecos"
    },
    "capital": {
      "en": "Rabat",
      "ru": "Рабат",
      "es": "Rabat"
    },
    "continent": "Africa",
    "difficulty": "easy"
  },
  {
    "id": "36",
    "country": {
      "en": "Mozambique",
      "ru": "Мозамбик",
      "es": "Mozambique"
    },
    "capital": {
      "en": "Maputo",
      "ru": "Мапуту",
      "es": "Maputo"
    },
    "continent": "Africa",
    "difficulty": "hard"
  },
  {
    "id": "37",
    "country": {
      "en": "Namibia",
      "ru": "Намибия",
      "es": "Namibia"
    },
    "capital": {
      "en": "Windhoek",
      "ru": "Виндхук",
      "es": "Windhoek"
    },
    "continent": "Africa",
    "difficulty": "hard"
  },
  {
    "id": "38",
    "country": {
      "en": "Niger",
      "ru": "Нигер",
      "es": "Níger"
    },
    "capital": {
      "en": "Niamey",
      "ru": "Ниамей",
      "es": "Niamey"
    },
    "continent": "Africa",
    "difficulty": "hard"
  },
  {
    "id": "39",
    "country": {
      "en": "Nigeria",
      "ru": "Нигерия",
      "es": "Nigeria"
    },
    "capital": {
      "en": "Abuja",
      "ru": "Абуджа",
      "es": "Abuya"
    },
    "continent": "Africa",
    "difficulty": "easy"
  },
  {
    "id": "40",
    "country": {
      "en": "Rwanda",
      "ru": "Руанда",
      "es": "Ruanda"
    },
    "capital": {
      "en": "Kigali",
      "ru": "Кигали",
      "es": "Kigali"
    },
    "continent": "Africa",
    "difficulty": "hard"
  },
  {
    "id": "41",
    "country": {
      "en": "Sao Tome and Principe",
      "ru": "Сан-Томе и Принсипи",
      "es": "Santo Tomé y Príncipe"
    },
    "capital": {
      "en": "São Tomé",
      "ru": "Сан-Томе",
      "es": "Santo Tomé"
    },
    "continent": "Africa",
    "difficulty": "hard"
  },
  {
    "id": "42",
    "country": {
      "en": "Senegal",
      "ru": "Сенегал",
      "es": "Senegal"
    },
    "capital": {
      "en": "Dakar",
      "ru": "Дакар",
      "es": "Dakar"
    },
    "continent": "Africa",
    "difficulty": "medium"
  },
  {
    "id": "43",
    "country": {
      "en": "Seychelles",
      "ru": "Сейшелы",
      "es": "Seychelles"
    },
    "capital": {
      "en": "Victoria",
      "ru": "Виктория",
      "es": "Victoria"
    },
    "continent": "Africa",
    "difficulty": "hard"
  },
  {
    "id": "44",
    "country": {
      "en": "Sierra Leone",
      "ru": "Сьерра-Леоне",
      "es": "Sierra Leona"
    },
    "capital": {
      "en": "Freetown",
      "ru": "Фритаун",
      "es": "Freetown"
    },
    "continent": "Africa",
    "difficulty": "hard"
  },
  {
    "id": "45",
    "country": {
      "en": "Somalia",
      "ru": "Сомали",
      "es": "Somalia"
    },
    "capital": {
      "en": "Mogadishu",
      "ru": "Могадишо",
      "es": "Mogadiscio"
    },
    "continent": "Africa",
    "difficulty": "medium"
  },
  {
    "id": "46",
    "country": {
      "en": "South Africa",
      "ru": "Южная Африка",
      "es": "Sudáfrica"
    },
    "capital": {
      "en": "Pretoria",
      "ru": "Претория",
      "es": "Pretoria"
    },
    "continent": "Africa",
    "difficulty": "easy"
  },
  {
    "id": "47",
    "country": {
      "en": "South Sudan",
      "ru": "Южный Судан",
      "es": "Sudán del Sur"
    },
    "capital": {
      "en": "Juba",
      "ru": "Джуба",
      "es": "Yuba"
    },
    "continent": "Africa",
    "difficulty": "hard"
  },
  {
    "id": "48",
    "country": {
      "en": "Sudan",
      "ru": "Судан",
      "es": "Sudán"
    },
    "capital": {
      "en": "Khartoum",
      "ru": "Хартум",
      "es": "Jartum"
    },
    "continent": "Africa",
    "difficulty": "medium"
  },
  {
    "id": "49",
    "country": {
      "en": "Tanzania",
      "ru": "Танзания",
      "es": "Tanzania"
    },
    "capital": {
      "en": "Dodoma",
      "ru": "Додома",
      "es": "Dodoma"
    },
    "continent": "Africa",
    "difficulty": "medium"
  },
  {
    "id": "50",
    "country": {
      "en": "Togo",
      "ru": "Того",
      "es": "Togo"
    },
    "capital": {
      "en": "Lomé",
      "ru": "Ломе",
      "es": "Lomé"
    },
    "continent": "Africa",
    "difficulty": "hard"
  },
  {
    "id": "51",
    "country": {
      "en": "Tunisia",
      "ru": "Тунис",
      "es": "Túnez"
    },
    "capital": {
      "en": "Tunis",
      "ru": "Тунис",
      "es": "Túnez"
    },
    "continent": "Africa",
    "difficulty": "medium"
  },
  {
    "id": "52",
    "country": {
      "en": "Uganda",
      "ru": "Уганда",
      "es": "Uganda"
    },
    "capital": {
      "en": "Kampala",
      "ru": "Кампала",
      "es": "Kampala"
    },
    "continent": "Africa",
    "difficulty": "medium"
  },
  {
    "id": "53",
    "country": {
      "en": "Zambia",
      "ru": "Замбия",
      "es": "Zambia"
    },
    "capital": {
      "en": "Lusaka",
      "ru": "Лусака",
      "es": "Lusaka"
    },
    "continent": "Africa",
    "difficulty": "hard"
  },
  {
    "id": "54",
    "country": {
      "en": "Zimbabwe",
      "ru": "Зимбабве",
      "es": "Zimbabue"
    },
    "capital": {
      "en": "Harare",
      "ru": "Хараре",
      "es": "Harare"
    },
    "continent": "Africa",
    "difficulty": "hard"
  },
  {
    "id": "55",
    "country": {
      "en": "Afghanistan",
      "ru": "Афганистан",
      "es": "Afganistán"
    },
    "capital": {
      "en": "Kabul",
      "ru": "Кабул",
      "es": "Kabul"
    },
    "continent": "Asia",
    "difficulty": "medium"
  },
  {
    "id": "56",
    "country": {
      "en": "Armenia",
      "ru": "Армения",
      "es": "Armenia"
    },
    "capital": {
      "en": "Yerevan",
      "ru": "Ереван",
      "es": "Ereván"
    },
    "continent": "Asia",
    "difficulty": "medium"
  },
  {
    "id": "57",
    "country": {
      "en": "Azerbaijan",
      "ru": "Азербайджан",
      "es": "Azerbaiyán"
    },
    "capital": {
      "en": "Baku",
      "ru": "Баку",
      "es": "Bakú"
    },
    "continent": "Asia",
    "difficulty": "medium"
  },
  {
    "id": "58",
    "country": {
      "en": "Bahrain",
      "ru": "Бахрейн",
      "es": "Baréin"
    },
    "capital": {
      "en": "Manama",
      "ru": "Манама",
      "es": "Manama"
    },
    "continent": "Asia",
    "difficulty": "hard"
  },
  {
    "id": "59",
    "country": {
      "en": "Bangladesh",
      "ru": "Бангладеш",
      "es": "Bangladés"
    },
    "capital": {
      "en": "Dhaka",
      "ru": "Дакка",
      "es": "Daca"
    },
    "continent": "Asia",
    "difficulty": "medium"
  },
  {
    "id": "60",
    "country": {
      "en": "Bhutan",
      "ru": "Бутан",
      "es": "Bután"
    },
    "capital": {
      "en": "Thimphu",
      "ru": "Тхимпху",
      "es": "Timbu"
    },
    "continent": "Asia",
    "difficulty": "hard"
  },
  {
    "id": "61",
    "country": {
      "en": "Brunei",
      "ru": "Бруней",
      "es": "Brunéi"
    },
    "capital": {
      "en": "Bandar Seri Begawan",
      "ru": "Бандар-Сери-Бегаван",
      "es": "Bandar Seri Begawan"
    },
    "continent": "Asia",
    "difficulty": "hard"
  },
  {
    "id": "62",
    "country": {
      "en": "Cambodia",
      "ru": "Камбоджа",
      "es": "Camboya"
    },
    "capital": {
      "en": "Phnom Penh",
      "ru": "Пномпень",
      "es": "Phnom Penh"
    },
    "continent": "Asia",
    "difficulty": "hard"
  },
  {
    "id": "63",
    "country": {
      "en": "China",
      "ru": "Китай",
      "es": "China"
    },
    "capital": {
      "en": "Beijing",
      "ru": "Пекин",
      "es": "Pekín"
    },
    "continent": "Asia",
    "difficulty": "easy"
  },
  {
    "id": "64",
    "country": {
      "en": "Cyprus",
      "ru": "Кипр",
      "es": "Chipre"
    },
    "capital": {
      "en": "Nicosia",
      "ru": "Никосия",
      "es": "Nicosia"
    },
    "continent": "Asia",
    "difficulty": "medium"
  },
  {
    "id": "65",
    "country": {
      "en": "Georgia",
      "ru": "Грузия",
      "es": "Georgia"
    },
    "capital": {
      "en": "Tbilisi",
      "ru": "Тбилиси",
      "es": "Tiflis"
    },
    "continent": "Asia",
    "difficulty": "medium"
  },
  {
    "id": "66",
    "country": {
      "en": "India",
      "ru": "Индия",
      "es": "India"
    },
    "capital": {
      "en": "New Delhi",
      "ru": "Нью-Дели",
      "es": "Nueva Delhi"
    },
    "continent": "Asia",
    "difficulty": "easy"
  },
  {
    "id": "67",
    "country": {
      "en": "Indonesia",
      "ru": "Индонезия",
      "es": "Indonesia"
    },
    "capital": {
      "en": "Jakarta",
      "ru": "Джакарта",
      "es": "Yakarta"
    },
    "continent": "Asia",
    "difficulty": "easy"
  },
  {
    "id": "68",
    "country": {
      "en": "Iran",
      "ru": "Иран",
      "es": "Irán"
    },
    "capital": {
      "en": "Tehran",
      "ru": "Тегеран",
      "es": "Teherán"
    },
    "continent": "Asia",
    "difficulty": "easy"
  },
  {
    "id": "69",
    "country": {
      "en": "Iraq",
      "ru": "Ирак",
      "es": "Irak"
    },
    "capital": {
      "en": "Baghdad",
      "ru": "Багдад",
      "es": "Bagdad"
    },
    "continent": "Asia",
    "difficulty": "medium"
  },
  {
    "id": "70",
    "country": {
      "en": "Israel",
      "ru": "Израиль",
      "es": "Israel"
    },
    "capital": {
      "en": "Jerusalem",
      "ru": "Иерусалим",
      "es": "Jerusalén"
    },
    "continent": "Asia",
    "difficulty": "easy"
  },
  {
    "id": "71",
    "country": {
      "en": "Japan",
      "ru": "Япония",
      "es": "Japón"
    },
    "capital": {
      "en": "Tokyo",
      "ru": "Токио",
      "es": "Tokio"
    },
    "continent": "Asia",
    "difficulty": "easy"
  },
  {
    "id": "72",
    "country": {
      "en": "Jordan",
      "ru": "Иордания",
      "es": "Jordania"
    },
    "capital": {
      "en": "Amman",
      "ru": "Амман",
      "es": "Amán"
    },
    "continent": "Asia",
    "difficulty": "medium"
  },
  {
    "id": "73",
    "country": {
      "en": "Kazakhstan",
      "ru": "Казахстан",
      "es": "Kazajistán"
    },
    "capital": {
      "en": "Astana",
      "ru": "Астана",
      "es": "Astaná"
    },
    "continent": "Asia",
    "difficulty": "medium"
  },
  {
    "id": "74",
    "country": {
      "en": "Kuwait",
      "ru": "Кувейт",
      "es": "Kuwait"
    },
    "capital": {
      "en": "Kuwait City",
      "ru": "Эль-Кувейт",
      "es": "Kuwait"
    },
    "continent": "Asia",
    "difficulty": "medium"
  },
  {
    "id": "75",
    "country": {
      "en": "Kyrgyzstan",
      "ru": "Киргизия",
      "es": "Kirguistán"
    },
    "capital": {
      "en": "Bishkek",
      "ru": "Бишкек",
      "es": "Biskek"
    },
    "continent": "Asia",
    "difficulty": "hard"
  },
  {
    "id": "76",
    "country": {
      "en": "Laos",
      "ru": "Лаос",
      "es": "Laos"
    },
    "capital": {
      "en": "Vientiane",
      "ru": "Вьентьян",
      "es": "Vientián"
    },
    "continent": "Asia",
    "difficulty": "hard"
  },
  {
    "id": "77",
    "country": {
      "en": "Lebanon",
      "ru": "Ливан",
      "es": "Líbano"
    },
    "capital": {
      "en": "Beirut",
      "ru": "Бейрут",
      "es": "Beirut"
    },
    "continent": "Asia",
    "difficulty": "medium"
  },
  {
    "id": "78",
    "country": {
      "en": "Malaysia",
      "ru": "Малайзия",
      "es": "Malasia"
    },
    "capital": {
      "en": "Kuala Lumpur",
      "ru": "Куала-Лумпур",
      "es": "Kuala Lumpur"
    },
    "continent": "Asia",
    "difficulty": "easy"
  },
  {
    "id": "79",
    "country": {
      "en": "Maldives",
      "ru": "Мальдивы",
      "es": "Maldivas"
    },
    "capital": {
      "en": "Malé",
      "ru": "Мале",
      "es": "Malé"
    },
    "continent": "Asia",
    "difficulty": "hard"
  },
  {
    "id": "80",
    "country": {
      "en": "Mongolia",
      "ru": "Монголия",
      "es": "Mongolia"
    },
    "capital": {
      "en": "Ulaanbaatar",
      "ru": "Улан-Батор",
      "es": "Ulán Bator"
    },
    "continent": "Asia",
    "difficulty": "hard"
  },
  {
    "id": "81",
    "country": {
      "en": "Myanmar",
      "ru": "Мьянма",
      "es": "Myanmar"
    },
    "capital": {
      "en": "Naypyidaw",
      "ru": "Нейпьидо",
      "es": "Naipyidó"
    },
    "continent": "Asia",
    "difficulty": "hard"
  },
  {
    "id": "82",
    "country": {
      "en": "Nepal",
      "ru": "Непал",
      "es": "Nepal"
    },
    "capital": {
      "en": "Kathmandu",
      "ru": "Катманду",
      "es": "Katmandú"
    },
    "continent": "Asia",
    "difficulty": "hard"
  },
  {
    "id": "83",
    "country": {
      "en": "North Korea",
      "ru": "Северная Корея",
      "es": "Corea del Norte"
    },
    "capital": {
      "en": "Pyongyang",
      "ru": "Пхеньян",
      "es": "Pionyang"
    },
    "continent": "Asia",
    "difficulty": "medium"
  },
  {
    "id": "84",
    "country": {
      "en": "Oman",
      "ru": "Оман",
      "es": "Omán"
    },
    "capital": {
      "en": "Muscat",
      "ru": "Маскат",
      "es": "Mascate"
    },
    "continent": "Asia",
    "difficulty": "hard"
  },
  {
    "id": "85",
    "country": {
      "en": "Pakistan",
      "ru": "Пакистан",
      "es": "Pakistán"
    },
    "capital": {
      "en": "Islamabad",
      "ru": "Исламабад",
      "es": "Islamabad"
    },
    "continent": "Asia",
    "difficulty": "easy"
  },
  {
    "id": "86",
    "country": {
      "en": "Palestine",
      "ru": "Палестина",
      "es": "Palestina"
    },
    "capital": {
      "en": "Ramallah",
      "ru": "Рамалла",
      "es": "Ramala"
    },
    "continent": "Asia",
    "difficulty": "medium"
  },
  {
    "id": "87",
    "country": {
      "en": "Philippines",
      "ru": "Филиппины",
      "es": "Filipinas"
    },
    "capital": {
      "en": "Manila",
      "ru": "Манила",
      "es": "Manila"
    },
    "continent": "Asia",
    "difficulty": "easy"
  },
  {
    "id": "88",
    "country": {
      "en": "Qatar",
      "ru": "Катар",
      "es": "Catar"
    },
    "capital": {
      "en": "Doha",
      "ru": "Доха",
      "es": "Doha"
    },
    "continent": "Asia",
    "difficulty": "medium"
  },
  {
    "id": "89",
    "country": {
      "en": "Saudi Arabia",
      "ru": "Саудовская Аравия",
      "es": "Arabia Saudita"
    },
    "capital": {
      "en": "Riyadh",
      "ru": "Эр-Рияд",
      "es": "Riad"
    },
    "continent": "Asia",
    "difficulty": "easy"
  },
  {
    "id": "90",
    "country": {
      "en": "Singapore",
      "ru": "Сингапур",
      "es": "Singapur"
    },
    "capital": {
      "en": "Singapore",
      "ru": "Сингапур",
      "es": "Singapur"
    },
    "continent": "Asia",
    "difficulty": "easy"
  },
  {
    "id": "91",
    "country": {
      "en": "South Korea",
      "ru": "Южная Корея",
      "es": "Corea del Sur"
    },
    "capital": {
      "en": "Seoul",
      "ru": "Сеул",
      "es": "Seúl"
    },
    "continent": "Asia",
    "difficulty": "easy"
  },
  {
    "id": "92",
    "country": {
      "en": "Sri Lanka",
      "ru": "Шри-Ланка",
      "es": "Sri Lanka"
    },
    "capital": {
      "en": "Sri Jayawardenepura Kotte",
      "ru": "Шри-Джаяварденепура-Котте",
      "es": "Sri Jayawardenapura Kotte"
    },
    "continent": "Asia",
    "difficulty": "hard"
  },
  {
    "id": "93",
    "country": {
      "en": "Syria",
      "ru": "Сирия",
      "es": "Siria"
    },
    "capital": {
      "en": "Damascus",
      "ru": "Дамаск",
      "es": "Damasco"
    },
    "continent": "Asia",
    "difficulty": "medium"
  },
  {
    "id": "94",
    "country": {
      "en": "Taiwan",
      "ru": "Тайвань",
      "es": "Taiwán"
    },
    "capital": {
      "en": "Taipei",
      "ru": "Тайбэй",
      "es": "Taipéi"
    },
    "continent": "Asia",
    "difficulty": "easy"
  },
  {
    "id": "95",
    "country": {
      "en": "Tajikistan",
      "ru": "Таджикистан",
      "es": "Tayikistán"
    },
    "capital": {
      "en": "Dushanbe",
      "ru": "Душанбе",
      "es": "Dusambé"
    },
    "continent": "Asia",
    "difficulty": "hard"
  },
  {
    "id": "96",
    "country": {
      "en": "Thailand",
      "ru": "Таиланд",
      "es": "Tailandia"
    },
    "capital": {
      "en": "Bangkok",
      "ru": "Бангкок",
      "es": "Bangkok"
    },
    "continent": "Asia",
    "difficulty": "easy"
  },
  {
    "id": "97",
    "country": {
      "en": "Timor-Leste",
      "ru": "Восточный Тимор",
      "es": "Timor Oriental"
    },
    "capital": {
      "en": "Dili",
      "ru": "Дили",
      "es": "Dili"
    },
    "continent": "Asia",
    "difficulty": "hard"
  },
  {
    "id": "98",
    "country": {
      "en": "Turkey",
      "ru": "Турция",
      "es": "Turquía"
    },
    "capital": {
      "en": "Ankara",
      "ru": "Анкара",
      "es": "Ankara"
    },
    "continent": "Asia",
    "difficulty": "easy"
  },
  {
    "id": "99",
    "country": {
      "en": "Turkmenistan",
      "ru": "Туркмения",
      "es": "Turkmenistán"
    },
    "capital": {
      "en": "Ashgabat",
      "ru": "Ашхабад",
      "es": "Asjabad"
    },
    "continent": "Asia",
    "difficulty": "hard"
  },
  {
    "id": "100",
    "country": {
      "en": "United Arab Emirates",
      "ru": "Объединенные Арабские Эмираты",
      "es": "Emiratos Árabes Unidos"
    },
    "capital": {
      "en": "Abu Dhabi",
      "ru": "Абу-Даби",
      "es": "Abu Dabi"
    },
    "continent": "Asia",
    "difficulty": "easy"
  },
  {
    "id": "101",
    "country": {
      "en": "Uzbekistan",
      "ru": "Узбекистан",
      "es": "Uzbekistán"
    },
    "capital": {
      "en": "Tashkent",
      "ru": "Ташкент",
      "es": "Taskent"
    },
    "continent": "Asia",
    "difficulty": "hard"
  },
  {
    "id": "102",
    "country": {
      "en": "Vietnam",
      "ru": "Вьетнам",
      "es": "Vietnam"
    },
    "capital": {
      "en": "Hanoi",
      "ru": "Ханой",
      "es": "Hanói"
    },
    "continent": "Asia",
    "difficulty": "easy"
  },
  {
    "id": "103",
    "country": {
      "en": "Yemen",
      "ru": "Йемен",
      "es": "Yemen"
    },
    "capital": {
      "en": "Sana'a",
      "ru": "Сана",
      "es": "Saná"
    },
    "continent": "Asia",
    "difficulty": "medium"
  },
  {
    "id": "104",
    "country": {
      "en": "Albania",
      "ru": "Албания",
      "es": "Albania"
    },
    "capital": {
      "en": "Tirana",
      "ru": "Тирана",
      "es": "Tirana"
    },
    "continent": "Europe",
    "difficulty": "hard"
  },
  {
    "id": "105",
    "country": {
      "en": "Andorra",
      "ru": "Андорра",
      "es": "Andorra"
    },
    "capital": {
      "en": "Andorra la Vella",
      "ru": "Андорра-ла-Велья",
      "es": "Andorra la Vieja"
    },
    "continent": "Europe",
    "difficulty": "hard"
  },
  {
    "id": "106",
    "country": {
      "en": "Austria",
      "ru": "Австрия",
      "es": "Austria"
    },
    "capital": {
      "en": "Vienna",
      "ru": "Вена",
      "es": "Viena"
    },
    "continent": "Europe",
    "difficulty": "easy"
  },
  {
    "id": "107",
    "country": {
      "en": "Belarus",
      "ru": "Белоруссия",
      "es": "Bielorrusia"
    },
    "capital": {
      "en": "Minsk",
      "ru": "Минск",
      "es": "Minsk"
    },
    "continent": "Europe",
    "difficulty": "medium"
  },
  {
    "id": "108",
    "country": {
      "en": "Belgium",
      "ru": "Бельгия",
      "es": "Bélgica"
    },
    "capital": {
      "en": "Brussels",
      "ru": "Брюссель",
      "es": "Bruselas"
    },
    "continent": "Europe",
    "difficulty": "easy"
  },
  {
    "id": "109",
    "country": {
      "en": "Bosnia and Herzegovina",
      "ru": "Босния и Герцеговина",
      "es": "Bosnia y Herzegovina"
    },
    "capital": {
      "en": "Sarajevo",
      "ru": "Сараево",
      "es": "Sarajevo"
    },
    "continent": "Europe",
    "difficulty": "medium"
  },
  {
    "id": "110",
    "country": {
      "en": "Bulgaria",
      "ru": "Болгария",
      "es": "Bulgaria"
    },
    "capital": {
      "en": "Sofia",
      "ru": "София",
      "es": "Sofía"
    },
    "continent": "Europe",
    "difficulty": "medium"
  },
  {
    "id": "111",
    "country": {
      "en": "Croatia",
      "ru": "Хорватия",
      "es": "Croacia"
    },
    "capital": {
      "en": "Zagreb",
      "ru": "Загреб",
      "es": "Zagreb"
    },
    "continent": "Europe",
    "difficulty": "medium"
  },
  {
    "id": "112",
    "country": {
      "en": "Czech Republic",
      "ru": "Чехия",
      "es": "República Checa"
    },
    "capital": {
      "en": "Prague",
      "ru": "Прага",
      "es": "Praga"
    },
    "continent": "Europe",
    "difficulty": "easy"
  },
  {
    "id": "113",
    "country": {
      "en": "Denmark",
      "ru": "Дания",
      "es": "Dinamarca"
    },
    "capital": {
      "en": "Copenhagen",
      "ru": "Копенгаген",
      "es": "Copenhague"
    },
    "continent": "Europe",
    "difficulty": "easy"
  },
  {
    "id": "114",
    "country": {
      "en": "Estonia",
      "ru": "Эстония",
      "es": "Estonia"
    },
    "capital": {
      "en": "Tallinn",
      "ru": "Таллин",
      "es": "Tallin"
    },
    "continent": "Europe",
    "difficulty": "medium"
  },
  {
    "id": "115",
    "country": {
      "en": "Finland",
      "ru": "Финляндия",
      "es": "Finlandia"
    },
    "capital": {
      "en": "Helsinki",
      "ru": "Хельсинки",
      "es": "Helsinki"
    },
    "continent": "Europe",
    "difficulty": "easy"
  },
  {
    "id": "116",
    "country": {
      "en": "France",
      "ru": "Франция",
      "es": "Francia"
    },
    "capital": {
      "en": "Paris",
      "ru": "Париж",
      "es": "París"
    },
    "continent": "Europe",
    "difficulty": "easy"
  },
  {
    "id": "117",
    "country": {
      "en": "Germany",
      "ru": "Германия",
      "es": "Alemania"
    },
    "capital": {
      "en": "Berlin",
      "ru": "Берлин",
      "es": "Berlín"
    },
    "continent": "Europe",
    "difficulty": "easy"
  },
  {
    "id": "118",
    "country": {
      "en": "Greece",
      "ru": "Греция",
      "es": "Grecia"
    },
    "capital": {
      "en": "Athens",
      "ru": "Афины",
      "es": "Atenas"
    },
    "continent": "Europe",
    "difficulty": "easy"
  },
  {
    "id": "119",
    "country": {
      "en": "Hungary",
      "ru": "Венгрия",
      "es": "Hungría"
    },
    "capital": {
      "en": "Budapest",
      "ru": "Будапешт",
      "es": "Budapest"
    },
    "continent": "Europe",
    "difficulty": "easy"
  },
  {
    "id": "120",
    "country": {
      "en": "Iceland",
      "ru": "Исландия",
      "es": "Islandia"
    },
    "capital": {
      "en": "Reykjavik",
      "ru": "Рейкьявик",
      "es": "Reikiavik"
    },
    "continent": "Europe",
    "difficulty": "medium"
  },
  {
    "id": "121",
    "country": {
      "en": "Ireland",
      "ru": "Ирландия",
      "es": "Irlanda"
    },
    "capital": {
      "en": "Dublin",
      "ru": "Дублин",
      "es": "Dublín"
    },
    "continent": "Europe",
    "difficulty": "easy"
  },
  {
    "id": "122",
    "country": {
      "en": "Italy",
      "ru": "Италия",
      "es": "Italia"
    },
    "capital": {
      "en": "Rome",
      "ru": "Рим",
      "es": "Roma"
    },
    "continent": "Europe",
    "difficulty": "easy"
  },
  {
    "id": "123",
    "country": {
      "en": "Kosovo",
      "ru": "Косово",
      "es": "Kosovo"
    },
    "capital": {
      "en": "Pristina",
      "ru": "Приштина",
      "es": "Pristina"
    },
    "continent": "Europe",
    "difficulty": "hard"
  },
  {
    "id": "124",
    "country": {
      "en": "Latvia",
      "ru": "Латвия",
      "es": "Letonia"
    },
    "capital": {
      "en": "Riga",
      "ru": "Рига",
      "es": "Riga"
    },
    "continent": "Europe",
    "difficulty": "medium"
  },
  {
    "id": "125",
    "country": {
      "en": "Liechtenstein",
      "ru": "Лихтенштейн",
      "es": "Liechtenstein"
    },
    "capital": {
      "en": "Vaduz",
      "ru": "Вадуц",
      "es": "Vaduz"
    },
    "continent": "Europe",
    "difficulty": "hard"
  },
  {
    "id": "126",
    "country": {
      "en": "Lithuania",
      "ru": "Литва",
      "es": "Lituania"
    },
    "capital": {
      "en": "Vilnius",
      "ru": "Вильнюс",
      "es": "Vilna"
    },
    "continent": "Europe",
    "difficulty": "medium"
  },
  {
    "id": "127",
    "country": {
      "en": "Luxembourg",
      "ru": "Люксембург",
      "es": "Luxemburgo"
    },
    "capital": {
      "en": "Luxembourg",
      "ru": "Люксембург",
      "es": "Luxemburgo"
    },
    "continent": "Europe",
    "difficulty": "medium"
  },
  {
    "id": "128",
    "country": {
      "en": "Malta",
      "ru": "Мальта",
      "es": "Malta"
    },
    "capital": {
      "en": "Valletta",
      "ru": "Валлетта",
      "es": "La Valeta"
    },
    "continent": "Europe",
    "difficulty": "hard"
  },
  {
    "id": "129",
    "country": {
      "en": "Moldova",
      "ru": "Молдавия",
      "es": "Moldavia"
    },
    "capital": {
      "en": "Chisinau",
      "ru": "Кишинёв",
      "es": "Chisináu"
    },
    "continent": "Europe",
    "difficulty": "hard"
  },
  {
    "id": "130",
    "country": {
      "en": "Monaco",
      "ru": "Монако",
      "es": "Mónaco"
    },
    "capital": {
      "en": "Monaco",
      "ru": "Монако",
      "es": "Mónaco"
    },
    "continent": "Europe",
    "difficulty": "hard"
  },
  {
    "id": "131",
    "country": {
      "en": "Montenegro",
      "ru": "Черногория",
      "es": "Montenegro"
    },
    "capital": {
      "en": "Podgorica",
      "ru": "Подгорица",
      "es": "Podgorica"
    },
    "continent": "Europe",
    "difficulty": "hard"
  },
  {
    "id": "132",
    "country": {
      "en": "Netherlands",
      "ru": "Нидерланды",
      "es": "Países Bajos"
    },
    "capital": {
      "en": "Amsterdam",
      "ru": "Амстердам",
      "es": "Ámsterdam"
    },
    "continent": "Europe",
    "difficulty": "easy"
  },
  {
    "id": "133",
    "country": {
      "en": "North Macedonia",
      "ru": "Северная Македония",
      "es": "Macedonia del Norte"
    },
    "capital": {
      "en": "Skopje",
      "ru": "Скопье",
      "es": "Skopie"
    },
    "continent": "Europe",
    "difficulty": "hard"
  },
  {
    "id": "134",
    "country": {
      "en": "Norway",
      "ru": "Норвегия",
      "es": "Noruega"
    },
    "capital": {
      "en": "Oslo",
      "ru": "Осло",
      "es": "Oslo"
    },
    "continent": "Europe",
    "difficulty": "easy"
  },
  {
    "id": "135",
    "country": {
      "en": "Poland",
      "ru": "Польша",
      "es": "Polonia"
    },
    "capital": {
      "en": "Warsaw",
      "ru": "Варшава",
      "es": "Varsovia"
    },
    "continent": "Europe",
    "difficulty": "easy"
  },
  {
    "id": "136",
    "country": {
      "en": "Portugal",
      "ru": "Португалия",
      "es": "Portugal"
    },
    "capital": {
      "en": "Lisbon",
      "ru": "Лиссабон",
      "es": "Lisboa"
    },
    "continent": "Europe",
    "difficulty": "easy"
  },
  {
    "id": "137",
    "country": {
      "en": "Romania",
      "ru": "Румыния",
      "es": "Rumania"
    },
    "capital": {
      "en": "Bucharest",
      "ru": "Бухарест",
      "es": "Bucarest"
    },
    "continent": "Europe",
    "difficulty": "medium"
  },
  {
    "id": "138",
    "country": {
      "en": "Russia",
      "ru": "Россия",
      "es": "Rusia"
    },
    "capital": {
      "en": "Moscow",
      "ru": "Москва",
      "es": "Moscú"
    },
    "continent": "Europe",
    "difficulty": "easy"
  },
  {
    "id": "139",
    "country": {
      "en": "San Marino",
      "ru": "Сан-Марино",
      "es": "San Marino"
    },
    "capital": {
      "en": "San Marino",
      "ru": "Сан-Марино",
      "es": "San Marino"
    },
    "continent": "Europe",
    "difficulty": "hard"
  },
  {
    "id": "140",
    "country": {
      "en": "Serbia",
      "ru": "Сербия",
      "es": "Serbia"
    },
    "capital": {
      "en": "Belgrade",
      "ru": "Белград",
      "es": "Belgrado"
    },
    "continent": "Europe",
    "difficulty": "medium"
  },
  {
    "id": "141",
    "country": {
      "en": "Slovakia",
      "ru": "Словакия",
      "es": "Eslovaquia"
    },
    "capital": {
      "en": "Bratislava",
      "ru": "Братислава",
      "es": "Bratislava"
    },
    "continent": "Europe",
    "difficulty": "medium"
  },
  {
    "id": "142",
    "country": {
      "en": "Slovenia",
      "ru": "Словения",
      "es": "Eslovenia"
    },
    "capital": {
      "en": "Ljubljana",
      "ru": "Любляна",
      "es": "Liubliana"
    },
    "continent": "Europe",
    "difficulty": "medium"
  },
  {
    "id": "143",
    "country": {
      "en": "Spain",
      "ru": "Испания",
      "es": "España"
    },
    "capital": {
      "en": "Madrid",
      "ru": "Мадрид",
      "es": "Madrid"
    },
    "continent": "Europe",
    "difficulty": "easy"
  },
  {
    "id": "144",
    "country": {
      "en": "Sweden",
      "ru": "Швеция",
      "es": "Suecia"
    },
    "capital": {
      "en": "Stockholm",
      "ru": "Стокгольм",
      "es": "Estocolmo"
    },
    "continent": "Europe",
    "difficulty": "easy"
  },
  {
    "id": "145",
    "country": {
      "en": "Switzerland",
      "ru": "Швейцария",
      "es": "Suiza"
    },
    "capital": {
      "en": "Bern",
      "ru": "Берн",
      "es": "Berna"
    },
    "continent": "Europe",
    "difficulty": "easy"
  },
  {
    "id": "146",
    "country": {
      "en": "Ukraine",
      "ru": "Украина",
      "es": "Ucrania"
    },
    "capital": {
      "en": "Kyiv",
      "ru": "Киев",
      "es": "Kiev"
    },
    "continent": "Europe",
    "difficulty": "easy"
  },
  {
    "id": "147",
    "country": {
      "en": "United Kingdom",
      "ru": "Великобритания",
      "es": "Reino Unido"
    },
    "capital": {
      "en": "London",
      "ru": "Лондон",
      "es": "Londres"
    },
    "continent": "Europe",
    "difficulty": "easy"
  },
  {
    "id": "148",
    "country": {
      "en": "Vatican City",
      "ru": "Ватикан",
      "es": "Ciudad del Vaticano"
    },
    "capital": {
      "en": "Vatican City",
      "ru": "Ватикан",
      "es": "Ciudad del Vaticano"
    },
    "continent": "Europe",
    "difficulty": "hard"
  },
  {
    "id": "149",
    "country": {
      "en": "Antigua and Barbuda",
      "ru": "Антигуа и Барбуда",
      "es": "Antigua y Barbuda"
    },
    "capital": {
      "en": "Saint John's",
      "ru": "Сент-Джонс",
      "es": "Saint John"
    },
    "continent": "North America",
    "difficulty": "hard"
  },
  {
    "id": "150",
    "country": {
      "en": "Bahamas",
      "ru": "Багамы",
      "es": "Bahamas"
    },
    "capital": {
      "en": "Nassau",
      "ru": "Нассау",
      "es": "Nasáu"
    },
    "continent": "North America",
    "difficulty": "hard"
  },
  {
    "id": "151",
    "country": {
      "en": "Barbados",
      "ru": "Барбадос",
      "es": "Barbados"
    },
    "capital": {
      "en": "Bridgetown",
      "ru": "Бриджтаун",
      "es": "Bridgetown"
    },
    "continent": "North America",
    "difficulty": "hard"
  },
  {
    "id": "152",
    "country": {
      "en": "Belize",
      "ru": "Белиз",
      "es": "Belice"
    },
    "capital": {
      "en": "Belmopan",
      "ru": "Бельмопан",
      "es": "Belmopán"
    },
    "continent": "North America",
    "difficulty": "hard"
  },
  {
    "id": "153",
    "country": {
      "en": "Canada",
      "ru": "Канада",
      "es": "Canadá"
    },
    "capital": {
      "en": "Ottawa",
      "ru": "Оттава",
      "es": "Ottawa"
    },
    "continent": "North America",
    "difficulty": "easy"
  },
  {
    "id": "154",
    "country": {
      "en": "Costa Rica",
      "ru": "Коста-Рика",
      "es": "Costa Rica"
    },
    "capital": {
      "en": "San José",
      "ru": "Сан-Хосе",
      "es": "San José"
    },
    "continent": "North America",
    "difficulty": "medium"
  },
  {
    "id": "155",
    "country": {
      "en": "Cuba",
      "ru": "Куба",
      "es": "Cuba"
    },
    "capital": {
      "en": "Havana",
      "ru": "Гавана",
      "es": "La Habana"
    },
    "continent": "North America",
    "difficulty": "easy"
  },
  {
    "id": "156",
    "country": {
      "en": "Dominica",
      "ru": "Доминика",
      "es": "Dominica"
    },
    "capital": {
      "en": "Roseau",
      "ru": "Розо",
      "es": "Roseau"
    },
    "continent": "North America",
    "difficulty": "hard"
  },
  {
    "id": "157",
    "country": {
      "en": "Dominican Republic",
      "ru": "Доминиканская Республика",
      "es": "República Dominicana"
    },
    "capital": {
      "en": "Santo Domingo",
      "ru": "Санто-Доминго",
      "es": "Santo Domingo"
    },
    "continent": "North America",
    "difficulty": "medium"
  },
  {
    "id": "158",
    "country": {
      "en": "El Salvador",
      "ru": "Сальвадор",
      "es": "El Salvador"
    },
    "capital": {
      "en": "San Salvador",
      "ru": "Сан-Сальвадор",
      "es": "San Salvador"
    },
    "continent": "North America",
    "difficulty": "medium"
  },
  {
    "id": "159",
    "country": {
      "en": "Grenada",
      "ru": "Гренада",
      "es": "Granada"
    },
    "capital": {
      "en": "St. George's",
      "ru": "Сент-Джорджес",
      "es": "Saint George"
    },
    "continent": "North America",
    "difficulty": "hard"
  },
  {
    "id": "160",
    "country": {
      "en": "Guatemala",
      "ru": "Гватемала",
      "es": "Guatemala"
    },
    "capital": {
      "en": "Guatemala City",
      "ru": "Гватемала",
      "es": "Ciudad de Guatemala"
    },
    "continent": "North America",
    "difficulty": "medium"
  },
  {
    "id": "161",
    "country": {
      "en": "Haiti",
      "ru": "Гаити",
      "es": "Haití"
    },
    "capital": {
      "en": "Port-au-Prince",
      "ru": "Порт-о-Пренс",
      "es": "Puerto Príncipe"
    },
    "continent": "North America",
    "difficulty": "medium"
  },
  {
    "id": "162",
    "country": {
      "en": "Honduras",
      "ru": "Гондурас",
      "es": "Honduras"
    },
    "capital": {
      "en": "Tegucigalpa",
      "ru": "Тегусигальпа",
      "es": "Tegucigalpa"
    },
    "continent": "North America",
    "difficulty": "medium"
  },
  {
    "id": "163",
    "country": {
      "en": "Jamaica",
      "ru": "Ямайка",
      "es": "Jamaica"
    },
    "capital": {
      "en": "Kingston",
      "ru": "Кингстон",
      "es": "Kingston"
    },
    "continent": "North America",
    "difficulty": "medium"
  },
  {
    "id": "164",
    "country": {
      "en": "Mexico",
      "ru": "Мексика",
      "es": "México"
    },
    "capital": {
      "en": "Mexico City",
      "ru": "Мехико",
      "es": "Ciudad de México"
    },
    "continent": "North America",
    "difficulty": "easy"
  },
  {
    "id": "165",
    "country": {
      "en": "Nicaragua",
      "ru": "Никарагуа",
      "es": "Nicaragua"
    },
    "capital": {
      "en": "Managua",
      "ru": "Манагуа",
      "es": "Managua"
    },
    "continent": "North America",
    "difficulty": "medium"
  },
  {
    "id": "166",
    "country": {
      "en": "Panama",
      "ru": "Панама",
      "es": "Panamá"
    },
    "capital": {
      "en": "Panama City",
      "ru": "Панама",
      "es": "Ciudad de Panamá"
    },
    "continent": "North America",
    "difficulty": "medium"
  },
  {
    "id": "167",
    "country": {
      "en": "Saint Kitts and Nevis",
      "ru": "Сент-Китс и Невис",
      "es": "San Cristóbal y Nieves"
    },
    "capital": {
      "en": "Basseterre",
      "ru": "Бастер",
      "es": "Basseterre"
    },
    "continent": "North America",
    "difficulty": "hard"
  },
  {
    "id": "168",
    "country": {
      "en": "Saint Lucia",
      "ru": "Сент-Люсия",
      "es": "Santa Lucía"
    },
    "capital": {
      "en": "Castries",
      "ru": "Кастри",
      "es": "Castries"
    },
    "continent": "North America",
    "difficulty": "hard"
  },
  {
    "id": "169",
    "country": {
      "en": "Saint Vincent and the Grenadines",
      "ru": "Сент-Винсент и Гренадины",
      "es": "San Vicente y las Granadinas"
    },
    "capital": {
      "en": "Kingstown",
      "ru": "Кингстаун",
      "es": "Kingstown"
    },
    "continent": "North America",
    "difficulty": "hard"
  },
  {
    "id": "170",
    "country": {
      "en": "Trinidad and Tobago",
      "ru": "Тринидад и Тобаго",
      "es": "Trinidad y Tobago"
    },
    "capital": {
      "en": "Port of Spain",
      "ru": "Порт-оф-Спейн",
      "es": "Puerto España"
    },
    "continent": "North America",
    "difficulty": "hard"
  },
  {
    "id": "171",
    "country": {
      "en": "United States",
      "ru": "США",
      "es": "Estados Unidos"
    },
    "capital": {
      "en": "Washington, D.C.",
      "ru": "Вашингтон",
      "es": "Washington D. C."
    },
    "continent": "North America",
    "difficulty": "easy"
  },
  {
    "id": "172",
    "country": {
      "en": "Australia",
      "ru": "Австралия",
      "es": "Australia"
    },
    "capital": {
      "en": "Canberra",
      "ru": "Канберра",
      "es": "Canberra"
    },
    "continent": "Oceania",
    "difficulty": "easy"
  },
  {
    "id": "173",
    "country": {
      "en": "Fiji",
      "ru": "Фиджи",
      "es": "Fiyi"
    },
    "capital": {
      "en": "Suva",
      "ru": "Сува",
      "es": "Suva"
    },
    "continent": "Oceania",
    "difficulty": "hard"
  },
  {
    "id": "174",
    "country": {
      "en": "Kiribati",
      "ru": "Кирибати",
      "es": "Kiribati"
    },
    "capital": {
      "en": "Tarawa",
      "ru": "Тарава",
      "es": "Tarawa"
    },
    "continent": "Oceania",
    "difficulty": "hard"
  },
  {
    "id": "175",
    "country": {
      "en": "Marshall Islands",
      "ru": "Маршалловы Острова",
      "es": "Islas Marshall"
    },
    "capital": {
      "en": "Majuro",
      "ru": "Маджуро",
      "es": "Majuro"
    },
    "continent": "Oceania",
    "difficulty": "hard"
  },
  {
    "id": "176",
    "country": {
      "en": "Micronesia",
      "ru": "Микронезия",
      "es": "Micronesia"
    },
    "capital": {
      "en": "Palikir",
      "ru": "Паликир",
      "es": "Palikir"
    },
    "continent": "Oceania",
    "difficulty": "hard"
  },
  {
    "id": "177",
    "country": {
      "en": "Nauru",
      "ru": "Науру",
      "es": "Nauru"
    },
    "capital": {
      "en": "Yaren",
      "ru": "Ярен",
      "es": "Yaren"
    },
    "continent": "Oceania",
    "difficulty": "hard"
  },
  {
    "id": "178",
    "country": {
      "en": "New Zealand",
      "ru": "Новая Зеландия",
      "es": "Nueva Zelanda"
    },
    "capital": {
      "en": "Wellington",
      "ru": "Веллингтон",
      "es": "Wellington"
    },
    "continent": "Oceania",
    "difficulty": "easy"
  },
  {
    "id": "179",
    "country": {
      "en": "Palau",
      "ru": "Палау",
      "es": "Palaos"
    },
    "capital": {
      "en": "Ngerulmud",
      "ru": "Нгерулмуд",
      "es": "Ngerulmud"
    },
    "continent": "Oceania",
    "difficulty": "hard"
  },
  {
    "id": "180",
    "country": {
      "en": "Papua New Guinea",
      "ru": "Папуа — Новая Гвинея",
      "es": "Papúa Nueva Guinea"
    },
    "capital": {
      "en": "Port Moresby",
      "ru": "Порт-Морсби",
      "es": "Puerto Moresby"
    },
    "continent": "Oceania",
    "difficulty": "hard"
  },
  {
    "id": "181",
    "country": {
      "en": "Samoa",
      "ru": "Самоа",
      "es": "Samoa"
    },
    "capital": {
      "en": "Apia",
      "ru": "Апиа",
      "es": "Apia"
    },
    "continent": "Oceania",
    "difficulty": "hard"
  },
  {
    "id": "182",
    "country": {
      "en": "Solomon Islands",
      "ru": "Соломоновы Острова",
      "es": "Islas Salomón"
    },
    "capital": {
      "en": "Honiara",
      "ru": "Хониара",
      "es": "Honiara"
    },
    "continent": "Oceania",
    "difficulty": "hard"
  },
  {
    "id": "183",
    "country": {
      "en": "Tonga",
      "ru": "Тонга",
      "es": "Tonga"
    },
    "capital": {
      "en": "Nuku'alofa",
      "ru": "Нукуалофа",
      "es": "Nukualofa"
    },
    "continent": "Oceania",
    "difficulty": "hard"
  },
  {
    "id": "184",
    "country": {
      "en": "Tuvalu",
      "ru": "Тувалу",
      "es": "Tuvalu"
    },
    "capital": {
      "en": "Funafuti",
      "ru": "Фунафути",
      "es": "Funafuti"
    },
    "continent": "Oceania",
    "difficulty": "hard"
  },
  {
    "id": "185",
    "country": {
      "en": "Vanuatu",
      "ru": "Вануату",
      "es": "Vanuatu"
    },
    "capital": {
      "en": "Port Vila",
      "ru": "Порт-Вила",
      "es": "Port Vila"
    },
    "continent": "Oceania",
    "difficulty": "hard"
  },
  {
    "id": "186",
    "country": {
      "en": "Argentina",
      "ru": "Аргентина",
      "es": "Argentina"
    },
    "capital": {
      "en": "Buenos Aires",
      "ru": "Буэнос-Айрес",
      "es": "Buenos Aires"
    },
    "continent": "South America",
    "difficulty": "easy"
  },
  {
    "id": "187",
    "country": {
      "en": "Bolivia",
      "ru": "Боливия",
      "es": "Bolivia"
    },
    "capital": {
      "en": "Sucre",
      "ru": "Сукре",
      "es": "Sucre"
    },
    "continent": "South America",
    "difficulty": "medium"
  },
  {
    "id": "188",
    "country": {
      "en": "Brazil",
      "ru": "Бразилия",
      "es": "Brasil"
    },
    "capital": {
      "en": "Brasília",
      "ru": "Бразилиа",
      "es": "Brasilia"
    },
    "continent": "South America",
    "difficulty": "easy"
  },
  {
    "id": "189",
    "country": {
      "en": "Chile",
      "ru": "Чили",
      "es": "Chile"
    },
    "capital": {
      "en": "Santiago",
      "ru": "Сантьяго",
      "es": "Santiago"
    },
    "continent": "South America",
    "difficulty": "easy"
  },
  {
    "id": "190",
    "country": {
      "en": "Colombia",
      "ru": "Колумбия",
      "es": "Colombia"
    },
    "capital": {
      "en": "Bogotá",
      "ru": "Богота",
      "es": "Bogotá"
    },
    "continent": "South America",
    "difficulty": "easy"
  },
  {
    "id": "191",
    "country": {
      "en": "Ecuador",
      "ru": "Эквадор",
      "es": "Ecuador"
    },
    "capital": {
      "en": "Quito",
      "ru": "Кито",
      "es": "Quito"
    },
    "continent": "South America",
    "difficulty": "medium"
  },
  {
    "id": "192",
    "country": {
      "en": "Guyana",
      "ru": "Гайана",
      "es": "Guyana"
    },
    "capital": {
      "en": "Georgetown",
      "ru": "Джорджтаун",
      "es": "Georgetown"
    },
    "continent": "South America",
    "difficulty": "hard"
  },
  {
    "id": "193",
    "country": {
      "en": "Paraguay",
      "ru": "Парагвай",
      "es": "Paraguay"
    },
    "capital": {
      "en": "Asunción",
      "ru": "Асунсьон",
      "es": "Asunción"
    },
    "continent": "South America",
    "difficulty": "medium"
  },
  {
    "id": "194",
    "country": {
      "en": "Peru",
      "ru": "Перу",
      "es": "Perú"
    },
    "capital": {
      "en": "Lima",
      "ru": "Лима",
      "es": "Lima"
    },
    "continent": "South America",
    "difficulty": "easy"
  },
  {
    "id": "195",
    "country": {
      "en": "Suriname",
      "ru": "Суринам",
      "es": "Surinam"
    },
    "capital": {
      "en": "Paramaribo",
      "ru": "Парамарибо",
      "es": "Paramaribo"
    },
    "continent": "South America",
    "difficulty": "hard"
  },
  {
    "id": "196",
    "country": {
      "en": "Uruguay",
      "ru": "Уругвай",
      "es": "Uruguay"
    },
    "capital": {
      "en": "Montevideo",
      "ru": "Монтевидео",
      "es": "Montevideo"
    },
    "continent": "South America",
    "difficulty": "medium"
  },
  {
    "id": "197",
    "country": {
      "en": "Venezuela",
      "ru": "Венесуэла",
      "es": "Venezuela"
    },
    "capital": {
      "en": "Caracas",
      "ru": "Каракас",
      "es": "Caracas"
    },
    "continent": "South America",
    "difficulty": "easy"
  }
];