const passwordInputReg = document.getElementById('User-Password3');
const repeatPasswordInput = document.getElementById('User-Password4');
const mensaje = document.getElementById('mensaje-para-fortalecer-pass');
// Creamos un array
const users = [
	{
		email: 'admin@admin.com',
		password: 'admin',
		rol: 'admin',
	},
];

const form = document.getElementById('form2');
let pass = '';

passwordInputReg.addEventListener('keydown', (e) => {
	pass += e.key;
	if (pass.length > 2) {
		mensaje.classList.remove('d-none');
	}
	if (pass.length < 4) {
		mensaje.textContent = 'muy debil';
		mensaje.classList.replace('text-warning', 'text-danger');
	} else {
		if (pass.length > 4) {
			mensaje.textContent = 'fuerte';
			mensaje.classList.replace('text-danger', 'text-info');
		}
	}
});
form.addEventListener('submit', (e) => {
	e.preventDefault();

	const nameInput = document.getElementById('User-name1');
	const usernameInput = document.getElementById('User-name2');
	const emailInput = document.getElementById('User-email-1');
	const passwordInput = document.getElementById('User-Password3');
	const repeatPasswordInput = document.getElementById('User-Password4');

	const nameRegex = /^[a-zA-Z\s]*$/;
	const usernameRegex = /^[a-zA-Z0-9_]*$/;
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

	if (!nameRegex.test(nameInput.value)) {
		const alertName = document.getElementById('alert-name1');
		alertName.classList.remove('d-none');
		alertName.textContent = 'Please enter a valid name';
	} else {
		const alertName = document.getElementById('alert-name1');
		alertName.classList.add('d-none');
	}

	if (!usernameRegex.test(usernameInput.value)) {
		const alertUsername = document.getElementById('alert-name2');
		alertUsername.classList.remove('d-none');
		alertUsername.textContent = 'Please enter a valid username';
	} else {
		const alertUsername = document.getElementById('alert-name2');
		alertUsername.classList.add('d-none');
	}

	if (!emailRegex.test(emailInput.value)) {
		const alertEmail = document.getElementById('alert-email-1');
		alertEmail.classList.remove('d-none');
		alertEmail.textContent = 'Please enter a valid email address';
	} else {
		const alertEmail = document.getElementById('alert-email-1');
		alertEmail.classList.add('d-none');
	}

	if (!passwordRegex.test(passwordInput.value)) {
		const alertPassword = document.getElementById('alert-Password3');
		alertPassword.classList.remove('d-none');
		alertPassword.textContent =
			'Please enter a valid password (minimum 8 characters, at least one uppercase letter, one lowercase letter, and one number)';
	} else {
		const alertPassword = document.getElementById('alert-Password3');
		alertPassword.classList.add('d-none');
	}

	if (!passwordRegex.test(passwordInput.value)) {
		const alertPassword = document.getElementById('alert-Password3');
		alertPassword.classList.remove('d-none');
		alertPassword.textContent =
			'Please enter a valid password (minimum 8 characters, at least one uppercase letter, one lowercase letter, and one number)';
	} else {
		const alertPassword = document.getElementById('alert-Password3');
		alertPassword.classList.add('d-none');
	}

	if (passwordInput.value !== repeatPasswordInput.value) {
		const alertRepeatPassword = document.getElementById('alert-Password4');
		alertRepeatPassword.classList.remove('d-none');
		alertRepeatPassword.textContent = 'Passwords do not match';
	} else {
		const alertRepeatPassword = document.getElementById('alert-Password4');
		alertRepeatPassword.classList.add('d-none');
	}
	if (
		nameRegex.test(nameInput.value) &&
		usernameRegex.test(usernameInput.value) &&
		emailRegex.test(emailInput.value) &&
		passwordRegex.test(passwordInput.value) &&
		passwordInput.value === repeatPasswordInput.value
	) {
		// Creamos un objeto con los datos del usuario
		const user = {
			name: nameInput.value,
			username: usernameInput.value,
			email: emailInput.value,
			password: passwordInput.value,
			rol: 'usuario',
		};

		users.push(user);

		const alertSuccess = document.getElementById('alert-success');
		alertSuccess.classList.remove('d-none');
		alertSuccess.textContent = 'User registered successfully!';
		setTimeout(() => {
			alertSuccess.textContent = '';
			alertSuccess.classList.add('d-none');
		}, 5000);
		form.reset();
	}
});

//login
const emailInput = document.getElementById('User-email3');
const passwordInput = document.getElementById('User-Password2');
const signInButton = document.querySelector('.btn-login');

signInButton.addEventListener('click', (e) => {
	e.preventDefault();

	const email = emailInput.value;
	const password = passwordInput.value;

	let isValidUser = false;
	const user = users.find((user) => user.email === email);

	if (user && user.password === password) {
		isValidUser = true;
	}

	if (isValidUser) {
		if (user.rol === 'admin') {
			window.location.href = './admin1.html';
		} else {
			window.location.href = './user-home.html';
		}
	} else {
		const alertEmail = document.getElementById('alert-email3');
		alertEmail.innerText = user
			? 'Your password is incorrect'
			: 'We cannot find an account with that email address';
		alertEmail.classList.remove('d-none');
		const alertPassword = document.getElementById('alert-Password2');
		alertPassword.innerText = '';
		alertPassword.classList.add('d-none');
		// Limpia las alertas después de 5 segundos
		setTimeout(() => {
			alertEmail.innerText = '';
			alertEmail.classList.add('d-none');
		}, 5000);
	}
});
