'use client';
import styles from './page.module.css';

import { useState } from 'react';
import { EduForm } from '../components/EduForm';
import { ExperienceForm } from '../components/ExperienceForm';
import { UserForm } from '../components/UserForm';
import { useMultistepForm } from '../components/useMultistepForm';

const INITIAL_DATA = {
	name: '',
	email: '',
	phone: '',
	address: '',
	hobbies: '',
	image: '',
	// .........
	degree: '',
	studyField: '',
	institution: '',
	graduationYear: '',
	// .........
	company: '',
	position: '',
	employmentDuration: '',
	description: '',
};

export default function Home() {
	const [data, setData] = useState(INITIAL_DATA);
	function updateFields(fields) {
		setData((prev) => {
			return { ...prev, ...fields };
		});
	}
	const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
		useMultistepForm([
			<UserForm key='user' {...data} updateFields={updateFields} />,
			<EduForm key='account' {...data} updateFields={updateFields} />,
			<ExperienceForm key='address' {...data} updateFields={updateFields} />,
		]);

	function onSubmit(e) {
		e.preventDefault();
		if (!isLastStep) return next();
		console.log(data);
	}

	return (
		<main className={styles.main}>
			<form onSubmit={onSubmit}>
				<div style={{ position: 'absolute', top: '.5rem', right: '.5rem' }}>
					{currentStepIndex + 1} / {steps.length}
				</div>
				{step}
				<div>
					{!isFirstStep && (
						<button type='button' onClick={back}>
							Back
						</button>
					)}
					<button type='submit'>{isLastStep ? 'Finish' : 'Next'}</button>
				</div>
			</form>
		</main>
	);
}
