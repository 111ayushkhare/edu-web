const express = require('express');
const app = express();
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const path = require('path');

const http = require('http');
const url = require('url');
const fs = require('fs');

console.log(__dirname);

let server = http.createServer(function(request ,response) {
    let path = url.parse(request.url).pathname;
    switch (path) {
        case '/home.html':
            fs.readFile(__dirname + '/frontend' + path, function(error, data) {
                if (error) {
                    response.writeHead(404);
                    response.write(error);
                    response.end();
                } else {
                    response.writeHead(200, {
                        'Content-Type': 'text/html'
                    });
                    response.write(data);
                    response.end();
                }
            });
            break;
        default:
            response.writeHead(404);  
            response.write("opps this doesn't exist - 404");  
            response.end();
            break;
    }
});

server.listen(3005);

const publicDir = path.join(__dirname,'frontend');
const knex = require('knex');

const postgres = knex({
    client: 'pg',
    connection: {
      host : '127.0.0.1',
      user : 'postgres',
      password : '',
      database : 'face_recognition_brain'
    }
});

// postgres.select('*').from('users1').then(data => {
//     console.log(data);
// });

console.log('DirAbove', publicDir);

app.use(express.json());
app.use(cors());
app.use(express.static(publicDir));

// const database = {
//     users: [
//         {
//             id: '123',
//             name: 'John',
//             email: 'john@gmail.com',
//             password: 'cookies',
//             entries: 0,
//             joined: new Date()
//         },
//         {
//             id: '456',
//             name: 'Johnny',
//             email: 'johnny@gmail.com',
//             password: 'cooky',
//             entries: 0,
//             joined: new Date()
//         }
//     ],
//     login: [
//         {
//             id: '987',
//             hash: '',
//             email: 'john@gmail.com',
//         }
//     ]
// };

// app.get('/', (req, res) => {
//     res.send(database.users);
// });

// app.listen(3005, () => {
//     console.log('Working fine at port 3005');
// });

// app.post('/login', (req, res) => {
//     bcrypt.compare("apple", '$2a$10$ABshpF0Tlq1X1TGyEnWqgOrWIq8S.Z4CTmsSUn3.ZW0q3y3lk7CFy', function(err, res) {
//         console.log('first guess', res);
//     });
//     bcrypt.compare("veggies", '$2a$10$ABshpF0Tlq1X1TGyEnWqgOrWIq8S.Z4CTmsSUn3.ZW0q3y3lk7CFy', function(err, res) {
//         console.log('second guess', res);
//     });
//     if (req.body.email === database.users[0].email && req.body.password === database.users[0].password) {
//         res.json('success');
//     } else {
//         res.status(400).json('error logging in');
//     }
// });

// app.post('/signup', (req, res) => {
//     const { email, name, password } = req.body;
//     bcrypt.hash(password, null, null, function(err, hash) {
//         console.log(hash);
//     });
//     database.users.push({
//         id: '125',
//         name: name,
//         email: email,
//         password: password,
//         entries: 0,
//         joined: new Date(),
//     });
//     res.json(database.users[database.users.length-1]);
// });
