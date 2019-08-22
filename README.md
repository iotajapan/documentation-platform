# IOTA Documentation [![CircleCI](https://circleci.com/gh/iotajapan/documentation-platform/tree/master.svg?style=svg)](https://circleci.com/gh/iotajapan/documentation-platform/tree/master)
- https://docs.iota.org の日本語訳のリポジトリ.
- Live Demo: https://docs.iotajapan.com

# Usage
## ローカルで動かす(Docker編)
```bash
git clone --recurse-submodules git@github.com:iotajapan/documentation-platform.git
cd documentation-platform
npm i
# サイトを立ち上げる
docker-compose up -d --build
# ブラウザで`localhost:3000`にアクセスする.
# サイトを停止する
docker-compose down
```

## ローカルで動かす(npm編)
```bash
git clone --recurse-submodules git@github.com:iotajapan/documentation-platform.git
cd documentation-platform
npm i
# サイトを立ち上げる
npm run build-index
npm run start
# ブラウザで`localhost:3000`にアクセスする.
# サイトを停止する
CTL + c
```

## nowにデプロイする
```bash
git clone --recurse-submodules git@github.com:iotajapan/documentation-platform.git
cd documentation-platform
cd docs
git pull
cd ..
npm i
npm run build-index
now --prod
```

## GitHub Pagesにデプロイする
- https://github.com/iotajapan/documentation-platform/blob/master/.circleci/config.yml を参照のこと.

Original↓
---

# IOTA Documentation
This repository contains the web application which displays the documentation, the actual content is housed in its own repository [https://github.com/iotaledger/documentation.git](https://github.com/iotaledger/documentation.git)

## Supporting The Project

If you would like to contribute to the web application, consider posting a [bug report](https://github.com/iotaledger/documentation-platform/issues/new), [feature request](https://github.com/iotaledger/documentation-platform/issues/new) or a [pull request](https://github.com/iotaledger/documentation-platform/pulls/).

For information and issues related to the documentation content please visit the [documentation-markdown](https://github.com/iotaledger/documentation) repository.

## Development

The documentation application is created as a React Static application. If you wish to do any development work on the app you should perform the following steps.

```shell
git clone https://github.com/iotaledger/documentation-platform.git
npm install
```

You will then need to add the content from the [https://github.com/iotaledger/documentation.git](https://github.com/iotaledger/documentation.git) repository to the `/docs` folder.

Once you have the content in the `/docs` folder you need to index all the documents, you can do this by running:

```shell
npm run build-index
```

Only once the steps above are completed can you build and run the app:

```shell
npm run start
```

There is also an associated API for the application for more details on that see [./api/README.md](./api/README.md)

## Deployment

See [./DEPLOYMENT.md](./DEPLOYMENT.md) for deployment instructions.
