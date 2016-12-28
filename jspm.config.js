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
    "rxjs/add/operator/distinct": "npm:rxjs@5.0.0-beta.11/add/operator/distinct.js",
    "rxjs/Rx": "npm:rxjs@5.0.0-beta.11/Rx.js"
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "ava": "npm:ava@0.17.0",
    "bcrypt-pbkdf": "npm:bcrypt-pbkdf@1.0.0",
    "dgram": "npm:jspm-nodelibs-dgram@0.2.0",
    "dns": "npm:jspm-nodelibs-dns@0.2.0",
    "ecc-jsbn": "npm:ecc-jsbn@0.1.1",
    "fsevents": "npm:fsevents@1.0.15",
    "jodid25519": "npm:jodid25519@1.0.2",
    "jsbn": "npm:jsbn@0.1.0",
    "querystring": "npm:jspm-nodelibs-querystring@0.2.0",
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
    "stream": "npm:jspm-nodelibs-stream@0.2.0",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.0",
    "tape": "npm:tape@4.6.3",
    "testdouble": "github:testdouble/testdouble.js@master",
    "tls": "npm:jspm-nodelibs-tls@0.2.0",
    "tty": "npm:jspm-nodelibs-tty@0.2.0",
    "tweetnacl": "npm:tweetnacl@0.14.5",
    "url": "npm:jspm-nodelibs-url@0.2.0",
    "util": "npm:jspm-nodelibs-util@0.2.1",
    "vm": "npm:jspm-nodelibs-vm@0.2.0",
    "zlib": "npm:jspm-nodelibs-zlib@0.2.2"
  },
  packages: {
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
        "asn1.js": "npm:asn1.js@4.9.1",
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
    },
    "npm:ava@0.17.0": {
      "map": {
        "array-uniq": "npm:array-uniq@1.0.3",
        "babel-code-frame": "npm:babel-code-frame@6.20.0",
        "ms": "npm:ms@0.7.2",
        "array-union": "npm:array-union@1.0.2",
        "arr-flatten": "npm:arr-flatten@1.0.1",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "source-map-support": "npm:source-map-support@0.4.7",
        "babel-plugin-transform-runtime": "npm:babel-plugin-transform-runtime@6.15.0",
        "arrify": "npm:arrify@1.0.1",
        "cli-cursor": "npm:cli-cursor@1.0.2",
        "babel-preset-es2015": "npm:babel-preset-es2015@6.18.0",
        "babel-preset-stage-2": "npm:babel-preset-stage-2@6.18.0",
        "is-obj": "npm:is-obj@1.0.1",
        "cli-truncate": "npm:cli-truncate@0.2.1",
        "cli-spinners": "npm:cli-spinners@0.1.2",
        "currently-unhandled": "npm:currently-unhandled@0.4.1",
        "find-cache-dir": "npm:find-cache-dir@0.1.1",
        "has-flag": "npm:has-flag@2.0.0",
        "is-promise": "npm:is-promise@2.1.0",
        "repeating": "npm:repeating@2.0.1",
        "strip-bom": "npm:strip-bom@2.0.0",
        "md5-hex": "npm:md5-hex@1.3.0",
        "meow": "npm:meow@3.7.0",
        "figures": "npm:figures@1.7.0",
        "babel-preset-es2015-node4": "npm:babel-preset-es2015-node4@2.1.1",
        "is-ci": "npm:is-ci@1.0.10",
        "fn-name": "npm:fn-name@2.0.1",
        "resolve-cwd": "npm:resolve-cwd@1.0.0",
        "plur": "npm:plur@2.1.2",
        "convert-source-map": "npm:convert-source-map@1.3.0",
        "object-assign": "npm:object-assign@4.1.0",
        "loud-rejection": "npm:loud-rejection@1.6.0",
        "auto-bind": "npm:auto-bind@0.1.0",
        "set-immediate-shim": "npm:set-immediate-shim@1.0.1",
        "pkg-conf": "npm:pkg-conf@1.1.3",
        "ava-init": "npm:ava-init@0.1.6",
        "is-observable": "npm:is-observable@0.2.0",
        "is-generator-fn": "npm:is-generator-fn@1.0.0",
        "last-line-stream": "npm:last-line-stream@1.0.0",
        "clean-yaml-object": "npm:clean-yaml-object@0.1.0",
        "observable-to-promise": "npm:observable-to-promise@0.4.0",
        "power-assert-renderer-succinct": "npm:power-assert-renderer-succinct@1.1.1",
        "unique-temp-dir": "npm:unique-temp-dir@1.0.0",
        "option-chain": "npm:option-chain@0.1.1",
        "lodash.debounce": "npm:lodash.debounce@4.0.8",
        "co-with-promise": "npm:co-with-promise@4.6.0",
        "time-require": "npm:time-require@0.1.2",
        "caching-transform": "npm:caching-transform@1.0.1",
        "package-hash": "npm:package-hash@1.2.0",
        "power-assert-context-formatter": "npm:power-assert-context-formatter@1.1.1",
        "lodash.isequal": "npm:lodash.isequal@4.4.0",
        "pretty-ms": "npm:pretty-ms@2.1.0",
        "babel-plugin-detective": "npm:babel-plugin-detective@2.0.0",
        "chalk": "npm:chalk@1.1.3",
        "empower-core": "npm:empower-core@0.6.1",
        "lodash.difference": "npm:lodash.difference@4.5.0",
        "update-notifier": "npm:update-notifier@1.0.3",
        "debug": "npm:debug@2.5.1",
        "babel-plugin-espower": "npm:babel-plugin-espower@2.3.1",
        "ava-files": "npm:ava-files@0.2.0",
        "get-port": "npm:get-port@2.1.0",
        "ignore-by-default": "npm:ignore-by-default@1.0.1",
        "matcher": "npm:matcher@0.1.2",
        "babel-plugin-ava-throws-helper": "npm:babel-plugin-ava-throws-helper@0.1.0",
        "semver": "npm:semver@5.3.0",
        "common-path-prefix": "npm:common-path-prefix@1.0.0",
        "require-precompiled": "npm:require-precompiled@0.1.0",
        "max-timeout": "npm:max-timeout@1.0.0",
        "power-assert-renderer-assertion": "npm:power-assert-renderer-assertion@1.1.1",
        "core-assert": "npm:core-assert@0.2.1",
        "stack-utils": "npm:stack-utils@0.4.0",
        "chokidar": "npm:chokidar@1.6.1",
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "babel-core": "npm:babel-core@6.21.0",
        "bluebird": "npm:bluebird@3.4.6"
      }
    },
    "npm:array-union@1.0.2": {
      "map": {
        "array-uniq": "npm:array-uniq@1.0.3"
      }
    },
    "npm:babel-code-frame@6.20.0": {
      "map": {
        "chalk": "npm:chalk@1.1.3",
        "js-tokens": "npm:js-tokens@2.0.0",
        "esutils": "npm:esutils@2.0.2"
      }
    },
    "npm:figures@1.7.0": {
      "map": {
        "object-assign": "npm:object-assign@4.1.0",
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5"
      }
    },
    "npm:meow@3.7.0": {
      "map": {
        "loud-rejection": "npm:loud-rejection@1.6.0",
        "object-assign": "npm:object-assign@4.1.0",
        "minimist": "npm:minimist@1.2.0",
        "camelcase-keys": "npm:camelcase-keys@2.1.0",
        "redent": "npm:redent@1.0.0",
        "map-obj": "npm:map-obj@1.0.1",
        "read-pkg-up": "npm:read-pkg-up@1.0.1",
        "trim-newlines": "npm:trim-newlines@1.0.0",
        "decamelize": "npm:decamelize@1.2.0",
        "normalize-package-data": "npm:normalize-package-data@2.3.5"
      }
    },
    "npm:loud-rejection@1.6.0": {
      "map": {
        "currently-unhandled": "npm:currently-unhandled@0.4.1",
        "signal-exit": "npm:signal-exit@3.0.2"
      }
    },
    "npm:pkg-conf@1.1.3": {
      "map": {
        "object-assign": "npm:object-assign@4.1.0",
        "find-up": "npm:find-up@1.1.2",
        "load-json-file": "npm:load-json-file@1.1.0",
        "symbol": "npm:symbol@0.2.3"
      }
    },
    "npm:option-chain@0.1.1": {
      "map": {
        "object-assign": "npm:object-assign@4.1.0"
      }
    },
    "npm:observable-to-promise@0.4.0": {
      "map": {
        "is-observable": "npm:is-observable@0.2.0",
        "symbol-observable": "npm:symbol-observable@0.2.4"
      }
    },
    "npm:time-require@0.1.2": {
      "map": {
        "chalk": "npm:chalk@0.4.0",
        "pretty-ms": "npm:pretty-ms@0.2.2",
        "date-time": "npm:date-time@0.1.1",
        "text-table": "npm:text-table@0.2.0"
      }
    },
    "npm:caching-transform@1.0.1": {
      "map": {
        "md5-hex": "npm:md5-hex@1.3.0",
        "mkdirp": "npm:mkdirp@0.5.1",
        "write-file-atomic": "npm:write-file-atomic@1.2.0"
      }
    },
    "npm:package-hash@1.2.0": {
      "map": {
        "md5-hex": "npm:md5-hex@1.3.0"
      }
    },
    "npm:pretty-ms@2.1.0": {
      "map": {
        "plur": "npm:plur@1.0.0",
        "is-finite": "npm:is-finite@1.0.2",
        "parse-ms": "npm:parse-ms@1.0.1"
      }
    },
    "npm:chalk@1.1.3": {
      "map": {
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
        "has-ansi": "npm:has-ansi@2.0.0",
        "ansi-styles": "npm:ansi-styles@2.2.1",
        "supports-color": "npm:supports-color@2.0.0"
      }
    },
    "npm:strip-ansi@3.0.1": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "npm:update-notifier@1.0.3": {
      "map": {
        "chalk": "npm:chalk@1.1.3",
        "is-npm": "npm:is-npm@1.0.0",
        "xdg-basedir": "npm:xdg-basedir@2.0.0",
        "lazy-req": "npm:lazy-req@1.1.0",
        "semver-diff": "npm:semver-diff@2.1.0",
        "latest-version": "npm:latest-version@2.0.0",
        "boxen": "npm:boxen@0.6.0",
        "configstore": "npm:configstore@2.1.0"
      }
    },
    "npm:ava-files@0.2.0": {
      "map": {
        "auto-bind": "npm:auto-bind@0.1.0",
        "ignore-by-default": "npm:ignore-by-default@1.0.1",
        "slash": "npm:slash@1.0.0",
        "multimatch": "npm:multimatch@2.1.0",
        "lodash.flatten": "npm:lodash.flatten@4.4.0",
        "globby": "npm:globby@6.1.0",
        "bluebird": "npm:bluebird@3.4.6"
      }
    },
    "npm:babel-plugin-transform-runtime@6.15.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0"
      }
    },
    "npm:chalk@0.4.0": {
      "map": {
        "strip-ansi": "npm:strip-ansi@0.1.1",
        "has-color": "npm:has-color@0.1.7",
        "ansi-styles": "npm:ansi-styles@1.0.0"
      }
    },
    "npm:cli-cursor@1.0.2": {
      "map": {
        "restore-cursor": "npm:restore-cursor@1.0.1"
      }
    },
    "npm:babel-preset-es2015@6.18.0": {
      "map": {
        "babel-plugin-transform-es2015-duplicate-keys": "npm:babel-plugin-transform-es2015-duplicate-keys@6.8.0",
        "babel-plugin-transform-es2015-literals": "npm:babel-plugin-transform-es2015-literals@6.8.0",
        "babel-plugin-transform-es2015-sticky-regex": "npm:babel-plugin-transform-es2015-sticky-regex@6.8.0",
        "babel-plugin-transform-es2015-unicode-regex": "npm:babel-plugin-transform-es2015-unicode-regex@6.11.0",
        "babel-plugin-transform-es2015-for-of": "npm:babel-plugin-transform-es2015-for-of@6.18.0",
        "babel-plugin-transform-es2015-block-scoped-functions": "npm:babel-plugin-transform-es2015-block-scoped-functions@6.8.0",
        "babel-plugin-transform-es2015-object-super": "npm:babel-plugin-transform-es2015-object-super@6.8.0",
        "babel-plugin-transform-es2015-template-literals": "npm:babel-plugin-transform-es2015-template-literals@6.8.0",
        "babel-plugin-transform-es2015-arrow-functions": "npm:babel-plugin-transform-es2015-arrow-functions@6.8.0",
        "babel-plugin-transform-es2015-spread": "npm:babel-plugin-transform-es2015-spread@6.8.0",
        "babel-plugin-transform-es2015-shorthand-properties": "npm:babel-plugin-transform-es2015-shorthand-properties@6.18.0",
        "babel-plugin-transform-es2015-computed-properties": "npm:babel-plugin-transform-es2015-computed-properties@6.8.0",
        "babel-plugin-check-es2015-constants": "npm:babel-plugin-check-es2015-constants@6.8.0",
        "babel-plugin-transform-es2015-typeof-symbol": "npm:babel-plugin-transform-es2015-typeof-symbol@6.18.0",
        "babel-plugin-transform-es2015-destructuring": "npm:babel-plugin-transform-es2015-destructuring@6.19.0",
        "babel-plugin-transform-es2015-modules-umd": "npm:babel-plugin-transform-es2015-modules-umd@6.18.0",
        "babel-plugin-transform-es2015-modules-amd": "npm:babel-plugin-transform-es2015-modules-amd@6.18.0",
        "babel-plugin-transform-es2015-function-name": "npm:babel-plugin-transform-es2015-function-name@6.9.0",
        "babel-plugin-transform-es2015-block-scoping": "npm:babel-plugin-transform-es2015-block-scoping@6.21.0",
        "babel-plugin-transform-es2015-modules-systemjs": "npm:babel-plugin-transform-es2015-modules-systemjs@6.19.0",
        "babel-plugin-transform-es2015-classes": "npm:babel-plugin-transform-es2015-classes@6.18.0",
        "babel-plugin-transform-es2015-modules-commonjs": "npm:babel-plugin-transform-es2015-modules-commonjs@6.18.0",
        "babel-plugin-transform-es2015-parameters": "npm:babel-plugin-transform-es2015-parameters@6.21.0",
        "babel-plugin-transform-regenerator": "npm:babel-plugin-transform-regenerator@6.21.0"
      }
    },
    "npm:babel-preset-es2015-node4@2.1.1": {
      "map": {
        "babel-plugin-transform-es2015-sticky-regex": "npm:babel-plugin-transform-es2015-sticky-regex@6.8.0",
        "babel-plugin-transform-es2015-unicode-regex": "npm:babel-plugin-transform-es2015-unicode-regex@6.11.0",
        "babel-plugin-transform-es2015-spread": "npm:babel-plugin-transform-es2015-spread@6.8.0",
        "babel-plugin-transform-es2015-shorthand-properties": "npm:babel-plugin-transform-es2015-shorthand-properties@6.18.0",
        "babel-plugin-transform-es2015-destructuring": "npm:babel-plugin-transform-es2015-destructuring@6.19.0",
        "babel-plugin-transform-es2015-function-name": "npm:babel-plugin-transform-es2015-function-name@6.9.0",
        "babel-plugin-transform-es2015-modules-commonjs": "npm:babel-plugin-transform-es2015-modules-commonjs@6.18.0",
        "babel-plugin-transform-es2015-parameters": "npm:babel-plugin-transform-es2015-parameters@6.21.0"
      }
    },
    "npm:matcher@0.1.2": {
      "map": {
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5"
      }
    },
    "npm:debug@2.5.1": {
      "map": {
        "ms": "npm:ms@0.7.2"
      }
    },
    "npm:babel-preset-stage-2@6.18.0": {
      "map": {
        "babel-plugin-syntax-dynamic-import": "npm:babel-plugin-syntax-dynamic-import@6.18.0",
        "babel-preset-stage-3": "npm:babel-preset-stage-3@6.17.0",
        "babel-plugin-transform-decorators": "npm:babel-plugin-transform-decorators@6.13.0",
        "babel-plugin-transform-class-properties": "npm:babel-plugin-transform-class-properties@6.19.0"
      }
    },
    "npm:unique-temp-dir@1.0.0": {
      "map": {
        "os-tmpdir": "npm:os-tmpdir@1.0.2",
        "mkdirp": "npm:mkdirp@0.5.1",
        "uid2": "npm:uid2@0.0.3"
      }
    },
    "npm:is-observable@0.2.0": {
      "map": {
        "symbol-observable": "npm:symbol-observable@0.2.4"
      }
    },
    "npm:source-map-support@0.4.7": {
      "map": {
        "source-map": "npm:source-map@0.5.6"
      }
    },
    "npm:cli-truncate@0.2.1": {
      "map": {
        "slice-ansi": "npm:slice-ansi@0.0.4",
        "string-width": "npm:string-width@1.0.2"
      }
    },
    "npm:currently-unhandled@0.4.1": {
      "map": {
        "array-find-index": "npm:array-find-index@1.0.2"
      }
    },
    "npm:find-cache-dir@0.1.1": {
      "map": {
        "commondir": "npm:commondir@1.0.1",
        "pkg-dir": "npm:pkg-dir@1.0.0",
        "mkdirp": "npm:mkdirp@0.5.1"
      }
    },
    "npm:strip-bom@2.0.0": {
      "map": {
        "is-utf8": "npm:is-utf8@0.2.1"
      }
    },
    "npm:repeating@2.0.1": {
      "map": {
        "is-finite": "npm:is-finite@1.0.2"
      }
    },
    "npm:md5-hex@1.3.0": {
      "map": {
        "md5-o-matic": "npm:md5-o-matic@0.1.1"
      }
    },
    "npm:is-ci@1.0.10": {
      "map": {
        "ci-info": "npm:ci-info@1.0.0"
      }
    },
    "npm:ava-init@0.1.6": {
      "map": {
        "read-pkg-up": "npm:read-pkg-up@1.0.1",
        "pinkie-promise": "npm:pinkie-promise@2.0.1",
        "arr-exclude": "npm:arr-exclude@1.0.0",
        "write-pkg": "npm:write-pkg@1.0.0",
        "the-argv": "npm:the-argv@1.0.0",
        "cross-spawn": "npm:cross-spawn@4.0.2"
      }
    },
    "npm:resolve-cwd@1.0.0": {
      "map": {
        "resolve-from": "npm:resolve-from@2.0.0"
      }
    },
    "npm:plur@2.1.2": {
      "map": {
        "irregular-plurals": "npm:irregular-plurals@1.2.0"
      }
    },
    "npm:co-with-promise@4.6.0": {
      "map": {
        "pinkie-promise": "npm:pinkie-promise@1.0.0"
      }
    },
    "npm:get-port@2.1.0": {
      "map": {
        "pinkie-promise": "npm:pinkie-promise@2.0.1"
      }
    },
    "npm:babel-plugin-transform-es2015-duplicate-keys@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "babel-types": "npm:babel-types@6.21.0"
      }
    },
    "npm:babel-plugin-transform-es2015-literals@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0"
      }
    },
    "npm:babel-plugin-transform-es2015-sticky-regex@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "babel-types": "npm:babel-types@6.21.0",
        "babel-helper-regex": "npm:babel-helper-regex@6.18.0"
      }
    },
    "npm:babel-plugin-transform-es2015-unicode-regex@6.11.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "babel-helper-regex": "npm:babel-helper-regex@6.18.0",
        "regexpu-core": "npm:regexpu-core@2.0.0"
      }
    },
    "npm:babel-plugin-transform-es2015-for-of@6.18.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0"
      }
    },
    "npm:babel-plugin-transform-es2015-block-scoped-functions@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0"
      }
    },
    "npm:chokidar@1.6.1": {
      "map": {
        "path-is-absolute": "npm:path-is-absolute@1.0.1",
        "inherits": "npm:inherits@2.0.3",
        "is-binary-path": "npm:is-binary-path@1.0.1",
        "async-each": "npm:async-each@1.0.1",
        "glob-parent": "npm:glob-parent@2.0.0",
        "anymatch": "npm:anymatch@1.3.0",
        "is-glob": "npm:is-glob@2.0.1",
        "readdirp": "npm:readdirp@2.1.0"
      }
    },
    "npm:babel-plugin-transform-es2015-object-super@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "babel-helper-replace-supers": "npm:babel-helper-replace-supers@6.18.0"
      }
    },
    "npm:babel-plugin-transform-es2015-template-literals@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0"
      }
    },
    "npm:babel-plugin-transform-es2015-spread@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0"
      }
    },
    "npm:babel-plugin-transform-es2015-arrow-functions@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0"
      }
    },
    "npm:babel-plugin-transform-es2015-computed-properties@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "babel-template": "npm:babel-template@6.16.0",
        "babel-helper-define-map": "npm:babel-helper-define-map@6.18.0"
      }
    },
    "npm:babel-plugin-transform-es2015-shorthand-properties@6.18.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "babel-types": "npm:babel-types@6.21.0"
      }
    },
    "npm:babel-plugin-check-es2015-constants@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0"
      }
    },
    "npm:babel-plugin-transform-es2015-destructuring@6.19.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0"
      }
    },
    "npm:babel-plugin-transform-es2015-typeof-symbol@6.18.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0"
      }
    },
    "npm:babel-plugin-transform-es2015-modules-umd@6.18.0": {
      "map": {
        "babel-plugin-transform-es2015-modules-amd": "npm:babel-plugin-transform-es2015-modules-amd@6.18.0",
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "babel-template": "npm:babel-template@6.16.0"
      }
    },
    "npm:babel-plugin-transform-es2015-modules-amd@6.18.0": {
      "map": {
        "babel-plugin-transform-es2015-modules-commonjs": "npm:babel-plugin-transform-es2015-modules-commonjs@6.18.0",
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "babel-template": "npm:babel-template@6.16.0"
      }
    },
    "npm:babel-plugin-transform-es2015-function-name@6.9.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "babel-types": "npm:babel-types@6.21.0",
        "babel-helper-function-name": "npm:babel-helper-function-name@6.18.0"
      }
    },
    "npm:power-assert-context-formatter@1.1.1": {
      "map": {
        "power-assert-context-traversal": "npm:power-assert-context-traversal@1.1.1",
        "core-js": "npm:core-js@2.4.1"
      }
    },
    "npm:power-assert-renderer-succinct@1.1.1": {
      "map": {
        "power-assert-renderer-diagram": "npm:power-assert-renderer-diagram@1.1.1",
        "core-js": "npm:core-js@2.4.1"
      }
    },
    "npm:babel-plugin-transform-es2015-modules-systemjs@6.19.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "babel-template": "npm:babel-template@6.16.0",
        "babel-helper-hoist-variables": "npm:babel-helper-hoist-variables@6.18.0"
      }
    },
    "npm:babel-plugin-transform-es2015-modules-commonjs@6.18.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "babel-template": "npm:babel-template@6.16.0",
        "babel-types": "npm:babel-types@6.21.0",
        "babel-plugin-transform-strict-mode": "npm:babel-plugin-transform-strict-mode@6.18.0"
      }
    },
    "npm:babel-plugin-transform-es2015-block-scoping@6.21.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "babel-template": "npm:babel-template@6.16.0",
        "babel-types": "npm:babel-types@6.21.0",
        "lodash": "npm:lodash@4.17.2",
        "babel-traverse": "npm:babel-traverse@6.21.0"
      }
    },
    "npm:babel-plugin-transform-es2015-classes@6.18.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "babel-template": "npm:babel-template@6.16.0",
        "babel-types": "npm:babel-types@6.21.0",
        "babel-helper-function-name": "npm:babel-helper-function-name@6.18.0",
        "babel-helper-define-map": "npm:babel-helper-define-map@6.18.0",
        "babel-helper-replace-supers": "npm:babel-helper-replace-supers@6.18.0",
        "babel-helper-optimise-call-expression": "npm:babel-helper-optimise-call-expression@6.18.0",
        "babel-messages": "npm:babel-messages@6.8.0",
        "babel-traverse": "npm:babel-traverse@6.21.0"
      }
    },
    "npm:babel-plugin-transform-es2015-parameters@6.21.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "babel-template": "npm:babel-template@6.16.0",
        "babel-types": "npm:babel-types@6.21.0",
        "babel-helper-call-delegate": "npm:babel-helper-call-delegate@6.18.0",
        "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.18.0",
        "babel-traverse": "npm:babel-traverse@6.21.0"
      }
    },
    "npm:pretty-ms@0.2.2": {
      "map": {
        "parse-ms": "npm:parse-ms@0.1.2"
      }
    },
    "npm:empower-core@0.6.1": {
      "map": {
        "call-signature": "npm:call-signature@0.0.2",
        "core-js": "npm:core-js@2.4.1"
      }
    },
    "npm:babel-plugin-transform-decorators@6.13.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "babel-template": "npm:babel-template@6.16.0",
        "babel-types": "npm:babel-types@6.21.0",
        "babel-helper-define-map": "npm:babel-helper-define-map@6.18.0",
        "babel-plugin-syntax-decorators": "npm:babel-plugin-syntax-decorators@6.13.0",
        "babel-helper-explode-class": "npm:babel-helper-explode-class@6.18.0"
      }
    },
    "npm:string-width@1.0.2": {
      "map": {
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "is-fullwidth-code-point": "npm:is-fullwidth-code-point@1.0.0",
        "code-point-at": "npm:code-point-at@1.1.0"
      }
    },
    "npm:pkg-dir@1.0.0": {
      "map": {
        "find-up": "npm:find-up@1.1.2"
      }
    },
    "npm:camelcase-keys@2.1.0": {
      "map": {
        "map-obj": "npm:map-obj@1.0.1",
        "camelcase": "npm:camelcase@2.1.1"
      }
    },
    "npm:babel-plugin-transform-class-properties@6.19.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "babel-template": "npm:babel-template@6.16.0",
        "babel-helper-function-name": "npm:babel-helper-function-name@6.18.0",
        "babel-plugin-syntax-class-properties": "npm:babel-plugin-syntax-class-properties@6.13.0"
      }
    },
    "npm:find-up@1.1.2": {
      "map": {
        "pinkie-promise": "npm:pinkie-promise@2.0.1",
        "path-exists": "npm:path-exists@2.1.0"
      }
    },
    "npm:read-pkg-up@1.0.1": {
      "map": {
        "find-up": "npm:find-up@1.1.2",
        "read-pkg": "npm:read-pkg@1.1.0"
      }
    },
    "npm:load-json-file@1.1.0": {
      "map": {
        "pinkie-promise": "npm:pinkie-promise@2.0.1",
        "strip-bom": "npm:strip-bom@2.0.0",
        "parse-json": "npm:parse-json@2.2.0",
        "pify": "npm:pify@2.3.0",
        "graceful-fs": "npm:graceful-fs@4.1.11"
      }
    },
    "npm:mkdirp@0.5.1": {
      "map": {
        "minimist": "npm:minimist@0.0.8"
      }
    },
    "npm:last-line-stream@1.0.0": {
      "map": {
        "through2": "npm:through2@2.0.3"
      }
    },
    "npm:babel-plugin-espower@2.3.1": {
      "map": {
        "espower-location-detector": "npm:espower-location-detector@0.1.2",
        "call-matcher": "npm:call-matcher@1.0.0",
        "estraverse": "npm:estraverse@4.2.0",
        "espurify": "npm:espurify@1.6.0",
        "babel-generator": "npm:babel-generator@6.21.0",
        "babylon": "npm:babylon@6.14.1",
        "core-js": "npm:core-js@2.4.1"
      }
    },
    "npm:power-assert-renderer-assertion@1.1.1": {
      "map": {
        "power-assert-util-string-width": "npm:power-assert-util-string-width@1.1.1",
        "power-assert-renderer-base": "npm:power-assert-renderer-base@1.1.1"
      }
    },
    "npm:core-assert@0.2.1": {
      "map": {
        "buf-compare": "npm:buf-compare@1.0.1",
        "is-error": "npm:is-error@2.2.1"
      }
    },
    "npm:babel-plugin-ava-throws-helper@0.1.0": {
      "map": {
        "babel-template": "npm:babel-template@6.16.0",
        "babel-types": "npm:babel-types@6.21.0"
      }
    },
    "npm:power-assert-context-traversal@1.1.1": {
      "map": {
        "estraverse": "npm:estraverse@4.2.0",
        "core-js": "npm:core-js@2.4.1"
      }
    },
    "npm:power-assert-renderer-diagram@1.1.1": {
      "map": {
        "power-assert-renderer-base": "npm:power-assert-renderer-base@1.1.1",
        "power-assert-util-string-width": "npm:power-assert-util-string-width@1.1.1",
        "stringifier": "npm:stringifier@1.3.0",
        "core-js": "npm:core-js@2.4.1"
      }
    },
    "npm:normalize-package-data@2.3.5": {
      "map": {
        "semver": "npm:semver@5.3.0",
        "is-builtin-module": "npm:is-builtin-module@1.0.0",
        "validate-npm-package-license": "npm:validate-npm-package-license@3.0.1",
        "hosted-git-info": "npm:hosted-git-info@2.1.5"
      }
    },
    "npm:multimatch@2.1.0": {
      "map": {
        "array-union": "npm:array-union@1.0.2",
        "arrify": "npm:arrify@1.0.1",
        "minimatch": "npm:minimatch@3.0.3",
        "array-differ": "npm:array-differ@1.0.0"
      }
    },
    "npm:babel-runtime@6.20.0": {
      "map": {
        "regenerator-runtime": "npm:regenerator-runtime@0.10.1",
        "core-js": "npm:core-js@2.4.1"
      }
    },
    "npm:restore-cursor@1.0.1": {
      "map": {
        "onetime": "npm:onetime@1.1.0",
        "exit-hook": "npm:exit-hook@1.1.1"
      }
    },
    "npm:espower-location-detector@0.1.2": {
      "map": {
        "source-map": "npm:source-map@0.5.6",
        "path-is-absolute": "npm:path-is-absolute@1.0.1",
        "xtend": "npm:xtend@4.0.1",
        "is-url": "npm:is-url@1.2.2"
      }
    },
    "npm:semver-diff@2.1.0": {
      "map": {
        "semver": "npm:semver@5.3.0"
      }
    },
    "npm:call-matcher@1.0.0": {
      "map": {
        "espurify": "npm:espurify@1.6.0",
        "estraverse": "npm:estraverse@4.2.0",
        "deep-equal": "npm:deep-equal@1.0.1",
        "core-js": "npm:core-js@2.4.1"
      }
    },
    "npm:boxen@0.6.0": {
      "map": {
        "chalk": "npm:chalk@1.1.3",
        "object-assign": "npm:object-assign@4.1.0",
        "repeating": "npm:repeating@2.0.1",
        "string-width": "npm:string-width@1.0.2",
        "camelcase": "npm:camelcase@2.1.1",
        "cli-boxes": "npm:cli-boxes@1.0.0",
        "widest-line": "npm:widest-line@1.0.0",
        "ansi-align": "npm:ansi-align@1.1.0",
        "filled-array": "npm:filled-array@1.1.0"
      }
    },
    "npm:has-ansi@2.0.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.0.0"
      }
    },
    "npm:globby@6.1.0": {
      "map": {
        "array-union": "npm:array-union@1.0.2",
        "object-assign": "npm:object-assign@4.1.0",
        "pinkie-promise": "npm:pinkie-promise@2.0.1",
        "pify": "npm:pify@2.3.0",
        "glob": "npm:glob@7.1.1"
      }
    },
    "npm:configstore@2.1.0": {
      "map": {
        "mkdirp": "npm:mkdirp@0.5.1",
        "object-assign": "npm:object-assign@4.1.0",
        "os-tmpdir": "npm:os-tmpdir@1.0.2",
        "write-file-atomic": "npm:write-file-atomic@1.2.0",
        "xdg-basedir": "npm:xdg-basedir@2.0.0",
        "graceful-fs": "npm:graceful-fs@4.1.11",
        "osenv": "npm:osenv@0.1.4",
        "dot-prop": "npm:dot-prop@3.0.0",
        "uuid": "npm:uuid@2.0.3"
      }
    },
    "npm:babel-template@6.16.0": {
      "map": {
        "lodash": "npm:lodash@4.17.2",
        "babel-types": "npm:babel-types@6.21.0",
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "babylon": "npm:babylon@6.14.1",
        "babel-traverse": "npm:babel-traverse@6.21.0"
      }
    },
    "npm:babel-core@6.21.0": {
      "map": {
        "lodash": "npm:lodash@4.17.2",
        "source-map": "npm:source-map@0.5.6",
        "babel-code-frame": "npm:babel-code-frame@6.20.0",
        "babel-generator": "npm:babel-generator@6.21.0",
        "babel-template": "npm:babel-template@6.16.0",
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "babel-types": "npm:babel-types@6.21.0",
        "convert-source-map": "npm:convert-source-map@1.3.0",
        "debug": "npm:debug@2.5.1",
        "path-is-absolute": "npm:path-is-absolute@1.0.1",
        "slash": "npm:slash@1.0.0",
        "babel-messages": "npm:babel-messages@6.8.0",
        "babylon": "npm:babylon@6.14.1",
        "minimatch": "npm:minimatch@3.0.3",
        "babel-traverse": "npm:babel-traverse@6.21.0",
        "private": "npm:private@0.1.6",
        "babel-register": "npm:babel-register@6.18.0",
        "json5": "npm:json5@0.5.1",
        "babel-helpers": "npm:babel-helpers@6.16.0"
      }
    },
    "npm:glob-parent@2.0.0": {
      "map": {
        "is-glob": "npm:is-glob@2.0.1"
      }
    },
    "npm:anymatch@1.3.0": {
      "map": {
        "arrify": "npm:arrify@1.0.1",
        "micromatch": "npm:micromatch@2.3.11"
      }
    },
    "npm:babel-preset-stage-3@6.17.0": {
      "map": {
        "babel-plugin-transform-async-generator-functions": "npm:babel-plugin-transform-async-generator-functions@6.17.0",
        "babel-plugin-transform-exponentiation-operator": "npm:babel-plugin-transform-exponentiation-operator@6.8.0",
        "babel-plugin-transform-object-rest-spread": "npm:babel-plugin-transform-object-rest-spread@6.20.2",
        "babel-plugin-transform-async-to-generator": "npm:babel-plugin-transform-async-to-generator@6.16.0",
        "babel-plugin-syntax-trailing-function-commas": "npm:babel-plugin-syntax-trailing-function-commas@6.20.0"
      }
    },
    "npm:babel-generator@6.21.0": {
      "map": {
        "lodash": "npm:lodash@4.17.2",
        "source-map": "npm:source-map@0.5.6",
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "babel-types": "npm:babel-types@6.21.0",
        "babel-messages": "npm:babel-messages@6.8.0",
        "detect-indent": "npm:detect-indent@4.0.0",
        "jsesc": "npm:jsesc@1.3.0"
      }
    },
    "npm:readdirp@2.1.0": {
      "map": {
        "set-immediate-shim": "npm:set-immediate-shim@1.0.1",
        "minimatch": "npm:minimatch@3.0.3",
        "readable-stream": "npm:readable-stream@2.2.2",
        "graceful-fs": "npm:graceful-fs@4.1.11"
      }
    },
    "npm:is-finite@1.0.2": {
      "map": {
        "number-is-nan": "npm:number-is-nan@1.0.1"
      }
    },
    "npm:babel-types@6.21.0": {
      "map": {
        "lodash": "npm:lodash@4.17.2",
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "esutils": "npm:esutils@2.0.2",
        "to-fast-properties": "npm:to-fast-properties@1.0.2"
      }
    },
    "npm:babel-plugin-transform-regenerator@6.21.0": {
      "map": {
        "regenerator-transform": "npm:regenerator-transform@0.9.8"
      }
    },
    "npm:redent@1.0.0": {
      "map": {
        "strip-indent": "npm:strip-indent@1.0.1",
        "indent-string": "npm:indent-string@2.1.0"
      }
    },
    "npm:babel-helper-regex@6.18.0": {
      "map": {
        "lodash": "npm:lodash@4.17.2",
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "babel-types": "npm:babel-types@6.21.0"
      }
    },
    "npm:pinkie-promise@2.0.1": {
      "map": {
        "pinkie": "npm:pinkie@2.0.4"
      }
    },
    "npm:pinkie-promise@1.0.0": {
      "map": {
        "pinkie": "npm:pinkie@1.0.0"
      }
    },
    "npm:write-pkg@1.0.0": {
      "map": {
        "write-json-file": "npm:write-json-file@1.2.0"
      }
    },
    "npm:cross-spawn@4.0.2": {
      "map": {
        "which": "npm:which@1.2.12",
        "lru-cache": "npm:lru-cache@4.0.2"
      }
    },
    "npm:xdg-basedir@2.0.0": {
      "map": {
        "os-homedir": "npm:os-homedir@1.0.2"
      }
    },
    "npm:babel-plugin-transform-async-generator-functions@6.17.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "babel-plugin-syntax-async-generators": "npm:babel-plugin-syntax-async-generators@6.13.0",
        "babel-helper-remap-async-to-generator": "npm:babel-helper-remap-async-to-generator@6.20.3"
      }
    },
    "npm:babel-plugin-transform-exponentiation-operator@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "babel-plugin-syntax-exponentiation-operator": "npm:babel-plugin-syntax-exponentiation-operator@6.13.0",
        "babel-helper-builder-binary-assignment-operator-visitor": "npm:babel-helper-builder-binary-assignment-operator-visitor@6.18.0"
      }
    },
    "npm:write-file-atomic@1.2.0": {
      "map": {
        "slide": "npm:slide@1.1.6",
        "imurmurhash": "npm:imurmurhash@0.1.4",
        "graceful-fs": "npm:graceful-fs@4.1.11"
      }
    },
    "npm:through2@2.0.3": {
      "map": {
        "xtend": "npm:xtend@4.0.1",
        "readable-stream": "npm:readable-stream@2.2.2"
      }
    },
    "npm:babel-helper-define-map@6.18.0": {
      "map": {
        "lodash": "npm:lodash@4.17.2",
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "babel-types": "npm:babel-types@6.21.0",
        "babel-helper-function-name": "npm:babel-helper-function-name@6.18.0"
      }
    },
    "npm:babel-plugin-transform-object-rest-spread@6.20.2": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "babel-plugin-syntax-object-rest-spread": "npm:babel-plugin-syntax-object-rest-spread@6.13.0"
      }
    },
    "npm:babel-plugin-transform-async-to-generator@6.16.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "babel-helper-remap-async-to-generator": "npm:babel-helper-remap-async-to-generator@6.20.3",
        "babel-plugin-syntax-async-functions": "npm:babel-plugin-syntax-async-functions@6.13.0"
      }
    },
    "npm:babel-helper-function-name@6.18.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "babel-types": "npm:babel-types@6.21.0",
        "babel-traverse": "npm:babel-traverse@6.21.0",
        "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.18.0",
        "babel-template": "npm:babel-template@6.16.0"
      }
    },
    "npm:is-fullwidth-code-point@1.0.0": {
      "map": {
        "number-is-nan": "npm:number-is-nan@1.0.1"
      }
    },
    "npm:babel-helper-optimise-call-expression@6.18.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "babel-types": "npm:babel-types@6.21.0"
      }
    },
    "npm:babel-helper-hoist-variables@6.18.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "babel-types": "npm:babel-types@6.21.0"
      }
    },
    "npm:babel-helper-call-delegate@6.18.0": {
      "map": {
        "babel-traverse": "npm:babel-traverse@6.21.0",
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "babel-types": "npm:babel-types@6.21.0",
        "babel-helper-hoist-variables": "npm:babel-helper-hoist-variables@6.18.0"
      }
    },
    "npm:babel-plugin-transform-strict-mode@6.18.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "babel-types": "npm:babel-types@6.21.0"
      }
    },
    "npm:babel-helper-replace-supers@6.18.0": {
      "map": {
        "babel-helper-optimise-call-expression": "npm:babel-helper-optimise-call-expression@6.18.0",
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "babel-traverse": "npm:babel-traverse@6.21.0",
        "babel-messages": "npm:babel-messages@6.8.0",
        "babel-template": "npm:babel-template@6.16.0",
        "babel-types": "npm:babel-types@6.21.0"
      }
    },
    "npm:babel-messages@6.8.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0"
      }
    },
    "npm:babel-helper-get-function-arity@6.18.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "babel-types": "npm:babel-types@6.21.0"
      }
    },
    "npm:path-exists@2.1.0": {
      "map": {
        "pinkie-promise": "npm:pinkie-promise@2.0.1"
      }
    },
    "npm:regenerator-transform@0.9.8": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "babel-types": "npm:babel-types@6.21.0",
        "private": "npm:private@0.1.6"
      }
    },
    "npm:read-pkg@1.1.0": {
      "map": {
        "load-json-file": "npm:load-json-file@1.1.0",
        "normalize-package-data": "npm:normalize-package-data@2.3.5",
        "path-type": "npm:path-type@1.1.0"
      }
    },
    "npm:write-json-file@1.2.0": {
      "map": {
        "mkdirp": "npm:mkdirp@0.5.1",
        "object-assign": "npm:object-assign@4.1.0",
        "pify": "npm:pify@2.3.0",
        "pinkie-promise": "npm:pinkie-promise@2.0.1",
        "write-file-atomic": "npm:write-file-atomic@1.2.0",
        "graceful-fs": "npm:graceful-fs@4.1.11",
        "sort-keys": "npm:sort-keys@1.1.2"
      }
    },
    "npm:indent-string@2.1.0": {
      "map": {
        "repeating": "npm:repeating@2.0.1"
      }
    },
    "npm:babel-helper-explode-class@6.18.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "babel-traverse": "npm:babel-traverse@6.21.0",
        "babel-types": "npm:babel-types@6.21.0",
        "babel-helper-bindify-decorators": "npm:babel-helper-bindify-decorators@6.18.0"
      }
    },
    "npm:espurify@1.6.0": {
      "map": {
        "core-js": "npm:core-js@2.4.1"
      }
    },
    "npm:latest-version@2.0.0": {
      "map": {
        "package-json": "npm:package-json@2.4.0"
      }
    },
    "npm:babel-traverse@6.21.0": {
      "map": {
        "lodash": "npm:lodash@4.17.2",
        "babel-code-frame": "npm:babel-code-frame@6.20.0",
        "babel-messages": "npm:babel-messages@6.8.0",
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "babel-types": "npm:babel-types@6.21.0",
        "babylon": "npm:babylon@6.14.1",
        "debug": "npm:debug@2.5.1",
        "invariant": "npm:invariant@2.2.2",
        "globals": "npm:globals@9.14.0"
      }
    },
    "npm:power-assert-util-string-width@1.1.1": {
      "map": {
        "eastasianwidth": "npm:eastasianwidth@0.1.1"
      }
    },
    "npm:is-binary-path@1.0.1": {
      "map": {
        "binary-extensions": "npm:binary-extensions@1.8.0"
      }
    },
    "npm:is-glob@2.0.1": {
      "map": {
        "is-extglob": "npm:is-extglob@1.0.0"
      }
    },
    "npm:stringifier@1.3.0": {
      "map": {
        "core-js": "npm:core-js@2.4.1",
        "type-name": "npm:type-name@2.0.2",
        "traverse": "npm:traverse@0.6.6"
      }
    },
    "npm:ansi-align@1.1.0": {
      "map": {
        "string-width": "npm:string-width@1.0.2"
      }
    },
    "npm:widest-line@1.0.0": {
      "map": {
        "string-width": "npm:string-width@1.0.2"
      }
    },
    "npm:package-json@2.4.0": {
      "map": {
        "semver": "npm:semver@5.3.0",
        "registry-url": "npm:registry-url@3.1.0",
        "registry-auth-token": "npm:registry-auth-token@3.1.0",
        "got": "npm:got@5.7.1"
      }
    },
    "npm:osenv@0.1.4": {
      "map": {
        "os-homedir": "npm:os-homedir@1.0.2",
        "os-tmpdir": "npm:os-tmpdir@1.0.2"
      }
    },
    "npm:dot-prop@3.0.0": {
      "map": {
        "is-obj": "npm:is-obj@1.0.1"
      }
    },
    "npm:regexpu-core@2.0.0": {
      "map": {
        "regjsgen": "npm:regjsgen@0.2.0",
        "regjsparser": "npm:regjsparser@0.1.5",
        "regenerate": "npm:regenerate@1.3.2"
      }
    },
    "npm:babel-register@6.18.0": {
      "map": {
        "core-js": "npm:core-js@2.4.1",
        "lodash": "npm:lodash@4.17.2",
        "source-map-support": "npm:source-map-support@0.4.7",
        "babel-core": "npm:babel-core@6.21.0",
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "mkdirp": "npm:mkdirp@0.5.1",
        "home-or-tmp": "npm:home-or-tmp@2.0.0"
      }
    },
    "npm:babel-helpers@6.16.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "babel-template": "npm:babel-template@6.16.0"
      }
    },
    "npm:which@1.2.12": {
      "map": {
        "isexe": "npm:isexe@1.1.2"
      }
    },
    "npm:glob@7.1.1": {
      "map": {
        "path-is-absolute": "npm:path-is-absolute@1.0.1",
        "minimatch": "npm:minimatch@3.0.3",
        "inherits": "npm:inherits@2.0.3",
        "once": "npm:once@1.4.0",
        "inflight": "npm:inflight@1.0.6",
        "fs.realpath": "npm:fs.realpath@1.0.0"
      }
    },
    "npm:detect-indent@4.0.0": {
      "map": {
        "repeating": "npm:repeating@2.0.1"
      }
    },
    "npm:strip-indent@1.0.1": {
      "map": {
        "get-stdin": "npm:get-stdin@4.0.1"
      }
    },
    "npm:regjsparser@0.1.5": {
      "map": {
        "jsesc": "npm:jsesc@0.5.0"
      }
    },
    "npm:parse-json@2.2.0": {
      "map": {
        "error-ex": "npm:error-ex@1.3.0"
      }
    },
    "npm:is-builtin-module@1.0.0": {
      "map": {
        "builtin-modules": "npm:builtin-modules@1.1.1"
      }
    },
    "npm:validate-npm-package-license@3.0.1": {
      "map": {
        "spdx-correct": "npm:spdx-correct@1.0.2",
        "spdx-expression-parse": "npm:spdx-expression-parse@1.0.4"
      }
    },
    "npm:babel-helper-builder-binary-assignment-operator-visitor@6.18.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "babel-types": "npm:babel-types@6.21.0",
        "babel-helper-explode-assignable-expression": "npm:babel-helper-explode-assignable-expression@6.18.0"
      }
    },
    "npm:minimatch@3.0.3": {
      "map": {
        "brace-expansion": "npm:brace-expansion@1.1.6"
      }
    },
    "npm:micromatch@2.3.11": {
      "map": {
        "is-extglob": "npm:is-extglob@1.0.0",
        "is-glob": "npm:is-glob@2.0.1",
        "array-unique": "npm:array-unique@0.2.1",
        "filename-regex": "npm:filename-regex@2.0.0",
        "normalize-path": "npm:normalize-path@2.0.1",
        "arr-diff": "npm:arr-diff@2.0.0",
        "object.omit": "npm:object.omit@2.0.1",
        "parse-glob": "npm:parse-glob@3.0.4",
        "regex-cache": "npm:regex-cache@0.4.3",
        "kind-of": "npm:kind-of@3.1.0",
        "extglob": "npm:extglob@0.3.2",
        "expand-brackets": "npm:expand-brackets@0.1.5",
        "braces": "npm:braces@1.8.5"
      }
    },
    "npm:babel-helper-remap-async-to-generator@6.20.3": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "babel-template": "npm:babel-template@6.16.0",
        "babel-types": "npm:babel-types@6.21.0",
        "babel-traverse": "npm:babel-traverse@6.21.0",
        "babel-helper-function-name": "npm:babel-helper-function-name@6.18.0"
      }
    },
    "npm:path-type@1.1.0": {
      "map": {
        "graceful-fs": "npm:graceful-fs@4.1.11",
        "pify": "npm:pify@2.3.0",
        "pinkie-promise": "npm:pinkie-promise@2.0.1"
      }
    },
    "npm:fsevents@1.0.15": {
      "map": {
        "nan": "npm:nan@2.5.0",
        "node-pre-gyp": "npm:node-pre-gyp@0.6.32"
      }
    },
    "npm:lru-cache@4.0.2": {
      "map": {
        "pseudomap": "npm:pseudomap@1.0.2",
        "yallist": "npm:yallist@2.0.0"
      }
    },
    "npm:babel-helper-bindify-decorators@6.18.0": {
      "map": {
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "babel-traverse": "npm:babel-traverse@6.21.0",
        "babel-types": "npm:babel-types@6.21.0"
      }
    },
    "npm:node-pre-gyp@0.6.32": {
      "map": {
        "mkdirp": "npm:mkdirp@0.5.1",
        "semver": "npm:semver@5.3.0",
        "tar-pack": "npm:tar-pack@3.3.0",
        "tar": "npm:tar@2.2.1",
        "npmlog": "npm:npmlog@4.0.2",
        "nopt": "npm:nopt@3.0.6",
        "rc": "npm:rc@1.1.6",
        "rimraf": "npm:rimraf@2.5.4",
        "request": "npm:request@2.79.0"
      }
    },
    "npm:sort-keys@1.1.2": {
      "map": {
        "is-plain-obj": "npm:is-plain-obj@1.1.0"
      }
    },
    "npm:home-or-tmp@2.0.0": {
      "map": {
        "os-homedir": "npm:os-homedir@1.0.2",
        "os-tmpdir": "npm:os-tmpdir@1.0.2"
      }
    },
    "npm:inflight@1.0.6": {
      "map": {
        "once": "npm:once@1.4.0",
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:invariant@2.2.2": {
      "map": {
        "loose-envify": "npm:loose-envify@1.3.0"
      }
    },
    "npm:error-ex@1.3.0": {
      "map": {
        "is-arrayish": "npm:is-arrayish@0.2.1"
      }
    },
    "npm:spdx-correct@1.0.2": {
      "map": {
        "spdx-license-ids": "npm:spdx-license-ids@1.2.2"
      }
    },
    "npm:babel-helper-explode-assignable-expression@6.18.0": {
      "map": {
        "babel-traverse": "npm:babel-traverse@6.21.0",
        "babel-runtime": "npm:babel-runtime@6.20.0",
        "babel-types": "npm:babel-types@6.21.0"
      }
    },
    "npm:got@5.7.1": {
      "map": {
        "object-assign": "npm:object-assign@4.1.0",
        "parse-json": "npm:parse-json@2.2.0",
        "pinkie-promise": "npm:pinkie-promise@2.0.1",
        "readable-stream": "npm:readable-stream@2.2.2",
        "is-redirect": "npm:is-redirect@1.0.0",
        "is-retry-allowed": "npm:is-retry-allowed@1.1.0",
        "is-stream": "npm:is-stream@1.1.0",
        "create-error-class": "npm:create-error-class@3.0.2",
        "lowercase-keys": "npm:lowercase-keys@1.0.0",
        "node-status-codes": "npm:node-status-codes@1.0.0",
        "unzip-response": "npm:unzip-response@1.0.2",
        "timed-out": "npm:timed-out@3.1.0",
        "url-parse-lax": "npm:url-parse-lax@1.0.0",
        "duplexer2": "npm:duplexer2@0.1.4",
        "read-all-stream": "npm:read-all-stream@3.1.0",
        "node-unzip-response": "npm:unzip-response@1.0.2"
      }
    },
    "npm:arr-diff@2.0.0": {
      "map": {
        "arr-flatten": "npm:arr-flatten@1.0.1"
      }
    },
    "npm:parse-glob@3.0.4": {
      "map": {
        "is-extglob": "npm:is-extglob@1.0.0",
        "is-glob": "npm:is-glob@2.0.1",
        "is-dotfile": "npm:is-dotfile@1.0.2",
        "glob-base": "npm:glob-base@0.3.0"
      }
    },
    "npm:brace-expansion@1.1.6": {
      "map": {
        "concat-map": "npm:concat-map@0.0.1",
        "balanced-match": "npm:balanced-match@0.4.2"
      }
    },
    "npm:extglob@0.3.2": {
      "map": {
        "is-extglob": "npm:is-extglob@1.0.0"
      }
    },
    "npm:loose-envify@1.3.0": {
      "map": {
        "js-tokens": "npm:js-tokens@2.0.0"
      }
    },
    "npm:once@1.4.0": {
      "map": {
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:registry-url@3.1.0": {
      "map": {
        "rc": "npm:rc@1.1.6"
      }
    },
    "npm:registry-auth-token@3.1.0": {
      "map": {
        "rc": "npm:rc@1.1.6"
      }
    },
    "npm:tar-pack@3.3.0": {
      "map": {
        "debug": "npm:debug@2.2.0",
        "once": "npm:once@1.3.3",
        "readable-stream": "npm:readable-stream@2.1.5",
        "rimraf": "npm:rimraf@2.5.4",
        "tar": "npm:tar@2.2.1",
        "uid-number": "npm:uid-number@0.0.6",
        "fstream-ignore": "npm:fstream-ignore@1.0.5",
        "fstream": "npm:fstream@1.0.10"
      }
    },
    "npm:tar@2.2.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "block-stream": "npm:block-stream@0.0.9",
        "fstream": "npm:fstream@1.0.10"
      }
    },
    "npm:object.omit@2.0.1": {
      "map": {
        "is-extendable": "npm:is-extendable@0.1.1",
        "for-own": "npm:for-own@0.1.4"
      }
    },
    "npm:regex-cache@0.4.3": {
      "map": {
        "is-primitive": "npm:is-primitive@2.0.0",
        "is-equal-shallow": "npm:is-equal-shallow@0.1.3"
      }
    },
    "npm:rc@1.1.6": {
      "map": {
        "minimist": "npm:minimist@1.2.0",
        "ini": "npm:ini@1.3.4",
        "strip-json-comments": "npm:strip-json-comments@1.0.4",
        "deep-extend": "npm:deep-extend@0.4.1"
      }
    },
    "npm:rimraf@2.5.4": {
      "map": {
        "glob": "npm:glob@7.1.1"
      }
    },
    "npm:kind-of@3.1.0": {
      "map": {
        "is-buffer": "npm:is-buffer@1.1.4"
      }
    },
    "npm:readable-stream@2.1.5": {
      "map": {
        "buffer-shims": "npm:buffer-shims@1.0.0",
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.3",
        "isarray": "npm:isarray@1.0.0",
        "process-nextick-args": "npm:process-nextick-args@1.0.7",
        "string_decoder": "npm:string_decoder@0.10.31",
        "util-deprecate": "npm:util-deprecate@1.0.2"
      }
    },
    "npm:once@1.3.3": {
      "map": {
        "wrappy": "npm:wrappy@1.0.2"
      }
    },
    "npm:expand-brackets@0.1.5": {
      "map": {
        "is-posix-bracket": "npm:is-posix-bracket@0.1.1"
      }
    },
    "npm:debug@2.2.0": {
      "map": {
        "ms": "npm:ms@0.7.1"
      }
    },
    "npm:duplexer2@0.1.4": {
      "map": {
        "readable-stream": "npm:readable-stream@2.2.2"
      }
    },
    "npm:read-all-stream@3.1.0": {
      "map": {
        "pinkie-promise": "npm:pinkie-promise@2.0.1",
        "readable-stream": "npm:readable-stream@2.2.2"
      }
    },
    "npm:glob-base@0.3.0": {
      "map": {
        "is-glob": "npm:is-glob@2.0.1",
        "glob-parent": "npm:glob-parent@2.0.0"
      }
    },
    "npm:is-equal-shallow@0.1.3": {
      "map": {
        "is-primitive": "npm:is-primitive@2.0.0"
      }
    },
    "npm:braces@1.8.5": {
      "map": {
        "repeat-element": "npm:repeat-element@1.1.2",
        "preserve": "npm:preserve@0.2.0",
        "expand-range": "npm:expand-range@1.8.2"
      }
    },
    "npm:nopt@3.0.6": {
      "map": {
        "abbrev": "npm:abbrev@1.0.9"
      }
    },
    "npm:npmlog@4.0.2": {
      "map": {
        "set-blocking": "npm:set-blocking@2.0.0",
        "console-control-strings": "npm:console-control-strings@1.1.0",
        "are-we-there-yet": "npm:are-we-there-yet@1.1.2",
        "gauge": "npm:gauge@2.7.2"
      }
    },
    "npm:block-stream@0.0.9": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:create-error-class@3.0.2": {
      "map": {
        "capture-stack-trace": "npm:capture-stack-trace@1.0.0"
      }
    },
    "npm:url-parse-lax@1.0.0": {
      "map": {
        "prepend-http": "npm:prepend-http@1.0.4"
      }
    },
    "npm:fstream-ignore@1.0.5": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimatch": "npm:minimatch@3.0.3",
        "fstream": "npm:fstream@1.0.10"
      }
    },
    "npm:fstream@1.0.10": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "graceful-fs": "npm:graceful-fs@4.1.11",
        "mkdirp": "npm:mkdirp@0.5.1",
        "rimraf": "npm:rimraf@2.5.4"
      }
    },
    "npm:are-we-there-yet@1.1.2": {
      "map": {
        "readable-stream": "npm:readable-stream@1.1.14",
        "delegates": "npm:delegates@1.0.0"
      }
    },
    "npm:request@2.79.0": {
      "map": {
        "uuid": "npm:uuid@3.0.1",
        "mime-types": "npm:mime-types@2.1.13",
        "isstream": "npm:isstream@0.1.2",
        "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
        "caseless": "npm:caseless@0.11.0",
        "forever-agent": "npm:forever-agent@0.6.1",
        "oauth-sign": "npm:oauth-sign@0.8.2",
        "tunnel-agent": "npm:tunnel-agent@0.4.3",
        "aws-sign2": "npm:aws-sign2@0.6.0",
        "is-typedarray": "npm:is-typedarray@1.0.0",
        "stringstream": "npm:stringstream@0.0.5",
        "extend": "npm:extend@3.0.0",
        "combined-stream": "npm:combined-stream@1.0.5",
        "http-signature": "npm:http-signature@1.1.1",
        "form-data": "npm:form-data@2.1.2",
        "aws4": "npm:aws4@1.5.0",
        "qs": "npm:qs@6.3.0",
        "har-validator": "npm:har-validator@2.0.6",
        "tough-cookie": "npm:tough-cookie@2.3.2",
        "hawk": "npm:hawk@3.1.3"
      }
    },
    "npm:for-own@0.1.4": {
      "map": {
        "for-in": "npm:for-in@0.1.6"
      }
    },
    "npm:gauge@2.7.2": {
      "map": {
        "supports-color": "npm:supports-color@0.2.0",
        "object-assign": "npm:object-assign@4.1.0",
        "signal-exit": "npm:signal-exit@3.0.2",
        "string-width": "npm:string-width@1.0.2",
        "strip-ansi": "npm:strip-ansi@3.0.1",
        "console-control-strings": "npm:console-control-strings@1.1.0",
        "wide-align": "npm:wide-align@1.1.0",
        "aproba": "npm:aproba@1.0.4",
        "has-unicode": "npm:has-unicode@2.0.1"
      }
    },
    "npm:expand-range@1.8.2": {
      "map": {
        "fill-range": "npm:fill-range@2.2.3"
      }
    },
    "npm:readable-stream@1.1.14": {
      "map": {
        "isarray": "npm:isarray@0.0.1",
        "core-util-is": "npm:core-util-is@1.0.2",
        "inherits": "npm:inherits@2.0.3",
        "string_decoder": "npm:string_decoder@0.10.31",
        "stream-browserify": "npm:stream-browserify@1.0.0"
      }
    },
    "npm:fill-range@2.2.3": {
      "map": {
        "repeat-element": "npm:repeat-element@1.1.2",
        "is-number": "npm:is-number@2.1.0",
        "repeat-string": "npm:repeat-string@1.6.1",
        "randomatic": "npm:randomatic@1.1.6",
        "isobject": "npm:isobject@2.1.0"
      }
    },
    "npm:wide-align@1.1.0": {
      "map": {
        "string-width": "npm:string-width@1.0.2"
      }
    },
    "npm:mime-types@2.1.13": {
      "map": {
        "mime-db": "npm:mime-db@1.25.0"
      }
    },
    "npm:form-data@2.1.2": {
      "map": {
        "combined-stream": "npm:combined-stream@1.0.5",
        "mime-types": "npm:mime-types@2.1.13",
        "asynckit": "npm:asynckit@0.4.0"
      }
    },
    "npm:har-validator@2.0.6": {
      "map": {
        "chalk": "npm:chalk@1.1.3",
        "pinkie-promise": "npm:pinkie-promise@2.0.1",
        "is-my-json-valid": "npm:is-my-json-valid@2.15.0",
        "commander": "npm:commander@2.9.0"
      }
    },
    "npm:http-signature@1.1.1": {
      "map": {
        "assert-plus": "npm:assert-plus@0.2.0",
        "jsprim": "npm:jsprim@1.3.1",
        "sshpk": "npm:sshpk@1.10.1"
      }
    },
    "npm:combined-stream@1.0.5": {
      "map": {
        "delayed-stream": "npm:delayed-stream@1.0.0"
      }
    },
    "npm:tough-cookie@2.3.2": {
      "map": {
        "punycode": "npm:punycode@1.4.1"
      }
    },
    "npm:stream-browserify@1.0.0": {
      "map": {
        "readable-stream": "npm:readable-stream@1.1.14",
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:is-number@2.1.0": {
      "map": {
        "kind-of": "npm:kind-of@3.1.0"
      }
    },
    "npm:randomatic@1.1.6": {
      "map": {
        "kind-of": "npm:kind-of@3.1.0",
        "is-number": "npm:is-number@2.1.0"
      }
    },
    "npm:hawk@3.1.3": {
      "map": {
        "hoek": "npm:hoek@2.16.3",
        "sntp": "npm:sntp@1.0.9",
        "cryptiles": "npm:cryptiles@2.0.5",
        "boom": "npm:boom@2.10.1"
      }
    },
    "npm:isobject@2.1.0": {
      "map": {
        "isarray": "npm:isarray@1.0.0"
      }
    },
    "npm:sshpk@1.10.1": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0",
        "getpass": "npm:getpass@0.1.6",
        "asn1": "npm:asn1@0.2.3",
        "dashdash": "npm:dashdash@1.14.1"
      }
    },
    "npm:is-my-json-valid@2.15.0": {
      "map": {
        "xtend": "npm:xtend@4.0.1",
        "generate-function": "npm:generate-function@2.0.0",
        "generate-object-property": "npm:generate-object-property@1.2.0",
        "jsonpointer": "npm:jsonpointer@4.0.1"
      }
    },
    "npm:sntp@1.0.9": {
      "map": {
        "hoek": "npm:hoek@2.16.3"
      }
    },
    "npm:cryptiles@2.0.5": {
      "map": {
        "boom": "npm:boom@2.10.1"
      }
    },
    "npm:jsprim@1.3.1": {
      "map": {
        "json-schema": "npm:json-schema@0.2.3",
        "extsprintf": "npm:extsprintf@1.0.2",
        "verror": "npm:verror@1.3.6"
      }
    },
    "npm:boom@2.10.1": {
      "map": {
        "hoek": "npm:hoek@2.16.3"
      }
    },
    "npm:verror@1.3.6": {
      "map": {
        "extsprintf": "npm:extsprintf@1.0.2"
      }
    },
    "npm:bcrypt-pbkdf@1.0.0": {
      "map": {
        "tweetnacl": "npm:tweetnacl@0.14.5"
      }
    },
    "npm:getpass@0.1.6": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0"
      }
    },
    "npm:ecc-jsbn@0.1.1": {
      "map": {
        "jsbn": "npm:jsbn@0.1.0"
      }
    },
    "npm:jodid25519@1.0.2": {
      "map": {
        "jsbn": "npm:jsbn@0.1.0"
      }
    },
    "npm:dashdash@1.14.1": {
      "map": {
        "assert-plus": "npm:assert-plus@1.0.0"
      }
    },
    "npm:generate-object-property@1.2.0": {
      "map": {
        "is-property": "npm:is-property@1.0.2"
      }
    },
    "npm:tape@4.6.3": {
      "map": {
        "defined": "npm:defined@1.0.0",
        "function-bind": "npm:function-bind@1.1.0",
        "for-each": "npm:for-each@0.3.2",
        "object-inspect": "npm:object-inspect@1.2.1",
        "has": "npm:has@1.0.1",
        "resolve": "npm:resolve@1.1.7",
        "through": "npm:through@2.3.8",
        "deep-equal": "npm:deep-equal@1.0.1",
        "minimist": "npm:minimist@1.2.0",
        "inherits": "npm:inherits@2.0.3",
        "string.prototype.trim": "npm:string.prototype.trim@1.1.2",
        "glob": "npm:glob@7.1.1",
        "resumer": "npm:resumer@0.0.0"
      }
    },
    "npm:has@1.0.1": {
      "map": {
        "function-bind": "npm:function-bind@1.1.0"
      }
    },
    "npm:string.prototype.trim@1.1.2": {
      "map": {
        "function-bind": "npm:function-bind@1.1.0",
        "define-properties": "npm:define-properties@1.1.2",
        "es-abstract": "npm:es-abstract@1.6.1"
      }
    },
    "npm:for-each@0.3.2": {
      "map": {
        "is-function": "npm:is-function@1.0.1"
      }
    },
    "npm:resumer@0.0.0": {
      "map": {
        "through": "npm:through@2.3.8"
      }
    },
    "npm:es-abstract@1.6.1": {
      "map": {
        "function-bind": "npm:function-bind@1.1.0",
        "is-regex": "npm:is-regex@1.0.3",
        "is-callable": "npm:is-callable@1.1.3",
        "es-to-primitive": "npm:es-to-primitive@1.1.1"
      }
    },
    "npm:define-properties@1.1.2": {
      "map": {
        "foreach": "npm:foreach@2.0.5",
        "object-keys": "npm:object-keys@1.0.11"
      }
    },
    "npm:es-to-primitive@1.1.1": {
      "map": {
        "is-callable": "npm:is-callable@1.1.3",
        "is-date-object": "npm:is-date-object@1.0.1",
        "is-symbol": "npm:is-symbol@1.0.1"
      }
    },
    "npm:asn1.js@4.9.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.6",
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    }
  }
});
