
/**
 * Get the current editor options
 */
export default class Config {

    constructor() {
        this.optionsDefaults = {
            labels: {
                save: "Save",
                cancel: "Cancel",
                draft: "Draft",
                pageEditTitle: "You are editing the page:",
                openMenu: "Open Menu",
                closeMenu: "Close Menu",
                close: "Close"
            },
            actions: {
                save: function(){ return true; },
                cancel: function(){}
            },
            paths: {
                images: "images-admin/"
            },
            sideBar: {
                buttons: []
            }
        };

        this.options= {};

        this.loadOptions();
    }

    /**
     * Load options from default values with user defined options
     */
    loadOptions() {
        if (typeof easySafeEditorOptions !== 'undefined')
            Object.assign(this.options, this.optionsDefaults, easySafeEditorOptions);
        else
            Object.assign(this.options, this.optionsDefaults, this.options);    

        this.options["labels"] = Object.assign(this.optionsDefaults["labels"], this.options["labels"]);
        this.options["actions"] = Object.assign(this.optionsDefaults["actions"], this.options["actions"]);
        this.options["paths"] = Object.assign(this.optionsDefaults["paths"], this.options["paths"]);
        this.options["sideBar"] = Object.assign(this.optionsDefaults["sideBar"], this.options["sideBar"]);
    }

    /**
     * Get current options
     * @param {String} key 
     * @param {*} defaultValue 
     */
    getValue(key, defaultValue = null) {
        let keys = key.split('.');

        let getValueKeys = (keys, options, defaultValue) => {
            let currentKey = keys.shift();

            if (currentKey in options) {
                let value = options[currentKey];

                if (keys.length > 0)
                    return getValueKeys(keys, value, defaultValue);
                else
                    return value;
            }

            return defaultValue;
        };

        return getValueKeys(keys, this.options, defaultValue);
    }
}