const toolsHTML = `
<div id="easySafeTools" class="menu-admin show">
    <header class="header-admin"><div class="d-flex justify-content-between align-items-center flex-row">
        <div class="recolher-menu d-flex align-items-center justify-content-center"">
            <a href="#" title="Recolher Menu"><img src="images-admin/left.svg" alt="Recolher Menu"/></a>
        </div>
    </header>
    <div class="title-admin">
        <h2>Você está editando a página: <strong id="easySafeTools_PageTitle">Sobre</strong></h2>
    </div>
    <div class="content-itens">
        <ul id="easySafeTools_EditableContainers"></ul>
    </div>
</div>`;



export default class ToolsPanel {
    constructor() {
    }

    create() {
        var body = document.getElementsByTagName("body")[0];
        body.innerHTML = toolsHTML + body.innerHTML;
        this.panelTool = document.getElementById("easySafeTools");
        this.pageTitle = document.getElementById("easySafeTools_PageTitle");
        this.editableContainers = document.getElementById("easySafeTools_EditableContainers");
    }

    remove() {
        this.panelTool.remove();
        this.panelTool = null;
        this.pageTitle = null;
        this.editableContainers = null;
    }

    insertEditables(editables) {
        for (var index in editables) {
            var editable = editables[index];
            this.editableContainers.innerHTML += `<li><a href="#" title="${editable.label}">${editable.label}</a></li>`;
        }
    }
}