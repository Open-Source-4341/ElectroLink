document.addEventListener("DOMContentLoaded", () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
    const mobileMenu = document.querySelector(".mobile-menu")
  
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("active")
    })
  
    // Close mobile menu when clicking outside
    document.addEventListener("click", (event) => {
      if (!event.target.closest(".mobile-menu") && !event.target.closest(".mobile-menu-btn")) {
        mobileMenu.classList.remove("active")
      }
    })
  
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        const targetId = this.getAttribute("href")
        if (targetId === "#") return
  
        const targetElement = document.querySelector(targetId)
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 64, // Header height
            behavior: "smooth",
          })
  
          // Close mobile menu after clicking a link
          mobileMenu.classList.remove("active")
        }
      })
    })
  
    // Testimonials Slider
    
  
    // Modal functionality
    const registerBtns = document.querySelectorAll(".btn-primary:not(.show-login)")
    const providerBtns = document.querySelectorAll(".btn-outline:not(.show-register)")
    const loginBtns = document.querySelectorAll(".btn-outline:first-child")
    const registerModal = document.getElementById("registerModal")
    const loginModal = document.getElementById("loginModal")
    const closeModalBtns = document.querySelectorAll(".close-modal")
    const showLoginLinks = document.querySelectorAll(".show-login")
    const showRegisterLinks = document.querySelectorAll(".show-register")
    const tabBtns = document.querySelectorAll(".tab-btn")
  
    function openModal(modal) {
      modal.classList.add("active")
      document.body.style.overflow = "hidden"
    }
  
    function closeModal(modal) {
      modal.classList.remove("active")
      document.body.style.overflow = ""
    }
  
    function closeAllModals() {
      document.querySelectorAll(".modal").forEach((modal) => {
        closeModal(modal)
      })
    }
  
    registerBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        openModal(registerModal)
        document.querySelector('[data-tab="owner"]').click()
      })
    })
  
    providerBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        openModal(registerModal)
        document.querySelector('[data-tab="provider"]').click()
      })
    })
  
    loginBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        openModal(loginModal)
      })
    })
  
    closeModalBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        closeAllModals()
      })
    })
  
    showLoginLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault()
        closeAllModals()
        openModal(loginModal)
      })
    })
  
    showRegisterLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault()
        closeAllModals()
        openModal(registerModal)
      })
    })
  
    // Close modal when clicking outside
    document.querySelectorAll(".modal").forEach((modal) => {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          closeModal(modal)
        }
      })
    })
  
    // Tab functionality
    tabBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const tabId = btn.getAttribute("data-tab")
  
        // Update active tab button
        tabBtns.forEach((b) => b.classList.remove("active"))
        btn.classList.add("active")
  
        // Update active tab content
        document.querySelectorAll(".tab-content").forEach((content) => {
          content.classList.remove("active")
        })
        document.getElementById(`${tabId}-tab`).classList.add("active")
      })
    })
  
    // Form submission (prevent default for demo)
    document.querySelectorAll("form").forEach((form) => {
      form.addEventListener("submit", (e) => {
        e.preventDefault()
        alert("Esta funcionalidad estaría conectada a un backend en una implementación real.")
        closeAllModals()
      })
    })
  })
  