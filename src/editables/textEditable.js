import BaseTextEditable from "./baseTextEditable.js";
import { removeHTML } from "../utils/element.js";

export default class TextEditable extends BaseTextEditable {
    
    /**
     * 
     * @param {HTMLElement} element 
     */
    constructor(editor, element) {
        super(editor, element);

        element.addEventListener("input", this.onInput, true);
    }

    /**
     * 
     */
    onInput = (event) => {
        let html = removeHTML(this.element.innerHTML);

        if (html != this.element.innerHTML) {
            let pos = 0;
            let sel = null;

            if (window.getSelection) {
                sel = window.getSelection();
            
                if (sel.getRangeAt) {
                    let range = window.getSelection().getRangeAt(0);
                    let preCaretRange = range.cloneRange();
                    preCaretRange.selectNodeContents(this.element);
                    preCaretRange.setEnd(range.endContainer, range.endOffset);
                    pos = preCaretRange.toString().length;
                }
            }

            this.element.innerHTML = html;

            if (pos > 0)
                sel.setPosition(this.element.firstChild, pos);
        }
    }
}