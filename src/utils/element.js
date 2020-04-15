export function createElement(html) {
    return createElements(html)[0];
}

export function createElements(html) {
    var template = document.createElement('template');
    template.innerHTML = html.trim();
    return template.content.childNodes;
}