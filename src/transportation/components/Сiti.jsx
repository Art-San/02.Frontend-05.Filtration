import React from 'react'
import Marked from './Marked'
import PropTypes from 'prop-types'
const Сiti = ({
    _id,
    name,
    km,
    standard,
    elongated,
    big,
    threetons,
    fivetons,
    bookmark,
    onToggleBookMark,
    onDelete
}) => {
    const calcul = (data) => {
        return km * 2 * data.priceKm + data.hour
    }

    return (
        <tr>
            <td>{name}</td>
            <td>{km}</td>
            <td>{calcul(standard)}</td>
            <td>{calcul(elongated)}</td>
            <td>{calcul(big)}</td>
            <td>{calcul(threetons)}</td>
            <td>{calcul(fivetons)}</td>
            <td>
                <Marked
                    status={bookmark}
                    onClick={() => onToggleBookMark(_id)}
                />
            </td>
            <td>
                <button
                    onClick={() => onDelete(_id)}
                    className="btn btn-danger"
                >
                    delete
                </button>
            </td>
        </tr>
    )
}

Сiti.propTypes = {
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    km: PropTypes.number.isRequired,
    standard: PropTypes.object.isRequired,
    elongated: PropTypes.object.isRequired,
    big: PropTypes.object.isRequired,
    threetons: PropTypes.object.isRequired,
    fivetons: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
    bookmark: PropTypes.bool,
    onToggleBookMark: PropTypes.func.isRequired
}

export default Сiti
