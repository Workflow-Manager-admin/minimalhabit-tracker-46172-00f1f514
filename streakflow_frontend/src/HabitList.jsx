import React from "react";
import styles from "./HabitList.module.css";
import HabitCard from "./HabitCard";

/**
 * PUBLIC_INTERFACE
 * HabitList renders a responsive grid of HabitCards below the AddNewHabitCard.
 * Cards are styled and adapt to desktop/mobile.
 */
function HabitList({ habits, onToggleDone, onEdit, onDelete }) {
  if (!habits || habits.length === 0) {
    return (
      <div className={styles.emptyState} aria-live="polite">
        No habits yet. Start by adding one above!
      </div>
    );
  }
  return (
    <div className={styles.grid} role="list">
      {habits.map((habit) => (
        <HabitCard
          key={habit.id}
          habit={habit}
          onToggleDone={onToggleDone}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default HabitList;
