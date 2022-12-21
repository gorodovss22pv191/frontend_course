import './Home.css';
import ListProducts from "../../components/App/ListProducts";

const Home = () => {
    return (
        <main className="Main">
            <div className="MainInfo">
                <ListProducts/>
            </div>
        </main>
    )
}
export default Home;