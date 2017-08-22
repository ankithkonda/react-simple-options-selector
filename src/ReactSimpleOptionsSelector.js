
import React from 'react'


import { clearFix } from 'polished'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import uuid from 'uuid'

const Container = styled.div`

	background-color: red;
	width: 100%;
	${clearFix()}

`
const OptionContainer = styled.div`

	background-color: green;
	float: left;
	margin: 0 10px 0 10px;
	padding: 2px;
`
const Button = styled.input`

	background-color: ${props=> props.selected ? "green":"blue"};
	width: 80px;
	height:40px;
	border:none;
	cursor:pointer;
`




export default class ReactSimpleOptionsSelector extends React.Component{
	constructor(props){
		super(props)


		console.log(props)
	}

	render(){


		return (<Container>
			
			<OptionContainer> 
				<Button type="button" value="Option A"/>
			</OptionContainer>

			<OptionContainer> 
				<Button type="button" value="Option B" selected={true}/>
			</OptionContainer>

			<OptionContainer> 
				<Button type="button" value="Option C"/>
			</OptionContainer>


		</Container>);		
	}
}




ReactSimpleOptionsSelector.PropTypes = {
	name: PropTypes.string,
	options: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string,
		value: PropTypes.string,
		label: PropTypes.string,
		selected: PropTypes.bool,
		count: PropTypes.number
	})),
	onSelectionChange: PropTypes.func,
	type: PropTypes.string // radio or checkbox
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
	type: 'radio'
}

