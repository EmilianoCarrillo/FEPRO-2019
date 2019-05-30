document.getElementById('demosMenu').addEventListener('change', function(e){
    var dropdown = document.getElementById('demosMenu');
    window.location.href = dropdown.options[dropdown.selectedIndex].getAttribute('id') + '.html';
});


function hideHamMenu(){
    document.querySelector("#menuToggle input").checked = false;
    console.log(document.querySelector("#menuToggle input").checked);
}

