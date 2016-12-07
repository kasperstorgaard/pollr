SystemJS.config({
  paths: {
    "github:": "jspm_packages/github/",
    "npm:": "jspm_packages/npm/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "ts": "github:frankwallis/plugin-typescript@5.3.1"
    }
  },
  transpiler: "plugin-typescript",
  packages: {
    "src": {
      "defaultExtension": "ts",
      "meta": {
        "*.ts": {
          "loader": "ts"
        },
        "*.css": {
          "loader": "css"
        }
      }
    }
  },
  map: {
    "rxjs/add/operator/distinct": "npm:rxjs@5.0.0-beta.11/add/operator/distinct.js"
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "aurelia-mdl-plugin": "npm:aurelia-mdl-plugin@0.1.16",
    "d3-selection": "npm:d3-selection@1.0.3",
    "d3": "npm:d3@4.4.0",
    "d3-svg": "npm:d3-svg@0.2.0",
    "@horizon/client": "npm:@horizon/client@2.0.0",
    "assert": "npm:jspm-nodelibs-assert@0.2.0",
    "aurelia-binding": "npm:aurelia-binding@1.0.9",
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@1.0.1",
    "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.2.0",
    "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0",
    "aurelia-framework": "npm:aurelia-framework@1.0.7",
    "aurelia-history": "npm:aurelia-history@1.0.0",
    "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0",
    "aurelia-loader": "npm:aurelia-loader@1.0.0",
    "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0",
    "aurelia-logging": "npm:aurelia-logging@1.1.1",
    "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
    "aurelia-metadata": "npm:aurelia-metadata@1.0.2",
    "aurelia-pal": "npm:aurelia-pal@1.0.0",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0",
    "aurelia-path": "npm:aurelia-path@1.1.1",
    "aurelia-polyfills": "npm:aurelia-polyfills@1.1.1",
    "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.1.0",
    "aurelia-router": "npm:aurelia-router@1.0.7",
    "aurelia-task-queue": "npm:aurelia-task-queue@1.1.0",
    "aurelia-templating": "npm:aurelia-templating@1.1.2",
    "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0",
    "aurelia-templating-resources": "npm:aurelia-templating-resources@1.1.1",
    "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.1",
    "child_process": "npm:jspm-nodelibs-child_process@0.2.0",
    "constants": "npm:jspm-nodelibs-constants@0.2.0",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.0",
    "css": "github:systemjs/plugin-css@0.1.32",
    "events": "npm:jspm-nodelibs-events@0.2.0",
    "fs": "npm:jspm-nodelibs-fs@0.2.0",
    "http": "npm:jspm-nodelibs-http@0.2.0",
    "https": "npm:jspm-nodelibs-https@0.2.1",
    "material-design-lite": "github:google/material-design-lite@1.2.1",
    "module": "npm:jspm-nodelibs-module@0.2.0",
    "net": "npm:jspm-nodelibs-net@0.2.0",
    "os": "npm:jspm-nodelibs-os@0.2.0",
    "path": "npm:jspm-nodelibs-path@0.2.1",
    "plugin-typescript": "github:frankwallis/plugin-typescript@5.3.1",
    "process": "npm:jspm-nodelibs-process@0.2.0",
    "rxjs": "npm:rxjs@5.0.0-beta.11",
    "rxjs/Rx": "npm:rxjs@5.0.0-beta.11/Rx.js",
    "stream": "npm:jspm-nodelibs-stream@0.2.0",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.0",
    "tls": "npm:jspm-nodelibs-tls@0.2.0",
    "typescript": "npm:typescript@2.1.1",
    "url": "npm:jspm-nodelibs-url@0.2.0",
    "util": "npm:jspm-nodelibs-util@0.2.1",
    "vm": "npm:jspm-nodelibs-vm@0.2.0",
    "zlib": "npm:jspm-nodelibs-zlib@0.2.2"
  },
  packages: {
    "npm:asn1.js@4.9.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:aurelia-binding@1.0.9": {
      "map": {
        "aurelia-logging": "npm:aurelia-logging@1.1.1",
        "aurelia-metadata": "npm:aurelia-metadata@1.0.2",
        "aurelia-pal": "npm:aurelia-pal@1.0.0",
        "aurelia-task-queue": "npm:aurelia-task-queue@1.1.0"
      }
    },
    "npm:aurelia-bootstrapper@1.0.1": {
      "map": {
        "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0",
        "aurelia-framework": "npm:aurelia-framework@1.0.7",
        "aurelia-history": "npm:aurelia-history@1.0.0",
        "aurelia-history-browser": "npm:aurelia-history-browser@1.0.0",
        "aurelia-loader-default": "npm:aurelia-loader-default@1.0.0",
        "aurelia-logging-console": "npm:aurelia-logging-console@1.0.0",
        "aurelia-pal": "npm:aurelia-pal@1.0.0",
        "aurelia-pal-browser": "npm:aurelia-pal-browser@1.0.0",
        "aurelia-polyfills": "npm:aurelia-polyfills@1.1.1",
        "aurelia-router": "npm:aurelia-router@1.0.7",
        "aurelia-templating": "npm:aurelia-templating@1.1.2",
        "aurelia-templating-binding": "npm:aurelia-templating-binding@1.0.0",
        "aurelia-templating-resources": "npm:aurelia-templating-resources@1.1.1",
        "aurelia-templating-router": "npm:aurelia-templating-router@1.0.0"
      }
    },
    "npm:aurelia-dependency-injection@1.2.0": {
      "map": {
        "aurelia-metadata": "npm:aurelia-metadata@1.0.2",
        "aurelia-pal": "npm:aurelia-pal@1.0.0"
      }
    },
    "npm:aurelia-event-aggregator@1.0.0": {
      "map": {
        "aurelia-logging": "npm:aurelia-logging@1.1.1"
      }
    },
    "npm:aurelia-framework@1.0.7": {
      "map": {
        "aurelia-binding": "npm:aurelia-binding@1.0.9",
        "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.2.0",
        "aurelia-loader": "npm:aurelia-loader@1.0.0",
        "aurelia-logging": "npm:aurelia-logging@1.1.1",
        "aurelia-metadata": "npm:aurelia-metadata@1.0.2",
        "aurelia-pal": "npm:aurelia-pal@1.0.0",
        "aurelia-path": "npm:aurelia-path@1.1.1",
        "aurelia-task-queue": "npm:aurelia-task-queue@1.1.0",
        "aurelia-templating": "npm:aurelia-templating@1.1.2"
      }
    },
    "npm:aurelia-history-browser@1.0.0": {
      "map": {
        "aurelia-history": "npm:aurelia-history@1.0.0",
        "aurelia-pal": "npm:aurelia-pal@1.0.0"
      }
    },
    "npm:aurelia-loader-default@1.0.0": {
      "map": {
        "aurelia-loader": "npm:aurelia-loader@1.0.0",
        "aurelia-metadata": "npm:aurelia-metadata@1.0.2",
        "aurelia-pal": "npm:aurelia-pal@1.0.0"
      }
    },
    "npm:aurelia-loader@1.0.0": {
      "map": {
        "aurelia-metadata": "npm:aurelia-metadata@1.0.2",
        "aurelia-path": "npm:aurelia-path@1.1.1"
      }
    },
    "npm:aurelia-logging-console@1.0.0": {
      "map": {
        "aurelia-logging": "npm:aurelia-logging@1.1.1"
      }
    },
    "npm:aurelia-metadata@1.0.2": {
      "map": {
        "aurelia-pal": "npm:aurelia-pal@1.0.0"
      }
    },
    "npm:aurelia-pal-browser@1.0.0": {
      "map": {
        "aurelia-pal": "npm:aurelia-pal@1.0.0"
      }
    },
    "npm:aurelia-polyfills@1.1.1": {
      "map": {
        "aurelia-pal": "npm:aurelia-pal@1.0.0"
      }
    },
    "npm:aurelia-route-recognizer@1.1.0": {
      "map": {
        "aurelia-path": "npm:aurelia-path@1.1.1"
      }
    },
    "npm:aurelia-router@1.0.7": {
      "map": {
        "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.2.0",
        "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.0",
        "aurelia-history": "npm:aurelia-history@1.0.0",
        "aurelia-logging": "npm:aurelia-logging@1.1.1",
        "aurelia-path": "npm:aurelia-path@1.1.1",
        "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.1.0"
      }
    },
    "npm:aurelia-task-queue@1.1.0": {
      "map": {
        "aurelia-pal": "npm:aurelia-pal@1.0.0"
      }
    },
    "npm:aurelia-templating-binding@1.0.0": {
      "map": {
        "aurelia-binding": "npm:aurelia-binding@1.0.9",
        "aurelia-logging": "npm:aurelia-logging@1.1.1",
        "aurelia-templating": "npm:aurelia-templating@1.1.2"
      }
    },
    "npm:aurelia-templating-resources@1.1.1": {
      "map": {
        "aurelia-binding": "npm:aurelia-binding@1.0.9",
        "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.2.0",
        "aurelia-loader": "npm:aurelia-loader@1.0.0",
        "aurelia-logging": "npm:aurelia-logging@1.1.1",
        "aurelia-metadata": "npm:aurelia-metadata@1.0.2",
        "aurelia-pal": "npm:aurelia-pal@1.0.0",
        "aurelia-path": "npm:aurelia-path@1.1.1",
        "aurelia-task-queue": "npm:aurelia-task-queue@1.1.0",
        "aurelia-templating": "npm:aurelia-templating@1.1.2"
      }
    },
    "npm:aurelia-templating-router@1.0.0": {
      "map": {
        "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.2.0",
        "aurelia-logging": "npm:aurelia-logging@1.1.1",
        "aurelia-metadata": "npm:aurelia-metadata@1.0.2",
        "aurelia-pal": "npm:aurelia-pal@1.0.0",
        "aurelia-path": "npm:aurelia-path@1.1.1",
        "aurelia-router": "npm:aurelia-router@1.0.7",
        "aurelia-templating": "npm:aurelia-templating@1.1.2"
      }
    },
    "npm:aurelia-templating@1.1.2": {
      "map": {
        "aurelia-binding": "npm:aurelia-binding@1.0.9",
        "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.2.0",
        "aurelia-loader": "npm:aurelia-loader@1.0.0",
        "aurelia-logging": "npm:aurelia-logging@1.1.1",
        "aurelia-metadata": "npm:aurelia-metadata@1.0.2",
        "aurelia-pal": "npm:aurelia-pal@1.0.0",
        "aurelia-path": "npm:aurelia-path@1.1.1",
        "aurelia-task-queue": "npm:aurelia-task-queue@1.1.0"
      }
    },
    "npm:bn.js@4.11.6": {
      "map": {}
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "buffer-xor": "npm:buffer-xor@1.0.3",
        "cipher-base": "npm:cipher-base@1.0.3",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "inherits": "npm:inherits@2.0.3",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "browserify-des": "npm:browserify-des@1.0.0",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.3",
        "des.js": "npm:des.js@1.0.0",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:browserify-sign@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "elliptic": "npm:elliptic@6.3.2",
        "inherits": "npm:inherits@2.0.3",
        "parse-asn1": "npm:parse-asn1@5.0.0"
      }
    },
    "npm:buffer-xor@1.0.3": {
      "map": {
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:cipher-base@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:core-util-is@1.0.2": {
      "map": {}
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "elliptic": "npm:elliptic@6.3.2"
      }
    },
    "npm:create-hash@1.1.2": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.3",
        "inherits": "npm:inherits@2.0.3",
        "ripemd160": "npm:ripemd160@1.0.1",
        "sha.js": "npm:sha.js@2.4.8"
      }
    },
    "npm:create-hmac@1.1.4": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "browserify-sign": "npm:browserify-sign@4.0.0",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "create-hash": "npm:create-hash@1.1.2",
        "create-hmac": "npm:create-hmac@1.1.4",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "inherits": "npm:inherits@2.0.3",
        "pbkdf2": "npm:pbkdf2@3.0.9",
        "public-encrypt": "npm:public-encrypt@4.0.0",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "miller-rabin": "npm:miller-rabin@4.0.0",
        "randombytes": "npm:randombytes@2.0.3",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:elliptic@6.3.2": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "brorand": "npm:brorand@1.0.6",
        "hash.js": "npm:hash.js@1.0.3",
        "inherits": "npm:inherits@2.0.3",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.2"
      }
    },
    "npm:hash.js@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "brorand": "npm:brorand@1.0.6"
      }
    },
    "npm:parse-asn1@5.0.0": {
      "map": {
        "asn1.js": "npm:asn1.js@4.9.0",
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "create-hash": "npm:create-hash@1.1.2",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "pbkdf2": "npm:pbkdf2@3.0.9",
        "systemjs-json": "github:systemjs/plugin-json@0.1.2"
      }
    },
    "npm:pbkdf2@3.0.9": {
      "map": {
        "create-hmac": "npm:create-hmac@1.1.4"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "create-hash": "npm:create-hash@1.1.2",
        "parse-asn1": "npm:parse-asn1@5.0.0",
        "randombytes": "npm:randombytes@2.0.3"
      }
    },
    "npm:punycode@1.3.2": {
      "map": {}
    },
    "npm:randombytes@2.0.3": {
      "map": {}
    },
    "npm:ripemd160@1.0.1": {
      "map": {}
    },
    "npm:sha.js@2.4.8": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:string_decoder@0.10.31": {
      "map": {}
    },
    "npm:jspm-nodelibs-crypto@0.2.0": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "npm:jspm-nodelibs-string_decoder@0.2.0": {
      "map": {
        "string_decoder-browserify": "npm:string_decoder@0.10.31"
      }
    },
    "npm:jspm-nodelibs-zlib@0.2.2": {
      "map": {
        "browserify-zlib": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:jspm-nodelibs-http@0.2.0": {
      "map": {
        "http-browserify": "npm:stream-http@2.5.0"
      }
    },
    "npm:stream-http@2.5.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.2.2",
        "builtin-status-codes": "npm:builtin-status-codes@2.0.0",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "xtend": "npm:xtend@4.0.1"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "readable-stream": "npm:readable-stream@2.2.2",
        "pako": "npm:pako@0.2.9"
      }
    },
    "npm:readable-stream@2.2.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "string_decoder": "npm:string_decoder@0.10.31",
        "core-util-is": "npm:core-util-is@1.0.2",
        "isarray": "npm:isarray@1.0.0",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "buffer-shims": "npm:buffer-shims@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.7"
      }
    },
    "npm:@horizon/client@2.0.0": {
      "map": {
        "snake-case": "npm:snake-case@2.1.0",
        "core-js": "npm:core-js@2.4.1",
        "es6-promise": "npm:es6-promise@3.3.1",
        "rxjs": "npm:rxjs@5.0.0-beta.11",
        "babel-runtime": "npm:babel-runtime@6.18.0",
        "ws": "npm:ws@1.1.1",
        "deep-equal": "npm:deep-equal@1.0.1",
        "is-plain-object": "npm:is-plain-object@2.0.1"
      }
    },
    "npm:babel-runtime@6.18.0": {
      "map": {
        "core-js": "npm:core-js@2.4.1",
        "regenerator-runtime": "npm:regenerator-runtime@0.9.6"
      }
    },
    "npm:ws@1.1.1": {
      "map": {
        "bufferutil": "npm:bufferutil@1.2.1",
        "options": "npm:options@0.0.6",
        "ultron": "npm:ultron@1.0.2",
        "utf-8-validate": "npm:utf-8-validate@1.2.1"
      }
    },
    "npm:rxjs@5.0.0-beta.11": {
      "map": {
        "symbol-observable": "npm:symbol-observable@1.0.4"
      }
    },
    "npm:is-plain-object@2.0.1": {
      "map": {
        "isobject": "npm:isobject@1.0.2"
      }
    },
    "npm:snake-case@2.1.0": {
      "map": {
        "no-case": "npm:no-case@2.3.0"
      }
    },
    "npm:bufferutil@1.2.1": {
      "map": {
        "bindings": "npm:bindings@1.2.1",
        "nan": "npm:nan@2.4.0"
      }
    },
    "npm:utf-8-validate@1.2.1": {
      "map": {
        "bindings": "npm:bindings@1.2.1",
        "nan": "npm:nan@2.4.0"
      }
    },
    "npm:no-case@2.3.0": {
      "map": {
        "lower-case": "npm:lower-case@1.1.3"
      }
    },
    "npm:jspm-nodelibs-os@0.2.0": {
      "map": {
        "os-browserify": "npm:os-browserify@0.2.1"
      }
    },
    "npm:jspm-nodelibs-url@0.2.0": {
      "map": {
        "url-browserify": "npm:url@0.11.0"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    },
    "npm:jspm-nodelibs-stream@0.2.0": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:jspm-nodelibs-buffer@0.2.1": {
      "map": {
        "buffer": "npm:buffer@4.9.1"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.2.2"
      }
    },
    "npm:buffer@4.9.1": {
      "map": {
        "isarray": "npm:isarray@1.0.0",
        "ieee754": "npm:ieee754@1.1.8",
        "base64-js": "npm:base64-js@1.2.0"
      }
    },
    "github:frankwallis/plugin-typescript@5.3.1": {
      "map": {
        "typescript": "npm:typescript@2.1.1"
      }
    },
    "npm:source-map-support@0.4.6": {
      "map": {
        "source-map": "npm:source-map@0.5.6"
      }
    },
    "npm:source-map@0.5.6": {
      "map": {}
    },
    "npm:typescript@2.1.1": {
      "map": {
        "source-map-support": "npm:source-map-support@0.4.6"
      }
    },
    "npm:d3-svg@0.2.0": {
      "map": {
        "d3-selection": "npm:d3-selection@0.6.12"
      }
    },
    "npm:d3@4.4.0": {
      "map": {
        "d3-polygon": "npm:d3-polygon@1.0.2",
        "d3-format": "npm:d3-format@1.0.2",
        "d3-geo": "npm:d3-geo@1.4.0",
        "d3-axis": "npm:d3-axis@1.0.4",
        "d3-drag": "npm:d3-drag@1.0.2",
        "d3-zoom": "npm:d3-zoom@1.1.0",
        "d3-path": "npm:d3-path@1.0.3",
        "d3-scale": "npm:d3-scale@1.0.4",
        "d3-chord": "npm:d3-chord@1.0.3",
        "d3-time": "npm:d3-time@1.0.4",
        "d3-queue": "npm:d3-queue@3.0.3",
        "d3-force": "npm:d3-force@1.0.4",
        "d3-color": "npm:d3-color@1.0.2",
        "d3-shape": "npm:d3-shape@1.0.4",
        "d3-interpolate": "npm:d3-interpolate@1.1.2",
        "d3-collection": "npm:d3-collection@1.0.2",
        "d3-array": "npm:d3-array@1.0.2",
        "d3-transition": "npm:d3-transition@1.0.3",
        "d3-quadtree": "npm:d3-quadtree@1.0.2",
        "d3-voronoi": "npm:d3-voronoi@1.1.0",
        "d3-time-format": "npm:d3-time-format@2.0.3",
        "d3-brush": "npm:d3-brush@1.0.3",
        "d3-dsv": "npm:d3-dsv@1.0.3",
        "d3-timer": "npm:d3-timer@1.0.3",
        "d3-ease": "npm:d3-ease@1.0.2",
        "d3-hierarchy": "npm:d3-hierarchy@1.0.3",
        "d3-request": "npm:d3-request@1.0.3",
        "d3-selection": "npm:d3-selection@1.0.3",
        "d3-random": "npm:d3-random@1.0.2",
        "d3-dispatch": "npm:d3-dispatch@1.0.2"
      }
    },
    "npm:d3-zoom@1.1.0": {
      "map": {
        "d3-drag": "npm:d3-drag@1.0.2",
        "d3-interpolate": "npm:d3-interpolate@1.1.2",
        "d3-transition": "npm:d3-transition@1.0.3",
        "d3-selection": "npm:d3-selection@1.0.3",
        "d3-dispatch": "npm:d3-dispatch@1.0.2"
      }
    },
    "npm:d3-geo@1.4.0": {
      "map": {
        "d3-array": "npm:d3-array@1.0.2"
      }
    },
    "npm:d3-drag@1.0.2": {
      "map": {
        "d3-selection": "npm:d3-selection@1.0.3",
        "d3-dispatch": "npm:d3-dispatch@1.0.2"
      }
    },
    "npm:d3-scale@1.0.4": {
      "map": {
        "d3-format": "npm:d3-format@1.0.2",
        "d3-array": "npm:d3-array@1.0.2",
        "d3-collection": "npm:d3-collection@1.0.2",
        "d3-color": "npm:d3-color@1.0.2",
        "d3-interpolate": "npm:d3-interpolate@1.1.2",
        "d3-time": "npm:d3-time@1.0.4",
        "d3-time-format": "npm:d3-time-format@2.0.3"
      }
    },
    "npm:d3-chord@1.0.3": {
      "map": {
        "d3-path": "npm:d3-path@1.0.3",
        "d3-array": "npm:d3-array@1.0.2"
      }
    },
    "npm:d3-shape@1.0.4": {
      "map": {
        "d3-path": "npm:d3-path@1.0.3"
      }
    },
    "npm:d3-force@1.0.4": {
      "map": {
        "d3-collection": "npm:d3-collection@1.0.2",
        "d3-dispatch": "npm:d3-dispatch@1.0.2",
        "d3-quadtree": "npm:d3-quadtree@1.0.2",
        "d3-timer": "npm:d3-timer@1.0.3"
      }
    },
    "npm:d3-interpolate@1.1.2": {
      "map": {
        "d3-color": "npm:d3-color@1.0.2"
      }
    },
    "npm:d3-transition@1.0.3": {
      "map": {
        "d3-color": "npm:d3-color@1.0.2",
        "d3-dispatch": "npm:d3-dispatch@1.0.2",
        "d3-ease": "npm:d3-ease@1.0.2",
        "d3-interpolate": "npm:d3-interpolate@1.1.2",
        "d3-selection": "npm:d3-selection@1.0.3",
        "d3-timer": "npm:d3-timer@1.0.3"
      }
    },
    "npm:d3-brush@1.0.3": {
      "map": {
        "d3-dispatch": "npm:d3-dispatch@1.0.2",
        "d3-drag": "npm:d3-drag@1.0.2",
        "d3-interpolate": "npm:d3-interpolate@1.1.2",
        "d3-selection": "npm:d3-selection@1.0.3",
        "d3-transition": "npm:d3-transition@1.0.3"
      }
    },
    "npm:d3-request@1.0.3": {
      "map": {
        "d3-collection": "npm:d3-collection@1.0.2",
        "d3-dispatch": "npm:d3-dispatch@1.0.2",
        "d3-dsv": "npm:d3-dsv@1.0.3",
        "xmlhttprequest": "npm:xmlhttprequest@1.8.0"
      }
    },
    "npm:d3-time-format@2.0.3": {
      "map": {
        "d3-time": "npm:d3-time@1.0.4"
      }
    },
    "npm:d3-dsv@1.0.3": {
      "map": {
        "iconv-lite": "npm:iconv-lite@0.4.15",
        "commander": "npm:commander@2.9.0",
        "rw": "npm:rw@1.3.2"
      }
    },
    "npm:commander@2.9.0": {
      "map": {
        "graceful-readlink": "npm:graceful-readlink@1.0.1"
      }
    }
  }
});
