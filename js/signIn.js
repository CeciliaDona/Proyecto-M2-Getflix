// const form = document.querySelector('#form');
// const campo_email = document.querySelector('#User-email');
// const campo_Password = document.querySelector('#User-Password');
// const campo_email2 =document.querySelector('#User-email2');
// const alert_email = document.querySelector('#alert-email');
// const alert_Password = document.querySelector('#alert-Password');
// const alert_email2 =document.querySelector('#alert-email2')
// const alert_success = document.querySelector('#alert-success');
// const regUseremail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
// const regUserPassword = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
// const regUseremail2 = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

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
    
//     if (!regUserPassword.test(campo_Password.value) || !campo_Password.value.trim()) {
// 		campo_Password.classList.add('is-invalid');
// 		errores.push({
// 			tipo: alert_Password,
//             msg: 'Invalid Password.' ,
// 		});
// 	} else {
// 		alert_Password.classList.add('d-none');
// 		campo_Password.classList.add('is-valid');
// 		campo_Password.classList.remove('is-invalid');
// 	}
// 	if (!regUseremail2.test(campo_email2.value) || !campo_email2.value.trim()) {
// 		campo_email2.classList.add('is-invalid');
// 		errores.push({
// 			tipo: alert_email2,
// 			msg: 'Invalid email.',
// 		});
// 	} else {
// 		alert_email2.classList.add('d-none');
// 		campo_email2.classList.add('is-valid');
// 		campo_email2.classList.remove('is-invalid');
// 	}
     
// 	if (errores.length !== 0) {
// 		pintarMensajeError(errores);
// 		return;
// 	}
// 	mensajeExito();
// });

/////////////////////////////////////////////////////////////////////////////////////////////////////////////

//REGISTER
const btnRegister =document.querySelector("btn-register");
const emailRegister = document.querySelector('register-email');
const passwordRegister =document.querySelector('register-password');
const passwordRegister2 = document.querySelector('register-password-2');


/////////////////////////////////////////////////////////////////////////////////////////////////////////////



//LOGIN ADMIN
const campusEmailAdmin = document.querySelector(".user-email-admin").value;
const campusPasswordAdmin = document.querySelector(".user-password-admin").value;
const btnLogin = document.querySelector(".btn-login");

const emailAdmin = "admin@gmail.com";
const passwordAdmin = "admin";
btnLogin.addEventListener("click", loginAdmin);

const loginAdmin = () => {
	if (campusEmailAdmin === emailAdmin && campusPasswordAdmin === passwordAdmin) {
		console.log("Iniciaste sesión")
	} else {
		console.log("Datos incorrectos")
	};
}










