Laravel Vue 3 Starter Kit - Installation Guide
A full-stack starter kit using Laravel, Vue 3, Tailwind CSS, DaisyUI, and Pinia, preconfigured with authentication (registration, login, forgot password), RESTful API integration, and a scalable folder structure.
Table of Contents

Tech Stack
Features
Installation Guide
Prerequisites
Setup Instructions
Production Build
Troubleshooting


Notes


🚀 Tech Stack

Laravel – Backend framework (PHP)
Vue 3 – Reactive JavaScript frontend
Vite – Fast development server and bundler
Tailwind CSS – Utility-first CSS framework
DaisyUI – UI components for Tailwind CSS
Pinia – State management for Vue 3
Vue Router – Frontend routing
Axios – Promise-based HTTP client

✅ Features

🔐 User Authentication (Register, Login, Forgot Password)
🔄 API-ready architecture with Axios
🧩 Modular Vue components with Tailwind & DaisyUI
📁 Clean and maintainable project structure
⚡ Vite for fast dev/build performance
🗂️ Pinia store for reactive state management


📦 Installation Guide
Prerequisites

PHP >= 8.1
Composer
Node.js >= 18.x
npm or yarn
MySQL, PostgreSQL, or another supported database

Setup Instructions

Clone the RepositoryClone the project and navigate to the directory. Replace <repository-url> with the actual repository URL (e.g., https://github.com/username/repo.git).
git clone <repository-url>
cd <project-directory>


Install Backend DependenciesInstall PHP dependencies using Composer:
composer install


Configure EnvironmentCopy the .env.example file to .env and update database credentials:
cp .env.example .env

Edit .env to set DB_CONNECTION, DB_HOST, DB_DATABASE, DB_USERNAME, and DB_PASSWORD.

Generate Application KeyGenerate a unique application key for Laravel:
php artisan key:generate


Run Database MigrationsSet up the database schema:
php artisan migrate


Install Frontend DependenciesInstall Node.js dependencies for Vue 3 and related packages:
npm install


Configure ViteEnsure vite.config.js is set up for Laravel and Vue:
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel(['resources/js/app.js']),
        vue({ template: { transformAssetUrls: { base: null, includeAbsolute: false } } }),
    ],
});


Build and Run  

Start the Laravel development server:php artisan serve


In a separate terminal, run the Vite development server:npm run dev




Access the ApplicationOpen your browser and visit http://localhost:8000.


🛠️ Optional: Production Build
To build frontend assets for production:
npm run build

🛑 Troubleshooting

Database Connection Issues: Ensure your database service is running and .env credentials are correct.
CORS Errors: Check config/cors.php if API requests fail.
Vite Errors: Verify Node.js version and run npm install again if assets fail to load.
Port Conflicts: If php artisan serve fails, use php artisan serve --port=8001.

📝 Notes

Ensure your database is running before migrations.
Laravel's default authentication routes (/login, /register) are preconfigured with Vue components.
For further customization, refer to the Laravel and Vue 3 documentation.
