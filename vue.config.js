module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/v-markdown-page/dist/" : "/",
  // 强制内联CSS
  css: { extract: false }
};
