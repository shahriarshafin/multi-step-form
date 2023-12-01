import { useState } from 'react';
import { FormWrapper } from './FormWrapper';
export function UserForm({
	name,
	email,
	phone,
	address,
	hobbies,
	image,
	updateFields,
}) {
	const [hobbiesList, setHobbiesList] = useState(hobbies);
	const addHobbyField = (e) => {
		e.preventDefault();
		if (hobbiesList.length < 5) {
			setHobbiesList([...hobbiesList, '']);
		}
	};

	const updateHobby = (index, value) => {
		const newHobbies = [...hobbiesList];
		newHobbies[index] = value;
		setHobbiesList(newHobbies);
		updateFields({ hobbies: newHobbies });
	};

	return (
		<FormWrapper>
			<label className='form-label'>Name</label>
			<input
				className='form-control'
				autoFocus
				required
				type='text'
				value={name}
				placeholder='Jhon Doe'
				onChange={(e) => updateFields({ name: e.target.value })}
			/>
			<label className='form-label'>Email</label>
			<input
				className='form-control'
				autoFocus
				required
				type='email'
				value={email}
				placeholder='yourmail@domain.com'
				onChange={(e) => updateFields({ email: e.target.value })}
			/>
			<label className='form-label'>Phone Number</label>
			<input
				className='form-control'
				type='tel'
				required
				value={phone}
				placeholder='123-456-7890'
				onChange={(e) => updateFields({ phone: e.target.value })}
			/>
			<label className='form-label'>Address</label>
			<input
				className='form-control'
				autoFocus
				type='text'
				value={address}
				placeholder='1234 Main St'
				onChange={(e) => updateFields({ address: e.target.value })}
			/>
			<label className='form-label'>Hobbies ( max 5 )</label>
			<button onClick={addHobbyField}>add more field</button>
			{hobbiesList.map((hobby, index) => (
				<input
					key={index}
					className='form-control'
					autoFocus
					type='text'
					value={hobby}
					placeholder='Reading, Writing, Coding'
					onChange={(e) => updateHobby(index, e.target.value)}
				/>
			))}

			<label className='form-label'>Image</label>

			<input
				className='form-control'
				autoFocus
				type='file'
				accept='image/*'
				onChange={(e) => {
					updateFields({ image: e.target.files[0].name });
				}}
			></input>
		</FormWrapper>
	);
}
