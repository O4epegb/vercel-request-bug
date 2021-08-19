import fastify from 'fastify';
import cors from 'fastify-cors';
import names from 'starwars-names';

export const app = fastify({ logger: true });

app.register(cors, {
  origin: true,
  credentials: true,
  methods: ['GET'],
});

app.get('/api/stats', async () => {
  return {
    data: {
      winners: names.random(10).map((name: string) => ({ name, id: name })),
    },
  };
});

app.get<{ Params: { slug: string } }>('/api/players/:slug', async (request) => {
  const { slug } = request.params;

  return { player: { name: slug, id: slug } };
});
