const { env } = process;

export default {
    MONGODBB_HOST: env.MONGODBB_HOST || 'localhost',
    MONGODBB_PORT: parseInt(env.MONGODBB_PORT, 10) || 27018,
    MONGODBB_DB_NAME: env.MONGODBB_DB_NAME || 'payment',
    MONGODBB_USER: env.MONGODBB_USER || 'payment',
    MONGODBB_PASSWORD: env.MONGODBB_PASSWORD || 'payment',
};
