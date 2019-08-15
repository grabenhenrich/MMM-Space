# Module: MMM-Space
The `MMM-Space` module is a third party module for the MagicMirror universe.
This module displays a background-colored 'div' element to let you insert a static vertical space between other modules.

## Screenshot
Doesn't make sense as it usually displays nothing (only when you specify a background color which is meant to see what you get while tinkering with the MagicMirror overall layout).

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
| `verticalSpace`   | Definition of the height of the static space, e.g. as pixels. <br><br> **Possible values:** `40px`, `100px`, ... <br> **Default value:** `40px`
| `backgroundColor` | Definition of the background color, usually left blank. <br><br> **Possible values:** HEX-coded RGB values <br> **Default value:** `"#000000"`

## Notifications
Doesn't make sense to exchange any information with the MagicMirror system, as this is a purely static HTML element.
