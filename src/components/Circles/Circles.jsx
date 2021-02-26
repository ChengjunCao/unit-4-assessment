import React from 'react'
import './Circles.css'

export default function Circles(props) {
    return (
        <div className='Circles'>
            {/* className={selected ? 'selected' : ''} */}
            <div className={props.selected[0] ? 'selected' : ''} onClick={() => props.updateState0()}>1</div>
            <div className={props.selected[1] ? 'selected' : ''} onClick={() => props.updateState0()}>2</div>
            <div className={props.selected[2] ? 'selected' : ''} onClick={() => props.updateState0()}>3</div>
            <div className={props.selected[3] ? 'selected' : ''} onClick={() => props.updateState0()}>4</div>
        </div>
    )
}
