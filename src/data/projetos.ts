import projeto1 from "../assets/images/pizzaKing.png"
import projeto2 from "../assets/images/gamedev.png"

export const data = [
    {
        titulo:"Pizzaria King",
        sobre:`Interface grafica de um sistema de delivery de um pizzaria, onde é possivel adicionar e remover itens no carrinho, podendo visualizar o valor da compra em tempo real. Possui um banner na pagina principal com paginas que ainda serão adicionadas no projeto.`,
        tec:"React.js, Typescript, ContextAPI, Styled Components, React-Router-Dom, React Icons, UUID.",
        img:projeto1,
        url:"https://hilarious-strudel-4649eb.netlify.app/"
    },
    {
        titulo:"Game Dev",
        sobre:"Sistema no qual é possivel realizar um login atraves do firebase authentication, adicionar e remover itens a sua lista de favoritos, criar avaliações, acessar pagina de jogos e filtrar e pesquisar os jogos por nome e gênero.",
        tec:"React.js, Typescript, Redux.js, Styled Components, React-Router-Dom, React Firebase Hooks.",
        img:projeto2,
        url:"https://gamedev-gamma.vercel.app/",
    }
]