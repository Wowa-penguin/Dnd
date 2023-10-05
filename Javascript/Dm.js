const goblenSpwan = () => {
  let stórademóið = '';
  const demoið = 
  `
    <div class="enemy">
      <div class="ability-modifier">
        <div class="str-div">
          <div class="texsti-ability-moifier">STRENGTH</div>
          <div class="str"></div>
        </div>
        <div class="dex-div">
          <div class="texsti-ability-moifier">DEXTERITY</div>
          <div class="dex"></div>
        </div>
        <div class="con-div">
          <div class="texsti-ability-moifier">CONSTITUTION</div>
          <div class="con"></div>
        </div>
        <div class="int-div">
          <div class="texsti-ability-moifier">INTELLIGENCE</div>
          <div class="int"></div>
        </div>
        <div class="wis-div">
          <div class="texsti-ability-moifier">WISDOM</div>
          <div class="wis"></div>
        </div>
        <div class="cha-div">
          <div class="texsti-ability-moifier">CHARISMA</div>
          <div class="cha"></div>
        </div>
      </div>
      <div class="ability-st">
        <div>Goblen</div>  
        <div class="ability-st-div">
          <div class="smá-plás"></div>
          <div class="str"></div>
          <div class="texsti-ability-moifier">STRENGTH</div>
        </div>
        <div class="ability-st-div">
          <div class="smá-plás"></div>
          <div class="dex"></div>
          <div class="texsti-ability-moifier">DEXTERITY</div>
        </div>
        <div class="ability-st-div">
          <div class="smá-plás"></div>
          <div class="con"></div>
          <div class="texsti-ability-moifier">CONSTITUTION</div>
        </div>
        <div class="ability-st-div">
          <div class="smá-plás"></div>
          <div class="int"></div>
          <div class="texsti-ability-moifier">INTELLIGENCE</div>
        </div>
        <div class="ability-st-div">
          <div class="smá-plás"></div>
          <div class="wis"></div>
          <div class="texsti-ability-moifier">WISDOM</div>
        </div>
        <div class="ability-st-div">
          <div class="smá-plás"></div>
          <div class="cha"></div>
          <div class="texsti-ability-moifier">CHARISMA</div>
        </div>
        <div class="texsti-ability-moifier-st">SAVING THROWS</div>
        <div class="button-div">
          <button class="display-button" onclick="
            updateModifierGoblen('str'),
            updateModifierGoblen('dex'),
            updateModifierGoblen('con'),
            updateModifierGoblen('int'),
            updateModifierGoblen('wis'),
            updateModifierGoblen('cha'),
            displayGoblenStats()
          ">Update Stats</button>        
        </div>
      </div>     
      <div class="ac-hp-deathSaves-div">
        <div class="ac-initiative-speed">
          <div class="ac">
            <div class="ability-modifiers-display ac-modifier"></div>
            <div>A.C</div>
          </div>
          <div class="initiative">
            <div class="ability-modifiers-display initiative-modifier"></div>
            <div>INITIATIVE</div>
          </div>
          <div class="speed">
            <div class="ability-modifiers-display speed-modifier"></div>
            <div>SPEED</div>
          </div>
        </div>
        <div class="HIT-POINTS-div">
          <div class="display-hit-points-saman-flex">
            <div class="maximum-texst">Hit Point Maximum</div>
            <input class="HIT-POINTS-input hit-points-input" type="number" oninput="updateHitPoints('.hit-points-input', '.HIT-POINTS')"> <!-- Use oninput instead of onkeydown -->
          </div>
          <div class="display-hit-points-saman-flex">
            <div class="display-hit-points-texst HIT-POINTS"></div>
            <div class="display-hit-points-texst">Hp</div>
          </div>
          <div class="HIT-POINTS-BUTTONS">
            <button class="HIT-POINTS-button-Plús plús-1" onclick="hitPointsButtons(1)">+1</button>
            <button class="HIT-POINTS-button-mínus" onclick="setHitpontToZero()">0</button>
            <button class="HIT-POINTS-button-mínus mínus-1" onclick="hitPointsButtons(-1)">-1</button> 
          </div>
        </div>
        <div class="attack">
          <button class="attack-button" onclick="calD20('.attack-d20'), calD6('.attack-damei')">attack</button>
          <div class="attack-texsti attack-d20"></div>
          <div class="attack-texsti attack-damei"></div>
        </div>
      </div>    
    </div>
  `;
  stórademóið = demoið;
  return document.querySelector('.stóradmóið'). innerHTML = stórademóið;
};