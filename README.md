<div align="center">
  <h1>🛡️ AEGIS</h1>
  <p><strong>Trust infrastructure for autonomous AI agents.</strong></p>
  <p>Built for the Metropolis on Monad Hackathon (Trust, Identity & AI Infrastructure Track)</p>
</div>

## 📖 The Problem

AI agents are rapidly evolving from chat assistants to autonomous actors. They will buy things, move assets, interact with smart contracts, and execute complex workflows.

However, giving an AI agent a crypto wallet today means granting it **unrestricted authority**. If an agent is compromised, hallucinated, or injected with a malicious prompt, it can drain funds or execute catastrophic actions.

We need to know:
- *Who is this agent?*
- *Who authorized it?*
- *What is its daily spending limit?*
- *What contracts is it allowed to interact with?*
- *Is this specific action safe?*

## 💡 The Solution: Aegis

**Aegis is an authorization infrastructure layer for the agentic economy.**

Aegis ensures that **AI proposes, Aegis authorizes, and Monad executes.** It gives autonomous agents verifiable identity, credentials, reputation, and programmable permissions. 

Before an agent executes an action, Aegis intercepts the request and evaluates its identity, delegated authority, and risk. If the action is within its bounds, it is approved. If it exceeds its authority, it is **blocked before the transaction reaches the chain.**

### The Aegis Trust Pipeline
`Identity` ➡️ `Credentials` ➡️ `Reputation` ➡️ `Permissions` ➡️ `Risk` ➡️ **`Action`**

## 🏗️ Architecture & Integrations

Aegis is built as a high-performance, verifiable monorepo on **Monad**.

### Core Infrastructure
- **Monad (Execution & Settlement):** The core smart contracts (`AegisRegistry`, `AegisPolicy`, `AegisPassport`, `AegisExecutor`) are deployed on Monad Testnet, providing high-throughput settlement for agent transactions.
- **Foundry:** Smart contract development, testing, and deployment.
- **Next.js & TypeScript:** Web dashboard and API backend.

### Sponsor Integrations (Primary Track: Trust, Identity & AI Infrastructure)
- **🧠 Alibaba Cloud Qwen 3.8 Max:** Powers the agent reasoning, planning, and generation of `ActionRequests` based on natural language intents.
- **🔍 Nansen:** Provides onchain risk intelligence. Evaluates the target contract/wallet of an agent's proposed action to flag malicious or highly suspicious interactions.
- **🔗 Chainlink CRE (Runtime Environment):** Orchestrates the trust workflow, collecting signals and coordinating policy evaluations before returning authorization decisions.
- **⚡ Envio:** High-performance indexer that tracks Agent creation, Policy updates, and `TransactionExecuted` or `ActionBlocked` events for the Aegis Dashboard.
- **🔑 Mera:** Provides a passkey-first human account layer. Humans use Mera to securely verify their identity and delegate specific authority policies to their AI agents without managing complex seed phrases.

## 📍 Live Deployments (Monad Testnet)

Our core contracts are actively deployed on the Monad Testnet (Chain ID `10143`):

| Contract | Address |
|---|---|
| **AegisRegistry** | `0xe3E57B284ab80CD465e097C0DeDA5f28f00d1854` |
| **AegisPolicy** | `0x354b349040b01A88Bf16cbB7E532060C2e24c6Fe` |
| **AegisPassport** | `0x909F4F75049E442B4B45C7105ff6fef92eeb56ff` |
| **AegisExecutor** | `0x6aB3113406143811B566567b2Ba002b8c20A90fC` |

*A mock agent `shopbot-001` is currently registered on-chain with an active 100 MON transaction limit policy.*

## 🎬 The Demo Scenario

We demonstrate a real-world **Shopping Agent (ShopBot)**:
1. **Delegation:** The user creates a policy restricting ShopBot to a $100 maximum transaction limit.
2. **Safe Action:** ShopBot proposes a $75 purchase. Aegis evaluates the policy and risk. The action is **APPROVED**, and the transaction executes successfully on Monad.
3. **Malicious/Rogue Action:** ShopBot attempts a $1,200 purchase. Aegis intercepts the request, determines it exceeds delegated authority, and marks it as **BLOCKED**. No blockchain transaction is generated. Funds are safe.
4. **Policy Update:** The human owner increases the policy limit to $1,500. The agent retries the $1,200 purchase, and it is now **APPROVED**.

## 🚀 Getting Started

### Prerequisites
- Node.js & `pnpm`
- Foundry
- PostgreSQL

### Local Setup
```bash
# Clone the repository
git clone https://github.com/vishnukothakapu/aegis.git
cd aegis

# Install dependencies
pnpm install

# Setup environment variables
cp .env.example .env
# Edit .env with your private keys and API keys
```

## 📂 Repository Structure

```text
aegis/
├── apps/
│   ├── web/               # Next.js Dashboard
│   └── agent-simulator/   # Qwen-powered agent environment
├── contracts/             # Solidity contracts (Aegis Core)
├── indexers/
│   └── envio/             # Envio indexing service
├── integrations/          # Adapters for Nansen, Qwen, CRE, Mera
├── packages/              # Shared TS ABIs, SDKs, UI components
└── services/
    ├── api/               # Core API Gateway
    └── policy-engine/     # Deterministic authorization logic
```

## 🛡️ Security Note
Aegis relies on the fundamental principle: **Never trust the agent.** The agent can reason and propose actions freely, but the execution is strictly constrained by explicit, human-defined deterministic authority.
