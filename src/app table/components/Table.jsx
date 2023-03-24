/* eslint-disable react/prop-types */
import React from 'react'

// const carNames = Object.keys(cars).map(car => cars[car].name)

const Table = ({ cars, settlements }) => {
    const carKeys = Object.keys(cars)

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Населенный пункт</th>
                        {carKeys.map((carKey) => (
                            <th scope="col" key={carKey}>
                                {cars[carKey].name}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {settlements.map((settlement) => (
                        <tr key={settlement._id}>
                            <td>{settlement.name}</td>
                            {carKeys.map((carKey) => (
                                <td key={carKey}>
                                    {cars[carKey].priceKm * settlement.km}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Table
