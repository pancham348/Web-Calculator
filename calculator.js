(function(root){
  
  var Calculator = root.Calculator = function(){
		var that = this;
		this.currentArg;
		this.calculator = document.getElementById("calculator");
    this.display = document.getElementById("display");
    this.keys = document.querySelectorAll(".key");
		for (var i = 0; i < this.keys.length; i++) {
			this.keys[i].addEventListener("click", this.changeDisplay);
		}
    	

  };
  
  Calculator.prototype = {
    changeDisplay: function(event){
			var input = event.currentTarget.dataset.val; 
			if (input === 'theme') {
				this.calculator.classList.toggle("calc-light");
				this.calculator.classList.toggle("calc-dark");
				return;
			}
			else if (input === 'c') {
				this.currentArg = 0;
			}
			else if (this.currentArg && input != "=") {
				this.currentArg += input;
			}else if(input === "="){
				this.currentArg = eval(this.currentArg)
			}
			else{
				this.currentArg = input;
			}
			
			this.display.value = this.currentArg;
    }.bind(this),
  }
})(this);