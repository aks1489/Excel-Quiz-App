// Define interfaces for type safety
export interface TranslationTexts {
    quizTitle: string;
    submitBtn: string;
    nextQuestionBtn: string;
    resultsTitle: string;
    scoreLabel: string;
    retakeBtn: string;
    notAnswered: string;
    yourAnswer: string;
    correctAnswer: string;
    explanation: string;
    hint: string;
    trainingCenterName: string;
    enterIdPrompt: string;
    idPlaceholder: string;
    startTestBtn: string;
    invalidIdMessage: string;
    enterPasswordPrompt: string;
    passwordPlaceholder: string;
    incorrectPassword: string;
    submitPasswordBtn: string;
}

export interface Translations {
    en: TranslationTexts;
    bn: TranslationTexts;
}

// UI translations in English and Bengali
export const translations: Translations = {
    en: {
        quizTitle: "Excel Skills Test",
        submitBtn: "Submit Test",
        nextQuestionBtn: "Next Question",
        resultsTitle: "Your Results",
        scoreLabel: "Score:",
        retakeBtn: "Retake Test",
        notAnswered: "Not answered",
        yourAnswer: "Your Answer:",
        correctAnswer: "Correct Answer:",
        explanation: "Explanation:",
        hint: "Hint:",
        trainingCenterName: "Rajeev Gandhi Youth Computer - Chowberia",
        enterIdPrompt: "Please enter your student ID to start the test.",
        idPlaceholder: "Your ID (e.g., NYSDB0140-00006)",
        startTestBtn: "Start Test",
        invalidIdMessage: "Invalid ID. Please check your ID and try again.",
        enterPasswordPrompt: "Enter password to retake the test:",
        passwordPlaceholder: "Password",
        incorrectPassword: "Incorrect password. Please try again.",
        submitPasswordBtn: "Submit Password"
    },
    bn: {
        quizTitle: "এক্সেল দক্ষতা পরীক্ষা",
        submitBtn: "পরীক্ষা জমা দিন",
        nextQuestionBtn: "পরবর্তী প্রশ্ন",
        resultsTitle: "আপনার ফলাফল",
        scoreLabel: "স্কোর:",
        retakeBtn: "আবার পরীক্ষা দিন",
        notAnswered: "উত্তর দেওয়া হয়নি",
        yourAnswer: "আপনার উত্তর:",
        correctAnswer: "সঠিক উত্তর:",
        explanation: "ব্যাখ্যা:",
        hint: "ইঙ্গিত:",
        trainingCenterName: "রাজীব গান্ধী যুব কম্পিউটার - চৌবেরিয়া",
        enterIdPrompt: "পরীক্ষা শুরু করতে আপনার ছাত্র আইডি লিখুন।",
        idPlaceholder: "আপনার আইডি (যেমন, NYSDB0140-00006)",
        startTestBtn: "পরীক্ষা শুরু করুন",
        invalidIdMessage: "অবৈধ আইডি। আপনার আইডি চেক করুন এবং আবার চেষ্টা করুন।",
        enterPasswordPrompt: "পরীক্ষা পুনরায় শুরু করতে পাসওয়ার্ড লিখুন:",
        passwordPlaceholder: "পাসওয়ার্ড",
        incorrectPassword: "ভুল পাসওয়ার্ড। অনুগ্রহ করে আবার চেষ্টা করুন।",
        submitPasswordBtn: "পাসওয়ার্ড জমা দিন"
    }
};
