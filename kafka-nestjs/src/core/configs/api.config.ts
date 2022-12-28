const { env } = process;

export default () => ({
    API_NAME: env.API_NAME || 'Payment',
    API_ENV: env.API_ENV || 'development',
    API_PORT: env.API_PORT ? parseInt(env.API_PORT, 10) : 3001,
    API_EMAIL_ADMIN: env.API_EMAIL_ADMIN || 'eneas.eng@yahoo.com',
});
