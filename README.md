# 🚀 Laravel Vue 3 Starter Kit

A full-stack starter kit using Laravel, Vue 3, Tailwind CSS, DaisyUI, and Pinia, preconfigured with authentication and router setup

![Laravel](https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white)
![Vue.js](https://img.shields.io/badge/Vue.js-4FC08D?style=for-the-badge&logo=vuedotjs&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=white)

## ✨ Features

- 🔐 **User Authentication** (Register, Login, Forgot Password)
- 🔄 **API-ready architecture** with Axios
- 🧩 **Modular Vue components** with Tailwind & DaisyUI
- 📁 **Clean project structure** for maintainability
- ⚡ **Vite** for fast dev/build performance
- 🗂️ **Pinia** store for reactive state management
- 🎨 **Tailwind CSS** with **DaisyUI** components

## 🛠️ Tech Stack

| Backend         | Frontend       | CSS Framework  | Tools          |
|-----------------|----------------|----------------|----------------|
| Laravel (PHP)   | Vue 3          | Tailwind CSS   | Vite           |
|                 | Pinia          | DaisyUI        | Axios          |
|                 | Vue Router     |                |                |

## ☁️ Hostinger Deployment Process

This outlines the step-by-step process for deploying the application on a Hostinger shared hosting environment, ensuring correct path resolution and asset linking.

1. Compile your frontend assets for production on your local machine.

```
npm run build
```
-This command generates optimized files inside the public/build directory.
-Asset Check: Ensure the manifest.json file is inside the public/build folder.
-Cleanup: Remove the public/hot file before deployment, as it is only used for local development.

2. Environment Setup (Server)
-Upload your entire project to the server (typically to a folder one level above the public_html).
-Update the .env file on the server with production details, including the database configuration and setting APP_ENV=production.

3. Configure .htaccess (Server Root)
Place the following configuration in a .htaccess file in your project's root directory (where your app, bootstrap, and public folders reside). This is essential for routing requests to the Laravel public directory.

```
<IfModule mod_rewrite.c>
Options +FollowSymLinks
RewriteEngine On

# Prevents the public folder from being visible in the URL path
RewriteCond %{REQUEST_URI} !^/public/

# Handle physical files/directories if they exist outside /public
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_FILENAME} !-f

# Route all requests to public/index.php
RewriteRule ^(.*)$ public/$1 [L]
# Fallback rule for the root URL
RewriteRule ^(/)?$ public/index.php [L]
</IfModule>
```

4. Setup Storage Link & Cache (SSH)

Use SSH to run the following commands in your project's root directory to clear cache and establish the symlink for file storage.

1. Clear Caches: Clears all compiled routes, views, and configuration.
```
php artisan optimize:clear
```
2. Create Storage Symlink: Creates the necessary link for uploaded public files (e.g., user avatars, images) to be accessible via public/storage.
```
ln -s ../storage/app/public public/storage
```


