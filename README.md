# Favorite items homework for BrightProjects

This project lets user add items (movies, TV shows) to favorites. Admin can modify data. Everything with responsive design.

## Getting Started

Follow the steps below to get the project up and running on your local machine:

1. Open terminal and run `npm i` command.
2. Open terminal and run `composer i` command.
3. Rename `.env.example` to `.env` and modify the following lines:
    APP_NAME=FavoriteItems
    APP_KEY=base64:+oPfgKCc4Iuq50UNV+8xb4C7UMp15db3sY+vJoxsdTo=
    DB_DATABASE=favorite_items

4. Open terminal and run `php artisan migrate:fresh --seed` command.
5. Now you have starter items to see functionality and 10 users:

   User 1:
   - Name: User1
   - Email: user1@gmail.com
   - Password: 123

   User 2:
   - Name: User2 (replace User1 with User2)
   - Email: user2@gmail.com (replace user1@gmail.com with user2@gmail.com)
   - Password: 123

   Admin user:
   - Name: admin
   - Email: admin@gmail.com
   - Password: 123

6. Open terminal and run `npm run dev` command.
7. Open terminal and run `php artisan serve` command.
8. Enjoy using the website.
9. Now you can access the website on http://localhost:8000/ in your web browser.

## Technologies Used

Laravel 10, typescript, React.js
