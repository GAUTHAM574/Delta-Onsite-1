function apicalling() {
    sname = document.getElementById('sname').value;
    fname = document.getElementById('fname').value;

    if (sname == '' || fname == '') {
        alert("Please fill the names");
        location.reload();
    }
    //storing the user details in a object
    data = {
        'sname': sname,
        'fname': fname
    };



    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '21ccd0cccbmsh6b5e4f746d79891p12bee9jsn34c6ebb3b4cb',
            'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
        }
    };
    var percent, res;
    var str_ = document.getElementById('border').innerHTML;
    let response = fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${sname}&fname=${fname}`, options)
        .then(response => response.json())
        .then(response => {
            percent = response['percentage'];
            res = response['result'];
            console.log(percent, res)
            str = `<div class='result'>${sname} ❤️ ${fname}  = ${percent}</div>`
            if (percent < 30)
                str += `<div class='result'>😥 ${res}</div>`;
            else if (percent < 70)
                str += `<div class='result'>😉 ${res}</div>`;
            else
                str += `<div class='result'>😍 ${res}</div>`;
            document.getElementById('again_').style = "display:contents ";

           function again(){
                document.getElementById('border').innerHTML = str_;
                document.getElementById('again_').style="display:none";
            };
            document.getElementById('border').innerHTML = str;



        })


        .catch(err => console.error(err));


    //////
    console.log(options)



}