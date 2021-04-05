import React, { useState } from "react";

import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ contact }) => {
	const state = {
		name: "",
		email: "",
		message: "",
	};
	const [value, setValue] = useState(state);

	const { name, email, message } = value;

	const onChange = (e) => {
		setValue({ ...value, [e.target.name]: e.target.value });
	};

	return (
		<section id='section-4' ref={contact} className='section-contact'>
			<div className='container'>
				<h2 className='heading__primary u-margin-bottom-medium'>
					Get in touch
				</h2>
				<div className='contact-details u-margin-bottom-medium'>
					<div className='contact-details__email'>
						<MdEmail />
						<p className=''>debanjitsengupta@yahoo.in</p>
					</div>

					<div className='contact-details__phone'>
						<FaPhoneAlt />
						<p className=''>+91 8697596886</p>
					</div>
				</div>

				<form
					className='form'
					action='https://getform.io/f/ac7fe556-bc24-45de-8f0a-25cde7aeb409'
					method='POST'
				>
					<input
						className='form__input'
						name='name'
						value={name}
						placeholder='Name'
						onChange={onChange}
						required
						type='text'
					/>
					<input
						className='form__input'
						name='email'
						value={email}
						placeholder='Email'
						onChange={onChange}
						required
						type='email'
					/>
					<textarea
						className='form__message'
						name='message'
						value={message}
						placeholder='Message..'
						onChange={onChange}
						required
						rows='5'
					></textarea>
					<button type='submit' className='form__btn btn btn--black'>
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
