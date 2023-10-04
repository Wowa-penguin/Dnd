const updateModifierGoblen = (abilityName) => {
  const displayElements = document.querySelectorAll(`.${abilityName}`); 
  const goblenStats = {
    "str": "+2",
    "dex": "+1",
    "con": "0",
    "int": "-2",
    "wis": "-2",
    "cha": "0"
  };
  const modifier = goblenStats[abilityName];
  displayElements.forEach((element) => {
    element.innerText = modifier;
  });
};
