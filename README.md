# AEGIS — Product Requirements & Project Context

## 1. Project Identity
**Project Name:** Aegis
**Tagline:** Trust infrastructure for autonomous AI agents. Verifiable identity, reputation, and programmable permissions on Monad.

**Core positioning:**
Aegis is the identity, reputation, authorization, and risk-control layer for autonomous AI agents operating onchain.

Aegis is being built for the Metropolis on Monad Hackathon.
The project should be treated as a serious infrastructure/protocol product rather than a generic hackathon AI application.

## 2. Hackathon Context
**Primary Track:** Trust, Identity & AI Infrastructure
Aegis is primarily targeting this track because its central purpose is to solve the trust and authorization problem for autonomous AI agents.

The project combines:
- Verifiable agent identity
- Agent credentials
- Portable reputation
- Delegated authority
- Programmable permissions
- Risk evaluation
- AI reasoning
- Onchain execution
- Human-controlled authorization

The blockchain is not merely being used as a database or payment rail. Monad is the execution and settlement layer where authorized actions can become verifiable onchain actions.

## 3. Sponsor / Bounty Strategy
Aegis should integrate sponsor technologies only where they naturally fit the architecture.
The sponsor integrations are not separate features. They should form one coherent trust pipeline.

### Target sponsor integrations

#### 1. Mera
**Bounty:**
- Best Mera-Powered UX on Monad — $2,500
- Mera: One Passkey, Many Keys — $2,500

**Role in Aegis:**
Mera provides the human-facing account and passkey layer.
Conceptually:
```text
Human
  ↓
Passkey / Mera
  ↓
Delegates authority
  ↓
AI Agent
```
The user should not have to manually manage complicated blockchain keys just to create and control an AI agent. Mera represents the root of human authority.

#### 2. Qwen
**Bounty:** Best Builds with Qwen 3.8 Max — $5,000

**Role in Aegis:**
Qwen should provide genuine agentic reasoning. It should help the autonomous agent:
- Understand the user's request
- Plan an action
- Evaluate available options
- Produce an action request
- Reason over policy/risk context
- Explain why it wants to perform an action

**Important architectural principle:**
Qwen does NOT directly control the blockchain. Instead:
```text
User Request
     ↓
Qwen Agent
     ↓
Action Request
     ↓
Aegis Authorization
     ↓
Decision
     ↓
Execution
```
The AI proposes. Aegis authorizes. The blockchain enforces.

#### 4. Nansen
**Bounty:** Best use of Nansen — $5,000

**Role in Aegis:**
Nansen provides external onchain intelligence. Aegis needs to answer: "Even if this agent is authorized, is the action or destination suspicious?"

Nansen can contribute signals related to:
- Wallet activity
- Address intelligence
- Contract activity
- Historical behavior
- Onchain risk context

Example:
```text
Agent wants to send $1,200
        ↓
Policy allows $1,500
        ↓
But target is suspicious
        ↓
Risk increases
        ↓
Aegis may block / require additional authorization
```
This makes Aegis more than a simple spending-limit smart contract.

#### 5. Envio
**Bounty:** Best Use of Envio — $1,000

**Role in Aegis:**
Envio should provide the indexed activity/history layer.
Aegis contracts emit events such as:
- AgentCreated
- PolicyCreated
- PolicyUpdated
- ActionRequested
- ActionApproved
- ActionBlocked
- TransactionExecuted
- CredentialAdded

Envio indexes these events. The Aegis dashboard can then show:
**Agent Activity**
✓ Agent created
✓ Policy created
✓ $75 transaction approved
✗ $1,200 transaction blocked
✓ Policy updated
✓ $1,200 transaction approved

This creates the agent's auditable history and reputation context.

#### 6. Chainlink CRE
**Bounty:** Best workflow with CRE — $3,000

**Role in Aegis:**
Chainlink CRE should orchestrate the trust evaluation workflow.
Conceptually:
```text
Action Request
      ↓
CRE Workflow
      ↓
Identity
      ↓
Policy
      ↓
Nansen Risk
      ↓
Agent Reputation
      ↓
AI Reasoning
      ↓
Decision
      ↓
Monad Execution
```
CRE should be presented as workflow/orchestration infrastructure rather than as an unrelated integration.

#### 7. Monad Foundation
**Bounty:** Best Community Team Project — $5,000
This is an additional ecosystem/community bounty subject to eligibility and the official bounty requirements.
Monad itself is the primary blockchain execution environment for Aegis.

## 8. Combined Sponsor Architecture
The complete sponsor story should be:
```text
                    HUMAN
                      │
                      ▼
                Mera / Passkey
                      │
                      ▼
               Agent Identity
                      │
                      ▼
               Agent Passport
                      │
        ┌─────────────┼─────────────┐
        │             │             │
        ▼             ▼             ▼
   Credentials    Reputation    Permissions
        │             │             │
        └─────────────┼─────────────┘
                      │
                      ▼
                  QWEN AGENT
                      │
                      ▼
                Action Request
                      │
                      ▼
               CHAINLINK CRE
                      │
             ┌────────┴────────┐
             │                 │
             ▼                 ▼
          NANSEN             ENVIO
       Risk Context       Activity History
             │                 │
             └────────┬────────┘
                      ▼
                AEGIS POLICY
                    ENGINE
                      │
                      ▼
                  DECISION
                 /        \
                /          \
             BLOCK        APPROVE
                           │
                           ▼
                       EXECUTOR
                           │
                           ▼
                         MONAD
```
This is the core architecture.

## 9. The Problem
AI agents are rapidly moving from systems that only generate information to systems that can actually take actions.
An autonomous agent can potentially:
- Send payments
- Buy assets
- Call smart contracts
- Manage treasury funds
- Interact with DeFi protocols
- Hire other agents
- Execute workflows
- Operate continuously without human confirmation

This creates a fundamental problem:
**How do we safely give an AI agent authority to act on behalf of a human or organization?**

A wallet address alone does not answer this. We need to know:
- **Who is the agent?** Identity.
- **Who controls it?** Ownership / delegation.
- **What has it proven?** Credentials and reputation.
- **What is it allowed to do?** Permissions.
- **Is this particular action safe?** Risk evaluation.
- **Why was the action allowed or blocked?** Auditable decision.

## 10. Real-World Analogy
Aegis should be understandable even to someone who knows nothing about blockchain.
Think about an employee. A company does not simply tell an employee: "Here is the company bank account. Do anything you want."

Instead, the employee receives:
- Identity
- Role
- Credentials
- Access permissions
- Spending limits
- Approved systems
- Audit history

For example:
Employee:
- **Role:** Purchasing Manager
- **Can:** Purchase equipment
- **Limit:** $1,000 per transaction
- **Cannot:** Transfer company funds to arbitrary accounts

Aegis applies the same concept to AI agents.
Instead of an employee: AI Agent
Instead of an employee ID: Verifiable Agent Identity
Instead of company permissions: Programmable Agent Policies
Instead of an access-control system: Aegis Authorization Layer

## 11. The Core Aegis Concept
Aegis should be built around this five-stage model:
```text
IDENTITY
    ↓
REPUTATION
    ↓
PERMISSIONS
    ↓
RISK
    ↓
ACTION
```
Every major feature should map to one of these concepts.

## 12. Agent Passport
Every autonomous agent should have an Agent Passport. The passport is the agent's trust profile.
Conceptually:
```text
Agent Passport

Identity
 ├── Agent ID
 ├── Owner
 └── Status

Credentials
 ├── Role
 ├── Verification
 └── Capabilities

Reputation
 ├── Successful actions
 ├── Failed actions
 ├── Historical activity
 └── Trust signals

Permissions
 ├── Spending limits
 ├── Allowed actions
 ├── Allowed contracts
 └── Allowed recipients

Activity
 ├── Approved actions
 ├── Blocked actions
 └── Executed transactions
```
The passport should be one of the main UI concepts.

## 13. Core Use Case
The first version should focus on a single concrete use case: **Autonomous Shopping / Procurement Agent**

The user creates: ShopBot
Role: Electronics Purchasing Agent

The user delegates:
- Maximum transaction: $100
- Daily limit: $500
- Allowed action: PURCHASE
- Approved merchants: Selected contracts

The agent is now allowed to act independently within those boundaries.

## 14. Successful Action
User tells the agent: "Buy the required component."
The agent decides to purchase something worth: $75
The agent generates: ActionRequest

Aegis evaluates:
Identity       ✓
Credential     ✓
Reputation     ✓
Permission     ✓
Risk           ✓

Decision: **APPROVED**
The transaction is executed on Monad.

## 15. Blocked Action
Now the agent attempts: $1,200

Aegis evaluates:
Identity       ✓
Credential     ✓
Reputation     ✓
Permission     ✗
Risk           ?

The agent's policy says: Maximum transaction = $100
Therefore: $1,200 > $100

Decision: **BLOCKED**
No transaction should be executed.
The dashboard should clearly explain: "Transaction blocked because the requested amount exceeds the agent's delegated authority."
This is one of the most important moments of the demo.

## 16. Policy Change
The user can intentionally change: $100 → $1,500
Aegis records the policy change.
The agent retries.
Now:
Identity       ✓
Credential     ✓
Reputation     ✓
Permission     ✓
Risk           ✓

The transaction can be approved and executed.
This demonstrates: Human-defined authority → autonomous execution → policy enforcement.

## 17. Important Security Principle
Aegis must follow: **AI proposes. Policy authorizes. Smart contracts enforce.**

Never design the system as:
User → AI → Blockchain

Instead:
User → AI Agent → Action Request → Aegis Authorization → Risk + Policy + Reputation → Decision → Executor → Monad

Even if the AI is manipulated, the authorization layer remains the control boundary.

## 18. Deterministic Policy vs AI Reasoning
This distinction is critical.

AI reasoning should handle things such as:
- Understanding user intent
- Planning
- Evaluating context
- Explaining decisions
- Combining multiple signals

Deterministic policy should handle hard constraints:
- maxTransactionAmount
- dailyLimit
- allowedActions
- allowedContracts
- allowedRecipients
- agentStatus
- credentialRequirements

For example:
AI: "I think this purchase is reasonable."
Policy: "The agent is not authorized to spend $1,200."
Final: **BLOCK**
The AI cannot override the policy.

## 19. Main Components
Aegis should consist of these conceptual components:

**A. Agent Identity Registry**
Maintains: agentId, owner, status, metadata

**B. Agent Passport**
Represents: identity, credentials, reputation, permissions, activity

**C. Policy Engine**
Evaluates: ActionRequest + Agent + Policy + Risk Context
and produces: Decision

**D. Risk Engine**
Combines: Nansen intelligence, Agent history, Reputation, Target information, Transaction context

**E. AI Agent**
Uses Qwen to: Understand tasks, Plan, Select actions, Generate ActionRequests, Reason about evidence

**F. Execution Gateway**
The final gateway before Monad execution. Only authorized actions should pass through it.

**G. Activity / Reputation Layer**
Envio indexes Aegis events. This provides historical context.

## 20. Technical Stack
**Frontend:** Next.js, TypeScript, Tailwind CSS, shadcn/ui, wagmi, viem
**Backend:** Node.js, TypeScript, Fastify or NestJS, PostgreSQL, Prisma
**Smart Contracts:** Solidity, Foundry, Monad
**AI:** Qwen 3.8 Max
**Identity / Account Layer:** Mera, Passkeys
**Onchain Intelligence:** Nansen
**Indexing:** Envio
**Workflow:** Chainlink CRE
**Infrastructure:** Docker, GitHub Actions, pnpm, Turborepo

## 21. Repository Architecture
*(Already scaffolded based on recommendations)*

## 22. Team Ownership
The architecture should support four or five teammates working independently.
- **Teammate 1 — Frontend / UX:** Dashboard, Agent Passport, Policy editor, Risk screen, Activity, Transaction UI
- **Teammate 2 — Smart Contracts / Monad:** Agent Registry, Passport, Policy, Executor, Events, Monad deployment
- **Teammate 3 — AI / Qwen:** Autonomous agent, Planning, Tool use, ActionRequest generation, Qwen reasoning
- **Teammate 4 — Backend / Policy / Nansen:** API, Policy evaluation, Risk evaluation, Reputation, Nansen integration
- **Teammate 5 — Integrations / Infrastructure:** Envio, Chainlink CRE, Mera, Indexing, Deployment, CI/CD

## 23. Shared Data Model
All components should use common concepts.

**Agent**
- id, owner, name, role, status

**Policy**
- maxTransactionAmount, dailyLimit, allowedActions, allowedContracts, allowedRecipients

**Action Request**
- agentId, action, target, amount, calldata

**Risk Assessment**
- target, signals, riskLevel, reasons

**Decision**
- approved, reasons, riskLevel, policyId

## 24. Core System Flow
The complete Aegis flow is:
1. HUMAN CREATES AGENT
2. MERA / PASSKEY
3. AGENT IDENTITY CREATED
4. AGENT PASSPORT CREATED
5. HUMAN DEFINES POLICY
6. AGENT RECEIVES DELEGATED AUTHORITY
7. USER GIVES AGENT A TASK
8. QWEN REASONS ABOUT THE TASK
9. AGENT CREATES ACTION REQUEST
10. AEGIS RECEIVES ACTION REQUEST
11. IDENTITY CHECK
12. CREDENTIAL CHECK
13. REPUTATION CHECK
14. NANSEN RISK INTELLIGENCE
15. ENVIO HISTORICAL ACTIVITY
16. POLICY EVALUATION
17. QWEN REASONS OVER CONTEXT
18. CHAINLINK CRE ORCHESTRATES WORKFLOW
19. FINAL AUTHORIZATION DECISION
20. BLOCK or APPROVE -> EXECUTOR -> MONAD -> AUDIT EVENT

## 25. Frontend Pages
The product should conceptually have these screens:
- **Dashboard:** Show Total agents, Active agents, Actions, Approved actions, Blocked actions, Risk events
- **Agents:** List Agent, Status, Reputation, Permissions, Recent Activity
- **Agent Passport:** Show Identity, Owner, Credentials, Reputation, Permissions, Activity
- **Policy:** Allow the user to configure Transaction limit, Daily limit, Allowed actions, Approved contracts, Approved recipients
- **Action Evaluation:** Show the complete decision (Action, Agent, Target, Amount, Identity, Credentials, Reputation, Policy, Risk, Final Decision)
- **Activity:** Show the historical agent activity indexed by Envio.

## 26. MVP Boundary
The hackathon version should NOT attempt to support every type of autonomous agent.
Focus on: **One agent + one use case + one complete trust pipeline.**

The MVP must demonstrate:
✓ Agent Identity
✓ Agent Passport
✓ Credentials
✓ Reputation / activity
✓ Programmable permissions
✓ AI agent
✓ Qwen reasoning
✓ Nansen risk context
✓ Envio activity indexing
✓ CRE workflow
✓ Mera/passkey account experience
✓ Monad execution
✓ Blocked transaction
✓ Approved transaction

## 27. What the Demo Must Prove
The final demo should answer five questions.
1. Who is this agent? (Agent Identity)
2. What has it proven? (Credentials + Reputation)
3. What can it do? (Permissions)
4. Should it perform this action? (Risk + Policy + AI reasoning)
5. Can the system actually enforce the decision? (Smart contracts + Monad)

## 28. What NOT to Build
Do not expand the MVP into: Agent marketplace, DAO, Token, NFT system, Social network, Generic chatbot, Generic AI wallet, Trading platform, Payment application, Mobile application, Multi-agent economy, Full decentralized identity protocol.
Those are potential future directions, not hackathon MVP requirements.

## 29. Future Vision
The hackathon implementation is only the first version.
The long-term Aegis vision is:
Human → Agent → Agent Passport → Trust → Authorization → Action

Eventually, another protocol should be able to ask: "Can this AI agent perform this action?"
Aegis should return something like:
```text
Agent: agent_123
Requested: TRANSFER $500
Identity: VERIFIED
Credential: VALID
Reputation: TRUSTED
Policy: AUTHORIZED
Risk: LOW
Decision: APPROVED
```
This makes Aegis potentially useful as infrastructure that other agent-based applications can integrate.

## 30. Product Philosophy
Aegis should follow these principles:
- **Principle 1:** Human authority comes first. AI agents receive delegated authority.
- **Principle 2:** Least privilege. Agents should only receive the permissions they need.
- **Principle 3:** AI does not equal authorization. The model can reason, but deterministic policy remains a control boundary.
- **Principle 4:** Every important action should be explainable. Aegis should be able to explain why an action was approved or blocked.
- **Principle 5:** Activity should be auditable. Agent actions and policy decisions should create an observable history.
- **Principle 6:** Onchain enforcement matters. The final authorization boundary should not exist only in a frontend or backend.

## 31. The Core Product Statement
Everything in the project should ultimately support this statement:
**Aegis lets humans safely delegate programmable authority to autonomous AI agents.**
And the mechanism is: Identity → Reputation → Permissions → Risk → Action.

## 32. Final Hackathon Demo
The ideal final demo is approximately:
OPEN AEGIS → CONNECT WITH PASSKEY → CREATE "SHOPBOT" → SHOW AGENT PASSPORT → SET $100 TRANSACTION LIMIT → ASK AGENT TO BUY $75 ITEM → QWEN CREATES ACTION → AEGIS EVALUATES → ✓ APPROVED → MONAD TRANSACTION → ASK AGENT TO BUY $1,200 ITEM → AEGIS EVALUATES → ✗ BLOCKED → SHOW EXACT REASON → USER CHANGES LIMIT TO $1,500 → AGENT RETRIES → RISK + POLICY + IDENTITY PASS → ✓ APPROVED → MONAD TRANSACTION → ENVIO SHOWS COMPLETE HISTORY

That single flow should be the center of the entire product, architecture, README, demo video, and hackathon presentation.

## 33. Instruction for the Development Team
The development team should treat this document as the product context, not as an instruction to immediately generate the entire application.
Before implementation, the team should first establish:
1. System architecture
2. Component boundaries
3. Data models
4. Contract interfaces
5. API contracts
6. Agent-to-policy flow
7. Sponsor integration boundaries
8. Team ownership
9. MVP scope
10. Demo flow

Implementation should then proceed component-by-component while preserving the central Aegis architecture.
Do not add features merely because they are technically interesting or because another hackathon sponsor exists. Every feature must strengthen the core proposition:
**How can a human safely give an autonomous AI agent the authority to act on their behalf?**
That is the Aegis problem.
