// const form = document.querySelector('#form');
// const campo_email = document.querySelector('#User-email');
// const campo_name2 = document.querySelector('#User-name2');
// const campo_name = document.querySelector('#User-name');
// const campo_Password = document.querySelector('#User-Password');
// const campo_Password3 = document.querySelector('#User-Password3');

// const alert_name = document.querySelector('#alert-name');
// const alert_email = document.querySelector('#alert-email');
// const alert_success = document.querySelector('#alert-success');
// const alert_name2 = document.querySelector('#alert-name2');
// const alert_Password = document.querySelector('#alert-Password');
// const alert_Password3 = document.querySelector('#alert-Password3');

// const regUsername = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
// const regUseremail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
// const regUsername2 = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
// const regUserPassword = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
// const regUserPassword3 =  /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;

// const mensajeExito = () => {
// 	alert_success.textContent = 'The form has been sent successfully';
// 	alert_success.classList.remove('d-none');
// };
// const pintarMensajeError = (errores) => {
// 	errores.forEach((item) => {
// 		item.tipo.classList.remove('d-none');
// 		item.tipo.textContent = item.msg;
// 	});
// };

// form.addEventListener('submit', (e) => {
// 	e.preventDefault();
// 	console.log('form enviado');
// 	alert_success.classList.add('d-none');

// 	const errores = [];

// 	if (!regUsername.test(campo_name.value) || !campo_name.value.trim()) {
// 		campo_name.classList.add('is-invalid');
// 		errores.push({
// 			tipo: alert_name,
// 			msg: 'Invalid characters,only letters.',
// 		});
// 	} else {
// 		alert_name.classList.add('d-none');
// 		campo_name.classList.add('is-valid');
// 		campo_name.classList.remove('is-invalid');
// 	}

// 	if (!regUseremail.test(campo_email.value) || !campo_email.value.trim()) {
// 		campo_email.classList.add('is-invalid');
// 		errores.push({
// 			tipo: alert_email,
// 			msg: 'Invalid email.',
// 		});
// 	} else {
// 		alert_email.classList.add('d-none');
// 		campo_email.classList.add('is-valid');
// 		campo_email.classList.remove('is-invalid');
// 	}
//     if (!regUsername2.test(campo_name2.value) || !campo_name2.value.trim()) {
// 		campo_name2.classList.add('is-invalid');
// 		errores.push({
// 			tipo: alert_name2,
// 			msg: 'Invalid characters,only letters.',
// 		});
// 	} else {
// 		alert_name2.classList.add('d-none');
// 		campo_name2.classList.add('is-valid');
// 		campo_name2.classList.remove('is-invalid');
// 	}

//     if (!regUserPassword.test(campo_Password.value) || !campo_Password.value.trim()) {
// 		campo_Password.classList.add('is-invalid');
// 		errores.push({
// 			tipo: alert_Password,
// 		});
// 	} else {
// 		alert_Password.classList.add('d-none');
// 		campo_Password.classList.add('is-valid');
// 		campo_Password.classList.remove('is-invalid');
// 	}
//     if (!regUserPassword3.test(campo_Password3.value) || !campo_Password3.value.trim()) {
// 		campo_Password3.classList.add('is-invalid');
// 		errores.push({
// 			tipo: alert_Password3,
// 			msg: 'Password must match.',
// 		});
// 	} else {
// 		alert_Password3.classList.add('d-none');
// 		campo_Password3.classList.add('is-valid');
// 		campo_Password3.classList.remove('is-invalid');
// 	}

// 	if (errores.length !== 0) {
// 		pintarMensajeError(errores);
// 		return;
// 	}

// 	mensajeExito();
// });