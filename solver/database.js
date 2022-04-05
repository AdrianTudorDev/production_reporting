var fill = document.querySelector('#fill')

window.addEventListener('DOMContentLoaded', () => {
    getData()
});

function getData(){
    var xmlhttp = new XMLHttpRequest();
    var url = "../database.json";

    xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myArr = JSON.parse(this.responseText);
        myFunction(myArr);
    }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();

    function myFunction(arr) {
    var out = "";    
    for(let i = 0; i < arr.length; i++) {
        out += `<div class="row bg-warning">
                    <div class="col-1 border">
                        <p>${arr[i].Area}</p>
                    </div>
                    <div class="col-1 border">
                        <p >${arr[i].LocalManager}</p>
                    </div>
                    <div class="col-1 border">
                        <p>${arr[i].Problema}</p>
                    </div>
                    <div class="col-2 border">
                        <p>${arr[i].DescriereaProblemei}</p>
                    </div>
                    <div class="col-1 border">
                        <p>${arr[i].Prio}</p>
                    </div>
                    <div class="col-1 border">
                        <p>${arr[i].Responsabil}</p>
                    </div>    
                    <div class="col-1 border">
                        <p>${arr[i].PrioRevizuit}</p>
                    </div>
                    <div class="col-1 border">
                        <p>${arr[i].Status}</p>
                    </div>
                    <div class="col-1 border">
                        <p>${arr[i].DeadLine}</p>
                    </div>
                    <div class="col-2 border">
                        <p>${arr[i].Observatii}</p>
                        <button class="btn btn-primary" id="update">Update</button>
                    </div>
                </div>
                `
    }
    fill.innerHTML += out;    
    }
}