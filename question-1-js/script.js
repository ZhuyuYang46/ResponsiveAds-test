function getPokes() {
  const elScript = document.querySelector("#pokes");
  if (!elScript) return [];
  const json = elScript.textContent;
  return JSON.parse(json);
}

const pokes = getPokes();
console.log("Pokes Data Loaded:", pokes.length);

const type = "grass";
const answer1 = pokes
  .filter(poke => poke.types.includes(type))
  .map(poke => poke.name);

const types = ["bug", "poison"];

const answer2Or = pokes
  .filter(poke => types.some(t => poke.types.includes(t)))
  .map(poke => poke.name);

const answer2And = pokes
  .filter(poke => types.every(t => poke.types.includes(t)))
  .map(poke => poke.name);

console.log("Answer 1 (Grass):", answer1);
console.log("Answer 2 (Bug OR Poison):", answer2Or);
console.log("Answer 2 (Bug AND Poison):", answer2And);
