// import React, { useState } from 'react';
// import axios from 'axios';

// function ChatGPTApp() {
//   const [inputText, setInputText] = useState('');
//   const [response, setResponse] = useState('');

//   const sendMessage = async () => {
//     try {
//       const response = await axios.post(
//         'https://api.openai.com/v1/engines/davinci/completions',
//         {
//           model: 'text-davinci-002', // or any other model
//           messages: [
//             { role: 'user', content: inputText }
//           ]
//         },
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer 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'
//           }
//         }
//       );

//       setResponse(response.data.choices[0].text);
//     } catch (error) {
//       console.error('Error fetching response:', error);
//     }
//   };

//   return (
//     <div>
//       <div>{response}</div>
//       <input 
//         type="text" 
//         value={inputText} 
//         onChange={(e) => setInputText(e.target.value)} 
//       />
//       <button onClick={sendMessage}>Send</button>
//     </div>
//   );
// }

// export default ChatGPTApp;

import React, { useState } from 'react';
import axios from 'axios';

function ChatGPTApp() {
  const [inputText, setInputText] = useState('');
  const [response, setResponse] = useState('');

  const sendMessage = async () => {
    try {
      const response = await axios.post(
        'https://api.openai.com/v1/completions',
        {
          model: 'gpt-3.5-turbo',
          prompt: inputText,
          max_tokens: 150
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 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'
          }
        }
      );

      setResponse(response.data.choices[0].text);
    } catch (error) {
      console.error('Error fetching response:', error);
    }
  };

  return (
    <div>
      <div>{response}</div>
      <input 
        type="text" 
        value={inputText} 
        onChange={(e) => setInputText(e.target.value)} 
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default ChatGPTApp;

