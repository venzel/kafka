const { env } = process;

export default () => ({
    PAYPAL_BASE_URL: env.PAYPAL_BASE_URL || null,
});
