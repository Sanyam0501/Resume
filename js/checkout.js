// Checkout page functionality

document.addEventListener("DOMContentLoaded", () => {
  const checkoutForm = document.getElementById("checkout-form")
  const checkoutItems = document.getElementById("checkout-items")
  const checkoutTotalSkills = document.getElementById("checkout-total-skills")
  const checkoutTotalExperience = document.getElementById("checkout-total-experience")
  const checkoutExpertiseLevel = document.getElementById("checkout-expertise-level")
  const orderSuccess = document.getElementById("order-success")
  const checkoutFormContainer = document.getElementById("checkout-form-container")

  // Get cart from localStorage
  const cart = JSON.parse(localStorage.getItem("cart")) || []

  function calculateTotalExperience() {
    return cart.reduce((total, item) => total + item.experience, 0)
  }

  function getExpertiseLevel(experience) {
    if (experience < 3) {
      return "Beginner"
    } else if (experience < 10) {
      return "Intermediate"
    } else {
      return "Expert"
    }
  }

  function clearCart() {
    // Clear the cart array in localStorage
    localStorage.removeItem("cart")
    // Update cart count in navbar
    const cartCountElements = document.querySelectorAll(".cart-count")
    cartCountElements.forEach((element) => {
      element.textContent = "0"
    })
  }

  // Render checkout
  function renderCheckout() {
    // Clear checkout items
    checkoutItems.innerHTML = ""

    if (cart.length === 0) {
      checkoutItems.innerHTML = `
        <div class="alert alert-info mb-0">
          Your cart is empty. <a href="skills.html" class="alert-link">Browse skills</a> to add items to your cart.
        </div>
      `
      checkoutTotalSkills.textContent = "0"
      checkoutTotalExperience.textContent = "0 Years"
      checkoutExpertiseLevel.textContent = "Beginner"
      return
    }

    // Add each item to the checkout
    cart.forEach((item) => {
      const checkoutItem = document.createElement("div")
      checkoutItem.className = "d-flex justify-content-between align-items-center mb-2"
      checkoutItem.innerHTML = `
        <div class="d-flex align-items-center">
          <img src="${item.image}" alt="${item.name}" class="me-2" width="30" height="30">
          <span>${item.name}</span>
        </div>
        <span class="badge bg-light text-dark">${item.experience} Years</span>
      `

      checkoutItems.appendChild(checkoutItem)
    })

    // Update summary
    const experience = calculateTotalExperience()
    checkoutTotalSkills.textContent = cart.length
    checkoutTotalExperience.textContent = experience + " Years"
    checkoutExpertiseLevel.textContent = getExpertiseLevel(experience)
  }

  // Handle form submission
  if (checkoutForm) {
    checkoutForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form data
      const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        company: document.getElementById("company").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
        cart: cart,
      }

      // Simulate form submission (would normally send to server)
      setTimeout(() => {
        // Show success message
        orderSuccess.style.display = "block"
        checkoutFormContainer.style.display = "none"

        // Clear cart
        clearCart()

        // Log form data (for demo purposes)
        console.log("Form submitted:", formData)
      }, 1000)
    })
  }

  // Initial render
  renderCheckout()
})

