window.addEventListener("load", function () {


  fetch(
    "https://handlers.education.launchcode.org/static/planets.json"
  ).then(function (response) {
    console.log(response.json);

    response.json().then(function (json) {

      const missionTarget = document.getElementById("missionTarget");
      missionTarget.innerHTML =
        `
        <h2>Mission Destination</h2>
        <ol>
          <li>Name: ${json[5].name}</li>
          <li>Diameter: ${json[5].diameter}</li>
          <li>Star: ${json[5].star}</li>
          <li>Distance from Earth: ${json[5].distance}</li>
          <li>Number of Moons: ${json[5].moons}</li>
        </ol>
        <img src="${json[5].image}"></img>`

      let form = this.document.querySelector('form');

      form.addEventListener('submit', function (event) {
        event.preventDefault();
        let pilot = document.getElementById('pilotName');
        let coPilot = document.getElementById('copilotName');
        let fuel = document.getElementById('fuelLevel');
        let cargo = document.getElementById('cargoMass');

        let items = document.getElementById('faultyItems');
        let launchStatus = document.getElementById('launchStatus');
        let fuelStatus = document.getElementById('fuelStatus');
        let cargoStatus = document.getElementById('cargoStatus')
        let ready = true;

        if (pilot.value == "" || cargo.value == "" || coPilot.value == "" || fuel.value == "") {
          window.alert("All fields are required");
          items.style.visibility = 'visible';
        } else if (isNaN(pilot.value) == false || isNaN(cargo.value) == true || isNaN(coPilot.value) == false || isNaN(fuel.value) == true) {
          window.alert("Value should be of the right type");
        } else {

          items.style.visibility = 'visible';

          document.getElementById('pilotStatus').innerHTML = `Pilot ${pilot.value + ''} Ready`;
          document.getElementById('copilotStatus').innerHTML = `Co-Pilot ${coPilot.value + ''} Ready`;
        } if (fuel.value < 10000) {
          ready = false;
          fuelStatus.innerHTML = 'Not enough fuel for launch';
        } else {
          fuelStatus.innerHTML = 'Fuel level high enough for launch';
        } if (cargo.value > 10000) {
          ready = false;
          cargoStatus.innerHTML = 'Too much mass for the shuttle to take off';
        } else {
          cargoStatus.innerHTML = 'Cargo Mass is good to go';
        } if (ready) {
          launchStatus.style.color = 'green';
          launchStatus.innerHTML = 'Shuttle is ready for launch';
          retrieveData();
        } else {
          items.style.visibility = 'visible';
          launchStatus.style.color = 'red';
          launchStatus.innerHTML = 'Shuttle not ready for launch';
        }
      });


    });
  });
});


