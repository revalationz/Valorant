const loginModal=document.querySelector('.login-modal');
const trailerModal=document.querySelector('.trailer-modal');

document.querySelectorAll('[data-open-login]').forEach(button=>button.addEventListener('click',()=>{loginModal.showModal();document.body.classList.add('modal-open')}));
document.querySelectorAll('[data-open-trailer]').forEach(button=>button.addEventListener('click',()=>{trailerModal.showModal();document.body.classList.add('modal-open')}));

document.querySelectorAll('.modal-close').forEach(button=>button.addEventListener('click',()=>{const modal=button.closest('dialog');modal.close();document.body.classList.remove('modal-open')}));
document.querySelectorAll('dialog').forEach(modal=>modal.addEventListener('click',event=>{if(event.target===modal){modal.close();document.body.classList.remove('modal-open')}}));

const menuButton=document.querySelector('.menu-button');
const nav=document.querySelector('.nav');
menuButton?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',open)});
document.querySelectorAll('.nav-links a').forEach(link=>link.addEventListener('click',()=>nav.classList.remove('open')));

const metaButton=document.querySelector('#meta-login-button');
metaButton?.addEventListener('click',()=>{
  // Replace this endpoint with your Meta OAuth route, e.g. /auth/meta.
  const oauthEndpoint='/auth/meta';
  if(location.protocol==='file:'||location.hostname==='localhost'||location.hostname.endsWith('.github.io')){
    metaButton.textContent='Meta OAuth setup required';
    metaButton.disabled=true;
  }else{
    location.assign(oauthEndpoint);
  }
});

const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible')})},{threshold:.12});
document.querySelectorAll('.agent-card,.stat-panel,.media-frame').forEach(el=>observer.observe(el));
