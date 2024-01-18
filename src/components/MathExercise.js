
// Function to create and display the content
function MathExercise({exercise}) {

  let src = "https://trinket.io/embed/python3/"+ exercise.trinket + "?toggleCode=true"
  return (
    <div class="max-w-3xl bg-white p-6 rounded shadow">
    <h1 class="text-2xl font-bold mb-4">{exercise.title}</h1>
    <p class="mb-4">{exercise.content}</p>
    <p class="font-semibold">Bài giải:</p>
    <p class="mb-4">{exercise.solution}</p>
    <p>Chương trình python cho bài tập này:</p>
    <iframe src={src} width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
</div>
  );
}

export default MathExercise