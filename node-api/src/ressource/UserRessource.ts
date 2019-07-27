import {User} from '../entity/User';

class UserRessource {

    constructor(user: User) {
        return UserRessource.toArray(user);
    }

    static collection(users: User[]) {
        return users.map((user: User) => {
            return {
                'id': user.id,
                'name': user.name,
                'email_verified_at': user.email_verified_at,
                'email': user.email,
                'remember_token': user.remember_token,
                'created_at': user.created_at,
            };
        });
    }

    static toArray(user: User) {
        return {
            'id': user.id,
            'name': user.name,
            'email_verified_at': user.email_verified_at,
            'email': user.email,
            'remember_token': user.remember_token,
            'created_at': user.created_at,
        };
    }
}

export default UserRessource;
