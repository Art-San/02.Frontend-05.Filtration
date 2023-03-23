import React, { useState } from 'react'
import Сities from './components/Сities'
import SearchStatusDirection from './components/SearchStatusDirection'
import api from './api'

function App2() {
    const [cities, setCities] = useState(api.price.fetchAll())
    console.log('users', cities)
    const handleDelete = (cityId) => {
        setCities(cities.filter((city) => city._id !== cityId))
    }
    const handleToggleBookMark = (id) => {
        setCities(
            cities.map((city) => {
                if (city._id === id) {
                    return { ...city, bookmark: !city.bookmark }
                }
                return city
            })
        )
        console.log(id)
    }
    return (
        <div>
            <SearchStatusDirection length={cities.length} />
            <Сities
                cities={cities}
                onDelete={handleDelete}
                onToggleBookMark={handleToggleBookMark}
            />
        </div>
    )
}

export default App2
