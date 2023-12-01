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
			<label>Highest Degree</label>
			<input
				autoFocus
				required
				type='text'
				value={degree}
				onChange={(e) => updateFields({ degree: e.target.value })}
			/>
			<label>Field of Study</label>
			<input
				autoFocus
				required
				type='text'
				value={studyField}
				onChange={(e) => updateFields({ studyField: e.target.value })}
			/>
			<label>Institution Name</label>
			<input
				autoFocus
				required
				type='text'
				value={institution}
				onChange={(e) => updateFields({ institution: e.target.value })}
			/>
			<label>Graduation Year</label>
			<input
				autoFocus
				required
				type='number'
				value={graduationYear}
				onChange={(e) => updateFields({ graduationYear: e.target.value })}
			/>
		</FormWrapper>
	);
}
