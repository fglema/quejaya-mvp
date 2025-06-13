// .eleventy.js
module.exports = function(eleventyConfig) {
  // Copy every file in src/images/ into the output's "images/" folder
  eleventyConfig.addPassthroughCopy({ "src/images": "images" });

  return {
    dir: {
      input:  "src",   // <-- your source templates live here
      output: "_site"  // <-- Eleventy writes the build here
    }
  };
};
