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
			<label>Company name</label>
			<input
				autoFocus
				required
				type='text'
				value={company}
				onChange={(e) => updateFields({ company: e.target.value })}
			/>
			<label>Position Held</label>
			<input
				required
				type='text'
				value={position}
				onChange={(e) => updateFields({ position: e.target.value })}
			/>
			<label>Employment Duration</label>
			<input
				required
				type='number'
				value={employmentDuration}
				onChange={(e) => updateFields({ employmentDuration: e.target.value })}
			/>
			<label>Description</label>
			<input
				required
				type='text'
				value={description}
				onChange={(e) => updateFields({ description: e.target.value })}
			/>
		</FormWrapper>
	);
}
