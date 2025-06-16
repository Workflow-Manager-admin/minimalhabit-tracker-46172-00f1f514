import React from "react";
import styles from "./HabitCard.module.css";

/**
 * PUBLIC_INTERFACE
 * HabitCard displays a single habit's info: name, frequency, streak, done checkbox,
 * and edit/delete icon buttons, in a soft, rounded card style.
 * Now also renders a gradient animated progress bar with a goal percentage.
 */
// PUBLIC_INTERFACE
function HabitCard({
  habit,
  onToggleDone,
  onEdit,
  onDelete,
}) {
  const { id, habitName, frequency, currentStreak, doneToday, goal = 21 } = habit;

  // Defensive: fallback for missing goal
  const streakGoal = goal > 0 ? goal : 21;
  const rawPercent = Math.min(100, Math.round((currentStreak / streakGoal) * 100));
  const percentDisplay = isNaN(rawPercent) ? 0 : rawPercent;
  const progressBarId = `progressbar-${id}`;

  return (
    <div className={styles.card} tabIndex={0} aria-label={`Habit card: ${habitName}`}>
      <div className={styles.header}>
        <span className={styles.name}>{habitName}</span>
        <div className={styles.actions}>
          <button
            type="button"
            className={styles.iconBtn}
            aria-label="Edit Habit"
            onClick={() => onEdit && onEdit(habit)}
          >
            {/* Pencil icon (edit) */}
            <svg className={styles.icon} viewBox="0 0 20 20" fill="none" width="1em" height="1em">
              <path d="M14.3 2.3a1 1 0 0 1 1.4 0l2 2a1 1 0 0 1 0 1.4l-9.35 9.34-3.25.54a.5.5 0 0 1-.59-.59l.54-3.25L14.3 2.3z" stroke="#A8D5BA" strokeWidth="1.35"/>
              <path d="M13 4l3 3" stroke="#A8D5BA" strokeWidth="1"/>
            </svg>
          </button>
          <button
            type="button"
            className={styles.iconBtn}
            aria-label="Delete Habit"
            onClick={() => onDelete && onDelete(id)}
          >
            {/* Trash icon (delete) */}
            <svg className={styles.icon} viewBox="0 0 20 20" fill="none" width="1em" height="1em">
              <rect x="6.5" y="8" width="1" height="6" rx="0.5" fill="#F4C2C2"/>
              <rect x="9.5" y="8" width="1" height="6" rx="0.5" fill="#F4C2C2"/>
              <rect x="12.5" y="8" width="1" height="6" rx="0.5" fill="#F4C2C2"/>
              <path d="M4 6.5h12M8 6.5v-1A1.5 1.5 0 0 1 9.5 4h1A1.5 1.5 0 0 1 12 5.5v1" stroke="#B65756" strokeWidth="1.3"/>
              <rect x="5" y="7" width="10" height="9" rx="2" stroke="#B65756" strokeWidth="1"/>
            </svg>
          </button>
        </div>
      </div>
      <div className={styles.details}>
        <span className={styles.frequency}>
          {frequency}
        </span>
        <span className={styles.streak} title="Current streak">
          {/* Fire emoji as streak icon for visual */}
          <span className={styles.streakIcon} role="img" aria-label="streak">🔥</span>
          {currentStreak}d
        </span>
      </div>
      {/* Progress bar for streak/goal */}
      <div className={styles.progressBarRow}>
        <div
          className={styles.progressBarWrapper}
          role="progressbar"
          aria-valuenow={currentStreak}
          aria-valuemin={0}
          aria-valuemax={streakGoal}
          aria-label={`Progress: ${percentDisplay}% (${currentStreak} out of ${streakGoal})`}
          id={progressBarId}
        >
          <div
            className={styles.progressBarInner}
            style={{ width: `${Math.min(100, (currentStreak / streakGoal) * 100)}%` }}
            aria-hidden="true"
          />
        </div>
        <span className={styles.progressPercentLabel}>{percentDisplay}%</span>
      </div>
      <label className={styles.doneLabel}>
        <input
          type="checkbox"
          checked={doneToday}
          onChange={() => onToggleDone && onToggleDone(id)}
          className={styles.doneCheckbox}
          aria-label={`Done for Today: ${habitName}`}
        />
        <span className={styles.customCheck}></span>
        <span className={styles.doneText}>Done for Today</span>
      </label>
    </div>
  );
}

export default HabitCard;
