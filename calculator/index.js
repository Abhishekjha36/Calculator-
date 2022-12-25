let string = "";
const buttons = document.querySelectorAll(".box");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (p) => {
    if (p.target.innerText == "=") {
      string = eval(string);
      document.querySelector("#input").value = string;
    } else if (p.target.innerHTML == "B") {
      for (let i = 0; i < 1; i++) {
        string = string.slice(
          0,
          document.querySelector("#input").value.length - 1
        );
        document.querySelector("#input").value = string;
      }
      if (string == "0") {
        string = "";
        document.querySelector("#input").value = string;
      }
    } else if (p.target.innerHTML == "AC") {
      string = "";
      document.querySelector("#input").value = string;
    } else {
      console.log(p.target);
      string = string + p.target.innerHTML;
      document.querySelector("#input").value = string;
    }
  });
});
