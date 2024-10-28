import React from "react";
import "./Navmap.css";

const navmap = () => {
  return (
    <>
      <div className="responsive-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57907.535033357206!2d55.10080843079242!3d24.890444281912284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f74ca30ae218f%3A0xb16f9af810b72e08!2sDubai%20South%20-%20Dubai!5e0!3m2!1sen!2sae!4v1729837133459!5m2!1sen!2sae"
          width="100%"
          height="100%"
          allowfullscreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default navmap;
