# BlockPool

We are building a project for a hackathon on web3 in defi track {
Redefine the boundaries of onchain DeFi infrastructure with Uniswap v4 hooks. Unlock custom liquidity logic, dynamic fees, rehypothecation, stablecoin-optimized pools, and beyond. Build it to be composable and easy to integrate}.
Basic idea is :

+ Community Transactions, is a decentralized platform where local retailers can team up to place bulk orders directly from manufacturers. All transactions happen onchain using smart contracts and our  own platform token. The more retailers join an order, the lower the cost per unit—( thanks to DeFi logic and Uniswap v4 hooks that adjust pricing dynamically ).
Platform basically has two main parts one is manufacturer and other is retailer. manufacturer like britania creates an order request .He mentions the min order value, their products. So many manufacturers list their requirements similary.

Retailer : he ll be shown the requirements raised by the manufacturer . he adds hiss requirements as per his shop. if the cost of his order value is less than the min cost proposed by the manufacturer, so other retailers can pool their order in that deck.
As soon as the min amount is reached order is placed. the manufacturer allots special discount if the value of ur groups's order is x percent greaTER than min order value.

- Illustrative Use Case Flow
 
Manufacturer Posts Order: Stakes tokens to list 10,000-unit order at $1/unit minimum.

Retailers Join Pool: Each locks tokens to reserve 100-unit allotment and earns a small yield on staked tokens.

Threshold Reached: Smart contract aggregates funds; Uniswap v4 hook applies bulk discount, lowering price to $0.90.
Token Rewards Distributed: Retailers receive platform tokens proportional to stake and liquidity‐provider fees.

Governance Vote: Token holders vote to adjust future discount curves based on market feedback.
When Target Reached → Funds Auto-Sent to Manufacturer. thn the order is accepted by the manufacturer.

We are building a platform which has its own tokens

So basically idea is to remove the middle man that is wholesaler and reducing the logistic cost one side
Tech stack:- solidity for smart contracts, wagmi for integration of contract to frontend and nextjs
