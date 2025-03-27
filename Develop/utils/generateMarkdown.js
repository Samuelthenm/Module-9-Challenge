function renderLicenseBadge(license) { if (license === 'None') return '';
    return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;}
  
  
    
  
  function renderLicenseLink(license) { if (license === 'None') return '';
    return `[Learn more about the ${license} license](https://choosealicense.com/licenses/${license.toLowerCase()}/)`;}
  
  
  
  function renderLicenseSection(license) {if (license === 'None') return '';
    return `## License
  This project is licensed under the ${license} license.`;}
  
  
  
  function generateMarkdown(data) {
    return `# ${data.title}
  
    ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  If you have any questions, feel free to reach out:
  
  - GitHub: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}
  
  
  `;
  }
  
  module.exports = generateMarkdown;