import React from 'react';

import { useState } from "react";
import { useEffect } from "react";

function getWindowDimensions() {
    const { innerWidth: width } = window;
    return {
      width
    };
  }

export function UseWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions);
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowDimensions;  
}
