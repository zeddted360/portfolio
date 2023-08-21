import './css-files/photos.css';
import d from '../public/d.jpg';
import d1 from '../public/d1.jpg';
import d2 from '../public/d2.jpg';
import d3 from '../public/d3.jpg';
import d4 from '../public/d4.jpg';
import d5 from '../public/d5.jpg';
import d6 from '../public/d6.jpg';
import d7 from '../public/d7.jpg';
import d8 from '../public/d8.jpg';
import d9 from '../public/d9.jpg';
import d10 from '../public/d10.jpg';
import d11 from '../public/d11.jpg';
import d12 from '../public/d12.jpg';
import d13 from '../public/d13.jpg';
import d14 from '../public/d14.jpg';
import d15 from '../public/d15.jpg';
import d16 from '../public/d16.jpg';
import d17 from '../public/d17.jpg';
import p from '../public/p.jpg';
import p1 from '../public/p1.jpg';
import p2 from '../public/p2.jpg'
import p3 from '../public/p3.jpg'
import p4 from '../public/p4.jpg'
import p5 from '../public/p5.jpg'
import pp from '../public/pp.jpg'
import pp1 from '../public/pp1.jpg'
import prepute from '../public/prepute.jpg'
import profile from '../public/p.jpg';
import one from '../public/1.jpg';
import two from '../public/2.jpg';
import three from '../public/3.jpg';
import four from '../public/4.jpg';
import five from '../public/5.jpg';
import six from '../public/6.jpg';
import a from '../public/a.jpg';
import b from '../public/b.jpg';
import c from '../public/c.jpg';
import e from '../public/e.jpg';
import seven from '../public/7.jpg';
import aa from '../public/aa.jpeg';
import bb from '../public/bb.jpg';
import cc from '../public/cc.JPG';
import dd from '../public/dd.jpg';
import ee from '../public/ee.jpg';
import ff from '../public/ff.jpg';
import gg from '../public/gg.jpg';
import hh from '../public/hh.jpg';
import ii from '../public/ii.jpg';
import jj from '../public/jj.jpg';
import kk from '../public/kk.jpg';
import ll from '../public/ll.jpg';
import mm from '../public/mm.jpg';
import oo from '../public/FB_IMG_16923829536900105.jpg';
import ppp from '../public/FB_IMG_16923829589480345.jpg';




import { useState } from 'react';



const Photos = () => {
const [hidePhotos , setHidePhotos] = useState(false);
const [hideProfilePhotos , setHideProfilePhotos] = useState(false);


const designImages = [
    d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11,d12,d13,d14,d15,d16,d17,
    one,two,three,four,six,seven,a,b,c,d,e,oo,five,ppp
   ]

   const personalImages = [
    p,p1,p2,p3,p4,p5,pp,pp1,prepute,profile,
    aa,bb,cc,dd,ee,ff,gg,hh,ii,jj,kk,ll,mm,
   ]
   const mappedProfileImages = personalImages.map(imag=><div style={{borderRadius:"1rem"}} className='img-container'key={imag}><img style={{borderRadius:"1rem"}} src={imag}alt="design-imag" /></div>)

const mappedDesignImage = designImages.map(imag=><div style={{borderRadius:"1rem"}} className='img-container'key={imag}><img style={{borderRadius:"1rem"}}src={imag} alt="profile-imag" /></div>)

    return ( 
        <div style={{
            height:(!hideProfilePhotos && !hidePhotos )? "100vh":"100%",
        }} className="photos">
            <h2>My Photos</h2>
            <div className="personal-photos design-photos">
            <button onClick={()=>setHideProfilePhotos(prev=>!prev)}>
                    {!hideProfilePhotos  ? "Open Profile Photos" : "Close Profile Photos"} 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>

                </button>
                { hideProfilePhotos && mappedProfileImages }

            </div>
            <div className="design-photos">
                <button onClick={()=>setHidePhotos(prev=>!prev)}>
                    {!hidePhotos ? "Open Designed Photos" : "Close Designed Photos"} 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>

                </button>
                { hidePhotos && mappedDesignImage }
                </div>
        </div>
     );
}
 
export default Photos;