import React, { useState } from "react";

const NavMenu = () => {
  const [isOpened, toggleStatus] = useState(false)
  const list = ['На главную', 'В корзину', 'Профиль']

  const handleMenuopener = () => {
    toggleStatus(prevState => !prevState)
  }

  const handleActive = (e) => {
    e.target.classList.add('active')
  }

  const handleInactive = (e) => {
    e.target.classList.remove('active')
  }

  return (
    <div className="p-3">
      <button className="btn btn-success" onClick={handleMenuopener}>Открыть навигацию</button>
      {isOpened && <ul className="list-group">{list.map((element, index) => <li
        onMouseLeave={(event) => handleInactive(event)}
        onMouseEnter={(event) => handleActive(event)}
        className="list-group-item"
        key={index}>
        {element} <a style={{color: "black"}} href="/">GO</a></li>)}</ul>}
    </div>
  )
}

export default NavMenu