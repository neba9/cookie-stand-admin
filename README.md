# React I

###  Feature Tasks and Requirements

- The spec for lab is screen shot of Cookie Stand Admin Version 1

- pages/Index.js should…

   - Have <Head> component with page title set to Cookie Stand Admin

   - Have a header component that matches spec.

   - Have a <main> component containing <form> and a placeholder
   component showing JSON string of last created Cookie Stand.

   - Have a <footer> component that matches spec.

- Style app using TailwindCSS utility classes.

### Implementation Notes
- npx create-next-app –example with-tailwindcss cookie-stand-admin

- strip out unused files
   - Won’t break if they get left in, but a good practice to remove stuff you’re not using.



# Next.js + Tailwind CSS Example

This example shows how to use [Tailwind CSS](https://tailwindcss.com/) (v2) with Next.js. It follows the steps outlined in the official [Tailwind docs](https://tailwindcss.com/docs/guides/nextjs).

It uses the new [`@tailwindcss/jit`](https://github.com/tailwindlabs/tailwindcss-jit) engine for Tailwind CSS.

## Deploy your own

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-example):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-tailwindcss&project-name=with-tailwindcss&repository-name=with-tailwindcss)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-tailwindcss with-tailwindcss-app
# or
yarn create next-app --example with-tailwindcss with-tailwindcss-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/new?utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).
