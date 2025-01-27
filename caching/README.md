# Caching System

## Description
Ce projet vise à implémenter plusieurs algorithmes de mise en cache afin de comprendre les différentes stratégies utilisées dans les systèmes de gestion de cache. Le cache est une mémoire temporaire destinée à accélérer les performances des applications en stockant des données souvent réutilisées. Vous apprendrez à implémenter des politiques comme FIFO, LIFO, LRU, MRU et LFU.

## Contenu du projet

### BaseCaching
Une classe de base `BaseCaching` est fournie. Elle contient :
- Une constante `MAX_ITEMS` : limite maximale du cache (égale à 4).
- Un dictionnaire `cache_data` pour stocker les données.
- Deux méthodes à implémenter dans les classes enfants : `put` et `get`.

### Algorithmes de cache à implémenter

#### 1. BasicCache
- Pas de limite de taille.
- Ajout simple d'éléments dans le cache.

#### 2. FIFOCache (First In, First Out)
- Lorsque le cache atteint sa taille limite, le premier élément inséré est supprimé.

#### 3. LIFOCache (Last In, First Out)
- Lorsque le cache atteint sa taille limite, le dernier élément inséré est supprimé.

#### 4. LRUCache (Least Recently Used)
- Lorsque le cache atteint sa taille limite, l'élément le moins récemment utilisé est supprimé.

#### 5. MRUCache (Most Recently Used)
- Lorsque le cache atteint sa taille limite, l'élément le plus récemment utilisé est supprimé.

#### 6. LFUCache (Least Frequently Used)
- Lorsque le cache atteint sa taille limite, l'élément le moins fréquemment utilisé est supprimé.

## Installation
1. Clonez le dépôt :
   ```bash
   git clone https://github.com/holbertonschool-web_back_end
   ```
2. Rendez-vous dans le répertoire du projet :
   ```bash
   cd caching
   ```

## Utilisation
1. Exécutez les fichiers principaux pour tester chaque algorithme, par exemple :
   ```bash
   python3 0-main.py
   ```
2. Modifiez les fichiers pour ajouter vos propres tests.

## Exigences
- Système : Ubuntu 20.04 LTS
- Python : version 3.9
- Style de code : `pycodestyle` version 2.5

## Documentation
- Chaque classe et méthode doit être documentée avec des descriptions claires.
- Exemple pour une méthode :
  ```python
  def put(self, key, item):
      """
      Ajoute un élément dans le cache.
      Si la clé ou l'item est None, ne fait rien.
      """
  ```

## Exemple de sortie
Pour **FIFO** :
```bash
Current cache:
A: Hello
B: World
C: Holberton
D: School
DISCARD: A
Current cache:
B: World
C: Holberton
D: School
E: Battery
```

## Auteurs
- **Guillaume** - CTO chez Holberton School

