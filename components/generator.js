async function GenerateProductsLinks(host, port, selector) {
  let response = await fetch(`http://${host}:${port}/api/products`);
  let products = await response.json();

  products.forEach((product) => {
    let link = document.createElement("a");
    link.setAttribute("href", "#");
    link.innerHTML = product.name;

    if (product.name == selector)
      link.classList.add("checked")

    document
      .getElementsByClassName("links__table-products")[0]
      .appendChild(link);
  });

  return products;
}

async function GenerateProductTypesLinks(host, port, id, selector) {
  response = await fetch(
    `http://${host}:${port}/api/producttypes?productid=${id}`
  );
  let productTypes = await response.json();

  productTypes.forEach((pt) => {
    let link = document.createElement("a");
    link.setAttribute("href", "#");
    link.innerHTML = pt.name;

    if (pt.name == selector)
      link.classList.add("checked")

    document.getElementsByClassName("links__table-items")[0].appendChild(link);
  });
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
    imgLink.setAttribute("href", "#");
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
