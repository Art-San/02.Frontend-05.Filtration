import React from 'react'
import PropTypes from 'prop-types'

const GroupList = ({ items, onItemSelec }) => {
    console.log('item', items)
    const keyItems = Object.keys(items)
    console.log('keyItems', keyItems)
    return (
        <ul className="list-group">
            {keyItems.map((item) => (
                <li className="list-group-item" key={keyItems}>
                    {items[keyItems].name}
                </li>
            ))}
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
    onItemSelec: PropTypes.func
}

export default GroupList
