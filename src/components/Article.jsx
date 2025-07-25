import React from "react";

function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const getEmojiRating = (min) => {
    let emoji = "";
    if (min < 30) {
      const cups = Math.ceil(min / 5);
      emoji = "☕️".repeat(cups);
    } else {
      const boxes = Math.ceil(min / 10);
      emoji = "🍱".repeat(boxes);
    }
    return `${emoji} ${min} min read`;
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date} • {getEmojiRating(minutes)}</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;

