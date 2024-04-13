document.addEventListener("DOMContentLoaded",(event) => {
    setTimeout(() =>{
        document.querySelector("#load-iframe-map").innerHTML = `
    <iframe class="contact__iframe" frameborder="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106427.83704037087!2d-103.3013466051306!3d20.662964064949882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428addaf761b92d%3A0x2f0e04ac2a4f3e36!2sExpo%20Guadalajara!5e0!3m2!1ses-419!2smx!4v1712180946609!5m2!1ses-419!2smx" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    `;
    }, 500);
    
});