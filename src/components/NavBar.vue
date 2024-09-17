<template>
    <nav class="navbar navbar-expand-lg sticky-top">
        <div class="container-fluid p-0">
            <a class="navbar-brand p-0" href="#home">
                <img src="https://simanyests.github.io/Images/images/Screenshot 2024-05-07 141157.png" alt="logo" class="img-fluid" loading="lazy">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
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
                            <i class="bi bi-file-earmark-person"></i> Resume
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
}

.navbar-toggler-icon {
    background-color: #ff8c00;
}

.nav-item i {
    margin-right: 5px;
}

img[alt='logo'] {
    width: 5rem;
    height: 3rem;
}
</style>

<script>
export default {
    data() {
        return {
            activeSection: 'home'
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
        closeNavbar() {
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