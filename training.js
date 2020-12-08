// 1) Вывести список всех id и типов (type)
// 2) Вывести список всех груп и под ним подгруп где isActive=true 
// 2) Вывести список всех груп и под ним подгруп где progress-> maxposition >=5
 
const achivmentsMock = [
    {
    id: 0,
    type: 'timeAchivments',
    config: {
    bronze: {
    isActive: false,
    isDone: true,
    name: 'Bronze',
    descriptionNotActive: 'Тренируйтесь 1 час',
    restDate: '2:00', 
    progress: {
    currentPosition: 3,
    maxPosition: 5,
    },
    },
    silver: {
    isActive: false,
    isDone: true,
    name: 'Silver',
    descriptionNotActive: 'Тренируйтесь 3 часа',
    restDate: '', 
    progress: {
    currentPosition: 1,
    maxPosition: 15,
    },
    },
    gold: {
    isActive: true,
    isDone: true,
    name: 'Gold',
    descriptionNotActive: 'Тренируйтесь 5 часов',
    restDate: '', 
    progress: {
    currentPosition: 24,
    maxPosition: 25,
    },
    },
    },
    },
    {
    id: 1,
    type: 'traningAchivments',
    config: {
    bronze: {
    isActive: true,
    isDone: false,
    name: 'Bronze',
    descriptionNotActive: 'Завершите 3-дневную тренировку',
    restDate: '2:00', 
    progress: {
    currentPosition: 3,
    maxPosition: 5,
    },
    },
    silver: {
    isActive: false,
    isDone: false,
    name: 'Silver',
    descriptionNotActive: 'Завершите 10-дневную тренировку',
    restDate: '', 
    progress: {
    currentPosition: 9,
    maxPosition: 15,
    },
    },
    gold: {
    isActive: false,
    isDone: false,
    name: 'Gold',
    descriptionNotActive: 'Завершите 25-дневную тренировку',
    restDate: '', 
    progress: {
    currentPosition: 4,
    maxPosition: 25,
    },
    },
    },
    },
    {
    id: 2,
    type: 'seriesTrainingAchivments',
    config: {
    bronze: {
    isActive: false,
    isDone: true,
    name: 'Bronze',
    descriptionNotActive: 'Завершите 3-дневную серию',
    restDate: '2:00', 
    progress: {
    currentPosition: 2,
    maxPosition: 5,
    },
    },
    silver: {
    isActive: true,
    isDone: false,
    name: 'Silver',
    descriptionNotActive: 'Завершите 10-дневную серию',
    restDate: '',
    progress: {
    currentPosition: 1,
    maxPosition: 15,
    },
    },
    gold: {
    isActive: false,
    isDone: false,
    name: 'Gold',
    descriptionNotActive: 'Завершите 25-дневную серию',
    restDate: '', 
    progress: {
    currentPosition: 7,
    maxPosition: 25,
    },
    },
    },
    },
    ]
    
    //all tasks
    let catalog = []
    let subcatalog = []
    let subsubcatalog = []
    let main = achivmentsMock.map(all =>{
        catalog.push(`Id списка - ${all.id}, тип списка - ${all.type}.`)
        console.log(`Id списка - ${all.id}, тип списка - ${all.type}.`)
        temp = Object.values(all.config).map(sub=>{
            if(sub.isActive === true){
                subcatalog.push(`Id подкаталога ${all.id}, тип каталога - ${all.type}, имя каталога - ${sub.name}`)
                console.log(`Id подкаталога ${all.id}, тип каталога - ${all.type}, имя каталога - ${sub.name}`)
            }
            if(sub.progress.maxPosition>=5){
                subsubcatalog.push(`id is ${all.id}, type is ${all.type}, name is ${sub.name}`)
                console.log(`id is ${all.id}, type is ${all.type}, name is ${sub.name}`)
            }
        })
    })