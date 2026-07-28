const filtros = document.querySelectorAll(".badge-custom");
const cards = document.querySelectorAll(".card-item");

filtros.forEach((filtro) => {
  filtro.addEventListener("click", () => {

    filtros.forEach(item => {
      item.classList.remove("badge-active");
    });

    filtro.classList.add("badge-active");

    const categoria = filtro.dataset.filter;

    if (categoria === "todos") {
      cards.forEach(card => {
        card.style.display = "block";
      });
      return;
    }

    cards.forEach(card => {
      if (card.dataset.category === categoria) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});
