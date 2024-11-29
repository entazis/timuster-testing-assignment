import DB from "../db/index.js";

//TODO add throttle to prevent abuse
//TODO add fastify-swagger

export default async function routes(fastify, options) {
  fastify.get("/ping", async (request, reply) => {
    return "pong\n";
  });
  fastify.get("/search", async (request, reply) => {
    const term = request.query?.term || "";
    return DB.searchEmail(term);
  });
  fastify.post("/email", async (request, reply) => {
    const email = request.body;
    console.debug("sending email: ", email);
    const id = await DB.addEmail(email);
    return { id };
  });
}
