# Internationalisation (i18n) avec Flask-Babel

## Description du projet
Ce projet vise à implémenter l'internationalisation (i18n) dans une application Flask en utilisant l'extension Flask-Babel. L'objectif est de permettre l'affichage dynamique de l'application en plusieurs langues (anglais et français) en fonction des paramètres de l'utilisateur, des en-têtes de requêtes ou des paramètres d'URL.

## Table des matières
- [Configuration du Projet](#configuration-du-projet)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Tâches](#taches)
  - [0. Application Flask de base](#0-application-flask-de-base)
  - [1. Configuration de Babel](#1-configuration-de-babel)
  - [2. Détection de la Langue via la Requête](#2-detection-de-la-langue-via-la-requete)
  - [3. Paramétrage des Modèles](#3-parametrage-des-modeles)
  - [4. Forcer la Langue via un Paramètre d'URL](#4-forcer-la-langue-via-un-parametre-durl)
  - [5. Simulation de Connexion Utilisateur](#5-simulation-de-connexion-utilisateur)
  - [6. Utiliser les Préférences Utilisateur](#6-utiliser-les-preferences-utilisateur)
  - [7. Déduire le Fuseau Horaire](#7-deduire-le-fuseau-horaire)
- [Tests](#tests)
- [Auteurs](#auteurs)

## Configuration du Projet
- **Langages supportés** : Français (fr), Anglais (en)
- **Framework** : Flask avec Flask-Babel
- **Python** : Version 3.9 (Ubuntu 20.04 LTS)
- **Style** : PEP8 avec pycodestyle (v2.5)

## Installation
```bash
# Cloner le dépôt
git clone https://github.com/holbertonschool-web_back_end/i18n.git
cd i18n

# Installer les dépendances
pip install -r requirements.txt

# Lancer l'application
python 0-app.py
```

## Utilisation
- Accéder à l'application via : `http://127.0.0.1:5000`
- Tester les langues :
  - Français : `http://127.0.0.1:5000/?locale=fr`
  - Anglais : `http://127.0.0.1:5000/?locale=en`
- Simuler la connexion utilisateur :
  - `http://127.0.0.1:5000/?login_as=2`

## Tâches
### 0. Application Flask de base
Création d'une application Flask simple avec une route `/` et une page HTML basique affichant "Welcome to Holberton" et "Hello world".

### 1. Configuration de Babel
Installation et configuration de Flask-Babel pour gérer les langues supportées (en, fr) avec les paramètres par défaut.

### 2. Détection de la Langue via la Requête
Utilisation de `request.accept_languages` pour détecter automatiquement la langue préférée de l'utilisateur.

### 3. Paramétrage des Modèles
Utilisation des fonctions `_` ou `gettext` pour permettre la traduction dynamique dans les templates HTML.

### 4. Forcer la Langue via un Paramètre d'URL
Ajout de la possibilité de définir manuellement la langue via un paramètre d'URL (`?locale=fr`).

### 5. Simulation de Connexion Utilisateur
Mise en place d'une connexion utilisateur simulée via un paramètre `login_as` dans l'URL.

### 6. Utiliser les Préférences Utilisateur
Mise à jour de la fonction `get_locale` pour prendre en compte les préférences de langue de l'utilisateur connecté.

### 7. Déduire le Fuseau Horaire
Implémentation de la fonction `get_timezone` pour définir dynamiquement le fuseau horaire en fonction des paramètres ou des préférences utilisateur.

## Tests
Pour lancer les tests manuels, accédez aux différentes URLs de l'application en changeant les paramètres `locale`, `login_as`, `timezone` pour vérifier le comportement attendu.

## Auteurs
- Emmanuel Turlay, Staff Software Engineer chez Cruise
- student at Holberton school : Erwan Lebreton

