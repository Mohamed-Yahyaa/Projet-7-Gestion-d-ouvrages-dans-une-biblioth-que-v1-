var selectedRow = null
document.getElementById("formSubmit").addEventListener("submit", function (event) {
    event.preventDefault();
    var work = readwork();
    if(selectedRow ===null){
        insertNewRow(work);
    }
    else{
        updateRecord(work);
    }
    resetForm();
});


function readwork() {

    var work = {};
    work["title"] = document.getElementById("inputTitle").value;
    work["author"] = document.getElementById("inputAuthor").value;
    work["price"] = parseFloat(document.getElementById("inputPrix").value);
    work["date"] = document.getElementById("inputDate").value;
    work["language"] = document.getElementById("inputLanguage").value;
    var cheackValues = document.getElementsByName("workType");
    for (var i = 0; i < cheackValues.length; i++) {
        if (cheackValues[i].checked) {
            work["type"] = cheackValues[i].value;
            break;
        }
    }
    return work;
}



function insertNewRow(work) {
    if(confirm('are you sure ?')){
        var tableBody = document.getElementById("worksTable").getElementsByTagName('tbody')[0];
    var newRow = tableBody.insertRow(tableBody.length);
    newRow.insertCell(0).innerHTML = work.title;

    newRow.insertCell(1).innerHTML = work.author;
    
    newRow.insertCell(2).innerHTML = work.price;
        
    newRow.insertCell(3).innerHTML= work.date;
    
    newRow.insertCell(4).innerHTML= work.language
   
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = work.type;
    
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = `<button onClick='onEdit(this)'>Edit</button>  <button onClick='onDelete(this)'>Delete</button>`;

    }
    



}
//Edit the work
function onEdit(td){
    
    selectedRow = td.parentElement.parentElement;
    document.getElementById('inputTitle').value = selectedRow.cells[0].innerHTML;
    document.getElementById('inputAuthor').value = selectedRow.cells[1].innerHTML;
    document.getElementById('inputPrix').value = selectedRow.cells[2].innerHTML;
    document.getElementById('inputDate').value = selectedRow.cells[3].innerHTML;
    document.getElementById('inputLanguage').value = selectedRow.cells[4].innerHTML;
    document.getElementById('gridCheck').value = selectedRow.cells[5].innerHTML;


}
function updateRecord(work){
    selectedRow.cells[0].innerHTML = work.title;
    selectedRow.cells[1].innerHTML = work.author;
    selectedRow.cells[2].innerHTML = work.price;
    selectedRow.cells[3].innerHTML = work.date;
    selectedRow.cells[4].innerHTML = work.language;
    selectedRow.cells[5].innerHTML = work.type;


}
//Delete the work
function onDelete(td){
    if(confirm('Do you want to delete this record?')){
      var  row = td.parentElement.parentElement;
        document.getElementById('worksTable').deleteRow(row.rowIndex)
    }
    resetForm();
}

//reset the work
function resetForm(){
    document.getElementById('inputTitle').value ='';
    document.getElementById('inputAuthor').value ='';
    document.getElementById('inputPrix').value ='';
    document.getElementById('inputDate').value ='';
    document.getElementById('inputLanguage').value ='';
    document.getElementById('gridCheck').value ='';

}


function show(){

    
    document.querySelector('#formSubmit').style.display = 'flex';

}
function hide (){
    document.querySelector('#formSubmit').style.display ='none';
}