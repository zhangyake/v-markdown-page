module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/v-markdown-page/dist/" : "/",
  productionSourceMap: false
};
