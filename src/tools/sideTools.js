import { createElement } from "../utils/element.js";

/**
 * @class ASideTools manage aside panel for tools
 */
export default class SideTools {
    constructor() {
    }

    /**
     * Create tools panel on page
     */
    create() {
        let body = document.getElementsByTagName("body")[0];
        let nodePanel = createElement(SideTools.toolsHTML);
        body.insertBefore(nodePanel, body.firstChild);
        this.panelTool = document.getElementById("easySafeTools");
        this.pageTitle = document.getElementById("easySafeTools_PageTitle");
        this.editableContainers = document.getElementById("easySafeTools_EditableContainers");
        this.collapseButton = document.getElementById("easySafeTools_collapsePanel");

        this.collapseButton.addEventListener("click", (event) => this.onCollapseButtonClick(event), true);

        this.pageTitle.value = window.easySafeEditor.title;
        this.pageTitle.addEventListener("input", (event) => this.onChangeTitle(event), true);
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

    showTools() {
        this.panelTool.classList.remove("show");
        this.panelTool.classList.add("hidden");
    }

    hiddenTools() {
        this.panelTool.classList.remove("hidden");
        this.panelTool.classList.add("show");
    }

    toggleTools() {
        if (this.panelTool.classList.contains("show"))
            this.showTools();   
        else
            this.hiddenTools();
    }

    /**
     * Insert itens editables on panel
     * @param {list} editables 
     */
    insertEditables(editables) {
        for (let index in editables) {
            let editable = editables[index];
            let editableSelectButton = createElement(`<li><a href="#" title="${editable.label}" data-index="${index}">${editable.label}</a></li>`);
            editableSelectButton.firstChild.addEventListener("click", (event) => this.onSelectButtonClick(event), true);
            this.editableContainers.appendChild(editableSelectButton);
        }
    }

    /**
     * 
     * @param {MouseEvent} event 
     */
    onSelectButtonClick(event) {
        let index = event.target.getAttribute("data-index");
        let editable = window.easySafeEditor.editables[index];
        editable.element.scrollIntoView({block: "center"});
        window.easySafeEditor.selectEditable(editable);
        event.preventDefault();
    }

    /**
     * 
     * @param {MouseEvent} event 
     */
    onCollapseButtonClick(event) {
        this.toggleTools();
        event.preventDefault();
    }

    /**
     * 
     * @param {InputEvent} event 
     */
    onChangeTitle(event) {
        window.easySafeEditor.title = event.target.value;
        window.easySafeEditor.titleElement.innerText = event.target.value;
    }
}

SideTools.toolsHTML = `
<div id="easySafeTools" class="menu-admin show">
    <header class="header-admin"><div class="d-flex justify-content-between align-items-center flex-row">
        <div class="recolher-menu d-flex align-items-center justify-content-center"">
            <a id="easySafeTools_collapsePanel" href="#" title="Recolher Menu"><img src="images-admin/left.svg" alt="Recolher Menu"/></a>
        </div>
    </header>
    <div class="title-admin d-flex align-items-center justify-content-center flex-row">
        <div class="d-flex">
            <h2>Você está editando a página: <input id="easySafeTools_PageTitle" type="text" value="Sobre"></input> </h2>
        </div>
    </div>
    <div class="content-itens">
        <ul id="easySafeTools_EditableContainers"></ul>
    </div>
</div>`;