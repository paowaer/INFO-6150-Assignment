import "./About.css";

function About() {
  return (
    <div className="about__panel">
      <h2 className="about__title">About me</h2>
      <div className="about__text">
        <p>Hi there!</p>
        <p>I am Ian Ou.</p>
        <p>
          Welcome to Deja View, where moments are frozen in time and stories
          come to life through the lens of my camera.
        </p>
        <p>
          Photography isn&apos;t just a hobby or a job for me; it&apos;s a
          passion. Whether I&apos;m exploring nature&apos;s beauty, capturing
          candid moments, or diving into vibrant landscapes, every click of the
          shutter is a new adventure, full of discovery and expression.
        </p>
        <p>
          Thank you for visiting, and I hope the moments you find here bring you
          as much joy as they&apos;ve brought me capturing them.
        </p>
      </div>
      <div>
        <img className="about__image" src="\pipi.jpg" alt="this is my selfie" />
      </div>
    </div>
  );
}

export default About;
