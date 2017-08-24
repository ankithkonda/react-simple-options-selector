
import React from 'react'


import { clearFix } from 'polished'
import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import uuid from 'uuid'

const Container = styled.div`

	width: 100%;
	${clearFix()}
	${props=> props.align === "center" ? css`text-align:center` : ''};

`
const OptionContainer = styled.div`

	${(props)=>{
		let margin_padding = ``
		props.margin_left ? margin_padding += `margin-left:${props.margin_left}px;`:null
		props.margin_right ? margin_padding += `margin-right:${props.margin_right}px;`:null
		props.margin_top ? margin_padding += `margin-top:${props.margin_top}px;`:null
		props.margin_bottom ? margin_padding += `margin-bottom:${props.margin_bottom}px;`:null
		props.padding_left ? margin_padding += `margin-left:${props.padding_left}px;`:null
		props.padding_right ? margin_padding += `margin-right:${props.padding_right}px;`:null
		props.padding_top ? margin_padding += `margin-top:${props.padding_top}px;`:null
		props.padding_bottom ? margin_padding += `margin-bottom:${props.padding_bottom}px;`:null
		return css`${margin_padding}`
	}}

	${props=> props.align === "center" && 
	css`
		display: inline-block !important;
		vertical-align: top !important;
	` 
	};

	${props=> ((props.align === "left") || (props.align === "right")) && 
	css`
		float:${props.align}
	` 
	};
	
	
`
const Button = styled.input`

	background-color: ${props=> props.selected ? props.selected_background_color:"lightgrey"};
	color:  ${props=> props.selected ? props.selected_text_color:"black"};
	font:15px;
	font-weight:bold;
	height:40px;
	border:none;
	border: 1px solid ${props=> props.selected ? props.selected_border_color:"black"};
	cursor:pointer;
	padding: 0.25em 1em;
	border: 2px solid violetred;
	border-radius: 3px;
	text-align:center;
	min-width:100px !important;

`

export default class ReactSimpleOptionsSelector extends React.Component{
	constructor(props){
		super(props)

		let defaultOptionsState = {}
        this.props.options.forEach(function(obj, ind){
            defaultOptionsState[obj.id] = obj.selected    
        })

        this.state={
            ...defaultOptionsState,
        }

		this.optionClicked = this.optionClicked.bind(this)
		
	}

	optionClicked(event){

		let optionID = event.target.id
		let currentState = {...this.state}

		if(this.props.type === "radio"){

			this.props.options.forEach((option)=>{
				currentState[option.id] = false
			})

			currentState[optionID] = true

			this.setState({
				...currentState
			})

		}else{

			currentState[optionID] = !this.state[optionID]

			this.setState({
				[optionID]:!this.state[optionID]
			})

		}

		let selected = []
		this.props.options.forEach((option)=>{
			currentState[option.id] ? selected.push(option.id): null
		})

		this.props.onSelectionChange(this.props.name, selected);

	}

	render(){

		let options = this.props.options.map((option)=>{
			return (<OptionContainer 
				key={option.id} 
				align={this.props.align}
				
				margin_left={this.props.margin_left}
				margin_right={this.props.margin_right}
				margin_top={this.props.margin_top}
				margin_bottom={this.props.margin_bottom}
				padding_left={this.props.padding_left}
				padding_right={this.props.padding_right}
				padding_top={this.props.padding_top}
				padding_bottom={this.props.padding_bottom}
				
				> 
					<Button onClick={this.optionClicked} 
						type="button" 
						
						selected_text_color={this.props.selected_text_color}
						selected_border_color={this.props.selected_border_color}
						selected_background_color={this.props.selected_background_color}
						
						value={option.label} 
						id={option.id} 
						selected={this.state[option.id]}/>
			</OptionContainer>)
		})

		return (<Container align={this.props.align}>{options}</Container>);		
	}
}




ReactSimpleOptionsSelector.PropTypes = {
	name: PropTypes.string.isRequired,
	options: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		value: PropTypes.string, // currently unused
		label: PropTypes.string.isRequired,
		selected: PropTypes.bool,
		count: PropTypes.number // currently unused (in the future displays a badge of count on the button)
	})),
	onSelectionChange: PropTypes.func,
	type: PropTypes.string, // radio or checkbox
	
	selected_text_color:PropTypes.string,
	selected_border_color:PropTypes.string,
	selected_background_color:PropTypes.string,

	margin_left:PropTypes.number,
	margin_right:PropTypes.number,
	margin_top:PropTypes.number,
	margin_bottom:PropTypes.number,

	padding_left:PropTypes.number,
	padding_right:PropTypes.number,
	padding_top:PropTypes.number,
	padding_bottom:PropTypes.number,

	align:PropTypes.string // center, left, right

}

ReactSimpleOptionsSelector.defaultProps = {
	name: 'react-simple-options-selector-example',
	options: [

			{
				id: uuid.v4(),
				value: 'option_a',
				label: 'Option A',
				selected: true,
				count: 3
			},
			{
				id: uuid.v4(),
				value: 'option_b',
				label: 'Option B',
				selected: false,
				count: 3
			},
			{
				id: uuid.v4(),
				value: 'option_c',
				label: 'Option C',
				selected: false,
				count: 3
			}

	],
	onSelectionChange: (name, selected)=>{
		console.log(name, selected);
	},
	type: 'radio',
	
	selected_text_color:"#ffffff",
	selected_border_color:"#04755B",
	selected_background_color:"#06BA90",
	
	margin_left:0,
	margin_right:10,
	margin_top:0,
	margin_bottom:10,

	padding_left:0,
	padding_right:0,
	padding_top:0,
	padding_bottom:0,
	
	align:"center" 

}


