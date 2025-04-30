import * as React from 'react';
import { useRouter } from 'next/router';
import styles from './styles.module.css';

export const BackButton: React.FC<{ className?: string }> = ({ className }) => {
  const router = useRouter();

  // Only show back button if there is history
  const handleBack = React.useCallback(() => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/'); // fallback to home if no history
    }
  }, [router]);

  return (
    <button
      type="button"
      className={className ? `${styles.backButton} ${className}` : styles.backButton}
      onClick={handleBack}
      aria-label="Quay về"
    >
      ← Quay về
    </button>
  );
};
