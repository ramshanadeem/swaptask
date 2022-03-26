/* eslint-disable @typescript-eslint/ban-ts-comment */
export const minAbi: any = [
  {
    constant: true,
    inputs: [],
    name: 'decimals',
    outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
];

export const abi = [
  {
    constant: true,
    inputs: [],
    name: 'decimals',
    outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
    payable: false,
    stateMutability: 'view',
    type: 'function',
  },
];

export const DecimalLatestAnswerAbiOfEthToUsd = [
  {
    inputs: [],
    name: 'decimals',
    outputs: [{ internalType: 'uint8', name: '', type: 'uint8' }],
    stateMutability: 'view',
    type: 'function',
  },

  {
    inputs: [],
    name: 'latestAnswer',
    outputs: [{ internalType: 'int256', name: '', type: 'int256' }],
    stateMutability: 'view',
    type: 'function',
  },
];
export const PencakeContractAbi = [
  [
    {
      inputs: [
        { internalType: 'address', name: '_feeToSetter', type: 'address' },
      ],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'token0',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'token1',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'address',
          name: 'pair',
          type: 'address',
        },
        { indexed: false, internalType: 'uint256', name: '', type: 'uint256' },
      ],
      name: 'PairCreated',
      type: 'event',
    },
    {
      constant: true,
      inputs: [],
      name: 'INIT_CODE_PAIR_HASH',
      outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      name: 'allPairs',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'allPairsLength',
      outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        { internalType: 'address', name: 'tokenA', type: 'address' },
        { internalType: 'address', name: 'tokenB', type: 'address' },
      ],
      name: 'createPair',
      outputs: [{ internalType: 'address', name: 'pair', type: 'address' }],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'feeTo',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [],
      name: 'feeToSetter',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: true,
      inputs: [
        { internalType: 'address', name: '', type: 'address' },
        { internalType: 'address', name: '', type: 'address' },
      ],
      name: 'getPair',
      outputs: [{ internalType: 'address', name: '', type: 'address' }],
      payable: false,
      stateMutability: 'view',
      type: 'function',
    },
    {
      constant: false,
      inputs: [{ internalType: 'address', name: '_feeTo', type: 'address' }],
      name: 'setFeeTo',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      constant: false,
      inputs: [
        { internalType: 'address', name: '_feeToSetter', type: 'address' },
      ],
      name: 'setFeeToSetter',
      outputs: [],
      payable: false,
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
];
export const swapTopic =
  '0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822';

// let EthereumChainMap: any;
// let BnbChainMap: any;
export const chainMap = {
  [1]: {
    contractAbi: [
      {
        constant: true,
        inputs: [
          { internalType: 'address', name: '', type: 'address' },
          { internalType: 'address', name: '', type: 'address' },
        ],
        name: 'getPair',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
    ],
    socketwss: `wss://speedy-nodes-nyc.moralis.io/14851cb63c3a7a8af082ecd0/eth/mainnet/ws`,
    factoryAddress: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
    NativeTokenTousd: '0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419',
    NativeToken: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
    TransactionHash:
      '0x47e034ea5fc9ec278b5164b9688bc5ff27ee565acd8333a5e7ebad8bd565d8f9',
    swapTopic:
      '0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822',
  },
  [56]: {
    contractAbi: [
      {
        inputs: [
          { internalType: 'address', name: '_feeToSetter', type: 'address' },
        ],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'constructor',
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: 'address',
            name: 'token0',
            type: 'address',
          },
          {
            indexed: true,
            internalType: 'address',
            name: 'token1',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'address',
            name: 'pair',
            type: 'address',
          },
          {
            indexed: false,
            internalType: 'uint256',
            name: '',
            type: 'uint256',
          },
        ],
        name: 'PairCreated',
        type: 'event',
      },
      {
        constant: true,
        inputs: [],
        name: 'INIT_CODE_PAIR_HASH',
        outputs: [{ internalType: 'bytes32', name: '', type: 'bytes32' }],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        name: 'allPairs',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'allPairsLength',
        outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          { internalType: 'address', name: 'tokenA', type: 'address' },
          { internalType: 'address', name: 'tokenB', type: 'address' },
        ],
        name: 'createPair',
        outputs: [{ internalType: 'address', name: 'pair', type: 'address' }],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'feeTo',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [],
        name: 'feeToSetter',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: true,
        inputs: [
          { internalType: 'address', name: '', type: 'address' },
          { internalType: 'address', name: '', type: 'address' },
        ],
        name: 'getPair',
        outputs: [{ internalType: 'address', name: '', type: 'address' }],
        payable: false,
        stateMutability: 'view',
        type: 'function',
      },
      {
        constant: false,
        inputs: [{ internalType: 'address', name: '_feeTo', type: 'address' }],
        name: 'setFeeTo',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
      {
        constant: false,
        inputs: [
          { internalType: 'address', name: '_feeToSetter', type: 'address' },
        ],
        name: 'setFeeToSetter',
        outputs: [],
        payable: false,
        stateMutability: 'nonpayable',
        type: 'function',
      },
    ],
    socketwss:
      'wss://speedy-nodes-nyc.moralis.io/14851cb63c3a7a8af082ecd0/bsc/mainnet/ws',
    factoryAddress: '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73',
    NativeTokenTousd: '0x0567F2323251f0Aab15c8dFb1967E4e8A7D42aeE',
    NativeToken: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    TransactionHash:
      '0xfdf7977e5be2398e6b7d2e357e65add52bd61684207568f5b3109111fb5369c4',
    swapTopic:
      '0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822',
  },
};
