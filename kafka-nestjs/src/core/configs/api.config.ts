const { env } = process;

const apiConfig = {
    environment: env.NODE_ENV || 'development',
    port: env.SERVER_PORT || 3000,
    email: env.EMAIL_ADMIN || 'eneas.eng@yahoo.com',
};

export const { environment, port, email } = apiConfig;
