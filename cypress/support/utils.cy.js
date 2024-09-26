class Utils {

    typeText(element, text) {
        element.should('be.visible').type(text);
    }

    typeTextForce(element, text) {
        element.scrollIntoView().should('be.visible').type(text, { force: true });
    }

    clickElement(element) {
        element.should('be.visible').and('not.be.disabled').click();
    }

    clickElementForce(element) {
        element.scrollIntoView().should('be.visible').and('not.be.disabled').click({ force: true });
    }

    clearAndTypeText(element, text) {
        element.clear().type(text);
    }

    rightClickElement(element) {
        element.rightclick();
    }
    
    searchElementByTextAndRightClick(selector, text) {
        selector.then($elements => {
            let found = false;
            Cypress.$.each($elements, (index, element) => {
                if (Cypress.$(element).text().includes(text)) {
                    found = true;cy.wrap(element).rightclick({ force: true });
                    cy.log(`Clic derecho realizado en el elemento con texto '${text}'.`);
                    return false;
                }
            });
            if (!found) {
                throw new Error(`Ninguno de los elementos seleccionados por "${selector}" contiene el texto "${text}".`);
            }
        });
    }

    searchElementByTextAndClick(selector, text) {
        selector.then($elements => {
            let found = false;
            Cypress.$.each($elements, (index, element) => {
                if (Cypress.$(element).text().includes(text)) {
                    found = true;cy.wrap(element).click({ force: true });
                    cy.log(`Clic derecho realizado en el elemento con texto '${text}'.`);
                    return false;
                }
            });
            if (!found) {
                throw new Error(`Ninguno de los elementos seleccionados por "${selector}" contiene el texto "${text}".`);
            }
        });
    }

    searchElementByPartialTextAndClick(selector, text) {
        cy.get(selector).then($elements => { 
            let found = false;
    
            $elements.each((index, element) => { 
                const elementText = Cypress.$(element).text();
                if (elementText.includes(text)) {
                    found = true;
                    cy.wrap(element).should('be.visible').click({ force: true }); // Clic en el elemento
                    cy.log(`Click realizado en el elemento con texto parcial o completo '${text}': "${elementText}".`);
                    return false; 
                }
            });
            
            if (!found) {
                throw new Error(`Ninguno de los elementos seleccionados por "${selector}" contiene el texto parcial o completo "${text}".`);
            }
        });
    }// Eliminar si no le encuentro utilidad
    

    clickAndType(selector, text) {
        selector.click().type(text);
    }

    typeAndPressEnter(selector, text) {
        selector.should('be.visible').type(text); 
        cy.wait(500); 
        selector.type('{enter}'); 
    }
    

    verifyTextInMultipleElements(selector, text) {
        selector.then($elements => {
            let found = false;
            
            Cypress.$.each($elements, (index, element) => {
                if (Cypress.$(element).text().includes(text)) {
                    found = true;
                    cy.log(`ELEMENTO CON TEXTO '${text}' ENCONTRADO.`); 
                    return false; 
                }
            });
            if (!found) {
                throw new Error(`Ninguno de los elementos seleccionados por "${selector}" contiene el texto "${text}".`);
            }
        });
    }

    verifyPartialTextInMultipleElements(selector, text) {
        selector.then($elements => {
            let found = false;
            
            Cypress.$.each($elements, (index, element) => {
                const elementText = Cypress.$(element).text();
                if (elementText.includes(text)) {
                    found = true;
                    cy.log(`Elemento con texto parcial o completo '${text}' encontrado: "${elementText}".`); 
                    return false; 
                }
            });
            if (!found) {
                throw new Error(`Ninguno de los elementos seleccionados por "${selector}" contiene el texto parcial o completo "${text}".`);
            }
        });
    }//Eliminar si no le encuentro funcionalidad
    

    getTextFromText(selector) {
        selector.invoke('text').as('savedText');
    }

    verifyElementExist(selector){
        selector.should('exist');
    }

    verifyTextEquals2(selector, expectedText) {
        selector.should('be.visible')
                .and('contain.text', expectedText);
    }

    verifyElementText(selector, expectedText) {
        selector.should('contain.text', expectedText);
    }

    verifyTextEquals(selector, expectedText) {
        selector.should('be.visible').and('have.text', expectedText);
    }


    verifyTextEqualsAny(selector, ...expectedTexts) {
        selector.should('be.visible').invoke('text').then(text => {
            const textMatches = expectedTexts.some(expectedText => text.includes(expectedText));
            if (textMatches) {
                cy.log(`Texto coincide con uno de los textos esperados: ${expectedTexts.join(', ')}`);
            } else {
                throw new Error(`Texto "${text}" no coincide con ninguno de los textos esperados: ${expectedTexts.join(', ')}`);
            }
        });
    }
    //Hola2
}
//hola
export default new Utils();