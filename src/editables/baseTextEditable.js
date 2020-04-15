import Editable from "./editable.js";

export default class BaseTextEditable extends Editable {
    /**
     * 
     * @param {HTMLElement} element 
     */
    constructor(editor, element) {
        super(editor, element);
        this.startEditor();
    }

    startEditor() {
        this.element.setAttribute("contentEditable", true);
        //var self = this;
        
        //this.element.onmouseenter = function(e) {
        /*this.element.onfocus = function(e) {
            var frame = document.getElementById("frameEdtitable");
            frame.style.visibility = "visible";
            frame.style.position = "absolute";

            frame.style.left = getOffsetLeft(self.element) + "px";
            frame.style.top = (getOffsetTop(self.element) - frame.offsetHeight) + "px";
        };*/

        /*this.element.onmouseleave = function(e) {
            var frame = document.getElementById("frameEdtitable");
            frame.style.visibility = "hidden";
        };*/
    }

    

    removeEditor() {
        this.element.removeAttribute("contentEditable");
    }
}