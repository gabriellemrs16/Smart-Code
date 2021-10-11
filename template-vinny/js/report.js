//DOM elements
const sel1 = document.getElementById("sel1") 

//Report select input event listener on change
sel1.addEventListener('change',() => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;


    if(sel1.value === "1"){
        document.getElementById('report-details').innerHTML = `<div class="">\
                                                                    <input type="date" name="time-period" placeholder="Pick time period for report"\
                                                                     min="2021-01-01" max="${today}">\
                                                               </div>`;
    } else{

    }
});