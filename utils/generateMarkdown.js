// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  if (license == 'Apache') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
  if (license == 'Unlicense') {
    return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
  }
  if (license == 'None') {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'MIT') {
    return 'https://opensource.org/licenses/MIT'
  }
  if (license == 'Apache') {
    return 'https://opensource.org/licenses/Apache-2.0'
  }
  if (license == 'Unlicense') {
    return 'http://unlicense.org/'
  }
  if (license == 'None') {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }
//I believe this is done 

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing] (#contributing)
- [Tests] (#tests)
- [Questions] (#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseBadge(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
${data.questions}
${data.githublink}
${data.email}

`;
}

module.exports = generateMarkdown;
