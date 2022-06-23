const signupFormHandler = async (event) => {
  event.preventDefault();
  console.log("please work");

  const name = document.querySelector("#username-register").value.trim();
  const email = document.querySelector("#email-register").value.trim();
  const password = document.querySelector("#password-register").value.trim();

  if (name && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ name, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(
        `Failed to sign up. Please check to see if all fields match the requirement.
        (Password length must be 8 or more characters)`
      );
    }
  }
};

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
