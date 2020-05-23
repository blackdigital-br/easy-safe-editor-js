# Easy Safe Editor

Easy Safe Editor is a page editor made in JavaScript, with the objective of allowing changes to the HTML content without changing its structure, allowing a safe change by users without programming knowledge and keeping the page layout safe.

Easy Safe Editor is independent, without using other libraries like JQuery. Can be ported to any type of project.

## Warning

**This project is evolving, and we cannot guarantee compatibility between versions yet.**

## Installation

Insert the style in the HTML header:

```HTML
<link rel="stylesheet" type="text/css" href="/css/easySafeEditor.min.css">
```

Insert the js at the end of the HTML:

```HTML
<script src="/js/easySafeEditor.min.js" type="module"></script>
```

Easy Safe Editor will start automatically.

## Inserting editable parts

To indicate that a point is editable, just insert the attributes in the HTML tag.

### Title

To indicate that within the tag is the title of the current page, you add the 'data-title' attribute with a value of 'true'

```HTML
<h1 data-title="true">My Page Title</h1>
```

### Editables

Editables, are areas that can be changed, to indicate that an HTML tag can be changed, just add three attributes to it:

- **data-edit:** When the value is true, it indicates that the tag is an Editable.
- **data-type:** The value of this attribute, indicates the type of editing of the HTML block, can be text, image, among others. See the type of editable below for all supported types.
- **data-label:** This is the label that will appear in the user options and in the Json generated with the data.

These are currently the types of Editables supported:

- **text** - Plain text in single line without formatting.
- **richText** - Text with formatting, in the current version there are no formatting buttons. But it supports copy and paste.

### Editable Examples

For text:

```HTML
<h2 data-edit="true" data-type="text" data-label="Sector Title">My Sector Title</h2>
```

For richText:

```HTML
    <div data-edit="true" data-type="richText" data-label="Sector Text">
        <p>My sector text, line 1</p>
        <p>My sector text, line 2</p>
    </div>
```

## Save Post

Easy Safe Editor does not make requests to save changes, but calls a function by passing a field data through the parameter, which can be treated as you wish. This function is passed to the editor via the editor's options variable.

This variable is called easySafeEditorOptions and just create it in the format below before calling the editor's script.

```js
    easySafeEditorOptions = {
        labels: {
            save: "Save Label",
            cancel: "Cancel Label",
            draft: "Draft Label"
        },
        actions: {
            save: function(values) { console.log(values); },
            cancel: function() { console.log("Cancel") }
        },
        sideBar: {
            buttons: [
                '<a href="#" title="Português" class="active"><img src="images-admin/flag-brasil.svg" alt="Português"/></a>',
                '<a href="#" title="Inglês"><img src="images-admin/flag-eua.svg" alt="Inglês"/></a>'
            ]
        }
    };
```

* **labels** - In this configuration you can translate the editor to your language.
* **actions** - In this configuration you can handle the events of the editor.
    * **save** - This event is called when the cancel button is clicked, it takes parameters of the current values of the fields.
    * **cancel** - This event is called when the cancel button is clicked.

## Roadmap

- Editable richText with format buttons.
- Editable for images.
- Editable for videos.
- Editable with template.
- Editable for embed Youtube video.
- Editable for embed Instagram post.
