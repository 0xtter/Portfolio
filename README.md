**Hello there!**

If you're reading this, chances are you've stumbled upon my portfolio code on GitHub. I'm glad that you find my work useful, and I'm happy to share it with you and the wider community.

However, I kindly request that if you use any part of my code or take inspiration from it for your own project, please mention the original source (https://github.com/0xtter/Portfolio) in your project and give credit where credit is due.

As a developer, I understand how important it is to respect other people's intellectual property and give proper attribution for their work. By mentioning the original project, you not only show appreciation for my efforts, but you also help others discover my work and potentially benefit from it as well.

So please, when you use my portfolio code, include a reference to the original project and let others know where you found it. I would greatly appreciate it.

Thank you for your understanding and happy coding!

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Deploy the portfolio

## With docker

```shell
docker run -d --name portfolio -p 3000:3000 0xtter/portfolio:1.0
```

## Whitout Docker

1. Install the dependencies:

    ```bash
    npm install --legacy-peer-deps
    ```

2. Run the Production server:

    ```bash
    npm run build
    ```

    ```bash
    npm run start
    ```
# Development

1. Install the dependencies:

    ```bash
    npm install --legacy-peer-deps
    ```

2. Run the development server:

    ```bash
    npm run dev
    ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

4. You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

---

*Inspired from [Glaysonvisgueira's Project](https://github.com/Glaysonvisgueira/glaysonvisgueira_next-js)*