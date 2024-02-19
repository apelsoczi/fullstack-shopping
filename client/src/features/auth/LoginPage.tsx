import { logout, setToken } from "./authSlice";
import { LoginCredentials, usePostLoginMutation } from "./authEndpoints";
import { store } from "../../app/store";
import { useNavigate } from "react-router-dom";
import { Path } from "../../app/AppRoutes";

export default function LoginPage() {
    const [postLogin, result] = usePostLoginMutation();
    const navigate = useNavigate();

    const doLogin = async (credentials: LoginCredentials) => {
        try {
            const response = await postLogin(credentials).unwrap();
            store.dispatch(setToken(response.token))
            navigate(Path.INDEX, { replace: true })
        } catch (error) {
            // store.dispatch(authSlice.actions.loginError("unknown error occurred, unable to derive T"));
        }
    };

    function handleLogin() {
        doLogin({ username: "apelsoczi", password: "Password123!" })
    }

    function handleLogout() {
        store.dispatch(logout())
    }

    return (
        <>
            <button onClick={handleLogin}>LOGIN</button>
            <button onClick={handleLogout}>LOGOUT</button>
        </>
    )
}