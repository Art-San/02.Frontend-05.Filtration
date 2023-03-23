/* eslint-disable react/prop-types */
import React from 'react'

const Counter = (props) => {
    const { value } = props

    const formatValue = () => {
        return value === 0 ? 'empty' : value
    }

    const getBageClasses = () => {
        let classes = 'badge m-2 '
        classes += value === 0 ? 'bg-warning' : 'bg-primary'
        return classes
    }

    // const handleIncrement = () => {
    //     props.onIncrement(props.id);
    // };
    // const handleDecrement = () => {
    //     props.onDecrement(props.id);
    // };

    return (
        <div>
            <span>{props.name}</span>
            <span className={getBageClasses()}>{formatValue()}</span>
            <button
                className="btn btn-primary btn-sm m-2"
                onClick={() => props.onIncrement(props.id)}
                // onClick={handleIncrement}
            >
                +
            </button>
            <button
                className="btn btn-primary btn-sm"
                onClick={() => props.onDecrement(props.id)}
                // onClick={handleDecrement}
            >
                -
            </button>
            <button
                onClick={() => props.onDelete(props.id)}
                className="btn btn-danger btn-sm m-2"
            >
                Delete
            </button>
        </div>
    )
}

export default Counter
