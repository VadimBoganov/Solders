function Header() {
    return (
        <header className="header">
            <div className="container">
                <div className="header__row">
                    <div className="header__logo">
                        <img className="header__logo-img" src="../../images/invert.png" />
                    </div>
                    <button className="header__hamburger" onClick={toggleMenu}>
                        <span className="material-symbols-outlined">menu</span>
                        <span className="material-symbols-outlined disable">close</span>
                    </button>
                    <nav className="header__nav">
                        <ul>
                            <li><a href="../../">Главная</a></li>
                            <div className="header__dropdown">
                                <button className="header__dropdown-btn">Продукты <img src="../../images/dropdown.png" /></button>
                                <div className="header__dropdown-content">
                                    <a href="/metali">Металы</a>
                                    <a href="/pripoi">Припои</a>
                                    <a href="/pripoi">Специальные изделия</a>
                                </div>
                            </div>
                            <li><a className="header__link-3rd" href="../../#Our">О нас</a></li>
                            <li><a href="../../#contacts">Контакты</a></li>
                            <li><a href="#">Статьи</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

const root = ReactDOM.createRoot(document.querySelector('#header'))
root.render(<Header />)

function toggleMenu() {
    const menu = document.querySelector(".header__nav");
    const hamburger = document.querySelector(".header__hamburger");
    const menuIcon = hamburger.firstChild
    const closeIcon = document.querySelector(".disable");

    if (menu.classList.contains("header__nav-show")) {
        menu.classList.remove("header__nav-show");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        menu.classList.add("header__nav-show");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}
