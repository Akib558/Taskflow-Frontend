export const environment = {
    production: false,
    apiUrl: 'http://localhost:3000/api', // Your development API URL
    enableDebug: true,
    defaultLanguage: 'en',
    featureFlags: {
        enableTaskAttachments: true,
        enableExperimentalFeatures: false,
    },
    auth: {
        clientId: 'your-dev-client-id',
        authDomain: 'dev-auth.yourdomain.com',
    },
};
