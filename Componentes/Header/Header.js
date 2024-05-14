import { suggestedSearches, searchImages, imgContainer } from '../Hero/Hero'

import { clearMain } from '../MainPhoto/MainPhoto'
import { openAccount, hideAccount } from '../Account/Account'
import './Header.css'
export let lastQuery = ''
//FUNCION PARA CREAR EL LOGO
const Logo = (nodoPadre) => {
  const LogoHTML = document.createElement('div')
  const img = document.createElement('img')
  LogoHTML.className = 'logo'
  LogoHTML.appendChild(img)
  nodoPadre.appendChild(LogoHTML)
  img.src =
    'https://res.cloudinary.com/dbnbfpype/image/upload/v1714213018/Proyecto%203/Pinterest-logo_cji8z2.png'
}

//FUNCION PARA CREAR BOTONES (Navegación)
const ButtonEnlace = (nodoPadre = document, text = 'Boton', id = '') => {
  const buttonText = document.createElement('span')
  const buttonLink = document.createElement('button')

  buttonLink.id = id
  buttonLink.className = 'buttonEnlacePasivo'
  buttonText.textContent = text
  nodoPadre.appendChild(buttonLink)
  buttonLink.appendChild(buttonText)
  buttonLink.addEventListener('click', () => FocusButton(buttonLink))
}

// AQUI METEMOS EL FOCUS(Colorcitonegro) AL BOTON
const FocusButton = (target) => {
  let arrayButtons = [
    ...document.querySelectorAll('.buttonEnlacePasivo'),
    ...document.querySelectorAll('.buttonEnlaceFoco')
  ]
  if (target === undefined) {
    arrayButtons[0].className = 'buttonEnlaceFoco'
  } else {
    for (const button of arrayButtons) {
      button.className = 'buttonEnlacePasivo'
    }
    target.className = 'buttonEnlaceFoco'
  }
}

//FUNCION PARA CREAR LA BARRA DE BUSCADOR
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
      lastQuery = query
      clearMain()
      hideAccount()
      if (query !== '') {
        searchImages(query)
      } else {
        message.innerText =
          ' Empieza a buscar! por favor, introduce una palabra clave en la barra de buscador.'
        suggestedSearches.innerHTML = ''
        imgContainer.innerHTML = ''
      }
      searchInput.value = ''
    }
  })
}

//FUNCION PARA CREAR BOTONES (NOTIFICACIOn)
const ButtonIcon = (
  nodoPadre,
  img = 'https://res.cloudinary.com/dbnbfpype/image/upload/v1708077411/Proyecto%20-%20Tienda/assets/img/account_rgupgw.png',
  id
) => {
  /* 
  Parametros: 
  primer : El elemento padre al que pertenecen los botones creados
  segundo: la url de la imagen
  tercero: id. TIENE QUE SER UNICA
  
  */
  const divBut = document.createElement('div')
  const iconBut = document.createElement('img')

  divBut.className = 'divBut'
  iconBut.src = img
  iconBut.id = id
  nodoPadre.appendChild(divBut)
  divBut.appendChild(iconBut)
}
//! dropdownMenu solo visible en la mediaquery .divButs invisibles en la media query salvo vuando hacemos click
const MenuDesplegable = () => {
  const menuBut = document.createElement('div')
  const menuIc = document.createElement('img')

  menuBut.className = 'dropdownMenu'
  ;(menuIc.src =
    'https://res.cloudinary.com/dbnbfpype/image/upload/v1715681372/menu-de-puntos_pgkymd.png'),
    (menuBut.id = 'menu')

  document.querySelector('#Mainheader').appendChild(menuBut)
  menuBut.appendChild(menuIc)
  menuBut.addEventListener('click', () => {
    menuBut.className = 'invisible'
    drop.className = 'iconDrop'
  })

  const drop = document.querySelector('#drop')

  const closeBut = document.createElement('div')
  const closeIc = document.createElement('img')

  closeBut.className = 'closeBut'
  closeIc.src =
    'https://res.cloudinary.com/dbnbfpype/image/upload/v1714727007/cerrar-el-simbolo-de-la-cruz-en-un-circulo_n63eqz.png'
  closeBut.id = 'closeMenu'
  drop.appendChild(closeBut)
  closeBut.appendChild(closeIc)

  const close = document.querySelector('#closeMenu')

  close.className = 'divBut'

  closeBut.addEventListener('click', () => {
    drop.className = 'iconNoDrop'
    menuBut.className = 'dropdownMenu'
  })
}
//FUNCION PARA CREAR EL HEADER POR COMPLETO
export const Header = () => {
  const HeaderHTML = document.querySelector('#Mainheader')

  Logo(HeaderHTML)
  ButtonEnlace(HeaderHTML, 'Home', 'home')
  ButtonEnlace(HeaderHTML, 'Create', 'create')
  SearchBar(HeaderHTML)
  const drop = document.createElement('div')
  drop.id = 'drop'
  drop.className = 'iconNoDrop'
  HeaderHTML.appendChild(drop)
  ButtonIcon(
    drop,
    'https://res.cloudinary.com/dbnbfpype/image/upload/v1714471518/Proyecto%20-%20Tienda/assets/img/notificacion_wtny1m.png',
    'notification'
  )
  ButtonIcon(
    drop,
    'https://res.cloudinary.com/dbnbfpype/image/upload/v1714470804/Proyecto%20-%20Tienda/assets/img/2282268_fyfpkw.png',
    'chat'
  )
  ButtonIcon(
    drop,
    'https://res.cloudinary.com/dbnbfpype/image/upload/v1708077411/Proyecto%20-%20Tienda/assets/img/account_rgupgw.png',
    'accountBut'
  )
  MenuDesplegable(HeaderHTML)
  FocusButton()
  const Home = document.querySelector('#home')
  Home.addEventListener('click', () => {
    lastQuery = ''
    searchImages()
    hideAccount()
    clearMain()
  })

  document
    .querySelector('#accountBut')
    .addEventListener('click', () => openAccount())
}
