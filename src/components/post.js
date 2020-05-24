
/**
 * Manage post edit
 */
export default class Post {
    
    /**
     * Create the post object
     */
    create() {
        this.titleElement = null;
        this.findTitle();
    }

    /**
     * Find the current title element
     */
    findTitle() {
        let elements = document.querySelectorAll("[data-title='true']");

        if (elements.length > 0) {
            this.titleElement = elements[0];
        }
        else {
            console.log("No title!");
            this.titleElement = document.createTextNode("");
        }
    }

    /**
     * Get current title value
     */
    getTitle() {
        return this.titleElement.textContent;
    }

    /**
     * Set new title
     * @param {String} title 
     */
    setTitle(title) {
        this.titleElement.textContent = title;
    }

    /**
     * Save post action
     * @param {String} type 
     * @returns {Promise}
     */
    savePost(type = "publish") {
        let post = {
            title: this.getTitle(),
            type: type,
            fields: window.easySafeEditor.getValues()
        };
        
        let saveOk = false;
        try {
            saveOk = window.easySafeEditor.options.getValue("actions.save")(post);
            
            if (typeof saveOk === 'Promise')
                return saveOk;
        }
        catch {
            saveOk = false;
        }

        return new Promise((resolve) => {
            resolve(saveOk);
        });
    }

    /**
     * Cancel post action
     */
    cancelPost() {
        let cancelOk = false;
        try {
            cancelOk = window.easySafeEditor.options.getValue("actions.cancel")();
            
            if (typeof cancelOk === 'Promise')
                return cancelOk;
        }
        catch {
            cancelOk = false;
        }

        return new Promise((resolve) => {
            resolve(cancelOk);
        });   
    }
}