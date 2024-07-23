export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const result = mathFunction(); // Attempt to execute the passed function
    queue.push(result);            // Append the result of the function to the queue
  } catch (error) {
    queue.push(error.toString());  // Append the error message to the queue if an error occurs
  }
  queue.push('Guardrail was processed'); // Add this message in every case

  return queue;
}
