const cars = {
    standard: { _id: '67rdca3eeb7f6fgeed471818', priceKm: 20, hour: 700 },
    elongated: { _id: '67rdca3eeb7f6fgeed471820', priceKm: 25, hour: 950 },
    big: { _id: '67rdca3eeb7f6fgeed471814', priceKm: 30, hour: 1200 },
    threetons: { _id: '67rdca3eeb7f6fgeed471822', priceKm: 35, hour: 1300 },
    fivetons: { _id: '67rdca3eeb7f6fgeed471824', priceKm: 40, hour: 1500 }
}
const price = [
    {
        _id: '67rdca3eeb7f6fgeed471815',
        name: 'Новосибирск',
        km: 270,
        standard: cars.standard,
        elongated: cars.elongated,
        big: cars.big,
        threetons: cars.threetons,
        fivetons: cars.fivetons,
        bookmark: false
    },
    {
        _id: '67rdca3eeb7f6fgeed471816',
        name: 'Омск',
        km: 911,
        standard: cars.standard,
        elongated: cars.elongated,
        big: cars.big,
        threetons: cars.threetons,
        fivetons: cars.fivetons,
        bookmark: false
    },
    {
        _id: '67rdca3eeb7f6fgeed471817',
        name: 'Кемерово',
        km: 220,
        standard: cars.standard,
        elongated: cars.elongated,
        big: cars.big,
        threetons: cars.threetons,
        fivetons: cars.fivetons,
        bookmark: false
    },
    {
        _id: '67rdca3eeb7f6fgeed471818',
        name: 'Барнаул',
        km: 270,
        standard: cars.standard,
        elongated: cars.elongated,
        big: cars.big,
        threetons: cars.threetons,
        fivetons: cars.fivetons,
        bookmark: false
    },
    {
        _id: '67rdca3eeb7f6fgeed471819',
        name: 'Иркутск',
        km: 1630,
        standard: cars.standard,
        elongated: cars.elongated,
        big: cars.big,
        threetons: cars.threetons,
        fivetons: cars.fivetons,
        bookmark: false
    },
    {
        _id: '67rdca3eeb7f6fgeed471820',
        name: 'Красноярск',
        km: 579,
        standard: cars.standard,
        elongated: cars.elongated,
        big: cars.big,
        threetons: cars.threetons,
        fivetons: cars.fivetons,
        bookmark: false
    },
    {
        _id: '67rdca3eeb7f6fgeed471821',
        name: 'Волгодонск',
        km: 3822,
        standard: cars.standard,
        elongated: cars.elongated,
        big: cars.big,
        threetons: cars.threetons,
        fivetons: cars.fivetons,
        bookmark: false
    },
    {
        _id: '67rdca3eeb7f6fgeed471822',
        name: 'Москва',
        km: 3613,
        standard: cars.standard,
        elongated: cars.elongated,
        big: cars.big,
        threetons: cars.threetons,
        fivetons: cars.fivetons,
        bookmark: false
    },
    {
        _id: '67rdca3eeb7f6fgeed471823',
        name: 'Тюмень',
        km: 1530,
        standard: cars.standard,
        elongated: cars.elongated,
        big: cars.big,
        threetons: cars.threetons,
        fivetons: cars.fivetons,
        bookmark: false
    },
    {
        _id: '67rdca3eeb7f6fgeed471824',
        name: 'Анжеро-судженск',
        km: 146,
        standard: cars.standard,
        elongated: cars.elongated,
        big: cars.big,
        threetons: cars.threetons,
        fivetons: cars.fivetons,
        bookmark: false
    },
    {
        _id: '67rdca3eeb7f6fgeed47181f',
        name: 'Екатеринбург',
        km: 1850,
        standard: cars.standard,
        elongated: cars.elongated,
        big: cars.big,
        threetons: cars.threetons,
        fivetons: cars.fivetons,
        bookmark: false
    },
    {
        _id: '67rdca3eeb7f6fgeed47181r',
        name: 'Челябинск',
        km: 1820,
        standard: cars.standard,
        elongated: cars.elongated,
        big: cars.big,
        threetons: cars.threetons,
        fivetons: cars.fivetons,
        bookmark: false
    }
]
export function fetchAll() {
    return price
}
