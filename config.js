/**
 * Crypto
 */
export const DEFAULT_PREFIX = 'panacea';
export const PRIVKEY_LEN = 32; // 32bytes
export const PRIVKEY_MAX = 'FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364140'; // based on https://en.bitcoin.it/wiki/Secp256k1
export const MNEMONIC_LEN = 256; // 256 bit entropy
export const DECODED_ADDR_LEN = 20; // 20 byte
export const HD_PATH = "44'/371'/0'/0/";
export const CURVE = 'secp256k1';

/**
 * TX
 */
export const DENOM = 'umed';
export const QUERY = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 20,
};
export const PARAM = '<parameter>';
export const APIS = {
  nodeInfo: '/node_info',
  syncStatus: '/syncing',
  latestBlock: '/blocks/latest',
  block: `/blocks/${PARAM}`,
  latestValidatorSets: '/validatorsets/latest',
  validatorSets: `/validatorsets/${PARAM}`,
  tx: `/txs/${PARAM}`,
  txs: '/txs',
  balance: `/bank/balances/${PARAM}`,
  delegatorReward: `/distribution/delegators/${PARAM}/rewards`,
  delegatorRewardByValidator: `/distribution/delegators/${PARAM}/rewards/${PARAM}`,
  delegatorWithdrawAddress: `/distribution/delegators/${PARAM}/withdraw_address`,
  validatorDistributionInfo: `/distribution/validators/${PARAM}`,
  validatorOutstandingRewards: `/distribution/validators/${PARAM}/outstanding_rewards`,
  validatorReward: `/distribution/validators/${PARAM}/rewards`,
  communityPool: '/distribution/community_pool',
  distributionParams: '/distribution/parameters',
  delegator: `/staking/delegators/${PARAM}/delegations`,
  delegatorInfoFromValidator: `/staking/delegators/${PARAM}/delegations/${PARAM}`,
  delegatorUnbondingInfo: `/staking/delegators/${PARAM}/unbonding_delegations`,
  delegatorUnbondingInfoFromValidator: `/staking/delegators/${PARAM}/unbonding_delegations/${PARAM}`,
  redelegations: '/staking/redelegations',
  validatorsFromDelegator: `/staking/delegators/${PARAM}/validators`,
  validatorFromDelegator: `/staking/delegators/${PARAM}/validators/${PARAM}`,
  delegatorTxs: `/staking/delegators/${PARAM}/txs`,
  candidates: '/staking/validators',
  validator: `/staking/validators/${PARAM}`,
  delegatorsByValidator: `/staking/validators/${PARAM}/delegations`,
  unbondingDelegatorsByValidator: `/staking/validators/${PARAM}/unbonding_delegations`,
  stakingPool: '/staking/pool',
  stakingParams: '/staking/parameters',
  validatorSigningInfo: `/slashing/validators/${PARAM}/signing_info`,
  validatorsSigningInfo: '/slashing/signing_infos',
  slashingParams: '/slashing/parameters',
  proposals: '/gov/proposals',
  proposal: `/gov/proposals/${PARAM}`,
  proposer: `/gov/proposals/${PARAM}/proposer`,
  proposalDeposit: `/gov/proposals/${PARAM}/deposits`,
  proposalDepositFromDepositor: `/gov/proposals/${PARAM}/deposits/${PARAM}`,
  proposalVotes: `/gov/proposals/${PARAM}/votes`,
  proposalVoteFromVoter: `/gov/proposals/${PARAM}/votes/${PARAM}`,
  proposalTally: `/gov/proposals/${PARAM}/tally`,
  govDepositParams: '/gov/parameters/deposit',
  govTallyParams: '/gov/parameters/tallying',
  govVoteParams: '/gov/parameters/voting',
  mintParams: '/minting/parameters',
  inflation: '/minting/inflation',
  annualProvisions: '/minting/annual-provisions',
  topics: `/api/v1/aol/${PARAM}/topics`,
  topic: `/api/v1/aol/${PARAM}/topics/${PARAM}`,
  writers: `/api/v1/aol/${PARAM}/topics/${PARAM}/acl`,
  writer: `/api/v1/aol/${PARAM}/topics/${PARAM}/acl/${PARAM}`,
  record: `/api/v1/aol/${PARAM}/topics/${PARAM}/records/${PARAM}`,
  account: `/auth/accounts/${PARAM}`,
  nodeVersion: '/node_version',
};