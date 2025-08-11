// app.js - Validación de formulario y comportamiento (envío simulado)
document.addEventListener('DOMContentLoaded', function(){
  const form = document.getElementById('contactForm');
  const formMsg = document.getElementById('formMsg');
  const submitBtn = document.getElementById('submitBtn');
  const resetBtn = document.getElementById('resetBtn');

  function validateEmail(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  form.addEventListener('submit', function(e){
    e.preventDefault();
    formMsg.textContent = '';
    const nombre = form.nombre.value.trim();
    const email = form.email.value.trim();
    const mensaje = form.mensaje.value.trim();

    // Validaciones
    if(!nombre){
      formMsg.style.color = '#e74c3c';
      formMsg.textContent = 'Por favor ingresa tu nombre.';
      form.nombre.focus();
      return;
    }
    if(!email || !validateEmail(email)){
      formMsg.style.color = '#e74c3c';
      formMsg.textContent = 'Por favor ingresa un correo válido.';
      form.email.focus();
      return;
    }
    if(!mensaje || mensaje.length < 10){
      formMsg.style.color = '#e74c3c';
      formMsg.textContent = 'El mensaje debe tener al menos 10 caracteres.';
      form.mensaje.focus();
      return;
    }

    // Simulación de envío
    submitBtn.disabled = true;
    submitBtn.textContent = 'Enviando...';

    setTimeout(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Enviar';
      form.reset();
      formMsg.style.color = 'green';
      formMsg.textContent = 'Mensaje enviado correctamente. Gracias por contactar a Manos Solidarias.';
    }, 1000);
  });

  resetBtn.addEventListener('click', () => {
    form.reset();
    formMsg.textContent = '';
  });
});
