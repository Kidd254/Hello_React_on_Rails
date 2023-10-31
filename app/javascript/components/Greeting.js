import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { getRandomGreeting } from '../redux/greetings/greetingsSlice';

function Greeting() {
  console.log('Greeting component is rendering.');
  const { greetings, isLoading, error } = useSelector(
    (state) => state.greetings
  );
  const dispatchActions = useDispatch();

  useEffect(() => {
    console.log('UseEffect is triggered.');
    dispatchActions(getRandomGreeting());
  }, [dispatchActions]);

  onsole.log('Greetings:', greetings); // Add this line
  console.log('Is Loading:', isLoading); // Add this line
  console.log('Error:', error); // Add this line

  let loadMessage = null;

  if (isLoading) {
    loadMessage = 'Loading message...';
  }

  if (error) {
    loadMessage = 'Error loading data';
  }

  return (
    <section>
      {isLoading || error ? (
        <p className="status">{loadMessage}</p>
      ) : (
        <div>
          {greetings.map((greeting) => (
            <p key={greeting.id} className="greeting-message">
              {greeting.content}
            </p>
          ))}
        </div>
      )}
    </section>
  );
}

export default Greeting;
