function Footer() {
    return(
        <footer className="footer">
            <div className="container">
                <div className="footer__row">
                    <div className="footer__col">
                        <img className="footer__img" src="../../images/fulgur_fone.png"/>
                    </div>
                    <div className="footer__col">
                        <div className="footer__col-header">Фулгур</div>
                        <div><a href="#">О Нас</a></div>
                        <div><a href="#">Контакты</a></div>
                    </div>
                    <div className="footer__col">
                        <div className="footer__col-header">Продукты</div>
                        <div><a href="#">Металы</a></div>
                        <div><a href="#">Припои</a></div>
                    </div>
                    <div className="footer__col">
                        <div className="footer__col-header">Политика конфиденциальности</div>
                        <div><p className="footer__text">Любое использование материалов с сайта запрещено без письменного разрешения администрации сайта.</p></div>
                        <div className="footer__text-end">Copyrights © 2023. Все права защищены</div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

const root = ReactDOM.createRoot(document.querySelector('#footer'))
root.render(<Footer/>)