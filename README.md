To setup project you need do fallowing changes:

1. In terminal run "npm i"
2. In terminal run "composer i"
3. Change .env.example to .env and replace lines to:
   DB_DATABASE=favorite_items
4. In terminal run php artisan migrate:fresh --seed
5. Now you have starter items to see functionality and 10 users:
   Name: User1,
   email: user1@gmail.com
   password: 123
   Next users Name insted of User1 would be User2
   Next users email insted of user1@gmail.com would be user2@gmail.com
   NOTE - passwords are the same
6. In terminal npm run dev
7. In terminal run php artisan serve

Now you have access to my homework website on url http://localhost:8000/
