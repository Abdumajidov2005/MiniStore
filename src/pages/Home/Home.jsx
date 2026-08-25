import Hero from "./HomeSections/Hero"
import MobilProdacts from "./HomeSections/MobilProdacts"
import SaleCards from "./HomeSections/SaleCards"
import WatchesProdacts from "./HomeSections/WatchesProdacts"
import YearSale from "./HomeSections/YearSale"

function Home() {
    return (
        <>
            <Hero />
            <SaleCards />
            <MobilProdacts />
            <WatchesProdacts />
            <YearSale/>
            
        </>
    )
}

export default Home
