const testContext = require.context('./test', true, /\.es$/);

testContext.keys().forEach(testContext);