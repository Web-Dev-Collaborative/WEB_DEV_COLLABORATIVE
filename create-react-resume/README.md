![npm](https://img.shields.io/npm/v/create-react-resume.svg)
![npm](https://img.shields.io/npm/dw/create-react-resume.svg)
![GitHub](https://img.shields.io/github/license/matmalkowski/create-react-resume.svg)

# 📄 `npx create-react-resume`

Create resume / home page with **[create-react-app](https://facebook.github.io/create-react-app/)** & **[MDX](https://mdxjs.com/)**
Default theme provided!

**[See an example of the deployed app →](https://matmalkowski.com)**

Comes with:

🔥 Default theme<br />
📜 Easy content management via MDX files<br />
⛑ TypeScript support<br />
🚀 Netlify deployment<br />

Getting started
---------------

The simplest way to get started is to use `npx`:

```bash
npx create-react-resume react-resume
cd react-resume
yarn start
```

If you'd like to use TypeScript, just pass in a `--typescript` option:

```bash
npx reate-react-resume react-resume --typescript
```

The quickest and easiet way to deploy your blog is with [Netlify](https://netlify.com/), which is already set up and ready to go:

```bash
# Deploy to a test URL
yarn deploy

# Deploy to a production URL
yarn deploy:prod
```

How to...
---------

**To update landing/home page info,** edit metadata in `src\pages\home\home-data.ts`

**To update/add your job experience,** edit/add mdx files in `src\pages\roles`

**To update your education bit,** edit `src\pages\education\education.mdx`

**To share your skills,** edit `src\pages\skills\skills.mdx`

**To edit links on header to _mail_, _github_, _linkedin_, _medium_, _twitter_ & _stackoverflow_,** edit the props `<Navigation />` component in `src\App.tsx`:
```jsx
<Navigation
  email="mailto:youremail@gmail.com"
  github="https://github.com/matmalkowski"
  linkedin="https://www.linkedin.com/in/yourusername"
  medium="https://medium.com/@your.username"
  twitter="https://twitter.com/@your.username"
  stackoverflow="https://stackoverflow.com/users/@your.userid"
>
```

**To change the look of the page,** provide ui compoents matching the `Theme` interface. Default theme is included and shipped as stand-alone npm package `@create-react-resume/theme-default`. Your custom theme can override some of those components or all of them. Please check `src\theme.tsx` to see how theme is being set.

Other...
---------

I've created this package to learn a bit about MDX ecosystem and play around the idea of building static page using it. Feel free to submit issues/pr if you would like to fix/improve something in the project, or add another theme of your own!

