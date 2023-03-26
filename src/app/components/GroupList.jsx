import React from 'react'
import PropTypes from 'prop-types'

const GroupList = ({ items, valueProperty, contentProperty, onItemSelec }) => {
    // const keyItems = Object.keys(items) // Отображение элементов 1-вар
    return (
        <ul className="list-group">
            {/* {keyItems.map((item, index) => ( // Отображение элементов 1 - вар
                <li className="list-group-item" key={index}>
                    {items[item].name}
                </li>
            ))} */}
            {Object.keys(items).map(
                // Отображение элементов Object.keys- не будет работать с МАССИВАМИ
                (item, index) => (
                    <li
                        className="list-group-item"
                        key={items[item][valueProperty]}
                    >
                        {items[item][contentProperty]}
                    </li>
                )
            )}
            {/* <li className="list-group-item">An item</li>
            <li className="list-group-item">A second item</li>
            <li className="list-group-item">A third item</li>
            <li className="list-group-item">A fourth item</li>
            <li className="list-group-item">And a fifth one</li> */}
        </ul>
    )
}

GroupList.propTypes = {
    items: PropTypes.object,
    onItemSelec: PropTypes.func,
    valueProperty: PropTypes.string.isRequired,
    contentProperty: PropTypes.string.isRequired
}

export default GroupList
