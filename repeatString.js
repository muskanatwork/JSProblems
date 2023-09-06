function repeat (str,num){
    var answer = "";
    if(num>=0){
        for (var i=0; i<num;i++){
            answer = answer +str;
        }
console.log(answer);
    }
    else{
        console.log("ERROR");
    }
}
repeat("hye",3)
repeat("Meenu",1)
repeat("Muskan",0)
repeat("Neha",-2)

var sum = 0;
function addAll(num) {
    for (var add = 1; add <= num; add++) {
        sum = sum + add;
    }
    console.log(sum);
}
addAll(6);








            