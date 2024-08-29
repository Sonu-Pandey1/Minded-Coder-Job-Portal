import Card2 from "../Components/Card2";
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
        // dots:false,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        swipe: true,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    // fade:true,
                }
            }
        ],
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />

    };

    return (

        <div className="home-section">
            {/* Hero Section Start */}
            <div className="hero-section">

                <h1 className="m-3">Your Ultimate Job Search Companion</h1>
                <p className="m-3">
                    Are you looking for the perfect job or the ideal candidate? Find your dream job
                    with thousands of job postings across industries.
                </p>
                <div className="p-3">
                    <div className="search-bar">
                        <svg className="hidden sm:block absolute left-4 md:left-8 top-5 md:top-7 text-base-content ms-4 me-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.85587 1.61739C5.19014 0.725854 6.75882 0.25 8.36354 0.25H8.36358C10.5154 0.250137 12.579 1.105 14.1006 2.62655C15.6221 4.14811 16.477 6.21174 16.4771 8.36355V8.36359C16.4771 9.96831 16.0013 11.537 15.1097 12.8713C14.9533 13.1054 14.7852 13.3305 14.6065 13.5459L19.5303 18.4697C19.8232 18.7626 19.8232 19.2374 19.5303 19.5303C19.2374 19.8232 18.7625 19.8232 18.4696 19.5303L13.5458 14.6065C12.9234 15.1232 12.2239 15.5467 11.4685 15.8596C9.98591 16.4737 8.35454 16.6344 6.78065 16.3213C5.20677 16.0082 3.76107 15.2355 2.62636 14.1008C1.49165 12.9661 0.718908 11.5204 0.405843 9.94648C0.0927783 8.37259 0.253454 6.74122 0.867553 5.25866C1.48165 3.77609 2.52159 2.50892 3.85587 1.61739ZM8.36349 1.75C7.05546 1.75001 5.77681 2.13789 4.68922 2.86459C3.60162 3.5913 2.75394 4.6242 2.25337 5.83268C1.75281 7.04116 1.62183 8.37093 1.87702 9.65384C2.13221 10.9368 2.76209 12.1152 3.68702 13.0401C4.61195 13.965 5.79038 14.5949 7.07329 14.8501C8.3562 15.1053 9.68597 14.9743 10.8945 14.4738C12.1029 13.9732 13.1358 13.1255 13.8625 12.0379C14.5892 10.9503 14.9771 9.67167 14.9771 8.36364M8.36354 1.75C10.1175 1.75012 11.7997 2.44695 13.0399 3.68721C14.2802 4.92748 14.977 6.6096 14.9771 8.36359" fill="currentColor"></path></svg>
                        <input type="text" placeholder="Job Title" />
                        <button>Search</button>
                    </div>
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
                <div className=" container companyes-slider bg-white  ms-auto me-auto text-center  ">
                    <Slider className="" {...settings}>
                        <div className="img-wrapper">
                            <img src="https://cdn-icons-png.flaticon.com/128/16183/16183626.png" alt="microsoft" />
                        </div>
                        <div className="img-wrapper">
                            <img src="https://cdn-icons-png.flaticon.com/128/11423/11423450.png" alt="amazon" />
                        </div>
                        <div className="img-wrapper">
                            <img src="https://cdn-icons-png.flaticon.com/128/11516/11516196.png" alt="google" />
                        </div>
                        <div className="img-wrapper">
                            <img src="https://cdn-icons-png.flaticon.com/128/16183/16183576.png" alt="facebook" />
                        </div>
                        <div className="img-wrapper">
                            <img src="https://cdn-icons-png.flaticon.com/128/5977/5977590.png" alt="netflix" />
                        </div>
                        <div className="img-wrapper">
                            <img src="https://cdn-icons-png.flaticon.com/128/16572/16572710.png" alt="diseny" />
                        </div>
                        <div className="img-wrapper">
                            <img src="https://cdn-icons-png.flaticon.com/128/5969/5969183.png" alt="uber" />
                        </div>
                        <div className="img-wrapper">
                            <img src="https://cdn-icons-png.flaticon.com/128/16183/16183680.png" alt="sony" />
                        </div>
                        <div className="img-wrapper">
                            <img src="https://cdn-icons-png.flaticon.com/128/5969/5969116.png" alt="samsung" />
                        </div>
                        <div className="img-wrapper">
                            <img src="https://cdn-icons-png.flaticon.com/128/16183/16183555.png" alt="youtube" />
                        </div>
                    </Slider>
                </div>
                {/* Slider End */}
            </div>
            {/* Hero Section End */}
            {/* Job Section Start */}
            <div className="job-section">
                <div className="container ">
                    <div className="row">
                        {/* filter-section */}
                        <div className="col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3 ">
                            <div className="filter-wrapper rounded border shadow">
                                {/* filter-top */}
                                <div className="fliter-top d-flex justify-content-between align-items-center pt-4 px-3">
                                    <h6 className="m-0">Search Filter</h6>
                                    <p className="m-0 text-danger">Clear</p>
                                </div>
                                <hr />
                                {/* filter-middle */}
                                <div className="filter-middle border-bottom">
                                    <div className="form ">
                                        <input className="" name="title" type="text" placeholder=" Job Title or Keyword" />
                                        <input name="location" type="text" placeholder=" Location" />
                                        <select>
                                            <option value="">Select Categories</option>
                                            <option value="">Mern</option>
                                            <option value="">Marn</option>
                                            <option value="">Web Developer</option>
                                            <option value="">Back-end Developer</option>
                                            <option value="">Fron-end Developer</option>
                                            <option value="">Full-stack Developer</option>
                                            <option value="">Design/Creative</option>
                                            <option value="">Eduction/Training</option>
                                            <option value="">Engineer/arechitects</option>
                                            <option value="">Marketing/sales</option>
                                            <option value="">It/telicommunicstion</option>

                                        </select>
                                    </div>
                                </div>
                                {/* <hr /> */}
                                {/* filter-bottom */}

                                <div className="filter-top-bottom p-3 border-bottom">
                                    <div className="title">
                                        <h6>Job Type</h6>
                                    </div>
                                    <div className="filter-checkboxes">
                                        <div className="checkbox-wrapper d-flex justify-content-between align-items-center">
                                            <input type="checkbox" name="FullTime" id="partTime" className="checkbox" />
                                            <label htmlFor="partTime" className=" ms-2">Part Time</label>
                                            <span className="ms-auto">5</span>
                                        </div>
                                        <div className="checkbox-wrapper d-flex justify-content-between align-items-center">
                                            <input type="checkbox" name="FullTime"
                                                className="checkbox"
                                                id="partTime" />
                                            <label htmlFor="partTime" className="ms-2">Full Time</label>
                                            <span className="ms-auto">15</span>
                                        </div>
                                        <div className="checkbox-wrapper d-flex justify-content-between align-items-center">
                                            <input type="checkbox" name="FullTime" className="checkbox" id="partTime" />
                                            <label htmlFor="partTime" className="ms-2">Remote</label>
                                            <span className="ms-auto">23</span>
                                        </div>
                                        <div className="checkbox-wrapper d-flex justify-content-between align-items-center">
                                            <input type="checkbox" name="FullTime" className="checkbox" id="partTime" />
                                            <label htmlFor="partTime" className="ms-2">Freelance</label>
                                            <span className="ms-auto">34</span>
                                        </div>
                                        <div className="checkbox-wrapper d-flex justify-content-between align-items-center">
                                            <input type="checkbox" name="FullTime" className="checkbox" id="partTime" />
                                            <label htmlFor="partTime" className="ms-2">Internship</label>
                                            <span className="ms-auto">29</span>
                                        </div>
                                        <div className="checkbox-wrapper d-flex justify-content-between align-items-center">
                                            <input type="checkbox" name="FullTime" className="checkbox" id="partTime" />
                                            <label htmlFor="partTime" className="ms-2">Contract-based</label>
                                            <span className="ms-auto">9</span>
                                        </div>

                                    </div>
                                </div>
                                {/* <hr /> */}

                                {/* filter bottom */}
                                <div className="filter-top-bottom p-3">
                                    <div className="title">
                                        <h6>Experience</h6>
                                    </div>
                                    <div className="filter-checkboxes">
                                        <div className="checkbox-wrapper d-flex justify-content-between align-items-center">
                                            <input type="checkbox" name="frasher" className="checkbox" id="frasher" />
                                            <label htmlFor="frasher" className="ms-2">Frasher</label>
                                            <span className="ms-auto">7</span>
                                        </div>
                                        <div className="checkbox-wrapper d-flex justify-content-between align-items-center">
                                            <input type="checkbox" name="years" className="checkbox" id="years" />
                                            <label htmlFor="years" className="ms-2">+ Years</label>
                                            <span className="ms-auto">13</span>
                                        </div>
                                        <div className="checkbox-wrapper d-flex justify-content-between align-items-center">
                                            <input type="checkbox" name="3years" className="checkbox" id="3years" />
                                            <label htmlFor="3years" className="ms-2">+ 3 Years</label>
                                            <span className="ms-auto">22</span>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* latest job section */}
                        <div className="col-12 col-sm-12 col-md-12 col-lg-9 col-xl-9 col-xxl-9 ">
                            <div className="job-hader d-flex justify-content-between py-4 mt-4">
                                <h4>Latest Jobs</h4>
                                <p className=" text-muted pe-4">8,448 Result Found</p>
                            </div>
                            <Card2 />
                            <Card2 />
                            <Card2 />
                            <Card2 />
                            <Card2 />
                            <Card2 />
                            <Card2 />
                            <Card2 />
                            <div className="all-jobs pt-3 pb-5">
                                <button className=" btn btn-outline-primary"> See All Jobs</button>
                            </div>
                            <div className="job-footer mb-5">
                                <h1 className="text-white pb-2">Subscribe Newsletter</h1>
                                <p className=" text-light pb-1">Sign up to our newsletter to ger $10 off your first order, as well as news of our latest offers and product releases.</p>
                                <div className="subscribe-bar">
                                    <svg className="hidden sm:block absolute left-4 md:left-8 top-5 md:top-7 text-base-content ms-4 me-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M3.85587 1.61739C5.19014 0.725854 6.75882 0.25 8.36354 0.25H8.36358C10.5154 0.250137 12.579 1.105 14.1006 2.62655C15.6221 4.14811 16.477 6.21174 16.4771 8.36355V8.36359C16.4771 9.96831 16.0013 11.537 15.1097 12.8713C14.9533 13.1054 14.7852 13.3305 14.6065 13.5459L19.5303 18.4697C19.8232 18.7626 19.8232 19.2374 19.5303 19.5303C19.2374 19.8232 18.7625 19.8232 18.4696 19.5303L13.5458 14.6065C12.9234 15.1232 12.2239 15.5467 11.4685 15.8596C9.98591 16.4737 8.35454 16.6344 6.78065 16.3213C5.20677 16.0082 3.76107 15.2355 2.62636 14.1008C1.49165 12.9661 0.718908 11.5204 0.405843 9.94648C0.0927783 8.37259 0.253454 6.74122 0.867553 5.25866C1.48165 3.77609 2.52159 2.50892 3.85587 1.61739ZM8.36349 1.75C7.05546 1.75001 5.77681 2.13789 4.68922 2.86459C3.60162 3.5913 2.75394 4.6242 2.25337 5.83268C1.75281 7.04116 1.62183 8.37093 1.87702 9.65384C2.13221 10.9368 2.76209 12.1152 3.68702 13.0401C4.61195 13.965 5.79038 14.5949 7.07329 14.8501C8.3562 15.1053 9.68597 14.9743 10.8945 14.4738C12.1029 13.9732 13.1358 13.1255 13.8625 12.0379C14.5892 10.9503 14.9771 9.67167 14.9771 8.36364M8.36354 1.75C10.1175 1.75012 11.7997 2.44695 13.0399 3.68721C14.2802 4.92748 14.977 6.6096 14.9771 8.36359" fill="currentColor"></path></svg>
                                    <input type="text" placeholder="Enter Your Email" />
                                    <button>Subscribe</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
