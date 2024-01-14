const basket = JSON.parse(localStorage.getItem("basket"));

for (const product of basket) {
    add_product_to_html(product);
}

function add_product_to_html(product) {
    const div_products = document.querySelector(".accordion__list > div");

    set_product_count(product);
    div_products.insertAdjacentHTML("afterbegin", get_product_html(product));
}

function set_product_count(product) {
    if (!product.hasOwnProperty("count")) {
      product["count"] = 1;
    }
}

function get_product_html(product) {
  return `
  <div class="accordion__list-item list-item j-b-basket-item" data-link="{include tmpl=&#39;basketItemInStockTmpl&#39;}">
    <div class="list-item__wrap">
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
                    <button type="button" class="count__minus minus disabled"
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