const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const progressBar = document.querySelector('#progress-bar');


  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    results.innerHTML = `Your BMI is : ${bmi}`;

    if (bmi < 18.6 || bmi > 21.9) {
      progressBar.style.width = "35%";
      progressBar.style.background = "red";
    } else if (bmi >= 18.6 && bmi <= 21.9) {
      progressBar.style.width = "70%";
      progressBar.style.background = "yellow";
    } else {
      progressBar.style.width = "100%";
      progressBar.style.background = "green";
    }
  }
});
