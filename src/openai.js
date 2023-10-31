// const { Configuration, OpenAIApi } = require('./openai');

// const configuration = new Configuration({ apiKey: "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" });


// const openai = new OpenAIApi(configuration);


// export async function sendMsgToOpenAi(message) {
//     try {
//         const response = await openai.createCompletion({
//             model: 'text-davinci-003',
//             prompt: message,
//             temperature: 0.7,
//             max_tokens: 256,
//             top_p: 1,
//             frequency_penalty: 0,
//             presence_penalty: 0,
//         });

//         // Check if there are choices in the response and return the text from the first choice
//         if (response.data.choices && response.data.choices.length > 0) {
//             return response.data.choices[0].text;
//         } else {
//             throw new Error('No response from OpenAI');
//         }
//     } catch (error) {
//         throw new Error('Error communicating with OpenAI: ' + error.message);
//     }
// }


// openai.js

const { Configuration, OpenAIApi } = require('openai'); 

const configuration = new Configuration({
  apiKey: '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',
});

const openai = new OpenAIApi(configuration);

export async function sendMsgToOpenAi(message) {
  const res = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: message,
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  return res.data.choices[0].text;
}



// const {Configuration,OpenAIApi}=require('./openai')
// const configuration = new Configuration({ apiKey: "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" });
// const openai = new OpenAIApi(configuration);

// export async function sendMsgToOpenAi(message) {
//     const res = await openai.createCompletion({
//         model: 'text-davinci-003',
//         prompt: message,
//         temperature: 0.7,
//         max_tokens: 256,
//         top_p: 1,
//         frequency_penalty: 0,
//         presence_penalty: 0  
//     });
//     return res.data.choices[0].text;
// }


// const OpenAI=require('openai');
// const openai=new OpenAI({
//     apiKey:"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"
// })

// const sendMsgToOpenAi