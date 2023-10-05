// Display-Goblen
const updateModifierGoblen = (abilityName) => {
  const displayElements = document.querySelectorAll(`.${abilityName}`); 
  const goblenStats = {
    "str": "+2",
    "dex": "+1",
    "con": "+0",
    "int": "-1",
    "wis": "-2",
    "cha": "+0"
  };
  const modifier = goblenStats[abilityName];
  displayElements.forEach((element) => {
    element.innerText = modifier;
  });
};

const displayGoblenStats = () =>  {
  const hitPointsElements = document.querySelectorAll('.HIT-POINTS');
  const acModifierElements = document.querySelectorAll('.ac-modifier');
  const initiativeModifierElements = document.querySelectorAll('.initiative-modifier');
  const speedModifierElements = document.querySelectorAll('.speed-modifier');

  hitPointsElements.forEach(element => {
    element.innerHTML = '20';
  });

  acModifierElements.forEach(element => {
    element.innerHTML = '13';
  });

  initiativeModifierElements.forEach(element => {
    element.innerHTML = '+1';
  });

  speedModifierElements.forEach(element => {
    element.innerHTML = '30ft';
  });
};


const updateHitPoints = (inputId, hitPointsId) => {
  const inputValue = parseFloat(document.querySelector(inputId).value);
  const hitPointsElement = document.querySelector(hitPointsId);
  console.log(inputValue);
  console.log(hitPointsElement);
  
  if (!isNaN(inputValue)) {
    hitPointsElement.innerText = inputValue;
  } else {
    console.error('Invalid input. Please enter a valid number.');
  }
}; // Þetta er til að sína hp sem maður byrjar með


const hitPointsButtons = (hlutfal) => {
  const hitPoints = document.querySelector('.HIT-POINTS').innerText;
  const	numberAfHitPoints = Number(hitPoints);
  const útrekna = numberAfHitPoints + hlutfal;
  document.querySelector('.HIT-POINTS').innerText = útrekna ;
}; // þetta er + og - buttons til að gefa og taka hp frá 10 5 1

const setHitpontToZero = () => {
  document.querySelector('.HIT-POINTS').innerHTML = '';
};

const calD20 = (displayElements) => {
  let d20 = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
  if (d20 == 20) {
    console.log('Ez noob');
  };

  document.querySelectorAll(displayElements).forEach(element => {
    element.innerHTML = '1d20 =' + ' ' + d20;
  });
};
const calD6 = (displayElements) => {
  let d6 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  const plúsModifier = d6 + 1;
  
  document.querySelectorAll(displayElements).forEach(element => {
   element.innerHTML ='1d6 =' + ' ' + d6 + ' +modifir ' + plúsModifier;  
  }); 
};
