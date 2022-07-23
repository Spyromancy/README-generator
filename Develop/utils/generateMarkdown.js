// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license){
    return `https://img.shields.io/badge/license-${license}-green`;
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license){
    var formatted = license.toLowerCase().replaceAll(" ","-"); // Apache 2.0 -> apache-2.0
    if(formatted.substring(0,3)==='GNU'){
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
    You can find a more detailed description of the license below
    `
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  
  ${data.desc}
  
  ## Table of Contents 
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  ${data.confirmLicense ? `- [License](#license) \n` : ``}
  ## Installation
  
  ${data.install}
  
  ## Usage
  
  ${data.screenshot ? `![alt text](./assets/images/screenshot.png)` : ``}
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  ## How to Contribute
  
  ${data.contribute}
  
  ## Tests
  
  ${data.tests}
  
  ## Questions
  
  GitHub: [${data.username}](https://github.com/${data.username})
  Email: <${data.email}>

`;
}

module.exports = generateMarkdown;



