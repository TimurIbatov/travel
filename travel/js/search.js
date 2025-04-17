document.addEventListener("DOMContentLoaded", () => {
    // Sample destination data - можно расширить этот список
    const destinations = [
      {
        id: 1,
        title: "Toronto, Canada",
        description:
          "A diverse and cosmopolitan city, Toronto is known for its iconic CN Tower, cultural events, and diverse neighborhoods.",
        image: "images/toronto.jpg",
        keywords: ["canada", "north america", "cn tower", "urban", "city"]
      },
      {
        id: 2,
        title: "Sydney, Australia",
        description:
          "A beautiful coastal city with a relaxed atmosphere, featuring the Sydney Opera House, Harbour Bridge, and stunning beaches.",
        image: "images/sydney.jpg",
        keywords: ["australia", "beach", "opera house", "harbour bridge", "coastal"]
      },
      {
        id: 3,
        title: "New York, USA",
        description:
          "The city that never sleeps, featuring iconic landmarks like Times Square, Central Park, and the Statue of Liberty.",
        image: "images/new-york.jpg",
        keywords: ["usa", "america", "times square", "central park", "statue of liberty", "urban"]
      },
      {
        id: 4,
        title: "Paris, France",
        description:
          "The city of love, known for the Eiffel Tower, Louvre Museum, and charming cafes along the Seine River.",
        image: "images/paris.jpg",
        keywords: ["france", "europe", "eiffel tower", "louvre", "romance", "seine"]
      },
      {
        id: 5,
        title: "Bali, Indonesia",
        description:
          "A tropical paradise with beautiful beaches, lush rice terraces, and a vibrant cultural scene with ancient temples.",
        image: "images/bali.jpg",
        keywords: ["indonesia", "beach", "tropical", "island", "temples", "rice terraces"]
      },
      {
        id: 6,
        title: "Rome, Italy",
        description:
          "The Eternal City with ancient ruins like the Colosseum and Roman Forum, plus Vatican City and delicious Italian cuisine.",
        image: "images/rome.jpg",
        keywords: ["italy", "europe", "colosseum", "vatican", "history", "ancient"]
      }
    ]
  
    // Get query parameters
    const urlParams = new URLSearchParams(window.location.search)
    const query = urlParams.get("q")
  
    // Display results if on the search results page
    const resultsContainer = document.getElementById("results-container")
    if (resultsContainer) {
      if (query) {
        // Filter destinations based on search query
        const filteredDestinations = destinations.filter(
          (dest) =>
            dest.title.toLowerCase().includes(query.toLowerCase()) ||
            dest.description.toLowerCase().includes(query.toLowerCase()) ||
            dest.keywords.some(keyword => keyword.toLowerCase().includes(query.toLowerCase()))
        )
  
        if (filteredDestinations.length > 0) {
          // Create heading for search results
          const heading = document.createElement("h2")
          heading.textContent = `Search results for: "${query}"`
          heading.className = "search-heading"
          resultsContainer.appendChild(heading)
  
          // Display filtered destinations
          filteredDestinations.forEach((dest) => {
            resultsContainer.appendChild(createDestinationCard(dest))
          })
        } else {
          // No results found
          const noResults = document.createElement("div")
          noResults.className = "no-results"
          noResults.innerHTML = `
            <h2>No destinations found</h2>
            <p>We couldn't find any destinations matching your search criteria.</p>
            <a href="index.html" class="btn btn-primary">Return to Home</a>
          `
          resultsContainer.appendChild(noResults)
        }
      } else {
        // Display all destinations if no query
        const heading = document.createElement("h2")
        heading.textContent = "Popular Destinations"
        heading.className = "search-heading"
        resultsContainer.appendChild(heading)
  
        destinations.forEach((dest) => {
          resultsContainer.appendChild(createDestinationCard(dest))
        })
      }
    }
  
    // Function to create destination card
    function createDestinationCard(destination) {
      const card = document.createElement("div")
      card.className = "destination-card"
      card.innerHTML = `
        <div class="destination-image">
          <img src="${destination.image}" alt="${destination.title}">
        </div>
        <div class="destination-details">
          <h3>${destination.title}</h3>
          <p>${destination.description}</p>
          <div class="keywords">
            ${destination.keywords.map(keyword => `<span class="keyword">${keyword}</span>`).join('')}
          </div>
          <a href="#" class="btn btn-primary">Visit</a>
        </div>
      `
      return card
    }
  
    // Также добавим функциональность поиска на главной странице
    const searchInput = document.getElementById("search-input")
    if (searchInput && window.location.pathname.includes("index.html") || window.location.pathname === "/") {
      // Предварительный поиск при вводе (без перезагрузки страницы)
      searchInput.addEventListener("input", function() {
        const query = this.value.trim().toLowerCase()
        const resultsPreview = document.getElementById("results-container")
        
        if (resultsPreview && query.length > 2) {
          // Очищаем предыдущие результаты
          resultsPreview.innerHTML = ""
          
          // Фильтруем направления
          const filteredDestinations = destinations.filter(
            (dest) =>
              dest.title.toLowerCase().includes(query) ||
              dest.description.toLowerCase().includes(query) ||
              dest.keywords.some(keyword => keyword.toLowerCase().includes(query))
          ).slice(0, 4) // Показываем только первые 4 результата
          
          if (filteredDestinations.length > 0) {
            // Создаем заголовок
            const heading = document.createElement("h2")
            heading.textContent = "Suggested destinations:"
            heading.className = "search-heading"
            resultsPreview.appendChild(heading)
            
            // Отображаем отфильтрованные направления
            filteredDestinations.forEach((dest) => {
              resultsPreview.appendChild(createDestinationCard(dest))
            })
            
            // Показываем секцию результатов
            document.querySelector(".search-results").style.display = "block"
          }
        } else if (resultsPreview && query.length <= 2) {
          // Скрываем секцию результатов, если запрос слишком короткий
          document.querySelector(".search-results").style.display = "none"
        }
      })
    }
  })