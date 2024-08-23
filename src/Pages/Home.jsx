import "./Home.scss";
import Slider from "react-slick";

function Home() {

    // Custom Prev Arrow Function
    const CustomPrevArrow = (props) => {
        const { className, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    display: "block",
                    background: "transparent",
                    color: "black",
                    fontSize: "24px",
                    left: "-30px",
                    top: 75,
                    zIndex: 1,
                    cursor: "pointer",
                }}
                onClick={onClick}
            >
                &#10094;
            </div>
        );
    };

    // Custom Next Arrow Function
    const CustomNextArrow = (props) => {
        const { className, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    display: "block",
                    background: "transparent",
                    color: "black",
                    fontSize: "24px",
                    right: "-25px",
                    top: 75,
                    zIndex: 1,
                    cursor: "pointer",
                }}
                onClick={onClick}
            >
                &#10095;
            </div>
        );
    };

    // Settings For Slider
    var settings = {

        infinite: true,
        // arrows:false,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />

    };

    return (

        <div className="home-section">
            {/* Hero Section Start */}
            <div className="hero-section">

                <h1>Your Ultimate Job Search Companion</h1>
                <p>
                    Are you looking for the perfect job or the ideal candidate? Find your dream job
                    with thousands of job postings across industries.
                </p>
                <div className="search-bar">
                    <svg className="hidden sm:block absolute left-4 md:left-8 top-5 md:top-7 text-base-content ms-4 me-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.85587 1.61739C5.19014 0.725854 6.75882 0.25 8.36354 0.25H8.36358C10.5154 0.250137 12.579 1.105 14.1006 2.62655C15.6221 4.14811 16.477 6.21174 16.4771 8.36355V8.36359C16.4771 9.96831 16.0013 11.537 15.1097 12.8713C14.9533 13.1054 14.7852 13.3305 14.6065 13.5459L19.5303 18.4697C19.8232 18.7626 19.8232 19.2374 19.5303 19.5303C19.2374 19.8232 18.7625 19.8232 18.4696 19.5303L13.5458 14.6065C12.9234 15.1232 12.2239 15.5467 11.4685 15.8596C9.98591 16.4737 8.35454 16.6344 6.78065 16.3213C5.20677 16.0082 3.76107 15.2355 2.62636 14.1008C1.49165 12.9661 0.718908 11.5204 0.405843 9.94648C0.0927783 8.37259 0.253454 6.74122 0.867553 5.25866C1.48165 3.77609 2.52159 2.50892 3.85587 1.61739ZM8.36349 1.75C7.05546 1.75001 5.77681 2.13789 4.68922 2.86459C3.60162 3.5913 2.75394 4.6242 2.25337 5.83268C1.75281 7.04116 1.62183 8.37093 1.87702 9.65384C2.13221 10.9368 2.76209 12.1152 3.68702 13.0401C4.61195 13.965 5.79038 14.5949 7.07329 14.8501C8.3562 15.1053 9.68597 14.9743 10.8945 14.4738C12.1029 13.9732 13.1358 13.1255 13.8625 12.0379C14.5892 10.9503 14.9771 9.67167 14.9771 8.36364M8.36354 1.75C10.1175 1.75012 11.7997 2.44695 13.0399 3.68721C14.2802 4.92748 14.977 6.6096 14.9771 8.36359" fill="currentColor"></path></svg>
                    <input type="text" placeholder="Job Title" />
                    <button>Search</button>
                </div>
                {/* Avatars */}
                <div className="avatars d-flex justify-content-center mt-4 align-items-baseline gap-4">
                    <p className=" ">10,000+ Jobs</p>
                    <div className="avatar-group d-flex  ">
                        <div className="avatar">
                            <img src="https://jobboard-template.vercel.app/_next/image?url=%2FavatarGroup-1.png&w=48&q=75" className="avatar-img"></img>
                        </div>
                        <div className="avatar">
                            <img src="	https://jobboard-template.vercel.app/_next/image?url=%2FavatarGroup-2.png&w=48&q=75" className="avatar-img"></img>
                        </div>
                        <div className="avatar">
                            <img src="https://jobboard-template.vercel.app/_next/image?url=%2FavatarGroup-3.png&w=48&q=75" className="avatar-img"></img>
                        </div>
                        <div className="avatar">
                            <img src="	https://jobboard-template.vercel.app/_next/image?url=%2FavatarGroup-4.png&w=48&q=75" className="avatar-img"></img>
                        </div>
                        <div className="avatar">
                            <img src="	https://jobboard-template.vercel.app/_next/image?url=%2FavatarGroup-5.png&w=48&q=75" className="avatar-img"></img>
                        </div>
                    </div>
                </div>
                {/* Slider Start */}
                <div className="companyes-slider bg-white  ms-auto me-auto text-center  ">
                    <Slider className="" {...settings}>
                        <div>
                            <img src="https://cdn-icons-png.flaticon.com/128/16183/16183626.png" alt="microsoft" />
                        </div>
                        <div>
                            <img src="https://cdn-icons-png.flaticon.com/128/11423/11423450.png" alt="amazon" />
                        </div>
                        <div>
                            <img src="https://cdn-icons-png.flaticon.com/128/11516/11516196.png" alt="google" />
                        </div>
                        <div>
                            <img src="https://cdn-icons-png.flaticon.com/128/16183/16183576.png" alt="facebook" />
                        </div>
                        <div>
                            <img src="https://cdn-icons-png.flaticon.com/128/5977/5977590.png" alt="netflix" />
                        </div>
                        <div>
                            <img src="https://cdn-icons-png.flaticon.com/128/16572/16572710.png" alt="diseny" />
                        </div>
                        <div>
                            <img src="https://cdn-icons-png.flaticon.com/128/5969/5969183.png" alt="uber" />
                        </div>
                        <div>
                            <img src="https://cdn-icons-png.flaticon.com/128/16183/16183680.png" alt="sony" />
                        </div>
                        <div>
                            <img src="https://cdn-icons-png.flaticon.com/128/5969/5969116.png" alt="samsung" />
                        </div>
                        <div>
                            <img src="https://cdn-icons-png.flaticon.com/128/16183/16183555.png" alt="youtube" />
                        </div>
                    </Slider>
                </div>
                {/* Slider End */}
            </div>
            {/* Hero Section End */}
            {/* Job Section Start */}
            <div className="job-section">
                <h1>job section</h1>
            </div>
        </div>
    );
}

export default Home;
