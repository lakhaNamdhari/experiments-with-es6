
(function(){
  let obj = {
    user: 'sam',
    greetUser: function(){
      alert(
        `Welcome ${this.user},
        We are glad to have you here. should you
        need any further assistance`
      );
    },
    init: function(){
      document.addEventListener('click', () => this.greetUser());
    }
  };
  obj.init();
})();
