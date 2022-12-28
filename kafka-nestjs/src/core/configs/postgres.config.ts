const { env } = process;

export default () => ({
    POSTGRES_HOST: env.POSTGRES_HOST || 'localhost',
    POSTGRES_PORT: env.POSTGRES_PORT || parseInt(env.POSTGRES_PORT, 10) || 5432,
    POSTGRES_DB_NAME: env.POSTGRES_DB_NAME || 'payment',
    POSTGRES_USER: env.POSTGRES_USER || 'payment',
    POSTGRES_PASSWORD: env.POSTGRES_PASSWORD || 'payment',
});
