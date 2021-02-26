import React from 'react'
import './CircleSelector.css'
export default function CircleSelector(props) {
    return (
        <div className='CircleSelector'>
            {/* className={selected ? 'selected' : ''} */}
            <button className={props.selected[0] ? 'selected' : ''} onClick={() => props.updateState0()}>{props.text[0]}</button>
            <button className={props.selected[1] ? 'selected' : ''} onClick={() => props.updateState1()}>{props.text[1]}</button>
            <button className={props.selected[2] ? 'selected' : ''} onClick={() => props.updateState2()}>{props.text[2]}</button>
            <button className={props.selected[3] ? 'selected' : ''} onClick={() => props.updateState3()}>{props.text[3]}</button>
        </div>
    )
}
