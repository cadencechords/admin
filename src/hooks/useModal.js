import { useState } from 'react';

export default function useModal() {
  const [isOpened, setIsOpened] = useState(false);

  function open() {
    setIsOpened(true);
  }

  function close() {
    setIsOpened(false);
  }
  return [isOpened, open, close];
}
