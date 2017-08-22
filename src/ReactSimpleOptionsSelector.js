
import React from 'react'


import { clearFix } from 'polished'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import uuid from 'uuid'

const Container = styled.div`

	width: 100%;
	${clearFix()}

`
const OptionContainer = styled.div`

	float: left;
	margin: 0 10px 0 10px;
	padding: 2px;

`
const Button = styled.input`

	background-color: ${props=> props.selected ? props.selectedStyle.selected_background_color:"lightgrey"};
	color:  ${props=> props.selected ? props.selectedStyle.selected_text_color:"black"};
	font:15px;
	font-weight:bold;
	height:40px;
	border:none;
	border: 1px solid ${props=> props.selected ? props.selectedStyle.selected_border_color:"black"};
	cursor:pointer;
	padding: 0.25em 1em;
	border: 2px solid violetred;
	border-radius: 3px;

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
			return (<OptionContainer key={option.id}> 
				<Button onClick={this.optionClicked} type="button" selectedStyle={this.props.style} value={option.label} id={option.id} selected={this.state[option.id]}/>
			</OptionContainer>)
		})

		return (<Container>{options}</Container>);		
	}
}




ReactSimpleOptionsSelector.PropTypes = {
	name: PropTypes.string.isRequired,
	options: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		value: PropTypes.string, // currently unused
		label: PropTypes.string.isRequired,
		selected: PropTypes.bool,
		count: PropTypes.number
	})),
	onSelectionChange: PropTypes.func,
	type: PropTypes.string, // radio or checkbox
	style: PropTypes.shape({
		selected_text_color:PropTypes.string,
		selected_border_color:PropTypes.string,
		selected_background_color:PropTypes.string
	})
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
	style: {
		selected_text_color:"#ffffff",
		selected_border_color:"#04755B",
		selected_background_color:"#06BA90"
	}
}

