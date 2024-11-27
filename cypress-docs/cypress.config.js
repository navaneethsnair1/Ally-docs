const { defineConfig } = require("cypress");

const fs = require('fs');
const yaml = require('js-yaml');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        accessibilityChecker: require('cypress-accessibility-checker/plugin')
      });
      on('task', {
        readYamlFile(location) {
        //readYamlFile(){ 
          try {
              console.log("********!!!!!!!!!!!!!!!!!!!!!!!!!!!*******");
              const filePath = './.achecker.yml';
              const data = yaml.load(fs.readFileSync(filePath, 'utf8')); 
              data.outputFolder = location; // Update the value
              //data.outputFolder = 'results/blaaResults';
              
              fs.writeFileSync(filePath, yaml.dump(data), 'utf8');
              console.log('YAML file updated successfully!');
          } catch (e) {
              console.error('Error updating YAML file:', e);
          }
          return null;
        }
      });
    },
  },
});

