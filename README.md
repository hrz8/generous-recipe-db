# generous-recipe-db

```bash
[generous-recipe-db]$ docker exec -it mysql-server bash
[mysql-server]$ mysql
mysql> CREATE DATABASE generous_recipe;
mysql> exit
[mysql-server]$ exit
[generous-recipe-db]$ MYSQL_PASSWORD=password yarn start
```
