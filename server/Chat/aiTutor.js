const Fastify = require('fastify');
const cors = require('@fastify/cors');
const { OpenAI } = require('openai');
require('dotenv').config();

const fastify = Fastify({ logger: true });

fastify.register(cors, {
  origin: '*',
});

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

fastify.post('/api/chat', async (request, reply) => {
  try {
    const { messages } = request.body;

    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: messages,
      temperature: 0.7
    });

    reply.send({ reply: response.choices[0].message });
  } catch (err) {
    request.log.error(err);
    reply.code(500).send({ error: 'OpenAI call failed' });
  }
});

fastify.listen({ port: 5000 }, err => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});