// const searchTerm = document.getElementById("filter-jobs");
// const button = document.querySelector(".button-container");
// const jobsContainer = document.querySelector(".jobs-container");

// const logo = document.querySelector(".logo");

// logo.addEventListener("click", () => {
//   removeAllClasses();
// });

// function removeAllClasses() {
//   const jobs = document.querySelectorAll(".jobs-container .job-tile");

//   jobs.forEach((job) => {
//     job.classList.remove("show");
//   });

//   jobs.forEach((job) => {
//     job.classList.remove("none");
//   });
// }

// button.addEventListener("click", (e) => {
//   const jobTitle = document.querySelectorAll(".rolename span");
//   const jobDescription = document.querySelectorAll(".description p");
//   const searchValue = searchTerm.value.trim();

//   if (searchValue) {
//     removeAllClasses();
//     jobTitle.forEach((title, idx) => {
//       if (
//         title.innerText.toLowerCase().includes(searchValue.toLowerCase()) ||
//         jobDescription[idx].innerText
//           .toLowerCase()
//           .includes(searchValue.toLowerCase())
//       ) {
//         title.parentElement.parentElement.classList.add("show");
//       } else {
//         title.parentElement.parentElement.classList.add("none");
//       }
//     });

//     searchTerm.value = "";
//   }
// });

// async function getJobs() {
//   //  first way
//   // return fetch('data.json')
//   // .then(response => response.json()).then(data =>{
//   //     return data
//   // })

//   // second way async await

//   const response = await fetch("data.json");
//   const data = await response.json();
//   return data;
// }

// async function showJobs() {
//   const jobs = await getJobs();
//   jobs.forEach((job) => {
//     const jobTile = document.createElement("div");
//     jobTile.classList.add("job-tile");

//     jobTile.innerHTML = `

//         <div class="top">
//         <img src= '${job.logo}'>
//         <span class="material-icons more_horiz">more_horiz</span>

//         </div>

//     <div class="rolename">
//         <span>${job.roleName}</span>
//     </div>
//     <div class="description">
//         <p>${job.requirements.content}</p>
//     </div>

//     <div class="buttons">
//         <div class="button apply-now">
//             Apply Now
//         </div>
//         <div class="button">
//             Message
//         </div>
//     </div>
//         `;

//     jobsContainer.appendChild(jobTile);
//   });
// }

// showJobs();

// // first way part

// // getJobs().then(data => showJobs(data ))

