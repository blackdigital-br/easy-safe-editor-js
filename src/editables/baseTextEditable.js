import Editable from "./editable.js";
import { getOffsetTop, getOffsetLeft } from "../utils/offset.js";
//import { getOffsetTop } from "../utils/offset.js";


export default class BaseTextEditable extends Editable {
    /**
     * 
     * @param {HTMLElement} element 
     */
    constructor(element) {
        super(element);
        this.startEditor();
    }

    startEditor() {
        this.element.setAttribute("contentEditable", true);
        var self = this;
        
        this.element.onmouseenter = function(e) {
            var frame = document.getElementById("frameEdtitable");
            frame.style.visibility = "visible";
            frame.style.position = "absolute";

            frame.style.left = getOffsetLeft(self.element) + "px";
            frame.style.top = (getOffsetTop(self.element) - frame.offsetHeight) + "px";
        };

        /*this.element.onmouseleave = function(e) {
            var frame = document.getElementById("frameEdtitable");
            frame.style.visibility = "hidden";
        };*/
    }

    

    removeEditor() {
        this.element.removeAttribute("contentEditable");
    }
}