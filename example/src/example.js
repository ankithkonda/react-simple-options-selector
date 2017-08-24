var React = require('react');
var ReactDOM = require('react-dom');
var ReactSimpleOptionsSelector = require('react-simple-options-selector');
import styled from "styled-components"

const CodeBlock = styled.pre`
	background-color:lightgrey;
	padding:15px;
`
const CustomOptions = [
	"Some",
	"Other",
	"Options",
	"To",
	"Select"
]
var App = React.createClass({
	render () {
		return (
			<div>
				<h2>1. Hello World</h2>
				<CodeBlock>{`<ReactSimpleOptionsSelector />`}</CodeBlock>
				<ReactSimpleOptionsSelector />
				<h2>2. Custom Options</h2>
<CodeBlock>{`
const CustomOptions = [
	"Some",
	"Other",
	"Options",
	"To",
	"Select"
]

<ReactSimpleOptionsSelector 
	name="custom-options-example"
	options={
		CustomOptions.map((value, index)=>{
			return {
				id:value,
				label:value,
				selected:(index === 2) ? true:false

			}
		})
	}

/>`
}</CodeBlock>


<ReactSimpleOptionsSelector 
	
options={
	CustomOptions.map((value, index)=>{
		return {
			id:value,
			label:value,
			selected:(index === 2) ? true:false

		}
	})
}

/>

				<h2>3. Align</h2>
<CodeBlock>{`
<ReactSimpleOptionsSelector 
	name="align-left-example"
	align="left"

/>
<ReactSimpleOptionsSelector 
	name="align-right-example"
	align="right"

/>`
}</CodeBlock>
				<ReactSimpleOptionsSelector 
					name="align-left-example"
					align="left"
				/>
				<ReactSimpleOptionsSelector 
					name="align-right-example"
					align="right"
				/>


				<h2>4. Color Change</h2>
<CodeBlock>{`<ReactSimpleOptionsSelector 

	selected_text_color="#ffffff"
	selected_border_color="#AA00BF"
	selected_background_color="#8A0078"

/>`}</CodeBlock>
				<ReactSimpleOptionsSelector 
				selected_text_color="#ffffff"
				selected_border_color="#4A0040"
				selected_background_color="#AA00BF"
				
				/>

				<h2>5. Margin &amp; Padding</h2>
<CodeBlock>{`<ReactSimpleOptionsSelector 

	margin_left={50}
	margin_right={50}
	margin_top={10}
	margin_bottom={10}

	padding_left={0}
	padding_right={0}
	padding_top={0}
	padding_bottom={0}

/>`}</CodeBlock>
				<ReactSimpleOptionsSelector 
				margin_left={50}
				margin_right={50}
				margin_top={10}
				margin_bottom={10}
				padding_left={0}
				padding_right={0}
				padding_top={0}
				padding_bottom={0}
				
				/>



			</div>

			
		);
	}
});

ReactDOM.render(<App />, document.getElementById('app'));
