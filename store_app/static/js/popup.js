let product_element = undefined;

async function listen_products_click() {
  const products_elements = document.querySelectorAll(
    ".product-card__top-wrap"
  );

  for (let i = offset; i < products_elements.length; i++) {
    products_elements[i].addEventListener(
      "click",
      async () => await handle_product_click(products_elements[i])
    );
  }
}

async function handle_product_click(product_element) {
  await add_popup(product_element);
  await add_gray_background();
  await listen_remove_popup();
  await lock_scroll();
}

async function add_popup(_product_element) {
  product_element = _product_element;
  const product_id = product_element.dataset.nmId;
  const product_parent_element = product_id
    ? product_element
    : product_element.parentNode.parentNode;
  const product = await get_product(product_parent_element);
  const popup_html = await get_popup_html(product);

  document.querySelector("body").insertAdjacentHTML("afterbegin", popup_html);

  check_popup_product_in_basket(product.id);
}

async function get_popup_html(product) {
  return `
    <div data-nm-id="${
      product.id
    }" class="popup i-popup-same-part-kt j-product-popup shown"
        style="z-index: 301; opacity: 1; display: block; top: 50%;left: 50%;transform: translate(-50%, -50%);height: 100%;overflow: auto;"><p
            class="j-close popup__close close"></p>
        <div class="content">
            <div class="product"
                data-link="     {on 'click' '.j-find-similar' $analitic.proceedAndSave 'ISP'}     class{merge: selectedNomenclature^adult &amp;&amp; !$adult^isConfirmed toggle='for-adults'}"
                id="bc9f57a6-5438-2ab4-e92a-4d260b2be65b" data-jsv="#680^/680^#681^/681^#682^/682^">
                <div class="product__slider-wrap">
                    <div class="product__slider"
                        data-link="{on $adult.proceedIfAdultConfirmed selectedNomenclature^adult null}{include galleryModel tmpl=galleryModel.template}"
                        data-jsv="#684^/684^">
                        <div id="61eed013-37b1-5b5b-6e24-e9be8f1b1f10" class="sw-slider-photo-product">
                            <div class="sw-slider-photo-product__wrap">
                                <div
                                    class="swiper-container j-sw-photo-product-popup swiper-container-initialized swiper-container-horizontal">
                                    <ul class="swiper-wrapper" data-jsv-df=""
                                        style="transform: translate3d(0px, 0px, 0px);">
                                        <li data-jsv="#693^#1174_#1175_#1176_"
                                            class="swiper-slide slide swiper-no-swiping swiper-slide-active"
                                            data-image-index="0">
                                            <div class="slide__content img-plug">
                                                <div class="zoom-image-container">
                                                    <img class="j-zoom-image" width="900" height="1200"
                                                        loading="lazy"
                                                        src=/media/${
                                                          product.image
                                                        }
                                                        data-jsv="#701^/701^">
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-nm-id="${product.id}" class="product__content">
                    <div class="product__header-wrap"> <div class="product__header j-product-title"
                            data-link="href{urlForGood:selectedNomenclature^nmId true (targetInfo &amp;&amp; targetInfo.targetUrl) null isAdv}"
                            >
                            <span data-link="text{:selectedNomenclature^goodsName}">${
                              product.name
                            }</span> </div>
                    </div>
                    

                    <div data-nm-id="${product.id}" class="product__info-wrap"
                        data-link="class{merge: disableFullButton toggle='product__info-wrap--full'}">
                        <div data-link="{include priceModel tmpl=priceModel.template}">
                            <div class="price-block">
                                <div class="price-block__content">
                                    <div class="price-block__price-group">
                                        <p class="price-block__price-wrap "> <span class="price-block__price">
                                                <ins class="price-block__final-price"> ${Number(
                                                  product.price
                                                )}&nbsp;₽ </ins> </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p style="color: black;">${product.description}</p>
                        </div>
                        <div class="product__order" style="margin-top: 16px;" data-link="{include orderModel tmpl=orderModel.template}"><div class="order btn-order" data-link="class{merge: isDigital toggle='hide'}"><button class="btn-main btn-popup" data-link="class{merge: !showAddToBasketBtn() toggle='hide'}{on $adult.proceedIfAdultConfirmed adult addToBasket #data}" aria-label="Добавить в корзину" data-jsv="#963^/963^">        <span class="hide-mobile" data-link="text{:isPreorder ? 'Предзаказ' : 'Добавить в корзину'}class{merge:~short toggle='hide'}">Добавить в корзину</span>        <span class="hide-desktop" data-link="text{:isPreorder ? 'Предзаказ' : 'В корзину'}class{merge:!~short toggle='hide-desktop'}">В корзину</span>    </button></div></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
}

function check_popup_product_in_basket(product_id) {
  const button_basket_div = document.querySelector(".btn-order");

  if (basket_products_id.has(Number(product_id))) {
    change_button_in_basket(button_basket_div.querySelector(".btn-popup"));
  } else {
    button_basket_div.addEventListener("click", save_popup_product_id);
  }
}

function save_popup_product_id(event) {
  const button_basket_div = document.querySelector(".btn-order");
  let product_basket_button =
    product_element.parentNode.querySelector(".product-card__add-basket") ||
    get_product_basket_button_if_search();

  const button_basket = event.currentTarget
    .closest(".btn-order")
    .querySelector(".btn-popup");

  save_product_id(button_basket);
  change_button_in_basket(product_basket_button);

  button_basket_div.removeEventListener("click", save_popup_product_id);
  product_basket_button.removeEventListener("click", save_product_id);
}

function get_product_basket_button_if_search() {
  const popup_id = document.querySelector(".popup").dataset.nmId;
  const products_elements = document.querySelectorAll(".main-page__product");

  for (let product_element of products_elements) {
    if (product_element.dataset.nmId == popup_id) {
      product_basket_button = product_element.querySelector(
        ".product-card__add-basket"
      );

      return product_basket_button;
    }
  }
}

async function add_gray_background() {
  const popup_element = document.querySelector(".popup");
  const gray_background_element_str = `
            <div class="overlay initially-hidden j-custom-overlay" style="z-index: 300;"></div>
        `;
  popup_element.insertAdjacentHTML("afterend", gray_background_element_str);
}

async function listen_remove_popup() {
  const popup_element = document.querySelector(".popup");
  const close_popup_element = popup_element.querySelector(".j-close");
  const gray_background_element = document.querySelector(".overlay");

  close_popup_element.addEventListener("click", () =>
    remove_popup(popup_element)
  );
  gray_background_element.addEventListener("click", () =>
    remove_popup(popup_element)
  );
}

async function remove_popup(popup_element) {
  const overlay_element = document.querySelector(".overlay");

  popup_element.remove();
  document.body.classList.remove("body--overflow");
  overlay_element.remove();
}

async function lock_scroll() {
  document.body.classList.add("body--overflow");
}
