// Cart functionality for Sanyam's Resume Store

// Initialize cart from localStorage or create empty cart
let cart = JSON.parse(localStorage.getItem("cart")) || []

// Replace the mock skills array with this
const skillsData = [
  { id: "skill-1", name: "JavaScript", experience: 3, category: "Programming", image: "./assets/javascript.webp" },
  { id: "skill-2", name: "Python", experience: 4, category: "Programming", image: "./assets/python.svg" },
  { id: "skill-3", name: "Java", experience: 9, category: "Programming", image: "./assets/java.png" },
  { id: "skill-4", name: "SQL", experience: 6, category: "Databases", image: "./assets/sql.png" },
  { id: "skill-5", name: "MongoDB", experience: 3, category: "Databases", image: "./assets/mongodb.svg" },
  { id: "skill-6", name: "HTML", experience: 7, category: "Web Development", image: "./assets/html.png" },
  { id: "skill-7", name: "CSS", experience: 8, category: "Web Development", image: "./assets/css.png" },
  { id: "skill-8", name: "React", experience: 2, category: "Web Development", image: "./assets/react.png" },
  { id: "skill-9", name: "Node.js", experience: 5, category: "Backend Development", image: "./assets/node.png" },
  { id: "skill-10", name: "Django", experience: 4, category: "Backend Development", image: "./assets/django.png" },
  { id: "skill-11", name: "REST API", experience: 6, category: "API Development", image: "./assets/restapi.png" },
  { id: "skill-12", name: "GraphQL", experience: 3, category: "API Development", image: "./assets/graphql.png" },
  { id: "skill-13", name: "AWS", experience: 5, category: "Cloud Services", image: "./assets/aws.png" },
  { id: "skill-14", name: "Google Cloud", experience: 4, category: "Cloud Services", image: "./assets/gcp.png" },
  { id: "skill-15", name: "Azure", experience: 4, category: "Cloud Services", image: "./assets/azure.png" },
  { id: "skill-16", name: 'Problem Solving', experience: 6, category: 'Work Place and Interpersonal Skills', image: './assets/problem.jpg'},
  { id: "skill-17", name: 'Team Collaboration', experience: 7, category: 'Work Place and Interpersonal Skills', image: './assets/team.jpg'},
  { id: "skill-18", name: 'Time Management', experience: 9, category: 'Work Place and Interpersonal Skills', image: './assets/time.jpg'}
]

// Mock renderCart and renderCheckout functions (replace with actual implementations)
function renderCart() {
  console.warn("renderCart() function is a placeholder. Implement the actual rendering logic.")
}

function renderCheckout() {
  console.warn("renderCheckout() function is a placeholder. Implement the actual rendering logic.")
}

// Update cart count in the navbar
function updateCartCount() {
  const cartCountElements = document.querySelectorAll(".cart-count")
  cartCountElements.forEach((element) => {
    element.textContent = cart.length
  })
}

// Add item to cart
function addToCart(skillId) {
  console.log("Adding to cart:", skillId)

  // Check if item is already in cart
  if (cart.some((item) => item.id === skillId)) {
    showToast("This skill is already in your cart!")
    return
  }

  // Find the skill in the skillsData array
  const skill = skillsData.find((skill) => skill.id === skillId)

  if (skill) {
    // Add to cart
    cart.push(skill)

    // Save to localStorage
    localStorage.setItem("cart", JSON.stringify(cart))

    // Update UI
    updateCartCount()

    // Update button state
    updateAddToCartButtons()

    // Show toast notification
    showToast(`${skill.name} added to cart!`)
  } else {
    console.error("Skill not found:", skillId)
  }
}

// Remove item from cart
function removeFromCart(skillId) {
  // Filter out the item
  cart = cart.filter((item) => item.id !== skillId)

  // Save to localStorage
  localStorage.setItem("cart", JSON.stringify(cart))

  // Update UI
  updateCartCount()
  updateAddToCartButtons()

  // If on cart page, update cart display
  if (window.location.pathname.includes("cart.html")) {
    renderCart()
  }

  // If on checkout page, update checkout display
  if (window.location.pathname.includes("checkout.html")) {
    renderCheckout()
  }
}

// Clear cart
function clearCart() {
  // Empty the cart
  cart = []

  // Save to localStorage
  localStorage.setItem("cart", JSON.stringify(cart))

  // Update UI
  updateCartCount()
  updateAddToCartButtons()

  // If on cart page, update cart display
  if (window.location.pathname.includes("cart.html")) {
    renderCart()
  }

  // If on checkout page, update checkout display
  if (window.location.pathname.includes("checkout.html")) {
    renderCheckout()
  }
}

// Check if item is in cart
function isInCart(skillId) {
  return cart.some((item) => item.id === skillId)
}

// Update all "Add to Cart" buttons based on cart state
function updateAddToCartButtons() {
  const addToCartButtons = document.querySelectorAll(".add-to-cart")

  addToCartButtons.forEach((button) => {
    const skillId = button.getAttribute("data-id")

    if (isInCart(skillId)) {
      button.innerHTML = '<i class="bi bi-check me-2"></i> Added to Cart'
      button.classList.remove("btn-primary")
      button.classList.add("btn-success")
      button.disabled = true
    } else {
      button.innerHTML = '<i class="bi bi-cart-plus me-2"></i> Add to Cart'
      button.classList.remove("btn-success")
      button.classList.add("btn-primary")
      button.disabled = false
    }
  })
}

// Calculate total experience from cart items
function calculateTotalExperience() {
  return cart.reduce((total, item) => total + item.experience, 0)
}

// Determine expertise level based on total experience
function getExpertiseLevel(totalExperience) {
  if (totalExperience < 3) {
    return "Beginner"
  } else if (totalExperience < 10) {
    return "Intermediate"
  } else {
    return "Expert"
  }
}

// Show toast notification
function showToast(message) {
  // Create toast element if it doesn't exist
  if (!document.getElementById("toast-container")) {
    const toastContainer = document.createElement("div")
    toastContainer.id = "toast-container"
    toastContainer.className = "position-fixed bottom-0 end-0 p-3"
    document.body.appendChild(toastContainer)
  }

  const toastId = "toast-" + Date.now()
  const toastHTML = `
    <div id="${toastId}" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <i class="bi bi-cart-check-fill text-primary me-2"></i>
        <strong class="me-auto">Cart Updated</strong>
        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
      </div>
      <div class="toast-body">
        ${message}
      </div>
    </div>
  `

  document.getElementById("toast-container").insertAdjacentHTML("beforeend", toastHTML)

  const toastElement = document.getElementById(toastId)

  // Check if Bootstrap is available
  if (typeof bootstrap !== "undefined") {
    const toast = new bootstrap.Toast(toastElement, { autohide: true, delay: 3000 })
    toast.show()
  } else {
    // Fallback if Bootstrap JS is not loaded
    console.warn("Bootstrap is not loaded. Using fallback for toast.")
    toastElement.classList.add("show")
    setTimeout(() => {
      toastElement.classList.remove("show")
      setTimeout(() => toastElement.remove(), 300)
    }, 3000)
  }

  // Remove toast after it's hidden
  toastElement.addEventListener("hidden.bs.toast", () => {
    toastElement.remove()
  })
}

// Make addToCart function available globally
window.addToCart = addToCart

// Initialize cart count on page load
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount()

  // Add event listeners to "Add to Cart" buttons
  const addToCartButtons = document.querySelectorAll(".add-to-cart")
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const skillId = this.getAttribute("data-id")
      addToCart(skillId)
    })
  })

  // Update button states
  updateAddToCartButtons()
})

