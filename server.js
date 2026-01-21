import express from 'express';
import { GoogleGenAI } from '@google/genai';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// API Endpoint for Chat
app.post('/api/chat', async (req, res) => {
    try {
        const { message, systemInstruction } = req.body;
        const apiKey = process.env.GEMINI_API_KEY;

        if (!apiKey) {
            console.error('API Key is missing');
            return res.status(500).json({ error: 'Server configuration error' });
        }

        const ai = new GoogleGenAI({ apiKey });

        const request = {
            contents: [{ role: 'user', parts: [{ text: message }] }],
            systemInstruction: { parts: [{ text: systemInstruction }] }
        };
        // If we want history we'd need to append previous messages.

        // Let's try to keep it simple.

        const chat = ai.chats.create({
            model: 'gemini-3-flash-preview', // Revert to stable model for reliability unless preview is needed. 3-flash-preview might be fine.
            config: {
                systemInstruction: systemInstruction
            }
        });

        const result = await chat.sendMessage({ message });

        const responseText = result.text;
        res.json({ text: responseText });

    } catch (error) {
        console.error('Gemini API Error:', error);
        res.status(500).json({ error: 'Failed to generate content' });
    }
});

// Catch-all for React Router - logic to avoid 404 on refresh
// Express 5 requires a regex or named parameter for wildcards
app.get(/(.*)/, (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
