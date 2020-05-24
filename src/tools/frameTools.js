import { createElement } from "../utils/element.js";
import { getOffsetTop, getOffsetLeft } from "../utils/offset.js";

/**
 * @class FrameTools manage aside panel for tools
 */
export default class FrameTools {
    constructor() {
    }

    /**
     * Create tools panel on page
     */
    create() {
        let body = document.getElementsByTagName("body")[0];
        body.appendChild(createElement(FrameTools.toolsHTML));
        this.frameTool = document.getElementById("frameEdtitable");
        this.pageTitle = document.getElementById("frameEdtitable_frameTitle");
        this.actionsDiv = document.getElementById("frameEdtitable_frameActions");
        this.currentEditable = null;
    }

    /**
     * Show frame tools in editable element
     * @param {Editable} editable 
     */
    showActions(editable) {
        
        while (this.actionsDiv.firstChild) {
            this.actionsDiv.removeChild(this.actionsDiv.lastChild);
        }

        if (this.currentEditable != null) {
            this.currentEditable.element.classList.remove("editable-focus");
        }

        if (editable != undefined && editable != null) {
            this.currentEditable = editable;
            this.frameTool.style.visibility = "visible";
            this.frameTool.style.position = "absolute";

            this.frameTool.style.left = getOffsetLeft(editable.element) + "px";
            this.frameTool.style.top = (getOffsetTop(editable.element) - this.frameTool.offsetHeight) + "px";

            this.pageTitle.innerText = editable.label;
            editable.element.classList.add("editable-focus");
        }
        else {
            this.pageTitle.innerText = "";
            this.frameTool.style.visibility = "hidden";
            this.currentEditable = null;
        }
    }

    /**
     * Remove tools panel
     */
    remove() {
        this.panelTool.remove();
        this.panelTool = null;
        this.pageTitle = null;
        this.editableContainers = null;
    }
}

FrameTools.toolsHTML = `
<div id="frameEdtitable" style="visibility: hidden;">
    <h6 id="frameEdtitable_frameTitle">Name</h6>
    <div id="frameEdtitable_frameActions" class="frameActions">
    </div>
</div>`;