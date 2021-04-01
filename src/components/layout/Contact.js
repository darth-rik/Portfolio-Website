import React from "react";

import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const Contact = ({ contact }) => {
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

				<form className='form'>
					<input
						className='form__input'
						placeholder='Name'
						required
						type='text'
					/>
					<input
						className='form__input'
						placeholder='Email'
						required
						type='email'
					/>
					<textarea
						className='form__message'
						placeholder='Message..'
						required
						rows='5'
					></textarea>
					<button className='form__btn btn btn--black'>Send Message</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
