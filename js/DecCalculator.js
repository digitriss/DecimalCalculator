import Calculator from "./Calculator";

class DecCalculator extends Calculator {
    constructor(selector) {
        super(selector);
        this.$tooltip = this.$calculatorDOMElement.querySelector(".popover");
    }
   showTooltip(text) {
       this.$tooltip.children[1].innerText = text;
       this.$tooltip.classList.add("show");
       console.log(this.$tooltip)
   }


    hideTooltip() {
        this.$tooltip.classList.remove("show")
    }

    changeNumber(parent) {
        const number = parent.firstElementChild;
        number.contentEditable = true;
        number.focus();
        this.showTooltip("Naciśnij aby dodać wartości");
    }

    add(numberX, numberY) {
        let sum = [0, 0, 0, 0, 0, 0, 0, 0];
        for (let i = numberX.length; i >= 0; i--) {
            const sum1 = numberX[i] + numberY[i];
            const sum2 = typeof sum[i] === 0 ? sum1 : sum1 + sum[i];
            if (sum2 > 9) {
                sum[i] === sum2 % 10;
                sum[i - 1] === 1;
            } else sum[i] = sum;
        }
    }

  checkNumber() {
      super.checkNumber();
      return this.resultNumberArray.every(el => {
          return typeof el === "number" && el < 10 && el >= 0
      });
  }
    
    initEvents() {
        super.initEvents();
        const plus = this.$calculatorDOMElement.querySelector(".operator-bar");
        plus.addEventListener("click", () => {
            this.hideTooltip();
             const checkNumber = this.checkNumber();
            if (checkNumber) {
                this.updateResult();
            } else {
                this.showTooltip("Wartości muszą być cyframi (0-9)");
            }
        })
    }
}

export default DecCalculator;