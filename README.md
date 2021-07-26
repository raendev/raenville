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
  [Non-Fungible Token]: https://nomicon.io/Standards/NonFungibleToken/Core.html
  [nomicon]: https://nomicon.io/
  [Fungible Token]: https://nomicon.io/Standards/FungibleToken/Core.html
  [xcc]: https://docs.near.org/docs/tutorials/contracts/cross-contract-calls
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


Course Outline
==============

Planned workflow:

0. Prerequisites: Node & Yarn installed, command line familiarity

1. Clone starter repo (or download zip)

2. Run `yarn start`. Behind the scenes, this will:
   - deploy contract with `dev-deploy`
   - add `dev-*` address to `.env`
   - run `parcel serve`
   - auto-opens browser to app

3. Webpage is split into two parts, "user" part and "developer" part.

   Developer part explains:

   - what just happened
   - how the project is structured
   - where the source code of this specific content is

   User part prompts user to log in (with NEAR).

4. After logging in, content changes. Page now explains:

   - With blockchains, the web finally has a primitive for identity
   - NEAR Wallet
   - near-api-js
   - NEAR's awesome account system

   Then it prompts developer to use near-cli to:

   - `near login`
   - stretch goal: use near-cli to create subaccount and deploy contract to it, update `.env` with new contract address
   - call the contract's `set_mayor` function to set self as mayor, then refresh the page (to demonstrate common errors/gotchas, initially instructs them to call `set_mayor` with poorly-formed JSON)

5. After setting the mayor and refreshing the page, the page now:

   - user part: shows a special "Howdy, Mayor!" message
   - developer part: intro to smart contracts & rust-sdk-rs; says where to open the contract to see the `set_mayor` function
   - stretch goal: modify `set_mayor` to store Mayor's name, install rustup & target wasm-unknown-unknown, compile updated contract, deploy, call updated `set_mayor` function with near-cli, update frontend to show name
   - user part: explains city's new NFT-backed deed-management system, has the mayor add a couple properties to get it started. All are initially owned by Mayor; explains plan to verify people's accounts as NFT-deeds are transferred to rightful owners; explains ability to require signature by Title companies for transfer to match current jurisdiction's paradigm and satisfy local laws, but benefits to streamline property transfers down the line (is it worth getting into privacy considerations?)
   - developer part: introduces nomicon & NFT standard; points out what simple programs these are, and that they get their whole power through being deployed to a blockchain and being a standard; says where to open the Non-Fungible Token contract code; introduces `near-contract-standards` library

6. Adding city addresses as NFTs has unlocked a new feature: the page now shows a "Register to vote, make it RAEN" button

   - user part: explains that RAEN tokens are the city's new local currency, to be minted solely when people register to vote via the new website, and which are already being accepted at many local establishments
   - user part: has mayor register to vote
     - requires selecting one of the addresses entered as an NFT
     - discusses Sybil-resistance challenges around real-world identity verification, especially given this 1000-RAEN incentive to cheat
     - shows RAEN balance afterward
   - stretch goal: use Testnet version of Ref Finance to provide liquidity for the RAEN/nUSD pair and swap one to the other
   - developer part: says where to open the Fungible Token contract, highlights & explains the cross-contract call from main contract's `register_voter` function to FT contract's `transfer`

7. Registering to vote has unlocked a new feature: "Make a proposal" – DAO functionality for the city

   - Any voter can make proposals; city council & the mayor will shepherd these proposals through a process to either cull them, bring them to vote, or potentially turn them into city law.
   - Can also allow attaching RAEN to be released to city treasury only if proposal is ratified, to show off the "Function Call keys don't need to sign; attaching a deposit requires signing" feature of NEAR and to show off the `transfer_call` functionality of FTs.
   - developer section: mention ability for contract owner to mint self unlimited RAEN, need for DAO-governed [upgrades](https://sdk-g4yv.onrender.com/upgrading/prototyping)
   - developer section: introduction to [near-sandbox] tests; showing that all current functionality has passing tests, but there are failing tests for not-yet-developed features. Self-guided exercise from here: implement these features, make the tests pass! Some feature ideas:
     - rather than just "the Mayor and everyone else", contract also has other roles: city council, block captain, building coordinator
     - these different roles get different voting power on proposals, which is _not_ represented with FTs or NFTs because they're not meant to be sellable assets
     - only Mayor and City Council members should be able to change someone else's role
     - get rid of `set_mayor` in favor of more general `set_role`
     - Allow voters to comment on Proposals and optionally attach more RAEN to go toward the proposed project/improvement