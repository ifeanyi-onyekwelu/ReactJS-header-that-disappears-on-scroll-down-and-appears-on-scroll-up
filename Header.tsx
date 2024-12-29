import useScrollDirection from "./useScrollDirection";

function Header() {
    const scrollDirection = useScrollDirection();

    return (
        <div className={`p-5 px-10 sticky ${
                scrollDirection === "down" ? "-top-24" : "top-0"
            }  bg-white transition-all duration-500 z-50`}
        ></div>
    );
}
