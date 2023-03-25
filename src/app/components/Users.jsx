import React, { useState, useEffect } from 'react'
import { paginate } from '../utils/paginate'
import Pagination from './Pagination'
import User from './User'
import GroupList from './GroupList'
import PropTypes from 'prop-types'
import api from '../api/index'

const Users = ({ users: allUsers, ...rest }) => {
    const [currentPege, setCurrentPage] = useState(1)
    const [professions, setProfessions] = useState()
    const [selectedProf, setSelectedProf] = useState()
    const count = allUsers.length
    const pageSize = 4

    useEffect(() => {
        api.professions.fetchAll().then((data) => {
            // сброс фильтрации 2 вар
            setProfessions(data)
        })
    }, [])

    // useEffect(() => {
    //     api.professions.fetchAll().then((data) => {
    //         setProfessions(
    //             Object.assign(data, {
    //                 allProfession: { name: 'Все профессии' } // сброс фильтрации 1 вар с масивами это не работает
    //             })
    //         )
    //     })
    // }, [])

    const handleProfessions = (item) => {
        setSelectedProf(item)
    }

    console.log('selectedProf', selectedProf)

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }

    const filteredUsers = selectedProf
        ? allUsers.filter((user) => user.profession === selectedProf)
        : allUsers

    // const filteredUsers =
    //     selectedProf && selectedProf._id // сброс фильтрации 1 вар с масивами это не работает
    //         ? allUsers.filter((user) => user.profession === selectedProf)
    //         : allUsers

    const userGrop = paginate(filteredUsers, currentPege, pageSize)

    const clearFilter = () => {
        // сброс фильтрации 2 вар
        setSelectedProf()
    }

    return (
        <>
            {professions && (
                <>
                    <GroupList
                        selectedItem={selectedProf}
                        items={professions}
                        onItemSelect={handleProfessions}
                    />
                    <button
                        className="btn btn-secondary mt-2"
                        onClick={clearFilter} // сброс фильтрации 2 вар
                    >
                        Сброс
                    </button>
                </>
            )}
            {count > 0 && (
                <div className="table-responsive-sm">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Имя</th>
                                <th scope="col">Качества</th>
                                <th scope="col">Провфессия</th>
                                <th scope="col">Встретился, раз</th>
                                <th scope="col">Оценка</th>
                                <th scope="col">Избранное</th>
                                <th />
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {userGrop.map((user) => (
                                <User key={user._id} {...rest} {...user} />
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            <Pagination
                itemsCount={count}
                pageSize={pageSize}
                onPageChange={handlePageChange}
                currentPege={currentPege}
            />
        </>
    )
}
Users.propTypes = {
    users: PropTypes.array
}
export default Users
