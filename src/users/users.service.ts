import { Injectable } from '@nestjs/common';

export type User ={
    id: number;
    name: string;
    username: string;
    password: string
}
@Injectable()
export class UsersService {
    private readonly users: User[]=[
        {
            id:1,
            name: 'lina',
            username:'lina-reslan',
            password:'123456'
        },
        {
            id:2,
            name: 'hosam',
            username:'lina-hosam',
            password:'sol123'
        },
    ];
    async findOne(username:string): Promise<User | undefined>{
        return  this.users.find(user => user.username === username);

    }
}
