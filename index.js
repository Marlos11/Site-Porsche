const colorsPallete = document.querySelectorAll('.colors-palette li span')
const wheelsCollection = document.querySelectorAll('.wheels-collection li span')
const carSelected = document.querySelector('.img-car img ')

let colorSelected = 'br'
let wheelsSelected = 'r1'


colorsPallete.forEach(li =>
    li.addEventListener('click', () => {

       
        colorsPallete.forEach(span => {

            span.classList.remove('selected')
            console.log(colorsPallete)
        })

        li.classList.add('selected') 
      console.log(colorSelected = li.classList)
         colorSelected = li.classList 
        handleShowCar()

    })
)

wheelsCollection.forEach(li =>
    li.addEventListener('click', () => {
        wheelsCollection.forEach(span => {
            span.classList.remove('selected')
        })

        li.classList.add('selected')

        wheelsSelected = li.classList[0]
        handleShowCar()
    })


)

function handleShowCar(){
    carSelected.src = `./assets/p-${colorSelected}-${wheelsSelected}.jpeg`
}

handleShowCar()