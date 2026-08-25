module.exports = function(eleventyConfig) {
  // আপনার যদি আলাদা কোনো ছবি, robots.txt বা sitemap থাকে, সেগুলোকে সরাসরি আউটপুটে পাঠাতে
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("sitemap.xml");

  return {
    dir: {
      input: ".", // বর্তমান ফোল্ডার থেকেই সব ফাইল নেবে
      output: "_site", // ভার্সেল এই ফোল্ডারটাকে লাইভ করবে
      includes: "_includes" // এর ভেতর আমরা ওয়েবসাইটের কমন হেডার-ফুটার টেমপ্লেট রাখব
    }
  };
};
