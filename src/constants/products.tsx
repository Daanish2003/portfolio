import home from "../../public/images/home.png"
import video from "../../public/images/video.png"

export const products = [
  {
    href: "https://roro-ai.com",
    title: "Roro AI",
    description:
      "Roro AI is a real-time voice agent that helps users improve spoken English through personalized, interactive conversations.",
    thumbnail: home,
    images: [video, home],
    stack: ["Nextjs", "Tailwindcss", "expressjs", "nodejs", "mediasoup", "prisma", "langgraph", "langchain", "webrtc"],
    slug: "roro-ai",
    content: (
      <div>
        <p>
        Roro AI is a real-time AI voice agent that helps users practice and improve their English communication skills by engaging in natural, spoken conversations with an intelligent assistant. Whether you&apos;re a student, fresher, or working professional, Roro AI provides a personalized and interactive way to build fluency, confidence, and clarity in spoken English.
        </p>
        <ul>🚀 Powered by Cutting-Edge Tech Roro AI combines a powerful stack of technologies to deliver seamless voice interactions:</ul>
        <ul>🎧 MediaSoup – Real-time, low-latency audio communication</ul>
        <ul>🧠 Gemini 2.0 Flash-Lite – Fast and context-aware large language model for generating smart, engaging responses</ul>
        <ul>🗣️ Deepgram – High-performance speech-to-text (STT) and text-to-speech (TTS) engine for natural conversation flow</ul>
        <ul>🎙️ Silero VAD – Lightweight and efficient voice activity detection for accurate speech segmentation and cleaner interactions</ul>
        <p>Roro AI listens intelligently, responds instantly, and adapts to your communication level — helping you improve through active speaking, not passive learning.</p>
      </div>
    ),
  },
];
