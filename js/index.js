
(function FunCalculatorJS() {



   const useElement = function (element) {
      if (element.charAt(0) === "#") { // 
         return document.querySelector(element);
      }
      return document.querySelectorAll(element);
   };

   let viewer = useElement("#viewer")
   let number = useElement(".number")
   let options = useElement(".options")
   let secondNumber = ""
   let firstNumber = ""
   let result
   let operator
   let equals = useElement("#equals")


   const putValue = function () {
      if (result) {
         secondNumber = this.getAttribute("data-number");
         result = "";
      } else {
         secondNumber += this.getAttribute("data-number");
      }

      viewer.innerHTML = secondNumber;

   };

   const moveNum = function () {
      firstNumber = secondNumber;
      secondNumber = "";
      operator = this.getAttribute("data-options");

      equals.setAttribute("data-result", "");

   };


   const displayNum = function () {

      firstNumber = parseFloat(firstNumber);
      secondNumber = parseFloat(secondNumber);

      switch (operator) {
         case "plus":
            result = firstNumber + secondNumber;
            break;

         case "minus":
            result = firstNumber - secondNumber;
            break;

         case "times":
            result = firstNumber * secondNumber;
            break;

         case "divided":
            result = firstNumber / secondNumber;


            break;


         default:
            result = secondNumber;

      }



      if (!isFinite(result)) {
         if (isNaN(result)) {
            result = "You broke it!";
         } else {
            result = "RUSSIA";
            useElement('#calculator').classList.add("broken");
            useElement('#reset').classList.add("show");
         }
      }

      viewer.innerHTML = result;
      equals.setAttribute("data-result", result);


      firstNumber = 0;
      secondNumber = result;

   };


   const clearAll = function () {
      firstNumber = "";
      secondNumber = "";
      viewer.innerHTML = "0";
      equals.setAttribute("data-result", result);
   };
   useElement("#clear").onclick = clearAll;




   for (let i = 0, l = number.length; i < l; i++) {
      number[i].onclick = putValue;
   }



   for (let i = 0, l = options.length; i < l; i++) {
      options[i].onclick = moveNum;
   }

   equals.onclick = displayNum;


   useElement("#reset").onclick = function () {
      window.location = window.location;
   };

}());