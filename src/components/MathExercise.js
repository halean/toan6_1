
// Function to create and display the content
import parse from 'html-react-parser'
import React, { useState } from 'react';

function ExpandableDiv({content, head}) {
  // State to track whether the content is expanded or not
  const [expanded, setExpanded] = useState(false);

  // Function to toggle the expand/collapse state
  const toggleContent = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="border p-3 rounded">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleContent}
      >
        <h2 className="text-lg">Nhấn vào để {expanded ? 'đóng' : 'xem'} {head}</h2>
        <span className="text-lg">{expanded ? '↓' : '→'}</span>
      </div>
      {expanded && (
        <div className="mt-3">
          {/* Expandable content goes here */}
          <p>{content}</p>
        </div>
      )}
    </div>
  );
}

function MathExercise({exercise}) {

  let src = "https://trinket.io/embed/python3/"+ exercise.trinket + "?toggleCode=true"
  if (exercise.further_reading_and_exercises) {
    return (
    <div class="max-w-3xl bg-white p-6 rounded shadow">
    <a id={exercise.trinket}><h1 class="text-2xl font-bold mb-4">{exercise.title}</h1></a>
    <p class="mb-4">{exercise.content}</p>
    <iframe src={exercise.further_reading_and_exercises} width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen/>
    </div>
    )
  }
  return (
    <div class="max-w-3xl bg-white p-6 rounded shadow">
    <a id={exercise.trinket}><h1 class="text-2xl font-bold mb-4">{exercise.title}</h1></a>
    <p class="mb-4">{exercise.content}</p>
    <p class="font-semibold">Bài giải:</p>
    <p class="mb-4">{exercise.solution}</p>
    <p>Chương trình python cho bài tập này:</p>
    
    {
    exercise.trinket && <><iframe src={src} width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
    <ExpandableDiv content={parse(exercise.code_explain)} head={"giải thích đoạn mã"} /></>
    }
</div>
  );
}

export default MathExercise