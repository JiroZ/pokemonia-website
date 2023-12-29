import axios from "axios";

let protocol = 'https'
let host = 'web-s.pokemonia.net';
// let host = 'localhost'
let port = '8001'
let backEndUrl = `${protocol}://${host}:${port}`

class ApiService {
    static config = {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': '/',
            'Content-Type': 'application/json'
        },
    };

    static loginRoute(userName, password) {
        let body = {
            email: userName,
            password: password
        }
        return axios.post(`${backEndUrl}/login`, body, ApiService.config);
    }

    static registerRoute(email, password) {
        let body = {
            email: email,
            password: password
        }
        return axios.post(`${backEndUrl}/register`, body, ApiService.config);
    }

    static getUserDataRoute() {
        return axios.get(`${backEndUrl}/player`)
    }

    static getDonationRoute(product) {
        let body = {
            id: product.id,
            defaultPrice: product.defaultPrice
        }
        return axios.post(`${backEndUrl}/donation/request`, body, ApiService.config)
    }

    static getRecoveryRoute(email) {
        let body = {
            email: email
        }
        return axios.post(`${backEndUrl}/recovery`, body, ApiService.config)
    }

    static getResetPasswordRoute(password, resetToken) {
        let body = {
            token: resetToken,
            newPassword: password
        }
        return axios.post(`${backEndUrl}/reset/password`, body, ApiService.config)
    }

    static getDonationProductsRoute() {
        return axios.get(`${backEndUrl}/products`)
    }


    static getAccountVerificationRoute(verificationToken) {
        let body = {
            token: verificationToken
        }
        return axios.post(`${backEndUrl}/account-verification`, body, ApiService.config)
    }

    static getResendVerificationRoute(email) {
        const body = {
            email: email
        }

        return axios.post(`${backEndUrl}/resend-verification`, body, ApiService.config)
    }
}

export default ApiService
