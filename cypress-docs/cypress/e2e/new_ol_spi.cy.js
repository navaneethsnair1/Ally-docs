import {samples} from "../docs_samples/ol_spi_samples";

// var fs = require('fs')
// const yaml = require('js-yaml')

// // Path to your .yml file
// const filePath = './cypress/.achecker.yml';

// // Read, modify, and write the YAML file
// try {
//     console.log("********!!!!!!!!!!!!!!!!!!!!!!!!!!!*******");
//     const data = yaml.load(fs.readFileSync(filePath, 'utf8'));
//     data.outputFolder = 'results/test1Results'; // Update the value
//     fs.writeFileSync(filePath, yaml.dump(data), 'utf8');
//     console.log('YAML file updated successfully!');
// } catch (e) {
//     console.error('Error updating YAML file:', e);
// }

describe('Openliberty SPI Accesibility Tests', () => {
    it('reads a YAML file', () => {
        cy.task('readYamlFile','results/OL_SPI').then((data)=>{
            console.log('!!!Successful!!!!');
        })
    })    
    
    samples.forEach((sample)=>{
        it(`Testing ${sample.section}`,()=>{
            cy.visit(sample.url1);
            cy.getCompliance(`./ol_spi_${sample.section.toLowerCase()}1`);
            if(sample.url2){
                cy.visit(sample.url2);
                cy.getCompliance(`./ol_spi_${sample.section.toLowerCase()}2`);
            }        
            //cy.readYamlFile('results/NewResults');    
        })
    })
})

