const fs = require('fs'); // Importation du module 'fs' pour manipuler le système de fichiers

/**
 * Fonction qui lit la base de données à partir d'un fichier CSV.
 * Cette fonction renvoie une promesse qui, en cas de succès, résout avec un objet contenant les étudiants par filière.
 * En cas d'erreur de lecture du fichier, la promesse est rejetée avec un message d'erreur approprié.
 *
 * @param {string} filePath - Le chemin du fichier à lire
 * @returns {Promise<Object>} - Un objet où chaque clé est une filière, et chaque valeur est un tableau de prénoms d'étudiants
 */
function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    // Lecture du fichier spécifié par le chemin filePath en utilisant le format 'utf8'
    fs.readFile(filePath, 'utf8', (err, data) => {
      // En cas d'erreur de lecture du fichier, rejeter la promesse avec un message d'erreur
      if (err) {
        console.error('Error reading the file:', err.message); // Log de l'erreur pour faciliter le debugging
        reject(new Error('Cannot load the database')); // Rejeter avec une erreur spécifique
        return; // Sortir de la fonction après avoir rejeté la promesse
      }

      // Découper les données en lignes, en filtrant les lignes vides
      const lines = data.split('\n').filter((line) => line.trim() !== '');

      // Initialisation de l'objet qui contiendra les étudiants par filière
      const students = {};

      // Parcourir les lignes à partir de la seconde (en excluant l'entête)
      lines.slice(1).forEach((line) => {
        // Diviser chaque ligne par les virgules pour obtenir les champs
        const [firstname, , , field] = line.split(',');

        // Si le champ de la filière existe, ajouter l'étudiant dans l'objet students
        if (field) {
          // Si la filière n'existe pas encore dans l'objet, l'initialiser avec un tableau vide
          if (!students[field]) {
            students[field] = [];
          }
          // Ajouter le prénom de l'étudiant dans le tableau de la filière correspondante
          students[field].push(firstname);
        }
      });

      // Résoudre la promesse avec l'objet students qui contient les étudiants triés par filière
      resolve(students);
    });
  });
}

// Exporter la fonction readDatabase pour l'utiliser dans d'autres fichiers
module.exports = readDatabase;
