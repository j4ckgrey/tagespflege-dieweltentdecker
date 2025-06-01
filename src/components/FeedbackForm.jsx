import React, { useState } from 'react';
import { useFeedback } from './FeedbackContext';

const FeedbackForm = () => {
  const { addFeedback } = useFeedback();
  const [formData, setFormData] = useState({
    name: '',
    rating: 0,
    comment: '',
  });
  const [message, setMessage] = useState(null); // { text: '', type: 'success' | 'error' }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name) {
      setMessage({ text: 'Bitte gib deinen Namen ein.', type: 'error' });
      return;
    }
    if (!formData.comment || formData.comment.length < 10) {
      setMessage({
        text: 'Der Kommentar muss mindestens 10 Zeichen lang sein.',
        type: 'error',
      });
      return;
    }
    if (formData.rating === 0) {
      setMessage({ text: 'Bitte gib eine Bewertung ab.', type: 'error' });
      return;
    }

    addFeedback(formData);
    setFormData({ name: '', rating: 0, comment: '' });
    setMessage({ text: 'Danke für dein Feedback!', type: 'success' });

    setTimeout(() => setMessage(null), 4000); // clear message after 4s
  };

  const renderStars = () => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        onClick={() => setFormData({ ...formData, rating: i + 1 })}
        className={`cursor-pointer text-2xl ${
          i + 1 <= formData.rating ? 'text-yellow-500' : 'text-gray-300'
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto p-6">
        <input
          type="text"
          placeholder="Dein Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full border rounded px-4 py-2"
          required
        />
        <textarea
          placeholder="Dein Kommentar"
          value={formData.comment}
          onChange={(e) =>
            setFormData({ ...formData, comment: e.target.value })
          }
          className="w-full border rounded px-4 py-2"
          rows={3}
          required
        />
        <div className="flex items-center gap-1">
          <span className="mr-2 font-semibold">Bewertung:</span>
          {renderStars()}
        </div>
        <button
          type="submit"
          className="bg-rose-600 text-white px-4 py-2 rounded"
        >
          Absenden
        </button>
      </form>

      {message && (
        <div
          className={`max-w-xl mx-auto mt-4 p-3 rounded ${
            message.type === 'success'
              ? 'bg-green-100 text-rose-600'
              : 'bg-rose-100 text-rose-800'
          }`}
          role="alert"
        >
          {message.text}
        </div>
      )}
    </>
  );
};

export default FeedbackForm;
