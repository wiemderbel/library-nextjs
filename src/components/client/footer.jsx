import React from "react";

const Footer = () => {
  return (
    // <div className=" overflow-hidden">
    //   <div className="row gy-5">
    //     <div className="col-12">
    //       <div className=" border bg-light">
    //         <img
    //           src="https://res.cloudinary.com/iset-sfax/image/upload/v1703777135/images/footer_pwl1jb.png"
    //           width={1400}
    //           height={400}
    //           alt="footer"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="footer flex items-center justify-center text-center py-4" style={{ backgroundColor: "#071121", height:'50px' }}>
      <div className="container">
        <p className="text-secondary">&copy; {new Date().getFullYear()} Library. Tous droits réservés.</p>
      </div>
    </div>
  );
};

export default Footer;
