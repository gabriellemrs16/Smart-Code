document.addEventListener("DOMContentLoaded", function(){
    console.log("PAGE LOAD")
    let url = "json/clients.json"
    $.getJSON(url, function(response){
        console.log(response);
})
});

document.getElementById("btnSearch").addEventListener('click', function(){

    let url = "json/clients.json"
    $.getJSON(url, function(response){
        console.log(response);
    
        let inputClient = document.getElementById("txtClient").value
    
        let findJob = searchClients(response, inputClient);
        document.getElementById("output").innerHTML = findJob;
    })
    });

// Search for clients based on user input
function searchClients(jobs, client){
    let jobList = "";

    for (let j of jobs){
        if(j.name == client){        // if client is found by name
                let status = "";
                let statusLabel = "";

                if (j.completed == true){
                    status = "DONE"
                }
                if (j.completed == false){
                    status = "INCOMPLETE"
                }

                if (status == "DONE"){
                    statusLabel = `<p style="color: green">${status}</p>`
                }
                if (status == "INCOMPLETE"){
                    statusLabel = `<label style="color: red">${status}</label>`
                }

                jobList += `
                <div class="form-group">\
                <h3>Job # ${j.id}</h3> <br>
                <b>Name: </b>${j.name}  
                <b style="margin-left: 15px">Email: </b>${j.email} 
                <b style="margin-left: 15px">Phone: </b>${j.phone}
                </div> 
                <b>Type: </b>${j.type} <br> 
                <b>Make: </b>${j.make} 
                <b style="margin-left: 15px">Model: </b>${j.model} <br>
                <b>Cost: </b>${j.cost} <br> 
                <b>Description: </b>${j.description} <br> 
                <b>Date: </b> ${j.date} <br>
                <b>Status: </b> ${status} </p>
                <br><br>
                `;
            }
            else{
                console.log("No clients found.")
            }
        }
    if (jobList == ""){     // if the jobList string is still completely empty after searching through JSON file
        joblist = "No jobs found for that client."
    }
    
    return jobList;
};