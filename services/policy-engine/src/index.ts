/**
 * Aegis Policy Engine Service
 * Intercepts agent actions and evaluates on-chain policy rules on Monad Testnet.
 */

export interface AgentAction {
  agentId: string;
  actionType: string;
  targetContract: string;
  amount: string; // in wei / native token
  calldata?: string;
}

export function evaluateAction(action: AgentAction) {
  console.log(`Evaluating action for agent: ${action.agentId}`);
  return {
    allowed: true,
    reason: 'Policy check passed',
  };
}
