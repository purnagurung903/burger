document.addEventListener("DOMContentLoaded", (event) => {
  if (event) {
    console.info("DOM loaded");
  }

  const changeDevouredBtns = document.querySelectorAll(".change-devour");
  if (changeDevouredBtns) {
    changeDevouredBtns.forEach((button) => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        const id = e.target.getAttribute("data-id");
        const newDevour = e.target.getAttribute("data-new");

        const newDevourState = {
          devoured: newDevour,
        };

        fetch(`/api/burgers/${id}`,{
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newDevourState),
        }).then((response) => {
          if (response.ok) {
            console.log(`changed devour to: ${newDevour}`);
            location.reload("/");
          }else {
            alert("something went wrong!");
          }
        })
      })
    })
  }
  const createBurgerBtn = document.querySelector("#submit")

  createBurgerBtn.addEventListener("click", (event)=>{
    event.preventDefault();
    const newBurger = {
      burger_name: document.querySelector("#ca").value.trim(),
      devoured: document.getElementById("devoured").checked,
    }
    fetch("/api/burgers",{
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBurger),

    }).then(() => {
      document.getElementById("ca").value = "";

      console.log("Created a new burger!");
      location.reload();
    })
  })

  const deleteBurger = document.querySelectorAll(".delete-burger");

  deleteBurger.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const id = e.target.getAttribute('data-id');

      fetch(`/api/burgers/${id}`, {
        method: 'DELETE',
      }).then((res) => {
        console.log(res);
        console.log(`Deleted burger: ${id}`);

        location.reload();
      });
    });
  });


})