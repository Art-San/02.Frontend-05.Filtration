/* eslint-disable react/prop-types */
import React, { useState } from 'react'
// import BookMark from './Marked'

const initialData = [
    {
        id: '1',
        name: 'Иванов Иван Иванович',
        age: 35,
        phone: '+7 (999) 123-45-67',
        email: 'ivanov@mail.ru',
        isFavorite: false
    },
    {
        id: '2',
        name: 'Петров Петр Петрович',
        age: 25,
        phone: '+7 (999) 234-56-78',
        email: 'petrov@mail.ru',
        isFavorite: false
    },
    {
        id: '3',
        name: 'Сидоров Сидор Сидорович',
        age: 45,
        phone: '+7 (999) 345-67-89',
        email: 'sidorov@mail.ru',
        isFavorite: false
    }
]

const Table = ({ onToggleBookMark }) => {
    const [data, setData] = useState(initialData)

    // const toggleFavorite = (id) => {
    //     setData(
    //         data.map((user) => {
    //             if (user.id === id) {
    //                 return { ...user, isFavorite: !user.isFavorite }
    //             }
    //             return user
    //         })
    //     )
    //     console.log(id)
    // }

    // Работает
    // const toggleFavorite = (index) => {
    //     setData((prevData) => {
    //         const updatedData = prevData.map((item, i) => {
    //             if (i === index) {
    //                 return {
    //                     ...item,
    //                     isFavorite: !item.isFavorite
    //                 }
    //             }
    //             return item
    //         })
    //         return updatedData
    //     })
    // }

    // работает
    // Здесь мы создаем новый массив с помощью Object.assign(),
    // заменяя элемент с индексом index на новый объект,
    // в котором свойство isFavorite инвертировано.
    const toggleFavorite = (index) => {
        setData((prevData) => {
            return Object.assign([], prevData, {
                [index]: {
                    ...prevData[index],
                    isFavorite: !prevData[index].isFavorite
                }
            })
        })
    }

    // const toggleFavorite = (index) => {
    //     const newData = [...data]
    //     newData[index].isFavorite = !newData[index].isFavorite
    //     setData(newData)
    // }
    // Не работает
    // const toggleFavorite = (index) => {
    //     setData((prevData) => {
    //         const newData = [...data]
    //         newData[index].isFavorite = !newData[index].isFavorite
    //         return newData
    //     })
    // }

    return (
        <table>
            <thead>
                <tr>
                    <th>ФИО</th>
                    <th>Возраст</th>
                    <th>Телефон</th>
                    <th>Email</th>
                    <th>Избранное</th>
                    <th>Избранное</th>
                    <th>Удалить</th>
                </tr>
            </thead>
            <tbody>
                {data.map((person, index) => (
                    <tr key={index}>
                        <td>{person.name}</td>
                        <td>{person.age}</td>
                        <td>{person.phone}</td>
                        <td>{person.email}</td>
                        {/* <td>
                            <BookMark
                                status={person.isFavorite}
                                onClick={() => onToggleBookMark(person.id)}
                            />
                        </td> */}
                        <td>
                            <button onClick={() => toggleFavorite(index)}>
                                {person.isFavorite
                                    ? 'Убрать из избранных'
                                    : 'Добавить в избранные'}
                            </button>
                        </td>
                        <td>
                            <button>Удалить</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default function Table2() {
    return (
        <div className="App">
            <h1>Таблица</h1>
            <Table />
        </div>
    )
}
