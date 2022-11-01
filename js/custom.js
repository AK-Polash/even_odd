let inputData = document.querySelector("#input");
let buttton = document.querySelector(".button");
let evenHeading = document.querySelector(".even");
let oddHeading = document.querySelector(".odd");
let myArray = [];
let evenArr = [];
let oddArr = [];

buttton.addEventListener("click", () => {
  myArray.push(inputData.value);
  inputData.value = "";
  console.log(myArray);

  myArray.map((item) => {
    let result = item % 2;

    if (result === 0) {
      evenArr.push(item);
      evenArr = evenArr.filter((evItem, evIndex) => {
        return evenArr.indexOf(evItem) === evIndex;
      });
      evenHeading.innerHTML = "Even numbers : ";
      evenHeading.innerHTML += evenArr;
      console.log("evenArr: " + evenArr);
    }
    if (result !== 0) {
      oddArr.push(item);
      oddArr = oddArr.filter((odItem, odIndex) => {
        return oddArr.indexOf(odItem) === odIndex;
      });
      oddHeading.innerHTML = "Odd numbers : ";
      oddHeading.innerHTML += oddArr;
      console.log("oddArr: " + oddArr);
    }
  });
});
