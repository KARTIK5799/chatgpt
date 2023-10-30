

// const {Configuration,OpenAIApi}=require('openai')
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


const OpenAI=require('openai');
const openai=new OpenAI({
    apiKey:"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"
})

const sendMsgToOpenAi