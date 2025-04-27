# Projet Green IT - Parfumerie Babasse

## 🛠️ Installation du projet

Avant de commencer, assurez-vous que **Node.js** est installé sur votre machine.  
(Sinon, téléchargez-le depuis [https://nodejs.org/](https://nodejs.org/)).

---

### 📦 Installation des dépendances

1. **Cloner le projet :**
   ```bash
   git clone <URL_DU_DEPOT_GITHUB>
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

Compte admin pour pouvoir gérer les produits et utilisateurs : 
admin
admin123
admin2
admin1234

---

## Déploiement

Frontend : hébergé sur Vercel
Backend : hébergé sur Render
Base de données : hébergée sur Supabase (PostgreSQL)

## Hébergement et Disponibilité

Notre projet est hébergé gratuitement sur des plateformes telles que Render (pour le backend) et Vercel (pour le frontend).
Cependant, étant donné que nous utilisons des services gratuits, le serveur et le site web peuvent mettre plusieurs secondes à démarrer ou parfois être temporairement inaccessibles.

En effet, les services gratuits :

"Endorment" les serveurs après une période d'inactivité pour économiser des ressources.

Limitent la puissance et la disponibilité par rapport aux plans payants.

Peuvent occasionner des erreurs comme des délais d'attente ou des erreurs 502/504 temporaires.

# Wireframe

Page d'accueil User

HEADER
---------------------------------------------------
[Logo PARFUMERIE BABASSE]         [Home] [Products] [Login]

BODY
---------------------------------------------------
Titre : "Welcome to PARFUMERIE BABASSE"
Sous-titre : "Discover our exclusive collection of perfumes and enjoy the best offers."
[Bouton orange : "Explore Products"]


Page Manage User

HEADER
---------------------------------------------------
[Logo PARFUMERIE BABASSE]   [Home] [Products] [Cart] [Manage Product] [Manage Users] [Logout]

BODY
---------------------------------------------------
Manage Users
admin — Role: admin        Admin (Not deletable)
user1 — Role: user         User (Delete)