import { useEffect, useRef } from 'react';

export default function Home() {
  const outputRef = useRef();

  async function handleClick() {
    const start = new Date();
    const data = await fetch('/api/geo').then((res) => res.text());
    const time = new Date() - start;

    outputRef.current.textContent = `Got data: '${data}' in ${time}ms`;
  }

  return (
    <>
      <button onClick={handleClick}>Run</button>
      <div ref={outputRef}></div>
    </>
  );
}
