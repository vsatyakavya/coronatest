const wellSection = $("#well-section");
function renderDoctor(props){
  const { doctor, index} = props;
  const { name} = doctor;
  return $(/*html*/`
    <div class="well" id="doctor-well-${index}">
      <h2>${name}</h2>
     
      
    
    </div>
  `);
}
//   <button class="btn btn-danger btn-lg">
    //   <span class="fa fa-plus"></span> Add New Doctor</a>
     
// function createNewRow(post) {
//     var newPostCard = $("<div>");
//     newPostCard.addClass("card");
//     var newPostCardHeading = $("<div>");
//     newPostCardHeading.addClass("card-header");
//     var deleteBtn = $("<button>");
//     deleteBtn.text("x");
//     deleteBtn.addClass("delete btn btn-danger");
//     var editBtn = $("<button>");
//     editBtn.text("EDIT");
//     editBtn.addClass("edit btn btn-default");
//     var newPostTitle = $("<h2>");
//     var newPostDate = $("<small>");
//     var newPostCategory = $("<h5>");
//     newPostCategory.text(post.category);
//     newPostCategory.css({
//       float: "right",
//       "font-weight": "700",
//       "margin-top":
//       "-15px"
//     });

// make a get request to our api to grab every character
$.get("/some", function(doctors) {
    
  doctors.forEach((doctor, index) => {
    wellSection.append(renderDoctor({ doctor, index}));
  })
});

// $.get("/api/characters", function(characters) {
//     characters.forEach((character, index) => {
//       wellSection.append(renderCharacter({ character, index}));
//     })
//   });
  