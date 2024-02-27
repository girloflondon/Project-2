let upd = (n) => localStorage.setItem("c", (result.textContent = n || 2037));
upd(localStorage.getItem("c"));
myButton.onclick = (e) => upd(+result.textContent + 1);
