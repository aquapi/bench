const text = 'Hello, Bench!';

export default {
  port: 8000,
  fetch: () => new Response(text),
};
