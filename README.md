# Projet Green IT - Parfumerie Babasse

## 🛠️ Installation du projet

Avant de commencer, assurez-vous que **Node.js** est installé sur votre machine.  
(Sinon, téléchargez-le depuis [https://nodejs.org/](https://nodejs.org/)).

---

### 📦 Installation des dépendances

1. **Cloner le projet :**
   ```bash
   git clone https://github.com/nathp94/PROJET_Green_it
   ```


2. **Installer les dépendances du frontend (Vue.js)**
   ```bash
   cd proj
   npm install
   ```

3. **Installer les dépendances du backend (Node.js/Express)**
   ```bash
   cd proj/backend
   npm install
   npm install pg
   ```



---

## Lancer le Backend (API Express)

Depuis le dossier `proj/backend/` :

   ```bash
   cd proj/backend
   node server.js
   ```
Si vous voulez reset la BDD, vous pouvez faire un node seed.js depuis ce dossier.

---

## Lancer le Frontend (Vue.js)

Depuis le dossier `proj/` :

   ```bash
   cd proj
   npm run serve
   ```

---

Compte admin pour pouvoir gérer les produits et utilisateurs : 
admin
admin123
---

## Déploiement

Frontend : hébergé sur Vercel (https://projet-green-it-yfgw.vercel.app/)

Backend : hébergé sur Render

Base de données : hébergée sur Supabase (PostgreSQL)

Frontend : Vue.js

Backend : Express.js + Sequelize

## Hébergement et Disponibilité

Notre projet est hébergé gratuitement sur des plateformes telles que Render, Vercel et Supabase.
Cependant, étant donné que nous utilisons des services gratuits, le serveur et le site web peuvent mettre plusieurs secondes à démarrer ou parfois être temporairement inaccessibles.

---


# Description des différentes parties du site et des fonctionnalités

## 🌐 Frontend - Vue.js (dossier `proj/src`)

(dossier `proj/src/components`)
- **HomePage (Accueil)** :
  - Présentation générale de la parfumerie.
  - Bouton "Explore Products" redirigeant vers les produits.
  
- **ProductsPage (Produits)** :
  - Liste des produits disponibles, affichés sous forme de cartes.
  - Fonction de recherche de produit par nom.
  - Affichage du prix, note, description de chaque parfum.
  - Possibilité d’ajouter des produits au panier (si connecté).

- **CartPage (Panier)** :
  - Affichage des produits ajoutés au panier.
  - Modification des quantités ou suppression d'articles.
  - Calcul du prix total.

- **LoginPage (Connexion)** :
  - Connexion utilisateur avec gestion des rôles (`user` ou `admin`).
  - Utilisation de JWT pour la session.

- **Admin - ManageProductPage** :
  - Pour les administrateurs seulement.
  - Ajout de nouveaux produits.
  - Suppression de produits existants.

- **Admin - ManageUsersPage** :
  - Gestion des utilisateurs du site.
  - Affichage de tous les utilisateurs.
  - Suppression possible des utilisateurs (hors admin).

---

## 🛠️ Backend - Express.js + Sequelize (dossier `proj/backend/`)

- **server.js** :
  - Fichier principal de configuration Express et connexion à la base de données.

- **models/** :
  - Définition des modèles Sequelize :
    - `User` : gestion des utilisateurs, mots de passe hashés, rôles.
    - `Product` : gestion des parfums (nom, description, prix, stock, image, note).
    - `CartItem` : gestion des articles ajoutés au panier.

- **routes/** :
  - `auth.routes.js` : authentification (login, gestion JWT).
  - `product.routes.js` : API CRUD pour les produits.
  - `user.routes.js` : API pour lister et supprimer des utilisateurs.

- **config/** :
  - `db.config.js` : configuration de la connexion à Supabase (PostgreSQL).

---

## ⚙️ Fonctionnalités principales

- Authentification avec `jsonwebtoken` et `bcryptjs`.
- Gestion des rôles (admin et utilisateur simple).
- CRUD complet sur les produits pour l'admin.
- Gestion d’un panier utilisateur (ajout, suppression).
- Sécurisation des routes sensibles avec vérification des rôles.
- Communication sécurisée entre frontend et backend (CORS configuré).


---


# Wireframe
```
Page d'accueil User

HEADER

[Logo PARFUMERIE BABASSE]         [Home] [Products] [Login]

BODY

Titre : "Welcome to PARFUMERIE BABASSE"
Sous-titre : "Discover our exclusive collection of perfumes and enjoy the best offers."
[Bouton orange : "Explore Products"]

---------------------------------------------------

Page Admin :Manage User

HEADER

[Logo PARFUMERIE BABASSE]   [Home] [Products] [Cart] [Manage Product] [Manage Users] [Logout]

BODY

Manage Users
admin — Role: admin        Admin (Not deletable)
user1 — Role: user         User (Delete)
```
---

# Structure

```
Frontend (Vue.js)
src/components/ : Composants principaux (Home, Products, Login, Cart, Admin Management)

src/router/ : Configuration des routes de navigation

src/store/ : Gestion globale de l'état de l'application (login, produits, panier)

Backend (Express.js)
server.js : Fichier principal du serveur

models/ : Modèles Sequelize (user, product, cartItem)

routes/ : Routes API (auth.routes.js, product.routes.js, user.routes.js)

config/ : Configuration de la base de données (db.config.js)

```
