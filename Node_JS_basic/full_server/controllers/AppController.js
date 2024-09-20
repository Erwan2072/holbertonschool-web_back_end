/**
 * Contains the miscellaneous route handlers.
 */


class AppController {
  static getHomepage(req, res) {
    res.status(200).send('Hello Holberton School!');
  }
}

module.exports = AppController;
