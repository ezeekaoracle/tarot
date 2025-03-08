document.addEventListener("DOMContentLoaded", function () {
  // Prevent right-click context menu
  document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
  });

  const drawButton = document.getElementById("drawCard");
  const cardImage = document.getElementById("cardImage");
  const cardName = document.getElementById("cardName");
  const cardMeaning = document.getElementById("cardMeaning");

  drawButton.addEventListener("click", function () {
    fetch("tarot.json")
      .then(response => response.json())
      .then(data => {
        const cards = data.cards;
        const randomCard = cards[Math.floor(Math.random() * cards.length)];

        cardImage.src = randomCard.image;
        cardImage.style.display = "block";
        cardName.textContent = randomCard.name;
        cardMeaning.textContent = randomCard.meaning;
      })
      .catch(error => console.error("Error loading tarot data:", error));
  });
});
