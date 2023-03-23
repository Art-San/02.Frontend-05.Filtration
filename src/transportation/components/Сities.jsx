import React, { useState } from 'react'
import { paginate } from '../utils/paginate'
import Pagination from './Pagination'
import Сiti from './Сiti'
import PropTypes from 'prop-types'
const Сities = ({ cities: allcities, ...rest }) => {
    const count = allcities.length
    const pageSize = 4
    const [currentPege, setCurrentPage] = useState(1)

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }

    const cityGrop = paginate(allcities, currentPege, pageSize)

    return (
        <>
            {count > 0 && (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Город</th>
                            <th scope="col">км</th>
                            <th scope="col">Стандарт</th>
                            <th scope="col">Удлинненая</th>
                            <th scope="col">Большая</th>
                            <th scope="col">3х тоннмк</th>
                            <th scope="col">5и тонник</th>
                            <th scope="col">Отметка</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {cityGrop.map((city) => (
                            <Сiti key={city._id} {...rest} {...city} />
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
Сities.propTypes = {
    cities: PropTypes.array
}
export default Сities
