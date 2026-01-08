async function lastInn() {
    const res = await fetch(`https://chat.itmlab.no/api/get`);
    const rows = await res.json();

    const ul = document.getElementById("liste");
    ul.innerHTML = "";

    for (const r of rows) {
        const li = document.createElement("li");
        li.textContent = `${r.Brukernavn}: ${r.Kommentar}`;
        ul.appendChild(li);
    }
}

setInterval(lastInn, 5)
/*side nav code*/
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
}