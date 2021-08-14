import React from 'react'
import { FaPen } from 'react-icons/fa'
import './BoardContentTask.scss'

function BoardContentTask(props) {
    const { task } = props
    return (
        <div className = "content__details">
            { task.cover && <img src={task.cover} draggable="false" className="task-cover" alt="abc" /> }
            { task.title }
            <FaPen className="icon__edit"/>
        </div>
    )
}

export default BoardContentTask

