// ESM
import Fastify from "fastify";
import routes from "./src/routes/index.js";
import cors from "@fastify/cors";

//TODO add TypeScript support
//TODO add dotenv
//TODO create integration tests

/**
 * @type {import('fastify').FastifyInstance} Instance of Fastify
 */
const fastify = Fastify({
  logger: true,
});

fastify.register(routes);
fastify.register(cors);

fastify.listen({ port: process.env.PORT }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  // Server is now listening on ${address}
});
