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
document.getElementById("loadBtn").addEventListener("click", lastInn);