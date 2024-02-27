import Link from 'next/link';
import styles from "./RoundLink.module.css";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const RoundLink = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide the circle when the component is mounted if the route matches the target page
    setIsVisible(!router.pathname.includes('/Ausschreibung'));
  }, [router.pathname]);

  return (
    <>
      {isVisible && (
        <Link href="/Ausschreibung"
          className={styles.roundlink}>Hiring!
        </Link>
      )}
    </>
  );
};

export default RoundLink;