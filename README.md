To setup project you need do fallowing changes:

1. In terminal run "npm i"
2. In terminal run "composer i"
3. Change .env.example to .env and replace lines to:
   APP_NAME=FavoriteItems
   APP_KEY=base64:+oPfgKCc4Iuq50UNV+8xb4C7UMp15db3sY+vJoxsdTo=
   DB_DATABASE=favorite_items
4. In terminal run php artisan migrate:fresh --seed
5. Now you have starter items to see functionality and 10 users:
   Name: User1,
   email: user1@gmail.com
   password: 123
   Next users Name insted of User1 would be User2
   Next users email insted of user1@gmail.com would be user2@gmail.com
   NOTE - passwords are the same
   Admin user:
   Name: admin,
   email: admin@gmail.com
   password: 123
6. In terminal npm run dev
7. In terminal run php artisan serve
8. Have a good experience
Now you have access to my homework website on url http://localhost:8000/
