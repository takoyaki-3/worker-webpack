addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  return new Response('Hello from Cloudflare Workers using Webpack!', {
    status: 200,
    headers: { 'Content-Type': 'text/plain' },
  });
}
