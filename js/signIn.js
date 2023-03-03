// const form = document.querySelector('#form3');
// const campo_email3 = document.querySelector('#User-email3');
// const campo_Password2 = document.querySelector('#User-Password2');
// const campo_email2 =document.querySelector('#User-email2');
// const alert_email3 = document.querySelector('#alert-email3');
// const alert_Password2 = document.querySelector('#alert-Password2');
// const alert_email2 =document.querySelector('#alert-email2')
// const alert_success = document.querySelector('#alert-success');
// const regUseremail3 = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
// const regUserPassword2 = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
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

// form3.addEventListener('submit', (e) => {
// 	e.preventDefault();
// 	console.log('form enviado');
// 	alert_success.classList.add('d-none');

// 	const errores = [];
// 	if (!regUseremail3.test(campo_email3.value) || !campo_email3.value.trim()) {
// 		campo_email3.classList.add('is-invalid');
// 		errores.push({
// 			tipo: alert_email3,
// 			msg: 'Invalid email.',
// 		});
// 	} else {
// 		alert_email3.classList.add('d-none');
// 		campo_email3.classList.add('is-valid');
// 		campo_email3.classList.remove('is-invalid');
// 	}
    
//     if (!regUserPassword2.test(campo_Password2.value) || !campo_Password2.value.trim()) {
// 		campo_Password2.classList.add('is-invalid');
// 		errores.push({
// 			tipo: alert_Password2,
//             msg: 'Invalid Password.' ,
// 		});
// 	} else {
// 		alert_Password2.classList.add('d-none');
// 		campo_Password2.classList.add('is-valid');
// 		campo_Password2.classList.remove('is-invalid');
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


const loginAdmin = () => {
	if (campusEmailAdmin === emailAdmin && campusPasswordAdmin === passwordAdmin) {
		console.log("Iniciaste sesión")
	} else {
		console.log("Datos incorrectos")
	};
}

btnLogin.addEventListener("click", loginAdmin);








