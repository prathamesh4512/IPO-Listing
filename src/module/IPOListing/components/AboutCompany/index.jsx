import React, { useEffect, useState } from "react";
import './style.css'

const AboutCompany = ({companyName}) => {
  const [readMore, setReadMore] = useState(false);

  useEffect(()=>{
    if(window && window.innerWidth<900){
      setReadMore(true)
    }
  },[])

  return (
    <div className="about_company">
      <h3 className="heading" >About the company</h3>
      <h3 className="company_heading" >{companyName} PRIVATE LIMITED</h3>
      <section>
        <p className="details_text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, {
            readMore?<span >
              ...
              <span onClick={()=>setReadMore(false)}  style={{color:"orange"}}>
              read more
              </span>
              </span> : <> <span>but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.</span>
          
            <>
          <br />
          <br />
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.ambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
          {window.innerWidth<900 &&   <span onClick={()=>setReadMore(true)}  style={{color:"orange"}}>
             {' '} read less
              </span> }
            </>
            </>
          }

        </p>
      </section>
    </div>
  );
};

export default AboutCompany;
