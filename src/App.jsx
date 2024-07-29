import "./App.css";
import { Photos } from "./components/photos";
import { PhotosResponsive } from "./components/photosResponsive";

function App() {
    

    return (
        <div className="myPage">
        
            <Photos/>
            <PhotosResponsive/>
        </div>
    );
}

export default App;
