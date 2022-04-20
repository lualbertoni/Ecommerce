import axios from 'axios';

const postUserRegister = async (username, password) => {
    axios
        .post(process.env.REACT_APP_API_URL + `/api/auth/register`, {
            username: username,
            password: password,
            Headers: {
                "Content-Type": "application/json",
                cors: "cors",
            },
        })
        .then((res) => {
            if (res.status === 201) {
                alert("Usuário criado com sucesso!");
            }
        })
        .catch((error) => {
            alert("Erro ao criar usuário!");
            console.log(error);
        });
};

export default postUserRegister;