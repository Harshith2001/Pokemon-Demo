for (let i = 1; i <= 898; i++) {
  const img = document.createElement("img");
  img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
  const pupa = document.querySelector("#pupa");
  pupa.append(img);
}
