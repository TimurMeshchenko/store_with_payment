const original_basket = JSON.parse(localStorage.getItem("basket"));  
const basket_products_id = new Set()
const basket_counter = document.querySelector(".navbar-pc__notify");
const main_page_content = document.querySelector(".main-page__content");

fill_basket_products_id();
set_basket_counter();

function fill_basket_products_id() {
    if (original_basket) {        
        for (const product of original_basket) {
            basket_products_id.add(product.id);
        }
    }
}

function set_basket_counter() {
  basket_counter.textContent = basket_products_id.size;
}

async function save_product_id(event) {
    const basket_button = event.target || event;
    const product_div =
      basket_button.parentNode.parentNode.parentNode.parentNode;

    const product = await get_product(product_div);
    const basket = localStorage.getItem("basket"); 
    let basket_data = undefined;

    if (basket) {
        basket_data = JSON.parse(basket);
        basket_data.push(product);
    } else {
        basket_data = [product];
    }
    
    localStorage.setItem("basket", JSON.stringify(basket_data));

    change_button_in_basket(basket_button);
    increase_basket_counter();
    basket_button.removeEventListener("click", save_product_id);
    basket_products_id.add(product.id);

    show_basket_alert();
}

async function get_product(product_div) {
    const product_id = product_div.dataset.nmId;
    const response = await fetch(
      `${window.location.href}/api/get_product?product_id=${product_id}`
    );
    const product_dict = await response.json();
    const product = product_dict["product"];
    return product
}

function change_button_in_basket(basket_button) {
    basket_button.textContent = "В корзине";
    basket_button.style.backgroundColor = "gray";
    basket_button.href = "/store/basket";
}

function increase_basket_counter() {
  basket_counter.textContent = Number(basket_counter.textContent) + 1;
}

function show_basket_alert() {
  const basket_alert = document.querySelector(".basket_alert");

    setTimeout(() => {
      basket_alert.style.opacity = 1;
    }, 10);

    setTimeout(() => {
      basket_alert.style.opacity = 0;
    }, 2000);
}