// Default Characters -------------------------
const defaultCharacter =  {
   name: '',
   life: 1,
   maxLife: 1,
   attack: 0,
   defense: 0
}

// Creating a Knight --------------------------
const createKnight = (name)   =>    {
   return   {
      ...defaultCharacter,
      name,
      life: 100,
      maxLife: 100,
      attack: 10,
      defense: 8
   }
}

// Creating a Witcher -------------------------

const createWitcher = (name)  => {
   return   {
      ...defaultCharacter,
      name,
      life: 70,
      maxLife: 70,
      attack: 18,
      defense: 4
   }
}

// Creating a Wolf ----------------------------

const createWolf = () => {
   return   {
      ...defaultCharacter,
      name: 'Wolf',
      life: 40,
      maxLife: 40,
      attack: 5,
      defense: 4
   }
}

// Creating DireWolf --------------------------
 const createDireWolf = () => {
   return   {
      ...defaultCharacter,
      name: 'DireWolf',
      life: 120,
      maxLife: 120,
      attack: 15,
      defense: 8
   }
 }

 // Creating Arena ----------------------------
 const stage = {
      player: null,
      npc: null,
      playerElement: null,
      npcElement: null,

      start(player, npc, playerElement, npcElement)   {
         // ? Take information from the player and the npc.
         this.player = player;
         this.npc = npc;
         this.playerElement = playerElement;
         this.npcElement = npcElement;

         // ? Take Attack Btn
         this.playerElement.querySelector('.attack-btn').addEventListener('click', () => this.doAttack(this.player, this.npc));
         this.npcElement.querySelector('.attack-btn').addEventListener('click', () => this.doAttack(this.npc, this.player));

         // ? Update Function
         this.update();
      },

      update() {
         this.playerElement.querySelector('.name').innerHTML = `${this.player.name} - ${this.player.life.toFixed(1)} HP`;
         let playerPct = (this.player.life / this.player.maxLife) * 100;
         this.playerElement.querySelector('.life').style.width = `${playerPct}%`

         this.npcElement.querySelector('.name').innerHTML = `${this.npc.name} - ${this.npc.life.toFixed(1)} HP`;
         let npcPct = (this.npc.life / this.npc.maxLife) * 100;
         this.npcElement.querySelector('.life').style.width = `${npcPct}%`;
      },

      // ? Attack Function
      doAttack(attacking, attacked)  {
         if(attacking.life <= 0 || attacked.life <= 0)   {
            log.addMessage("You are already dead.");
            return;
         }

         const attackFactor = (Math.random() * 2).toFixed(2);
         const defenseFactor = (Math.random() * 2).toFixed(2);

         const actualAttack = attacking.attack * attackFactor;
         const actualDefense = attacking.defense * defenseFactor;

         if(actualAttack > actualDefense) {
            attacked.life -= actualAttack;
            attacked.life = attacked.life < 0 ? 0 : attacked.life;

            log.addMessage(`${attacking.name} Caused ${actualAttack.toFixed(2)} Damage in ${attacked.name}`);
         }  else  {
            log.addMessage(`${attacked.name} Succedd Defense`);
         }


         this.update();
      }
 }

 const log = {
   list: [],
   addMessage(msg)   {
      this.list.push(msg);
      this.render();
   },
   render() {
      const logElement = document.querySelector('.log');
      logElement.innerHTML = '';

      for(let i in this.list) {
         logElement.innerHTML += `<li>${this.list[i]}</li>`;
      }
   }

 }