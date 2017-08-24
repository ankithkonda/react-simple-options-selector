# React Simple Options Selector

Live demo: [ankithkonda.github.io/react-simple-options-selector](http://ankithkonda.github.io/react-simple-options-selector/)


Creates a row of buttons that can be toggled on/off


## Installation

The easiest way to use react-simple-options-selector is to install it from NPM and include it in your own React build process (using [Browserify](http://browserify.org), [Webpack](http://webpack.github.io/), etc).

You can also use the standalone build by including `dist/react-simple-options-selector.js` in your page. If you use this, make sure you have already included React, and it is available as a global variable.

```
npm install react-simple-options-selector --save
```


## Usage

```js 
import ReactSimpleOptionsSelector from "react-simple-options-selector"

<ReactSimpleOptionsSelector />
```

## Props


From [`../src/ReactSimpleOptionsSelector.js`](../src/ReactSimpleOptionsSelector.js)



#### options

```js
Default: 

[

        {
            id: uuid.v4(), 
            label: 'Option A',
            selected: true,
        },
        {
            id: uuid.v4(), 
            label: 'Option B',
            selected: false,
        },
        {
            id: uuid.v4(),
            label: 'Option C',
            selected: false,
        }

]
```

#### name

```js
Default : 'react-simple-options-selector-example'
```

#### onSelectionChange

```js
// Default
(name, selected)=>{
    console.log(name, selected);
} 
```

#### type

```js
/**
 Options: 'radio' or 'checkbox' 

 radio: One selection can be made
 checkbox: Multiple selections can be made

 **/
 Default: 'radio'
```

#### align

```js
Default: : "center"
```

#### margin_bottom

```js
Default: : 10 
```

#### margin_left

```js
Default: : 0 
```

#### margin_right

```js
Default: : 10 
```

#### margin_top

```js
Default: : 0 
```


#### padding_bottom

```js
Default: : 0 
```

#### padding_left

```js
Default: : 0 
```

#### padding_right

```js
Default: : 0 
```

#### padding_top

```js
Default: : 0 
```

#### selected_background_color

```js
Default: : "#06BA90" 
```

#### selected_border_color

```js
Default: : "#04755B" 
```

#### selected_text_color

```js
Default: : "#ffffff" 
```
</p>
<br>


## Examples

To build the examples locally, run:

```
npm install
npm start
```

Then open [`localhost:8000`](http://localhost:8000) in a browser.

### Notes

Version 1.0.0 is a bare minium example I've built for my own project. Please submit any feature requests or pull requests with new feature to make this awesome.

This has been scaffolded by - [JedWatson's generator-react-component](https://github.com/JedWatson/generator-react-component)


## Development (`src`, `lib` and the build process)

**NOTE:** The source code for the component is in `src`. A transpiled CommonJS version (generated with Babel) is available in `lib` for use with node.js, browserify and webpack. A UMD bundle is also built to `dist`, which can be included without the need for any build system.

To build, watch and serve the examples (which will also watch the component source), run `npm start`. If you just want to watch changes to `src` and rebuild `lib`, run `npm run watch` (this is useful if you are working with `npm link`).

## License

MIT License

Copyright (c) 2017 Ankith Konda (ankithkonda)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.