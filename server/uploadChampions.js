const { Champion } = require("./services/dbService");
var champData = [
    {
        id: "Aatrox",
        name: "Aatrox",
        roles: [
            "Top"
        ]
    },
    {
        id: "Ahri",
        name: "Ahri",
        roles: [
            "Mid"
        ]
    },
    {
        id: "Akali",
        name: "Akali",
        roles: [
            "Top", "Mid"
        ]
    },
    {
        id: "Alistar",
        name: "Alistar",
        roles: [
            "Support"
        ]
    },
    {
        id: "Amumu",
        name: "Amumu",
        roles: [
            "Jungle"
        ]
    },
    {
        id: "Anivia",
        name: "Anivia",
        roles: [
            "Mid"
        ]
    },
    {
        id: "Annie",
        name: "Annie",
        roles: [
            "Mid"
        ]
    },
    {
        id: "Aphelios",
        name: "Aphelios",
        roles: [
            "Bot"
        ]
    },
    {
        id: "Ashe",
        name: "Ashe",
        roles: [
            "Bot"
        ]
    },
    {
        id: "AurelionSol",
        name: "Aurelion Sol",
        roles: [
            "Mid"
        ]
    },
    {
        id: "Azir",
        name: "Azir",
        roles: [
            "Mid"
        ]
    },
    {
        id: "Bard",
        name: "Bard",
        roles: [
            "Support"
        ]
    },
    {
        id: "Blitzcrank",
        name: "Blitzcrank",
        roles: [
            "Support"
        ]
    },
    {
        id: "Brand",
        name: "Brand",
        roles: [
            "Mid", "Support"
        ]
    },
    {
        id: "Braum",
        name: "Braum",
        roles: [
            "Support"
        ]
    },
    {
        id: "Caitlyn",
        name: "Caitlyn",
        roles: [
            "Bot"
        ]
    },
    {
        id: "Camille",
        name: "Camille",
        roles: [
            "Top", "Jungle"
        ]
    },
    {
        id: "Cassiopeia",
        name: "Cassiopeia",
        roles: [
            "Mid"
        ]
    },
    {
        id: "Chogath",
        name: "Cho'Gath",
        roles: [
            "Top", "Mid"
        ]
    },
    {
        id: "Corki",
        name: "Corki",
        roles: [
            "Mid"
        ]
    },
    {
        id: "Darius",
        name: "Darius",
        roles: [
            "Top"
        ]
    },
    {
        id: "Diana",
        name: "Diana",
        roles: [
            "Mid"
        ]
    },
    {
        id: "DrMundo",
        name: "Dr. Mundo",
        roles: [
            "Top", "Jungle"
        ]
    },
    {
        id: "Draven",
        name: "Draven",
        roles: [
            "Bot"
        ]
    },
    {
        id: "Ekko",
        name: "Ekko",
        roles: [
            "Jungle", "Mid"
        ]
    },
    {
        id: "Elise",
        name: "Elise",
        roles: [
            "Jungle"
        ]
    },
    {
        id: "Evelynn",
        name: "Evelynn",
        roles: [
            "Jungle"
        ]
    },
    {
        id: "Ezreal",
        name: "Ezreal",
        roles: [
            "Bot"
        ]
    },
    {
        id: "Fiddlesticks",
        name: "Fiddlesticks",
        roles: [
            "Jungle", "Support"
        ]
    },
    {
        id: "Fiora",
        name: "Fiora",
        roles: [
            "Top"
        ]
    },
    {
        id: "Fizz",
        name: "Fizz",
        roles: [
            "Mid"
        ]
    },
    {
        id: "Galio",
        name: "Galio",
        roles: [
            "Mid", "Support"
        ]
    },
    {
        id: "Gangplank",
        name: "Gangplank",
        roles: [
            "Top"
        ]
    },
    {
        id: "Garen",
        name: "Garen",
        roles: [
            "Top"
        ]
    },
    {
        id: "Gnar",
        name: "Gnar",
        roles: [
            "Top"
        ]
    },
    {
        id: "Gragas",
        name: "Gragas",
        roles: [
            "Jungle"
        ]
    },
    {
        id: "Graves",
        name: "Graves",
        roles: [
            "Jungle"
        ]
    },
    {
        id: "Hecarim",
        name: "Hecarim",
        roles: [
            "Jungle"
        ]
    },
    {
        id: "Heimerdinger",
        name: "Heimerdinger",
        roles: [
            "Top", "Mid"
        ]
    },
    {
        id: "Illaoi",
        name: "Illaoi",
        roles: [
            "Top"
        ]
    },
    {
        id: "Irelia",
        name: "Irelia",
        roles: [
            "Top", "Mid"
        ]
    },
    {
        id: "Ivern",
        name: "Ivern",
        roles: [
            "Jungle"
        ]
    },
    {
        id: "Janna",
        name: "Janna",
        roles: [
            "Support"
        ]
    },
    {
        id: "JarvanIV",
        name: "Jarvan",
        roles: [
            "Jungle"
        ]
    },
    {
        id: "Jax",
        name: "Jax",
        roles: [
            "Top", "Jungle"
        ]
    },
    {
        id: "Jayce",
        name: "Jayce",
        roles: [
            "Top", "Mid"
        ]
    },
    {
        id: "Jhin",
        name: "Jhin",
        roles: [
            "Bot"
        ]
    },
    {
        id: "Jinx",
        name: "Jinx",
        roles: [
            "Bot"
        ]
    },
    {
        id: "Kaisa",
        name: "Kai'Sa",
        roles: [
            "Bot"
        ]
    },
    {
        id: "Kalista",
        name: "Kalista",
        roles: [
            "Bot"
        ]
    },
    {
        id: "Karma",
        name: "Karma",
        roles: [
            "Support"
        ]
    },
    {
        id: "Karthus",
        name: "Karthus",
        roles: [
            "Jungle", "Mid"
        ]
    },
    {
        id: "Kassadin",
        name: "Kassadin",
        roles: [
            "Mid"
        ]
    },
    {
        id: "Katarina",
        name: "Katarina",
        roles: [
            "Mid"
        ]
    },
    {
        id: "Kayle",
        name: "Kayle",
        roles: [
            "Top", "Mid"
        ]
    },
    {
        id: "Kayn",
        name: "Kayn",
        roles: [
            "Jungle"
        ]
    },
    {
        id: "Kennen",
        name: "Kennen",
        roles: [
            "Top"
        ]
    },
    {
        id: "Khazix",
        name: "Kha'Zix",
        roles: [
            "Jungle"
        ]
    },
    {
        id: "Kindred",
        name: "Kindred",
        roles: [
            "Jungle"
        ]
    },
    {
        id: "Kled",
        name: "Kled",
        roles: [
            "Top"
        ]
    },
    {
        id: "KogMaw",
        name: "Kog'Maw",
        roles: [
            "Bot"
        ]
    },
    {
        id: "Leblanc",
        name: "LeBlanc",
        roles: [
            "Mid"
        ]
    },
    {
        id: "LeeSin",
        name: "Lee Sin",
        roles: [
            "Jungle"
        ]
    },
    {
        id: "Leona",
        name: "Leona",
        roles: [
            "Support"
        ]
    },
    {
        id: "Lissandra",
        name: "Lissandra",
        roles: [
            "Mid"
        ]
    },
    {
        id: "Lucian",
        name: "Lucian",
        roles: [
            "Bot"
        ]
    },
    {
        id: "Lulu",
        name: "Lulu",
        roles: [
            "Support"
        ]
    },
    {
        id: "Lux",
        name: "Lux",
        roles: [
            "Mid", "Support"
        ]
    },
    {
        id: "Malphite",
        name: "Malphite",
        roles: [
            "Top"
        ]
    },
    {
        id: "Malzahar",
        name: "Malzahar",
        roles: [
            "Mid"
        ]
    },
    {
        id: "Maokai",
        name: "Maokai",
        roles: [
            "Top"
        ]
    },
    {
        id: "MasterYi",
        name: "Master Yi",
        roles: [
            "Jungle"
        ]
    },
    {
        id: "MissFortune",
        name: "Miss Fortune",
        roles: [
            "Bot"
        ]
    },
    {
        id: "Mordekaiser",
        name: "Mordekaiser",
        roles: [
            "Top"
        ]
    },
    {
        id: "Morgana",
        name: "Morgana",
        roles: [
            "Support"
        ]
    },
    {
        id: "Nami",
        name: "Nami",
        roles: [
            "Support"
        ]
    },
    {
        id: "Nasus",
        name: "Nasus",
        roles: [
            "Top"
        ]
    },
    {
        id: "Nautilus",
        name: "Nautilus",
        roles: [
            "Support"
        ]
    },
    {
        id: "Neeko",
        name: "Neeko",
        roles: [
            "Mid"
        ]
    },
    {
        id: "Nidalee",
        name: "Nidalee",
        roles: [
            "Jungle"
        ]
    },
    {
        id: "Nocturne",
        name: "Nocturne",
        roles: [
            "Jungle"
        ]
    },
    {
        id: "Nunu",
        name: "Nunu",
        roles: [
            "Jungle"
        ]
    },
    {
        id: "Olaf",
        name: "Olaf",
        roles: [
            "Top", "Jungle"
        ]
    },
    {
        id: "Orianna",
        name: "Orianna",
        roles: [
            "Mid"
        ]
    },
    {
        id: "Ornn",
        name: "Ornn",
        roles: [
            "Top"
        ]
    },
    {
        id: "Pantheon",
        name: "Pantheon",
        roles: [
            "Top", "Jungle", "Mid"
        ]
    },
    {
        id: "Poppy",
        name: "Poppy",
        roles: [
            "Top"
        ]
    },
    {
        id: "Pyke",
        name: "Pyke",
        roles: [
            "Support"
        ]
    },
    {
        id: "Qiyana",
        name: "Qiyana",
        roles: [
            "Top", "Jungle", "Mid"
        ]
    },
    {
        id: "Quinn",
        name: "Quinn",
        roles: [
            "Top"
        ]
    },
    {
        id: "Rakan",
        name: "Rakan",
        roles: [
            "Support"
        ]
    },
    {
        id: "Rammus",
        name: "Rammus",
        roles: [
            "Jungle"
        ]
    },
    {
        id: "RekSai",
        name: "Rek'Sai",
        roles: [
            "Jungle"
        ]
    },
    {
        id: "Renekton",
        name: "Renekton",
        roles: [
            "Top"
        ]
    },
    {
        id: "Rengar",
        name: "Rengar",
        roles: [
            "Top", "Jungle"
        ]
    },
    {
        id: "Riven",
        name: "Riven",
        roles: [
            "Top"
        ]
    },
    {
        id: "Rumble",
        name: "Rumble",
        roles: [
            "Top", "Mid"
        ]
    },
    {
        id: "Ryze",
        name: "Ryze",
        roles: [
            "Top", "Mid"
        ]
    },
    {
        id: "Sejuani",
        name: "Sejuani",
        roles: [
            "Jungle"
        ]
    },
    {
        id: "Senna",
        name: "Senna",
        roles: [
            "Bot", "Support"
        ]
    },
    {
        id: "Shaco",
        name: "Shaco",
        roles: [
            "Jungle"
        ]
    },
    {
        id: "Shen",
        name: "Shen",
        roles: [
            "Top", "Support"
        ]
    },
    {
        id: "Shyvana",
        name: "Shyvana",
        roles: [
            "Jungle"
        ]
    },
    {
        id: "Singed",
        name: "Singed",
        roles: [
            "Top"
        ]
    },
    {
        id: "Sion",
        name: "Sion",
        roles: [
            "Top"
        ]
    },
    {
        id: "Sivir",
        name: "Sivir",
        roles: [
            "Bot"
        ]
    },
    {
        id: "Skarner",
        name: "Skarner",
        roles: [
            "Jungle"
        ]
    },
    {
        id: "Sona",
        name: "Sona",
        roles: [
            "Support"
        ]
    },
    {
        id: "Soraka",
        name: "Soraka",
        roles: [
            "Support"
        ]
    },
    {
        id: "Swain",
        name: "Swain",
        roles: [
            "Top", "Mid"
        ]
    },
    {
        id: "Sylas",
        name: "Sylas",
        roles: [
            "Top", "Jungle", "Mid"
        ]
    },
    {
        id: "Syndra",
        name: "Syndra",
        roles: [
            "Mid", "Bot"
        ]
    },
    {
        id: "TahmKench",
        name: "Tahm Kench",
        roles: [
            "Support"
        ]
    },
    {
        id: "Taliyah",
        name: "Taliyah",
        roles: [
            "Jungle"
        ]
    },
    {
        id: "Talon",
        name: "Talon",
        roles: [
            "Mid"
        ]
    },
    {
        id: "Taric",
        name: "Taric",
        roles: [
            "Support"
        ]
    },
    {
        id: "Teemo",
        name: "Teemo",
        roles: [
            "Top"
        ]
    },
    {
        id: "Thresh",
        name: "Thresh",
        roles: [
            "Support"
        ]
    },
    {
        id: "Tristana",
        name: "Tristana",
        roles: [
            "Mid", "Bot"
        ]
    },
    {
        id: "Trundle",
        name: "Trundle",
        roles: [
            "Top", "Jungle"
        ]
    },
    {
        id: "Tryndamere",
        name: "Tryndamere",
        roles: [
            "Top"
        ]
    },
    {
        id: "TwistedFate",
        name: "Twisted Fate",
        roles: [
            "Mid"
        ]
    },
    {
        id: "Twitch",
        name: "Twitch",
        roles: [
            "Jungle", "Bot"
        ]
    },
    {
        id: "Udyr",
        name: "Udyr",
        roles: [
            "Jungle"
        ]
    },
    {
        id: "Urgot",
        name: "Urgot",
        roles: [
            "Top"
        ]
    },
    {
        id: "Varus",
        name: "Varus",
        roles: [
            "Bot"
        ]
    },
    {
        id: "Vayne",
        name: "Vayne",
        roles: [
            "Bot"
        ]
    },
    {
        id: "Veigar",
        name: "Veigar",
        roles: [
            "Mid", "Bot"
        ]
    },
    {
        id: "Velkoz",
        name: "Vel'Koz",
        roles: [
            "Mid", "Support"
        ]
    },
    {
        id: "Vi",
        name: "Vi",
        roles: [
            "Jungle"
        ]
    },
    {
        id: "Viktor",
        name: "Viktor",
        roles: [
            "Mid"
        ]
    },
    {
        id: "Vladimir",
        name: "Vladimir",
        roles: [
            "Top", "Mid"
        ]
    },
    {
        id: "Volibear",
        name: "Volibear",
        roles: [
            "Jungle"
        ]
    },
    {
        id: "Warwick",
        name: "Warwick",
        roles: [
            "Jungle"
        ]
    },
    {
        id: "MonkeyKing",
        name: "Wukong",
        roles: [
            "Top"
        ]
    },
    {
        id: "Xayah",
        name: "Xayah",
        roles: [
            "Bot"
        ]
    },
    {
        id: "Xerath",
        name: "Xerath",
        roles: [
            "Mid"
        ]
    },
    {
        id: "XinZhao",
        name: "Xin Zhao",
        roles: [
            "Jungle"
        ]
    },
    {
        id: "Yasuo",
        name: "Yasuo",
        roles: [
            "Top", "Mid", "Bot"
        ]
    },
    {
        id: "Yorick",
        name: "Yorick",
        roles: [
            "Top"
        ]
    },
    {
        id: "Yuumi",
        name: "Yuumi",
        roles: [
            "Support"
        ]
    },
    {
        id: "Zac",
        name: "Zac",
        roles: [
            "Jungle"
        ]
    },
    {
        id: "Zed",
        name: "Zed",
        roles: [
            "Mid"
        ]
    },
    {
        id: "Ziggs",
        name: "Ziggs",
        roles: [
            "Mid"
        ]
    },
    {
        id: "Zilean",
        name: "Zilean",
        roles: [
            "Support"
        ]
    },
    {
        id: "Zoe",
        name: "Zoe",
        roles: [
            "Mid"
        ]
    },
    {
        id: "Zyra",
        name: "Zyra",
        roles: [
            "Support"
        ]
    },
];

champData.forEach((champion, index) => {
    console.log(champion.name)
    let data = {}
    data.name = champion.name;
    data.shortname = champion.id.toLocaleLowerCase();
    let champ = new Champion(data)
    try {
        champ.save()
    }
    catch (err) {
        console.log(err.message)
    }
})