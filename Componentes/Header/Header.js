import { suggestedSearches, searchImages, imgContainer } from '../Hero/Hero'
import './Header.css'

const Logo = (nodoPadre) => {
  const LogoHTML = document.createElement('div')
  const img = document.createElement('img')
  LogoHTML.className = 'logo'
  LogoHTML.appendChild(img)
  nodoPadre.appendChild(LogoHTML)
  img.src =
    'https://res.cloudinary.com/dbnbfpype/image/upload/v1714213018/Proyecto%203/Pinterest-logo_cji8z2.png'
}
const ButtonEnlace = (nodoPadre = document, text = 'Pepe', enlace = '#') => {
  const buttonContainer = document.createElement('div')
  const buttonText = document.createElement('span')
  const buttonLink = document.createElement('a')

  buttonContainer.className = 'buttonEnlace2'
  buttonLink.href = enlace
  buttonText.textContent = text

  nodoPadre.appendChild(buttonLink)
  buttonLink.appendChild(buttonContainer)
  buttonContainer.appendChild(buttonText)
}
const SearchBar = (nodoPadre) => {
  const barHTML = document.createElement('div')
  const imgSearch = document.createElement('img')
  const inputSearch = document.createElement('input')
  const closingIcon = document.createElement('img')

  barHTML.className = 'searchBar'
  imgSearch.src =
    'https://res.cloudinary.com/dbnbfpype/image/upload/v1708077417/Proyecto%20-%20Tienda/assets/img/search3%C3%A7_x8f2zm.png'
  inputSearch.placeholder = 'Search'
  inputSearch.id = 'searchInput'
  closingIcon.src =
    'https://res.cloudinary.com/dbnbfpype/image/upload/v1714727007/cerrar-el-simbolo-de-la-cruz-en-un-circulo_n63eqz.png'

  imgSearch.className = 'imgSearch'
  closingIcon.className = 'closingIcon'
  inputSearch.className = 'inputclass'

  nodoPadre.appendChild(barHTML)
  barHTML.appendChild(imgSearch)

  barHTML.appendChild(inputSearch)
  barHTML.appendChild(closingIcon)

  inputSearch.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const query = inputSearch.value.trim()
      if (query !== '') {
        searchImages(query)
      } else {
        message.innerText =
          ' Empieza a buscar! por favor, introduce una palabra clave en la barra de buscador.'
        suggestedSearches.innerHTML = ''
        imgContainer.innerHTML = ''
      }
    }
  })
}
const ButtonIcon = (
  nodoPadre,
  img = 'https://res.cloudinary.com/dbnbfpype/image/upload/v1708077411/Proyecto%20-%20Tienda/assets/img/account_rgupgw.png'
) => {
  const divBut = document.createElement('div')
  const iconBut = document.createElement('img')

  divBut.className = 'divBut'
  iconBut.src = img

  nodoPadre.appendChild(divBut)
  divBut.appendChild(iconBut)
}

export const Header = () => {
  const HeaderHTML = document.querySelector('#Mainheader')

  Logo(HeaderHTML)
  ButtonEnlace(HeaderHTML, 'Home')
  ButtonEnlace(HeaderHTML, 'Create')
  SearchBar(HeaderHTML)
  ButtonIcon(
    HeaderHTML,
    'https://res.cloudinary.com/dbnbfpype/image/upload/v1714471518/Proyecto%20-%20Tienda/assets/img/notificacion_wtny1m.png'
  )
  ButtonIcon(
    HeaderHTML,
    'https://res.cloudinary.com/dbnbfpype/image/upload/v1714470804/Proyecto%20-%20Tienda/assets/img/2282268_fyfpkw.png'
  )
  ButtonIcon(HeaderHTML)
}
