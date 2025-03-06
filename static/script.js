
// document.getElementById('salaryForm').addEventListener('submit', function(event) {
//     event.preventDefault();

//     // Get input values
//     const jobTitle = document.getElementById('jobTitle').value;
//     const jobType = document.getElementById('jobType').value;
//     const experienceLevel = document.getElementById('experienceLevel').value;
//     const location = document.getElementById('location').value;
//     const salaryCurrency = document.getElementById('salaryCurrency').value;
//     const experience = parseInt(document.getElementById('experience').value);
//     const education = document.getElementById('education').value;

//     // Calculate salary based on mock logic
//     let baseSalary = 50000; // Starting salary

//     // Adjust salary based on experience
//     baseSalary += experience * 2000;

//     // Adjust salary based on education level
//     if (education === "Bachelor's Degree") {
//         baseSalary += 10000;
//     } else if (education === "Master's Degree") {
//         baseSalary += 20000;
//     } else if (education === "PhD") {
//         baseSalary += 30000;
//     }

//     // Modify salary based on job type
//     if (jobType === "Part-time") {
//         baseSalary *= 0.7;
//     } else if (jobType === "Freelance") {
//         baseSalary *= 1.2;
//     }

//     // Modify salary based on experience level
//     if (experienceLevel === "Mid") {
//         baseSalary *= 1.1;
//     } else if (experienceLevel === "Senior") {
//         baseSalary *= 1.3;
//     }

//     // Modify salary based on location
//     if (location === "US") {
//         baseSalary *= 1.2;
//     } else if (location === "UK") {
//         baseSalary *= 1.1;
//     } else if (location === "India") {
//         baseSalary *= 0.5;
//     } else if (location === "Australia") {
//         baseSalary *= 1.15;
//     }

//     // Convert to selected currency (mock conversion rates)
//     let currencySymbol = "$";
//     if (salaryCurrency === "EUR") {
//         baseSalary *= 0.9;
//         currencySymbol = "€";
//     } else if (salaryCurrency === "GBP") {
//         baseSalary *= 0.75;
//         currencySymbol = "£";
//     } else if (salaryCurrency === "INR") {
//         baseSalary *= 75;
//         currencySymbol = "₹";
//     }

//     // Display the result
//     const resultText = `Estimated Salary for a ${jobTitle} in ${location} with ${experience} years of experience, a ${education} and a ${experienceLevel} experience level: ${currencySymbol}${baseSalary.toFixed(2)}`;
    
//     const predictionResult = document.getElementById('predictionResult');
//     predictionResult.textContent = resultText;
//     predictionResult.style.display = 'block';
// });
// <script>
//     document.getElementById('salaryForm').addEventListener('submit', function(event) {
//         event.preventDefault();

//         // Get input values
//         const jobTitle = document.getElementById('jobTitle').value;
//         const jobType = document.getElementById('jobType').value;
//         const experienceLevel = document.getElementById('experienceLevel').value;
//         const location = document.getElementById('location').value;
//         const salaryCurrency = document.getElementById('salaryCurrency').value;

//         // For now, we use some mock logic to generate a salary
//         let baseSalary = 50000; // Starting base salary

//         // Adjust salary based on job type
//         if (jobType === "Part-time") {
//             baseSalary *= 0.75;  // Lower salary for part-time
//         } else if (jobType === "Internship") {
//             baseSalary *= 0.5;  // Internship salary
//         }

//         // Adjust salary based on experience level
//         if (experienceLevel === "Mid") {
//             baseSalary *= 1.1;
//         } else if (experienceLevel === "Senior") {
//             baseSalary *= 1.3;
//         } else if (experienceLevel === "Executive") {
//             baseSalary *= 1.5;
//         }

//         // Adjust salary based on location
//         if (location === "US") {
//             baseSalary *= 1.2;
//         } else if (location === "UK") {
//             baseSalary *= 1.15;
//         } else if (location === "India") {
//             baseSalary *= 0.8;
//         } else if (location === "Australia") {
//             baseSalary *= 1.1;
//         }

//         // Adjust salary based on currency
//         let currencySymbol = "$";
//         if (salaryCurrency === "EUR") {
//             baseSalary *= 0.9;
//             currencySymbol = "€";
//         } else if (salaryCurrency === "GBP") {
//             baseSalary *= 0.75;
//             currencySymbol = "£";
//         } else if (salaryCurrency === "INR") {
//             baseSalary *= 75;
//             currencySymbol = "₹";
//         }

//         // Display the result
//         const resultText = `Estimated Salary for a ${jobTitle} with experience level ${experienceLevel} in ${location}: ${currencySymbol}${baseSalary.toFixed(2)}`;
        
//         const predictionResult = document.getElementById('predictionResult');
//         predictionResult.textContent = resultText;
//         predictionResult.style.display = 'block';
//     });
// </script>
