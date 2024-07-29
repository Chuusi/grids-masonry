import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { myImgs } from "../assets/imgs";

export const PhotosResponsive = () => {

    return (
        <main>
            <h1>RESPONSIVE</h1>
            <ResponsiveMasonry
                columnsCountBreakPoints={{750:1, 900: 2, 1200: 3}}
            >

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

            </ResponsiveMasonry>
        </main>


    )
};
