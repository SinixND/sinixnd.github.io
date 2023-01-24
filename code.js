//===========================================================
// IMPORT DATA
import {mask} from "./data/masks.js";

//===========================================================
// STARTUP FUNCTION
document.addEventListener('DOMContentLoaded', function () {
  //=========================================================
  // DEBUG
  //console.log(mask.Vile.talentName);
  //console.log(mask['Vile'].talentName);
  //alert("hi");

  //=========================================================
  // SET BACKGROUND ICONS
  let icons = ["main-weapon", "sidearm", "mask", "backpack", "chest", "gloves", "holster", "kneepads"];
  for (let i = 0; i < icons.length; i++) {
    let file = `./icons/${icons[i]}.png`;
    let value = `linear-gradient(var(--cbg75), var(--cbg75)), url(${file}) center/contain no-repeat`;
    let element = document.getElementsByClassName(`${icons[i]}`);
    for (let j = 0; j < element.length; j++) {
      element[j].style.background = value;
    }
  };

  //=========================================================
  // FILL LISTS
  const tplLGI = document.getElementById('template-list-gear-item');
  const list = document.getElementById('list-gear');
  let objNames = [];
  for (let objName in mask) {      
    if (mask.hasOwnProperty(objName)) {
      objNames.push(objName);
    };
  };
  for (let i=0; i < objNames.length; i++) { 
    let name = `${objNames[i]}`;
    const clonedListGearItem = tplLGI.content.cloneNode(true);

    // item name
    clonedListGearItem.querySelector('.item-name').innerText = `${name}`;

    // item color
    if (mask[`${name}`].rarity == "Exotic") {
      //clonedListGearItem.style.background = 'var(--car)';
    }
    else if (mask[`${name}`].rarity == "Named") {
      //clonedListGearItem.style.background = 'var(--cay)';
    }
    else if (mask[`${name}`].rarity == "Set") {
      //clonedListGearItem.style.background = 'var(--cag)';
    }
    else if (mask[`${name}`].rarity == "High-End") {
      //clonedListGearItem.style.background = 'var(--cdsn2)';
    };


    // item type
    if (mask[`${name}`].hasOwnProperty('type') && mask[`${name}`].type !== `${name}`) {
      let gearType = clonedListGearItem.querySelector('.item-type')
      gearType.innerText = "(";
      gearType.innerText += mask[`${name}`].type;
      gearType.innerText += ")";
    };

    // item talent
    if (mask[`${name}`].hasOwnProperty('talentName')) {
      let gearTalentName = clonedListGearItem.querySelector('.item-talent-name')
      gearTalentName.classList.add('hLineTop');
      gearTalentName.innerText = mask[`${name}`].talentName;
    };
    if (mask[`${name}`].hasOwnProperty('talentText')) {
      clonedListGearItem.querySelector('.item-talent-text').innerText = mask[`${name}`].talentText;
    };

    list.appendChild(clonedListGearItem);
  }
}, false);

//===========================================================
// POPUP FUNCTIONS
window.showPopup = function showPopup(Class) {
  document.getElementById(`popupGear`).style.display = "flex";
}

window.closePopup = function closePopup() {
  document.getElementById(`popupGear`).style.display = "none";
}

/*
let vdiv = document.createElement('div');
vdiv.id = 'ID';
vdiv.className = 'flex';
document.getElementsById('list-mask').appendChild(vdiv);

function useTemplate() {
      var myTemplate = document.getElementById('myTemplate');
          normalContent = document.getElementById('normalContent');
          clonedTemplate = myTemplate.content.cloneNode(true);
          clonedTemplate.id = 'ID';
          normalContent.appendChild(clonedTemplate);
          }
          */
