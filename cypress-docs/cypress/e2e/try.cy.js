import {samples} from "../docs_samples/ol_api_samples";

describe('Openliberty API Accesibility Tests', () => {
    it('reads a YAML file', () => {
        cy.task('readYamlFile','results/OL_API').then(()=>{
            console.log('!!!Successful!!!!');
        })
    })  
    samples.forEach((sample)=>{
        it(`Testing ${sample.section}`,()=>{
            cy.visit(sample.url1);
            cy.getCompliance(`./ol_api_${sample.section.toLowerCase()}1`);
            if(sample.url2){
                cy.visit(sample.url2);
                cy.getCompliance(`./ol_api_${sample.section.toLowerCase()}2`);
            }            
        })
    })
})