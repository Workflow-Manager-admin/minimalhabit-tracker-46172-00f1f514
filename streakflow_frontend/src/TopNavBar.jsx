import React from "react";
import styles from "./TopNavBar.module.css";

/**
 * PUBLIC_INTERFACE
 * TopNavBar component displays the StreakFlow app name (left)
 * and a profile icon (right) in a soft, minimalist top navigation bar.
 */
function TopNavBar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.contentWrapper}>
        <div className={styles.appName}>
          <span className={styles.emoji} role="img" aria-label="chart">📈</span>
          StreakFlow
        </div>
        <div className={styles.profileIcon}>
          <span className={styles.profileEmoji} role="img" aria-label="profile">👤</span>
        </div>
      </div>
    </nav>
  );
}

export default TopNavBar;
