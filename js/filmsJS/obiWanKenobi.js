// sign out

const signOutButton = document.getElementById('sign-out-btn');

signOutButton.addEventListener('click', (e) => {
	e.preventDefault();
	window.location.href = '../../index.html'; // reemplaza "ejemplo.com" con la URL de tu página de inicio
});
