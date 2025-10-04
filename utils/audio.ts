// Audio utility for quiz sound effects
export class QuizAudio {
  private static instance: QuizAudio;
  
  private constructor() {}
  
  static getInstance(): QuizAudio {
    if (!QuizAudio.instance) {
      QuizAudio.instance = new QuizAudio();
    }
    return QuizAudio.instance;
  }

  // Play correct answer sound
  playCorrectSound(): void {
    this.speakText("NICE!!!!", "en-US"); // English
  }

  // Play incorrect answer sound
  playIncorrectSound(): void {
    this.speakText("FUCKING Stupid!!", "en-US"); // English
  }

  // Generic text-to-speech function
  private speakText(text: string, lang: string = "en-US"): void {
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = lang;
      utterance.rate = 0.8;
      utterance.pitch = 1.1;
      utterance.volume = 0.7;
      
      // Use English voice
      const voices = speechSynthesis.getVoices();
      const englishVoice = voices.find(voice => voice.lang.includes('en-US') || voice.lang.includes('en'));
      
      if (englishVoice) {
        utterance.voice = englishVoice;
      }
      
      speechSynthesis.speak(utterance);
    } else {
      console.warn('Speech synthesis not supported in this browser');
      // Fallback: play a simple beep sound
      this.playBeepSound(text === "Correct!");
    }
  }

  // Fallback beep sound using Web Audio API
  private playBeepSound(isCorrect: boolean): void {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      if (isCorrect) {
        // Higher pitched, pleasant sound for correct
        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.frequency.setValueAtTime(1000, audioContext.currentTime + 0.1);
      } else {
        // Lower pitched, less pleasant sound for incorrect
        oscillator.frequency.setValueAtTime(300, audioContext.currentTime);
        oscillator.frequency.setValueAtTime(200, audioContext.currentTime + 0.1);
      }
      
      gainNode.gain.setValueAtTime(0, audioContext.currentTime);
      gainNode.gain.setValueAtTime(0.3, audioContext.currentTime + 0.01);
      gainNode.gain.setValueAtTime(0, audioContext.currentTime + 0.2);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.2);
    } catch (error) {
      console.warn('Audio playback not supported:', error);
    }
  }

  // Preload voices (call this when the app starts)
  preloadVoices(): Promise<void> {
    return new Promise((resolve) => {
      if ('speechSynthesis' in window) {
        const loadVoices = () => {
          const voices = speechSynthesis.getVoices();
          if (voices.length > 0) {
            resolve();
          } else {
            // Voices not loaded yet, wait a bit
            setTimeout(loadVoices, 100);
          }
        };
        
        speechSynthesis.onvoiceschanged = loadVoices;
        loadVoices();
      } else {
        resolve();
      }
    });
  }
}