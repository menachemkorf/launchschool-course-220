function makeBank() {
  var accounts = [];

  function makeAccount(number) {
    var transactions = [];
    var balance = 0;

    return {
      deposit: function(amount) {
        transactions.push({type: 'deposit', amount: amount});
        balance += amount;
        return amount;
      },
      withdraw: function(amount) {
        if (amount > balance) {
          amount = balance;
        }

        balance -= amount;
        transactions.push({type: 'withdraw', amount: amount});
        return amount;
      },
      balance: function() {
        return balance;
      },
      number: function() {
        return number;
      },
      transactions: function() {
        return transactions;
      },
    };
  }

  return {
    openAccount: function() {
      var nextId = accounts.length + 101;
      var account = makeAccount(nextId);
      accounts.push(account);
      return account;
    },
    transfer: function(source, destination, amount) {
      return destination.deposit(source.withdraw(amount));
    }
  };
}
