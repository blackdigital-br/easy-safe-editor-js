import { createElement } from "../utils/element.js";

/**
 * Create Action Bar
 */
export default class ActionBar {

    /**
     * Create Action Bar on page
     */
    create() {
        let body = document.getElementsByTagName("body")[0];

        let html = ActionBar.HTML;
        html = html.replace("{save}", window.easySafeEditor.getOptions()["labels"]["save"]);
        html = html.replace("{cancel}", window.easySafeEditor.getOptions()["labels"]["cancel"]);
        html = html.replace("{draft}", window.easySafeEditor.getOptions()["labels"]["draft"]);

        body.appendChild(createElement(html));

        this.actionBar = document.getElementById("easyActionBar")
        this.saveButton = document.getElementById("easyActionBar_save");
        this.cancelButton = document.getElementById("easyActionBar_cancel");
        this.draftButton = document.getElementById("easyActionBar_draft");

        this.saveButton.addEventListener("click", (event) => this.onSaveClickButton(event), true);
        this.cancelButton.addEventListener("click", (event) => this.onCancelClickButton(event), true);
        this.draftButton.addEventListener("click", (event) => this.onDraftClickButton(event), true);
    }

    /**
     * 
     * @param {MouseEvent} event 
     */
    onSaveClickButton(event) {
        window.easySafeEditor.post.savePost();
        event.preventDefault();
    }

    /**
     * 
     * @param {MouseEvent} event 
     */
    onCancelClickButton(event) {
        event.preventDefault();
    }

    /**
     * 
     * @param {MouseEvent} event 
     */
    onDraftClickButton(event) {
        window.easySafeEditor.post.savePost("draft");
        event.preventDefault();
    }
}

ActionBar.HTML = `
<div id="easyActionBar" class="botoes-acoes d-flex flex-row">
    <div class="publicar-atualizar">
        <a id="easyActionBar_save" href="#" title="Publicar">
            <div class="img d-flex align-items-center justify-content-center">
                <img src="images-admin/publicar.svg" alt="Publicar"/>
            </div>
            <div class="texto">
                <p>{save}</p>
            </div>
        </a> 
    </div>
    <div class="raschunho">
        <a id="easyActionBar_draft" href="#" title="Raschunho">
            <div class="img d-flex align-items-center justify-content-center">
                <img src="images-admin/rascunho.svg" alt="Raschunho"/>
            </div>
            <div class="texto">
                <p>{draft}</p>
            </div>
        </a> 
    </div>
    <div class="cancelar">
        <a id="easyActionBar_cancel" href="#" title="Cancelar">
            <div class="img d-flex align-items-center justify-content-center">
                <img src="images-admin/cancelar.svg" alt="Cancelar"/>
            </div>
            <div class="texto">
                <p>{cancel}</p>
            </div>
        </a> 
    </div>
</div>`;