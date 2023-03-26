import React from 'react'
import PropTypes from 'prop-types'

const GroupList = ({
    items,
    valueProperty,
    contentProperty,
    onItemSelect,
    selectedItem
}) => {
    return (
        <ul className="list-group">
            {Object.keys(items).map((item, index) => (
                <li
                    className={
                        'list-group-item' +
                        (items[item] === selectedItem ? ' active' : '')
                    }
                    onClick={() => onItemSelect(items[item])}
                    // key={index} // сброс фильтрации 1 вар с масивами это не работает
                    key={items[item][valueProperty]}
                    role="button"
                >
                    {items[item][contentProperty]}
                </li>
            ))}
        </ul>
    )
}

GroupList.defaultProps = {
    valueProperty: '_id',
    contentProperty: 'name'
}
GroupList.propTypes = {
    items: PropTypes.object,
    onItemSelect: PropTypes.func,
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired,
    selectedItem: PropTypes.object
}

export default GroupList
