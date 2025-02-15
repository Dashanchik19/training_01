function sayHi() {
  let btn = document.querySelector(".btn");

  btn.addEventListener("click", () => {
    let newblock = document.createElement("p");
    newblock.textContent = "Hi!";
    document.body.appendChild(newblock);
  });
}

sayHi();
