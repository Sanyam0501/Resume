document.addEventListener("DOMContentLoaded", () => {
  const skills = [
    {
      id: "skill-1",
      name: "JavaScript",
      description: "A popular programming language.",
      category: "Programming",
      experience: 3,
      image: "./assets/javascript.webp",
      featured: true,
    },
    {
      id: "skill-2",
      name: "Python",
      description: "A versatile programming language used in multiple domains.",
      category: "Programming",
      experience: 4,
      image: "./assets/python.svg",
      featured: false,
    },
    {
      id: "skill-3",
      name: "Java",
      description: "A high-level, object-oriented programming language.",
      category: "Programming",
      experience: 9,
      image: "./assets/java.png",
      featured: true,
    },
    {
      id: "skill-4",
      name: "SQL",
      description: "A language for managing databases.",
      category: "Databases",
      experience: 6,
      image: "./assets/sql.png",
      featured: true,
    },
    {
      id: "skill-5",
      name: "MongoDB",
      description: "A NoSQL database for modern applications.",
      category: "Databases",
      experience: 3,
      image: "./assets/mongodb.svg",
      featured: false,
    },
    {
      id: "skill-6",
      name: "HTML",
      description: "The standard markup language for creating web pages.",
      category: "Web Development",
      experience: 7,
      image: "./assets/html.png",
      featured: false,
    },
    {
      id: "skill-7",
      name: "CSS",
      description: "A style sheet language for designing web pages.",
      category: "Web Development",
      experience: 8,
      image: "./assets/css.png",
      featured: true,
    },
    {
      id: "skill-8",
      name: "React",
      description: "A JavaScript library for building user interfaces.",
      category: "Web Development",
      experience: 2,
      image: "./assets/react.png",
      featured: false,
    },
    {
      id: "skill-9",
      name: "Node.js",
      description: "A JavaScript runtime environment for backend development.",
      category: "Backend Development",
      experience: 5,
      image: "./assets/node.png",
      featured: true,
    },
    {
      id: "skill-10",
      name: "Django",
      description: "A high-level Python web framework.",
      category: "Backend Development",
      experience: 4,
      image: "./assets/django.png",
      featured: false,
    },
    {
      id: "skill-11",
      name: "REST API",
      description: "A standard architecture for designing networked applications.",
      category: "API Development",
      experience: 6,
      image: "./assets/restapi.png",
      featured: true,
    },
    {
      id: "skill-12",
      name: "GraphQL",
      description: "A query language for APIs.",
      category: "API Development",
      experience: 3,
      image: "./assets/graphql.png",
      featured: false,
    },
    {
      id: "skill-13",
      name: "AWS",
      description: "Amazon Web Services cloud computing platform.",
      category: "Cloud Services",
      experience: 5,
      image: "./assets/aws.png",
      featured: true,
    },
    {
      id: "skill-14",
      name: "Google Cloud",
      description: "Google Cloud Platform for cloud computing.",
      category: "Cloud Services",
      experience: 4,
      image: "./assets/gcp.png",
      featured: false,
    },
    {
      id: "skill-15",
      name: "Azure",
      description: "Microsoft’s cloud computing platform.",
      category: "Cloud Services",
      experience: 4,
      image: "./assets/azure.png",
      featured: true,
    },
    {
      id: "skill-16",
      name: "Problem Solving",
      description: "Logical thinking to tackle challenges.",
      category: "Work Place and Interpersonal Skills",
      experience: 6,
      image: "./assets/problem.jpg",
      featured: true,
    },
    {
      id: "skill-17",
      name: "Team Collaboration",
      description: "Effective teamwork and communication.",
      category: "Work Place and Interpersonal Skills",
      experience: 7,
      image: "./assets/team.jpg",
      featured: true,
    },
    {
      id: "skill-18",
      name: "Time Management",
      description: "Prioritization with adaptability.",
      category: "Work Place and Interpersonal Skills",
      experience: 9,
      image: "./assets/time.jpg",
      featured: true,
    },
  ]

  // Update the updateAddToCartButtons function to correctly use the cart.js addToCart function
  function updateAddToCartButtons() {
    const addToCartButtons = document.querySelectorAll(".add-to-cart")
    addToCartButtons.forEach((button) => {
      // Remove existing event listeners to prevent duplicates
      button.replaceWith(button.cloneNode(true))
    })

    // Re-select buttons after replacing them
    const refreshedButtons = document.querySelectorAll(".add-to-cart")
    refreshedButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const skillId = this.dataset.id
        // Call the addToCart function from cart.js
        window.addToCart(skillId)
      })
    })
  }

  const skillsGrid = document.getElementById("skills-grid")
  const searchInput = document.getElementById("search")
  const categoryCheckboxes = document.querySelectorAll('[id^="category-"]')
  const experienceRange = document.getElementById("experience-range")
  const experienceValue = document.getElementById("experience-value")
  const sortSelect = document.getElementById("sort")
  const resetFiltersBtn = document.getElementById("reset-filters")
  const skillsCount = document.getElementById("skills-count")

  let filteredSkills = [...skills]
  let minExperience = 0
  let maxExperience = 10

  // Initialize search
  searchInput.addEventListener("input", () => {
    filterSkills()
  })

  // Initialize category filters
  categoryCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      filterSkills()
    })
  })

  // Initialize sort
  sortSelect.addEventListener("change", () => {
    filterSkills()
  })

  // Reset filters
  resetFiltersBtn.addEventListener("click", () => {
    searchInput.value = ""
    categoryCheckboxes.forEach((checkbox) => {
      checkbox.checked = false
    })
    sortSelect.value = "popular"
    minExperience = 0
    maxExperience = 10

    // Reset to original skills array before filtering
    filteredSkills = [...skills]

    // Update skills count
    skillsCount.textContent = filteredSkills.length

    // Render all skills
    renderSkills()
  })

  // Filter skills based on current filters
  function filterSkills() {
    const searchTerm = searchInput.value.toLowerCase()
    const selectedCategories = Array.from(categoryCheckboxes)
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => checkbox.id.replace("category-", "").toLowerCase())

    // Filter skills
    filteredSkills = skills.filter((skill) => {
      // Search filter
      const matchesSearch =
        skill.name.toLowerCase().includes(searchTerm) || skill.description.toLowerCase().includes(searchTerm)

      // Category filter
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.some((category) => skill.category.toLowerCase().includes(category))

      // Experience filter
      const matchesExperience = skill.experience >= minExperience && skill.experience <= maxExperience

      return matchesSearch && matchesCategory && matchesExperience
    })

    // Sort skills
    const sortBy = sortSelect.value
    if (sortBy === "popular") {
      filteredSkills.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
    } else if (sortBy === "newest") {
      // For demo purposes, we'll just reverse the array
      filteredSkills.reverse()
    } else if (sortBy === "experience") {
      filteredSkills.sort((a, b) => b.experience - a.experience)
    }

    // Update skills count
    skillsCount.textContent = filteredSkills.length

    // Render filtered skills
    renderSkills()
  }

  // Render skills to the grid
  function renderSkills() {
    skillsGrid.innerHTML = ""

    if (filteredSkills.length === 0) {
      skillsGrid.innerHTML = `
          <div class="col-12 text-center py-5">
            <i class="bi bi-search text-muted" style="font-size: 3rem;"></i>
            <h3 class="mt-3">No skills found</h3>
            <p class="text-muted">Try adjusting your filters</p>
          </div>
        `
      return
    }

    filteredSkills.forEach((skill) => {
      const skillCard = document.createElement("div")
      skillCard.className = "col-md-6 col-lg-4 mb-4"
      skillCard.innerHTML = `
          <div class="card product-card h-100">
            <div class="card-img-top position-relative d-flex align-items-center justify-content-center">
              <img src="${skill.image}" class="img-fluid d-flex align-items-center" alt="${skill.name}" width="200" height="200">
            </div>
            <div class="card-body">
              <div class="d-flex justify-content-between align-items-center mb-2">
                <h3 class="h5 fw-bold">${skill.name}</h3>
                <span class="badge bg-light text-dark">${skill.experience} Years</span>
              </div>
              <p class="text-muted small mb-3">${skill.category}</p>
              <p>${skill.description}</p>
            </div>
            <div class="card-footer bg-white border-top-0">
              <button class="btn btn-primary w-100 add-to-cart" data-id="${skill.id}">
                <i class="bi bi-cart-plus me-2"></i> Add to Cart
              </button>
            </div>
          </div>
        `

      skillsGrid.appendChild(skillCard)
    })

    // Update "Add to Cart" buttons
    updateAddToCartButtons()
  }

  // Initial render
  renderSkills()
})

