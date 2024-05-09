import './style.css'
import { Header } from './Componentes/Header/Header'
import { searchImages } from './Componentes/Hero/Hero'

Header()
searchImages()

// Event listener para el botón de búsqueda
/* searchButton.addEventListener('click', () => {
  const query = searschInput.value.trim()
  if (query !== '') {
    searchImages(query)
  } else {
    message.innerText = 'Por favor, introduce una palabra clave para buscar.'
    suggestedSearches.innerHTML = ''
    imageContainer.innerHTML = ''
  }
})
 */
