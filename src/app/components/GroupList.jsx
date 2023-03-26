import React from 'react'
import PropTypes from 'prop-types'

const GroupList = ({ items, valueProperty, contentProperty, onItemSelec }) => {
    return (
        <ul className="list-group">
            {Object.keys(items).map((item, index) => (
                <li
                    className="list-group-item"
                    key={items[item][valueProperty]}
                >
                    {items[item][contentProperty]}
                </li>
            ))}
        </ul>
    )
}

GroupList.defaultProps = {
    // Свойства по умолчанию - defaultprops неправильно, P- большая нужна
    valueProperty: '_id',
    contentProperty: 'name'
}
GroupList.propTypes = {
    items: PropTypes.object,
    onItemSelec: PropTypes.func,
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired
}

export default GroupList
