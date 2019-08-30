const saveLocation = "starTraderSave";

export const saveGame = state => {
  localStorage.setItem(saveLocation, JSON.stringify(state));
};

export const loadGame = () => {
  return JSON.parse(localStorage.getItem(saveLocation));
};

export const isSaved = () => Boolean(JSON.parse(localStorage.getItem(saveLocation)));
