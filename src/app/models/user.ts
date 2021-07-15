import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";
import bcrypt from "bcryptjs";
@Entity("users")
class User {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column()
  email: string;
  @Column()
  password: string;
  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    if (!!this.password) {
      this.password = bcrypt.hashSync(this.password, 8);
    }
  }
}

export default User;
