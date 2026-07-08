function showPage(id){
  document.querySelectorAll(".page").forEach(page => page.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  window.scrollTo({top:0, behavior:"smooth"});
}

function updateCountdown(){
  const now = new Date();
  let birthday = new Date(now.getFullYear(), 9, 2, 0, 0, 0);

  if(now > birthday){
    birthday = new Date(now.getFullYear() + 1, 9, 2, 0, 0, 0);
  }

  const diff = birthday - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  document.getElementById("countdown").innerHTML =
    `<strong>${days}</strong> days • <strong>${hours}</strong> hours • <strong>${minutes}</strong> minutes until my birthday`;
}

updateCountdown();
setInterval(updateCountdown, 60000);
