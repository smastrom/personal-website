import vercel from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';

const tagsRegex1 = /(>)[\s]*([<{])/g;
const tagsRegex2 = /({[/:][a-z]+})[\s]*([<{])/g;
const tagsRegex3 = /({[#:][a-z]+ .+?})[\s]*([<{])/g;
const tagsRegex4 = /([>}])[\s]+(<|{[/#:][a-z][^}]*})/g;
const tagsReplace = '$1$2';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess({
    postcss: true,
    replace: [
      [tagsRegex1, tagsReplace],
      [tagsRegex2, tagsReplace],
      [tagsRegex3, tagsReplace],
      [tagsRegex4, tagsReplace]
    ]
  }),

  kit: {
    adapter: vercel({})
  }
};

export default config;
