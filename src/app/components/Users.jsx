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

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }

    // const filteredUsers = selectedProf
    //     ? allUsers.filter(
    //           (user) =>
    //               JSON.stringify(user.profession) ===
    //               JSON.stringify(selectedProf)
    //       )
    //     : allUsers

    const filteredUsers = selectedProf
        ? allUsers.filter((user) => {
              console.log('user.profession', user.profession) // user.profession {_id: '67rdca3eeb7f6fgeed471822', name: 'Инженер'}
              console.log('selectedProf', selectedProf) // selectedProf {_id: '67rdca3eeb7f6fgeed471822', name: 'Инженер'}
              console.log('==============================') // ==============================
              console.log(user.profession === selectedProf) // false ( содержимое одинаковое, но ссылки разные ). Массив является объектом JS другого типа.
              // Чтобы сравнить два разных объекта с одинаковым содержание
              // мы должны содержимое превратить в строку JSON.stringify
              if (user.profession === selectedProf) return true
              return false
          })
        : allUsers

    // console.log('filteredUsers', filteredUsers)
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
            <div className="d-flex flex-column">
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

// const Users = ({ users: allUsers, ...rest }) => {
//     const [currentPage, setCurrentPage] = useState(1)
//     const [professions, setProfession] = useState()
//     const [selectedProf, setSelectedProf] = useState()

//     const pageSize = 2
//     useEffect(() => {
//         api.professions.fetchAll().then((data) => setProfession(data))
//     }, [])
//     useEffect(() => {
//         setCurrentPage(1)
//     }, [selectedProf])

//     const handleProfessionSelect = (item) => {
//         setSelectedProf(item)
//     }

//     const handlePageChange = (pageIndex) => {
//         setCurrentPage(pageIndex)
//     }
//     const filteredUsers = selectedProf
//         ? allUsers.filter(
//               (user) =>
//                   JSON.stringify(user.profession) ===
//                   JSON.stringify(selectedProf)
//           )
//         : allUsers

//     const count = filteredUsers.length
//     const usersCrop = paginate(filteredUsers, currentPage, pageSize)
//     const clearFilter = () => {
//         setSelectedProf()
//     }
//     console.log('currentPage', currentPage)
//     return (
//         <div className="d-flex">
//             {professions && (
//                 <div className="d-flex flex-column flex-shrink-0 p-3">
//                     <GroupList
//                         selectedItem={selectedProf}
//                         items={professions}
//                         onItemSelect={handleProfessionSelect}
//                     />
//                     <button
//                         className="btn btn-secondary mt-2"
//                         onClick={clearFilter}
//                     >
//                         {' '}
//                         Очистить
//                     </button>
//                 </div>
//             )}
//             <div className="d-flex flex-column">
//                 <SearchStatus length={count} />
//                 {count > 0 && (
//                     <table className="table">
//                         <thead>
//                             <tr>
//                                 <th scope="col">Имя</th>
//                                 <th scope="col">Качества</th>
//                                 <th scope="col">Профессия</th>
//                                 <th scope="col">Встретился, раз</th>
//                                 <th scope="col">Оценка</th>
//                                 <th scope="col">Избранное</th>
//                                 <th />
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {usersCrop.map((user) => (
//                                 <User {...rest} {...user} key={user._id} />
//                             ))}
//                         </tbody>
//                     </table>
//                 )}
//                 <div className="d-flex justify-content-center">
//                     <Pagination
//                         itemsCount={count}
//                         pageSize={pageSize}
//                         currentPage={currentPage}
//                         onPageChange={handlePageChange}
//                     />
//                 </div>
//             </div>
//         </div>
//     )
// }
// Users.propTypes = {
//     users: PropTypes.array
// }

// export default Users
