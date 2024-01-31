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

function quitarImagen() {
  if (textoResultado.textContent.length > 0) {
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
  const textoModificado = textoUsuario.toLowerCase().replace(/[aeiou]/g, vocal => reemplazoVocales[vocal.toLowerCase()] || vocal);
  textoResultado.textContent = textoModificado;
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
  const textoOriginal = textoUsuario.toLowerCase().replace(/enter|imes|ai|ober|ufat/g, clave => reemplazoClaves[clave]);
  textoResultado.textContent = textoOriginal;
};

function copyToClipboard(texto) {
  return navigator.clipboard.writeText(texto);
};

function limpiarTexto() {
  textoIngresado.value = '';
}

btnEncriptar.addEventListener('click', () => {
  encriptarTexto();
  limpiarTexto();
  quitarImagen();
  notify('Encriptado con exito', '#03C988');
});

btnDesencriptar.addEventListener('click', () => {
  desencriptarTexto();
  limpiarTexto();
  quitarImagen();
  notify('Desencriptado con exito', '#03C988');
});

btnCopy.addEventListener('click', () => {
  copyToClipboard(textoResultado.textContent);
  notify('Copiado al portapapeles', '#7F8487');
});