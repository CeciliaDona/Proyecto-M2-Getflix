// Creamos un array
const users = [];

const form = document.getElementById('form2');
const modal = document.querySelector(".modal");

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
		};

		// Agregamos el objeto al array de usuarios
		users.push(user);
		//modal.classList.add("d-none");

		// Mostramos un mensaje de confirmación al usuario
		const alertSuccess = document.getElementById('alert-success');
		alertSuccess.classList.remove('d-none');
		alertSuccess.textContent = 'User registered successfully!';

		// Limpiamos los campos del formulario
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

	// Validar si el usuario está registrado en el array users
	const user = users.find(
		(user) => user.email === email && user.password === password
	);

	if (user) {
		window.location.href = './user-home.html';
	} else {
		const alertEmail = document.getElementById('alert-email3');
		alertEmail.innerText = 'We cannot find an account with that email address';
		alertEmail.classList.remove('d-none');
		const alertPassword = document.getElementById('alert-Password2');
		alertPassword.innerText = 'Your password is incorrect';
		alertPassword.classList.remove('d-none');
	}
});
