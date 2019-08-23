import Coin from './Coin';
import { DEFAULT_GAS } from '../../config';

class Fee {
  constructor() {
    this.amount = null;
    this.gas = DEFAULT_GAS;
  }

  setGasLimit(gasLimit) {
    this.gas = `${gasLimit}`;
  }

  setGasPrice(price) {
    const parsedCoin = Coin.parseCoin(price);

    // fee amount = gas price * gas limit
    parsedCoin.amount = parsedCoin.amount * this.gas;
    this.addCoin(parsedCoin);
  }

  setFee(fee) {
    const parsedCoin = Coin.parseCoin(fee);
    this.addCoin(parsedCoin);
  }

  addCoin(parsedCoin) {
    if (this.amount) {
      let found = false;
      this.amount.forEach((coin) => {
        if (coin.denom === parsedCoin.denom) {
          coin.amount = parsedCoin.amount;
          found = true;
        }
      });
      if (!found) {
        this.amount.push(parsedCoin);
      }
    } else {
      this.amount = [parsedCoin];
    }
  }
}

export default Fee;