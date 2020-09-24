const inquirer = require( 'inquirer' );  /* import the inquirer module, loaded by npm */
const fs = require( 'fs' );              /* import the file system */
const generateReadMe = require( './utils/readme-template' );

/* ////////////////////////////////////////////////////// 
   Question Section                                    */
   
const getInfo = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your full name and date (Required)?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username (Required):',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your GitHub Username !");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'Enter the title of this project (Required):',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your project title!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter a description for this project (Required):',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter a project description!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'instruct',
            message: 'Specify the installation instructions for this project (Required):',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the project's installation instructions!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Specify the usage instructions for this project (Required):',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the project's usage instructions!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'Specify details for further contributions to this project (Required):',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please define contribution details!");
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'licenses',
            message: 'What licenses have been used by this application?',
            choices: ['MIT', 'iBM', 'ISC', 'Zlib', 'Mozilla']
        },
        {
            type: 'confirm',
            name: 'confirmAbout',
            message: 'Would you like to enter some information about yourself for an "About" section?',
            default: true
        },
        {
            type: 'input',
            name: 'about',
            message: 'Provide some information about yourself:',
            when: ({ confirmAbout }) => confirmAbout
        }
    ])
        .then(function (data) {

            // Generate the 'file text'
            const fileText = generateReadMe(data);

            // Write the 'readme' file
            writeReadMe(fileText);
        });
};
//////////////////////////////////////////////////////////////////////////////
// Function to write the 'readme' file
function writeReadMe(data) {

    // Define the pathname of the 'readme'
    const fileName = "./dist/readme.md";

    // Write the file
    fs.writeFile(fileName, data, function (err) {

        if (err) {
            return console.log(err);
        };
    });
}

// function to initialize program
function init() {

    // Acquire the information for the 'readme'
    const data = getInfo();

}

// function call to initialize program
init();
