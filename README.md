# 📝 Каталог пользователей

🌐 Превью проекта: [https://viktor-sonin.github.io/users-tanstack-query/](https://viktor-sonin.github.io/users-tanstack-query/)

## Тестовое задание: «Каталог пользователей»

🎯 Цель:
Реализовать простое SPA-приложение на React + TypeScript с использованием TanStack Query для взаимодействия с REST API.
В качестве фейкового бэкенда используй публичное API: https://jsonplaceholder.typicode.com/users

## 🧾 Функционал

- Список пользователей с основной информацией
- Детальная страница пользователя
- Добавление новых пользователей
- Редактирование существующих пользователей
- Удаление пользователей
- Индикаторы загрузки
- Обработка ошибок

🧾 Технические требования:

- React
- TypeScript
- Tailwind / SCSS Modules / Styled Components — по желанию
- TanStack Query

## 🛠 Структура проекта:

### Стек технологий

- Vite
- React 19
- TypeScript
- TanStack Query
- SCSS Modules

### Файловая структура

```tsx
src/
├── AppRouter           # Роутер для навигации
├── main                # Точка входа, тут подключил TanStack Query и ModalProvider
├── app/
│  └── modalContext     # Контекст для модалки
├── components/
│  ├── Container/       # Компонент для отображения статуса загрузки
│  ├── Modal/           # Компонент для модального окна
│  ├── QueryWrapper/    # Компонент для отображения статуса загрузки и ошибок
│  └── ui/              # Вспомогательные ui компоненты
├── hooks/
│  ├── useModalContext  # Хук для модалки
│  └── useUsersQuery    # Хук с query запросами
├── pages/
│  ├── User/            # Страница с детальной информацией о пользователе
│  ├── UserForm/        # Страница для редактирования/добавления пользователя
│  └── Users/           # Главная страница со всем пользователями
└── services/
   └── userService      # Запросы к серверу и их обработка
```

## 🔧 Особенности реализации

- Использование **TanStack Query** для кэширования и управления состоянием
- Глобальная обработка ошибок API
- Кастомный хук для работы с данными
- Адаптивная верстка
- Псевдо-бэкенд

#### Псевдо-бэкенд

Так как https://jsonplaceholder.typicode.com/users не позваоляет делать POST/PUT запросы, я решил перенести все на свое Яндекс Облако, а т.к. это просто хранилище данных, то их обработку пришлось делать на фронте, код лежит в [userService](https://github.com/viktor-sonin/users-tanstack-query/blob/master/src/services/userService.ts)

## 🚀 Установка

1. Клонируйте репозиторий:

```bash
git clone https://github.com/viktor-sonin/users-tanstack-query.git
```

2. Установите зависимости:

```bash
npm install
# или
bun install
```

3. Запустите приложение:

```bash
npm run dev
# или
bun run dev
```

4. Открыть в браузере:

```
http://localhost:5173
```
