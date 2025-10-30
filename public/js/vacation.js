document.getElementById('vacation-form').onsubmit= () => {
    clearErrors();

            let isValid = true;
        

        let destinationDropdown = document.getElementById('choose-dropdown').value;
        let travelerNumber = document.getElementById('num-input').value;
        let travelDate = document.getElementById('travel-date').value;

        travelDate = new Date().toLocaleDateString();

        

        if( destinationDropdown == "none"){
            document.getElementById('err-dropdown').style.display = "block";
            isValid = false;
        }

        if(travelerNumber == 0){
            document.getElementById('err-number').style.display = "block";
            isValid = false;
        }

        return isValid;
};

    function clearErrors()  {
    let errors = document.getElementsByClassName("error");
    for (let i = 0; i < errors.length; i++){
        errors[i].style.display = "none"
    }


}