import { initData } from 'actions/initData'
import BoarcContentColumn from 'component/BoardContentColumn/BoardContentColumn'
import { isEmpty } from 'lodash'
import React, { useEffect, useRef, useState } from 'react'
import { Col, Container as BootstrapContainer, Form, Row } from 'react-bootstrap'
import { FaPlus, FaTimes } from 'react-icons/fa'
import { Container, Draggable } from 'react-smooth-dnd'
import { applyDrag } from 'utilities/drapDrop'
import { mapOrder } from 'utilities/sorts'
import './BoardContent.scss'

function BoardContent() {
    const [board, setBoad] = useState([])
    const [columns, setColumns] = useState({})
    const [openAdd, setOpenAdd] = useState(false)
    const [valueColumn, setValueColumn] = useState('')
    const newColumnInputRef = useRef(null)

    //get data from api
    useEffect(() => {
        const boardFromDB = initData.boards.find(board => board.id === 'board-1')
        if (boardFromDB) {
            setBoad(boardFromDB)

            setColumns(mapOrder(boardFromDB.columns, boardFromDB.columnOrder, 'id'))
        }
    }, [])

    useEffect(() => {
        if (newColumnInputRef && newColumnInputRef.current) {
            newColumnInputRef.current.focus(),
            newColumnInputRef.current.select()
        }
    }, [openAdd])


    if (isEmpty(board)) {
        return <div className="not-found">Board Not Found</div>
    }

    //Drag columns
    const onColumnDrop = (dropResult) => {
        let newColumns = [...columns]
        newColumns = applyDrag(newColumns, dropResult)

        let newBoard = { ...board }
        newBoard.columnOrder = newColumns.map(column => column.id)
        newBoard.columns = newColumns

        setColumns(newColumns)
        setBoad(newBoard)
    }

    //Drag task
    const onCardDrop = (columnId, dropResult) => {
        if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
            let newColumn = [...columns]
            let currentColumn = newColumn.find(column => column.id === columnId)
            currentColumn.tasks = applyDrag(currentColumn.tasks, dropResult)
            currentColumn.taskOrder = currentColumn.tasks.map(task => task.id)
            setColumns(newColumn)
        }
    }

    //Add value
    const toggleOpen = () => {
        setOpenAdd(!openAdd)
    }

    const changeValue = (e) => {
        setValueColumn(e.target.value)

    }

    const addValue = () => {
        if (!valueColumn) {
            newColumnInputRef.current.focus()
            return
        }

        const newColumnToAdd = {
            id: Math.random().toString(36).substr(2, 5),
            boardId: board.id,
            title: valueColumn.trim(),
            taskOrder: [],
            tasks: []
        }

        // console.log(columns)
        let newColumns = [...columns]
        newColumns.push(newColumnToAdd)

        // console.log(newColumns)
        let newBoard = { ...board }
        newBoard.columnOrder = newColumns.map(column => column.id)
        newBoard.columns = newColumns

        setColumns(newColumns)
        setBoad(newBoard)
        setValueColumn('')
        console.log()
    }

    //update column
    const deleteAllColumn = (columnDelete) => {
        const columnIdUpdate = columnDelete.id

        let newColumns = [...columns]
        const columIndexUpdate = newColumns.findIndex(i => i.id === columnIdUpdate)
        if (columnDelete._destroy) {
            newColumns.splice(columIndexUpdate, 1)
        } else {
            newColumns.splice(columIndexUpdate, 1, columnDelete)
        }
        let newBoard = { ...board }
        newBoard.columnOrder = newColumns.map(column => column.id)
        newBoard.columns = newColumns

        setColumns(newColumns)
        setBoad(newBoard)
    }

    return (
        <div className="trello__container">
            <div className="trello__colums">
                <Container
                    orientation="horizontal"
                    onDrop={onColumnDrop}
                    dragHandleSelector=".column-drag-handle"
                    getChildPayload={index => columns[index]}
                    dropPlaceholder={{
                        animationDuration: 150,
                        showOnTop: true,
                        className: 'column-drop-preview'
                    }}
                >
                    {columns.map((column, index) =>
                        <Draggable key={index}>
                            <BoarcContentColumn column={column} onCardDrop={onCardDrop} deleteAllColumn={deleteAllColumn} />
                        </Draggable>
                    )}
                </Container>

                <BootstrapContainer className="trello__bootstrap">
                    {!openAdd &&
                        <Row >
                            <Col className="board__addTaks">
                                <button className="add__newTaks" onClick={toggleOpen}><FaPlus /></button> Add another card
                            </Col>
                        </Row>
                    }
                    {openAdd &&
                        <Row >
                            <Col className="board__addTaks">
                                <Form.Control size="sm" type="text" placeholder="Enter column title..." className="board__enter--new"
                                    ref={newColumnInputRef}
                                    value={valueColumn}
                                    onChange={changeValue}
                                    onKeyDown={(e) => (e.key === 'Enter') && addValue()}
                                    as="textarea"
                                />

                                <button className="button__delete" onClick={toggleOpen}><FaTimes /></button>

                            </Col>
                        </Row>
                    }
                </BootstrapContainer>
            </div>
        </div>
    )
}

export default BoardContent

