/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import {
  // socketwss,
  abi,
  DecimalLatestAnswerAbiOfEthToUsd,
  chainMap,
  // bnbsocketwss,
} from './utils';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Web3 = require('web3');

@Injectable()
export class AppService {
  ContractFunction = (token: string, chainId: number): any[] => {
    const web3 = new Web3(chainMap[chainId].socketwss);
    console.log(web3, 'webbb');
    let erc20token = new web3.eth.Contract(
      chainMap[chainId].contractAbi,
      chainMap[chainId].factoryAddress,
    );
    console.log(erc20token, 'erc20token');
    let erc20decimal = new web3.eth.Contract(abi, token);
    console.log(erc20decimal, 'decii');
    let erc20EthToUsd = new web3.eth.Contract(
      DecimalLatestAnswerAbiOfEthToUsd,
      chainMap[chainId].NativeTokenTousd,
    );
    console.log(erc20EthToUsd, 'ethtousd');

    return [erc20EthToUsd, erc20decimal, erc20token, web3];
  };

  async contractInteraction(token: string, chainId: number) {
    const callLocalVariable = await this.ContractFunction(token, chainId);
    const erc20Token = callLocalVariable[2];
    const lpAddress = await erc20Token.methods
      // weth contract address
      .getPair(token, chainMap[chainId].NativeToken)
      .call();
    console.log(lpAddress, 'lpAddress');

    const erc20Decimal = callLocalVariable[1];
    // decimal value of input token
    const contractInterction = await erc20Decimal.methods.decimals().call();
    console.log(contractInterction, 'conteractInteraction');
    const Erc20EthToUsd = callLocalVariable[0];
    const ContractInteractionOfDecimal = await Erc20EthToUsd.methods
      .decimals()
      .call();
    // console.log(ContractInteractionOfDecimal, 'decimal');
    console.log(ContractInteractionOfDecimal, 'ContractInteractionOfDecimal');
    const ContractInteractionOfLatestAns = await Erc20EthToUsd.methods
      .latestAnswer()
      .call();
    console.log(ContractInteractionOfLatestAns, 'latestanswer');
    return [
      lpAddress,
      contractInterction,
      ContractInteractionOfDecimal,
      ContractInteractionOfLatestAns,
    ];
  }
  async getHello(token: string, chainId: number) {
    let Dai;
    let weth;
    const CallLocalVaribale = await this.ContractFunction(token, chainId);
    const web3Initialzatioin = CallLocalVaribale[3];
    // const erc20decimal = new web3.eth.Contract(abi, token);
    // if ('0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2' == token) {
    //   weth == token;
    // }

    console.log(CallLocalVaribale, 'calllocalvariables');
    const FromBlock = await CallLocalVaribale[3].eth.getBlockNumber();
    console.log(FromBlock, 'fromblock');
    const CallContractInteration = await this.contractInteraction(
      token,
      chainId,
    );
    const CallLpaddress = CallContractInteration[0];
    let options = {
      address: CallLpaddress,
      topics: [
        '0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822',
      ],

      fromBlock: FromBlock - 1000,

      toBlock: 'latest',
    };
    // const web3Initialzatioin = CallLocalVaribale[3];
    const subscription = web3Initialzatioin.eth
      .subscribe(
        'logs',
        {
          address: CallLpaddress,
          options,
        },
        function (error, result) {
          console.log(error, 'errorsofsubscrib');

          if (!error) console.log(result, 'rrr');
        },
      )
      .on('connected', function (subscriptionId) {
        console.log(subscriptionId, 'subsripidd-------');
      })
      .on('data', function (log) {
        console.log(log, 'datalog');
      })
      .on('changed', function (log) {
        console.log(log, 'changelog');
      });
    console.log(subscription, 'subscription--------------------');

    const receipt = await web3Initialzatioin.eth.getTransactionReceipt(
      // subscription[0].logs.transactionHash,
      // '0x47e034ea5fc9ec278b5164b9688bc5ff27ee565acd8333a5e7ebad8bd565d8f9',
      chainMap[chainId].TransactionHash,
    );
    console.log(subscription, 'receipt');
    console.log(receipt.logs, 'logggg');
    const FilterRecieptLogs = receipt.logs.filter((el) => {
      return (
        el.address.toLowerCase() === CallLpaddress.toLowerCase() &&
        el.topics.includes(chainMap[chainId].swapTopic)
      );
    });
    console.log(CallLpaddress, 'lp');
    console.log(FilterRecieptLogs, 'neww');

    // input,hexString,output
    const decoding = web3Initialzatioin.eth.abi.decodeLog(
      [
        {
          type: 'uint256',
          name: 'amount0In',
        },
        {
          type: 'uint256',
          name: 'amount0Out',
        },
        {
          type: 'uint256',
          name: 'amount1In',
        },
        {
          type: 'uint256',
          name: 'amount1Out',
        },
      ],
      // reciept data

      FilterRecieptLogs[0].data,
      // swapTopic
      '0xd78ad95fa46c994b6551d0da85fc275fe613ce37657fb8d5e3d130840159d822',
    );
    console.log(decoding, 'decoding');

    const CallDecimalContractInteraction = CallContractInteration[1];

    // amount divided by 10 power token decimal
    let decodeamount0In =
      decoding.amount0In / 10 ** CallDecimalContractInteraction;
    let decodeamount0Out =
      decoding.amount0Out / 10 ** CallDecimalContractInteraction;
    let decodeamount1In =
      decoding.amount1In / 10 ** CallDecimalContractInteraction;
    let decodeamount1Out =
      decoding.amount1Out / 10 ** CallDecimalContractInteraction;

    console.log(decodeamount0In, 'decodeamount0In');
    if (decodeamount0In != 0 && decodeamount1Out != 0) {
      console.log('sell Transaction');
    } else if (decodeamount0Out != 0 && decodeamount1In != 0) {
      console.log('buy transaction ');
    }
    // store dai and weth token amount which is not equal to zero
    if (decodeamount0In != 0) {
      Dai = decodeamount0In;
      console.log(Dai, 'Dai');
    }
    if (decodeamount0Out != 0) {
      Dai = decodeamount0Out;
      console.log(Dai, 'Dai');
    }
    if (decodeamount1In != 0) {
      weth = decodeamount1In;
      console.log(weth, 'weth');
    }
    if (decodeamount1Out != 0) {
      weth = decodeamount1Out;
      console.log(weth, 'weth');
    }

    const DecimalContractInteraction = CallContractInteration[2];
    const ContractInterationOfLatestValue = CallContractInteration[3];
    console.log(
      ContractInterationOfLatestValue,
      'ContractInteractionOfLatestAns',
    );
    const preciseLatestAns =
      ContractInterationOfLatestValue / 10 ** DecimalContractInteraction;
    console.log(preciseLatestAns, 'preciseLatestAns');

    // convert into usd price
    const UsdPrice = preciseLatestAns * weth;
    console.log('$', UsdPrice, 'usdprice of weth');
    // if ('0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2' == token) {
    //   console.log('incorrect');
    // }
    console.log(chainMap, 'chain');
  }
}
