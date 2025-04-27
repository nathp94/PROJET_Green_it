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

## Déploiement

Frontend : hébergé sur Vercel

Backend : hébergé sur Render

Base de données : hébergée sur Supabase (PostgreSQL)

Frontend : Vue.js

Backend : Express.js + Sequelize

## Hébergement et Disponibilité

Notre projet est hébergé gratuitement sur des plateformes telles que Render, Vercel et Supabase.
Cependant, étant donné que nous utilisons des services gratuits, le serveur et le site web peuvent mettre plusieurs secondes à démarrer ou parfois être temporairement inaccessibles.

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

---
### Fonctionnalités principales
```
Authentification : Login utilisateur (avec rôle : user/admin)
Produit : Recherche de produits
Panier : Ajout et suppression d'articles au panier
Gestion des produits : Affichage, ajout, suppression de produits (admin uniquement)
Gestion des utilisateurs : Supprimer des utilisateurs (sauf les admins)
Sécurité : Mots de passe hashés avec bcryptjs et authentification par JWT
```
