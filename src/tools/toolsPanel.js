import { createElement } from "../utils/element.js";

const toolsHTML = `
<div id="easySafeTools" class="menu-admin show">
    <header class="header-admin"><div class="d-flex justify-content-between align-items-center flex-row">
        <div class="recolher-menu d-flex align-items-center justify-content-center"">
            <a href="#" title="Recolher Menu"><img src="images-admin/left.svg" alt="Recolher Menu"/></a>
        </div>
    </header>
    <div class="title-admin d-flex align-items-center justify-content-center flex-row">
        <div class="d-flex">
            <h2>Você está editando a página: <strong>Sobre</strong> </h2>
        </div>
        <div class="btn-edit-title d-flex">
            <a href="#" title="Editar"><img src="images-admin/editar.svg" alt="Editar"/></a>
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
    create() {
        var body = document.getElementsByTagName("body")[0];
        var nodePanel = createElement(toolsHTML);
        body.insertBefore(nodePanel, body.childNodes[0]);
        this.panelTool = document.getElementById("easySafeTools");
        this.pageTitle = document.getElementById("easySafeTools_PageTitle");
        this.editableContainers = document.getElementById("easySafeTools_EditableContainers");
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

    /**
     * Insert itens editables on panel
     * @param {list} editables 
     */
    insertEditables(editables) {
        for (var index in editables) {
            var editable = editables[index];
            this.editableContainers.appendChild(createElement(`<li><a href="#" title="${editable.label}">${editable.label}</a></li>`));
        }
    }
}