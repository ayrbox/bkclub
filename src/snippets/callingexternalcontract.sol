// Creating a new instance
import "Faucet.sol";
contract Token is mortal {
	Faucet _faucet;
	constructor() {
		_faucet = (new Faucet).value(0.5 ether)();
	}
	function destroy() ownerOnly {
		_faucet.destroy();
	}
}

// Addressing an existing instance

import "Faucet.sol";
contract Token is mortal {

	Faucet _faucet;

	constructor(address _f) {
		_faucet = Faucet(_f);
		_faucet.withdraw(0.1 ether)
	}
}

// Raw call, delegatecall without error handling
contract Token is mortal {
	constructor(address _faucet) {
		_faucet.call("withdraw", 0.1 ether);
	}
}

// with error handle
contract Token is mortal {
	constructor(address _faucet) {
		if !(_faucet.call("withdraw", 0.1 ether)) {
			revert("Withdrawal from faucet failed");
		}
	}
}
