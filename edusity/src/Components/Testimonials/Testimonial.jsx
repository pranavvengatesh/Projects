import React, { useRef } from 'react'
import './Testimonial.css'
import next_btn from '../../assets/next-icon.png'
import prev_btn from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
const Testimonial = () => {
     const slider = useRef();
    let tx= 0;
const slideForward = ()=>{
   if(tx > -50){
    tx -=25;
   }
   slider.current.style.transform = `translateX(${tx}%)`

}
const slideBackward = ()=>{
   if(tx < 0){
    tx +=25;
   }
   slider.current.style.transform = `translateX(${tx}%)`;

}


  return (
    <div className='testimonial'>
      <img src={next_btn} alt="" className='next-btn' onClick={slideForward} />
      <img src={prev_btn} alt="" className='prev-btn' onClick={slideBackward} />
      <div className="slider">
      <ul ref={slider}>
        <li>
            <div className="slide">
                <div className="user-info">
                    <img src={user_1} alt="" />
                    <div>
                        <h3>
                            Joseph vijay
                        </h3><span>Chennai,IND</span>
                    </div>
                </div>
                <p>This university changed how I see the world and my future.
                    The classes are engaging, and the professors actually care.
                    I've gained real-world skills through internships and workshops.
                    The campus vibe is super welcoming and diverse.
                    It feels like a place where I truly belong.
                 </p>
            </div>
        </li>
        <li>
            <div className="slide">
                <div className="user-info">
                    <img src={user_2} alt="" />
                    <div>
                        <h3>
                            Ajith Kumar
                        </h3><span>Delhi,IND</span>
                    </div>
                </div>
                <p>Studying here gave me the confidence to launch my startup.
                    The tech labs and mentorship opportunities are next level.
                    Faculty encouraged me to think big and take risks.
                    Even after graduation, the alumni network is strong.
                    I'd choose this place again in a heartbeat.

                 </p>
            </div>
        </li>
        <li>
            <div className="slide">
                <div className="user-info">
                    <img src={user_3} alt="" />
                    <div>
                        <h3>
                           Suresh Raina
                        </h3><span>Uttarpradesh,IND</span>
                    </div>
                </div>
                <p>I came here to grow—and I did more than I imagined.
                    The leadership programs helped me find my voice.
                    Group projects pushed me to collaborate and lead.
                    There's a great balance of academics and real exposure.
                    This institute shaped both my career and mindset.

                 </p>
            </div>
        </li>
        <li>
            <div className="slide">
                <div className="user-info">
                    <img src={user_4} alt="" />
                    <div>
                        <h3>
                           MS Dhoni
                        </h3><span>Ranjhi,IND</span>
                    </div>
                </div>
                <p>Every day here feels like a step toward my dream job.
The projects are practical, and the guidance is top-notch.
Being around ambitious peers keeps me motivated.
There’s always something exciting happening on campus.
It’s not just an education—it’s an experience.

                 </p>
            </div>
        </li>
      </ul>
      </div>
    </div>
  )
}

export default Testimonial