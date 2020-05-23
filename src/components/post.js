

export default class Post {
    
    create() {
        this.titleElement = null;
        this.findTitle();
        
    }

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

    getTitle() {
        return this.titleElement.textContent;
    }

    /**
     * 
     * @param {String} title 
     */
    setTitle(title) {
        this.titleElement.textContent = title;
    }

    /**
     * 
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
            saveOk = window.easySafeEditor.getOptions()["actions"]["save"](post);
            
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
     * 
     */
    cancelPost() {
        let cancelOk = false;
        try {
            cancelOk = window.easySafeEditor.getOptions()["actions"]["cancel"]();
            
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