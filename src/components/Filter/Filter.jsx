import React from 'react'
import TextField from '@mui/material/TextField';
import cssModule from './Filter.module.css'
const Filter = ({ handleChange, value }) => {
	return (
		<div className={cssModule.filter}>
			<h2>Find contacts by name</h2>
			<TextField
				onChange={handleChange}
				value={value}
				id="standard-basic" label="Standard" variant="standard" />
		</div>
		
	)
}

export default Filter;
