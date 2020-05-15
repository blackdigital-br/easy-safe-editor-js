/**
 * 
 * @param {string} html 
 * @returns {HTMLElement}
 */
export function createElement(html) {
    return createElements(html)[0];
}

export function createElements(html) {
    let template = document.createElement('template');
    template.innerHTML = html.trim();
    return template.content.childNodes;
}

/**
 * 
 * @param {string} htmlText 
 */
export function removeHTML(htmlText) {
    let regex = /(<([^>]+)>)/ig;
    return htmlText.replace(regex, "");
}