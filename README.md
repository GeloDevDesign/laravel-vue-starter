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

## 📦 Installation

### Prerequisites

- PHP >= 8.1
- Composer
- Node.js >= 18.x
- npm or yarn
- MySQL/PostgreSQL (or supported database)

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/GeloDevDesign/laravel-vue-starter.git
   cd laravel-vue-starter
2. **Install backend dependencies**
   ```bash
  composer install
3. **Configure environment**
   ```bash
  cp .env.example .env
4. **Edit .env with your database credentials:**
   ```bash
  DB_CONNECTION=mysql
  DB_HOST=127.0.0.1
  DB_PORT=3306
  DB_DATABASE=your_database_name
  DB_USERNAME=root
  DB_PASSWORD=
5. **Generate application key**
   ```bash
  php artisan key:generate
6. **Install frontend dependencies**
   ```bash
  npm install
7. **Start the development servers**
   ```bash
  compsor run dev
  <!-- OR -->
  # In one terminal
  php artisan serve
  
  # In another terminal
  npm run dev
8. **Access the application**
   ```bash
  compsor run dev
  <!-- OR -->
  # In one terminal
  php artisan serve
  
  # In another terminal
  npm run dev
---

Thank you thats all.