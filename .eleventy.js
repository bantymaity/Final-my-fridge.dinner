module.exports = function(eleventyConfig) {
  // আপনার সমস্ত HTML এবং অন্যান্য প্রয়োজনীয় ফাইল সরাসরি লাইভ সাইটে কপি করার কমান্ড
  eleventyConfig.addPassthroughCopy("*.html"); 
  eleventyConfig.addPassthroughCopy("robots.txt");
 return {
    dir: {
      input: ".", 
      output: "_site", 
      includes: "_includes" 
    },
    // কোন কোন ফরম্যাটের ফাইল প্রসেস হবে, তা নির্দিষ্ট করে দেওয়া
    templateFormats: ["md", "njk", "html"] 
  };
};
