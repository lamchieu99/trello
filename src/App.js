import './App.scss';
import { FaBuromobelexperte, FaSearch, FaHouseDamage, FaInfoCircle, FaRegBell, FaPlus } from "react-icons/fa";

function App() {
  return (
    <div className="trello">
      <header className="trello__header">
        <div className=" header__left">
          <button className="header__hover"> <FaBuromobelexperte /></button>
          <button className="header__hover"> <FaHouseDamage /></button>
          <div className=" header__input">
            <input type="text" placeholder="Tìm kiếm..." />
            <FaSearch className="icon__search" /></div>
        </div>
        <div className="header__center"></div>
        <div className="header__right">
          <button className="header__hover"><FaPlus /></button>
          <button className="header__hover">
            <FaInfoCircle />
          </button >
          <button className="header__hover"><FaRegBell /></button>
        </div>
      </header>
      <div className="trello__container">
        <div className="trello__colums">
          <div className="colums__content">
            <div className="board__title">Brainstorm</div>
            <div className="board__content">
              <ul>
                <li><img src="https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg" alt="abc" />Title:</li>
                <li>Add what you'd like to work on below</li>
                <li>Add what you'd like to work on below</li>
                <li>Add what you'd like to work on below</li>
                <li>Add what you'd like to work on below</li>
                <li>Add what you'd like to work on below</li>
                <li>Add what you'd like to work on below</li>
                <li>Add what you'd like to work on below</li>
                <li>Add what you'd like to work on below</li>
                <li>Add what you'd like to work on below</li>
                <li>Add what you'd like to work on below</li>
                <li>Add what you'd like to work on below</li>
                <li>Add what you'd like to work on below</li>
                <li>Add what you'd like to work on below</li>
                <li>Add what you'd like to work on below</li>
              </ul>
            </div>
            <div className="board__add"><button className="add__card"><FaPlus /></button> Add another card</div>
          </div>
          <div className="colums__content">
            <div className="board__title">Brainstorm</div>
            <div className="board__content">
              <ul>
                <li><img src="https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg" alt="abc" />Title:</li>
                <li>Add what you'd like to work on below</li>
                <li>Add what you'd like to work on below</li>
                <li>Add what you'd like to work on below</li>
              </ul>
            </div>
            <div className="board__add"><button className="add__card"><FaPlus /></button> Add another card</div>
          </div>
          <div className="colums__content">
            <div className="board__title">Brainstorm</div>
            <div className="board__content">
              <ul>
                <li><img src="https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg" alt="abc" />Title:</li>
                <li>Add what you'd like to work on below</li>
                <li>Add what you'd like to work on below</li>
                <li>Add what you'd like to work on below Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, veritatis consectetur tenetur totam magni laudantium ipsum recusandae. Autem veniam ducimus, odit asperiores, explicabo cupiditate fugit, debitis quaerat dignissimos quasi praesentium?</li>
              </ul>
            </div>
            <div className="board__add"><button className="add__card"><FaPlus /></button> Add another card</div>
          </div>
          
        </div>
      </div>

    </div>
  );
}

export default App;