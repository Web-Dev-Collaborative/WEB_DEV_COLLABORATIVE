var root = process.cwd();
console.log(root);
module.exports = {
    'root': root,
    'paths': {
      'views': root + '/private/views/',
      'config': root + "/private/config",
      'public': root + "/public"
    },
    'env': 'development',
    'port': 3000
};