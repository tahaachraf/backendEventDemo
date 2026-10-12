const express = require('express')
const db = require('../database/connectionDB')
const route = express.Router()

// Démo en lecture seule : uniquement des GET publics.
// Jamais de mot de passe ni de token dans les réponses.
route.get('/demo/users', async (req, res) => {
  try {
    const [rows] = await db.execute(
      'SELECT id_user, user_name, user_login, user_email, user_role FROM users ORDER BY id_user')
    res.json(rows.map((u) => ({
      id: u.id_user, name: u.user_name, login: u.user_login, email: u.user_email, role: u.user_role,
    })))
  } catch (e) {
    res.status(500).json({ msg: 'Erreur base de données' })
  }
})

route.get('/demo/evenements', async (req, res) => {
  try {
    const [rows] = await db.execute(
      "SELECT ID, Titre, Description, DATE_FORMAT(Date, '%Y-%m-%d') AS d, gouvernorat, imgevent, heure FROM evenements ORDER BY Date")
    res.json(rows.map((e) => ({
      id: e.ID, title: e.Titre, description: e.Description, date: e.d,
      place: e.gouvernorat, image: e.imgevent, time: e.heure,
    })))
  } catch (e) {
    res.status(500).json({ msg: 'Erreur base de données' })
  }
})

module.exports = route
