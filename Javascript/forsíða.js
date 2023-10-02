const updateModifier = (abilityName) => {
  const inputValue = document.getElementById(`${abilityName}-input`).value;
  const displayElement = document.getElementById(`${abilityName}-modifier`);
  const displayStElement = document.getElementById(`${abilityName}-modifier-st`);
  const displaySkillElements = document.querySelectorAll(`.${abilityName}-modifier-skill`)
  
  const modifierMapping = {
    "4": -2,
    "5": -2,
    "6": -2,
    "7": -2,
    "8": -1,
    "9": -1,
    "10": 0,
    "11": 0,
    "12": 1,
    "13": 1,
    "14": 2,
    "15": 2,
    "16": 3,
    "17": 3,
    "18": 4,
    "19": 4,
    "20": 5,
  };

  const modifier = modifierMapping[inputValue] || 0;

  if (modifier >= 0) {
    displayElement.innerHTML = '+' + modifier;
    displayStElement.innerHTML = '+' + modifier;
    displaySkillElements.forEach((element) => {
      element.innerHTML = '+' + modifier;
    });
  } else {
    displayElement.innerHTML = modifier;
    displayStElement.innerHTML = modifier;
    displaySkillElements.forEach((element) => {
      element.innerHTML = modifier;
    });
  }
  console.log(inputValue);
  console.log(displayElement);
  console.log(displayStElement);
  console.log(displaySkillElements);
};

const proficiencyModifier = (checkboxId, modifierId, originalValue) => {
  const checkBox = document.getElementById(checkboxId);
  const modifier = document.getElementById(modifierId);
  const proficiency = parseFloat(document.getElementById('proficiency-modifier').innerText);

  if (checkBox.checked) {
    const newModifier = parseFloat(modifier.innerText) + proficiency;
    modifier.innerText = '+' + newModifier;
  } else {
    modifier.innerText = originalValue;
  }
};

const proficiencyModifierForSkill = (nafn, modifierClass, originalValue) => {
  const checkBoxes = document.getElementById(nafn);
  const modifiers = document.getElementById(modifierClass);
  const proficiency = parseFloat(document.getElementById('proficiency-modifier').innerText);

  
  if (checkBoxes.checked) {
    const newModifier = parseFloat(modifiers.innerText) + proficiency;
    modifiers.innerText = '+' + newModifier;
  } else {
    modifiers.innerText = originalValue;
  }
};

// það þarf að bæta við nýjy fun => þar sem er sín fram á svo bara láta það röna báðar í einnu 