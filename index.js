function convertToRupee() {
    var DollarInput = document.getElementById("dollar");
    var Dollar = parseInt(DollarInput.value);
    var result = document.getElementById("result");
    result.textContent = "Dollar to Rupee: "+Dollar * 7.45;
  }
  