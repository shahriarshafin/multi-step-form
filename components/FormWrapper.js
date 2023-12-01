export function FormWrapper({ children }) {
	return (
		<>
			<h2 style={{ textAlign: 'center', margin: 0, marginBottom: '2rem' }}>
				Registration Form
			</h2>
			<div
				style={{
					display: 'grid',
					gap: '1rem .5rem',
					justifyContent: 'flex-start',
					gridTemplateColumns: 'auto minmax(auto, 400px)',
				}}
			>
				{children}
			</div>
		</>
	);
}
