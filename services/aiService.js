// const geminiai = require("../config/geminiai");

// async function askAI(question) {
//     try {
//         const response = await geminiai.models.generateContent({
//             model: "gemini-2.5-flash",
//             contents: question,
//         });

//         return response.text;
//     } catch (error) {
//         console.error(error);
//         return "AI service error";
//     }
// }

// module.exports = askAI;

const { GoogleGenAI } = require("@google/genai");
// Initialize client (automatically uses process.env.GEMINI_API_KEY)
const ai = new GoogleGenAI({});

async function askAI(question) {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-flash-latest",
            contents: [
                {
                    role: "user",
                    parts: [
                        { text: "System prompt instructions: You are a helpful AI assistant." },
                        { text: question }
                    ]
                }
            ]
        });

        // The official SDK exposes the result directly via the .text property
        return response.text;
    }
    catch (error) {
        console.error(error);
        return "AI service error";
    }
}

module.exports = askAI;