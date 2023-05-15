import React from 'react'
import Button from '@mui/material/Button';
import cssModlue from './ContactList.module.css'

export default function ContactList({ contacts, deleteContacts }) {
	const defaultText = 'Not have a contacts'
	return contacts ? <ul className={cssModlue.list}>
		{  contacts.map((item) => {
			return <li className={cssModlue.item} key={item.id}>

				<p className="name">
					
					{item.name}
				</p>
				<p className="number">
					
					{item.number}
				</p>
				<Button onClick={() => deleteContacts(item.id)} variant="contained">DELETE</Button>
			</li>
		})}
	</ul> : defaultText
}
