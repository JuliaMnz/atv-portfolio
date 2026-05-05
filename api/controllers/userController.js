const userService = require('../services/userService');

module.exports = {
    // 1. Listar todos )
    async getAllUsers(req, res) {
        const users = await userService.listAll();
        res.json(users);
    },

    // 2. Buscar por ID 
    async getUserById(req, res) {
        const user = await userService.getById(req.params.id);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'Usuário não encontrado' });
        }
    },

    // 3. Criar usuário 
    async createUser(req, res) {
        const user = await userService.create(req.body);
        res.status(201).json(user);
    },

    // 4. Atualizar 
    async update(req, res) {
        const user = await userService.update(req.params.id, req.body);
        user ? res.json(user) : res.status(404).send('Usuário não encontrado');
    },

    // 5. Deletar
    async delete(req, res) {
        await userService.delete(req.params.id);
        res.status(204).send();
    }
};