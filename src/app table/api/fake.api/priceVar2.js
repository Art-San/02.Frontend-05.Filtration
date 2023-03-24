const cars = {
    standard: {
        _id: '67rdca3eeb7f6fgeed471818',
        name: 'Стандарт',
        priceKm: 20,
        hour: 700
    },
    elongated: {
        _id: '67rdca3eeb7f6fgeed471820',
        name: 'Удлиненная',
        priceKm: 25,
        hour: 950
    },
    big: {
        _id: '67rdca3eeb7f6fgeed471814',
        name: 'Большая',
        priceKm: 30,
        hour: 1200
    },
    threetons: {
        _id: '67rdca3eeb7f6fgeed471822',
        name: '3х тонник',
        priceKm: 35,
        hour: 1300
    },
    fivetons: {
        _id: '67rdca3eeb7f6fgeed471824',
        name: '5и тонник',
        priceKm: 40,
        hour: 1500
    }
}
const settlements = [
    {
        _id: '67rdca3eeb7f6fgeed471815',
        name: 'Новосибирск',
        km: 270,
        bookmark: false
    },
    {
        _id: '67rdca3eeb7f6fgeed471816',
        name: 'Омск',
        km: 911,
        bookmark: false
    },
    {
        _id: '67rdca3eeb7f6fgeed471817',
        name: 'Кемерово',
        km: 220,
        bookmark: false
    },
    {
        _id: '67rdca3eeb7f6fgeed471818',
        name: 'Барнаул',
        km: 270,
        bookmark: false
    },
    {
        _id: '67rdca3eeb7f6fgeed471819',
        name: 'Иркутск',
        km: 1630,
        bookmark: false
    },
    {
        _id: '67rdca3eeb7f6fgeed471820',
        name: 'Красноярск',
        km: 579,
        bookmark: false
    },
    {
        _id: '67rdca3eeb7f6fgeed471821',
        name: 'Волгодонск',
        km: 3822,
        bookmark: false
    },
    {
        _id: '67rdca3eeb7f6fgeed471822',
        name: 'Москва',
        km: 3613,
        bookmark: false
    },
    {
        _id: '67rdca3eeb7f6fgeed471823',
        name: 'Тюмень',
        km: 1530,
        bookmark: false
    },
    {
        _id: '67rdca3eeb7f6fgeed471824',
        name: 'Анжеро-судженск',
        km: 146,
        bookmark: false
    },
    {
        _id: '67rdca3eeb7f6fgeed47181f',
        name: 'Екатеринбург',
        km: 1850,
        bookmark: false
    },
    {
        _id: '67rdca3eeb7f6fgeed47181r',
        name: 'Челябинск',
        km: 1820,
        bookmark: false
    }
]
export function fetchAllSettlements() {
    return settlements
}

export function fetchAllCars() {
    return cars
}

// const Table = ({ cars, settlements }) => {
//     const carKeys = Object.keys(cars);
//     return (
//       <table>
//         <thead>
//           <tr>
//             <th>Населенный пункт</th>
//             {carKeys.map((carKey) => (
//               <th key={carKey}>{cars[carKey].name}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {settlements.map((settlement) => (
//             <tr key={settlement._id}>
//               <td>{settlement.name}</td>
//               {carKeys.map((carKey) => (
//                 <td key={carKey}>
//                   {cars[carKey].priceKm * settlement.km}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     );
//   };
//   export default Table;

// В этом примере мы создали компонент Table,
// который принимает два аргумента, cars и settlements,
// и рендерит таблицу с данными.
// В компоненте мы использовали функцию Object.keys()
// для получения ключей объекта cars,
// чтобы мы могли использовать метод map()
// для создания заголовков столбцов таблицы.

// Затем мы использовали метод map()
// для создания строк таблицы из массива settlements.
// В каждой строке мы снова использовали метод map()
// для создания ячеек в каждом столбце,
// используя цену на километр для каждого типа автомобиля,
// указанную в объекте cars, и расстояние между населенными пунктами,
// указанным в массиве settlements.

// Наконец, мы экспортировали компонент Table по умолчанию,
// чтобы его можно было импортировать в другие компоненты
// и использовать в приложении.
