// navigation
  document.querySelector('#navigation-button').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.featured-deals').scrollIntoView({ behavior: "smooth" });
  });
  // Get all filter buttons and product cards
const filterButtons = document.querySelectorAll('.filter-btn, .filter-btn-active');
const productCards = document.querySelectorAll('.product-card');

// Add click event listener to each filter button
filterButtons.forEach(button => {
    button.addEventListener('click', function() {
        const selectedCategory = this.getAttribute('data-filter');
        
        // Remove active class from all buttons
        filterButtons.forEach(btn => {
            btn.classList.remove('filter-btn-active');
            btn.classList.add('filter-btn');
        });
        
        // Add active class to clicked button
       this.classList.remove('filter-btn');
        this.classList.add('filter-btn-active');
        
        // Filter product cards
        productCards.forEach(card => {
            if (selectedCategory === 'all') {
                card.style.display = 'block';
                // Add fade-in animation
                 card.style.animation = 'none';          // wipe the current one
                 void card.offsetHeight; // trigger reflow
                card.style.animation = 'fadeIn 0.5s ease-in';
            } else{
                const cardCategory = card.getAttribute('data-category');
            if (cardCategory === selectedCategory) {
                card.style.display = 'block';
                // Add fade-in animation
                  card.style.animation = 'none';          // wipe the current one
                 void card.offsetHeight; // trigger reflow
                card.style.animation = 'fadeIn 0.5s ease-in';
            } else {
                card.style.display = 'none';
            }
        }
        });
    });
});

// Add fade-in animation

const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
//harmburger menu
const harmburger = document.querySelector('.harmburger');
const navMenu = document.querySelector('.nav-links');
 
harmburger.addEventListener('click' , () => {
    harmburger.classList.toggle('active');
    navMenu.classList.toggle('active');
   
});
