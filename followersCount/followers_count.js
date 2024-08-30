let count = 0;

function increaseCount() {
    count++;
}

function displayCount() {
    Document.getElementById('CountDisplay').innerHTML = count;
}

function increaseCount() {
    count++;
    displayCount();
}

function checkCountValue() {
    if (count === 10) {
         alert("Your Instagram post gained 10 followers")
   } else if (count === 20) {
         alert("Your Instagram post gained 20 followers")
   }    
}

function increaseCount() {
    count++;
    displayCount();
    checkCountValue();
}