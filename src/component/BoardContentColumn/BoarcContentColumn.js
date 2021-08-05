import React from 'react'
import './BoarcContentColumn.scss'
import { FaPlus } from "react-icons/fa";
import BoarcContentTask from '../BoardContentTask/BoarcContentTask';

function BoarcContentColumn(props) {
    return (
        <div className="colums__content">
            <div className="board__title">Brainstorm</div>
            <div className="board__content">
                <ul>
                    <BoarcContentTask />
                    <li>Add what you'd like to work on below</li>
                    <li>Add what you'd like to work on below</li>
                    <li>Add what you'd like to work on below</li>
                    <li>Add what you'd like to work on below</li>
                    <li>Add what you'd like to work on below</li>
                    <li>Add what you'd like to work on below</li>
                    <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ut optio expedita suscipit assumenda saepe praesentium unde. Fugiat harum corporis ea eaque, cupiditate, maiores ratione eveniet cum culpa asperiores rem! Add what you'd like to work on below</li>
                </ul>
            </div>
            <div className="board__add"><button className="add__card"><FaPlus /></button> Add another card</div>
        </div>

    )
}

export default BoarcContentColumn

