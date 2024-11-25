import React, { useState } from "react";
import "./App.css";

function App() {
    const [habits, setHabits] = useState([]);
    const [input, setInput] = useState("");

    const addHabit = () => {
        if (input.trim()) {
            setHabits([
                ...habits,
                { name: input, streak: 0, completed: false },
            ]);
            setInput("");
        }
    };

    const toggleCompletion = (index) => {
        setHabits(
            habits.map((habit, i) =>
                i === index
                    ? {
                          ...habit,
                          completed: !habit.completed,
                          streak: habit.completed ? habit.streak : habit.streak + 1,
                      }
                    : habit
            )
        );
    };

    const resetStreak = (index) => {
        setHabits(
            habits.map((habit, i) =>
                i === index ? { ...habit, streak: 0, completed: false } : habit
            )
        );
    };

    return (
        <div className="App">
            <header className="header">
                <h1>Habit Tracker</h1>
                <p>Track your daily habits and build streaks!</p>
            </header>
            <main>
                <div className="input-section">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Enter a new habit"
                    />
                    <button onClick={addHabit}>Add</button>
                </div>
                <div className="habit-list">
                    {habits.length === 0 ? (
                        <p className="no-habits">No habits yet. Start adding one!</p>
                    ) : (
                        habits.map((habit, index) => (
                            <div className="habit-card" key={index}>
                                <h3>{habit.name}</h3>
                                <p>🔥 Streak: {habit.streak} day(s)</p>
                                <div className="buttons">
                                    <button
                                        onClick={() => toggleCompletion(index)}
                                        className={habit.completed ? "completed" : "not-completed"}
                                    >
                                        {habit.completed ? "Completed" : "Mark as Done"}
                                    </button>
                                    <button onClick={() => resetStreak(index)} className="reset">
                                        Reset
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </main>
        </div>
    );
}

export default App;
