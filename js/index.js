var inputArr = [];

$(function() {

  function addElement(button_id) {

    var input = $("#" + button_id).html();

    if ((button_id === "Div" || button_id === "Mul" || button_id === "Add") && inputArr.length === 0) {

      $("#viewInput").html("");

    } else {

      if (button_id === "Div" && (inputArr[inputArr.length - 1] === "X" || inputArr[inputArr.length - 1] === "+" || inputArr[inputArr.length - 1] === "-" || inputArr[inputArr.length - 1] === "/")) {

        inputArr[inputArr.length - 1] = "/";
        $("#viewInput").html(inputArr.join(""));

      } else if (button_id === "Mul" && (inputArr[inputArr.length - 1] === "X" || inputArr[inputArr.length - 1] === "+" || inputArr[inputArr.length - 1] === "-" || inputArr[inputArr.length - 1] === "/")) {

        inputArr[inputArr.length - 1] = "X";
        $("#viewInput").html(inputArr.join(""));

      } else if (button_id === "Add" && (inputArr[inputArr.length - 1] === "-" || inputArr[inputArr.length - 1] === "+")) {

        if (inputArr[inputArr.length - 1] === "-") {

          inputArr[inputArr.length - 1] = "-";
          $("#viewInput").html(inputArr.join(""));

        } else {

          inputArr[inputArr.length - 1] = "+";
          $("#viewInput").html(inputArr.join(""));

        }

      } else if (button_id === "Sub" && (inputArr[inputArr.length - 1] === "-" || inputArr[inputArr.length - 1] === "+")) {

        if (inputArr[inputArr.length - 1] === "-") {

          inputArr[inputArr.length - 1] = "+";
          $("#viewInput").html(inputArr.join(""));

        } else {

          inputArr[inputArr.length - 1] = "-";
          $("#viewInput").html(inputArr.join(""));

        }

      } else {

        inputArr.push(input);

        $("#viewInput").html(inputArr.join(""));

      }

    }

  }

  function deleteLastElement() {

    if (inputArr.length > 0) {

      var last_item = inputArr.pop();

      $("#viewInput").html(inputArr.join(""));

    } else {

      $("#viewInput").html("");

    }

  }

  function clearAll() {

    if (inputArr.length > 0) {

      inputArr = [];
      $("#viewInput").html("");

    } else {

      $("#viewInput").html("");

    }

    $("#viewResult").html("");

  }

  function calculate() {

    if (inputArr[inputArr.length - 1] === "/" || inputArr[inputArr.length - 1] === "X" || inputArr[inputArr.length - 1] === "+" || inputArr[inputArr.length - 1] === "-") {

      var random = inputArr.pop();

      if (inputArr[inputArr.length - 1] === "/" || inputArr[inputArr.length - 1] === "X" || inputArr[inputArr.length - 1] === "+" || inputArr[inputArr.length - 1] === "-") {

        var random = inputArr.pop();
      }

      $("#viewInput").html(inputArr.join(""));

    }

    var resultArray = [];
    var element = "";
    for (var i = 0; i < inputArr.length; i++) {

      if (inputArr[i] === "+" || inputArr[i] === "-" || inputArr[i] === "/" || inputArr[i] === "X") {

        if ((inputArr[i] === "+" || inputArr[i] === "-") && (inputArr[i - 1] === "/" || inputArr[i - 1] === "*")) {

          element += inputArr[i];

        } else {

          resultArray.push(element);
          resultArray.push(inputArr[i]);
          element = "";

        }

      } else {

        element += inputArr[i];

      }

    }

    resultArray.push(element);
    console.log(resultArray);

    while (resultArray.length > 1) {
      var operator;
      var randomArray1;
      var randomArray2;

      if (resultArray.indexOf("/") !== -1) {

        operator = resultArray.indexOf("/");
        first_element = Number(resultArray[operator - 1]);
        second_element = Number(resultArray[operator + 1]);
        result = first_element / second_element;

        if (operator - 1 === 0) {

          randomArray1 = [];

        } else {

          randomArray1 = resultArray.slice(0, operator - 1);

        }

        if (operator + 1 === resultArray.length - 1) {

          randomArray2 = [];

        } else {

          randomArray2 = resultArray.slice(operator + 2);

        }
        resultArray = randomArray1;
        resultArray.push(result);
        resultArray = resultArray.concat(randomArray2);

      } else if (resultArray.indexOf("X") !== -1) {

        operator = resultArray.indexOf("X");
        first_element = Number(resultArray[operator - 1]);
        second_element = Number(resultArray[operator + 1]);
        result = first_element * second_element;

        if (operator - 1 === 0) {

          randomArray1 = [];

        } else {

          randomArray1 = resultArray.slice(0, operator - 1);

        }

        if (operator + 1 === resultArray.length - 1) {

          randomArray2 = [];

        } else {

          randomArray2 = resultArray.slice(operator + 2);

        }

        resultArray = randomArray1;
        resultArray.push(result);
        resultArray = resultArray.concat(randomArray2);

      } else if (resultArray.indexOf("+") !== -1) {

        operator = resultArray.indexOf("+");
        first_element = Number(resultArray[operator - 1]);
        second_element = Number(resultArray[operator + 1]);
        result = first_element + second_element;

        if (operator - 1 === 0) {

          randomArray1 = [];

        } else {

          randomArray1 = resultArray.slice(0, operator - 1);

        }

        if (operator + 1 === resultArray.length - 1) {

          randomArray2 = [];

        } else {

          randomArray2 = resultArray.slice(operator + 2);

        }

        resultArray = randomArray1;
        resultArray.push(result);
        resultArray = resultArray.concat(randomArray2);

      } else if (resultArray.indexOf("-") !== -1) {

        operator = resultArray.indexOf("-");
        first_element = Number(resultArray[operator - 1]);
        second_element = Number(resultArray[operator + 1]);
        result = first_element - second_element;

        if (operator - 1 === 0) {

          randomArray1 = [];

        } else {

          randomArray1 = resultArray.slice(0, operator - 1);

        }

        if (operator + 1 === resultArray.length - 1) {

          randomArray2 = [];

        } else {

          randomArray2 = resultArray.slice(operator + 2);

        }

        resultArray = randomArray1;
        resultArray.push(result);
        resultArray = resultArray.concat(randomArray2);

      }

    }

    console.log(resultArray);

    $("#viewResult").html(resultArray.join(""));

  }

  $(".btn").click(function() {
    var button_id = this.id;
    console.log(button_id);

    if (!(button_id === "AC" || button_id === "C" || button_id === "Equal")) {
      addElement(button_id);

    } else if (button_id === "C") {

      deleteLastElement();

    } else if (button_id === "AC") {
      clearAll();

    } else if (button_id === "Equal") {

      calculate();

    }

  })

})