const reemplazoVocales = {
  'e': 'enter',
  'i': 'imes',
  'a': 'ai',
  'o': 'ober',
  'u': 'ufat'
};

const textoIngresado = document.getElementById('texto-ingresado');
const textoResultado = document.getElementById('texto-resultado');
const btnEncriptar = document.getElementById('btn-encriptar');
const btnDesencriptar = document.getElementById('btn-desencriptar');
const textoVacio = document.getElementById('sin-palabras');

let textoUsuario = textoIngresado.value;
console.log(textoUsuario);

btnEncriptar.addEventListener('click', () => {
  reemplazarVocales(textoUsuario);
})

btnDesencriptar.addEventListener('click', () => {
  textoResultado.textContent = textoUsuario;
})

function reemplazarVocales(palabra) {
  const palabraModificada = palabra.replace(/[aeiou]/g, vocal => reemplazoVocales[vocal.toLowerCase()] || vocal);
  textoResultado.textContent = palabraModificada;
}



