import Post from "./components/post.js";
import SideTools from "./tools/sideTools.js";
import FrameTools from "./tools/frameTools.js"
import ActionBar from "./tools/actionBar.js";
import EditableCore from "./editables/editableCore.js";
import Editable from "./editables/editable.js";


var easySafeEditor = {
    asideTools: new SideTools(),
    frameTools: new FrameTools(),
    post: new Post(),
    actionBar: new ActionBar(),
    //watermark: null,
    editables: [],
    editableSelected: null,
    title: "",
    titleElement: null,

    /**
     * Initializes the editor
     */
    init: function() {
        this.post.create();
        this.asideTools.create();
        this.frameTools.create();
        this.actionBar.create();

        this.findEditables();
        this.asideTools.insertEditables(this.editables);
    },

    /**
     * Find on page, elements to edit
     */
    findEditables: function() {
        let elements = document.querySelectorAll("[data-edit='true']");
        let length = elements.length;

        for (let i = 0; i < length; i++ ) {
            let element = elements[i];
            let editable = EditableCore.createEditable(this, element);
            this.editables.push(editable);
        }
    },

    /**
     * 
     * @param {Editable} editable 
     */
    selectEditable: function(editable) {
        editable.element.focus();

        if (this.editableSelected != editable) {
            this.editableSelected = editable;
            this.frameTools.showActions(this.editableSelected);
        }
    },

    getOptions: function() {
        let options = {};

        if (typeof easySafeEditorOptions !== 'undefined') {
            options = easySafeEditorOptions;
        }

        if (!("labels" in options))
            options["labels"] = {};

        if (!("actions" in options))
            options["actions"] = {};

        let defaultLabels = {
            save: "Save",
            cancel: "Cancel",
            draft: "Draft"
        };

        let defaultActions = {
            save: function(){ return true; },
            cancel: function(){}
        };

        options["labels"] = Object.assign(defaultLabels, options["labels"]);
        options["actions"] = Object.assign(defaultActions, options["actions"]);

        return options;
    },

    getValues: function() {
        let values = {};
        values["title"] = this.title;

        for (let index in this.editables) {
            let editable = this.editables[index];
            values = editable.getValue(values);
        }

        return values;
    }

};

window.easySafeEditor = easySafeEditor;
easySafeEditor.init();

export default easySafeEditor;