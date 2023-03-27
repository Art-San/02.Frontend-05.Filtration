import React, { useState, useEffect } from 'react'
import Users from './components/Users'
import api from './api'

function App() {
    const [users, setUsers] = useState()
    useEffect(() => {
        api.users.fetchAll().then((data) => setUsers(data)) // отображение юзеров с задержкой
    }, [])
    const handleDelete = (userId) => {
        setUsers(users.filter((user) => user._id !== userId))
    }
    const handleToggleBookMark = (id) => {
        setUsers(
            users.map((user) => {
                if (user._id === id) {
                    return { ...user, bookmark: !user.bookmark }
                }
                return user
            })
        )
        console.log(id)
    }
    return (
        <div>
            {users && ( // отображение юзеров с задержкой ПРОВЕРКА обязательна
                <Users
                    users={users}
                    onDelete={handleDelete}
                    onToggleBookMark={handleToggleBookMark}
                />
            )}
        </div>
    )
}

export default App
