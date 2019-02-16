contract Faucet is mortal {
  event Withdrawal(address indexed to, uint amount);
  event Deposit(address indexed from, uint amount);

  // Give out ether to anyone who asks
  function withdraw(uint withdraw_amount) public {
    [...]
    msg.sender.transfer(withdraw_amount);
    emit Withdrawal(msg.sender, withdraw_amount);
  }
  // Accept any incoming amount
  function () public payable {
    emit Deposit(msg.sender, msg.value);
  }
}
