import React, { useState } from "react";

const StreamList = () => {
  const [event, setEvent] = useState("");
  const [events, setEvents] = useState(() => JSON.parse(localStorage.getItem("events")) || []);
  const [editingIndex, setEditingIndex] = useState(null); // Tracks which item is being edited
  const [editingText, setEditingText] = useState(""); // Tracks the text being edited

  // Handle adding a new event
  const handleSubmit = (e) => {
    e.preventDefault();
    if (event) {
      const updatedEvents = [...events, { name: event, watched: false }];
      setEvents(updatedEvents);
      localStorage.setItem("events", JSON.stringify(updatedEvents));
      setEvent("");
    }
  };

  // Handle deleting an event
  const handleDelete = (index) => {
    const updatedEvents = events.filter((_, i) => i !== index);
    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
  };

  // Handle marking an event as watched
  const handleWatch = (index) => {
    const updatedEvents = events.map((item, i) =>
      i === index ? { ...item, watched: !item.watched } : item
    );
    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
  };

  // Handle entering edit mode
  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditingText(events[index].name);
  };

  // Handle saving the edited event
  const handleSaveEdit = () => {
    const updatedEvents = events.map((item, i) =>
      i === editingIndex ? { ...item, name: editingText } : item
    );
    setEvents(updatedEvents);
    localStorage.setItem("events", JSON.stringify(updatedEvents));
    setEditingIndex(null);
    setEditingText("");
  };

  return (
    <div className="streamlist">
      <h2>Manage Your Stream Events</h2>

      {/* Add Event Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={event}
          onChange={(e) => setEvent(e.target.value)}
          placeholder="Enter event name"
        />
        <button type="submit">Add Event</button>
      </form>

      {/* Event List */}
      <ul>
        {events.map((item, index) => (
          <li key={index} className={item.watched ? "watched" : ""}>
            {/* Edit Mode */}
            {editingIndex === index ? (
              <>
                <input
                  type="text"
                  value={editingText}
                  onChange={(e) => setEditingText(e.target.value)}
                />
                <button onClick={handleSaveEdit}>Save</button>
              </>
            ) : (
              <>
                {/* Display Event */}
                <span>{item.name}</span>
                <div>
                  <button onClick={() => handleWatch(index)}>
                    {item.watched ? "Unwatch" : "Watch"}
                  </button>
                  <button onClick={() => handleEdit(index)}>Edit</button>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StreamList;
