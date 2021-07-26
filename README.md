Welcome to Raenville! A NEAR & blockchain primer
================================================

Learn various features of NEAR & blockchain by building software for an imaginary city, Raenville (pronounced "rainville") (it's "near" backwards).

Target audiences:

* All web developers: anyone from the "web2 developer" audience should find this non-intimidating. By the end should feel like they know both "why would I use a blockchain?" and "how do I build a real-world app with NEAR?"
* Blockchain developers: by the end of the course, a "web3 developer" will know what makes NEAR unique.

The basic project: a walk-through that has you build simplified software that could be used to power a city government. This example was chosen for a few reasons:

* It makes a natural fit for many of blockchain's greatest hits: Non-Fungible Tokens for real estate deeds, Fungible Tokens for local currencies, and DAOs for legislation.
* Showing how these patterns could be used in a real-world context increases the chance of giving non-blockchain developers an "a-ha!" moment about how blockchain could give them superpowers.
* It's somewhat ambitious, teaching blockchain newbies to think big about what blockchain could do for them.
* It's natural to implement as a multi-contract app, to demonstrate good patterns for working with such projects.
* It's fun!

The main interaction with the tutorial will avoid writing custom code. Instead, learners will interact with the already-created web app, look at code, and run some commands with near-cli. However, for people who want to dig in more, "going further" sections are sprinkled throughout. These can involve more error-prone custom coding and can also be quite tangential to the main narrative. If an intermediate web2 developer skips all the "going further" sections, they should be able to complete the entire tutorial in 15-60min.


Course Outline
==============

0. Prerequisites: command line familiarity. If running locally rather than Gitpod, must have Node & Yarn installed.

1. Clone this repo

2. Run `yarn start`. Behind the scenes, this will:

   - deploy contract with `dev-deploy`
   - add `dev-*` address to `.env`
   - run `parcel serve`
   - auto-opens browser to app

3. Webpage is split into two parts, "user" part and "developer" part.

   Developer part explains:

   - what just happened (see `2` above)
   - how the project is structured
   - where the source code of this specific content is

   User part prompts user to log in with NEAR. (This should already give people their first a-ha moment: how easy it is to add auth to their app with NEAR. Ideally, the NEAR login process will be simplified, so that even if the web2 crowd drops out after this, they'll still be inspired to reach for NEAR instead of some OAuth solution the next time they want to quickly add authentication to an app.)

4. After logging in, content changes. Page now explains:

   - Look at that, identity as a primitive! With blockchains, the web finally has identity baked into the protocol.
   - More about NEAR Wallet
   - near-api-js
   - NEAR's awesome account system

   Then it prompts developer to use near-cli to:

   - `near login`
   - use near-cli to create subaccount and deploy contract to it, update `.env` with new contract address. This shows off NEAR's nifty account name system.
   - call the contract's `set_mayor` function to set self as mayor (to demonstrate common errors/gotchas, initially instructs them to call `set_mayor` with poorly-formed JSON). This shows off NEAR-specific feature allowing contracts to accepts JSON as input.

5. After setting the mayor and refreshing the page, the page now:

   - user part: shows a special "Howdy, Mayor!" message
   - developer part: intro to smart contracts & rust-sdk-rs; where to open the contract to see the `set_mayor` function
   - going further: modify `set_mayor` to store Mayor's name, install rustup & target wasm-unknown-unknown, compile updated contract, deploy, call updated `set_mayor` function with near-cli, update frontend to show name

   Then, to set up the next step:

   - developer part: Has learner create new subaccount & deploy NFT contract to it, then update `.env` with new contract address (might require restarting `yarn start` process)

6. **NFTs**: Mayor can now get started on the first major upgrade to the city's digital infrastructure: replacing paper deeds and filing cabinets with NFTs and distributed ledgers!

   - user part: gives more info on this new NFT-backed deed-management system, has the mayor add a couple properties to get it started, jokes with them that they might want to hire some interns to finish this data-entry step. All entered properties are initially owned by Mayor; page explains TBD plan to verify people's identities/accounts prior to transfering these NFTs to them. Page explains ability to comply with local laws & current real-estate transferrence process by doing something like requiring on-chain transactions to be signed by a title company. Page also explains benefits of using NFTs instead of paper. (Might also be worth getting into privacy considerations, having all property ownership on a public blockchain.)
   - developer part: Introduces nomicon & NFT standard; points out what simple programs these are, and that they get their whole power through being deployed to a blockchain and being a standard; says where to open the Non-Fungible Token contract code; introduces `near-contract-standards` library.

   Then, to set up the next step:

   - developer part: Has learner create new subaccount & deploy FT contract to it and update `.env` with new contract address (might require restarting `yarn start` process)

7. **FTs**: New feature unlocked! The page now shows a "Register to vote, earn $RAEN" button

   User part:

   - Explains that RAEN tokens are the city's new local currency, to be minted solely when people register to vote via the new website, and which are already being accepted at many local establishments
   - Has mayor register to vote
     - requires selecting one of the addresses entered as an NFT
     - shows RAEN balance afterward

   Developer part:

   - Says where to open the Fungible Token contract, highlights & explains the [cross-contract call](https://docs.near.org/docs/tutorials/contracts/cross-contract-calls) from main contract's `register_voter` function to FT contract's `transfer`
   - Discusses Sybil-resistance challenges around real-world identity verification, especially given the 1000-RAEN incentive to cheat
   - going further: use Testnet version of Ref Finance to provide liquidity for the RAEN/nUSD pair and swap one to the other

   Then, to set up the next step:

   - developer part: Has learner create new subaccount & deploy DAO contract to it and update `.env` with new contract address (might require restarting `yarn start` process)

8. **DAOs**: All registered voters see a new feature: "Make a proposal" – [DAO](https://whiteboardcrypto.com/what-is-a-dao/) functionality for the city

   User section:

   - Any voter can make proposals, but exact voting mechanics (who is allowed to vote on proposals, how much their votes count, when voting happens) can be decided by the city and can be modified via further proposals over time.
   - Anyone making proposals can optionally attach RAEN, which will be released to the city treasury only if the proposal is ratified. This allows proposers to "put their money where their mouth is", putting real money on the line to show that they are serious about getting this proposal passed.

   Developer section:

   - The "optional RAEN attachment" feature shows off two NEAR-specific features:
     -  Function Call keys don't need to sign every transaction (user can make proposal with familiar web2 experience), but attaching a deposit requires signing via NEAR Wallet.
     - `transfer_call` functionality of FTs: if attaching RAEN, the initial contract call goes to the FT contract's `transfer_call` function, which then makes a cross-contract call to the DAO contract.
   - Mention ability for contract owner to mint self unlimited RAEN or change votes due to existence of [Full Access](https://docs.near.org/docs/concepts/account#access-keys) keys (another NEAR-specific feature), and how a real-world contract would want to remove all Full Access keys and pay for a rigorous security audit if maintainers want to avoid really bad press.
   - Mention that even with all Full Access removed, the contract could still be [updated via a DAO vote](https://sdk-g4yv.onrender.com/upgrading/via-dao-vote).

9. Going further: Introduction to project's [near-sandbox](https://www.npmjs.com/package/near-sandbox) tests, showing that all current functionality has passing tests, but there are failing tests for not-yet-developed features. Self-guided exercise from here: implement these features, make the tests pass! Some feature ideas:

   - Rather than just "the Mayor and everyone else", contract also has other roles: city council, block captain, building coordinator
   - These different roles get different voting power on proposals, which is _not_ represented with FTs or NFTs because they're not meant to be sellable assets
   - Only Mayor and City Council members should be able to change someone else's role
   - Get rid of `set_mayor` in favor of more general `set_role`
   - Allow voters to comment on Proposals and optionally attach more RAEN to go toward the proposed project/improvement
   - Implement different governance systems: direct democracy, representative democray, liquid democracy, sortition
   - Implement different voting systems