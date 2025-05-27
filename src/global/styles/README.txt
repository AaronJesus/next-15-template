global.scss
Clases universales

/////Colores/////

En colors.scss se ve una lista de los colores, la convencion es de intentar poner el nombre del color y no donde se usa con algunas excepciones
(secondary siendo lo segundo mas oscuro y light siendo algo muy muy clarito).
por ejemplo: white en lugar de primary.
Los colores del sistema si llevan nombre de su situacion, son:
Info (azul).
Warning (amarillo).
Danger (rojo).
Success (verde).

//////Clases/////

Las clases para utilizar estos colores si es que no se estan usando ya en una hoja de estilos especificos son.
bg (Background color).
text (Color).
border (border-color).

ejemplo: bg-danger, text-blue, border-light

Si se le agregar hover antes de bg o text se le aplicara el color solo al hacerles hover.
la clase de border cuenta con muy pocos colores ya que no sale casi su uso, se pueden declarar en global.scss si se necesitan

La manera de usar estas clases son bg-[color], reemplazando [color] por el nombre del color que se quiera usar;

////Utilidades de tailwind://////

align-abs-middle: 
    alinear un elemento absolute en el centro
align-abs-y: 
    alinear un elemento absoluto en el centro verticalmente
align-abs-x: 
    alinear un elemento absolute en el centro horizontalmente
img-container: 
    generalmente se usa con un elemento de imagen dentro de este con el atributo de fill y object contain
    position relative shrink-0
regular-btn-padding:
    un poco mas de padding a los lados que de arriba y abajo, y bordes rondeados (boton default)
icon-btn-padding:
    padding y bordes par botones que solo van a contener un icono
flex-center:
    display flex y items center
flex-center-3:
    igual que flex center pero con un gap de 12px
trans-3:
    transision de 300ms
shadow-base
    box shadow en todas las direcciones



El resto de los estilos si no tienen su propia hoja de estilos va a venir con tailwind