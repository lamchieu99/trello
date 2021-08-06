import React, { useEffect, useState } from 'react';
import BoarcContentColumn from 'component/BoardContentColumn/BoarcContentColumn';
import {initData} from 'actions/initData'
import { isEmpty } from 'lodash';
import {mapOrder} from 'utilities/sorts'
import './BoardContent.scss';

function BoardContent(props) {
    const [board, setBoad] = useState([]);
    const [columns, setColumns] = useState({});
    

    useEffect(() => {
        const boardFromDB = initData.boards.find(board => board.id === "board-1")
        if(boardFromDB) {
            setBoad(boardFromDB);

            //sort column  
            setColumns(mapOrder(boardFromDB.columns, boardFromDB.columnOrder, 'id'));
        }
    }, [])

    if(isEmpty(board)) {
        return <div className="not-found">Board Not Found</div>
    }


    return (
        <div className="trello__container">
            <div className="trello__colums">
                {columns.map((column, index) => 
                    <BoarcContentColumn key ={index} column = {column}/>
                )}
            </div>
        </div>
    )
}

export default BoardContent

