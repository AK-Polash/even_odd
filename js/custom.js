let evenHeading = document.querySelector(".even");
let oddHeading = document.querySelector(".odd");
let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
let arrayTwo = [];
let arrayThree = [];

myArray.map((item) => {
  let result = item % 2;
  if (result === 0) {
    arrayTwo.push(item);
    evenHeading.innerHTML = "Even numbers : ";
    evenHeading.innerHTML += arrayTwo;
  }
  if (result !== 0) {
    arrayThree.push(item);
    oddHeading.innerHTML = "Odd numbers : ";
    oddHeading.innerHTML += arrayThree;
  }
});
