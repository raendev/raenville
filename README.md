Welcome to Raenville! A NEAR & blockchain primer
================================================

Walk through various features of NEAR & blockchain by building software for an imaginary city, Raenville.

Topics covered:

01. Quick-start with [near-cli]'s `dev-deploy`
02. NEAR's [account system]
03. Calling contracts via the command line with near-cli
04. Meet [near-sdk-rs]
05. Creating your first [Fungible Token]
06. Meet [nomicon]
07. NEAR subaccounts and how near-cli stores [access keys][account system]
08. Deploying the real way with `near deploy`
09. [Cross-contract calls][xcc]
10. Creating your first [Non-Fungible Token]
11. Creating your first [DAO]
12. End-to-end testing with [near-sandbox]

  [near-cli]: https://www.npmjs.com/package/near-cli
  [account system]: https://docs.near.org/docs/concepts/account
  [near-sdk-rs]: https://docs.rs/near-sdk
  [Fungible Token]: https://nomicon.io/Standards/FungibleToken/Core.html
  [nomicon]: https://nomicon.io/
  [xcc]: https://docs.near.org/docs/tutorials/contracts/cross-contract-calls
  [Non-Fungible Token]: https://nomicon.io/Standards/NonFungibleToken/Core.html
  [DAO]: https://whiteboardcrypto.com/what-is-a-dao/
  [near-sandbox]: https://www.npmjs.com/package/near-sandbox


Run it locally
==============

* Make sure you have [Node.js] and the latest [yarn] installed
* Clone the code
* `cd` into the repo

This project uses [Yarn 2](https://yarnpkg.com/getting-started/migration) in [Zero-Install mode](https://yarnpkg.com/features/zero-installs) so you shouldn't have to run `yarn install` when you first clone this repository (that's also why the project size is quite large compared to what you might be used to).

If you use an editor other than VS Code or vim to work on this codebase, you may want to add Yarn 2 editor support to your local project [using `yarn dlx @yarnpkg/sdks --sdk`](https://yarnpkg.com/getting-started/editor-sdks). Settings for VS Code & vim are checked into the repo.

Now you should be able to run project scripts:

* `yarn start`

You should also see eslint & TypeScript support in your editor.

  [Node.js]: https://nodejs.org/en/download/package-manager/
  [yarn]: https://yarnpkg.com/

