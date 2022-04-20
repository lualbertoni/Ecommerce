import axios from "axios";

const postLogin = async (username, password) => {
    axios
        .post(process.env.REACT_APP_API_URL + `/api/auth/login`, {
            username: username,
            password: password,
            Headers: {
                "Content-Type": "application/json",
                cors: "cors",
            },
        })
        .then(() => {
            window.location.href = "/admin"
        })
        .catch((error) => {
            alert("Erro ao logar usuário!");
            console.log(error);
        });
}

export default postLogin;