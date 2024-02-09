function toggleMode() {
  const html = document.documentElement

  //if(html.classList.contains('light')) {
  //  html.classList.remove('light')
  //} else {
  //  html.classList.add('light')
  //}
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  //se light mode adicionar imag-light
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/Perfil_Round_Light.png")
    img.setAttribute(
      "alt",
      "Selfie de Rafael de Sá Alberto, usando camiseta branca olhando para a câmera"
    )
  }

  //senão manter img
  else {
    img.setAttribute("src", "./Assets/Perfil_Round.png")
    img.setAttribute(
      "alt",
      "Foto do busto de Rafael de Sá Alberto de perfil, olhando para a direita, com os cabelos cacheados soltos, usando camisa jeans e bandana na altura da testa."
    )
  }
}
