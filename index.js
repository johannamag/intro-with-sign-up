const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstname = form["firstname"].value;
  const lastname = form["lastname"].value;
  const email = form["email"].value;
  const password = form["password"].value;

  if (firstname === "") {
    addErrorTo("firstname", "First Name is required");
  } else {
    removeErrorFrom("firstname");
  }

  if (lastname === "") {
    addErrorTo("lastname", "Last Name is required");
  } else {
    removeErrorFrom("lastname");
  }

  if (email === "") {
    addErrorTo("email", "Email is required");
  } else if (isValid(email)) {
    addErrorTo("email", "Email is not valid");
  } else {
    removeErrorFrom("email");
  }

  if (password === "") {
    addErrorTo("password", "Password is required");
  } else {
    removeErrorFrom("password");
  }
});

function addErrorTo(field, message) {
  const small = form[field].parentNode.querySelector("small");
  small.innerText = message;
  small.style.opacity = 1;

  const formControl = form[field].parentNode;
  formControl.classList.add("error");
}

function removeErrorFrom(field) {
  const small = form[field].parentNode.querySelector("small");
  console.log(small);
  small.style.opacity = 0;

  const formControl = form[field].parentNode;
  formControl.classList.remove("error");
}

function isValid(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
