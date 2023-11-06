import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
 
  return (
    <>
     <div className="container-fluid footer">
       <div className="row">
         <div className="col-md-6 inrto_footer">
           
           <div className="intro">
             <h6 className="mt-3">Passionate MERN Developer - Md Shamim Akhter</h6>
           </div>
         </div>
        

         <div className="col-md-6 social_footer">
          
           <div className="Social text-center">
             <h4 className="text-center mt-3">Follow Me</h4>
             <a href="https://www.facebook.com/profile.php?id=100047398065321" target="_blank"><i
                 class="fab fa-facebook-f"></i></a>
             <a href="https://www.twitter.com/saltech23" target="_blank"><i class="fab fa-twitter"></i></a>
             <a href="https://instagram.com/saltech23?igshid=OGQ5ZDc2ODk2ZA==" target="_blank"><i
                 class="fab fa-instagram"></i></a>
             <a href="https://www.linkedin.com/in/md-shamim-akhter-b12624193" target="_blank"><i
                 class="fab fa-linkedin"></i></a>
             <a href="https://github.com/techjmi" target="_blank"><i class="fab fa-github"></i></a>
             <a href="https://www.hackerrank.com/techjmi?hr_r=1" target="_blank"><i class="fab fa-hackerrank"></i></a>
           </div>
            </div>
         <div className="text-center copyright_footer mt-auto">
            <p className="copyright mb-0">&copy; Copyright 2023 <Link to="/">Md Shamim Akhter</Link></p>
          </div>
       </div>
     </div>
    </>
  );
};

export default Footer;
