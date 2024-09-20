const express = require('express'); // Importation du framework Express
const AppController = require('../controllers/AppController'); // Importation du contrôleur de l'application
const StudentsController = require('../controllers/StudentsController'); // Importation du contrôleur des étudiants

const router = express.Router(); // Création d'un nouvel objet Router d'Express

/**
 * Route pour la page d'accueil.
 * Quand une requête GET est envoyée à la racine '/', elle est gérée par la méthode getHomepage du AppController.
 */
router.get('/', AppController.getHomepage);

/**
 * Route pour récupérer la liste de tous les étudiants.
 * Quand une requête GET est envoyée à '/students', elle est gérée par la méthode getAllStudents du StudentsController.
 */
router.get('/students', StudentsController.getAllStudents);

/**
 * Route pour récupérer les étudiants d'une filière spécifique (CS ou SWE).
 * Quand une requête GET est envoyée à '/students/:major', elle est gérée par la méthode getAllStudentsByMajor du StudentsController.
 * Le paramètre 'major' doit être fourni dans l'URL.
 */
router.get('/students/:major', StudentsController.getAllStudentsByMajor);

// Exportation du routeur pour qu'il puisse être utilisé dans d'autres parties de l'application
module.exports = router;
