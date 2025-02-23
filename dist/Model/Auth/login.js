"use strict";
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('userForm');
    if (form) {
        form.addEventListener('submit', async (event) => {
            event.preventDefault();
            const formData = new FormData(form);
            const formDataEntries = Object.fromEntries(formData);
            const formDataJson = JSON.stringify(formDataEntries);
            try {
                const response = await fetch('http://localhost:8080/auth/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    credentials: "include",
                    body: formDataJson,
                    mode: 'cors'
                });
                if (response.ok) {
                    const result = await response.json();
                    console.log('Sucesso:', result);
                    alert('Login efetuado com sucesso!');
                    setTimeout(() => {
                        window.location.href = "../dist/View/Main/agendar/index.html";
                    }, 2000);
                }
                else {
                    console.error('Erro:', response.statusText);
                    alert('Erro ao efetuar login.');
                }
            }
            catch (error) {
                console.error('Erro:', error);
                alert('Erro ao conectar com o servidor.');
            }
        });
    }
    else {
        console.error('Formulário não encontrado');
    }
});
