function openmenu() {
    const nav_links = document.querySelector('.nav_links');
    if (nav_links) {
        nav_links.style.display = 'block';
    } else {
        console.error("Element with class 'nav_links' not found.");
    }
}

function closemenu() {
    const nav_links = document.querySelector('.nav_links');
    if (nav_links) {
        nav_links.style.display = 'none';
    } else {
        console.error("Element with class 'nav_links' not found.");
    }
}

function showmaincontent() {
    const main_content = document.querySelector('.main_content ul');
    if (main_content) {
      main_content.style.display = 'block';
    } else {
      console.error("Element with class 'main_content ul' not found.");
    }
  }
  
function closemain() {
  const main_content = document.querySelector('.main_content ul');
  if (main_content) {
    main_content.style.display = 'none';
  } else {
    console.error("Element with class 'main_content ul' not found.");
  }
}  

function showCustomAlert() {
  alert("This feature is not available.");
}

function cart_one() {
  alert("The cart is not available")
}

function submitbtn(){
  alert(" Can't submit the form.");
}
