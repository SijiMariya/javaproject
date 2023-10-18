(function() {
    const calculator = {
        constructor() {
            this.operator = null;
            this.currentOperand = "";
            this.prevOperand = "";
        },
        init : function() {
            this.cacheDom();
            this.bindEvents();
        },
        cacheDom : function() {
            const numberButtons = document.querySelectorAll('[data-number]');
            const operationButtons = document.querySelectorAll('[data-operator]');
            const allClearButton = document.querySelector('#ac');
            const equalButton = document.querySelector('#eql');
            const PrevOutput = document.querySelector('#previous');
            const currentOutput = document.querySelector('#current');

            this.numberButtons = numberButtons;
            this.operationButtons = operationButtons;
            this.allClearButton = allClearButton;
            this.equalButton = equalButton;
            this.PrevOutput = PrevOutput;
            this.currentOutput = currentOutput;
        },
        bindEvents : function() {
            this.operationButtons.forEach(button => {
                button.addEventListener('click',() => {
                    this.operation(button.value);
                    this.update();
                })
            });
            this.numberButtons.forEach(button => {
                button.addEventListener('click',() => {
                    this.append(button.value);
                    this.update();
                })
            });

            this.allClearButton.addEventListener('click', () => this.allClear());
            this.equalButton.addEventListener('click', () => {
                this.compute();
                this.update();
            });
            this.allClear();
        },
        allClear : function() {
            this.currentOperand = "";
            this.prevOperand = "";
            this.operator = undefined;
            this.update();
        },
        operation: function(operation) {
            if (this.currentOperand == '') return;
            if (this.prevOperand != '') {
                this.compute();
            }
            this.operator = operation;
            this.prevOperand = this.currentOperand;
            this.currentOperand = '';
        },
        append : function(number) {
            if (number === '.' && this.currentOperand.includes('.')) return;
            else this.currentOperand = this.currentOperand.toString() + number.toString();
        },
        update : function() {
            this.currentOutput.textContent = this.currentOperand;
            if(this.operator != null) {
                this.PrevOutput.textContent = `${this.prevOperand} ${this.operator}`;
            }
            else {
                this.PrevOutput.textContent = this.prevOperand;
            }
        },
        compute : function() {
            let result;
            const prev = parseFloat(this.prevOperand);
            const current = parseFloat(this.currentOperand);
            if (isNaN(prev) && isNaN(current)) return;
            switch (this.operator) {
                case '+':
                    result = prev + current;
                    break;
                case '-':
                    result = prev - current;
                    break;
                case 'x':
                    result = prev * current;
                    break;
                case '/':
                    result = prev / current;
                    break;
                default:
                    return;
            }
            this.currentOperand = result;
            this.operator = undefined;
            this.prevOperand = '';
        }
        
    }
    calculator.init();
})();
