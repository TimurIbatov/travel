document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form")
  
    if (contactForm) {
      contactForm.addEventListener("submit", (e) => {
        e.preventDefault()
  
        // Get form values
        const name = document.getElementById("name").value
        const email = document.getElementById("email").value
        const message = document.getElementById("message").value
  
        // In a real application, you would send this data to a server
        console.log("Form submitted:", { name, email, message })
  
        // Show success message
        alert("Thank you for your message! We will get back to you soon.")
  
        // Reset form
        contactForm.reset()
      })
    }
  })
  