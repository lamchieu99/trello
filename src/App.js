import React from 'react'
import './App.scss'
import AppbarHeader from './component/AppbarHeader/AppbarHeader'
import BoardContent from './component/BoardContent/BoardContent'

function App() {
    return (
        <div className="trello">
            <AppbarHeader />
            <BoardContent />
        </div>
    )
}

export default App