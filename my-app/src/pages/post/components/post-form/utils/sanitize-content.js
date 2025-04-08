export const sanitizeContent = (content) =>
	content
		.replaceAll(/ +/, ' ')
		.replaceAll('<div><br></div>', '\n')
		.replaceAll('<div>', '\n')
		.replaceAll('<br>', '\n')
		.replaceAll('&nbsp;', '')
		.replaceAll('</div>', '');
