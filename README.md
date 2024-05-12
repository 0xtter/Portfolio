Welcome to my portfolio code on GitHub! I'm thrilled to share my work with you and the community. Please remember to give proper attribution when using my code, as it helps others discover and benefit from my work.

This portfolio is a [Next.js](https://nextjs.org/) project, initiated with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Deployment

You can deploy the portfolio using Docker:

```shell
docker run -d --name portfolio -p 3000:3000 Bengo237/portfolio:1.0
```

Or without Docker by installing dependencies and running the production server:

```bash
npm install --legacy-peer-deps
npm run build
npm run start
```

## Development

For development, install dependencies and run the development server:

```bash
npm install --legacy-peer-deps
npm run dev
```

Then, open [http://localhost:3000](http://localhost:3000) in your browser. You can edit the page by modifying `pages/index.js`. API routes can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello) and edited in `pages/api/hello.js`.

For more about Next.js, check out the [Next.js Documentation](https://nextjs.org/docs) and [Learn Next.js](https://nextjs.org/learn).

This project is inspired by [Glaysonvisgueira's Project](https://github.com/Glaysonvisgueira/glaysonvisgueira_next-js).
