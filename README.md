# Jekyll React using Webpack, Yarn, Weave
-----

I'm attempting to create a rapid prototyping tool, specifically for using Weave + React. Jekyll and gh-pages are where a lot of the "rapid" comes in.

Check out the live demo of this repo here: https://yorthehunter.github.io/jekyll-react/

## Running locally
Here are the steps I take:

Download:
- clone the repo

Develop:
- run `webpack` to bundle assets into the `/src` directory
- run `jekyll build` to build the jekyll site to the `/public` directory
- run `jekyll serve` to serve locally at `http://localhost:4000/jekyll-react`

Deploy:
- run `npm deploy` to run the `gh-pages-deploy` package, which copies files from `/public` to the `gh-pages` branch
