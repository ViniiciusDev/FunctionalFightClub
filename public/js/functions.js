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