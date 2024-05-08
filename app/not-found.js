import Link from "next/link";
import "../components/handleStates.css";

export default function NotFound() {
  return (
    <>
      <div className='center container'>
        <h1>404 - Page Not Found</h1>
      </div>
      <br />
      <div className='center container'>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link href="/">Go back to the homepage</Link>
      </div>
    </>
  );
}