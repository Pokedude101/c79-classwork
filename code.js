var names = [];

function submit(){
    var name1=document.getElementById("nameofstudent_1").value;
    var name2=document.getElementById("nameofstudent_2").value;
    var name3=document.getElementById("nameofstudent_3").value;
    var name4=document.getElementById("nameofstudent_4").value;

    names.push(name1);
    names.push(name2);
    names.push(name3);
    names.push(name4);

    console.log(names);

    document.getElementById("namelist").innerHTML=names;
    document.getElementById("submit_b").style.display = "none";
    document.getElementById("sort_b").style.display = "inline-block";
}

function sorting(){
    names.sort();
    console.log(names);
    document.getElementById("namelist").innerHTML = names;
}
