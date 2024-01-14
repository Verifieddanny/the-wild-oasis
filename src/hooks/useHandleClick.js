import { useEffect, useRef } from "react";

import React from "react";

function useHandleClick(closeWindow, listenCapturing = true) {
  const styledModalRef = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (
        styledModalRef.current &&
        !styledModalRef.current.contains(e.target)
      ) {
        closeWindow();
      }
    };

    document.addEventListener("click", handleClick, listenCapturing);

    return () =>
      document.removeEventListener("click", handleClick, listenCapturing);
  }, [closeWindow]);

  return styledModalRef;
}

export default useHandleClick;
