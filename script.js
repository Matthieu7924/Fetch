// fetch("https://api.github.com/users/nadfri")
// .then(reponse=>console.log(reponse))//then retourne la réponse du fetch mais sans format json


// fetch("https://api.github.com/users/nadfri")
// .then(reponse=>console.log(reponse.json()))//reponse en attente


// fetch("https://api.github.com/users/nadfri")
// .then(reponse=>reponse.json())
// .then(reponse2=>console.log(reponse2))//affiche la réponse dans la console


// fetch("https://api.github.com/users/nadfri")
// .then(reponse=>reponse.json())
// .then(reponse2=>console.table(reponse2))//affiche la réponse dans la console sous forme de tableau


// fetch("https://api.github.com/users/nadfri")
// .then(reponse=>reponse.json())
// .then(reponse2=>console.log(reponse2.name))//affiche le name


// fetch("https://api.github.com/users/nadfri")
// .then(reponse=>reponse.json())
// .then(reponse2=>console.log(reponse2.avatar_url))//affiche l'url de l'avatar


btn.onclick = () => {
    fetch("https://api.github.com/users/" + champ.value)
        .then(reponse => reponse.json())
        .then(data => {
            output.textContent = "";
            output.textContent = `Compte de ${data.name}`;
            const img = document.createElement("img");
            img.src = data.avatar_url;
            img.width="100";
            output.appendChild(img);
        })

}