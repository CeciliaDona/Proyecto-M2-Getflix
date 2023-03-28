const form = document.querySelector('#form');
const campo_email = document.querySelector('#User-email');
const input_phone = document.querySelector('#User-phone');
const input_name = document.querySelector('#User-name');
const alert_name = document.querySelector('#alert-name');
const alert_email = document.querySelector('#alert-email');
const alert_success = document.querySelector('#alert-success');
const alert_phone = document.querySelector('#alert-phone');

const regUsername = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUseremail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
const regUserphone = /^\d+$/gi;

const msjSuccess = () => {
	alert_success.textContent = 'The form has been sent successfully';
	alert_success.classList.remove('d-none');
}
const errorMsj = (errors) => {
	errors.forEach((item) => {
		item.tipo.classList.remove('d-none');
		item.tipo.textContent = item.msg;
	});
}

form.addEventListener('submit', (e) => {
	e.preventDefault();
	alert_success.classList.add('d-none');

	const errors = [];
	if (!regUsername.test(input_name.value) || !input_name.value.trim()) {
		input_name.classList.add('is-invalid');
		errors.push({
			tipo: alert_name,
			msg: 'Invalid characters, only letters.',
		});
	} else {
		alert_name.classList.add('d-none');
		input_name.classList.add('is-valid');
		input_name.classList.remove('is-invalid');
	}
	if (!regUseremail.test(campo_email.value) || !campo_email.value.trim()) {
		campo_email.classList.add('is-invalid');
		errors.push({
			tipo: alert_email,
			msg: 'Invalid email.',
		});
	} else {
		alert_email.classList.add('d-none');
		campo_email.classList.add('is-valid');
		campo_email.classList.remove('is-invalid');
	}
    if (!regUserphone.test(input_phone.value) || !input_phone.value.trim()) {
		input_phone.classList.add('is-invalid');
		errors.push({
			tipo: alert_phone,
			msg: 'Invalid phone number, only numbers.',
		});
	} else {
		alert_phone.classList.add('d-none');
		input_phone.classList.add('is-valid');
		input_phone.classList.remove('is-invalid');
	}
	if (errors.length !== 0) {
		errorMsj(errors);
		return;
	}
	msjSuccess();
});