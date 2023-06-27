document.getElementById("ageCalculatorForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form submission
  
    // Get the input values
    const day = parseInt(document.getElementById("day").value);
    const month = parseInt(document.getElementById("month").value) - 1; // Month is zero-based in JavaScript Date object
    const year = parseInt(document.getElementById("year").value);
  
    // Calculate the age
    const currentDate = new Date();
    const birthDate = new Date(year, month, day);
    let ageYears = currentDate.getFullYear() - birthDate.getFullYear();
    let ageMonths = currentDate.getMonth() - birthDate.getMonth();
    let ageDays = currentDate.getDate() - birthDate.getDate();
  
    // Adjust the age values if the birth date has not occurred yet this year
    if (ageMonths < 0 || (ageMonths === 0 && ageDays < 0)) {
      ageYears--;
      ageMonths += 12;
    }
  
    // Adjust the age values if the birth date is the current date
    if (ageMonths === 0 && ageDays === 0) {
      ageYears++;
    }
  
    // Display the result
    const result = document.getElementById("result");
    result.innerHTML = "Age: " + ageYears + " years, " + ageMonths + " months, " + ageDays + " days";
  });
  