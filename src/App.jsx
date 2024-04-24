import React, { useState } from 'react';

const App = () => {
	const [firstname, setFirstname] = useState('');
	const [lastName, setLastName] = useState('');

	const [fullName, setFullname] = useState('');

	const handleFullName = (e) => {
		e.preventDefault();
		setFullname(`${firstname} ${lastName}`);
	};

	return (
		<>
			<div>
				<h1>Full Name Display</h1>
				<form onSubmit={handleFullName}>
					<div>
						<label htmlFor='firstname'>First Name:</label>
						<input
							type='text'
							name='firstname'
							id='firstname'
							value={firstname}
							onChange={(e) => setFirstname(e.target.value)}
							required
						/>
					</div>
					<div>
						<label htmlFor='lastname'>Last Name:</label>
						<input
							type='text'
							name='lastname'
							id='lastname'
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
							required
						/>
					</div>
					<button type='submit'>Submit</button>
				</form>
				<div className='fullName'>
					{fullName !== '' && `Full Name: ${fullName}`}
				</div>
			</div>
		</>
	);
};

export default App;
