const markdownIt = require("markdown-it");
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

module.exports = function(eleventyConfig) {
  eleventyConfig.addWatchTarget("_styles");
  eleventyConfig.addPassthroughCopy("_styles");
  eleventyConfig.addPassthroughCopy('node_modules/mermaid/');

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

  eleventyConfig.addPairedShortcode("mermaid", function(data) {
    var container = new JSDOM('<pre class="mermaid"></pre>');
    var pre = container.window.document.querySelector('.mermaid');
    pre.innerHTML = data;
    return container.window.document.body.innerHTML;
  });

  return {
    dir: {
      includes: "../_includes",
      input: "content",
      output: "output"
    }
  };
};
