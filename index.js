module.exports = require("js-yaml").safeLoad(
  require("fs").readFileSync(
    require.resolve("./.eslintrc.yml")
  )
);
