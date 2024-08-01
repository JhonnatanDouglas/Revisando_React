import { useEffect, useRef } from "react";

interface iUseClick {
  callback: () => void;
}

const useOutClick = ({ callback }: iUseClick) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) callback();
    };

    window.addEventListener("mousedown", handleClick);

    return () => {
      window.addEventListener("mousedown", handleClick);
    };
  }, []);

  return ref;
};

export default useOutClick;
