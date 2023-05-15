import React, { Component } from 'react';
import TextField from '@mui/material/TextField';
import { nanoid } from 'nanoid';
import Button from '@mui/material/Button';

import cssModule from './ContactForm.module.css'


export default class ContactForm extends Component {
	state = {
		name: '',
		number: ''
	}
	handleChange = (e) => {
		// console.log(e)
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	onSubmitForm = (e) => {
		e.preventDefault()
		const contact = {
			id: nanoid(5),
			...this.state,
		}
		this.props.addContact(contact)
		this.setState({
			name: '',
			number: ''
		})
	}

  render() {
	return (
		<form className={cssModule.form} onSubmit={this.onSubmitForm} action="">
			<TextField type='text' onChange={this.handleChange}
				pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
				value={this.state.name}
				name='name' id="filled-basic" label="Name" variant="filled" />
			<TextField type='tel' onChange={this.handleChange}
				pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
				value={this.state.number}
				name='number' id="filled-basic" label="Number" variant="filled" />
			
			<Button type="submit" variant="contained">Add contact</Button>
		</form>
	)
  }
}
