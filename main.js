var array_name = [];
function submit() {
        var name = document.getElementById("name").value;
         console.log(name);
         array_name.push(name);
    document.getElementById("submit_guest").innerHTML=array_name;
    document.getElementById("name").value="";
}

function show(){
    var show=array_name.join("<br>");
    document.getElementById("show_guest").innerHTML=show;
}

function sorting(){
    var sorting=array_name.sort();
    var sorting1=sorting.join("<br>")
    document.getElementById("sort_guest").innerHTML=sorting1;

}