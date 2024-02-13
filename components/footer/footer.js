function Footer() {
    return(
        <footer className="footer">
            <div className="container">
                <div className="footer__row">
                    <div className="footer__col">
                        <img className="footer__img" src="../../images/fulgur0_invert.png"/>
                    </div>
                    <div className="footer__col">
                        <div className="footer__col-header">Фулгур</div>
                        <div><a href="#">О Нас</a></div>
                        <div><a href="#">Статьи</a></div>
                        <div><a href="#">Контакты</a></div>
                    </div>
                    <div className="footer__col">
                        <div className="footer__col-header">Продукты</div>
                        <div><a href="#">Металы</a></div>
                        <div><a href="#">Припои</a></div>
                    </div>
                    <div className="footer__col">
                        <div className="footer__col-header">Социальные сети</div>
                        <div><a className="footer__col-social" href="#">Youtube<img src='https://gk-fulgur.ru/images/youtube.png'/></a></div>
                        <div><a className="footer__col-social" href="#">Telegram<img src='https://gk-fulgur.ru/images/telegram.png'/></a> </div>
                        <div><a className="footer__col-social" href="#">Whatsup<img src='https://gk-fulgur.ru/images/whatsapp.png'/></a></div>
                        <div><a className="footer__col-social" href="#">VK<img src='https://gk-fulgur.ru/images/vk.png'/></a></div>
                    </div>
                    <div className="footer__col">
                        <div className="footer__col-header">Политика конфиденциальности</div>
                        <div><p className="footer__text">Любое использование материалов с сайта запрещено без письменного разрешения администрации сайта.</p></div>
                        <div className="footer__text-end">Copyrights © 2024. Все права защищены</div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

const root = ReactDOM.createRoot(document.querySelector('#footer'))
root.render(<Footer/>)