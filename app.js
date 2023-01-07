// returns random item from the given array
const brainstormFood = () => {
  const food = ["🥞", "🍔", "🥪", "🥣", "🥗", "🍜", "🍨", "🍟", "🍕"];
  return new Promise((resolve, reject) => {
    console.log("What to eat today for Lunch?");
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * food.length);
      const itemFromArray = food[randomIndex];
      console.log(...food);
      //food.forEach((item) => console.log(item));
      resolve(itemFromArray);
      reject("no food today");
    }, 1000);
  });
};

// logs out the final message with promise value
async function announceFood() {
  const meal = await brainstormFood();
  console.log(`Today, I am going to have ${meal} for Lunch!`);
}

announceFood();
