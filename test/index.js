var list = [1,2,3,4,5,6,7,8,9];
var colorCodes = ['#6F98A8','#2B8EAD', "#2F454E", "#BFBFBF", "#72C3DC", "#333333", " #72C3DC", "#BFBFBF", "#2F454E"]
shuffle();
function prepareView(){
    list.forEach((item, index) =>{
        console.log('0000000')
        
        $("#board").append(`<div class="col-md-4">
        <div class="card board-card" style="background-color:`+ colorCodes[index]+`">`+ item +`</div>
        </div>`);
    
        $("#board-mobile").append(`<div class="col-md-4">
        <div class="card board-mobile-card" style="border-left: 10px solid  `+ colorCodes[index]+`">`+ item +`</div>
        </div>`);
    })
}

function shuffle(array) {
    console.log('pppppppp')
    $("#board").empty();
    $("#board-mobile").empty();
    list.sort(() => Math.random() - 0.5);
    prepareView()
}

function sortNumbers(){
    $("#board").empty();
    $("#board-mobile").empty();
    list.sort();
    
    prepareView()
}