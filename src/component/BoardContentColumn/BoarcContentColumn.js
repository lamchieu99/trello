import React from 'react'
import './BoarcContentColumn.scss'
import { FaPlus } from "react-icons/fa";
import BoarcContentTask from '../BoardContentTask/BoarcContentTask';
import { mapOrder } from 'utilities/sorts'

function BoarcContentColumn(props) {
    const {column} = props
    const tasks = mapOrder(column.tasks, column.taskOrder, 'id')
    return (
        <div className="colums__content">
            <div className="board__title">{column.title}</div>
            <div className="board__content">
                <ul>
                    {tasks.map((task, index) => 
                        <BoarcContentTask key={index} task = {task} />
                    )}
                </ul>
            </div>
            <div className="board__add"><button className="add__card"><FaPlus /></button> Add another card</div>
        </div>

    )
}

export default BoarcContentColumn

