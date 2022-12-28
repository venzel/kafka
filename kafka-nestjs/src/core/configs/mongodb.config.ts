const { env } = process;

export default {
    MONGODB_HOST: env.MONGODB_HOST || 'localhost',
    MONGODB_PORT: parseInt(env.MONGODB_PORT, 10) || 27018,
    MONGODB_DB_NAME: env.MONGODB_DB_NAME || 'payment',
    MONGODB_USER: env.MONGODB_USER || 'payment',
    MONGODB_PASSWORD: env.MONGODB_PASSWORD || 'payment',
};
