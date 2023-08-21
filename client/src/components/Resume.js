import cv from '../public/myuploadedcv.pdf';

const Resume = () => {
    return (
        <div style={
            {
                minHeight:"100vh",
                backgroundColor:"#21222a",
                color:"#e1eeea",
                padding:"1rem"
            }
        } className="Resume-page">
            <h2>Click on the Link below to download Resume</h2>
            <a style={{
                marginTop:"1rem",
                border:"solid 2px #e1eeea",
                padding:".6rem"
        }} href={cv} download="Zedd-cv.pdf">Download</a>
        </div>
      );
}
 
export default Resume;