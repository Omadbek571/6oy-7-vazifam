import React, { useState } from "react";

const LazyImage = ({ src, alt, placeholder }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div style={{ position: "relative", width: "100%", height: "auto" }}>
      {!isLoaded && (
        <img
          src={placeholder}
          alt="Loading..."
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "auto" }}
        />
      )}

      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "auto",
          opacity: isLoaded ? 1 : 0,
          transition: "opacity 0.5s ease-in-out",
        }}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  );
};

export default LazyImage;
