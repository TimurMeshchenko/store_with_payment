let offset=0;const limit=30;let is_all_products_loaded=false;let is_active_addition_products=false;add_products_html();window.addEventListener("scroll",(async()=>{if(is_last_product_scrolled()&&!is_active_addition_products&&!is_all_products_loaded){is_active_addition_products=true;await add_products_html();is_active_addition_products=false}}));function is_last_product_scrolled(){const product_element=document.querySelector(".main-page__product");const scrolledHeight=window.innerHeight+window.scrollY;return scrolledHeight+product_element.offsetHeight>=document.documentElement.scrollHeight}async function add_products_html(){const products_page_html=await get_products_page_html();document.querySelector(".main-page__content").insertAdjacentHTML("beforeend",products_page_html);await handle_new_basket_buttons();await listen_products_click();offset+=limit}async function get_products_page_html(){const response=await fetch(`${window.location.href}/api/get_products_page?offset=${offset}&limit=${limit}`);const products_page_html_dict=await response.json();const products_page_html=products_page_html_dict["products"];return products_page_html}async function handle_new_basket_buttons(){const products_elements=main_page_content.querySelectorAll(".main-page__product");for(let i=offset;i<products_elements.length;i++){const product_id=products_elements[i].dataset.nmId;const button_basket=products_elements[i].querySelector(".product-card__add-basket");if(basket_products_id.has(Number(product_id))){change_button_in_basket(button_basket)}else{button_basket.addEventListener("click",save_product_id)}}}