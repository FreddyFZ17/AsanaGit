export function typeText(element, text) {
    element.should('be.visible').type(text);
}

export function typeTextForce(element,text){
    element.should('be.visible').type(text, { force: true });
}

export function clickElement(element) {
    element.should('be.visible').and('not.be.disabled').click();
}

export function clickElementForce(element) {
    element.scrollIntoView().should('be.visible').and('not.be.disabled').click({ force: true });
}

export function clearAndTypeText(element, text) {
    element.clear().type(text);
}

export function rightClickElement(element) {
    element.rightclick(); // Realiza un clic derecho en el elemento encontrado por el selector
}

export function clickAndType(selector, text) {
    selector.click().type(text);
}

export function typeAndPressEnter(selector, text) {
    selector.should('be.visible').type(`${text}{enter}`, { force: true });
}


//URGENTE TERMINAR DE IMPLEMENTAR LOS COMPARADORES DE TEXTO!!!!!!!!!!!!!
export function verifyTextInMultipleElements(selector, text) {
    cy.get(selector).each($el => {
        cy.wrap($el).invoke('text').then(elementText => {
            // Verifica si el texto está presente en el texto del elemento
            if (elementText.includes(text)) {
                cy.log(`Texto "${text}" encontrado en el elemento con selector: ${selector}`);
                return; // Sale de la función si se encuentra el texto
            }
        });
    });
}

export function getTextFromText(selector) {
    // Guardar el texto del selector en un alias
    selector.invoke('text').as('savedText');
}

export function verifyDeleteTask(selector, savedText) {
        selector.should('contain.text', savedText);
}

export function verifyTextEquals(selector, expectedText) {
    selector.should('be.visible').and('have.text', expectedText);// Asegúrate de llamar a selector() para obtener el objeto Cypress
}

export function verifyElementTextEquals(selector, expectedText) {
    selector.should('be.visible').and('have.value', expectedText); // Asegúrate de llamar a selector() para obtener el objeto Cypress
}
