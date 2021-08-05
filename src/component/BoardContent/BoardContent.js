import React from 'react';
import BoarcContentColumn from '../BoardContentColumn/BoarcContentColumn';
import './BoardContent.scss';

function BoardContent(props) {
    return (
        <div className="trello__container">
            <div className="trello__colums">
                <BoarcContentColumn />
                <BoarcContentColumn />
                <BoarcContentColumn />
                <BoarcContentColumn />
            </div>
        </div>
    )
}

export default BoardContent

