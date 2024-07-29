<!-- React aceita apenas metodos imutaveis -->

# map

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

# filter

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

# find

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find

# some

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some

# reduce

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

# slice

https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

<!-- ------------------------------------------------------------------ -->

https://fruit-fake-api.onrender.com

<!--  -->

https://blog-fake-api.onrender.com/
https://github.com/Kenzie-Academy-Brasil-Developers/blog-fake-api

```ts
interface iBlog {
  id: number;
  category: string;
  title: string;
  content: string;
  author: string;
}
```

<!-- ------------------------------------------------------------------ -->

https://www.material-tailwind.com/docs/react/installation

<!-- ------------------------------------------------------------------ -->

<!-- Exemplo de modal -->

```ts
import useOutClick from "../../../hooks/useOutClick";
import useOutKeyDown from "../../../hooks/useOutKeyDown";

interface iModal_2 {
  children: React.ReactNode;
  closeModal: () => void;
}

const ModalAprendendo = ({ children, closeModal }: iModal_2) => {
  const divRef = useOutClick({ callback: closeModal });
  const buttonRef = useOutKeyDown({ callback: closeModal, typeKey: "Escape" });

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75"
      role="dialog"
    >
      <div
        ref={divRef}
        className="relative w-full max-w-md p-6 overflow-hidden bg-white rounded-lg shadow-lg"
      >
        <button
          ref={buttonRef}
          onClick={closeModal}
        >
          Fechar
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default ModalAprendendo;
```

```ts
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
      if ((e.key as unknown) === typeKey) callback();
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      window.addEventListener("keydown", handleKey);
    };
  }, []);

  return ref;
};

export default useOutKeyDown;
```

```ts
import { useEffect, useRef } from "react";

interface iUseClick {
  callback: () => void;
}

const useOutClick = ({ callback }: iUseClick) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        callback();
      }
    };

    window.addEventListener("mousedown", handleClick);

    return () => {
      window.addEventListener("mousedown", handleClick);
    };
  }, []);

  return ref;
};

export default useOutClick;
```

<!-- ------------------------------------------------------------------ -->
