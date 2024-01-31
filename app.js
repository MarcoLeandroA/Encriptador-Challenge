const textoIngresado = document.getElementById('texto-ingresado');
const textoResultado = document.getElementById('texto-resultado');
const btnEncriptar = document.getElementById('btn-encriptar');
const btnDesencriptar = document.getElementById('btn-desencriptar');
const textoVacio = document.getElementById('sin-palabras');
const btnCopy = document.getElementById('btn-copy');



const reemplazoVocales = {
  'e': 'enter',
  'i': 'imes',
  'a': 'ai',
  'o': 'ober',
  'u': 'ufat'
};
function quitarImagen() {
  if (textoResultado.textContent.length > 0) {
    textoVacio.style.display = 'none';
  } else {
    textoVacio.style.display = 'block';
  }
}
function encriptarTexto() {
  let textoUsuario = textoIngresado.value;
  const textoModificado = textoUsuario.replace(/[aeiou]/g, vocal => reemplazoVocales[vocal.toLowerCase()] || vocal);
  textoResultado.textContent = textoModificado;
}

btnEncriptar.addEventListener('click', () => {
  encriptarTexto();
  quitarImagen();
});

const reemplazoClaves = {
  'enter': 'e',
  'imes': 'i',
  'ai': 'a',
  'ober': 'o',
  'ufat': 'u'
};

function desencriptarTexto() {
  let textoUsuario = textoIngresado.value;
  const textoOriginal = textoUsuario.replace(/enter|imes|ai|ober|ufat/g, clave => reemplazoClaves[clave]);
  textoResultado.textContent = textoOriginal;
}

btnDesencriptar.addEventListener('click', () => {
  desencriptarTexto();
  quitarImagen();
})

function copyToClipboard(texto) {
  return navigator.clipboard.writeText(texto);
}
btnCopy.addEventListener('click', () => {
  copyToClipboard(textoResultado.textContent);
});


