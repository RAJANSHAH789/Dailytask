let notebtn = document.getElementById("notebtn");
notebtn.addEventListener("click", function(e) {
    let writenote = document.getElementById("writenote");
    console.log(writenote.nodeValue);
    let notestorage = localStorage.getItem("notestorage");
    // console.log(notestorage);
    if (notestorage == null) {
        addnotestorage = [];
    } else {
        addnotestorage = JSON.parse(notestorage);
    }
    addnotestorage.push(writenote.nodeValue);
    console.log(writenote.nodeValue)
    localStorage.setItem("notestorage", JSON.stringify(addnotestorage));


});