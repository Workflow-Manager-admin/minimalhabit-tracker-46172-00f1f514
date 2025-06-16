import React, { useState } from "react";
import styles from "./AddNewHabitCard.module.css";

/**
 * PUBLIC_INTERFACE
 * AddNewHabitCard provides a card UI for adding a new habit,
 * including a labeled habit name input, a frequency dropdown,
 * a start date picker, and a colorful Add Habit button.
 */
function AddNewHabitCard({ onAddHabit }) {
  const [habitName, setHabitName] = useState("");
  const [frequency, setFrequency] = useState("Daily");
  const [startDate, setStartDate] = useState("");

  // PUBLIC_INTERFACE
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!habitName.trim() || !startDate) return;
    if (onAddHabit) {
      onAddHabit({ habitName, frequency, startDate });
      setHabitName("");
      setFrequency("Daily");
      setStartDate("");
    }
  };

  return (
    <div className={styles.card} role="region" aria-label="Add New Habit">
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.title}>Add New Habit</h2>
        <label className={styles.label} htmlFor="habit-name">
          Habit Name
        </label>
        <input
          id="habit-name"
          className={styles.input}
          type="text"
          placeholder="e.g., Drink Water"
          value={habitName}
          onChange={(e) => setHabitName(e.target.value)}
          required
          autoComplete="off"
        />

        <label className={styles.label} htmlFor="habit-frequency">
          Frequency
        </label>
        <select
          id="habit-frequency"
          className={styles.select}
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
        >
          <option>Daily</option>
          <option>Weekly</option>
          <option>Monthly</option>
        </select>

        <label className={styles.label} htmlFor="habit-start-date">
          Start Date
        </label>
        <input
          id="habit-start-date"
          className={styles.input}
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />

        <button
          type="submit"
          className={styles.addHabitBtn}
          style={{ marginTop: "1.25rem" }}
        >
          Add Habit
        </button>
      </form>
    </div>
  );
}

export default AddNewHabitCard;
