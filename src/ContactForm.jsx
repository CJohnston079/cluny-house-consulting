import "./ContactForm.css";

const ContactForm = function () {
	return (
		<form action="" method="POST">
			<div className="field">
				<label htmlFor="full-name" className="field__label">
					Full name
				</label>
				<input type="text" id="full-name" name="fullName" className="field__input" />
			</div>
			<div className="field">
				<label htmlFor="email" className="field__label">
					Email
				</label>
				<input type="email" id="email" name="email" className="field__input" />
			</div>
			<div className="field">
				<label htmlFor="message" className="field__label">
					Message
				</label>
				<textarea id="message" className="field__input"></textarea>
			</div>
		</form>
	);
};

export default ContactForm;
