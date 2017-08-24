var React = require('react');
var ReactDOM = require('react-dom');
var ReactSimpleOptionsSelector = require('react-simple-options-selector');
import styled from "styled-components"

const CodeBlock = styled.pre`
	background-color:lightgrey;
	padding:15px;
	min-height:20px;
	width:100%;
	white-space: pre-wrap;

`

const ExampleTitle = styled.h2`
	font-weight:bold;
	margin-top:50px;
`

const CustomOptions = [
	"Some",
	"Other",
	"Options",
	"To",
	"Select"
]


class App extends React.Component {
	constructor(){
		super()
		this.state={
			react_simple_options_selector_example:null,
			custom_options_example:null,
			callback_function_example:null,
			four:null,
			five:null
		}
	}
	
	render () {
		return (
			<div>
				<ExampleTitle>1. Hello World</ExampleTitle>
				<CodeBlock>{`<ReactSimpleOptionsSelector />`}</CodeBlock>
				<ReactSimpleOptionsSelector
					onSelectionChange={(name, selected)=>{
						this.setState({
							[name]:selected
						})
					}}
				/>
<h3>Output:</h3>
<CodeBlock>
	{this.state.react_simple_options_selector_example? '> '+JSON.stringify(this.state.react_simple_options_selector_example):'> '}
</CodeBlock>

				<ExampleTitle>2. Custom Options</ExampleTitle>
<CodeBlock>{`
const CustomOptions = [
	"Some",
	"Other",
	"Options",
	"To",
	"Select"
]

<ReactSimpleOptionsSelector 
	name="custom_options_example"
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

name="custom_options_example"

onSelectionChange={(name, selected)=>{
						this.setState({
							[name]:selected
						})
					}}
	
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
<h3>Output:</h3>
<CodeBlock>
	{this.state.custom_options_example? '> '+JSON.stringify(this.state.custom_options_example):'> '}
</CodeBlock>


<ExampleTitle>3. Custom Options (Checkbox Type)</ExampleTitle>
<CodeBlock>{`
const CustomOptions = [
	"Some",
	"Other",
	"Options",
	"To",
	"Select"
]

<ReactSimpleOptionsSelector 
	name="custom_options_checkbox_example"
	type="checkbox"
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

name="custom_options_checkbox_example"
type="checkbox"
onSelectionChange={(name, selected)=>{
						this.setState({
							[name]:selected
						})
					}}
	
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
<h3>Output:</h3>
<CodeBlock>
	{this.state.custom_options_checkbox_example? '> '+JSON.stringify(this.state.custom_options_checkbox_example):'> '}
</CodeBlock>


<ExampleTitle>4. Callback Function</ExampleTitle>
				<CodeBlock>{`<ReactSimpleOptionsSelector
	name='callback_function_example'				
	onSelectionChange={(name, selected)=>{
		console.log(`+"`Yay now I can use the values ${selected} from ${name}`"+`)
	}}
/>`}</CodeBlock>
				<ReactSimpleOptionsSelector
					name='callback_function_example'
					onSelectionChange={(name, selected)=>{
						this.setState({
							[name]:selected
						})
					}}
				/>
<h3>Output:</h3>
<CodeBlock>
	{this.state.callback_function_example? `> Yay now I can use the values ${'> '+JSON.stringify(this.state.callback_function_example)} from callback_function_example`:'> '}
</CodeBlock>




				<ExampleTitle>5. Align</ExampleTitle>
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


				<ExampleTitle>6. Color Change</ExampleTitle>
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

				<ExampleTitle>7. Margin &amp; Padding</ExampleTitle>
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
}

ReactDOM.render(<App />, document.getElementById('app'));
