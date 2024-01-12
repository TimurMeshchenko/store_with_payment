function listen_product_click() {
  const products_elements = document.querySelectorAll(".product-card__top-wrap");

  for (let product_element of products_elements) {
    product_element.addEventListener("click", () => {
      show_popup(product_element);
      lock_scroll();
      add_gray_background();
    });
  }
}

function show_popup(product_element) {
    const popup_html = get_popup_html();
    
    document.querySelector("body").insertAdjacentHTML("afterbegin", popup_html);
}

function get_popup_html() {
  return `
    <div class="popup i-popup-same-part-kt j-product-popup shown"
        style="z-index: 301; opacity: 1; display: block; top: 50%;left: 50%;transform: translate(-50%, -50%);height: 100%;"><a href="#"
            class="j-close popup__close close"></a>
        <div class="content">
            <script type="jsv#1169_"></script>
            <script type="jsv#679^"></script>
            <script type="jsv#1170_"></script>
            <div class="product"
                data-link="     {on 'click mouseenter mousedown' '.j-wba-card-item' cardCommonActionEventsWba}     {on 'click' '.j-find-similar' $analitic.proceedAndSave 'ISP'}     {on 'mouseenter elementInViewportEvent' '.j-wba-card-item-show' cardCommonShowEventsWba}     class{merge: selectedNomenclature^adult &amp;&amp; !$adult^isConfirmed toggle='for-adults'}"
                id="bc9f57a6-5438-2ab4-e92a-4d260b2be65b" data-jsv="#680^/680^#681^/681^#682^/682^">
                <div class="product__slider-wrap">
                    <div class="product__slider"
                        data-link="{on $adult.proceedIfAdultConfirmed selectedNomenclature^adult null}{include galleryModel tmpl=galleryModel.template}"
                        data-jsv="#684^/684^">
                        <script type="jsv#1173_"></script>
                        <div id="61eed013-37b1-5b5b-6e24-e9be8f1b1f10" class="sw-slider-photo-product">
                            <div class="sw-slider-photo-product__wrap">
                                <div
                                    class="swiper-container j-sw-photo-product-popup swiper-container-initialized swiper-container-horizontal">
                                    <ul class="swiper-wrapper" data-jsv-df=""
                                        style="transform: translate3d(0px, 0px, 0px);">
                                        <li data-jsv="#693^#1174_#1175_#1176_"
                                            class="swiper-slide slide swiper-no-swiping swiper-slide-active"
                                            data-image-index="0">
                                            <div class="slide__content img-plug j-wba-card-item"
                                                data-name-for-wba="Item_Photo">
                                                <script type="jsv#1177_"></script>
                                                <script type="jsv#685^"></script>
                                                <script type="jsv#1178_"></script>
                                                <div class="zoom-image-container">
                                                    <img class="j-zoom-image" width="900" height="1200"
                                                        loading="lazy"
                                                        data-link="src{:~tag.imageSrc}css-background-image{:('url(' + ~tag.bgImageSrc +')')}class{merge: ~tag.imageLoaded toggle='hide'}{on 'load' ~tag.renderCanvas}"
                                                        src="https://basket-05.wbbasket.ru/vol834/part83458/83458555/images/big/1.webp"
                                                        data-jsv="#701^/701^"
                                                        style="background-image: url(&quot;undefined&quot;);">
                                                    <canvas class="j-image-canvas"
                                                        data-link="class{merge: !~tag.imageLoaded toggle='hide'}{on 'mousemove' ~tag.renderZoom}{on 'mouseleave' ~tag.resetCanvas}"
                                                        data-jsv="#703^/703^#704^/704^" width="900"
                                                        height="1200"></canvas>
                                                </div>
                                                <script type="jsv/1178_"></script>
                                                <script type="jsv/685^"></script>
                                                <script type="jsv/1177_"></script>
                                            </div>
                                        </li>
                                        <li data-jsv="/1176_#1180_"
                                            class="swiper-slide slide swiper-no-swiping swiper-slide-next"
                                            data-image-index="1" style="width: 512px;">
                                            <div class="slide__content img-plug j-wba-card-item"
                                                data-name-for-wba="Item_Photo">
                                                <script type="jsv#1181_"></script>
                                                <script type="jsv#686^"></script>
                                                <script type="jsv#1182_"></script>
                                                <div class="zoom-image-container">
                                                    <img class="j-zoom-image hide" width="900" height="1200"
                                                        loading="lazy"
                                                        data-link="src{:~tag.imageSrc}css-background-image{:('url(' + ~tag.bgImageSrc +')')}class{merge: ~tag.imageLoaded toggle='hide'}{on 'load' ~tag.renderCanvas}"
                                                        src="https://basket-05.wbbasket.ru/vol834/part83458/83458555/images/big/2.webp"
                                                        data-jsv="#708^/708^"
                                                        style="background-image: url(&quot;undefined&quot;);">
                                                    <canvas class="j-image-canvas"
                                                        data-link="class{merge: !~tag.imageLoaded toggle='hide'}{on 'mousemove' ~tag.renderZoom}{on 'mouseleave' ~tag.resetCanvas}"
                                                        data-jsv="#710^/710^#711^/711^" width="900"
                                                        height="1200"></canvas>
                                                </div>
                                                <script type="jsv/1182_"></script>
                                                <script type="jsv/686^"></script>
                                                <script type="jsv/1181_"></script>
                                            </div>
                                        </li>
                                        <li data-jsv="/1180_#1184_" class="swiper-slide slide swiper-no-swiping"
                                            data-image-index="2" style="width: 512px;">
                                            <div class="slide__content img-plug j-wba-card-item"
                                                data-name-for-wba="Item_Photo">
                                                <script type="jsv#1185_"></script>
                                                <script type="jsv#687^"></script>
                                                <script type="jsv#1186_"></script>
                                                <div class="zoom-image-container">
                                                    <img class="j-zoom-image hide" width="900" height="1200"
                                                        loading="lazy"
                                                        data-link="src{:~tag.imageSrc}css-background-image{:('url(' + ~tag.bgImageSrc +')')}class{merge: ~tag.imageLoaded toggle='hide'}{on 'load' ~tag.renderCanvas}"
                                                        src="https://basket-05.wbbasket.ru/vol834/part83458/83458555/images/big/3.webp"
                                                        data-jsv="#715^/715^"
                                                        style="background-image: url(&quot;undefined&quot;);">
                                                    <canvas class="j-image-canvas"
                                                        data-link="class{merge: !~tag.imageLoaded toggle='hide'}{on 'mousemove' ~tag.renderZoom}{on 'mouseleave' ~tag.resetCanvas}"
                                                        data-jsv="#717^/717^#718^/718^" width="900"
                                                        height="1200"></canvas>
                                                </div>
                                                <script type="jsv/1186_"></script>
                                                <script type="jsv/687^"></script>
                                                <script type="jsv/1185_"></script>
                                            </div>
                                        </li>
                                        <li data-jsv="/1184_#1188_" class="swiper-slide slide swiper-no-swiping"
                                            data-image-index="3" style="width: 512px;">
                                            <div class="slide__content img-plug j-wba-card-item"
                                                data-name-for-wba="Item_Photo">
                                                <script type="jsv#1189_"></script>
                                                <script type="jsv#688^"></script>
                                                <script type="jsv#1190_"></script>
                                                <div class="zoom-image-container">
                                                    <img class="j-zoom-image hide" width="900" height="1200"
                                                        loading="lazy"
                                                        data-link="src{:~tag.imageSrc}css-background-image{:('url(' + ~tag.bgImageSrc +')')}class{merge: ~tag.imageLoaded toggle='hide'}{on 'load' ~tag.renderCanvas}"
                                                        src="https://basket-05.wbbasket.ru/vol834/part83458/83458555/images/big/4.webp"
                                                        data-jsv="#722^/722^"
                                                        style="background-image: url(&quot;undefined&quot;);">
                                                    <canvas class="j-image-canvas"
                                                        data-link="class{merge: !~tag.imageLoaded toggle='hide'}{on 'mousemove' ~tag.renderZoom}{on 'mouseleave' ~tag.resetCanvas}"
                                                        data-jsv="#724^/724^#725^/725^" width="900"
                                                        height="1200"></canvas>
                                                </div>
                                                <script type="jsv/1190_"></script>
                                                <script type="jsv/688^"></script>
                                                <script type="jsv/1189_"></script>
                                            </div>
                                        </li>
                                        <li data-jsv="/1188_#1192_" class="swiper-slide slide swiper-no-swiping"
                                            data-image-index="4" style="width: 512px;">
                                            <div class="slide__content img-plug j-wba-card-item"
                                                data-name-for-wba="Item_Photo">
                                                <script type="jsv#1193_"></script>
                                                <script type="jsv#689^"></script>
                                                <script type="jsv#1194_"></script>
                                                <div class="zoom-image-container">
                                                    <img class="j-zoom-image hide" width="900" height="1200"
                                                        loading="lazy"
                                                        data-link="src{:~tag.imageSrc}css-background-image{:('url(' + ~tag.bgImageSrc +')')}class{merge: ~tag.imageLoaded toggle='hide'}{on 'load' ~tag.renderCanvas}"
                                                        src="https://basket-05.wbbasket.ru/vol834/part83458/83458555/images/big/5.webp"
                                                        data-jsv="#729^/729^"
                                                        style="background-image: url(&quot;undefined&quot;);">
                                                    <canvas class="j-image-canvas"
                                                        data-link="class{merge: !~tag.imageLoaded toggle='hide'}{on 'mousemove' ~tag.renderZoom}{on 'mouseleave' ~tag.resetCanvas}"
                                                        data-jsv="#731^/731^#732^/732^" width="900"
                                                        height="1200"></canvas>
                                                </div>
                                                <script type="jsv/1194_"></script>
                                                <script type="jsv/689^"></script>
                                                <script type="jsv/1193_"></script>
                                            </div>
                                        </li>
                                        <li data-jsv="/1192_#1196_" class="swiper-slide slide swiper-no-swiping"
                                            data-image-index="5" style="width: 512px;">
                                            <div class="slide__content img-plug j-wba-card-item"
                                                data-name-for-wba="Item_Photo">
                                                <script type="jsv#1197_"></script>
                                                <script type="jsv#690^"></script>
                                                <script type="jsv#1198_"></script>
                                                <div class="zoom-image-container">
                                                    <img class="j-zoom-image hide" width="900" height="1200"
                                                        loading="lazy"
                                                        data-link="src{:~tag.imageSrc}css-background-image{:('url(' + ~tag.bgImageSrc +')')}class{merge: ~tag.imageLoaded toggle='hide'}{on 'load' ~tag.renderCanvas}"
                                                        src="https://basket-05.wbbasket.ru/vol834/part83458/83458555/images/big/6.webp"
                                                        data-jsv="#736^/736^"
                                                        style="background-image: url(&quot;undefined&quot;);">
                                                    <canvas class="j-image-canvas"
                                                        data-link="class{merge: !~tag.imageLoaded toggle='hide'}{on 'mousemove' ~tag.renderZoom}{on 'mouseleave' ~tag.resetCanvas}"
                                                        data-jsv="#738^/738^#739^/739^" width="900"
                                                        height="1200"></canvas>
                                                </div>
                                                <script type="jsv/1198_"></script>
                                                <script type="jsv/690^"></script>
                                                <script type="jsv/1197_"></script>
                                            </div>
                                        </li>
                                        <li data-jsv="/1196_#1200_" class="swiper-slide slide swiper-no-swiping"
                                            data-image-index="6" style="width: 512px;">
                                            <div class="slide__content img-plug j-wba-card-item"
                                                data-name-for-wba="Item_Photo">
                                                <script type="jsv#1201_"></script>
                                                <script type="jsv#691^"></script>
                                                <script type="jsv#1202_"></script>
                                                <div class="zoom-image-container">
                                                    <img class="j-zoom-image hide" width="900" height="1200"
                                                        loading="lazy"
                                                        data-link="src{:~tag.imageSrc}css-background-image{:('url(' + ~tag.bgImageSrc +')')}class{merge: ~tag.imageLoaded toggle='hide'}{on 'load' ~tag.renderCanvas}"
                                                        src="https://basket-05.wbbasket.ru/vol834/part83458/83458555/images/big/7.webp"
                                                        data-jsv="#743^/743^"
                                                        style="background-image: url(&quot;undefined&quot;);">
                                                    <canvas class="j-image-canvas"
                                                        data-link="class{merge: !~tag.imageLoaded toggle='hide'}{on 'mousemove' ~tag.renderZoom}{on 'mouseleave' ~tag.resetCanvas}"
                                                        data-jsv="#745^/745^#746^/746^" width="900"
                                                        height="1200"></canvas>
                                                </div>
                                                <script type="jsv/1202_"></script>
                                                <script type="jsv/691^"></script>
                                                <script type="jsv/1201_"></script>
                                            </div>
                                        </li>
                                        <li data-jsv="/1200_#1204_" class="swiper-slide slide swiper-no-swiping"
                                            data-image-index="7" style="width: 512px;">
                                            <div class="slide__content img-plug j-wba-card-item"
                                                data-name-for-wba="Item_Photo">
                                                <script type="jsv#1205_"></script>
                                                <script type="jsv#692^"></script>
                                                <script type="jsv#1206_"></script>
                                                <div class="zoom-image-container">
                                                    <img class="j-zoom-image hide" width="900" height="1200"
                                                        loading="lazy"
                                                        data-link="src{:~tag.imageSrc}css-background-image{:('url(' + ~tag.bgImageSrc +')')}class{merge: ~tag.imageLoaded toggle='hide'}{on 'load' ~tag.renderCanvas}"
                                                        src="https://basket-05.wbbasket.ru/vol834/part83458/83458555/images/big/8.webp"
                                                        data-jsv="#750^/750^"
                                                        style="background-image: url(&quot;undefined&quot;);">
                                                    <canvas class="j-image-canvas"
                                                        data-link="class{merge: !~tag.imageLoaded toggle='hide'}{on 'mousemove' ~tag.renderZoom}{on 'mouseleave' ~tag.resetCanvas}"
                                                        data-jsv="#752^/752^#753^/753^" width="900"
                                                        height="1200"></canvas>
                                                </div>
                                                <script type="jsv/1206_"></script>
                                                <script type="jsv/692^"></script>
                                                <script type="jsv/1205_"></script>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <script type="jsv/1173_"></script>
                    </div>
                    <div class="product__badge-wrap">
                        <p class="product__badge spec-action hide"
                            data-link="class{merge:(selectedNomenclature^promoText == null || selectedNomenclature^promoText == '')  toggle='hide'}style{:~getCustomPromoPanelStyle(selectedNomenclature^promoText)}">
                            <script type="jsv#674^"></script>
                            <script type="jsv#1171_"></script> <span class="spec-action__text"
                                data-link="text{:selectedNomenclature^promoText}"></span>
                            <script type="jsv/1171_"></script>
                            <script type="jsv/674^"></script>
                        </p>
                    </div>
                    <p class="product__for-adults">Товары для взрослых</p>
                </div>
                <div class="product__content">
                    <div class="product__header-wrap"> <div class="product__header j-product-title"
                            data-link="href{urlForGood:selectedNomenclature^nmId true (targetInfo &amp;&amp; targetInfo.targetUrl) null isAdv}"
                            > <span
                                class="product__brand-name"
                                data-link="class{merge: !selectedNomenclature^brandName toggle='hide'}text{:selectedNomenclature^brandName}">TiSun</span>
                            <span data-link="text{:selectedNomenclature^goodsName}">Чай листовой зеленый черный
                                фруктовый
                                улун пуэр 6 баночек</span> </div>
                    </div>
                    

                    <div class="product__info-wrap"
                        data-link="class{merge: disableFullButton toggle='product__info-wrap--full'}">
                        <div data-link="{include priceModel tmpl=priceModel.template}">
                            <script type="jsv#1208_"></script>
                            <script type="jsv#776^"></script>
                            <script type="jsv/776^"></script>
                            <script type="jsv#778^"></script>
                            <script type="jsv#1209_"></script>
                            <div class="price-block">
                                <script type="jsv#777^"></script>
                                <script type="jsv#1210_"></script>
                                <div class="price-block__content">
                                    <div class="price-block__price-group">
                                        <p class="price-block__price-wrap "> <span class="price-block__price">
                                                <ins class="price-block__final-price"> 752&nbsp;₽ </ins> </span>
                                            <script type="jsv#1211_"></script> 
                                            <script type="jsv/1211_"></script>
                                        </p>
                                    </div>
                                </div>
                                <script type="jsv/1210_"></script>
                                <script type="jsv/777^"></script>
                            </div>
                            <script type="jsv/1209_"></script>
                            <script type="jsv/778^"></script>
                            <script type="jsv/1208_"></script>
                        </div>
                        <div class="product__composition hide"
                            data-link="class{merge: !selectedNomenclature^consist toggle='hide'}{collapsibleBlock itemSelector='.j-consist-popup' maxCollapsedHeight=40 collapsedMsg='Развернуть состав' unCollapsedMsg='Свернуть состав'}"
                            data-jsv="#781^/781^">
                            <div class="collapsable">
                                <p class="collapsable__content j-consist-popup"
                                    style="max-height: 40px; -webkit-line-clamp: initial;"> <span>Состав:
                                    </span> <span data-link="text{:selectedNomenclature^consist}"></span> </p>
                                <div class="collapsible__bottom">
                                    <script type="jsv#1216_"></script>
                                    <script type="jsv#816^"></script>
                                    <script type="jsv/816^"></script>
                                    <script type="jsv#817^"></script>
                                    <script type="jsv/817^"></script>
                                    <script type="jsv/1216_"></script>
                                </div>
                            </div>
                        </div>
                        <div style="word-wrap: break-word;padding-bottom: 20px;max-height: 35%;overflow: hidden;">
                            <p>Описание</p>
                        </div>

                        <div class="product__order" data-link="{include orderModel tmpl=orderModel.template}">
                            <script type="jsv#1213_"></script>
                            <div class="order" data-link="class{merge: isDigital toggle='hide'}"> <button
                                    class="order__btn-buy btn-base hide"
                                    data-link="class{merge: !showAddToBasketBtn() || !$services.userData.userData.isAuthenticated || isPreorder toggle='hide'}class{merge:~short toggle='hide-mobile'}{on $adult.proceedIfAdultConfirmed adult buyItNow #data}"
                                    data-jsv="#789^/789^">Купить сейчас</button> <button class="btn-main"
                                    data-link="class{merge: !showAddToBasketBtn() toggle='hide'}{on $adult.proceedIfAdultConfirmed adult addToBasket #data}"
                                    aria-label="Добавить в корзину" data-jsv="#791^/791^"> <span
                                        class="hide-mobile"
                                        data-link="text{:isPreorder ? 'Предзаказ' : 'Добавить в корзину'}class{merge:~short toggle='hide'}">Добавить
                                        в корзину</span> <span class="hide-desktop"
                                        data-link="text{:isPreorder ? 'Предзаказ' : 'В корзину'}class{merge:!~short toggle='hide-desktop'}">В
                                        корзину</span> </button> <a class="btn-base j-go-to-basket hide"
                                    href="/lk/basket" data-link="class{merge: !addedToBasket toggle='hide'}">
                                    Перейти в корзину </a> <button class="btn-main hide"
                                    data-link="class{merge: !showAddToWlBtn() toggle='hide'}{on $adult.proceedIfAdultConfirmed adult addToWl #data}"
                                    data-jsv="#798^/798^"> В избранное </button>
                                <p class="btn-main disabled j-add-to-wait-msg hide"
                                    data-link="class{merge: !addedToWl toggle='hide'}"> Добавлено в избранное
                                </p>
                            </div>
                            <script type="jsv#1214_"></script>
                            <script type="jsv#1215_"></script>
                            <script type="jsv/1215_"></script>
                            <script type="jsv/1214_"></script>
                            <script type="jsv/1213_"></script>
                        </div>
                        <div class="product__delivery-wrap">
                            <p class="digital-info hide"
                                data-link="class{merge:!selectedNomenclature^isDigital toggle='hide'}text{:selectedNomenclature^isVideo ? 'Видеоматериалы будут доступны для просмотра в Личном кабинете сразу после покупки' : selectedNomenclature^isActivationKey ? 'Ключ активации будет доступен сразу после покупки в Личном кабинете, в полной версии сайта' : 'Электронная книга будет доступна для скачивания в Личном кабинете сразу после покупки'}">
                                Электронная книга будет доступна для скачивания в Личном кабинете сразу после
                                покупки</p>
                        </div>
                        <div class="product__advantages advantages"
                            data-link="class{merge: selectedNomenclature^allSizesSoldOut || selectedNomenclature^isDigital toggle='hide'}">
                            <ul class="advantages__list">
                                <li class="advantages__item advantages__item--refund hide"
                                    data-link="class{merge:selectedNomenclature.nonRefundable||selectedNomenclature^allSizesSoldOut || (deliveryHelper.deliveryInfoModel &amp;&amp; deliveryHelper.deliveryInfoModel^isCargo) toggle='hide'}">
                                    14 дней на возврат</li>
                                <li class="advantages__item advantages__item--fitting hide"
                                    data-link="class{merge: selectedNomenclature^isCargo || !selectedNomenclature.canFit toggle='hide'}">
                                    Примерка</li>
                            </ul>
                            <div class="advantages__rise advantages-rise hide"
                                data-link="class{merge:!(deliveryHelper.deliveryInfoModel &amp;&amp; deliveryHelper.deliveryInfoModel^isCargo) || (deliveryHelper.deliveryInfoModel &amp;&amp; deliveryHelper.deliveryInfoModel^isComputedDeliveryCost) toggle='hide'}">
                                <div class="advantages-rise__icon"> <img
                                        src="//static-basket-01.wbbasket.ru/vol0/i/v3/product-page/avatar.webp"
                                        alt="" width="40" height="40"> </div>
                                <div class="advantages-rise__text"> Бережно доставим, поднимем на этаж
                                    и&nbsp;занесем в
                                    квартиру. И все это <span>бесплатно!</span> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <script type="jsv/1170_"></script>
            <script type="jsv/679^"></script>
            <script type="jsv/1169_"></script>
        </div>
    </div>
    `;
}

function lock_scroll() {
  document.body.classList.add("body--overflow");
}

function add_gray_background() {
  const gray_background_element = `
        <div class="overlay initially-hidden j-custom-overlay" style="z-index: 300;"></div>
    `;

  document
    .querySelector(".popup")
    .insertAdjacentHTML("afterend", gray_background_element);
}

listen_product_click();