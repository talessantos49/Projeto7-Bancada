import { useRef, useEffect } from 'react';
import IMask from 'imask';

export default function MaskedInput({ mask, value, onChange, name, ...props }) {
  const inputRef = useRef(null);
  const maskRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      maskRef.current = IMask(inputRef.current, {
        mask,
        lazy: false, // mostra a máscara completa no input
      });

      maskRef.current.on('accept', () => {
        const maskedValue = maskRef.current.value;
        onChange({ target: { name, value: maskedValue } });
      });

      // Inicializa o valor se já existir
      if (value) {
        maskRef.current.value = value;
      }
    }

    return () => {
      if (maskRef.current) {
        maskRef.current.destroy();
      }
    };
  }, [mask]);

  useEffect(() => {
    if (maskRef.current && value !== maskRef.current.value) {
      maskRef.current.value = value || '';
    }
  }, [value]);

  return <input ref={inputRef} {...props} />;
}
