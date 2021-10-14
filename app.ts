import "reflect-metadata";
import { createConnection } from "typeorm";
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

createConnection({
  namingStrategy: new SnakeNamingStrategy(),
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: process.env.MYSQL_PASSWORD,
  database: "generous_recipe",
  entities: [`${__dirname}/entities/*.js`],
  migrations: [`${__dirname}/migrations/*.js`],
  synchronize: true,
  migrationsRun: true,
  logging: true
}).then((_: any) => {
  process.exit(0)
}).catch((error: any) => console.log(error));
