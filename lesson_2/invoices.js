var invoices = {
  unpaid: [],
  paid: [],

  add: function(name, amount) {
    this.unpaid.push({
      name: name,
      amount: amount,
    });
  },

  totalDue: function() {
    return this.unpaid.reduce(function(sum, current) {
      return sum + current.amount;
    }, 0);
  },

  payInvoice: function(name) {
    var unpaid = [];

    for (var i = 0; i < this.unpaid.length; i++) {
      if (this.unpaid[i].name === name) {
        this.paid.push(this.unpaid[i]);
      } else {
        unpaid.push(this.unpaid[i]);
      }
    }

    this.unpaid = unpaid;
  },

  totalPaid: function() {
    return this.paid.reduce(function(sum, current) {
      return sum + current.amount;
    }, 0);
  }
}

invoices.add('Due North Development',  250);
invoices.add('Moonbeam Interactive', 187.50);
invoices.add('Slough Digital', 300);

console.log(invoices.totalDue());

invoices.payInvoice('Due North Development');
invoices.payInvoice('Slough Digital');

console.log(invoices.totalPaid());
console.log(invoices.totalDue());




