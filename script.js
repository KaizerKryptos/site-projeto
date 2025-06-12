function toggleInfo(element) {
  const paragraph = element.querySelector("p");
  paragraph.classList.toggle("hidden");
}

function toggleCard(headerElement) {
  const clickedCard = headerElement.closest('.info-card');
  const allCards = document.querySelectorAll('.info-card');

  allCards.forEach(card => {
    if (card !== clickedCard) {
      card.classList.remove('open');
    }
  });

  clickedCard.classList.toggle('open');
}


function animateOnScroll() {
  const cards = document.querySelectorAll('.info-card');
  const triggerBottom = window.innerHeight * 0.85;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add('appear');
    }
  });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);
