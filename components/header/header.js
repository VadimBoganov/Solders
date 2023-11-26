function Header() {
    return(
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <div className="header__logo">
                        <img src="https://gk-fulgur.ru/images/fulgur1.jpg"/>
                    </div>
                    <nav className="header__nav">
                        <ul>
                            <li><a href="#!">Главная</a></li>
                            <div className="header__dropdown">
                                <button className="header__dropdown-btn">Продукты <img src="../../images/dropdown.png"/></button>
                                <div className="header__dropdown-content">
                                    <a href="#">Металы</a>
                                    <a href="#">Припои</a>
                                </div>
                            </div>
                            <li><a href="#">Контакты</a></li>
                            <li><a href="#">О нас</a></li>
                            <li><a className="header__nav-order" href="#">Заказать</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

const root = ReactDOM.createRoot(document.querySelector('#header'))
root.render(<Header/>)
