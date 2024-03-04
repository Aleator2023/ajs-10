import  GameSavingLoader  from '../src/gamesavingloader';

GameSavingLoader.load().then((saving) => {
    // saving объект класса GameSaving
  }, (error) => {
    // ...
  });