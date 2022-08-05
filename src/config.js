import { config } from "dotenv";
config();

export const database = {
  connectionLimit: 10,
  host: process.env.DATABASE_HOST || "database-2-dblinks.c8ewp26xjjep.ap-south-1.rds.amazonaws.com",
  user: process.env.DATABASE_USER || "admin",
  password: process.env.DATABASE_PASSWORD || "admin123",
  database: process.env.DATABASE_NAME || "dblinks",
};

export const port = process.env.PORT || 4000;
