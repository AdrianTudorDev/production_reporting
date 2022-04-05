document.addEventListener("DOMContentLoaded", () => {

    let intervalID = window.setInterval(myCallback, 50)
    function myCallback() {
        let btn = document.getElementsByClassName('btn-primary')  
        if (btn.length > 0) {clearInterval(intervalID)}
       
        var arrBtn = Array.from(btn);

        arrBtn.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                let form = document.querySelector('#form1')
                form.classList.toggle('d-none')
                let indexArray =document.getElementById('index')
                indexArray.value = index
                let prio0 = document.getElementById('Prio0')
                let prio1 = document.getElementById('Prio1')
                let prio2 = document.getElementById('Prio2')
                let prio3 = document.getElementById('Prio3')
                let prio4 = document.getElementById('Prio4')
                let status = document.getElementById('Status')
                let deadLine = document.getElementById('Dead-line')
                let obs = document.getElementById('obs') 
                let todos = document.getElementById('todos')
                let send = document.getElementById('send') 


                prio0.addEventListener('click',()=>{
                    if (prio0.checked) {
                        let date = new Date();
                        let yyyy = date.getFullYear();
                        let mm = date.getMonth() + 1; // Months start at 0!
                        let dd = date.getDate() + 3; // Prio0 max interval

                        if (dd < 10) dd = '0' + dd;
                        if (mm < 10) mm = '0' + mm;

                        let doDate = dd + '/' + mm + '/' + yyyy;
                        deadLine.value = doDate
                    }
                })
                prio1.addEventListener('click',()=>{
                    if (prio1.checked) {
                        let date = new Date();
                        let yyyy = date.getFullYear();
                        let mm = date.getMonth() + 1; // Months start at 0!
                        let dd = date.getDate() + 14; // Prio1 max interval

                        if (dd < 10) dd = '0' + dd;
                        if (mm < 10) mm = '0' + mm;

                        let doDate = dd + '/' + mm + '/' + yyyy;
                        deadLine.value = doDate
                    }
                })
                prio2.addEventListener('click',()=>{
                    if (prio2.checked) {
                        let date = new Date();
                        let yyyy = date.getFullYear();
                        let mm = date.getMonth() + 1; // Months start at 0!
                        let dd = date.getDate() + 28; // Prio2 max interval

                        if (dd < 10) dd = '0' + dd;
                        if (mm < 10) mm = '0' + mm;

                        let doDate = dd + '/' + mm + '/' + yyyy;
                        deadLine.value = doDate 

                    }
                })
                prio3.addEventListener('click',()=>{
                    if (prio3.checked) {
                        let date = new Date();
                        let yyyy = date.getFullYear();
                        let mm = date.getMonth() + 4; // Months start at 0! + Prio3 max interval
                        let dd = date.getDate();  

                        if (dd < 10) dd = '0' + dd;
                        if (mm < 10) mm = '0' + mm;

                        let doDate = dd + '/' + mm + '/' + yyyy;
                        deadLine.value = doDate 
                    }
                })
                prio4.addEventListener('click',()=>{
                    if (prio4.checked) {
                        let date = new Date();
                        let yyyy = date.getFullYear();
                        let mm = date.getMonth() + 7; // Months start at 0! + Prio4 max interval
                        let dd = date.getDate(); 

                        if (dd < 10) dd = '0' + dd;
                        if (mm < 10) mm = '0' + mm;

                        let doDate = dd + '/' + mm + '/' + yyyy;
                        deadLine.value = doDate 
                    }
                })

                obs.addEventListener('dblclick', () => {                    
                    if (!obs.value == "") {
                        let li = document.createElement('li')
                        li.innerText = obs.value
                        todos.appendChild(li)
                        status.value = '0%'
                        li.addEventListener('click', ()=>{
                            li.remove()
                        })
                    } 
                })           
                send.addEventListener('click', ()=>{
                    btn.classList.add("d-none")
                })
               
            })  
        });        
    }
})




