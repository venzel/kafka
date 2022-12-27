db = db.getSiblingDB('payment');

db.createUser({
    user: 'payment',
    pwd: 'payment',
    roles: [{ role: 'readWrite', db: 'payment' }],
});

db.payment.insertMany([
    {
        description: 'Payment 1',
        value: 10,
    },
    {
        description: 'Payment 2',
        value: 15,
    },
    {
        description: 'Payment 3',
        value: 30,
    },
]);
