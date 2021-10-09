const NAME = 'css-tricks',
  DOMAIN = `https://${NAME}.com`,
  SITE = `${DOMAIN}/wp-json`,
  API_WP = `${SITE}/wp/v2`,
  PER_PAGE = 15,
  POSTS = `${API_WP}/posts?_embed&per_page=${PER_PAGE}`,
  POST = `${API_WP}/posts`, // https://css-tricks.com/wp-json/wp/v2/posts
  SEARCH = `${API_WP}/search?_embed&per_page=${PER_PAGE}&search=`;

let npage = 1;

let URL_RESOURCES = {
  NAME,
  DOMAIN,
  SITE,
  API_WP,
  PER_PAGE,
  POSTS,
  POST,
  SEARCH,
  npage
};

export default URL_RESOURCES;
