import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("funcionarios")
class User {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column()
  nome: string;
  @Column()
  email: string;
  @Column()
  data_nascimento: Date;
  @Column()
  data_admissao: Date;
  @Column()
  setor: string;
  @Column()
  cargo: string;
  @Column()
  nivel: string;
  @CreateDateColumn() // busca informações da data hr
  created_at: Date;
  @UpdateDateColumn() // Atualiza o campo conforme a edição
  update_at: Date;
}

export default User;
