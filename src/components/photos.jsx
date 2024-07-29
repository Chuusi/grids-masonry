import Masonry from "react-responsive-masonry";
import { myImgs } from "../assets/imgs";

export const Photos = () => {

    return (
        <main>
            <h1>FIXED</h1>
            <Masonry columnsCount={3} gutter="8px" className="grid">
                {myImgs.map((elem, index) => (
                    <img
                        src={elem}
                        alt="img"
                        key={index}
                        style={{width: "100%", display: "block"}}
                        className="grid-item"
                    ></img>
                ))}
            </Masonry>
        </main>


    )
};
