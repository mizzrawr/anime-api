import React, { useRef, useEffect } from 'react';


const Footer = () => {
  const footerDate = useRef();

  useEffect(() => {
    footerDate.current = new Date().getFullYear();
  }, []);
  return (
    <footer>


      <p>
       &copy;
        {new Date().getFullYear()} Mizzrawr
       </p>
    </footer>
  );
};

export default Footer;