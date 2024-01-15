const basket = JSON.parse(localStorage.getItem("basket")) || [];
const basket_counter = document.querySelector(".navbar-pc__notify");

handle_empty_basket();
add_products_to_html();

let total_price = 0;
const products_prices = document.querySelectorAll(".list-item__price-new");
const product_currency = products_prices.length > 0 ? 
    products_prices[0].textContent.replace(/\d/g, "") : "";

set_products_prices(products_prices);
update_basket_counter();
listen_buttons_delete();
listen_change_product_count();

function handle_empty_basket() {
    if (basket.length == 0) {
        const empty_basket_html = `
            <p class="section-header" style="text-align: center;">Корзина пуста</p>
        `;
        
        document
          .querySelector("main")
          .insertAdjacentHTML("beforeend", empty_basket_html);
 
        document.querySelector(".basket-form__sidebar").remove();
    }
}

function add_products_to_html() {
    const div_products = document.querySelector(".accordion__list > div");
    
    for (const product of basket) {
      set_product_count(product);
      div_products.insertAdjacentHTML("beforeend", get_product_html(product));
    }
}

function set_product_count(product) {
    if (!product.hasOwnProperty("count")) {
      product["count"] = 1;
    }
}

function get_product_html(product) {
  return `
  <div class="accordion__list-item list-item j-b-basket-item" data-link="{include tmpl=&#39;basketItemInStockTmpl&#39;}">
    <div class="list-item__wrap" style="display: flex;">
        <div class="list-item__good">
            <p class="img-plug list-item__good-img j-product-popup">
                <img loading="lazy" src="/media/${product['image']}" style="width: 96px;">
            </p>
            <div class="list-item__good-info good-info">
                <script type="jsv#478^"></script>
                <script type="jsv/478^"></script>
                <p class="good-info__title j-product-popup">
                    <span class="good-info__good-name">
                        <script type="jsv#479^"></script>
                        ${product['name']}
                        <script type="jsv/479^"></script>
                    </span>
                </p>
                <div class="good-info__properties hide">
                </div>
                <div class="good-info__seller seller j-suppliers-info hide-mobile" data-nm="12104954"></div>
                <div class="good-info__properties good-info__properties--variable">
                </div>
                <script type="jsv#484^"></script>
                <script type="jsv/484^"></script>
                <script type="jsv#923_"></script>
                <div class="good-info__badge-wrap">
                </div>
                <script type="jsv/923_"></script>
            </div>
        </div>
        <div class="list-item__count count">
            <div class="count__wrap">
                <div class="count__input-number">
                    <button type="button" class="count__minus minus"
                        data-link="class{merge: quantity &lt;= minQuantity toggle=&#39;disabled&#39;}"
                        aria-label="Уменьшить количество"></button>
                    <p class="in_tb j-tb-qnt count__numeric ignore">${product['count']}</p>
                    <button type="button" class="count__plus plus"
                        data-link="class{merge: quantity == maxQuantity toggle=&#39;disabled&#39;}"
                        aria-label="Увеличить количество"></button>
                </div>
            </div>
        </div>
        <script type="jsv#486^"></script>
        <script type="jsv#924_"></script>
        <script type="jsv#925_"></script>
        <div class="list-item__price">
            <div class="list-item__price-new" data-link="{formatMoneyAnim priceSumWithCouponAndDiscount}"
                data-jsv="#490^/490^">${Number(product['price'])}&nbsp;₽</div>
            <script type="jsv#485^"></script>
            <script type="jsv#926_"></script>
            <script type="jsv/926_"></script>
            <script type="jsv/485^"></script>
            <div class="list-item__btn btn"><button class="btn__del j-basket-item-del" type="button"> <span> Удалить
                    </span> </button> </div>
        </div>
        <script type="jsv/925_"></script>
        <script type="jsv/924_"></script>
        <script type="jsv/486^"></script>
    </div>
    <script type="jsv/918_"></script>
  </div>`;
}

function set_products_prices(products_prices) {
    if (products_prices.length == 0) {
        return;
    }

    for (let i = 0; i < products_prices.length; i++) {
        const updated_price = basket[i]["count"] * basket[i]["price"];

        products_prices[i].textContent = updated_price + product_currency;  
        total_price += updated_price;
    }

    document.querySelector(".total_price").textContent = total_price + product_currency;
}

function update_basket_counter() {
  basket_counter.textContent = basket.length;
}

function listen_buttons_delete() {
    const buttons_delete = document.querySelectorAll(".btn__del");

    for (const button_delete of buttons_delete) {
        button_delete.addEventListener("click", (event) => handle_button_delete_click(event));
    }
}

function handle_button_delete_click(event) {
    const product_object = get_clicked_product_object(event);

    product_object.div_product.remove();

    remove_product_localstorage(product_object.index);
    handle_empty_basket();
    update_basket_counter();
    
    if (basket.length > 0) {
        total_price -= product_object.price;
        document.querySelector(".total_price").textContent = total_price 
            + product_currency;   
    } 
}

function get_clicked_product_object(event) {
    const div_product =
      event.target.parentNode.parentNode.parentNode.parentNode.parentNode;
    const divs_products = [
      ...document.querySelectorAll(".accordion__list-item"),
    ];
    const index = divs_products.indexOf(div_product);
    const price =
      basket[index]["count"] * basket[index]["price"];

    return { div_product, index, price };
}

function remove_product_localstorage(product_index) {
  basket.splice(product_index, 1);
  localStorage.setItem("basket", JSON.stringify(basket));
}

function listen_change_product_count() {
    const buttons_count_plus = document.querySelectorAll(".count__plus");
    const buttons_count_minus = document.querySelectorAll(".count__minus");

    for (let i = 0; i < buttons_count_plus.length; i++) {
        buttons_count_plus[i].addEventListener("click", (event) => {
            const is_plus = true;
            change_product_count(event, is_plus);
        });

        buttons_count_minus[i].addEventListener("click", (event) => {
            const is_plus = false;
            change_product_count(event, is_plus);
        });
    }
}

function change_product_count(event, is_plus) {
    const product_object = get_clicked_product_object(event);
    const product_counter =
      document.querySelectorAll(".in_tb")[product_object.index];
    const product_counter_num = Number(product_counter.textContent);

    if (product_counter_num == 1 && !is_plus) {
      return;
    }

    product_counter.textContent = is_plus ? product_counter_num + 1 : product_counter_num - 1;
    basket[product_object.index]["count"] = Number(product_counter.textContent);
    localStorage.setItem("basket", JSON.stringify(basket));

    update_product_price(product_object.index);
    update_total_price(product_object.price, product_object.index);
}

function update_product_price(product_index) {
  const products_prices = document.querySelectorAll(".list-item__price-new");
  const product_price = products_prices[product_index];
  const updated_price =
    basket[product_index]["count"] * basket[product_index]["price"];

  product_price.textContent = updated_price + product_currency;
}

function update_total_price(original_product_price, product_index) {
  const product_price_difference =
    basket[product_index]["count"] * basket[product_index]["price"]
    - original_product_price;

  total_price += product_price_difference;

  document.querySelector(".total_price").textContent =
    total_price + product_currency;
}