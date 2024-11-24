
  // ----------Checkout page-----------//
  document
    .getElementById("paymentForm")
    .addEventListener("submit", function (event) {
      // Prevent form submission
      event.preventDefault();

      // Clear previous error messages
      const errorElements = document.querySelectorAll(".invalid-feedback");
      errorElements.forEach((el) => (el.style.display = "none"));

      // Validation flags
      let isValid = true;

      // Get selected payment method
      const paymentMethod = document.querySelector(
        'input[name="paymentMethod"]:checked'
      ).value;

      // Regex patterns
      const nameRegex = /^[a-zA-Z]+([ '-][a-zA-Z]+)*$/; // For names
      const addressRegex = /^[a-zA-Z0-9\s,'-]+$/; // For addresses
      const cardNumberRegex = /^\d{4} \d{4} \d{4} \d{4}$/; // For card number (XXXX XXXX XXXX XXXX)
      const expirationDateRegex = /^(0[1-9]|1[0-2])\/\d{2}$/; // For expiration date (MM/YY)
      const cvcRegex = /^\d{3}$/; // For CVC (3 digits)

      // Validate Billing First Name
      const billingFirstName = document.getElementById("billingFirstName");
      if (!nameRegex.test(billingFirstName.value)) {
        billingFirstName.nextElementSibling.style.display = "block"; // Show error
        isValid = false;
      }

      // Validate Billing Last Name
      const billingLastName = document.getElementById("billingLastName");
      if (!nameRegex.test(billingLastName.value)) {
        billingLastName.nextElementSibling.style.display = "block"; // Show error
        isValid = false;
      }

      // Validate Billing Address
      const billingAddress = document.getElementById("billingAddress");
      if (!addressRegex.test(billingAddress.value)) {
        billingAddress.nextElementSibling.style.display = "block"; // Show error
        isValid = false;
      }

      // Validate Shipping First Name
      const shippingFirstName = document.getElementById("shippingFirstName");
      if (!nameRegex.test(shippingFirstName.value)) {
        shippingFirstName.nextElementSibling.style.display = "block"; // Show error
        isValid = false;
      }

      // Validate Shipping Last Name
      const shippingLastName = document.getElementById("shippingLastName");
      if (!nameRegex.test(shippingLastName.value)) {
        shippingLastName.nextElementSibling.style.display = "block"; // Show error
        isValid = false;
      }

      // Validate Shipping Address
      const shippingAddress = document.getElementById("shippingAddress");
      if (!addressRegex.test(shippingAddress.value)) {
        shippingAddress.nextElementSibling.style.display = "block"; // Show error
        isValid = false;
      }

      // Validate Card Number
      const cardNumber = document.getElementById("cardNumber");
      if (!cardNumberRegex.test(cardNumber.value)) {
        cardNumber.nextElementSibling.style.display = "block"; // Show error
        isValid = false;
      }

      // Validate Card Holder
      const cardHolder = document.getElementById("cardHolder");
      if (!nameRegex.test(cardHolder.value)) {
        cardHolder.nextElementSibling.style.display = "block"; // Show error
        isValid = false;
      }

      // Validate Expiration Date
      const expirationDate = document.getElementById("expirationDate");
      if (!expirationDateRegex.test(expirationDate.value)) {
        expirationDate.nextElementSibling.style.display = "block"; // Show error
        isValid = false;
      }

      // Validate CVC
      const cvc = document.getElementById("cvc");
      if (!cvcRegex.test(cvc.value)) {
        cvc.nextElementSibling.style.display = "block"; // Show error
        isValid = false;
      }

      // Submit the form if all validations passed
      if (isValid) {
        // You can submit the form programmatically or allow it to submit
        this.submit();
      }
    });

