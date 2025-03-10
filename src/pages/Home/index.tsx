import BotaoAdicionar from '../../components/BotaoAdicionar'
import SideBar from '../../containers/SideBar'
import ToDoList from '../../containers/ToDoList'

const Home = () => (
  <>
    <SideBar mostrarFiltros />
    <ToDoList />
    <BotaoAdicionar />
  </>
)

export default Home
