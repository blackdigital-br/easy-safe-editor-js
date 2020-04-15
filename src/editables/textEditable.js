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
        var html = removeHTML(this.element.innerHTML);

        if (html != this.element.innerHTML) {
            var pos = 0;

            if (window.getSelection) {
                var sel = window.getSelection();
            
                if (sel.getRangeAt) {
                    var range = window.getSelection().getRangeAt(0);
                    var preCaretRange = range.cloneRange();
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