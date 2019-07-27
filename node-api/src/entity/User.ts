import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    Unique,
    CreateDateColumn,
    UpdateDateColumn
} from "typeorm";
import {Length, IsNotEmpty} from "class-validator";
import * as bcrypt from "bcryptjs";

@Entity({name: "users"})
@Unique(["email"])
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Length(1, 20)
    name: string;

    @Column()
    @Length(1, 255)
    email: string;

    @Column({nullable: true})
    @Length(1, 255)
    email_verified_at: string;

    @Column()
    @Length(4, 100)
    password: string;

    @Column({nullable: true})
    @Length(1, 255)
    remember_token: string;

    @Column()
    created_at: Date;

    @Column()
    updated_at: Date;

    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8);
    }

    checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
        return bcrypt.compareSync(unencryptedPassword, this.password);
    }
}
