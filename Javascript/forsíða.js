const strModifier = () => {
  let strValue = document.getElementById('str-input').value;
  let strDisplay = document.getElementById('str-modifier');
  let strDisplaySt = document.getElementById('str-modifier-st');

  if (strValue === "6" || strValue === "7") {
    strDisplay.innerHTML = "-2";
    strDisplaySt.innerHTML = "-2";
  } else if (strValue === "8" || strValue === "9") {
    strDisplay.innerHTML = "-1"; 
    strDisplaySt.innerHTML = "-1";
  } else if (strValue === "10" || strValue === "11") {
    strDisplay.innerHTML = "0"; 
    strDisplaySt.innerHTML = "0";
  } else if (strValue === "12" || strValue === "13") {
    strDisplay.innerHTML = "+1"; 
    strDisplaySt.innerHTML = "+1";
  } else if (strValue === "14" || strValue === "15") {
    strDisplay.innerHTML = "+2"; 
    strDisplaySt.innerHTML = "+2";
  } else if (strValue === "16" || strValue === "17") {
    strDisplay.innerHTML = "+3"; 
    strDisplaySt.innerHTML = "+3";
  } else if (strValue === "18" || strValue === "19") {
    strDisplay.innerHTML = "+4"; 
    strDisplaySt.innerHTML = "+4";
  } else if (strValue === "20") {
    strDisplay.innerHTML = "+5"; 
    strDisplaySt.innerHTML = "+5";
  }
};

const dexModifier = () => {
  let dexValue = document.getElementById('dex-input').value;
  let dexDisplay = document.getElementById('dex-modifier');
  let dexDisplaySt = document.getElementById('dex-modifier-st');

  if (dexValue === "6" || dexValue === "7") {
    dexDisplay.innerHTML = "-2";
    dexDisplaySt.innerHTML = "-2";
  } else if (dexValue === "8" || dexValue === "9") {
    dexDisplay.innerHTML = "-1"; 
    dexDisplaySt.innerHTML = "-1";
  } else if (dexValue === "10" || dexValue === "11") {
    dexDisplay.innerHTML = "0"; 
    dexDisplaySt.innerHTML = "0";
  } else if (dexValue === "12" || dexValue === "13") {
    dexDisplay.innerHTML = "+1"; 
    dexDisplaySt.innerHTML = "+1";
  } else if (dexValue === "14" || dexValue === "15") {
    dexDisplay.innerHTML = "+2"; 
    dexDisplaySt.innerHTML = "+2";
  } else if (dexValue === "16" || dexValue === "17") {
    dexDisplay.innerHTML = "+3"; 
    dexDisplaySt.innerHTML = "+3";
  } else if (dexValue === "18" || dexValue === "19") {
    dexDisplay.innerHTML = "+4"; 
    dexDisplaySt.innerHTML = "+4";
  } else if (dexValue === "20") {
    dexDisplay.innerHTML = "+5"; 
    dexDisplaySt.innerHTML = "+5";
  }
};

const conModifier = () => {
  let conValue = document.getElementById('con-input').value;
  let conDisplay = document.getElementById('con-modifier');
  let conDisplaySt = document.getElementById('con-modifier-st');

  if (conValue === "6" || conValue === "7") {
    conDisplay.innerHTML = "-2";
    conDisplaySt.innerHTML = "-2";
  } else if (conValue === "8" || conValue === "9") {
    conDisplay.innerHTML = "-1"; 
    conDisplaySt.innerHTML = "-1";
  } else if (conValue === "10" || conValue === "11") {
    conDisplay.innerHTML = "0"; 
    conDisplaySt.innerHTML = "0";
  } else if (conValue === "12" || conValue === "13") {
    conDisplay.innerHTML = "+1"; 
    conDisplaySt.innerHTML = "+1";
  } else if (conValue === "14" || conValue === "15") {
    conDisplay.innerHTML = "+2"; 
    conDisplaySt.innerHTML = "+2";
  } else if (conValue === "16" || conValue === "17") {
    conDisplay.innerHTML = "+3"; 
    conDisplaySt.innerHTML = "+3";
  } else if (conValue === "18" || conValue === "19") {
    conDisplay.innerHTML = "+4"; 
    conDisplaySt.innerHTML = "+4";
  } else if (conValue === "20") {
    conDisplay.innerHTML = "+5"; 
    conDisplaySt.innerHTML = "+5";
  }
};


const intModifier = () => {
  let intValue = document.getElementById('int-input').value;
  let intDisplay = document.getElementById('int-modifier');
  let intDisplaySt = document.getElementById('int-modifier-st');

  if (intValue === "6" || intValue === "7") {
    intDisplay.innerHTML = "-2";
    intDisplaySt.innerHTML = "-2";
  } else if (intValue === "8" || intValue === "9") {
    intDisplay.innerHTML = "-1"; 
    intDisplaySt.innerHTML = "-1";
  } else if (intValue === "10" || intValue === "11") {
    intDisplay.innerHTML = "0"; 
    intDisplaySt.innerHTML = "0";
  } else if (intValue === "12" || intValue === "13") {
    intDisplay.innerHTML = "+1"; 
    intDisplaySt.innerHTML = "+1";
  } else if (intValue === "14" || intValue === "15") {
    intDisplay.innerHTML = "+2"; 
    intDisplaySt.innerHTML = "+2";
  } else if (intValue === "16" || intValue === "17") {
    intDisplay.innerHTML = "+3"; 
    intDisplaySt.innerHTML = "+3";
  } else if (intValue === "18" || intValue === "19") {
    intDisplay.innerHTML = "+4"; 
    intDisplaySt.innerHTML = "+4";
  } else if (intValue === "20") {
    intDisplay.innerHTML = "+5"; 
    intDisplaySt.innerHTML = "+5";
  }
};

const wisModifier = () => {
  let wisValue = document.getElementById('wis-input').value;
  let wisDisplay = document.getElementById('wis-modifier');
  let wisDisplaySt = document.getElementById('wis-modifier-st');

  if (wisValue === "6" || wisValue === "7") {
    wisDisplay.innerHTML = "-2";
    wisDisplaySt.innerHTML = "-2";
  } else if (wisValue === "8" || wisValue === "9") {
    wisDisplay.innerHTML = "-1"; 
    wisDisplaySt.innerHTML = "-1";
  } else if (wisValue === "10" || wisValue === "11") {
    wisDisplay.innerHTML = "0"; 
    wisDisplaySt.innerHTML = "0";
  } else if (wisValue === "12" || wisValue === "13") {
    wisDisplay.innerHTML = "+1"; 
    wisDisplaySt.innerHTML = "+1";
  } else if (wisValue === "14" || wisValue === "15") {
    wisDisplay.innerHTML = "+2"; 
    wisDisplaySt.innerHTML = "+2";
  } else if (wisValue === "16" || wisValue === "17") {
    wisDisplay.innerHTML = "+3"; 
    wisDisplaySt.innerHTML = "+3";
  } else if (wisValue === "18" || wisValue === "19") {
    wisDisplay.innerHTML = "+4"; 
    wisDisplaySt.innerHTML = "+4";
  } else if (wisValue === "20") {
    wisDisplay.innerHTML = "+5"; 
    wisDisplaySt.innerHTML = "+5";
  }
};

const chrModifier = () => {
  let chrValue = document.getElementById('chr-input').value;
  let chrDisplay = document.getElementById('chr-modifier');
  let chrDisplaySt = document.getElementById('chr-modifier-st');

  if (chrValue === "6" || chrValue === "7") {
    chrDisplay.innerHTML = "-2";
    chrDisplaySt.innerHTML = "-2";
  } else if (chrValue === "8" || chrValue === "9") {
    chrDisplay.innerHTML = "-1"; 
    chrDisplaySt.innerHTML = "-1";
  } else if (chrValue === "10" || chrValue === "11") {
    chrDisplay.innerHTML = "0"; 
    chrDisplaySt.innerHTML = "0";
  } else if (chrValue === "12" || chrValue === "13") {
    chrDisplay.innerHTML = "+1"; 
    chrDisplaySt.innerHTML = "+1";
  } else if (chrValue === "14" || chrValue === "15") {
    chrDisplay.innerHTML = "+2"; 
    chrDisplaySt.innerHTML = "+2";
  } else if (chrValue === "16" || chrValue === "17") {
    chrDisplay.innerHTML = "+3"; 
    chrDisplaySt.innerHTML = "+3";
  } else if (chrValue === "18" || chrValue === "19") {
    chrDisplay.innerHTML = "+4"; 
    chrDisplaySt.innerHTML = "+4";
  } else if (chrValue === "20") {
    chrDisplay.innerHTML = "+5"; 
    chrDisplaySt.innerHTML = "+5";
  }
};
