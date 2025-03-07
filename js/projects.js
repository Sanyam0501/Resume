document.addEventListener("DOMContentLoaded", function() {
    const projects = [
        {
            title: "Online Book Store",
            description: "A web-based library management system.",
            image: "./assets/library.webp",
            category: "web",
            rating: 4,
            technologies: ["HTML", "CSS", "JavaScript","Node.js", "Express.js", "MySQL"],
            github: "https://github.com/Sanyam0501/AWP_PROJECT"
        },
        {
          title: "Thryve",
          description: "A collaborative platform connecting mentors and mentees for guidance and growth.",
          image: "./assets/thryve.png",
          category: "front",
          rating: 5,
          technologies: ["HTML", "CSS", "JavaScript" ,"Bootstrap 5"],
          github: "https://github.com/Sanyam0501/Thryve"
      },
        {
            title: "Vipra",
            description: "A platform for matchmaking and marriage connections.",
            image: "./assets/vipra-page.png",
            category: "front",
            rating: 5,
            technologies: ["HTML", "CSS", "Bootstrap 5"],
            github: "https://github.com/sanyam/bank-system"
        },
        {
            title: "ROZEH",
            description: "An online marketplace for buying and selling products.",
            image: "./assets/rozeh.png",
            category: "web",
            rating: 5,
            technologies: ["HTML","CSS","Bootstrap 5","JavaScript","SQLite","Flask"],
            github: "https://github.com/sanyam/robot"
        },
        {
            title: "Kalyan",
            description: "A captivating landing page showcasing a game's features, visuals and download links.",
            image: "./assets/kalyan.png",
            category: "front",
            rating: 3,
            technologies: ["HTML", "CSS", "Bootstrap 5"],
            github: "https://github.com/sanyam/lightsensor"
        },
        {
            title: "Indocuisine",
            description: "A visually appealing landing page showcasing a restaurant's menu, ambiance and booking options.",
            image: "./assets/indocuisine.png",
            category: "front",
            rating: 4,
            technologies: ["HTML", "CSS", "Bootstrap 5"],
            github: "https://github.com/sanyam/lightsensor"
        },
        {
            title: "Attendance Management System",
            description: "A system for tracking and managing attendance efficiently.",
            image: "./assets/attendance.webp",
            category: "web",
            rating: 5,
            technologies: ["HTML", "CSS", "JavaScript","Node.js", "Express.js", "MySQL"],
            github: "https://github.com/Sanyam0501/Student-Attendance-Management-System"
        }
    ];

    function renderProjectsToGrid(projectsList, grid) {
        grid.innerHTML = '';

        if (projectsList.length === 0) {
            grid.innerHTML = `
                <div class="col-12 text-center py-5">
                    <i class="bi bi-folder text-muted" style="font-size: 3rem;"></i>
                    <h3 class="mt-3">No projects in this category</h3>
                    <p class="text-muted">Check out other categories</p>
                </div>
            `;
            return;
        }

        projectsList.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'col-md-6 col-lg-4 mb-4';

            let starsHTML = '';
            for (let i = 1; i <= 5; i++) {
                starsHTML += i <= project.rating
                    ? '<i class="bi bi-star-fill text-warning"></i>'
                    : '<i class="bi bi-star text-warning"></i>';
            }

            let techBadgesHTML = '';
            project.technologies.forEach(tech => {
                techBadgesHTML += `<span class="badge bg-light text-dark me-1 mb-1">${tech}</span>`;
            });

            projectCard.innerHTML = `
                <div class="card product-card h-100">
                    <div class="card-img-top position-relative overflow-hidden">
                        <img src="${project.image}" class="img-fluid" alt="${project.title}">
                        <button class="btn btn-sm btn-light position-absolute top-0 end-0 m-2 like-btn" title="Add to wishlist">
                            <i class="bi bi-heart"></i>
                        </button>
                    </div>
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-start mb-2">
                            <h3 class="h5 fw-bold">${project.title}</h3>
                            <div class="ms-2">
                                ${starsHTML}
                            </div>
                        </div>
                        <div class="mb-3">
                            ${techBadgesHTML}
                        </div>
                        <p class="text-muted small">${project.description}</p>
                    </div>
                    <div class="card-footer bg-white d-flex gap-2">
                        <a href="${project.github}" target="_blank" class="btn btn-outline-secondary flex-grow-1">
                            <i class="bi bi-github me-1"></i> GitHub
                        </a>
                    </div>
                </div>
            `;
            grid.appendChild(projectCard);
        });
        const likeButtons = document.querySelectorAll(".like-btn");
        likeButtons.forEach(btn => {
            btn.addEventListener("click", function() {
                btn.classList.toggle("liked");
                btn.innerHTML = btn.classList.contains("liked") 
                    ? '<i class="bi bi-heart-fill text-danger"></i>' 
                    : '<i class="bi bi-heart"></i>';
            });
        });
    }
    

    function renderProjects() {
        renderProjectsToGrid(projects, document.getElementById('projects-grid'));
        renderProjectsToGrid(projects.filter(p => p.category === 'web'), document.getElementById('web-projects-grid'));
        renderProjectsToGrid(projects.filter(p => p.category === 'front'), document.getElementById('front-projects-grid'));
        renderProjectsToGrid(projects.filter(p => p.category === 'database'), document.getElementById('database-projects-grid'));
    }

    renderProjects();
});

