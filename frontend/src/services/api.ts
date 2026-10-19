import axios, { type AxiosError, type AxiosInstance}   from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

const api: AxiosInstance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Intercepteur de réponse : gestion centralisée des erreurs
api.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
        if (error.response) {
            const status = error.response.status;

            switch (status) {
                case 400:
                    console.error('Requête invalide');
                    break;
                case 404:
                    console.error('Ressource non trouvée');
                    break;
                case 500:
                    console.error('Erreur serveur interne');
                    break;
                default:
                    console.error(`Erreur ${status}`);
            }
        } else if (error.request) {
            console.error('Aucune réponse du serveur (backend down ou CORS ?)');
        } else {
            console.error('Erreur lors de la configuration de la requête', error.message);
        }

        return Promise.reject(error);
    }
);

export default api;