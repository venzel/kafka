const { env } = process;

export default () => ({
    NODE_ENV: env.NODE_ENV || 'development',
    PORT_API: parseInt(process.env.PORT_API, 10) || 3000,
    EMAIL_ADMIN: env.EMAIL_ADMIN || 'eneas.eng@yahoo.com',
});