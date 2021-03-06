import {Request, Response} from 'express';
import * as jwt from 'jsonwebtoken';
import {getRepository} from 'typeorm';
import {validate} from 'class-validator';

import {User} from '../entity/User';
import config from '../config/config';
import UserRessource from '../ressource/UserRessource';

class AuthController {
    static login = async (req: Request, res: Response) => {
        //Check if username and password are set
        let {email, password} = req.body;
        if (!(email && password)) {
            res.status(400).send();
        }

        //Get user from database
        const userRepository = getRepository(User);
        let user: User;
        try {
            user = await userRepository.findOneOrFail({where: {email}});
        } catch (error) {
            res.status(401).send({
                error: error
            });
        }

        //Check if encrypted password match
        if (!user.checkIfUnencryptedPasswordIsValid(password)) {
            res.status(500).send();
            return;
        }

        //Sing JWT, valid for 1 hour
        const token = jwt.sign(
            {userId: user.id, email: user.email},
            config.jwtSecret,
            {expiresIn: '1h'}
        );

        //Send the jwt in the response
        res.send({
            'data': {
                'user': UserRessource.toArray(user),
                'token': token
            }
        });
    };

    static changePassword = async (req: Request, res: Response) => {
        //Get ID from JWT
        const id = res.locals.jwtPayload.userId;

        //Get parameters from the body
        const {oldPassword, newPassword} = req.body;
        if (!(oldPassword && newPassword)) {
            res.status(400).send();
        }

        //Get user from the database
        const userRepository = getRepository(User);
        let user: User;
        try {
            user = await userRepository.findOneOrFail(id);
        } catch (id) {
            res.status(401).send();
        }

        //Check if old password matchs
        if (!user.checkIfUnencryptedPasswordIsValid(oldPassword)) {
            res.status(401).send();
            return;
        }

        //Validate de model (password lenght)
        user.password = newPassword;
        const errors = await validate(user);
        if (errors.length > 0) {
            res.status(400).send(errors);
            return;
        }
        //Hash the new password and save
        user.hashPassword();
        userRepository.save(user);

        res.send({
            data: UserRessource.toArray(user),
            message: 'Password changed.'
        });
    };

    static getUser = async (req: Request, res: Response) => {
        const id = res.locals.jwtPayload.userId;
        const userRepository = getRepository(User);
        let user: User;
        try {
            user = await userRepository.findOneOrFail(id);
        } catch (id) {
            res.status(401).send();
        }

        res.send({
            data: UserRessource.toArray(user),
        });
    };
}

export default AuthController;
