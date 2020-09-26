
const licenseBadges = [
"[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)", 
"[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
"[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)", 
"[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)",
"[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"    /*MIT, IBM, ISC, Zlib, Mozilla*/
];

//////////////////////////////////////////////////////////////////
// Create the "title" section

const generateTitle = (data) => {

  return `
## ${data.title}

${data.name}
`;
};

//////////////////////////////////////////////////////////////////
// Put the license badges on the page just after the 'title' section

const generateBadges = (data) => {

  
  // Loop over the licenses selected, building the output array
  var licenseText = "";

  for( var i = 0; i < data.licenses.length; i++ ) {
    if( data.licenses[i] == ' MIT' ) {
      licenseText += ( licenseBadges[0]  + "  ");
    };
    if( data.licenses[i] == ' IBM' ) {
      licenseText += ( licenseBadges[1]  + "  ");
    };
    if( data.licenses[i] == ' ISC' ) {
      licenseText += ( licenseBadges[2]  + "  ");
    };
    if( data.licenses[i] == ' Zlib' ) {
      licenseText += ( licenseBadges[3]  + "  ");
    };
    if( data.licenses[i] == ' Mozilla' ) {
      licenseText += ( licenseBadges[4] );
    };
  };
  console.log( licenseText );

  return `
  ${licenseText}`;
};

//////////////////////////////////////////////////////////////////////
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

const generateTestDetails = (data) => {

  return `
## Testing Instructions
    
    ${data.testDetails}
  `;
};



// Create the "licensing" section

const generateLicensing = (data) => {

  // Loop over the licenses selected, building the output array
  var licenseText = [];
  licenseText.push( 'Licenses used');
  for( var i = 0; i < data.licenses.length; i++ ) {
    licenseText.push( data.licenses[i] );
  };

  const displayLicenses = licenseText.join();
  //console.log( displayLicenses );

  return `
## Licenses Used

    ${displayLicenses}
  `;
};

// Create the "questions" section

const generateQuestions = (data) => {

  return `
## Application Questions
  
  The following link will present my GitHub profile:  
  [GitHub Profile](https://github.com/${data.gitHub}) 
  
  For those that would prefer direct correspondence, my email address is:  
  [email](${data.email})
  `;
};

//////////////////////////////////////////////////////////////////////////////////////////
// Create the readme page

module.exports = generateReadMe = function( data)  {

  // Write out the page sections one at a time
  return `
    ${generateTitle(data)}
    ${generateBadges(data)}
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


