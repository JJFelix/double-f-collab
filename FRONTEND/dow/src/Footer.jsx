
import cover from './podcast1.jpeg';
const Footer = () => {
  return (
    <div className="footer">
      <div className="active-playing-bar">
        <div className="cover-art">
          <img src={cover} alt="Cover Art" />
        </div>
        <div className="playback-controls">
          <button className="control-button">
            <i className="fa fa-step-backward"></i>
          </button>
          <button className="control-button">
            <i className="fa fa-play"></i>
          </button>
          <button className="control-button">
            <i className="fa fa-step-forward"></i>
          </button>
          <button className="control-button">
            <i className="fa fa-random"></i>
          </button>
        </div>
        <div className="progress-bar">
          <div className="progress"></div>
        </div>
        <button className="control-button">
          <i className="fa fa-repeat"></i>
        </button>
        <div className="volume-slider">
          <i className="fa fa-volume-up"></i>
          <input type="range" className="slider" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
