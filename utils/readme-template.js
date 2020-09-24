/* [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) 
   [![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)
   [![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC) 
   [![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)
   [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)    MIT, IBM, ISC, Zlib, Mozilla*/

// Create the "title" section

const generateTitle = (data) => {

  return `
    ## ${data.title}

    ${data.name}

  `;
};

// Create the "description" section

const generateDescription = (data) => {

  return `
    ## Description
    
    ${data.description}
  `;
};


// Create the "table of contents" section

const generateTOC = (data) => {

  return `
    ## Table of Contents
    * [Installation Instructions](#installation-instructions)
    * [Usage Instructions](#usage-instructions)
    * [Contribution Guidelines](#contribution-guidelines)
    * [Testing Instructions](#testing-instructions)
    * [Licenses Used](#licenses-used)
    * [Application Questions](#application-questions)
    
  `;
};

// Create the "installation instructions" section

const generateInstructions = (data) => {

  return `
    ## Installation Instructions
    
    ${data.instruct}
  `;
};


// Create the "usage instructions" section

const generateUsage = (data) => {

  return `
    ## Usage Instructions
    
    ${data.usage}
  `;
};



// Create the "contributions" section

const generateContributions = (data) => {

  return `
    ## Contribution Guidelines
    
    ${data.contributions}
  `;
};



// Create the "testing instructions" section

const generateTestDetails = testDetails => {

  return `
    ## Testing Instructions
    
    ${testDetails}
  `;
};



// Create the "licensing" section

const generateLicensing = licenseDetails => {

  return `
    ## Licenses Used
    
    ${licenseDetails}
  `;
};

// Create the "questions" section

const generateQuestions = (questions, email, gitHub) => {

  return `
    ## Application Questions
    
    $(questions)

    The following link will present my GitHub profile: $(gitHub)
    For those that would prefer direct correspondence, my email address is:
    ${email}
  `;
};

//////////////////////////////////////////////////////////////////////////////////////////
// Create the readme page

module.exports = generateReadMe = function( data)  {

  // Write out the page sections one at a time
  return `
    ${generateTitle(data)}
    ${generateDescription(data)}
    ${generateTOC(data)}
    ${generateInstructions(data)}
    ${generateUsage(data)}
    ${generateContributions(data)}
    ${generateTestDetails(data)}
    ${generateLicensing(data)}
    ${generateQuestions(data)}
  `

};


// // Create the "Projects" section

// const generateProjects = projectsArr => {

//   return `
//     <section class="my-3" id="portfolio">
//       <h2 class="text-dark bg-primary p-2 display-inline-block">Work</h2>
//       <div class="flex-row justify-space-between">

//       ${projectsArr
//         .filter(({ feature }) => feature)                    // First map the 'featured' projects
//         .map(({ name, description, languages, link }) => {
//           return `
//           <div class="col-12 mb-2 bg-dark text-light p-3">
//             <h3 class="portfolio-item-title text-light">${name}</h3>
//             <h5 class="portfolio-languages">
//               Built With:
//               ${languages.join(', ')}
//             </h5>
//             <p>${description}</p>
//             <a href="${link}" class="btn"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
//           </div>
//         `;
//         })
//         .join('')}

//       ${projectsArr
//         .filter(({ feature }) => !feature)                  // Finally map the 'non-featured' projects
//         .map(({ name, description, languages, link }) => {
//           return `
//           <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
//             <h3 class="portfolio-item-title text-light">${name}</h3>
//             <h5 class="portfolio-languages">
//               Built With:
//               ${languages.join(', ')}
//             </h5>
//             <p>${description}</p>
//             <a href="${link}" class="btn mt-auto"><i class="fab fa-github mr-2"></i>View Project on GitHub</a>
//           </div>
//         `;
//         })
//         .join('')}
//       </div>
//     </section>
//   `;
// };

// /* Module function: generatePage  */

// module.exports = templateData => {

//   // Destructure projects and about daa from templateData  based on their property key names
//   const { projects, about, ...header } = templateData;

//   return `
//     <!DOCTYPE html> 
//     <html lang="en"> 

//     <head>
//       <meta charset="UTF-8">
//       <meta name="viewport" content="width=device-width, initial-scale=1.0">
//       <meta http-equiv="X-UA-Compatible" content="ie=edge">

//       <title>Portfolio Demo</title>

//       <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
//       <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
//       <link rel="stylesheet" href="style.css">

//     </head>
  
//     <body>

//     <header>
//       <div class="container flex-row justify-space-between align-center py-3">
//         <h1 class="page-title text-secondary bg-dark py-2 px-3">${header.name}</h1>
//         <nav class="flex-row">
//           <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://github.com/${header.github}">GitHub</a>
//         </nav>
//       </div>
//     </header>

//     <main class="container my-5">
//        ${generateAbout(about) }
//        ${generateProjects(projects) }
//     </main>

//     <footer class="container text-center py-3">
//       <h3 class="text-dark">&copy; ${new Date().getFullYear()} by ${header.name}</h3>
//     </footer> 

//     </body>
//     </html>
//     `;
// };

