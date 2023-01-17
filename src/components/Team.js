import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { useEffect } from "react";


const Third = () => {

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.querySelectorAll(".card-team")[0].classList.add("fade-left");
          document.querySelectorAll(".card-team")[1].classList.add("fade-top");
          document.querySelectorAll(".card-team")[2].classList.add("fade-bottom");
          document.querySelectorAll(".card-team")[3].classList.add("fade-right");
        } else {
          document.querySelectorAll(".card-team")[0].classList.remove("fade-left");
          document.querySelectorAll(".card-team")[1].classList.remove("fade-top");
          document.querySelectorAll(".card-team")[2].classList.remove("fade-bottom");
          document.querySelectorAll(".card-team")[3].classList.remove("fade-right");
        }
      });
    });
    observer.observe(document.querySelector(".team-wrapper"));

    // Clean up function to disconnect the observer when the component unmounts
    return () => observer.disconnect();

  }, []);
  return (
    <div className='section' data-anchor='page3'>
      <div className='team-wrapper'>
        <div className="row">

          <div className='fade-left'>
            <div className="column">

              <div className="card-team">
                <div className="image-container">
                  <img src="./image/peter.jpg" alt="" height="100px" width="100px" />
                </div><h2>Peter An</h2>
                <p className='title'>Title?</p>
                <div className='text'>
                  <p>I am a web developer with experience in both front-end and back-end development.
                    I am passionate about building dynamic and user-friendly websites, and am always looking
                    to expand my skillset. My ultimate goal is to become a full-stack developer, able to handle
                    all aspects of web development from design to deployment. I am constantly learning new technologies
                    and methodologies to improve my abilities and deliver the best possible solutions for my clients.</p>
                </div>
                <div className='connections'>
                  <a className="a-github" href="https://github.com/">
                    <AiFillGithub className='connection github' size="3rem"></AiFillGithub>
                  </a>
                  <a className="a-linkedin" href="https://nz.linkedin.com/">
                    <AiFillLinkedin className='connection linkedin' size="3rem"></AiFillLinkedin>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='fade-top'>
            <div className="column">
              <div className="card-team">
                <div className="image-container">
                  <img src="./image/jameson.jpg" alt="" height="100px" width="100px" />
                </div>
                <h2>Jameson Yeo</h2>
                <p className='title'>Title?</p>
                <div className='text'>
                  <p>I am a web developer with experience in both front-end and back-end development.
                    I am passionate about building dynamic and user-friendly websites, and am always looking
                    to expand my skillset. My ultimate goal is to become a full-stack developer, able to handle
                    all aspects of web development from design to deployment. I am constantly learning new technologies
                    and methodologies to improve my abilities and deliver the best possible solutions for my clients.</p>
                </div>
                <div className='connections'>
                  <a className="a-github" href="https://github.com/">
                    <AiFillGithub className='connection github' size="3rem"></AiFillGithub>
                  </a>
                  <a className="a-linkedin" href="https://nz.linkedin.com/">
                    <AiFillLinkedin className='connection linkedin' size="3rem"></AiFillLinkedin>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='fade-bottom'>
            <div className="column">
              <div className="card-team">
                <div className="image-container">
                  <img src="./image/chris.jpg" alt="" height="100px" width="100px" />
                </div>
                <h2>Christopher Li</h2>
                <p className='title'>Title?</p>
                <div className='text'>
                  <p>Iam a web developer with experience in both front-end and back-end development.
                    I am passionate about building dynamic and user-friendly websites, and am always looking
                    to expand my skillset. My ultimate goal is to become a full-stack developer, able to handle
                    all aspects of web development from design to deployment. I am constantly learning new technologies
                    and methodologies to improve my abilities and deliver the best possible solutions for my clients.</p>
                </div>
                <div className='connections'>
                  <a className="a-github" href="https://github.com/">
                    <AiFillGithub className='connection github' size="3rem"></AiFillGithub>
                  </a>
                  <a className="a-linkedin" href="https://nz.linkedin.com/">
                    <AiFillLinkedin className='connection linkedin' size="3rem"></AiFillLinkedin>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className='fade-right'>
            <div className="column">
              <div className="card-team">
                <div className="image-container">
                  <img src="./image/renjo.jpg" alt="" height="100px" width="100px" />
                </div>
                <h2>Renjo Angeles</h2>
                <p className='title'>Title?</p>
                <div className='text'>
                  <p>Iam a web developer with experience in both front-end and back-end development.
                    I am passionate about building dynamic and user-friendly websites, and am always looking
                    to expand my skillset. My ultimate goal is to become a full-stack developer, able to handle
                    all aspects of web development from design to deployment. I am constantly learning new technologies
                    and methodologies to improve my abilities and deliver the best possible solutions for my clients.</p>
                </div>
                <div className='connections'>
                  <a className="a-github" href="https://github.com/">
                    <AiFillGithub className='connection github' size="3rem"></AiFillGithub>
                  </a>
                  <a className="a-linkedin" href="https://nz.linkedin.com/">
                    <AiFillLinkedin className='connection linkedin' size="3rem"></AiFillLinkedin>
                  </a>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Third;