import databaseClient from "../../../database/client";

import type { Result, Rows } from "../../../database/client";

type Program = {
  id: number;
  title: string;
  synopsis: string;
  poster: string;
  country: string;
  year: number;
  category_id: number;
};

class ProgramRepository {
  async create(program: Omit<Program, "id">) {
    const [result] = await databaseClient.query<Result>(
      `INSERT INTO program 
    (title, synopsis, poster, country, year, category_id)
    VALUES (?, ?, ?, ?, ?, ?)`,
      [
        program.title,
        program.synopsis,
        program.poster,
        program.country,
        program.year,
        program.category_id,
      ],
    );

    return result.insertId;
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all programs from the "program" table
    const [rows] = await databaseClient.query<Rows>("select * from program");

    // Return the array of programs
    return rows as Program[];
  }

  async update(program: Program) {
    // Execute the SQL UPDATE query to update an existing category in the "category" table
    const [result] = await databaseClient.query<Result>(
      `UPDATE program
     SET title = ?, synopsis = ?, poster = ?, country = ?, year = ?, category_id = ?
     WHERE id = ?`,
      [
        program.title,
        program.synopsis,
        program.poster,
        program.country,
        program.year,
        program.category_id,
        program.id,
      ],
    );

    // Return how many rows were affected
    return result.affectedRows;
  }

  async delete(id: number) {
    // Execute the SQL DELETE query to delete an existing category from the "category" table
    const [result] = await databaseClient.query<Result>(
      `DELETE FROM program 
      WHERE id = ?`,
      [id],
    );

    // Return how many rows were affected
    return result.affectedRows;
  }
}

export default new ProgramRepository();
