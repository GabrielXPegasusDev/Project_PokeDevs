const selectionPokedevsList = document.querySelectorAll(".pokedev");

selectionPokedevsList.forEach((pokedev) => {
  pokedev.addEventListener("click", () => {
    hidePokedevCard();

    const idSelectedPokedev = showPokedevCardSelected(pokedev);

    deactivatedPokedevOnList();

    activeSelectedPokedevOnList(idSelectedPokedev);
  });
});

function activeSelectedPokedevOnList(idSelectedPokedev) {
  const selectedPokedevOnList = document.getElementById(idSelectedPokedev);
  selectedPokedevOnList.classList.add("active");
}

function deactivatedPokedevOnList() {
  const activedPokedevOnList = document.querySelector(".active");
  activedPokedevOnList.classList.remove("active");
}

function showPokedevCardSelected(pokedev) {
  const idSelectedPokedev = pokedev.attributes.id.value;
  const idPokedevCardToOpen = idSelectedPokedev + "-card";
  const toOpenPokedevCard = document.getElementById(idPokedevCardToOpen);
  toOpenPokedevCard.classList.add("open");
  return idSelectedPokedev;
}

function hidePokedevCard() {
  const openPokedevCard = document.querySelector(".open");
  openPokedevCard.classList.remove("open");
}
