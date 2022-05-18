require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock other sugar fan raise saddle hub grace infant success solution'; 
let testAccounts = [
"0x8e933e00b695eddd6427d42bf1b1ad00b772c31753913ecc003cf4dae7b1406f",
"0xd4d3e770c486f101b38a62ebb7cd55514e41d40887c83a04113a6bf0686cc754",
"0x20fa0e167109b15cbfb2e560c1dc730be23f155e6a30a4215a88693f59906f8c",
"0xbb99958128a624c7fa59ddc5c4a07923fe097b86f11b415e3ec767515319c2d9",
"0xc30b2f2133367546a541c45eb92e2f6f33c76dc09cef0692f3dfe9dfae1fa59d",
"0xdf37df8456aa566235608fcfa2145105e588fc72c481bf7ef4684ea50e0da34d",
"0xd4c475d559b30e0d92a1f523eaf9657f02613f9ab8d2aad337f88e536e3d0a60",
"0x4f3be97275a928c177f069e7c2d5b7a27ce05d6278b89ebc534628f7671f02a9",
"0x60b8495a27cd9c4396d567811546ec573fc8b3ec861ca73ee2987245e2aac551",
"0x619bb4225eb52eaa8e3034467b76755b9d6194f8439f33cdb02651a076fbdd10"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

