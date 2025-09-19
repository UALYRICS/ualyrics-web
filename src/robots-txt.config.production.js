module.exports = {
  policy: [
    {
      userAgent: "*",
      allow: "/*.js*",
      allow: "/*.css*",
      allow: "/*.js*",
      allow: "/*.jpg*",
      allow: "/*.gif*",
      
      disallow: "/administrator/",
      disallow: "/genius-songs/",
      
    },
  ],
  sitemap: "https://www.ualyrics.com/sitemap.xml",
  host: "https://www.ualyrics.com",
};