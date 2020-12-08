// 1) Вывести список (id, name) каталогов
// 2) Вывести все каталоги и под ним список подкаталогов с id и названием (подкаталог это childlist)
// 3) Вывести все каталоги, подкаталоги, а также список подкаталогов из подкаталогов
// 4) Выведите список с такими параметрами (id:2166,uid:"category_2166", name:"Другое" )

const flowerBoutique = [
    { id: 2038, uid: "promo", name: "Акционные букеты", imageUrl: "https://mobileapi.flowers.ua/design/Flowers/mobile/tree-menu/catalog/2038.png", childList: [] },
    { id: 2037, uid: "new", name: "Новинки", imageUrl: "https://mobileapi.flowers.ua/design/Flowers/mobile/tree-menu/catalog/2037.png", childList: [] },
    { id: 2039, uid: "vip", name: "VIP букеты", imageUrl: "https://mobileapi.flowers.ua/design/Flowers/mobile/tree-menu/catalog/2039.png", childList: [] },
    { id: 2164, uid: "tsvety-lyubimoy", name: "Цветы любимой", imageUrl: "https://mobileapi.flowers.ua/design/Flowers/mobile/tree-menu/catalog/2164.png", childList: [] },
    { id: 2165, uid: "den-rozhdeniya", name: "День рождения", imageUrl: "https://mobileapi.flowers.ua/design/Flowers/mobile/tree-menu/catalog/2165.png", childList: [] },
    { id: 4, uid: "bukety-tsvetov", name: "Букеты цветов", imageUrl: "https://mobileapi.flowers.ua/design/Flowers/mobile/tree-menu/catalog/4.png", childList: [] },
    { id: 1433, uid: "sezonnye-zvety", name: "Сезонные цветы", imageUrl: "https://mobileapi.flowers.ua/design/Flowers/mobile/tree-menu/catalog/1433.png", childList: [] },
    { id: 1811, uid: "cvety_v_korobke", name: "Цветы в коробке", imageUrl: "https://mobileapi.flowers.ua/design/Flowers/mobile/tree-menu/catalog/1811.png", childList: [] },
    { id: 547, uid: "korziny-tsvetov", name: "Корзины цветов", imageUrl: "https://mobileapi.flowers.ua/design/Flowers/mobile/tree-menu/catalog/547.png", childList: [] },
    {
    id: 5, uid: "podarki", name: "Подарки", imageUrl: "https://mobileapi.flowers.ua/design/Flowers/mobile/tree-menu/catalog/5.png", childList: [
    { id: 152, uid: "myagkie-igrushki", name: "Мягкие игрушки", imageUrl: "https://mobileapi.flowers.ua/design/Flowers/mobile/tree-menu/catalog/152.png", childList: [] },
    { id: 1218, uid: "vozdushnye-shariki", name: "Воздушные шарики", imageUrl: "https://mobileapi.flowers.ua/design/Flowers/mobile/tree-menu/catalog/1218.png", childList: [] },
    { id: 151, uid: "konfety", name: "Конфеты", imageUrl: "https://mobileapi.flowers.ua/design/Flowers/mobile/tree-menu/catalog/151.png", childList: [] },
    { id: 150, uid: "torty", name: "Торты", imageUrl: "https://mobileapi.flowers.ua/design/Flowers/mobile/tree-menu/catalog/150.png", childList: [] },
    { id: 153, uid: "podarochnye-korziny", name: "Подарочные корзины", imageUrl: "https://mobileapi.flowers.ua/design/Flowers/mobile/tree-menu/catalog/153.png", childList: [] },
    { id: 577, uid: "korziny-fruktov", name: "Корзины фруктов", imageUrl: "https://mobileapi.flowers.ua/design/Flowers/mobile/tree-menu/catalog/577.png", childList: [] }
    ]
    },
    {
    id: 2166, uid: "category_2166", name: "Другое", imageUrl: "https://mobileapi.flowers.ua/design/Flowers/mobile/tree-menu/catalog/2166.png", childList: [
    { id: 7, uid: "komnatnye-rasteniya", name: "Комнатные растения", imageUrl: "https://mobileapi.flowers.ua/design/Flowers/mobile/tree-menu/catalog/7.png", childList: [] },
    { id: 532, uid: "kompozitsii-iz-tsvetov", name: "Композиции из цветов", imageUrl: "https://mobileapi.flowers.ua/design/Flowers/mobile/tree-menu/catalog/532.png", childList: [] }
    ]
    },
    {
    id: 2, uid: "tsvety", name: "Цветы", imageUrl: "https://mobileapi.flowers.ua/design/Flowers/mobile/tree-menu/filter/2.png", childList: [
    { id: 5, uid: "rozy", name: "Розы", imageUrl: "https://mobileapi.flowers.ua/design/Flowers/mobile/tree-menu/filter/5.png", childList: [] },
    { id: 7, uid: "hrizantemy", name: "Хризантемы", imageUrl: "https://mobileapi.flowers.ua/design/Flowers/mobile/tree-menu/filter/7.png", childList: [] },
    { id: 8, uid: "gerbery", name: "Герберы", imageUrl: "https://mobileapi.flowers.ua/design/Flowers/mobile/tree-menu/filter/8.png", childList: [] },
    { id: 10, uid: "ekzotika", name: "Экзотика", imageUrl: "https://mobileapi.flowers.ua/design/Flowers/mobile/tree-menu/filter/10.png", childList: [] },
    { id: 21, uid: "sezonnye-tsvety", name: "Сезонные цветы", imageUrl: "https://mobileapi.flowers.ua/design/Flowers/mobile/tree-menu/filter/21.png", childList: [] },
    { id: 22, uid: "alstromerii", name: "Альстромерии", imageUrl: "https://mobileapi.flowers.ua/design/Flowers/mobile/tree-menu/filter/22.png", childList: [] },
    { id: 23, uid: "sbornyy-buket", name: "Сборный букет", imageUrl: "https://mobileapi.flowers.ua/design/Flowers/mobile/tree-menu/filter/23.png", childList: [] }
    
    ]
    },
    {
    id: 3, uid: "komu", name: "Кому", imageUrl: "https://mobileapi.flowers.ua/design/Flowers/mobile/tree-menu/filter/3.png", childList: [
    { id: 11, uid: "tsvety-zhenshchine", name: "Цветы женщине", imageUrl: "https://mobileapi.flowers.ua/design/Flowers/mobile/tree-menu/filter/11.png", childList: [] },
    { id: 12, uid: "tsvety-muzhchine", name: "Цветы мужчине", imageUrl: "https://mobileapi.flowers.ua/design/Flowers/mobile/tree-menu/filter/12.png", childList: [] },
    { id: 13, uid: "tsvety-lyubimoy", name: "Цветы любимой", imageUrl: "https://mobileapi.flowers.ua/design/Flowers/mobile/tree-menu/filter/13.png", childList: [] },
    { id: 14, uid: "tsvety-mame", name: "Цветы маме", imageUrl: "https://mobileapi.flowers.ua/design/Flowers/mobile/tree-menu/filter/14.png", childList: [] },
    { id: 24, uid: "tsvety-rebenku", name: "Цветы ребенку", imageUrl: "https://mobileapi.flowers.ua/design/Flowers/mobile/tree-menu/filter/24.png", childList: [] }
    
    ]
    },
    {
    id: 4, uid: "povod", name: "Повод", imageUrl: "https://mobileapi.flowers.ua/design/Flowers/mobile/tree-menu/filter/4.png", childList: [
    { id: 16, uid: "den-rozhdeniya", name: "День рождения", imageUrl: "https://mobileapi.flowers.ua/design/Flowers/mobile/tree-menu/filter/16.png", childList: [] },
    { id: 17, uid: "s-novorozhdennym", name: "Рождение ребенка", imageUrl: "https://mobileapi.flowers.ua/design/Flowers/mobile/tree-menu/filter/17.png", childList: [] },
    { id: 18, uid: "lyublyu", name: "Люблю", imageUrl: "https://mobileapi.flowers.ua/design/Flowers/mobile/tree-menu/filter/18.png", childList: [] },
    { id: 19, uid: "svadba", name: "Свадьба", imageUrl: "https://mobileapi.flowers.ua/design/Flowers/mobile/tree-menu/filter/19.png", childList: [] },
    { id: 20, uid: "biznes", name: "Бизнес", imageUrl: "https://mobileapi.flowers.ua/design/Flowers/mobile/tree-menu/filter/20.png", childList: [] }
    ]
    },
    {
    id: 30, uid: "po-tsene", name: "По цене", imageUrl: "https://mobileapi.flowers.ua/design/Flowers/mobile/tree-menu/filter/30.png", childList: [
    { id: 32, uid: "do500uah", name: "до 500 грн", imageUrl: "https://mobileapi.flowers.ua/design/Flowers/mobile/tree-menu/filter/32.png", childList: [] },
    { id: 33, uid: "500-700uah", name: "500 - 700 грн", imageUrl: "https://mobileapi.flowers.ua/design/Flowers/mobile/tree-menu/filter/33.png", childList: [] },
    { id: 34, uid: "700-1000uah", name: "700 - 1000 грн", imageUrl: "https://mobileapi.flowers.ua/design/Flowers/mobile/tree-menu/filter/34.png", childList: [] },
    { id: 35, uid: "ot1000uah", name: "от 1000 грн", imageUrl: "https://mobileapi.flowers.ua/design/Flowers/mobile/tree-menu/filter/35.png", childList: [] }
    
    ]
    }
    ];
    
    let categor = []
    let subcategor = []
    let subsubcategor = []
    let special = []

    //1 task
    for(catalog of flowerBoutique){
        console.log(`Id каталога - ${catalog.id} , название каталога - ${catalog.name}`)
        categor.push(`Id каталога - ${catalog.id} , название каталога - ${catalog.name}`)
    }
    console.log(`\n`)
    
    //2task
    for(catalog of flowerBoutique){
        if(catalog.childList !== null ){
            for(subcatalog of catalog.childList){
                console.log(`Id подкаталога - ${subcatalog.id} , название подкаталога - ${subcatalog.name}`)
                subcategor.push(`Id подкаталога - ${subcatalog.id} , название подкаталога - ${subcatalog.name}`)
            }
            
        }
    }
    console.log(`\n`)
    
    //3task
    for(catalog of flowerBoutique){
        if(catalog.childList !== null ){
            for(subcatalog of catalog.childList){
                if(subcatalog.childList !==null){
                    console.log(`Id Под-подкаталога - ${subcatalog.id} , название под-подкаталога - ${subcatalog.name}`)
                    subsubcategor.push(`Id Под-подкаталога - ${subcatalog.id} , название под-подкаталога - ${subcatalog.name}`)
                }
            }
            
        }
    }
    console.log(`\n`)
    
    //4task
    for(catalog of flowerBoutique){
        if(catalog.id == 2166 && catalog.uid == "category_2166" && catalog.name == "Другое"){
            console.log(`Id выбранного каталога - ${catalog.id} , название выбранного каталога - ${catalog.name}`)
            special.push(`Id выбранного каталога - ${catalog.id} , название выбранного каталога - ${catalog.name}`)
        }
    }