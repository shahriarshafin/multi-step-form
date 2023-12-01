import { FormWrapper } from './FormWrapper';

export function ExperienceForm({
	company,
	position,
	employmentDuration,
	description,
	updateFields,
}) {
	return (
		<FormWrapper>
			<div>
				<ol className='stepper'>
					<li></li>
					<li></li>
					<li className='active'></li>
				</ol>
				<div className='step-title'>
					<span>Personal Information</span>
					<span>Education Background</span>
					<span>Work Experirence</span>
				</div>
			</div>

			<label className='form-label'>Company name</label>
			<input
				className='form-control'
				autoFocus
				type='text'
				value={company}
				placeholder='Google'
				onChange={(e) => updateFields({ company: e.target.value })}
			/>
			<label className='form-label'>Position Held</label>
			<input
				className='form-control'
				type='text'
				value={position}
				placeholder='Software Engineer'
				onChange={(e) => updateFields({ position: e.target.value })}
			/>
			<label className='form-label'>Employment Duration</label>
			<input
				className='form-control'
				type='number'
				value={employmentDuration}
				placeholder='2'
				onChange={(e) => updateFields({ employmentDuration: e.target.value })}
			/>
			<label className='form-label'>Description</label>
			<textarea
				className='form-control'
				value={description}
				placeholder='Description'
				onChange={(e) => updateFields({ description: e.target.value })}
				rows='4'
				cols='50'
				maxLength='200'
			></textarea>
		</FormWrapper>
	);
}
