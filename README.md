build-rest-api
=========
# REST Client for Node.js - Build.com API

Allows connecting to any API REST and get results as js Object. The client has the following features:

- Provides common method for accessing Build.com API
- Direct or through proxy connection to remote API sites.
- Automatic parsing of XML and JSON response documents as js objects.
- Dynamic path and query parameters and request headers.
- Improved Error handling mechanism (client or specific request)


## Installation

$ npm install git+https://github.com/shawn-crossley/build-rest-api.git

## Usages

### Category Service - [Full Documentation][1]

Get Brands
```javascript
var api = require('build-rest-api'),
client = new api.BuildApiClient(EndPoint, AccessKey);

client.categoryService.brands(82, log);

```


  [1]: docs/CATEGORYSERVICE.md