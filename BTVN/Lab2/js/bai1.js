let cargoHold = [
  "oxygen tanks",
  "space suits",
  "parrot",
  "instruction manual",
  "meal packs",
  "slinky",
  "security blanket",
];

let index = cargoHold.indexOf("slinky");
cargoHold[index] = "space tether";
document.getElementById("p1").textContent = cargoHold;

let removedLast = cargoHold.pop();
document.getElementById("p2").textContent =
  "Phần tử bị xóa: " + removedLast + "\nMảng mới: " + cargoHold;

let removedFirst = cargoHold.shift();
document.getElementById("p3").textContent =
  "Phần tử bị xóa: " + removedFirst + "\nMảng mới: " + cargoHold;

cargoHold.unshift(1138);
cargoHold.push("20 meters");
document.getElementById("p4").textContent = cargoHold;

document.getElementById(
  "p5"
).textContent = `Mảng cuối: ${cargoHold}\nChiều dài: ${cargoHold.length}`;
