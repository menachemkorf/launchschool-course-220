function createInvoice(services) {
  services = services || {};
  return {
    phone: services.phone || 3000,
    internet: services.internet || 5500,
    payments: [],
    total: function() {
      return this.phone + this.internet;
    },
    addPayment: function(payment) {
      this.payments.push(payment);
    },
    addPayments: function(payments) {
      for (var i = 0; i < payments.length; i++) {
        this.addPayment(payments[i]);
      }
    },
    paymentTotal: function() {
      return amountPaid = this.payments.reduce(function(total, payment) {
        return total + payment.total();
      }, 0);
    },
    amountDue: function() {
      return this.total() - this.paymentTotal();
    }
  };
}

function createPayment(services) {
  var services = services || {};
  return {
    phone: services.phone || 0,
    internet: services.internet || 0,
    amount: services.amount,
    total: function() {
      return this.amount || (this.phone + this.internet);
    }
  }
}

var invoice = createInvoice({
  phone: 1200,
  internet: 4000
});

var payment1 = createPayment({
  amount: 2000
});

var payment2 = createPayment({
  phone: 1000,
  internet: 1200
});

var payment3 = createPayment({
  phone: 1000
});

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
console.log(invoice.amountDue());       // this should return 0