const { override, fixBabelImports,setWebpackPublicPath } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  // setWebpackPublicPath('/axios-brige-swagger-tool')
);