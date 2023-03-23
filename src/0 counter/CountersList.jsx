import React, { useState } from 'react'
import Counter from './Counter'

const CountersList = () => {
    const initialState = [
        { id: 0, value: 0, name: 'Ненужная вещь', price: '200' },
        { id: 1, value: 4, name: 'Ложка' },
        { id: 2, value: 0, name: 'Вилка' },
        { id: 3, value: 0, name: 'Тарелка' },
        { id: 4, value: 0, name: 'Набор минималиста' }
    ]

    const [counters, setCounters] = useState(initialState)

    const handleDelete = (id) => {
        const newCounters = counters.filter((c) => c.id !== id)
        setCounters(newCounters)
    }
    const handleReset = () => {
        setCounters(initialState)
    }
    // ПЕРВЫЙ ВАРИАНТ

    // const handleIncrement = (id) => {
    //     setCounters(
    //         counters.map((item) => {
    //             if (item.id === id) {
    //                 return { ...item, value: item.value + 1 }
    //             } else {
    //                 return item
    //             }
    //         })
    //     )
    // }

    // ВТОРОЙ ВАРИАНТ

    const handleIncrement = (id) => {
        const elementIndex = counters.findIndex((el) => el.id === id)
        const newCounters = [...counters]
        newCounters[elementIndex].value++
        setCounters(newCounters)

        // console.log(newCounters)
    }

    // ПЕРВЫЙ ВАРИАНТ

    // const handleDecrement = (id) => {
    //     setCounters(
    //         counters.map((item) => {
    //             if (item.id === id) {
    //                 return { ...item, value: item.value - 1 }
    //             } else {
    //                 return item
    //             }
    //         })
    //     )
    // }

    // ВТОРОЙ ВАРИАНТ

    const handleDecrement = (id) => {
        const elementIndex = counters.findIndex((el) => el.id === id)
        const newCounters = [...counters]
        newCounters[elementIndex].value--
        setCounters(newCounters)

        // console.log(newCounters)
    }

    return (
        <>
            {counters.map((count) => (
                <Counter
                    key={count.id}
                    onDelete={handleDelete}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                    {...count}
                />
            ))}
            <button
                onClick={handleReset}
                className="btn btn-primary btn-sm m-2"
            >
                Сброс
            </button>
        </>
    )
}

export default CountersList
