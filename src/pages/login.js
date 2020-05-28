import React, {useState} from "react";
import {navigate} from "gatsby";
import {useAuth} from "../components/Firebase";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Login = () => {
    const [formValues, setFormValues] = useState({email: "", password: ""});
    const {firebase} = useAuth();

    const handleSubmit = e => {
        e.preventDefault();
        const {email, password} = formValues;
        firebase.login({email, password})
            .then(() => navigate(('/')))
            .catch(() => alert("user name or password are incorrect"))
    };

    const handleInputChange = e => {
        e.persist();

        setFormValues(currentValues => ({
            ...currentValues,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <Layout>
            <form onSubmit={handleSubmit}>
                <input
                    value={formValues.email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="email"
                />
                <input
                    value={formValues.password}
                    name="password"
                    onChange={handleInputChange}
                    type="password"
                    placeholder="password"
                />
                <button type="submit">Login</button>
            </form>
        </Layout>
    );
};

export default Login;
