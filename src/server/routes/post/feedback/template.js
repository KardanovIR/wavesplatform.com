export default (email, message) => `
	-- This is a generated email from Waves website contact form --

	From: ${email}

	Message:
	${message}
`;
