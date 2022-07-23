// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license){
    license= license.replaceAll(" ","%20")
    return `![License badge](https://img.shields.io/badge/license-${license}-green)`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { // I don't fully understand why this is a seperate function from renderLicenseSection and that worries me.
  if(license){
    var formatted = license.toLowerCase().replaceAll(" ","-"); // Apache 2.0 -> apache-2.0
    if(formatted.substring(0,3)==='gnu'){
      formatted= formatted.substring(4,formatted.length-2)+'-3.0';
    }
    return `[${license} License](https://choosealicense.com/licenses/${formatted}/)`
  }  
  else{
    return ``;
  }
    
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license){
    return `## License

This project uses the ${license} License.
You can find a more detailed description of the license below: \n
${renderLicenseLink(license)}
    `
  }
  else{
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Description

${data.description}

## Table of Contents 

- [Installation](#installation)
- [Usage](#usage)
${data.confirmLicense ? `- [License](#license) \n` : ``}
- [Contributing](#How to Contribute)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.install}

## Usage

${data.screenshot ? `![alt text](./assets/images/screenshot.png)` : ``}
${data.usage}

${renderLicenseSection(data.license)}
## Contributing

${data.contribute}

## Tests

${data.test}

## Questions

GitHub: [${data.username}](https://github.com/${data.username})

Email: <${data.email}>
`;
}

module.exports = generateMarkdown;



