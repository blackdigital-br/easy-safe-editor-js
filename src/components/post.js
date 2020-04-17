

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
            this.titleElement = document.createTextNode(this.title);
        }
    }

    getTitle() {
        return this.titleElement.innerText;
    }

    /**
     * 
     * @param {String} title 
     */
    setTitle(title) {
        this.titleElement.innerText = title;
    }

    savePost(type="publish") {
        let post = {
            title: this.getTitle(),
            type: type,
            fields: window.easySafeEditor.getValues()
        };
        
        let saveOk = false;

        try {
            saveOk = window.easySafeEditor.getOptions()["actions"]["save"](post);
        }
        catch {
            saveOk = false;
        }
    }
}