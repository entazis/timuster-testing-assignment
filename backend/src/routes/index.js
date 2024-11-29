import DB from "../db/index.js";

//TODO add throttle to prevent abuse
//TODO add fastify-swagger

export default async function routes(fastify) {
  fastify.get("/ping", async () => {
    return "pong\n";
  });
  fastify.get("/search", async (request) => {
    const term = request.query?.term || "";
    return DB.searchEmail(term);
  });
  fastify.post("/email", async (request) => {
    const email = request.body;
    console.debug("sending email: ", email);
    const id = await DB.addEmail(email);
    return { id };
  });
}
