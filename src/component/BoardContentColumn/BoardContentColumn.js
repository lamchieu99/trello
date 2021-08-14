import ConfirmModal from 'component/BoardCommon/ConfirmModel'
import cloneDeep from 'lodash.clonedeep'
import React, { useEffect, useRef, useState } from 'react'
import { Dropdown, Form } from 'react-bootstrap'
import { FaPlus } from 'react-icons/fa'
import { Container, Draggable } from 'react-smooth-dnd'
import { MODAL_ACTION_CONFIRM } from 'utilities/constants'
import { mapOrder } from 'utilities/sorts'
import BoardContentTask from '../BoardContentTask/BoarcContentTask'
import './BoardContentColumn.scss'

function BoardContentColumn(props) {
    const { column, onCardDrop, deleteAllColumn } = props
    const [openModal, setOpenModal] = useState(false)
    const [valueEdit, setValueEdit] = useState('')
    const [openEdit, setOpenEdit] = useState(false)
    const [valueAdd, setValueAdd] = useState('')
    const [openAdd, setOpenAdd] = useState(false)
    const [openBoard, setOpenBoard] = useState(false)
    const newColumnInputRef = useRef(null)

    const tasks = mapOrder(column.tasks, column.taskOrder, 'id')

    //modal
    const toggleModal = () => {
        setOpenModal(!openModal)
    }
    const onConfirmModelAction = (type) => {
        if (type === MODAL_ACTION_CONFIRM) {
            const newColumn = {
                ...column,
                title: valueEdit,
                _destroy: true
            }
            deleteAllColumn(newColumn)
        }
        toggleModal()
    }
    useEffect(() => {
        if (newColumnInputRef && newColumnInputRef.current) {
            newColumnInputRef.current.focus()
        }
    }, [openEdit])

    useEffect(() => {
        if (newColumnInputRef && newColumnInputRef.current) {
            newColumnInputRef.current.focus()
        }
    }, [openAdd])

    //change value
    useEffect(() => {
        setValueEdit(column.title)
    }, [column.title])

    const openValueEdit = () => {
        setOpenEdit(!openEdit)
    }

    const changeValueEdit = (e) => {
        setValueEdit(e.target.value)
    }

    const saveContentEnter = (e) => {
        if (e.key === 'Enter') {
            e.target.blur()
            setOpenEdit(false)
        }
    }

    const handeBlurChange = () => {
        if (valueEdit) {
            const newColumn = {
                ...column,
                title: valueEdit
            }
            deleteAllColumn(newColumn)
            setOpenEdit(false)
        }
    }

    //Add value
    const changeValueAdd = (e) => {
        setValueAdd(e.target.value)
    }

    const addTask = () => {
        setOpenAdd(!openAdd)
    }

    const saveAddEnter = (e) => {
        if (e.key === 'Enter') {
            e.target.blur()
        }

    }

    const handelBlurAddChange = () => {
        if (valueAdd) {
            const newTask = {
                id: Math.random().toString(36).substr(2, 5),
                boardId: column.boardId,
                columnId: column.id,
                title: valueAdd.trim(),
                cover: null
            }

            let newColumn = cloneDeep(column)
            console.log(newColumn)
            newColumn.tasks.push(newTask)
            newColumn.taskOrder.push(newTask.id)
            deleteAllColumn(newColumn)
            setValueAdd('')
            addTask()
            console.log('content', column)
            // console.log(newColumn)
        }
    }

    useEffect(() => {
        if (tasks.length) {
            // console.log(tasks.length)
            setOpenBoard(true)
        }
    }, [column])

    return (
        <div className="columns__content">
            <div className="board__header">
                {!openEdit &&
                    <div className="board__title column-drag-handle" onDoubleClick={openValueEdit}>
                        {valueEdit}
                    </div>
                }
                {openEdit &&
                    <div className="board__title column-drag-handle">
                        <Form.Control size="sm" type="text" placeholder="Enter column title..." className="board__edit"
                            value={valueEdit}
                            onChange={changeValueEdit}
                            onKeyDown={saveContentEnter}
                            ref={newColumnInputRef}
                            onBlur={handeBlurChange}
                            as="textarea"
                        />
                    </div>
                }
                <div className="board__dropdown">
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" size="sm" className="btn__dropdown">
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="dropdown__item">
                            <div>
                                <Dropdown.Item href="#/action-2">Remove column</Dropdown.Item>
                                <Dropdown.Item href="#/action-3" onClick={toggleModal}>Move all tasks in this column</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Archive all tasks in this column</Dropdown.Item>
                            </div>
                            <div>
                                <Dropdown.Item href="#/action-2">Sort By </Dropdown.Item>
                                <Dropdown.Item href="#/action-3" onClick={toggleModal}>Search</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Archive all tasks in this column</Dropdown.Item>
                            </div>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </div>
            <div className="board__content">
                {openAdd &&
                    <Form.Control size="sm" type="text" placeholder="Enter column title..." className="details__width"
                        value={valueAdd}
                        onChange={changeValueAdd}
                        onKeyDown={saveAddEnter}
                        ref={newColumnInputRef}
                        onBlur={handelBlurAddChange}
                        as="textarea"
                        rows="3"
                    />
                }
                <Container
                    groupName="col"
                    onDrop={dropResult => onCardDrop(column.id, dropResult)}
                    getChildPayload={index => tasks[index]}
                    dragClass="card-ghost"
                    dropClass="card-ghost-drop"
                    dropPlaceholder={{
                        animationDuration: 150,
                        showOnTop: true,
                        className: 'drop-preview'
                    }}
                    dropPlaceholderAnimationDuration={200}
                >
                    {tasks.map((task, index) =>
                        <Draggable key={index}>
                            <BoardContentTask task={task} />
                        </Draggable>
                    )}
                </Container>
            </div>
            {openBoard &&
                <div className="board__add"><button className="add__card" onClick={addTask}><FaPlus /></button> Add another card</div>
            }
            <ConfirmModal
                show={openModal}
                onAction={onConfirmModelAction}
                title="Remove column"
                content={`Are you sure want to remove <strong>${valueEdit}</strong>? <br /> All related cards will also be removed!`}
            />
        </div>
    )
}

export default BoardContentColumn