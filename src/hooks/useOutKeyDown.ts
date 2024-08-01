import { useEffect, useRef } from "react";
import iKeyboardKey from "../interfaces/keyboardInterfaces";

interface iUseClick {
  typeKey: iKeyboardKey;
  callback: () => void;
}

const useOutKeyDown = ({ callback, typeKey }: iUseClick) => {
  const ref = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.key as string) === typeKey) callback();
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [callback, typeKey]);

  return ref;
};

export default useOutKeyDown;
