import React, { useEffect, useState } from 'react'
import { SigningStargateClient, GasPrice, assertIsBroadcastTxSuccess, StargateClient } from '@cosmjs/stargate';
import { Circles } from "react-loader-spinner";
import Big from 'big-js';
import './App.css'

const App = () => {
    const [valueKey, setKeyValue] = useState()
    const [furyBalnce, setFuryBalance] = useState()
    const [adminAdd, setAdminAdd] = useState('') 
    const [amount, setAmount] = useState()
    const [txHash, setTxHash] = useState('')
    const [txHeight, settxHeight] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const initializeFurya = async () => {
        try {
            await window.leap.experimentalSuggestChain({
                chainId: "furya-1",
                chainName: "Furya",
                rest: "https://api.furya.xyz",
                rpc: "https://rpc.furya.xyz",
                bip44: {
                    coinType: 118,
                },
                bech32Config: {
                bech32PrefixAccAddr: "furya",
                bech32PrefixAccPub: "furyapub",
                bech32PrefixValAddr: "furyavaloper",
                bech32PrefixValPub: "furyavaloperpub",
                bech32PrefixConsAddr: "furyavalcons",
                bech32PrefixConsPub: "furyavalconspub",
                },
                currencies: [
                  {
                    coinDenom: "FURY",
                    coinMinimalDenom: "ufury",
                    coinDecimals: 6,
                    coinGeckoId: "fanfury",
                  },
                  {
                    coinDenom: "USK",
                    coinMinimalDenom: "ibc/093231535A38351AD2FEEFF897D23CF8FE43A44F6EAA3611F55F4B3D62C45014",
                    coinDecimals: 6,
                    coinGeckoId: "kujira",
                  }
                ],
                feeCurrencies: [{
                    coinDenom: "FURY",
                    coinMinimalDenom: "ufury",
                    coinDecimals: 6,
                    coinGeckoId: "fanfury",
                    gasPriceStep: {
                        low: 0.01,
                        average: 0.025,
                        high: 0.04,
                    },
                }],
                stakeCurrency: {
                    coinDenom: "FURY",
                    coinMinimalDenom: "ufury",
                    coinDecimals: 6,
                    coinGeckoId: "fanfury",
                },
                image: "https://raw.githubusercontent.com/cosmos/chain-registry/master/furya/images/fury.svg",
                theme: {
                    primaryColor: "#fff",
                    gradient: "linear-gradient(180deg, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0) 100%)",
                },
            });
        } catch (error) {
            console.error("Error initializing furya:", error);
        }
    };


       const getAccount = async () => {
        try {
            const key = await window.leap.getKey('furya-1');
            setKeyValue(key.bech32Address);
        } catch (error) {
            // Handle error if needed
        }
    };


    useEffect(()=>{
      getAccount()
      initializeFurya()
      window.addEventListener('leap_keystorechange', getAccount)
      return ()=>{
        window.removeEventListener('leap_keystorechange', getAccount)
      }
    }, [])

    
    useEffect(()=>{
      const receiveMessageFromParent = (event) => {
        if (event.origin !== 'http://stg.fanfury.xyz') { 
            return;
        }
        const { data } = event;
        const { amtValue, adminAddress} = data;
        const final_amount = new Big(amtValue).times(1e6).toFixed();
        setAmount(final_amount)
        setAdminAdd(adminAddress)
    };
    window.addEventListener('message', receiveMessageFromParent);
    return () => {
        window.removeEventListener('message', receiveMessageFromParent);
    };
    }, [])

    useEffect(() => {
        localStorage.setItem('iframeData', txHash);
      }, [txHash]);

    const sendDataToParent = () => {
        const hash = txHash;
        const height = txHeight;
        const remainBal = furyBalnce
        const message = { hash, height, remainBal };
       
        window.parent.postMessage(message, 'http://stg.fanfury.xyz'); 
    };

    useEffect(()=>{    
         sendDataToParent();
    }, [furyBalnce, txHash, txHeight])

    const getBalance =(balnce)=>{
        const usk_token_pattern = /^ibc\/.*5014$/;
        const decimal_value = 6;

        if(usk_token_pattern.test(balnce.denom)){
            const uskAmount = (balnce.amount / 1000000).toFixed(decimal_value);
            setFuryBalance(uskAmount);
        }
    }

   
    const onSubmitData = async () => {
        setIsLoading(true)
        const rpc = 'https://rpc.cosmos.directory/furya';
        const offlineSigner = await window.leap.getOfflineSignerAuto('furya-1');
        const client = await StargateClient.connect(rpc);
        const balance = await client.getAllBalances(valueKey);
        const furyBal = balance && balance[0]
        const furyBalnced = balance && balance[0].amount
        getBalance(furyBal)

        const account = await offlineSigner.getAccounts();
       
        if (furyBalnced > 0) {
            const SigningStargateClients = await SigningStargateClient.connectWithSigner(
                rpc,
                offlineSigner,
                {
                    gasPrice: GasPrice.fromString('0.0095ufury')
                }
            );
           
            const demonKey = 'ibc/093231535A38351AD2FEEFF897D23CF8FE43A44F6EAA3611F55F4B3D62C45014'
            const result = await SigningStargateClients.sendTokens(
                account[0].address,
                adminAdd,
                [{ denom: demonKey, amount: amount }],
                'auto'
            );
            console.log('result', result)
            const transHeight = result.height
            const transHash = result.transactionHash
            setTxHash(transHash)
            settxHeight(transHeight)
            localStorage.setItem('iframeData', transHash);
            setIsLoading(false)
            // assertIsBroadcastTxSuccess(result);
            const balance = await client.getAllBalances(valueKey);
            const furyBalnce = balance && balance[0]
            getBalance(furyBalnce)
           
        } else {
            alert('Your leap wallet is empty. Cannot process the transaction.');
        }
    };

    
  return (
    <div className='wrp-content'>
        
         <button onClick={()=> onSubmitData()} className={`${amount > 0 ? 'trnsbtn':'disabled'}`}>Transfer</button>
         {
           isLoading &&   <Circles
            height="40"
            width="40"
            color="#5853c3"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            />
         }
    </div> 
  )
}   

export default App

