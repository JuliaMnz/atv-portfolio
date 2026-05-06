const experienciaService = require('../services/experienciaService');

module.exports = {
  
  async getAll(req, res) {
    try {
      const experiencias = await experienciaService.listAll();
      res.json(experiencias);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao buscar experiências: ' + error.message });
    }
  },

  async create(req, res) {
    try {
      const exp = await experienciaService.create(req.body);
      res.status(201).json(exp);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const exp = await experienciaService.update(req.params.id, req.body);
      exp ? res.json(exp) : res.status(404).send('Experiência não encontrada');
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      await experienciaService.delete(req.params.id);
      res.status(204).send();
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
};