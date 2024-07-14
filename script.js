let count=0
let counts=document.getElementById("counterid")
function increment() {
    count+=1
    counts.textContent=count
}
let result=document.getElementById("result")
function save(){
    let saved=count+" - "
    result.textContent+=saved
    count=0
    counts.textContent=count
}