# Module: MMM-Space
The `MMM-Space` module is a third party module of the MagicMirror.
This module displays a background-colored div element to insert a static vertical space between modules.

## Screenshot
doesn't make sense...

## Using the module

To use this module, add it to the modules array in the `config/config.js` file:
````javascript
modules: [
	{
		module: "MMM-Space",
		position: "top_left",	// This can be any of the regions.
		config: {
			// The config property is optional.
			// See 'Configuration options' for more information.
		}
	}
]
````

## Configuration options

The following properties can be configured:

| Option            | Description
| ----------------- | -----------
| `verticalSpace`   | Definition of the static space, e.g. as pixels. <br><br> **Possible values:** `40px` or `100px` <br> **Default value:** `40px`
| `backgroundColor` | Definition of the background color. <br><br> **Possible values:** 'HEX-coded RGB values' <br> **Default value:** `"#000000"`

## Notifications
doesn't make sense...
