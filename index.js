for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`);
  debugger;
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

function writeCards(names, occasion) {
  const thankYouMessages = [];
  for (let i = 0; i < names.length; i++) {
    thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`);
    debugger;
  }
  return thankYouMessages;
}

const birthdayMessages = writeCards(["Charlie", "Samip", "Ali"], "birthday");

console.log(birthdayMessages);

// index.js

function countDown(number) {
  for (let n = number; n >= 0; n--) {
    console.log(n);
  }
}


