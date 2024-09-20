const readDatabase = require('../utils'); // Importation de la fonction readDatabase depuis le module utils

/**
 * Controller for handling student-related routes.
 * This class includes methods for retrieving all students or students by a specific major.
 */
class StudentsController {

  /**
   * Retrieves a list of all students from the database, grouped by their field of study.
   * The list is sorted alphabetically by field, and includes the number of students in each field.
   *
   * @param {Object} req - The request object containing the HTTP request information.
   * @param {Object} res - The response object used to send back the desired HTTP response.
   */
  static getAllStudents(req, res) {
    // Récupération du chemin de la base de données à partir des arguments de ligne de commande
    const databasePath = process.argv[2];
    console.log(`Reading database from: ${databasePath}`); // Log pour vérifier le chemin de la base de données

    // Lecture de la base de données et traitement des résultats
    readDatabase(databasePath)
      .then((students) => {
        // Initialisation du texte de réponse
        let responseText = 'This is the list of our students\n';

        // Trie des clés (filières) et ajout des informations des étudiants dans la réponse
        Object.keys(students)
          .sort((a, b) => a.localeCompare(b)) // Trier les filières par ordre alphabétique
          .forEach((field) => {
            // Ajout du nombre d'étudiants et la liste des noms pour chaque filière
            responseText += `Number of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}\n`;
          });

        // Envoyer la réponse finale avec un statut 200 (succès)
        res.status(200).send(responseText.trim());
      })
      .catch((err) => {
        // En cas d'erreur, log de l'erreur pour le debugging
        console.error(err.message);
        // Envoyer une réponse d'erreur avec le statut 500 (erreur interne du serveur)
        res.status(500).send(err.message);
      });
  }

  /**
   * Retrieves a list of students by a specific major (CS or SWE).
   * Validates the major before fetching data. If the major is invalid, a 500 error is returned.
   *
   * @param {Object} req - The request object containing the HTTP request information.
   * @param {Object} req.params.major - The major to filter students by. Must be either 'CS' or 'SWE'.
   * @param {Object} res - The response object used to send back the desired HTTP response.
   */
  static getAllStudentsByMajor(req, res) {
    // Récupération du chemin de la base de données depuis les arguments de la ligne de commande
    const databasePath = process.argv[2];
    // Récupération du paramètre de la filière (major) à partir de l'URL
    const major = req.params.major;

    // Vérification que la filière est bien "CS" ou "SWE", sinon retourner une erreur
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    // Lecture de la base de données et récupération des étudiants
    readDatabase(databasePath)
      .then((students) => {
        // Vérification si la filière demandée existe dans les données
        if (students[major]) {
          // Si la filière existe, renvoyer la liste des étudiants
          const studentList = students[major].join(', ');
          res.status(200).send(`List: ${studentList}`);
        } else {
          // Si la filière n'existe pas, renvoyer une liste vide
          res.status(200).send('List:');
        }
      })
      .catch((err) => {
        // En cas d'erreur de lecture de la base de données, log de l'erreur
        console.error(err.message);
        // Envoyer une réponse d'erreur avec un message approprié
        res.status(500).send('Cannot load the database');
      });
  }
}

// Exportation de la classe StudentsController pour être utilisée dans d'autres fichiers
module.exports = StudentsController;
