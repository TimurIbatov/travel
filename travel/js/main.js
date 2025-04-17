document.addEventListener("DOMContentLoaded", () => {
    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById("mobile-menu-toggle")
    const mobileMenu = document.getElementById("mobile-menu")
  
    if (mobileMenuToggle && mobileMenu) {
      mobileMenuToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("active")
      })
    }
  
    // Search functionality
    const searchInput = document.getElementById("search-input")
    const clearSearchBtn = document.getElementById("clear-search")
  
    if (searchInput && clearSearchBtn) {
      searchInput.addEventListener("input", function () {
        if (this.value.length > 0) {
          clearSearchBtn.classList.add("visible")
        } else {
          clearSearchBtn.classList.remove("visible")
        }
      })
  
      clearSearchBtn.addEventListener("click", () => {
        searchInput.value = ""
        clearSearchBtn.classList.remove("visible")
      })
    }
  
    // Handle search form submission
    const searchForm = document.getElementById("search-form")
    if (searchForm) {
      searchForm.addEventListener("submit", (e) => {
        e.preventDefault()
        const query = searchInput.value.trim()
        if (query) {
          window.location.href = `search-results.html?q=${encodeURIComponent(query)}`
        }
      })
    }
  
    // Mobile search form
    const mobileSearchForm = document.getElementById("mobile-search-form")
    if (mobileSearchForm) {
      mobileSearchForm.addEventListener("submit", function (e) {
        e.preventDefault()
        const mobileQuery = this.querySelector("input").value.trim()
        if (mobileQuery) {
          window.location.href = `search-results.html?q=${encodeURIComponent(mobileQuery)}`
        }
      })
    }
  })
  