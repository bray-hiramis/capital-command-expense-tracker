const navList = document.querySelectorAll('[data-nav="nav"]');

console.log(navList);

function handleTabClick(e) {
   e.preventDefault();

   navList.forEach(link => {
      link.classList.remove('current-tab');
   });

   this.classList.add('current-tab');

   const targetId = this.getAttribute('href');
   document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' });
}

navList.forEach(link => {
   link.addEventListener('click', handleTabClick);
})

if (navList.length > 0) {
   navList[0].classList.add('current-tab');
}