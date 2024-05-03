"use client"

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <article>
      <section>
        <h1>Home</h1>
        <button onClick={() => { setCount(count + 1) }}>
          click = {count}
        </button>
      </section>
    </article>
  );
}