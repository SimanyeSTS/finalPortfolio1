<template>
    <nav class="navbar navbar-expand-lg sticky-top">
      <div class="container-fluid p-0">
        <a class="navbar-brand p-0" href="#home">
          <img
            src="https://i.postimg.cc/ZKXq1Gx9/Screenshot-2024-11-29-102725.png"
            alt="logo"
            class="img-fluid"
            loading="lazy"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          @click="toggleNavbar"
          aria-controls="navbarSupportedContent"
          :aria-expanded="isNavbarOpen"
          aria-label="Toggle navigation"
        >
          <div class="hamburger-icon" :class="{ 'is-active': isNavbarOpen }">
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
          </div>
        </button>
        <div
          class="collapse navbar-collapse"
          id="navbarSupportedContent"
          :class="{ show: isNavbarOpen }"
        >
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li
              class="nav-item"
              v-for="(item, index) in navItems"
              :key="index"
              :style="getItemAnimationStyle(index)"
            >
              <a
                class="nav-link"
                :class="{ active: activeSection === item.section }"
                :href="item.href"
                @click="closeNavbar"
              >
                <i :class="item.icon"></i> {{ item.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <style scoped>
  nav {
    padding: 0;
    margin: 0;
    background-color: #ff8c00;
  }

  img[alt='logo'] {
    width: 7rem;
    height: 5rem;
}
  
  .navbar-brand,
  .nav-link {
    font-weight: bold;
    color: black;
    transition: color 0.3s ease;
  }
  
  .nav-link:hover,
  .nav-link.active {
    color: white !important;
  }
  
  .navbar-toggler {
    border: solid black;
    margin-right: 2%;
    height: 40px;
    padding: 0.5rem;
  }
  
  .hamburger-icon {
    width: 30px;
    height: 20px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .hamburger-icon .line {
    width: 100%;
    height: 2.4px;
    background-color: black;
    transition: all 0.3s ease-in-out;
    transform-origin: center;
  }
  
  .hamburger-icon.is-active .line:nth-child(2) {
    opacity: 0;
    transform: translateX(-10px);
  }
  
  .hamburger-icon.is-active .line:nth-child(1) {
    transform: translateY(9px) rotate(45deg);
  }
  
  .hamburger-icon.is-active .line:nth-child(3) {
    transform: translateY(-9px) rotate(-45deg);
  }
  
  #navbarSupportedContent {
    text-align: center;
  }
  
  .navbar-nav {
    display: flex;
    justify-content: center;
    gap: 20px;
  }
  
  .nav-item {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeIn 0.5s ease-in-out forwards;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .nav-item a {
    white-space: nowrap;
    text-align: center;
  }
  
  @media (max-width: 768px) {
    .navbar-nav {
      flex-direction: column;
      gap: 10px;
    }
  }
  </style>
  
  <script>
  export default {
    data() {
      return {
        activeSection: "home",
        isNavbarOpen: false,
        navItems: [
          { name: "Home", href: "#home", icon: "bi bi-house-door", section: "home" },
          { name: "About", href: "#about", icon: "bi bi-person", section: "about" },
          {
            name: "Education & Experience",
            href: "#resume",
            icon: "bi bi-file-earmark-person",
            section: "resume",
          },
          { name: "Projects", href: "#projects", icon: "bi bi-puzzle", section: "projects" },
          { name: "Reach me", href: "#contact", icon: "bi bi-person-lines-fill", section: "contact" },
        ],
      };
    },
    mounted() {
      window.addEventListener("scroll", this.onScroll);
      this.onScroll();
    },
    beforeUnmount() {
      window.removeEventListener("scroll", this.onScroll);
    },
    methods: {
      toggleNavbar() {
        this.isNavbarOpen = !this.isNavbarOpen;
      },
      closeNavbar() {
        this.isNavbarOpen = false;
        const navbarCollapse = document.getElementById("navbarSupportedContent");
        if (navbarCollapse.classList.contains("show")) {
          navbarCollapse.classList.remove("show");
        }
      },
      onScroll() {
        const sections = ["home", "about", "resume", "projects", "contact"];
        let current = "";
  
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              current = section;
              break;
            }
          }
        }
  
        if (current) {
          this.activeSection = current;
        }
      },
      getItemAnimationStyle(index) {
        return this.isNavbarOpen
          ? { animationDelay: `${index * 0.1}s` }
          : { opacity: 0, transform: "translateY(20px)" };
      },
    },
  };
  </script>  