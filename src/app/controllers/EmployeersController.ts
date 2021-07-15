import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Empolyee from "../models/Funcionarios";
class EmployeesController {
  async deleteUser(req: Request, res: Response) {
    const results = await getRepository(Empolyee).delete(req.params.id);
    return res.json(results);
  }
  async updateUser(req: Request, res: Response) {
    const user = await getRepository(Empolyee).findOne(req.params.id);
    if (user) {
      getRepository(Empolyee).merge(user, req.body);
      const results = await getRepository(Empolyee).save(user);
      return res.json(results);
    }
    return res.status(404).json({ msg: "Usuário não encontrado" });
  }
  async getUsers(req: Request, res: Response) {
    const userEmooplyes = await getRepository(Empolyee).find();
    return res.json(userEmooplyes);
  }
  async getUser(req: Request, res: Response) {
    const userEmooplye = await getRepository(Empolyee).findOne(req.params.id);
    return res.json(userEmooplye);
  }
  async store(req: Request, res: Response) {
    const repository = getRepository(Empolyee);
    const {
      nome,
      email,
      data_nascimento,
      data_admissao,
      cargo,
      nivel,
      setor,
      created_at,
      update_at,
    } = req.body;
    const userExists = await repository.findOne({ where: { email } });
    if (userExists) {
      return res.sendStatus(409);
    }
    const funcionarios = repository.create({
      nome,
      email,
      data_nascimento,
      data_admissao,
      cargo,
      nivel,
      setor,
      created_at,
      update_at,
    });
    await repository.save(funcionarios);
    return res.json(funcionarios);
  }
}

export default new EmployeesController();
