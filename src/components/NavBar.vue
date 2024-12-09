<template>
    <nav class="navbar navbar-expand-lg sticky-top">
        <div class="container-fluid p-0">
            <a class="navbar-brand p-0" href="#home">
                <img src="https://i.postimg.cc/ZKXq1Gx9/Screenshot-2024-11-29-102725.png" alt="logo" class="img-fluid" loading="lazy">
            </a>
            <button class="navbar-toggler" type="button" @click="toggleNavbar" aria-controls="navbarSupportedContent" :aria-expanded="isNavbarOpen" aria-label="Toggle navigation">
        <div class="hamburger-icon" :class="{ 'is-active': isNavbarOpen }">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent" :class="{ show: isNavbarOpen }">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" :class="{ 'active': activeSection === 'home' }" href="#home" @click="closeNavbar">
                            <i class="bi bi-house-door"></i> Home
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" :class="{ 'active': activeSection === 'about' }" href="#about" @click="closeNavbar">
                            <i class="bi bi-person"></i> About
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" :class="{ 'active': activeSection === 'resume' }" href="#resume" @click="closeNavbar">
                            <i class="bi bi-file-earmark-person"></i> Education & Experience
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" :class="{ 'active': activeSection === 'projects' }" href="#projects" @click="closeNavbar">
                            <i class="bi bi-puzzle"></i> Projects
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" :class="{ 'active': activeSection === 'contact' }" href="#contact" @click="closeNavbar">
                            <i class="bi bi-person-lines-fill"></i> Reach me
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<style scoped>
nav {
    padding: 0px;
    margin: 0px;
    background-color: #ff8c00;
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
    border-color: black;
    margin-right: 2%;
    height: 40px;
    padding: 0.5rem;
}

.navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 1%29' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 7h22M4 13h22M4 19h22'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: center;
    margin-top: 4px;
    height: 30px;
    width: 30px;
}

.navbar-toggler-icon-x {
    position: relative;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.navbar-toggler-icon-x::before,
.navbar-toggler-icon-x::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 2px;
    background-color: black;
}

.navbar-toggler-icon-x::before {
    transform: rotate(45deg);
}

.navbar-toggler-icon-x::after {
    transform: rotate(-45deg);
}

.nav-item i {
    margin-right: 5px;
}

img[alt='logo'] {
    width: 7rem;
    height: 5rem;
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
    margin-left: 35%;
}
</style>

<script>
export default {
    data() {
        return {
            activeSection: 'home',
            isNavbarOpen: false
        }
    },
    mounted() {
        window.addEventListener('scroll', this.onScroll)
        this.onScroll()
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.onScroll)
    },
    methods: {
        toggleNavbar() {
            this.isNavbarOpen = !this.isNavbarOpen;
        },
        closeNavbar() {
            this.isNavbarOpen = false;
            let navbarCollapse = document.getElementById('navbarSupportedContent');
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        },
        onScroll() {
            const sections = ['home', 'about', 'resume', 'projects', 'contact'];
            let current = '';

            for (let section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        current = section;
                        break;
                    }
                }
            }

            if (current !== '') {
                this.activeSection = current;
            }
        }
    }
}
</script>