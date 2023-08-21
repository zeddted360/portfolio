import cv from '../public/myuploadedcv.pdf';

const Resume = () => {
    return (
        <div className="Resume-page">
            <h2>Click on the Link below to download Resume</h2>
            <a href={cv} download="Zedd-cv.pdf">Download</a>
        </div>
      );
}
 
export default Resume;