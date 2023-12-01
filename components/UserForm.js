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
	return (
		<FormWrapper>
			<label>Name</label>
			<input
				autoFocus
				required
				type='text'
				value={name}
				onChange={(e) => updateFields({ name: e.target.value })}
			/>
			<label>Email</label>
			<input
				autoFocus
				required
				type='email'
				value={email}
				onChange={(e) => updateFields({ email: e.target.value })}
			/>
			<label>Phone Number</label>
			<input
				type='tel'
				required
				value={phone}
				onChange={(e) => updateFields({ phone: e.target.value })}
			/>
			<label>Address</label>
			<input
				autoFocus
				required
				type='text'
				value={address}
				onChange={(e) => updateFields({ address: e.target.value })}
			/>
			<label>Hobbies</label>
			<input
				autoFocus
				required
				type='text'
				value={hobbies}
				onChange={(e) => updateFields({ hobbies: e.target.value })}
			/>
			<label>Image</label>
			<input
				autoFocus
				required
				type='text'
				// accept='image/*'
				value={image}
				onChange={(e) => updateFields({ image: e.target.value })}
			/>
		</FormWrapper>
	);
}
