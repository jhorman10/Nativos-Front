fetch('https://randomuser.me/api/?results=15')
  .then((response) => response.json())
  .then((data) => {
    crearTarjetas(data.results);
  });

function crearColor(age) {
  if (age <= 3) {
    return 'nuevo';
  } else if (age <= 5) {
    return 'medio';
  } else if (age <= 10) {
    return 'avanzado';
  } else if (age <= 15) {
    return 'pro';
  } else {
    return 'maestro';
  }
}

function crearTarjetas(usuarios) {
  let container = document.querySelector('.container');
  usuarios.forEach((usuario) => {
    container.innerHTML += /*html*/ `
    <div class="card ${crearColor(usuario.registered.age)}">
    <div class="puntos">...</div>
    <div class="card-body">
        <div class="card-body-item">
        <img
            src="${usuario.picture.large}"
            alt="img-profile"
        />
        <div class="texto-medio">
            <h5 class="card-title">${usuario.name.title}. ${
      usuario.name.first
    } ${usuario.name.last}</h5>
            <p class="phone">${usuario.phone}</p>
            <div class="datos">
            <div>
                <p>${usuario.gender}</p>
                <p>Gender</p>
            </div>
            <div>
                <p>${usuario.nat}</p>
                <p>Nat</p>
            </div>
            <div>
                <p>${usuario.location.postcode}</p>
                <p>Postcode</p>
            </div>
            </div>
        </div>
        </div>
        <div class="ranking">
        <h4>${usuario.registered.age}</h4>
        <p>Age</p>
        </div>
    </div>
    <div class="circle ${crearColor(usuario.registered.age)}"></div>
    </div>
  `;
  });
}
