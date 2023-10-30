let age = 16;
let isMember = true;
let price = null;

if (age <= 15) {
  price = 800;
} else if (isMember) {
  price = 1000;
} else {
  price = 1800;
}

document.write(`${price}円`);