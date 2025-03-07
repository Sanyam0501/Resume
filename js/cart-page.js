// Cart page functionality

document.addEventListener("DOMContentLoaded", () => {
  // Get cart from localStorage
  let cart = JSON.parse(localStorage.getItem("cart")) || []

  function removeFromCart(skillId) {
    cart = cart.filter((item) => item.id !== skillId)
    localStorage.setItem("cart", JSON.stringify(cart))
    renderCart()
    updateCartCount()
  }

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
    cart = []
    localStorage.removeItem("cart")
    renderCart()
    updateCartCount()
  }

  function updateCartCount() {
    const cartCountElements = document.querySelectorAll(".cart-count")
    cartCountElements.forEach((element) => {
      element.textContent = cart.length
    })
  }

  const emptyCart = document.getElementById("empty-cart")
  const cartContent = document.getElementById("cart-content")
  const cartItems = document.getElementById("cart-items")
  const cartItemsCount = document.getElementById("cart-items-count")
  const totalSkills = document.getElementById("total-skills")
  const totalExperience = document.getElementById("total-experience")
  const expertiseLevel = document.getElementById("expertise-level")
  const clearCartBtn = document.getElementById("clear-cart")

  function renderCart() {
    cartItemsCount.textContent = cart.length

    if (cart.length === 0) {
      emptyCart.style.display = "block"
      cartContent.style.display = "none"
      return
    } else {
      emptyCart.style.display = "none"
      cartContent.style.display = "flex"
    }

    cartItems.innerHTML = ""

    cart.forEach((item) => {
      const cartItem = document.createElement("div")
      cartItem.className = "cart-item"
      cartItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="cart-item-image">
        <div class="cart-item-details">
          <div class="d-flex justify-content-between align-items-center">
            <h5 class="mb-0">${item.name}</h5>
            <span class="badge bg-light text-dark">${item.experience} Years</span>
          </div>
          <p class="text-muted small mb-0">${item.category}</p>
        </div>
        <button class="btn btn-sm btn-outline-danger ms-3 remove-from-cart" data-id="${item.id}">
          <i class="bi bi-trash"></i>
        </button>
      `

      cartItems.appendChild(cartItem)
    })

    // Add event listeners to remove buttons
    const removeButtons = document.querySelectorAll(".remove-from-cart")
    removeButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const skillId = this.getAttribute("data-id")
        removeFromCart(skillId)
      })
    })

    // Update summary
    const experience = calculateTotalExperience()
    totalSkills.textContent = cart.length
    totalExperience.textContent = experience + " Years"
    expertiseLevel.textContent = getExpertiseLevel(experience)
  }

  // Clear cart button
  if (clearCartBtn) {
    clearCartBtn.addEventListener("click", () => {
      if (confirm("Are you sure you want to clear your cart?")) {
        clearCart()
      }
    })
  }

  // Initial render
  renderCart()
  updateCartCount()
})

