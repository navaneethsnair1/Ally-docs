var fs = require('fs')
const yaml = require('js-yaml')

// Path to your .yml file
const filePath = './cypress/.achecker.yml';
try {
    console.log("********!!!!!!!!!!!!!!!!!!!!!!!!!!!*******");
    const data = yaml.load(fs.readFileSync(filePath, 'utf8'));
   
    data.outputFolder = 'results/test1Results'; // Update the value
    fs.writeFileSync(filePath, yaml.dump(data), 'utf8');
    console.log('YAML file updated successfully!');
} catch (e) {
    console.error('Error updating YAML file:', e);
}