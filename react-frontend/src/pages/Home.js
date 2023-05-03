import React from "react";
import "./Home.css";
import Main from '../Images/main.png';
import Main2 from '../Images/main2.png';
import Main3 from '../Images/main3.png';
import Main4 from '../Images/main4.png';

export const Home = (props) => {
  return (
    <>
    <div className='d-flex flex-row justify-content-center align-items-center '>
                    <div className='w-100'>
                        <img className="w-100 " src={Main} />
                    </div>
                    
            </div>
            <div className='d-flex flex-row justify-content-center align-items-center '>
                    <div className='w-100'>
                        <img className="w-100 " src={Main2} />
                    </div>
                    
            </div>
            <div className='d-flex flex-row justify-content-center align-items-center '>
                    <div className='w-100'>
                        <img className="w-100 " src={Main3} />
                    </div>
                    
            </div>
            <div className='d-flex flex-row justify-content-center align-items-center '>
                    <div className='w-100'>
                        <img className="w-100 " src={Main4} />
                    </div>
                    
            </div>
    </>
  );
};
