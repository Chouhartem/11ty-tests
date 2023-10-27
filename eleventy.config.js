const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {
  eleventyConfig.addGlobalData("site", {
    lang: "en",
    title: "Test eleventy",
  });

  let options = {
    html: true,
    breaks: false,
    linkify: true
  };

  eleventyConfig.setLibrary("md", markdownIt(options));

  return {
    dir: {
      includes: "_includes",
      input: "content",
      output: "output"
    }
  };
};
