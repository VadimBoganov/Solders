async function GenerateHeader() {
  let html = `<header class="header">
    <div class="container">
        <div class="header__row">
            <div class="header__logo">
                <img class="header__logo-img" src="../../images/invert.png" />
            </div>
            <button class="header__hamburger" onClick={toggleMenu}>
                <span class="material-symbols-outlined">menu</span>
                <span class="material-symbols-outlined disable">close</span>
            </button>
            <nav class="header__nav">
                <ul>
                    <li><a href="../../">Главная</a></li>
                    <div class="header__dropdown">
                        <button class="header__dropdown-btn">Продукты <img src="../../images/dropdown.png" /></button>
                        <div class="header__dropdown-content">
                            <a href="/metali">Металы</a>
                            <a href="/pripoi">Припои</a>
                            <a href="/pripoi">Специальные изделия</a>
                        </div>
                    </div>
                    <li><a class="header__link-3rd" href="../../#Our">О нас</a></li>
                    <li><a href="../../#contacts">Контакты</a></li>
                    <li><a href="#">Статьи</a></li>
                </ul>
            </nav>
        </div>
    </div>
  </header>`      

  document.getElementById('header').innerHTML += html
}

async function GenerateFooter() {
  const html = `<footer class="footer">
      <div class="container">
          <div class="footer__row">
              <div class="footer__col">
                  <img class="footer__img" src="../../images/fulgur0_invert.png"/>
              </div>
              <div class="footer__col">
                  <div class="footer__col-header">Фулгур</div>
                  <div><a href="../../#Our">О Нас</a></div>
                  <div><a href="../../#contacts">Контакты</a></div>
                  <div><a href="#">Статьи</a></div>
              </div>
              <div class="footer__col">
                  <div class="footer__col-header">Продукты</div>
                  <div><a href="/metali">Металы</a></div>
                  <div><a href="/pripoi">Припои</a></div>
              </div>
              <div class="footer__col">
                  <div class="footer__col-header">Социальные сети</div>
                  <div><a class="footer__col-social" href="#">Youtube<img src='https://gk-fulgur.ru/images/youtube.png'/></a></div>
                  <div><a class="footer__col-social" href="#">Telegram<img src='https://gk-fulgur.ru/images/telegram.png'/></a> </div>
                  <div><a class="footer__col-social" href="#">Whatsup<img src='https://gk-fulgur.ru/images/whatsapp.png'/></a></div>
                  <div><a class="footer__col-social" href="#">VK<img src='https://gk-fulgur.ru/images/vk.png'/></a></div>
              </div>
              <div class="footer__col">
                  <div class="footer__col-header">Политика конфиденциальности</div>
                  <div><p class="footer__text">Любое использование материалов с сайта запрещено без письменного разрешения администрации сайта.</p></div>
                  <div class="footer__text-end">Copyrights © 2024. Все права защищены</div>
              </div>
          </div>
      </div>
    </footer>`

    document.getElementById("footer").innerHTML += html
}

async function GenerateProductsLinks(host, port, selector) {
  let response = await fetch(`http://${host}:${port}/api/products`);
  let products = await response.json();

  products.forEach((product) => {
    let link = document.createElement("a");
    link.setAttribute("href", product.link);
    link.innerHTML = product.name;

    if (product.name == selector)
      link.classList.add("checked")

    document
      .getElementsByClassName("links__table-products")[0]
      .appendChild(link);
  });

  return products;
}

async function GenerateProductTypesLinks(host, port, productId, selector) {
  let productTypes = await GetProductTypes(host, port)

  productTypes.filter((pt) => pt.productId === productId).forEach((pt) => {
    let link = document.createElement("a");
    link.setAttribute("href", pt.link);
    link.innerHTML = pt.name;

    if (pt.name == selector)
      link.classList.add("checked")

    document.getElementsByClassName("links__table-items")[0].appendChild(link);
  });
}

async function GenerateProductItemsList(host, port, productId) {
  let productTypes = await GetProductTypes(host, port)
  let productSubTypes = await GetProductSubTypes(host, port)
  let productItems = await GetProductItems(host, port)
  let items = await GetItems(host, port)

  productTypes.filter((pt) => pt.productId === productId).forEach((pt) => {
    let subTypes = productSubTypes.filter((pst) => pst.productTypeId === pt.id)
    let h = document.createElement("h3")
    h.innerHTML += `${pt.name}:`
    document.getElementsByClassName("links__product-items")[0].appendChild(h)
    
    productItems.filter((pi) => pi.productTypeId === pt.id).forEach((pi) => {
      let link = document.createElement("a");
      link.setAttribute("href", pi.link);
      
      let innerSelector = document.createElement("div")
      innerSelector.classList.add("product-item__data")
      
      let subType = subTypes.filter((st) => st.id === pi.productSubTypeId)[0]
      innerSelector.innerHTML += `${pi.name } <span>${subType !== undefined ? subType.name : "" }</span>`

      let itemSelector = document.createElement("div")
      itemSelector.classList.add("item__data")

      items.filter((i) => i.productItemId === pi.id).forEach((i) => {
        itemSelector.innerHTML += ` ${i.name}`
      })
      
      let detailsLink = document.createElement("div")
      detailsLink.classList.add('link__details')
      detailsLink.innerHTML += "Подробнее"

      link.appendChild(innerSelector)
      link.appendChild(itemSelector)
      link.appendChild(detailsLink)
      document.getElementsByClassName("links__product-items")[0].appendChild(link)
    })

    subTypes.forEach((st) => {
      
    })
  })
}

async function GenerateItems(host, port, selector) {
  response = await fetch(`http://${host}:${port}/api/productitems`);
  let productItems = await response.json();
  let productItem = productItems.filter((item) => item.name === selector)[0];

  response = await fetch(
    `http://${host}:${port}/api/items/${productItem.id}`
  );
  let items = await response.json();

  items.forEach((item) => {
    let titleDiv = document.createElement("div");
    titleDiv.classList.add("card__title");
    titleDiv.innerHTML = item.name;

    let priceDiv = document.createElement("div");
    priceDiv.classList.add("card__price");
    priceDiv.innerHTML =
      `Цена ${item.isFullPrice ? 'от ' : ''}` +
      '<span class="card__price-span">' +
      item.price +
      " &#8381" +
      "</span>";

    let descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("card__description");

    descriptionDiv.appendChild(titleDiv);
    descriptionDiv.appendChild(priceDiv);

    let bodyDiv = document.createElement("div");
    bodyDiv.classList.add("card__body");

    bodyDiv.appendChild(descriptionDiv);

    let button = document.createElement("button");
    button.classList.add("card__button");
    button.setAttribute("type", "button");
    button.innerHTML = "Заказать";

    bodyDiv.appendChild(button);

    let img = document.createElement("img");
    img.setAttribute("src", item.imageUrl);
    img.setAttribute("alt", item.name);
    img.classList.add("card__img");

    let imgLink = document.createElement("a");
    imgLink.setAttribute("href", item.link);
    imgLink.appendChild(img)

    let containerDiv = document.createElement("div");
    containerDiv.classList.add("card__container");

    containerDiv.appendChild(imgLink);
    containerDiv.appendChild(bodyDiv);

    let card = document
      .getElementsByClassName("body__cards")[0]
      .appendChild(containerDiv);
  });
}

async function GetProductTypes(host, port) {
  response = await fetch(`http://${host}:${port}/api/producttypes`);
  return await response.json();
}

async function GetProductSubTypes(host, port) {
  let response = await fetch(`http://${host}:${port}/api/productsubtypes`)
  return await response.json();
}

async function GetProductItems(host, port) {
  let response = await fetch(`http://${host}:${port}/api/productitems`)
  return await response.json()
}

async function GetItems(host, port) {
  let response = await fetch(`http://${host}:${port}/api/items`)
  return await response.json()
}