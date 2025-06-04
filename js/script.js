const container = document.getElementById('userCards');
//const datosJSON = require('./menu.json');








fetch("https://jsonplaceholder.typicode.com/users")
    .then(response=>{
        console.log(response)
        return response.json();
    }).then(users=>{

        console.log(users)
        const userCards = document.getElementById("userCards");
        users.forEach(user => {
            const card = `<div class="card">
                <img src="https://i.pravatar.cc/150?img=${user.id}" alt="Avatar di ${user.name} ${user.surname}" class="avatar"/>
                <h2>${user.name}</h2>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Azienda:</strong>${user.company.name}</p>
                <p><strong>Città:</strong> ${user.address.city}</p>
            </div>`;
            container.insertAdjacentHTML('beforeend',card);
           // cardDiv.innerHTML = card;
           // userCards.appendChild(cardDiv);
        });
        

 /*     Primer metodo pero para elegir un solo user
    fetch("https://jsonplaceholder.typicode.com/users/4")
   
        console.log(users.name)
        console.log(users.address.geo)

        const card = `<div class="card">
                <img src="https://i.pravatar.cc/150?img=${users.id}" alt="Avatar di ${users.name} ${users.surname}" class="avatar"/>
                <h2>${users.name}</h2>
                <p><strong>Email:</strong> ${users.email}</p>
                <p><strong>Azienda:</strong>${users.company.name}</p>
                <p><strong>Città:</strong> ${users.address.city}</p>
            </div>`; 

        const userCards = document.getElementById("userCards");
        userCards.insertAdjacentHTML("beforeend",card);
        */
    })
    .catch(error =>{
        console.error("Errore nel caricamento dei dati:",error);
        document.getElementById("userCards").innerHTML = "c'e un errore";
    })