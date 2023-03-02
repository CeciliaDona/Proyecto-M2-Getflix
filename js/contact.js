const form = document.querySelector('#form');
const campo_email = document.querySelector('#User-email');
const campo_phone = document.querySelector('#User-phone');
const campo_name = document.querySelector('#User-name');

const alert_name = document.querySelector('#alert-name');
const alert_email = document.querySelector('#alert-email');
const alert_success = document.querySelector('#alert-success');
const alert_phone = document.querySelector('#alert-phone');


const regUsername = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUseremail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
const regUserphone = /^\d+$/gi;


const mensajeExito = () => {
	alert_success.textContent = 'formulario enviado con exito';
	alert_success.classList.remove('d-none');
};


const pintarMensajeError = (errores) => {
	errores.forEach((item) => {
		item.tipo.classList.remove('d-none');
		item.tipo.textContent = item.msg;
	});
};

form.addEventListener('submit', (e) => {
	e.preventDefault();
	console.log('form enviado');
	alert_success.classList.add('d-none');

	const errores = [];

	if (!regUsername.test(campo_name.value) || !campo_name.value.trim()) {
		campo_name.classList.add('is-invalid');
		errores.push({
			tipo: alert_name,
			msg: 'formato no valido en el campo nombre, solo letras.',
		});
	} else {
		alert_name.classList.add('d-none');
		campo_name.classList.add('is-valid');
		campo_name.classList.remove('is-invalid');
	}

	if (!regUseremail.test(campo_email.value) || !campo_email.value.trim()) {
		campo_email.classList.add('is-invalid');
		errores.push({
			tipo: alert_email,
			msg: 'escriba un email valido.',
		});
	} else {
		alert_email.classList.add('d-none');
		campo_email.classList.add('is-valid');
		campo_email.classList.remove('is-invalid');
	}
    if (!regUserphone.test(campo_phone.value) || !campo_phone.value.trim()) {
		campo_phone.classList.add('is-invalid');
		errores.push({
			tipo: alert_phone,
			msg: 'formato no valido en el campo phone number, solo numeros.',
		});
	} else {
		alert_phone.classList.add('d-none');
		campo_phone.classList.add('is-valid');
		campo_phone.classList.remove('is-invalid');
	}
    

	if (errores.length !== 0) {
		pintarMensajeError(errores);
		return;
	}

	mensajeExito();
});



