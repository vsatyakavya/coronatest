$("#addPatient").on("click", function(event){
    event.preventDefault();
    const newPatient ={
        name : $("#patientName").val().trim(),
        age :$("#patientAge").val().trim()
    }

    $.post("/api/patients",newPatient)
    .then(data=>{
        console.log("data");
        alert("adding new patient")
    });
   

    $("#patientName").val("");
    $("#patientAge").val("");


})

