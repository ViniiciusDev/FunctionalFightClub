const warrior = createKnight('Sir Winston');
const wolf = createWolf();

stage.start(
   warrior,
   wolf,
   document.querySelector('#char'),
   document.querySelector('#enemy')
);