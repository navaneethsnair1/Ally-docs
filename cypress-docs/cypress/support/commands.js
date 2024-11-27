// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// const fs = require('fs');
// const yaml = require('js-yaml');
// Cypress.Commands.add('readYamlFile', (location) => { 
//     try {
//         console.log("********!!!!!!!!!!!!!!!!!!!!!!!!!!!*******");
//         const filePath = './cypress/.achecker.yml';
//         const data = yaml.load(fs.readFileSync(filePath, 'utf8')); 
//         data.outputFolder = location; // Update the value
//         //data.outputFolder = 'results/blaaResults';
//         fs.writeFileSync(filePath, yaml.dump(data), 'utf8');
//         console.log('YAML file updated successfully!');
//     } catch (e) {
//         console.error('Error updating YAML file:', e);
//     }
//     // return null;
// })