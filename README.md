# tailwindcss-preset-blueprintjs

A preset for [Tailwind CSS](https://tailwindcss.com/docs/installation) to load colors, shadows,
fonts, and transitions from [BlueprintJS](https://blueprintjs.com/docs/).

## About

This package provides a preset to make available as Tailwind utility classes the colors, shadows,
fonts, and transitions used by Blueprint version 5. If you want to pick out only certain parts, you
can also simply import each element separately and spread it into your config.

**Dependencies:** None. The `Colors` object is imported from Blueprint to help construct
[colorsConfig.js](./src/bp5/colorsConfig.ts), but that's included by Rollup.

## Naming Conventions

There are three broad things to note regarding naming:

1. All class names are prefixed with `bp5-`. For example, `text-black` should be written as
   `text-bp5-black`.
2. Blueprint's [variables](https://blueprintjs.com/docs/#core/variables) page lists names with
   `$pt-` prefixed, which you can ignore.
3. Blueprint's [variables](https://blueprintjs.com/docs/#core/variables.color-aliases) page lists
   dark variants with `dark-` at the start of the name. This has been moved to the end. For example,
   `bg-bp5-app-background-dark`.

Otherwise, the class names generally match those listed in the Blueprint docs for
[colors](https://blueprintjs.com/docs/#core/colors) and
[variables](https://blueprintjs.com/docs/#core/variables), with some Tailwind-friendly changes (see
below).

### Colors

**Named Colors:** These all match the [colors](https://blueprintjs.com/docs/#core/colors) docs, with
the exceptions noted above. The numbered versions should be written with a dash between the color
and the number, for example, `bg-bp5-gray-2`.

**Semantic Colors:** These all match the
[variables](https://blueprintjs.com/docs/#core/variables.color-aliases) docs, with the exceptions
noted above. For colors with `color` in the original name, this has been left in, since Tailwind's
color class names only read correctly if the color used is the name of an actual color.

### Shadows

For all shadows, `shadow` has been removed from the original name so that your class names read
better. For example, `shadow-bp5-elevation-2`. Dark variants have `-dark` _at the end_, after the
number.

### Fonts

These are simply named `bp5-sans` and `bp5-mono`, in line with Tailwind's usual naming.

### Transitions

These are not in the docs, but are part of the files (`@blueprintjs/core/lib/scss/variables`). These
contain `ease` and `ease-bounce`, which can be referenced as Tailwind classes like `ease-bp5` and
`ease-bp5-bounce`, respectively ("ease" is the Tailwind utility class prefix for
`transition-timing-function`, which made for awkward naming).

## Installation

Simply run `npm install --save-dev tailwindcss-preset-blueprintjs`.

## Usage

To make everything available, add a `presets` key to your Tailwind config file. See the test
[tailwind.config.ts](test/tailwind.config.ts) for a full example.

To use the `require` syntax, you can import from `tailwindcss-preset-blueprintjs/bp5/blueprint`.

```js
// tailwind.config.js
import { blueprint } from "tailwindcss-preset-blueprintjs/bp5"

const config = {
    // ...
    presets: [blueprint]
    // ...
}

export default config
```

Otherwise, you may also import each part separately and spread them into your config.

```js
// tailwind.config.js
import {
    colorsConfig,
    shadowsConfig,
    fontFamilyConfig,
    transitionTimingConfig
} from "tailwindcss-preset-blueprintjs/bp5"

const config = {
    // ...
    theme: {
        extend: {
            ...colorsConfig,
            ...shadowsConfig,
            ...fontFamilyConfig,
            ...transitionTimingConfig
            // ...
        }
    }
    // ...
}

export default config
```

## All the Classes

### Colors

**Grayscale**

`bp5-black`, `bp5-white`, `bp5-dark-gray-1`, `bp5-dark-gray-2`, `bp5-dark-gray-3`,
`bp5-dark-gray-4`, `bp5-dark-gray-5`, `bp5-gray-1`, `bp5-gray-2`, `bp5-gray-3`, `bp5-gray-4`,
`bp5-gray-5`, `bp5-light-gray-1`, `bp5-light-gray-2`, `bp5-light-gray-3`, `bp5-light-gray-4`,
`bp5-light-gray-5`

**Core Colors**

`bp5-blue-1`, `bp5-blue-2`, `bp5-blue-3`, `bp5-blue-4`, `bp5-blue-5`, `bp5-green-1`, `bp5-green-2`,
`bp5-green-3`, `bp5-green-4`, `bp5-green-5`, `bp5-orange-1`, `bp5-orange-2`, `bp5-orange-3`,
`bp5-orange-4`, `bp5-orange-5`, `bp5-red-1`, `bp5-red-2`, `bp5-red-3`, `bp5-red-4`, `bp5-red-5`

**Extended Colors**

`bp5-vermilion-1`, `bp5-vermilion-2`, `bp5-vermilion-3`, `bp5-vermilion-4`, `bp5-vermilion-5`,
`bp5-rose-1`, `bp5-rose-2`, `bp5-rose-3`, `bp5-rose-4`, `bp5-rose-5`, `bp5-violet-1`,
`bp5-violet-2`, `bp5-violet-3`, `bp5-violet-4`, `bp5-violet-5`, `bp5-indigo-1`, `bp5-indigo-2`,
`bp5-indigo-3`, `bp5-indigo-4`, `bp5-indigo-5`, `bp5-cerulean-1`, `bp5-cerulean-2`,
`bp5-cerulean-3`, `bp5-cerulean-4`, `bp5-cerulean-5`, `bp5-turquoise-1`, `bp5-turquoise-2`,
`bp5-turquoise-3`, `bp5-turquoise-4`, `bp5-turquoise-5`, `bp5-forest-1`, `bp5-forest-2`,
`bp5-forest-3`, `bp5-forest-4`, `bp5-forest-5`, `bp5-lime-1`, `bp5-lime-2`, `bp5-lime-3`,
`bp5-lime-4`, `bp5-lime-5`, `bp5-gold-1`, `bp5-gold-2`, `bp5-gold-3`, `bp5-gold-4`, `bp5-gold-5`,
`bp5-sepia-1`, `bp5-sepia-2`, `bp5-sepia-3`, `bp5-sepia-4`, `bp5-sepia-5`

**Semantic Colors**

`bp5-intent-primary`, `bp5-intent-success`, `bp5-intent-warning`, `bp5-intent-danger`,
`bp5-app-background-color`, `bp5-app-background-color-dark`, `bp5-text-color`,
`bp5-text-color-dark`, `bp5-text-color-muted`, `bp5-text-color-muted-dark`,
`bp5-text-color-disabled`, `bp5-text-color-disabled-dark`, `bp5-heading-color`,
`bp5-heading-color-dark`, `bp5-link-color`, `bp5-link-color-dark`, `bp5-text-selection-color`,
`bp5-icon-color`, `bp5-icon-color-dark`, `bp5-icon-color-hover`, `bp5-icon-color-hover-dark`,
`bp5-icon-color-disabled`, `bp5-icon-color-disabled-dark`, `bp5-icon-color-selected`,
`bp5-icon-color-selected-dark`, `bp5-divider-black`, `bp5-divider-black-dark`,
`bp5-divider-black-muted`, `bp5-divider-white-dark`, `bp5-divider-white-muted`,
`bp5-code-text-color`, `bp5-code-text-color-dark`, `bp5-code-background-color`,
`bp5-code-background-color-dark`

### Shadows

**Elevation**

`bp5-elevation-0`, `bp5-elevation-0-dark`, `bp5-elevation-1`, `bp5-elevation-1-dark`,
`bp5-elevation-2`, `bp5-elevation-2-dark`, `bp5-elevation-3`, `bp5-elevation-3-dark`,
`bp5-elevation-4`, `bp5-elevation-4-dark`

**Input**

`bp5-input`, `bp5-input-dark`

**Dialog**

`bp5-dialog`, `bp5-dialog-dark`

**Popover**

`bp5-popover`, `bp5-popover-dark`

**Tooltip**

`bp5-tooltip`, `bp5-tooltip-dark`

**Toast**

`bp5-toast`, `bp5-toast-dark`

### Fonts

`bp5-sans`, `bp5-mono`

### Transitions

`bp5`, `bp5-bounce`
