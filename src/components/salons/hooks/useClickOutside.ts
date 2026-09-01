import { useEffect } from "react";

export default function useClickOutside(
  refs: React.RefObject<HTMLElement | null>[],
  callbacks: (() => void)[]
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      refs.forEach((ref, index) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          callbacks[index]();
        }
      });
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [refs, callbacks]);
}
