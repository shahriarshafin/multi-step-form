import { FormWrapper } from './FormWrapper';

export function EduForm({
	degree,
	studyField,
	institution,
	graduationYear,
	updateFields,
}) {
	return (
		<FormWrapper>
			<div>
				<ol className='stepper'>
					<li></li>
					<li className='active'></li>
					<li></li>
				</ol>
				<div className='step-title'>
					<span>Personal Information</span>
					<span>Education Background</span>
					<span>Work Experirence</span>
				</div>
			</div>

			<label className='form-label'>Highest Degree</label>

			<select
				className='form-control'
				value={degree}
				onChange={(e) => updateFields({ degree: e.target.value })}
			>
				<option value='bsc'>BSC</option>
				<option value='msc'>MSC</option>
				<option value='ssc'>SSC</option>
			</select>

			<label className='form-label'>Field of Study</label>
			<input
				className='form-control'
				autoFocus
				type='text'
				value={studyField}
				placeholder='Computer Science, Physics, Chemistry'
				onChange={(e) => updateFields({ studyField: e.target.value })}
			/>
			<label className='form-label'>Institution Name</label>
			<input
				className='form-control'
				autoFocus
				type='text'
				value={institution}
				placeholder='University of California'
				onChange={(e) => updateFields({ institution: e.target.value })}
			/>
			<label className='form-label'>Graduation Year</label>
			<input
				className='form-control'
				autoFocus
				type='number'
				value={graduationYear}
				placeholder='2022'
				onChange={(e) => updateFields({ graduationYear: e.target.value })}
			/>
		</FormWrapper>
	);
}
