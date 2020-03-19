import path from 'path';
import fs from 'fs';

const p = path.join(
    path.dirname(process.mainModule.filename),
    'model',
    'data.json'
  );

  const getDataFromFile = cb => {
    fs.readFile(p, (err, fileContent) => {
        err ? cb([]) : cb(JSON.parse(fileContent));
    });
  };

class UserSignUp {

    constructor(){
        this.signupHandler = this.signupHandler.bind(this);
    }

    signupHandler(req, res, next) {

        const UserCredentials = {
            id: null,
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: req.body.password
        };

        getDataFromFile( User => {

            const findUser = User.find( user => user.email === UserCredentials.email);
                    emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        
            if(emailPattern.test(UserCredentials.email) == false) {
                return res.status(401).json({
                    message: 'Incorrect email format'
                })
            } 
            else
            {
                if(!findUser) {
                    UserCredentials.id = User.length + 1;

                    User.push(UserCredentials);

                        fs.writeFile(p, JSON.stringify(User), err => {
                            return res.status(201).json({
                                message: 'User signed up successfully'
                            })
                        });
                }
                else{
                    return res.status(401).json({
                        message: 'Email exists'
                    })
                }
            }
            
        })

    }
}

export default new UserSignUp();