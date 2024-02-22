const textoIngresado = document.getElementById('texto-ingresado');
const textoResultado = document.getElementById('texto-resultado');
const btnEncriptar = document.getElementById('btn-encriptar');
const btnDesencriptar = document.getElementById('btn-desencriptar');
const textoVacio = document.getElementById('sin-palabras');
const btnCopy = document.getElementById('btn-copy');

function notify(message, color) {
  Toastify({
    text: message,
    className: "info",
    style: {
      background: color,
    }
  }).showToast();
};

function quitarImagen(state) {
  if (textoResultado.textContent.length > 0 && state) {
    textoVacio.style.display = 'none';
  } else {
    textoVacio.style.display = 'block';
  }
};

function encriptarTexto() {
  const reemplazoVocales = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
  };
  let textoUsuario = textoIngresado.value;

  if (/^[^\w\s]+$/.test(textoUsuario) || /[0-9]/.test(textoUsuario) || !/[aeiou]/.test(textoUsuario)) {
    notify('Ingrese solo letras minúsculas y sin acentos que incluyan vocales', '#ff0c43');
  } else {
    const textoModificado = textoUsuario.toLowerCase().replace(/[aeiou]/g, vocal => reemplazoVocales[vocal.toLowerCase()] || vocal);
    textoResultado.textContent = textoModificado;
    notify('Encriptado con exito', '#03C988');
  }
};

function desencriptarTexto() {
  const reemplazoClaves = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat': 'u'
  };
  let textoUsuario = textoIngresado.value;

  if (/^[^\w\s]+$/.test(textoUsuario) || /[0-9]/.test(textoUsuario) || !/[aeiou]/.test(textoUsuario)) {
    notify('Ingrese el texto encriptado', '#ff0c43');
  } else {
    const textoOriginal = textoUsuario.toLowerCase().replace(/enter|imes|ai|ober|ufat/g, clave => reemplazoClaves[clave]);
    textoResultado.textContent = textoOriginal;
    notify('Desencriptado con exito', '#03C988');
  }
};

function copyToClipboard(texto) {
  return navigator.clipboard.writeText(texto);
};

function limpiarTexto() {
  textoIngresado.value = '';
}

btnCopy.addEventListener('click', () => {
  console.log(textoResultado.value)
  if (textoResultado.textContent.length > 0) {
    copyToClipboard(textoResultado.textContent);
    notify('Copiado al portapapeles', '#7F8487');
    textoResultado.textContent = '';
    quitarImagen(false);
  } else {
    notify('No hay texto para copiar', '#ff0c43');
  }
});

btnEncriptar.addEventListener('click', () => {
  encriptarTexto();
  limpiarTexto();
  quitarImagen(true);

});

btnDesencriptar.addEventListener('click', () => {
  desencriptarTexto();
  limpiarTexto();
  quitarImagen(true);
});