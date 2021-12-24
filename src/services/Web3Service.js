const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
let web3Modal
let provider;
const Fortmatic = window.Fortmatic;
//const chainId = 97;
let connect_address = "";

export const web3Init = () => {
    const providerOptions = {
        walletconnect: {
        package: WalletConnectProvider,
        options: {
            infuraId: "8043bb2cf99347b1bfadfb233c5325c0",
        }
        },

        fortmatic: {
        package: Fortmatic,
        options: {
            key: "pk_test_391E26A3B43A3350"
        }
        }
    };

    web3Modal = new Web3Modal({
        cacheProvider: false, // optional
        providerOptions, // required
    });
};

export const setConnectAddress = (addr )=> {
    connect_address = addr;
}

export const onConnect = async()=> {
    try {
        provider = await web3Modal.connect();
    } catch(e) {
        return
    }
    setConnectAddress(provider.selectedAddress );

    provider.on("accountsChanged", (accounts) => {
        alert("a" + accounts );
        setConnectAddress(accounts );
    });

    provider.on("chainChanged", (chainId) => {
        alert("c" + chainId);
    });

    // Subscribe to networkId change
    provider.on("networkChanged", (networkId) => {
        alert("n" + networkId);
    });

    return provider.selectedAddress;
}

export const onDisconnect = async()=> {
    if(provider && provider.close) {
        await provider.close();
        await web3Modal.clearCachedProvider();
        provider = null;
    }

    connect_address = "";
    return connect_address;
}

export const getConnectAddress = ()=> {
    return connect_address
}

export const ellipseAddress = (address )=> {
    if (!address || address == "" ) return "Connect";
    var b = address.substr(0,10) + "..." + address.substr(address.length -4, 3)
    return b;
}