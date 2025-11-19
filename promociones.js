document.querySelectorAll('.calcular').forEach(boton => {
  boton.addEventListener('click', () => {
    const form = boton.closest('.formularioPromo');
    const tipo = form.dataset.tipo;
    let cantidad = Number(form.querySelector('.cantidad').value);
    let precio = 0;
    
    if(tipo === 'promo1'){
      precio = 20000; 
      let total = precio * cantidad;
      let descuento = 0;
      if(cantidad >=2) descuento = precio * Math.floor(cantidad/2) * 0.5;
      let totalFinal = total - descuento;

      const resultado = form.nextElementSibling;
      resultado.querySelector('.totalSinDescuento').textContent = total;
      resultado.querySelector('.descuento').textContent = descuento;
      resultado.querySelector('.totalFinal').textContent = totalFinal;
    }

    if(tipo === 'promo2'){
      precio = Number(form.querySelector('.producto').value);
      let total = precio * cantidad;
      let descuento = 0;
      if(cantidad >= 3) descuento = precio * Math.floor(cantidad/3);
      let totalFinal = total - descuento;

      const resultado = form.nextElementSibling;
      resultado.querySelector('.totalSinDescuento').textContent = total;
      resultado.querySelector('.descuento').textContent = descuento;
      resultado.querySelector('.totalFinal').textContent = totalFinal;
    }

    if(tipo === 'promo3'){
      precio = Number(form.querySelector('.producto').value);
      let total = precio * cantidad;
      let descuento = 0;
      if(total > 30000) descuento = total * 0.10;
      let totalFinal = total - descuento;

      const resultado = form.nextElementSibling;
      resultado.querySelector('.totalSinDescuento').textContent = total;
      resultado.querySelector('.descuento').textContent = descuento;
      resultado.querySelector('.totalFinal').textContent = totalFinal;
    }
  });
});