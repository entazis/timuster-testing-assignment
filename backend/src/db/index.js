import knex from "knex";

const db = knex({
  client: "sqlite3", // or 'better-sqlite3'
  connection: {
    filename: "./db.sqlite",
  },
});

class DB {
  //TODO create leads schema
  static async addLead(data) {
    return db("leads").insert(data);
  }
  static async addEmail(data) {
    return db("emails").insert(data);
  }
  static async searchEmail(term) {
    return db("emails")
      .where("to", "like", `%${term}%`)
      .orWhere("cc", "like", `%${term}%`)
      .orWhere("bcc", "like", `%${term}%`)
      .orWhere("subject", "like", `%${term}%`)
      .orWhere("body", "like", `%${term}%`);
  }
}

export default DB;
