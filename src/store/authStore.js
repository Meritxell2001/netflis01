import { defineStore } from 'pinia'

export const authStore = defineStore('auth', {
    state: () => {
        const auth = localStorage.getItem('auth');

        if (auth)
            return JSON.parse(auth);

        return {
            email: null,
            access_token: null,
            isAutenticated: false,
        }
    },
    actions: {
        async login(email, password) {
            
            const response = await fetch('https://apigerard.herokuapp.com/api/login/',
                {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({ email, password })
                }
            );

            console.log(response);

            const data = await response.json();

            if(data.access_token) {
                this.email = email;
                this.access_token = data.access_token;
                this.isAutenticated = true;
            }
        },
        async registrer(name, lastName, email, password) {            
            const response = await fetch('https://apigerard.herokuapp.com/api/registrer/',
                {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({ name, lastName, email, password })
                }
            );

            const data = await response.json();

            if(data.access_token) {
                this.email = email;
                this.access_token = data.access_token;
                this.isAutenticated = true;
            }
        }
    }
})