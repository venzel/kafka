#!/bin/bash

mongo -- "payment" <<EOF
    var database = 'payment';
    var user = 'payment';
    var password = 'payment';
    db.getSiblingDB(database);
    db.createUser({user: user, pwd: password, roles: [{ role: 'readWrite', db: database }]});
EOF