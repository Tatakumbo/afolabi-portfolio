import Navbar from "../Layout/Navbar";
import Button from "../ui/Button";
import ImageFrame from "../ui/Card";

function HomePage() {

    return(
        <>
            <Navbar/>
            <ImageFrame/>
            <Button props="button"/>
        </>
    )
}
export default HomePage;