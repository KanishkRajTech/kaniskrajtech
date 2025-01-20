import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5>Brainzima Innovation Pvt. Ltd.</h5>
              </div>
              <h3>2024</h3>
              
            </div>
            <p>
            Passionate and detail-oriented Frontend Developer with experience in building responsive and user-friendly web applications. Proficient in HTML, CSS, JavaScript, Tailwind CSS, and PHP, with a strong understanding of UI/UX principles. Skilled in creating dynamic and interactive interfaces, ensuring seamless user experiences across devices..
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Softwere Tester</h4>
                <h5>Bifinder.com</h5>
              </div>
              <h3>2024</h3>
              
            </div>
            <p>
            Detail-oriented Software Test Engineer with a strong foundation in manual and automated testing, ensuring the quality, functionality, and performance of web applications. Experienced in identifying and resolving software defects, executing test cases, and collaborating with development teams to enhance product reliability.
            </p>
          </div>
          {/* <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Position In Company</h4>
                <h5>Company Name</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              labore sit non ipsum temporibus quidem, deserunt eaque officiis
              mollitia ratione suscipit repellat.
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Career;
