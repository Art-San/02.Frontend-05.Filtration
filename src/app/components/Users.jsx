import React, { useState } from 'react'
import { paginate } from '../utils/paginate'
import Pagination from './Pagination'
import User from './User'
import GroupList from './GroupList'
import PropTypes from 'prop-types'
import api from '../api/index'
const Users = ({ users: allUsers, ...rest }) => {
    const [currentPege, setCurrentPage] = useState(1)
    const [professions] = useState(api.professions.fetchAll())
    const count = allUsers.length
    const pageSize = 4

    const handleProfessions = (id) => {
        console.log(id)
    }

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }

    const userGrop = paginate(allUsers, currentPege, pageSize)

    return (
        <>
            <GroupList items={professions} onItemSelect={handleProfessions} />
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
                    <tbody>
                        {userGrop.map((user) => (
                            <User key={user._id} {...rest} {...user} />
                        ))}
                    </tbody>
                </table>
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
