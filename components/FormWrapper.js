export function FormWrapper({ children }) {
	return (
		<div className='form-wrapper'>
			<h3 className='form-heading'>Registration Form</h3>
			<p className='form-description'>
				Please fill out this form with the required information
			</p>
			<div>{children}</div>
		</div>
	);
}
