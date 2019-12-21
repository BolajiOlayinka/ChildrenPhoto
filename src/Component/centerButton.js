import React from 'react';
import style from './Body.module.css';

export default function centerButton(props) {
    return (
        <div className={style.buttonArea}>
            <button className={style.button}>{props.buttonText}</button>
        </div>
    )
}
