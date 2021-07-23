 const SAY_GOOD_MORNING = "SAY_GOOD_MORNING";
 const SAY_GOOD_NIGHT = "SAY_GOOD_NIGHT";
 const SAY_GOOD_AFTERNOON = "SAY_GOOD_AFTERNOON";
let sayGoodMornig = () => {
  return {
    type: "SAY_GOOD_MORNING",
    payload: "Good Morning Messag",
  };
};
let sayGoodAfterNoon = () => {
  return {
    type: "SAY_GOOD_AFTERNOON",
    payload: "Good Night Messag",
  };
};
let sayGoodNight = () => {
  return {
    type: "SAY_GOOD_NIGHT",
    payload: "Good Night Messag",
  };
};

export { sayGoodMornig, sayGoodNight,sayGoodAfterNoon,SAY_GOOD_MORNING, SAY_GOOD_AFTERNOON ,SAY_GOOD_NIGHT};
