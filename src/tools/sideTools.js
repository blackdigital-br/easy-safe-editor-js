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
        let html = SideTools.HTML;
        html = html.replace(/{pathImage}/g, window.easySafeEditor.options.getValue("paths.images"));
        html = html.replace(/{pageEditTitle}/g, window.easySafeEditor.options.getValue("labels.pageEditTitle"));
        html = html.replace(/{openMenu}/g, window.easySafeEditor.options.getValue("labels.openMenu"));
        html = html.replace(/{closeMenu}/g, window.easySafeEditor.options.getValue("labels.closeMenu"));
        html = html.replace(/{close}/g, window.easySafeEditor.options.getValue("labels.close"));
        
        let nodePanel = createElement(html);
        body.insertBefore(nodePanel, body.firstChild);

        this.panelTool = document.getElementById("easySafeTools");
        this.pageTitle = document.getElementById("easySafeTools_PageTitle");
        this.editableContainers = document.getElementById("easySafeTools_EditableContainers");
        this.collapseButton = document.getElementById("easySafeTools_collapsePanel");
        this.uncollapseButton = document.getElementById("easySafeTools_uncollapsePanel");
        this.closeButton = document.getElementById("easySafeTools_closePanel");
        this.buttonsContainer = document.getElementById("easySafeTools_sideButtons");


        this.collapseButton.addEventListener("click", (event) => this.onCollapseButtonClick(event), true);
        this.uncollapseButton.addEventListener("click", (event) => this.onCollapseButtonClick(event), true);
        this.closeButton.addEventListener("click", (event) => this.onCloseButtonClick(event), true);

        this.pageTitle.value = window.easySafeEditor.post.getTitle();
        this.pageTitle.addEventListener("input", (event) => this.onChangeTitle(event), true);

        let buttons = window.easySafeEditor.options.getValue("sideBar.buttons");
        buttons.forEach(button => {
            let element = null;
            
            if ((typeof button) == "string")
                element = createElement(button);
            else if ((typeof button) == "HTMLElement")
                element = button;

            if (element != null)
                this.buttonsContainer.append(element);
        });
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
     * Show aside tools menu
     */
    showTools() {
        this.panelTool.classList.remove("show");
        this.panelTool.classList.add("hidden");
    }

    /**
     * Hide aside tools menu
     */
    hiddenTools() {
        this.panelTool.classList.remove("hidden");
        this.panelTool.classList.add("show");
    }

    /**
     * Toggle aside tools menu
     */
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
     * Select editable button event, focus editable
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
     * Collapse button event, toggle aside menu
     * @param {MouseEvent} event 
     */
    onCollapseButtonClick(event) {
        this.toggleTools();
        event.preventDefault();
    }

    /**
     * Change title event. Change post title.
     * @param {InputEvent} event 
     */
    onChangeTitle(event) {
        window.easySafeEditor.post.setTitle(event.target.value);
    }

    /**
     * Close button event, cancel post
     * @param {*} event 
     */
    async onCloseButtonClick(event) {
        event.preventDefault();
        await window.easySafeEditor.post.cancelPost();
    }
}

SideTools.HTML = `
<div id="easySafeTools" class="menu-admin show">
    <div class="open-menu">
        <a id="easySafeTools_uncollapsePanel" href="#" title="{openMenu}"><img src="{pathImage}left.svg" alt="{openMenu}"/></a>
    </div>
    <header class="header-admin"><div class="d-flex justify-content-between align-items-center flex-row">
        <div class="close-menu button-menu d-flex align-items-center justify-content-center">
            <a id="easySafeTools_closePanel" href="#" title="{close}"><img src="{pathImage}close.svg" alt="{close}"/></a>
        </div>
        <div class="collapse-menu button-menu d-flex align-items-center justify-content-center"">
            <a id="easySafeTools_collapsePanel" href="#" title="{closeMenu}"><img src="{pathImage}left.svg" alt="{closeMenu}"/></a>
        </div>
        <div id="easySafeTools_sideButtons" class="action-menu d-flex align-items-center justify-content-center flex-row ml-auto">
        </div>
    </header>
    <div class="title-admin d-flex align-items-center justify-content-center flex-row">
        <div class="d-flex">
            <h2>{pageEditTitle} <input id="easySafeTools_PageTitle" type="text" value="Sobre"></input> </h2>
        </div>
    </div>
    <div class="content-itens">
        <ul id="easySafeTools_EditableContainers"></ul>
    </div>
</div>`;