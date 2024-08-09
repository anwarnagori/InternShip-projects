var input = document.getElementById("write");

function getValue(calculate) {
  input.value += calculate;
}

function ans() {
  var result = eval(input.value);
  input.value = result;
}

function delAll() {
  input.value = "";
}

function del() {
  input.value = input.value.slice(0, -1);
}
