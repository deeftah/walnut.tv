var subreddits = [
  "100yearsago",
  "1200isplenty",
  "13or30",
  "2healthbars",
  "2meirl4meirl",
  "30rock",
  "3amjokes",
  "3Dprinting",
  "4chan",
  "4PanelCringe",
  "AbandonedPorn",
  "ableton",
  "aboringdystopia",
  "abrathatfits",
  "absolutelynotme_irl",
  "absolutelynotmeirl",
  "absoluteunits",
  "accidentalcomedy",
  "accidentalracism",
  "AccidentalRenaissance",
  "AccidentalWesAnderson",
  "accounting",
  "actlikeyoubelong",
  "actuallesbians",
  "Addons4Kodi",
  "ADHD",
  "adporn",
  "adrenalineporn",
  "AdventureTime",
  "advice",
  "AdviceAnimals",
  "againsthatesubreddits",
  "ainbow",
  "airsoft",
  "alexandradaddario",
  "alienblue",
  "aliensamongus",
  "alisonbrie",
  "Allsvenskan",
  "alternativeart",
  "AMA",
  "AmateurRoomPorn",
  "amazonecho",
  "amd",
  "AmericanHorrorStory",
  "amibeingdetained",
  "amiugly",
  "analog",
  "anarchism",
  "anarcho_capitalism",
  "Android",
  "AndroidApps",
  "AndroidDev",
  "AndroidGaming",
  "AndroidThemes",
  "animalporn",
  "AnimalPorn",
  "AnimalReddits",
  "AnimalsBeingBros",
  "animalsbeingbros",
  "AnimalsBeingDerps",
  "AnimalsBeingJerks",
  "animalsbeingjerks",
  "animalsthatlovemagic",
  "animaltextgifs",
  "animation",
  "anime_irl",
  "anime",
  "animegifs",
  "animemes",
  "animesuggest",
  "animewallpaper",
  "announcements",
  "ANormalDayInRussia",
  "answers",
  "anthropology",
  "Anticonsumption",
  "antijokes",
  "antimlm",
  "Anxiety",
  "apocalympics2016",
  "apolloapp",
  "apphookup",
  "apple",
  "applewatch",
  "applyingtocollege",
  "aquariums",
  "ar15",
  "ArcherFX",
  "architecture",
  "ArchitecturePorn",
  "archlinux",
  "arduino",
  "argentina",
  "army",
  "arresteddevelopment",
  "arrow",
  "Art",
  "art",
  "artefactporn",
  "artfundamentals",
  "artificial",
  "artisanvideos",
  "artporn",
  "ArtPorn",
  "AsianBeauty",
  "asiancuties",
  "asiangirlsbeingcute",
  "asianpeoplegifs",
  "askculinary",
  "askengineers",
  "askgaybros",
  "askhistorians",
  "AskHistorians",
  "askmen",
  "AskOuija",
  "askphilosophy",
  "AskReddit",
  "askredditafterdark",
  "AskScience",
  "asksciencefiction",
  "AskScienceFiction",
  "AskSocialScience",
  "asktransgender",
  "askwomen",
  "asmr",
  "asoiaf",
  "assholedesign",
  "astronomy",
  "astrophotography",
  "ATBGE",
  "AteTheOnion",
  "atetheonion",
  "atheism",
  "atlanta",
  "audioengineering",
  "audiophile",
  "austin",
  "australia",
  "austria",
  "AutoDetailing",
  "autos",
  "aviation",
  "awesome",
  "awesomecarmods",
  "awfuleverything",
  "awfuleyebrows",
  "aww",
  "Awwducational",
  "awwnime",
  "awww",
  "awwwtf",
  "babybigcatgifs",
  "babybumps",
  "babycorgis",
  "babyelephantgifs",
  "backpacking",
  "baconit",
  "baconreader",
  "Bad_Cop_No_Donut",
  "badfaketexts",
  "badhistory",
  "badtattoos",
  "badwomensanatomy",
  "baking",
  "bannedfromclubpenguin",
  "barkour",
  "baseball",
  "BasicIncome",
  "bass",
  "batman",
  "battlefield3",
  "battlestations",
  "bayarea",
  "bbq",
  "beamazed",
  "beards",
  "beatles",
  "beer",
  "beermoney",
  "beerporn",
  "beetlejuicing",
  "BeforeNAfterAdoption",
  "behindthegifs",
  "beholdthemasterrace",
  "belgium",
  "berserk",
  "bertstrips",
  "bestof",
  "bestoflegaladvice",
  "bestofnetflix",
  "BestOfReports",
  "BestOfStreamingVideo",
  "bestofworldstar",
  "beta",
  "BetterCallSaul",
  "bettereveryloop",
  "bicycling",
  "bidenbro",
  "bigboye",
  "bigbrother",
  "bigcatgifs",
  "bigdickproblems",
  "BikiniBottomTwitter",
  "biology",
  "bipolar",
  "birbs",
  "birdsbeingdicks",
  "birdswitharms",
  "bisexual",
  "bitchimabus",
  "Bitcoin",
  "bitcoinmarkets",
  "bizarrebuildings",
  "bjj",
  "blackcats",
  "blackmagicfuckery",
  "blackmirror",
  "blackpeoplegifs",
  "blackpeopletwitter",
  "blacksmith",
  "blender",
  "blep",
  "blog",
  "blop",
  "bluemidterm2018",
  "blunderyears",
  "bmw",
  "boardgames",
  "BobsBurgers",
  "bodybuilding",
  "bodyweightfitness",
  "bois",
  "BoJackHorseman",
  "BokuNoHeroAcademia",
  "bollywoodrealism",
  "boneappletea",
  "bonehurtingjuice",
  "bonsai",
  "Books",
  "booksuggestions",
  "boop",
  "boottoobig",
  "bossfight",
  "boston",
  "bostonceltics",
  "bourbon",
  "boxing",
  "brasil",
  "breadit",
  "breadstapledtotrees",
  "BreakingBad",
  "breathinginformation",
  "britishproblems",
  "brockhampton",
  "brogress",
  "brokengifs",
  "brooklynninenine",
  "brushybrushy",
  "btc",
  "Buddhism",
  "budgetfood",
  "buildapc",
  "buildapcforme",
  "buildapcsales",
  "bulletjournal",
  "Bundesliga",
  "business",
  "BuyItForLife",
  "c25k",
  "cabinporn",
  "cableporn",
  "calgary",
  "california",
  "calligraphy",
  "calvinandhobbes",
  "camping",
  "campingandhiking",
  "campinggear",
  "canada",
  "canadapolitics",
  "cannabis",
  "cardano",
  "carporn",
  "cars",
  "cartalk",
  "castiron",
  "castles",
  "casualchildabuse",
  "casualconversation",
  "casualiama",
  "casualuk",
  "CatastrophicFailure",
  "catgifs",
  "Catholicism",
  "catloaf",
  "catpictures",
  "catpranks",
  "cats",
  "catsareassholes",
  "catsareliquid",
  "catsisuottatfo",
  "catslaps",
  "catsstandingup",
  "CatSubs",
  "cattaps",
  "ccw",
  "celebhub",
  "celebs",
  "CFB",
  "CGPGrey",
  "changemyview",
  "Cheap_Meals",
  "cheap_meals",
  "chelseafc",
  "chemicalreactiongifs",
  "chemistry",
  "chess",
  "chicago",
  "childfree",
  "ChildrenFallingOver",
  "china",
  "ChoosingBeggars",
  "Christianity",
  "chromecast",
  "churning",
  "Cinemagraphs",
  "cinematography",
  "Circlejerk",
  "CityPorn",
  "Classic4chan",
  "classicalmusic",
  "climbing",
  "coaxedintoasnafu",
  "cocktails",
  "coding",
  "coffee",
  "cogsci",
  "collapse",
  "college",
  "collegebasketball",
  "colorado",
  "coloringcorruptions",
  "colorization",
  "ColorizedHistory",
  "combatfootage",
  "combinedgifs",
  "ComedyCemetery",
  "comedyheaven",
  "comedyhomicide",
  "comedynecromancy",
  "comicbooks",
  "comics",
  "communism",
  "community",
  "completeanarchy",
  "compsci",
  "confession",
  "confessions",
  "confusing_perspective",
  "conservative",
  "conspiracy",
  "conspiratard",
  "contagiouslaughter",
  "continuityporn",
  "cooking",
  "cookingforbeginners",
  "CoolGuides",
  "copypasta",
  "cordcutters",
  "corgi",
  "corporatefacepalm",
  "cosplay",
  "cosplaygirls",
  "coupons",
  "cowchop",
  "cozyplaces",
  "cpp",
  "crackwatch",
  "crafts",
  "CrappyDesign",
  "crappydesign",
  "crappyoffbrands",
  "crazyideas",
  "creepy",
  "creepyasterisks",
  "creepypasta",
  "creepyPMs",
  "creepysigns",
  "crewscrew",
  "cricket",
  "cringe",
  "cringepics",
  "criticalrole",
  "crochet",
  "crossfit",
  "crossstitch",
  "CryptoCurrency",
  "cryptomarkets",
  "cscareerquestions",
  "csgobetting",
  "cubers",
  "curledfeetsies",
  "curlyhair",
  "cyberpunk",
  "cynicalbrit",
  "daddit",
  "dadjokes",
  "dadreflexes",
  "dailyprogrammer",
  "dallas",
  "damnthatsinteresting",
  "dank_meme",
  "dankchristianmemes",
  "dankmemes",
  "darkjokes",
  "dashcamgifs",
  "DataHoarder",
  "dataisbeautiful",
  "dating_advice",
  "dbz",
  "DBZDokkanBattle",
  "DC_Cinematic",
  "DCComics",
  "DDLC",
  "de_Iama",
  "de",
  "deadbedrooms",
  "deadpool",
  "dealsreddit",
  "deathgrips",
  "DecidingToBeBetter",
  "deepfriedmemes",
  "DeepIntoYouTube",
  "defenders",
  "defranco",
  "delightfullychubby",
  "delusionalartists",
  "delusionalcraigslist",
  "democrats",
  "Demotivational",
  "denmark",
  "denver",
  "depression",
  "DepthHub",
  "design",
  "DesignPorn",
  "designporn",
  "desirepath",
  "destructionporn",
  "digitalnomad",
  "dirtyr4r",
  "discgolf",
  "discordapp",
  "Disney",
  "disneyland",
  "DisneyVacation",
  "DiWHY",
  "DIY",
  "DMAcademy",
  "dmt",
  "DnD",
  "DnDBehindTheScreen",
  "DnDGreentext",
  "dndnext",
  "doctorwho",
  "documentaries",
  "DoesAnybodyElse",
  "dogberg",
  "dogecoin",
  "dogpictures",
  "dogs",
  "dogswithjobs",
  "dogtraining",
  "donaldglover",
  "dontdeadopeninside",
  "dontfundme",
  "dontputyourdickinthat",
  "dontyouknowwhoiam",
  "dragonballfighterz",
  "drama",
  "Drawing",
  "drawing",
  "drugs",
  "drums",
  "drunk",
  "drunkorakid",
  "dubstep",
  "dumpsterdiving",
  "DunderMifflin",
  "dungeonsanddragons",
  "eagles",
  "earthporn",
  "EarthPorn",
  "EatCheapAndHealthy",
  "eatsandwiches",
  "Economics",
  "economy",
  "EDC",
  "EDM",
  "edmproduction",
  "education",
  "educationalgifs",
  "efreebies",
  "eldertrees",
  "electronic_cigarette",
  "electronicmusic",
  "electronics",
  "elonmusk",
  "EmilyRatajkowski",
  "eminem",
  "EmmaWatson",
  "emojipasta",
  "empiredidnothingwrong",
  "emuwarflashbacks",
  "energy",
  "engineering",
  "EngineeringPorn",
  "EngineeringStudents",
  "engrish",
  "Enhancement",
  "enoughtrumpspam",
  "entertainment",
  "entrepreneur",
  "Entrepreneur",
  "environment",
  "equelmemes",
  "esist",
  "ethereum",
  "ethtrade",
  "ethtrader",
  "europe",
  "evenwithcontext",
  "everymanshouldknow",
  "everythingscience",
  "evilbuildings",
  "excel",
  "exmormon",
  "ExpandDong",
  "ExpectationVSReality",
  "explainlikeIAmA",
  "ExplainlikeIAmA",
  "explainlikeimcalvin",
  "ExplainLikeImCalvin",
  "explainlikeimfive",
  "ExposurePorn",
  "eyebeach",
  "eyebleach",
  "facebookwins",
  "facepalm",
  "facingtheirparenting",
  "fakealbumcovers",
  "fakehistoryporn",
  "familyguy",
  "FancyFollicles",
  "fantasy",
  "fantasybaseball",
  "fantasyfootball",
  "fantasypl",
  "fantheories",
  "fashion",
  "FashionReps",
  "fasting",
  "FastWorkers",
  "fatlogic",
  "fatpeoplestories",
  "fellowkids",
  "femalefashionadvice",
  "feminism",
  "fffffffuuuuuuuuuuuu",
  "FifthWorldPics",
  "fifthworldpics",
  "fifthworldproblems",
  "fiftyfifty",
  "Filmmakers",
  "FilthyFrank",
  "finance",
  "financialindependence",
  "findareddit",
  "firearms",
  "firefly",
  "firefox",
  "firstworldanarchists",
  "firstworldproblems",
  "fishing",
  "fitandnatural",
  "fitmeals",
  "Fitness",
  "FL_Studio",
  "FlashTV",
  "flexibility",
  "flipping",
  "Floof",
  "floridaman",
  "flying",
  "food",
  "Foodforthought",
  "foodhacks",
  "FoodPorn",
  "forbiddensnacks",
  "foreveralone",
  "forhire",
  "formula1",
  "forwardsfromgrandma",
  "foundpaper",
  "fountainpens",
  "foxes",
  "france",
  "frankocean",
  "freebies",
  "freeEbooks",
  "freefolk",
  "freegamefindings",
  "freegamesonsteam",
  "french",
  "frisson",
  "Frugal_Jerk",
  "frugal_jerk",
  "frugal",
  "frugalmalefashion",
  "fuckthealtright",
  "fuckthesepeople",
  "fullmoviesonvimeo",
  "fullmoviesonyoutube",
  "FullScorpion",
  "functionalprint",
  "funhaus",
  "funkopop",
  "funny",
  "funnyandsad",
  "futbol",
  "futurama",
  "futurebeats",
  "futureporn",
  "futurology",
  "gadgets",
  "gainit",
  "gallifrey",
  "gamedev",
  "gamegrumps",
  "gamemusic",
  "GameOfThrones",
  "gameofthrones",
  "gamernews",
  "gardening",
  "garlicbreadmemes",
  "garlicoin",
  "gatekeeping",
  "gay_irl",
  "gay",
  "gaybros",
  "gaymers",
  "geek",
  "gentlemanboners",
  "GentlemanBonersGifs",
  "geology",
  "geopolitics",
  "german",
  "germany",
  "getdisciplined",
  "GetMotivated",
  "GetStudying",
  "ghettoglamourshots",
  "ghibli",
  "gif",
  "gifextra",
  "gifrecipes",
  "gifs",
  "gifsound",
  "gifsthatendtoosoon",
  "gifsthatkeepongiving",
  "girlsmirin",
  "glitch_art",
  "Glitch_in_the_Matrix",
  "glitchinthematrix",
  "goatparkour",
  "gocommitdie",
  "goddesses",
  "goldenretrievers",
  "golf",
  "goodfaketexts",
  "goodyearwelt",
  "google",
  "googlehome",
  "googlepixel",
  "googleplaydeals",
  "gopro",
  "gorillaz",
  "graffiti",
  "graphic_design",
  "gravityfalls",
  "greenbaypackers",
  "greendawn",
  "greentext",
  "grilledcheese",
  "guitar",
  "guitarlessons",
  "gundeals",
  "gunners",
  "gunpla",
  "gunporn",
  "guns",
  "h3h3productions",
  "hacking",
  "hadtohurt",
  "hailcorporate",
  "halloween",
  "handwriting",
  "happy",
  "happycowgifs",
  "happycrowds",
  "happycryingdads",
  "hardbodies",
  "hardcoreaww",
  "hardware",
  "hardwareswap",
  "harrypotter",
  "headphones",
  "health",
  "HealthyFood",
  "heavymind",
  "heavyseas",
  "hfy",
  "highqualitygifs",
  "hiking",
  "HillaryForPrison",
  "HIMYM",
  "hiphopheads",
  "hiphopimages",
  "historicalwhatif",
  "history",
  "historymemes",
  "historynetwork",
  "HistoryPorn",
  "hitmanimals",
  "hittablefaces",
  "hmmm",
  "hmmmgifs",
  "hobbydrama",
  "hockey",
  "holdmybeaker",
  "holdmybeer",
  "holdmycatnip",
  "holdmycosmo",
  "holdmyfeedingtube",
  "holdmyfries",
  "holdmyjuicebox",
  "holdmyredbull",
  "homeautomation",
  "homebrewing",
  "homeimprovement",
  "homelab",
  "homestead",
  "hometheater",
  "hongkong",
  "horror",
  "houseofcards",
  "houseporn",
  "houston",
  "howto",
  "howtohack",
  "howtonotgiveafuck",
  "howyoudoin",
  "humanporn",
  "humansbeingbros",
  "humblebrag",
  "humor",
  "hunterxhunter",
  "HybridAnimals",
  "IAmA",
  "iamatotalpieceofshit",
  "iamverybadass",
  "iamverysmart",
  "IASIP",
  "idiotsfightingthings",
  "idiotsincars",
  "idontworkherelady",
  "Idubbbz",
  "ifyoulikeblank",
  "ihadastroke",
  "ihavesex",
  "iiiiiiitttttttttttt",
  "ilikthebred",
  "illusionporn",
  "illustration",
  "im14andthisisdeep",
  "images",
  "imaginarycharacters",
  "ImaginaryLandscapes",
  "imaginarylandscapes",
  "ImaginaryLeviathans",
  "imaginarymaps",
  "ImaginaryMindscapes",
  "ImaginaryMonsters",
  "imaginarytechnology",
  "imgoingtohellforthis",
  "impeach_trump",
  "inceltears",
  "incest",
  "inclusiveor",
  "incorgnito",
  "india",
  "indianpeoplefacebook",
  "indieheads",
  "infographics",
  "InfrastructurePorn",
  "insanepeoplefacebook",
  "instant_regret",
  "instantbarbarians",
  "instantkarma",
  "instantpot",
  "instantregret",
  "interestingasfuck",
  "InteriorDesign",
  "intermittentfasting",
  "InternetIsBeautiful",
  "internetisbeautiful",
  "intothesoulstone",
  "intresseklubben",
  "introvert",
  "investing",
  "Iota",
  "ipad",
  "iphone",
  "ireland",
  "irleastereggs",
  "irlsmurfing",
  "italy",
  "itookapicture",
  "itsaunixsystem",
  "iwantout",
  "IWantToLearn",
  "jailbreak",
  "japan",
  "japanesegameshows",
  "japanpics",
  "japantravel",
  "java",
  "javascript",
  "jazz",
  "jeep",
  "jellybeantoes",
  "jenniferlawrence",
  "jessicanigri",
  "jesuschristreddit",
  "Jobs",
  "joerogan",
  "Jokes",
  "jontron",
  "JordanPeterson",
  "jrpg",
  "Justfuckmyshitup",
  "JusticePorn",
  "justiceserved",
  "justneckbeardthings",
  "justnofamily",
  "justnomil",
  "justrolledintotheshop",
  "kanye",
  "kappa",
  "karmaconspiracy",
  "karmacourt",
  "kateupton",
  "keanubeingawesome",
  "keep_track",
  "keming",
  "KendrickLamar",
  "kenm",
  "KenM",
  "keto",
  "ketogains",
  "ketorecipes",
  "kidsarefuckingstupid",
  "killthecameraman",
  "KingkillerChronicle",
  "kingofthehill",
  "KitchenConfidential",
  "knifeclub",
  "knitting",
  "knives",
  "kodi",
  "korea",
  "KotakuInAction",
  "kpop",
  "kurzgesagt",
  "LadyBoners",
  "lakers",
  "languagelearning",
  "lastimages",
  "latestagecapitalism",
  "latinopeopletwitter",
  "law",
  "lawschool",
  "leafs",
  "leangains",
  "learnart",
  "learnjapanese",
  "learnprogramming",
  "learnpython",
  "LearnUselessTalents",
  "leaves",
  "lectures",
  "legaladvice",
  "lego",
  "LetsNotMeet",
  "lewronggeneration",
  "lgbt",
  "liberal",
  "Libertarian",
  "lifehacks",
  "lifeisstrange",
  "lifeofnorman",
  "LifeProTips",
  "likeus",
  "linguistics",
  "linux_gaming",
  "linux",
  "linux4noobs",
  "linuxmasterrace",
  "listentothis",
  "litecoin",
  "literature",
  "LiverpoolFC",
  "livestreamfail",
  "loadingicon",
  "LocationReddits",
  "lockpicking",
  "logodesign",
  "lolcats",
  "loltyler1",
  "london",
  "longboarding",
  "longdistance",
  "losangeles",
  "loseit",
  "lostgeneration",
  "lostredditors",
  "lotr",
  "lotrmemes",
  "lovecraft",
  "LSD",
  "LucidDreaming",
  "mac",
  "machinelearning",
  "machineporn",
  "macroporn",
  "mademesmile",
  "madlads",
  "magicTCG",
  "makeupaddiction",
  "MakingaMurderer",
  "malefashion",
  "MaleFashionAdvice",
  "malefashionadvice",
  "malehairadvice",
  "malelifestyle",
  "malelivingspace",
  "maliciouscompliance",
  "mallninjashit",
  "MandelaEffect",
  "manga",
  "MapPorn",
  "MarchAgainstTrump",
  "marijuana",
  "marijuanaenthusiasts",
  "marketing",
  "marvel",
  "marvelstudios",
  "mashups",
  "masterhacker",
  "masterreturns",
  "math",
  "maybemaybemaybe",
  "me_irl",
  "mealprepsunday",
  "mealtimevideos",
  "meanjokes",
  "mechanical_gifs",
  "mechanicalkeyboards",
  "medicalschool",
  "Medicine",
  "medicine",
  "meditation",
  "megalinks",
  "megalophobia",
  "meirl",
  "melbourne",
  "meme",
  "memeeconomy",
  "Memes_Of_The_Dank",
  "memes",
  "MensRights",
  "mentalhealth",
  "meow_irl",
  "Metal",
  "Metalcore",
  "mexico",
  "mgtow",
  "michaelbaygifs",
  "michigan",
  "microgrowery",
  "microporn",
  "microsoft",
  "mildlyinfuriating",
  "mildlyinteresting",
  "mildlypenis",
  "MildlyVandalised",
  "military",
  "militarygfys",
  "MilitaryPorn",
  "militaryporn",
  "millionairemakers",
  "mindcrack",
  "mineralporn",
  "minimalism",
  "minipainting",
  "miniworlds",
  "minnesota",
  "minnesotavikings",
  "misleadingthumbnails",
  "mlb",
  "mlem",
  "MLS",
  "MMA",
  "MMAStreams",
  "modelmakers",
  "modernmagic",
  "modnews",
  "monero",
  "montageparodies",
  "morbidreality",
  "mostbeautiful",
  "motorcycles",
  "moviedetails",
  "movieposterporn",
  "movies",
  "moviesinthemaking",
  "mrrobot",
  "MTB",
  "multicopter",
  "murderedbywords",
  "MURICA",
  "MuseumOfReddit",
  "music",
  "musictheory",
  "mycology",
  "mylittlepony",
  "mypeopleneedme",
  "namflashbacks",
  "naruto",
  "nasa",
  "Nascar",
  "Natureisbrutal",
  "natureisfuckinglit",
  "natureismetal",
  "naturewasmetal",
  "nba",
  "nbastreams",
  "neckbeardnests",
  "neckbeardrpg",
  "neo",
  "Netflix",
  "NetflixBestOf",
  "netsec",
  "networking",
  "neutralpolitics",
  "neverbrokeabone",
  "nevertellmetheodds",
  "newjersey",
  "newreddits",
  "news",
  "newzealand",
  "nextfuckinglevel",
  "nfl",
  "nflstreams",
  "nhl",
  "nhlstreams",
  "nicegirls",
  "niceguys",
  "nintendo",
  "NobodyAsked",
  "nocontext",
  "nocontextpics",
  "nofap",
  "noisygifs",
  "nononono",
  "nonononoyes",
  "Nootropics",
  "norge",
  "nosleep",
  "nostalgia",
  "NoStupidQuestions",
  "nothingeverhappens",
  "nothowdrugswork",
  "notinteresting",
  "notkenm",
  "notmyjob",
  "nottheonion",
  "nottimanderic",
  "nutrition",
  "nvidia",
  "nyc",
  "obscuremedia",
  "occult",
  "OddlySatisfying",
  "oddlyterrifying",
  "ofcoursethatsathing",
  "offbeat",
  "Offensive_Wallpapers",
  "offensivememes",
  "offlinetv",
  "offmychest",
  "okbuddyretard",
  "OKCupid",
  "OkCupid",
  "oldpeoplefacebook",
  "oldphotosinreallife",
  "OldSchoolCool",
  "olympics",
  "onejob",
  "onepiece",
  "oneplus",
  "onepunchman",
  "onetruegod",
  "onions",
  "ooer",
  "oopsdidntmeanto",
  "opendirectories",
  "opensource",
  "orangeisthenewblack",
  "OSHA",
  "otmemes",
  "outdoors",
  "OutOfTheLoop",
  "outrun",
  "outside",
  "Overwatch_Memes",
  "painting",
  "paleo",
  "PandR",
  "Paranormal",
  "Pareidolia",
  "Parenting",
  "parenting",
  "partyparrot",
  "patriots",
  "pcmasterrace",
  "penmanshipporn",
  "peoplebeingjerks",
  "peoplefuckingdying",
  "peopleofwalmart",
  "perfectfit",
  "perfectloops",
  "perfecttiming",
  "PersonalFinance",
  "petthedamndog",
  "pettyrevenge",
  "pewdiepiesubmissions",
  "philadelphia",
  "Philippines",
  "philosophy",
  "phonesarebad",
  "photocritique",
  "photography",
  "photoshop",
  "PhotoshopBattles",
  "php",
  "physics",
  "physicsgifs",
  "piano",
  "pic",
  "pics",
  "piercing",
  "pinkfloyd",
  "piracy",
  "Pitbulls",
  "pixelart",
  "pizza",
  "plantedtank",
  "plex",
  "podcasts",
  "poetry",
  "pokemon",
  "Pokemon",
  "poker",
  "polandball",
  "political_revolution",
  "politicaldiscussion",
  "politicalhumor",
  "Politics",
  "polska",
  "polyamory",
  "popheads",
  "portland",
  "povertyfinance",
  "powerlifting",
  "powerwashingporn",
  "praisethecameraman",
  "prematurecelebration",
  "preppers",
  "prequelmemes",
  "prettygirls",
  "prettygirlsuglyfaces",
  "privacy",
  "productivity",
  "productporn",
  "ProgrammerHumor",
  "programmerhumor",
  "programming",
  "programminghorror",
  "progresspics",
  "projectcar",
  "PropagandaPosters",
  "properanimalnames",
  "prorevenge",
  "ProtectAndServe",
  "psychology",
  "Psychonaut",
  "publicfreakout",
  "punchablefaces",
  "punny",
  "puns",
  "puppies",
  "puppysmiles",
  "pussypassdenied",
  "pyongyang",
  "pyrocynical",
  "python",
  "quityourbullshit",
  "quotes",
  "QuotesPorn",
  "r4r",
  "rabbits",
  "radiohead",
  "rage",
  "raimememes",
  "raining",
  "rainmeter",
  "raisedbynarcissists",
  "ramen",
  "Random_Acts_Of_Pizza",
  "randomactsofgaming",
  "rarepuppers",
  "raspberry_pi",
  "rateme",
  "reactiongifs",
  "realestate",
  "reallifedoodles",
  "reallifeshinies",
  "recipes",
  "reddevils",
  "redditdayof",
  "redditgetsdrawn",
  "redditinreddit",
  "RedditLaqueristas",
  "redditmobile",
  "redditsync",
  "redditwritesseinfeld",
  "RedLetterMedia",
  "redneckengineering",
  "relationship_advice",
  "relationships",
  "relayforreddit",
  "repsneakers",
  "restofthefuckingowl",
  "retiredgif",
  "retrofuturism",
  "RetroPie",
  "reverseengineering",
  "rickandmorty",
  "ripple",
  "riverdale",
  "roadcam",
  "roastme",
  "romania",
  "RoomPorn",
  "roosterteeth",
  "rpg",
  "RTLSDR",
  "rugbyunion",
  "running",
  "rupaulsdragrace",
  "rwby",
  "sadcringe",
  "sailing",
  "samplesize",
  "SandersForPresident",
  "sandiego",
  "sanfrancisco",
  "savedyouaclick",
  "sbubby",
  "scenesfromahat",
  "Science",
  "sciencefiction",
  "scifi",
  "scotch",
  "scotland",
  "scottishpeopletwitter",
  "scp",
  "screenwriting",
  "scriptedasiangifs",
  "scrubs",
  "seattle",
  "SeattleWA",
  "SecretSanta",
  "seduction",
  "see",
  "seinfeld",
  "seinfeldgifs",
  "self",
  "selfimprovement",
  "SequelMemes",
  "serialkillers",
  "serialpodcast",
  "seriouseats",
  "sewing",
  "sex",
  "sfwpornnetwork",
  "Sherlock",
  "shield",
  "ShingekiNoKyojin",
  "ShitAmericansSay",
  "shitcosmosays",
  "shitpost",
  "ShitRedditSays",
  "Shitty_Car_Mods",
  "shittyadvice",
  "shittyanimalfacts",
  "shittyaskscience",
  "ShittyAskScience",
  "shittyfoodporn",
  "shittykickstarters",
  "ShittyLifeProTips",
  "shittymoviedetails",
  "shittyreactiongifs",
  "shittyrobots",
  "shockwaveporn",
  "shorthairedhotties",
  "shortscarystories",
  "shouldibuythisgame",
  "showerbeer",
  "ShowerThoughts",
  "shrooms",
  "shutupandtakemymoney",
  "siliconvalleyhbo",
  "simpleliving",
  "simulated",
  "singapore",
  "skateboarding",
  "skeptic",
  "sketchdaily",
  "skiing",
  "SkincareAddiction",
  "skinnywithabs",
  "skyporn",
  "slavs_squatting",
  "sloths",
  "slowcooking",
  "slygifs",
  "smallbusiness",
  "smoking",
  "smoobypost",
  "snaplenses",
  "sneakers",
  "sneks",
  "snowboarding",
  "soccer",
  "soccerstreams",
  "socialanxiety",
  "socialengineering",
  "socialism",
  "socialskills",
  "softwaregore",
  "solotravel",
  "somethingimade",
  "SouthAfrica",
  "southpark",
  "SovietWomble",
  "Space",
  "SpacePorn",
  "spacex",
  "specart",
  "specializedtools",
  "spiderbro",
  "spiderman",
  "splitdepthgifs",
  "spongebob",
  "spop",
  "sports",
  "sportsarefun",
  "spotify",
  "squaredcircle",
  "standupcomedy",
  "standupshots",
  "starbucks",
  "starterpacks",
  "startledcats",
  "startrek",
  "StarTrek",
  "startups",
  "starwars",
  "stellar",
  "stevenuniverse",
  "stockmarket",
  "stocks",
  "Stoicism",
  "stonerengineering",
  "stopdrinking",
  "stoppedworking",
  "stopsmoking",
  "strangerthings",
  "streetart",
  "streetfights",
  "streetwear",
  "stuffoncats",
  "subaru",
  "submechanophobia",
  "SubredditDrama",
  "subredditoftheday",
  "subredditsimmeta",
  "subredditsimulator",
  "succulents",
  "suddenlygay",
  "suggestmeabook",
  "suicidebywords",
  "SuicideWatch",
  "suomi",
  "superbowl",
  "supermodelcats",
  "supernatural",
  "supershibe",
  "supremeclothing",
  "surface",
  "surrealmemes",
  "survival",
  "survivor",
  "sushi",
  "suspiciousquotes",
  "svenskpolitik",
  "SWARJE",
  "sweatypalms",
  "sweden",
  "swedishproblems",
  "swoleacceptance",
  "sydney",
  "SympatheticMonsters",
  "syriancivilwar",
  "sysadmin",
  "talesfromcallcenters",
  "talesfromretail",
  "talesfromtechsupport",
  "talesfromthecustomer",
  "TalesFromTheFrontDesk",
  "talesfromthepharmacy",
  "TalesFromThePizzaGuy",
  "talesfromthesquadcar",
  "TalesFromYourServer",
  "tall",
  "tattoo",
  "tattoos",
  "tea",
  "teachers",
  "tech",
  "technicallythetruth",
  "technology",
  "techsupport",
  "techsupportgore",
  "techsupportmacgyver",
  "teefies",
  "teenagers",
  "Television",
  "tendies",
  "tennis",
  "terriblefacebookmemes",
  "teslamotors",
  "texas",
  "thalassophobia",
  "thanksobama",
  "thanosdidnothingwrong",
  "thathappened",
  "thatlookedexpensive",
  "thatpeelingfeeling",
  "the_dennis",
  "the_donald",
  "The_Mueller",
  "the_pack",
  "thecatdimension",
  "TheDepthsBelow",
  "TheGirlSurvivalGuide",
  "thegrandtour",
  "TheLastAirbender",
  "thenetherlands",
  "theocho",
  "TheOnion",
  "theoryofreddit",
  "therewasanattempt",
  "TheSimpsons",
  "thetruthishere",
  "thewalkingdead",
  "TheWayWeWere",
  "theydidthemath",
  "ThingsCutInHalfPorn",
  "thingsforants",
  "thinspo",
  "thisismylifemeow",
  "thisismylifenow",
  "threadkillers",
  "thriftstorehauls",
  "tifu",
  "tiltshift",
  "Tinder",
  "tinyhouses",
  "TinyTrumps",
  "TipOfMyPenis",
  "tipofmytongue",
  "TipOfMyTongue",
  "tippytaps",
  "tiresaretheenemy",
  "titlegore",
  "tldr",
  "todayilearned",
  "tokyoghoul",
  "tolkeinfans",
  "tombstoning",
  "tooafraidtoask",
  "TooMeIrlForMeIrl",
  "toosoon",
  "topgear",
  "topmindsofreddit",
  "toronto",
  "torontoraptors",
  "torrents",
  "totallynotrobots",
  "trackers",
  "trailerparkboys",
  "transgender",
  "trap",
  "trashpandas",
  "trashy",
  "travel",
  "trebuchetmemes",
  "trees",
  "TreesSuckingOnThings",
  "trippinthroughtime",
  "TrollXChromosomes",
  "trollychromosome",
  "tronix",
  "tropicalweather",
  "TrueAskReddit",
  "trueatheism",
  "truecrime",
  "TrueDetective",
  "truefilm",
  "trueoffmychest",
  "TrueReddit",
  "TrumpCriticizesTrump",
  "trumpgret",
  "TsundereSharks",
  "tuckedinkitties",
  "tumblr",
  "tumblrinaction",
  "tvdetails",
  "twinpeaks",
  "twitch",
  "twitchplayspokemon",
  "tworedditorsonecup",
  "twosentencehorror",
  "TwoXChromosomes",
  "typography",
  "ubuntu",
  "ufc",
  "UFOs",
  "uglyduckling",
  "ukpolitics",
  "ultralight",
  "UNBGBBIIVCHIDCTIICBG",
  "undelete",
  "UnethicalLifeProTips",
  "unexpected",
  "unexpectedhogwarts",
  "unexpectedjihad",
  "UnexpectedMulaney",
  "unexpectedthuglife",
  "UnexpectedThugLife",
  "unitedkingdom",
  "unity3d",
  "unixporn",
  "unpopularopinion",
  "UnresolvedMysteries",
  "UnsolvedMysteries",
  "unstirredpaint",
  "untrustworthypoptarts",
  "UpliftingNews",
  "urbanexploration",
  "urbanhell",
  "urbanplanning",
  "vancouver",
  "vandwellers",
  "Vaping",
  "vaporents",
  "vaporwave",
  "VaporwaveAesthetics",
  "vaxxhappened",
  "Vechain",
  "vegan",
  "veganrecipes",
  "vegetarian",
  "vexillology",
  "videogamedunkey",
  "videos",
  "VillagePorn",
  "vinyl",
  "virtualreality",
  "wackytictacs",
  "wallpaper",
  "wallpapers",
  "wallstreetbets",
  "waltdisneyworld",
  "warriors",
  "warshipporn",
  "washingtondc",
  "WastedGifs",
  "watchandlearn",
  "watches",
  "watchpeopledieinside",
  "watchpeoplesurvive",
  "waterporn",
  "WeAreTheMusicMakers",
  "weathergifs",
  "web_design",
  "webcomics",
  "webdev",
  "weddingplanning",
  "weed",
  "weedstocks",
  "WeightRoom",
  "wellthatsucks",
  "Wellworn",
  "westworld",
  "WeWantPlates",
  "whatcouldgoright",
  "whatcouldgowrong",
  "whatintarnation",
  "whatisthisthing",
  "whatsinthisthing",
  "whatsthisbug",
  "whatsthisplant",
  "WhatsWrongWithYourDog",
  "Whatthefuckgetitoffme",
  "wheredidthesodago",
  "whiskey",
  "whiteknighting",
  "whitepeoplegifs",
  "WhitePeopleTwitter",
  "wholesomebpt",
  "wholesomegifs",
  "wholesomegreentext",
  "wholesomememes",
  "whowouldwin",
  "WhyWereTheyFilming",
  "wicked_edge",
  "wikileaks",
  "wikipedia",
  "wildernessbackpacking",
  "wimmelbilder",
  "windows",
  "Windows10",
  "wine",
  "WinStupidPrizes",
  "woahdude",
  "wokekids",
  "woodworking",
  "woof_irl",
  "woooosh",
  "WordAvalanches",
  "workonline",
  "WorldBuilding",
  "worldcup",
  "worldnews",
  "worldpolitics",
  "wouldyourather",
  "wowthanksimcured",
  "wowthissubexists",
  "wrestlewiththeplot",
  "Writing",
  "writing",
  "WritingPrompts",
  "writingprompts",
  "WTF",
  "wtfgaragesale",
  "wtfstockphotos",
  "wwe",
  "xkcd",
  "xxfitness",
  "yesyesyesno",
  "yesyesyesyesno",
  "yoga",
  "yogscast",
  "youdontsurf",
  "youseecomrade",
  "youseeingthisshit",
  "YouShouldKnow",
  "youtube",
  "YoutubeHaiku",
  "youtubehaiku",
  "yugioh",
  "ZenHabits",
  "zerowaste",
  "zombies"
];
