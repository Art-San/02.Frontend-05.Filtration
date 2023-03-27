import React, { useState, useEffect } from 'react'
import { paginate } from '../utils/paginate'
import Pagination from './Pagination'
import User from './User'
import GroupList from './GroupList'
import PropTypes from 'prop-types'
import api from '../api/index'
import SearchStatus from './SearchStatus'

const Users = ({ users: allUsers, ...rest }) => {
    const [currentPege, setCurrentPage] = useState(1)
    const [professions, setProfessions] = useState()
    const [selectedProf, setSelectedProf] = useState()

    const pageSize = 4

    useEffect(() => {
        api.professions.fetchAll().then((data) => {
            setProfessions(data)
        })
    }, [])
    useEffect(() => {
        setCurrentPage(1)
    }, [selectedProf])

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
    const count = filteredUsers.length
    const userGrop = paginate(filteredUsers, currentPege, pageSize)

    const clearFilter = () => {
        setSelectedProf()
    }

    return (
        <div className="d-flex">
            {professions && (
                <div className="d-flex flex-column flex-shrink-0 p-3">
                    <GroupList
                        selectedItem={selectedProf}
                        items={professions}
                        onItemSelect={handleProfessions}
                    />
                    <button
                        className="btn btn-secondary mt-2"
                        onClick={clearFilter}
                    >
                        Сброс
                    </button>
                </div>
            )}
            <div className="d-flex flex-column table-responsive-sm">
                <SearchStatus length={count} />
                {count > 0 && (
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
                )}
                <div className="d-flex justify-content-center">
                    <Pagination
                        itemsCount={count}
                        pageSize={pageSize}
                        onPageChange={handlePageChange}
                        currentPege={currentPege}
                    />
                </div>
            </div>
        </div>
    )
}
Users.propTypes = {
    users: PropTypes.array
}
export default Users
