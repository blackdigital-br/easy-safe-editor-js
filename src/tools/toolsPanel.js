import { createElement } from "../utils/element.js";

const toolsHTML = `
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


/**
 * @class ToolsPanel manage aside panel for tools
 */
export default class ToolsPanel {
    constructor() {
    }

    /**
     * Create tools panel on page
     */
    create(editor) {
        this.editor = editor;
        let body = document.getElementsByTagName("body")[0];
        let nodePanel = createElement(toolsHTML);
        body.insertBefore(nodePanel, body.firstChild);
        this.panelTool = document.getElementById("easySafeTools");
        this.pageTitle = document.getElementById("easySafeTools_PageTitle");
        this.editableContainers = document.getElementById("easySafeTools_EditableContainers");
        this.collapseButton = document.getElementById("easySafeTools_collapsePanel");

        this.collapseButton.addEventListener("click", this.onCollapseButtonClick, true);

        this.pageTitle.value = this.editor.title;
        this.pageTitle.addEventListener("input", this.onChangeTitle, true);
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
            editableSelectButton.firstChild.addEventListener("click", this.onSelectButtonClick);
            this.editableContainers.appendChild(editableSelectButton);
        }
    }

    onSelectButtonClick = (event) => {
        let index = event.target.getAttribute("data-index");
        let editable = this.editor.editables[index];
        editable.element.scrollIntoView({block: "center"});
        this.editor.selectEditable(editable);
        event.preventDefault();
    }

    onCollapseButtonClick = (event) => {
        this.toggleTools();
        event.preventDefault();
    }

    onChangeTitle = (event) => {
        this.editor.title = event.target.value;
        this.editor.titleElement.innerText = event.target.value;
    }
}