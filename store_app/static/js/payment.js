const stripe = Stripe(
  "pk_test_51OWxceHpvpTxUukxyxDJDUstgQcWWcBa5ejeq95OjXoN305ZlpZOQ7HefDtJIuE0obSQTAyrzJj0DQ3xYPGSyiCG00ezdDZWRD"
);

const basketItems = {
  key1: "value1",
  key2: "value2",
};

// localStorage.getItem('basketItems')

let elements;

document.querySelector(".b-btn-do-order").addEventListener("click", initialize);

async function initialize() {
  const response = await fetch(window.location, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": document.getElementsByName("csrfmiddlewaretoken")[0].value,
    },
    body: JSON.stringify(basketItems),
  });
  const { clientSecret } = await response.json();
  const appearance = {
    theme: "stripe",
  };
  elements = stripe.elements({ appearance, clientSecret });

  const paymentElementOptions = {
    layout: "tabs",
  };

  const paymentElement = elements.create("payment", paymentElementOptions);
  paymentElement.mount("#payment-element");

  add_listener_submit()
}

function add_listener_submit() {
    const button_order_element = document.querySelector(".b-btn-do-order")

    button_order_element.removeEventListener("click", initialize);
    button_order_element.addEventListener("click", handleSubmit);
}

async function handleSubmit() {
  const { error } = await stripe.confirmPayment({
    elements,
    confirmParams: {
      return_url: "http://localhost:4242/checkout.html",
    },
  });

  if (error.type === "card_error" || error.type === "validation_error") {
    showMessage(error.message);
  } else {
    showMessage("An unexpected error occurred.");
  }
}

function showMessage(messageText) {
  const messageContainer = document.querySelector("#payment-message");

  messageContainer.classList.remove("hidden");
  messageContainer.textContent = messageText;

  setTimeout(function () {
    messageContainer.classList.add("hidden");
    messageContainer.textContent = "";
  }, 4000);
}

