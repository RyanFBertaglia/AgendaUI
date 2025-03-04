document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('userForm') as HTMLFormElement | null;

    if (form) {
        form.addEventListener('submit', async (event) => {
            event.preventDefault();

            const formData: FormData = new FormData(form);
            const formDataEntries = Object.fromEntries(formData);
            const formDataJson = JSON.stringify(formDataEntries);

            try {
                const response = await fetch('http://localhost:8080/auth/register', {
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
                    alert('Cadastro efetuado com sucesso!');
                    window.location.href = '/View/Main/agendar/';
                } else {
                    console.error('Erro:', response.statusText);
                    alert('Erro ao efetuar o cadastro.');
                }
            } catch (error) {
                console.error('Erro:', error);
                alert('Erro ao conectar com o servidor.');
            }
        });
    } else {
        console.error('Formulário não encontrado');
    }
});
