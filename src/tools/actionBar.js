import { createElement } from "../utils/element.js";
import Loading from "../components/loading.js";

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
        
        html = html.replace(/{save}/g, window.easySafeEditor.getOptions()["labels"]["save"]);
        html = html.replace(/{cancel}/g, window.easySafeEditor.getOptions()["labels"]["cancel"]);
        html = html.replace(/{draft}/g, window.easySafeEditor.getOptions()["labels"]["draft"]);
        html = html.replace(/{pathImage}/g, window.easySafeEditor.getOptions()["paths"]["images"]);

        body.appendChild(createElement(html));

        this.actionBar = document.getElementById("easyActionBar")
        this.saveButton = document.getElementById("easyActionBar_save");
        this.cancelButton = document.getElementById("easyActionBar_cancel");
        this.draftButton = document.getElementById("easyActionBar_draft");

        this.saveButton.addEventListener("click", (event) => this.onSaveClickButton(event), true);
        this.cancelButton.addEventListener("click", (event) => this.onCancelClickButton(event), true);
        this.draftButton.addEventListener("click", (event) => this.onDraftClickButton(event), true);

        this.processing = false;
    }

    /**
     * 
     * @param {MouseEvent} event 
     */
    async onSaveClickButton(event) {
        event.preventDefault();

        if (!this.processing) {
            this.processing = true;
            let loading = Loading.showLoading(this.saveButton.firstElementChild.firstElementChild);
            await window.easySafeEditor.post.savePost();
            loading.close();
            this.processing = false;
        }
    }

    /**
     * 
     * @param {MouseEvent} event 
     */
    async onCancelClickButton(event) {
        event.preventDefault();

        if (!this.processing) {
            this.processing = true;
            let loading = Loading.showLoading(this.cancelButton.firstElementChild.firstElementChild);
            await window.easySafeEditor.post.cancelPost();
            loading.close();
            this.processing = false;
        }
    }

    /**
     * 
     * @param {MouseEvent} event 
     */
    async onDraftClickButton(event) {
        event.preventDefault();

        if (!this.processing) {
            this.processing = true;
            let loading = Loading.showLoading(this.draftButton.firstElementChild.firstElementChild);
            await window.easySafeEditor.post.savePost("draft");
            loading.close();
            this.processing = false;
        }
    }
}

ActionBar.HTML = `
<div id="easyActionBar" class="botoes-acoes d-flex flex-row">
    <div class="publicar-atualizar">
        <a id="easyActionBar_save" href="#" title="{save}">
            <div class="img d-flex align-items-center justify-content-center">
                <img src="{pathImage}publicar.svg" alt="{save}"/>
            </div>
            <div class="texto">
                <p>{save}</p>
            </div>
        </a> 
    </div>
    <div class="raschunho">
        <a id="easyActionBar_draft" href="#" title="{draft}">
            <div class="img d-flex align-items-center justify-content-center">
                <img src="{pathImage}rascunho.svg" alt="{draft}"/>
            </div>
            <div class="texto">
                <p>{draft}</p>
            </div>
        </a> 
    </div>
    <div class="cancelar">
        <a id="easyActionBar_cancel" href="#" title="{cancel}">
            <div class="img d-flex align-items-center justify-content-center">
                <img src="{pathImage}cancelar.svg" alt="{cancel}"/>
            </div>
            <div class="texto">
                <p>{cancel}</p>
            </div>
        </a> 
    </div>
</div>`;