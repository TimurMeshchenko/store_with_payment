const original_basket = JSON.parse(localStorage.getItem("basket"));  
const basket_products_id = new Set()

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
  const basket_counter = document.querySelector(".navbar-pc__notify");
  basket_counter.textContent = basket_products_id.size;
}

function check_product_in_basket(product_id) {
    const basket_button = document.querySelector(".product-card__add-basket");

    if (basket_products_id.has(Number(product_id))) {
        change_button_in_basket(basket_button);
    } else {        
        basket_button.addEventListener("click", save_product_id);
    }
}

async function save_product_id(event) {
    const basket_button = event.target;
    const product = await get_product(event);
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
}

async function get_product(event) {
    const product_div = event.target.parentNode.parentNode.parentNode;
    const product_name = product_div.querySelector('h2 > span').textContent;
    const response = await fetch(
      `${window.location.href}api/get_product?product_name=${product_name}`
    );
    const product_dict = await response.json();
    const product = product_dict["product"];

    return product
}

function change_button_in_basket(basket_button) {
    basket_button.textContent = "В корзине";
    basket_button.style.backgroundColor = "gray";
    basket_button.href = "basket";
}

function increase_basket_counter() {
  const basket_counter = document.querySelector(".navbar-pc__notify");
  basket_counter.textContent = Number(basket_counter.textContent) + 1;
}