export const environment = {
    production: false,
    apiUrl: 'http://localhost:5109/api', // Your development API URL
    enableDebug: true,
    defaultLanguage: 'en',
    featureFlags: {
        enableTaskAttachments: true,
        enableExperimentalFeatures: false
    },
    auth: {
        clientId: 'your-dev-client-id',
        authDomain: 'dev-auth.yourdomain.com'
    },
    authUrls: {
        login: '/auth/login'
    },
    taskUrls: {
        getAllTaskForUser: '/Task/GetAllTaskForUser'
    }
};
