const wellSection = $("#well-section");
function renderCharacter(props){
  const { doctor, index} = props;
  const { name} = doctor;
  return $(/*html*/`
    <div class="well" id="doctor-well-${index}">
      <h2>${name}</h2>
    
    </div>
  `);
}

// make a get request to our api to grab every character
$.get("/some", function(doctors) {
    
  doctors.forEach((doctor, index) => {
    wellSection.append(renderDoctor({ doctor, index}));
  })
});