const init = async () => {
	let rustApp = null;

	try {
		rustApp = await import('../pkg');
	} catch (err) {
		return console.error(err);
	}

	console.log('rustApp: ', rustApp);

	const fileReader = new FileReader();
	const input = document.getElementById('upload');
	fileReader.onloadend = () => {
		let base64 = fileReader.result.replace(
			/^data:image\/(png|jpeg|jpg);base64,/,
			''
		);
		let imageDataURL = rustApp.grayscale(base64);
		document.getElementById('new-img').setAttribute('src', imageDataURL);
	};

	input.addEventListener('change', () => {
		fileReader.readAsDataURL(input.files[0]);
	});
};

init();
