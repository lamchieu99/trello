import React from 'react'
import './BoarcContentTask.scss'

function BoarcContentTask(props) {
    const {task} = props

    return (
        <li>
            { task.cover && <img src={task.cover} className="task-cover" alt="abc" /> }
            { task.title }
        </li>
    )
}

export default BoarcContentTask

