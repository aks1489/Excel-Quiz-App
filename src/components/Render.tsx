import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png'; // Adjust the path as necessary

// Import data from separate files
import { quizData, type Question, type AnswerOption } from './quizData';
import { translations, type TranslationTexts } from './translations';
import { studentListRaw, parseStudentList, type StudentInfo, type StudentDataMap } from './studentData.ts';

// Parse the student data once outside the component to avoid re-parsing on every render
const studentData: StudentDataMap = parseStudentList(studentListRaw);
const validStudentIds: string[] = Object.keys(studentData); // Array of just the valid IDs

const App: React.FC = () => {
    // New state to hold the randomized questions
    const [randomQuestions, setRandomQuestions] = useState<Question[]>([]);

    const [currentLanguage, setCurrentLanguage] = useState<'en' | 'bn'>('en');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string | undefined }>({});
    const [showResults, setShowResults] = useState<boolean>(false);
    const [score, setScore] = useState<number>(0);

    // States for start screen and ID validation
    const [showStartScreen, setShowStartScreen] = useState<boolean>(true);
    const [enteredId, setEnteredId] = useState<string>('');
    const [idError, setIdError] = useState<string>('');
    const [studentInfo, setStudentInfo] = useState<StudentInfo | null>(null); // To store { id, name } of logged-in student

    // New states for retake password screen
    const [showRetakePasswordScreen, setShowRetakePasswordScreen] = useState<boolean>(false);
    const [retakePassword, setRetakePassword] = useState<string>('');
    const [retakePasswordError, setRetakePasswordError] = useState<string>('');

    // This useEffect hook runs only once when the component mounts
    // It shuffles the quizData and selects the first 20 questions
    useEffect(() => {
        const shuffleArray = (array: any[]) => {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        };

        const randomizedSubset = shuffleArray([...quizData.questions]).slice(0, 20);
        setRandomQuestions(randomizedSubset);
    }, []);

    const lang: TranslationTexts = translations[currentLanguage];
    // Use the randomized questions for the current question
    const currentQuestion: Question | undefined = randomQuestions[currentQuestionIndex];

    // Function to handle ID input change
    const handleIdInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEnteredId(event.target.value);
        setIdError(''); // Clear error when user types
    };

    // Function to handle starting the test after ID input
    const handleStartTest = () => {
        const normalizedEnteredId: string = enteredId.trim().toUpperCase();
        if (validStudentIds.includes(normalizedEnteredId)) {
            setStudentInfo({ id: normalizedEnteredId, name: studentData[normalizedEnteredId] }); // Set student info
            setShowStartScreen(false); // Hide start screen, show quiz
        } else {
            setIdError(lang.invalidIdMessage); // Show error message
        }
    };

    // Function to handle answer selection
    const handleAnswerChange = (questionIndex: number, selectedValue: string) => {
        setSelectedAnswers(prevAnswers => ({
            ...prevAnswers,
            [questionIndex]: selectedValue
        }));
    };

    // Function for "Next Question" button
    const handleNextQuestion = () => {
        if (selectedAnswers[currentQuestionIndex] !== undefined) {
            setCurrentQuestionIndex(prevIndex => prevIndex + 1);
        } else {
            // Using a simple alert for immediate feedback, consider a custom modal for better UX
            alert(currentLanguage === 'en' ? "Please select an answer before proceeding." : "এগিয়ে যাওয়ার আগে একটি উত্তর নির্বাচন করুন।");
        }
    };

    // Function for "Submit Test" button (only on the last question)
    const handleFinalSubmit = () => {
        if (selectedAnswers[currentQuestionIndex] === undefined) {
            alert(currentLanguage === 'en' ? "Please select an answer for the last question." : "শেষ প্রশ্নের জন্য একটি উত্তর নির্বাচন করুন।");
            return;
        }

        let calculatedScore: number = 0;
        // Use the randomized questions for score calculation
        randomQuestions.forEach((q: Question, qIndex: number) => {
            const correctOption: AnswerOption | undefined = q.answerOptions.find(opt => opt.isCorrect);
            if (correctOption && selectedAnswers[qIndex] === correctOption.text) {
                calculatedScore++;
            }
        });
        setScore(calculatedScore);
        setShowResults(true);
    };

    // Function to initiate the reset process, shows password screen
    const handleInitiateReset = () => {
        setShowResults(false); // Hide results screen
        setShowRetakePasswordScreen(true); // Show the password entry screen
        setRetakePassword(''); // Clear any previously entered password
        setRetakePasswordError(''); // Clear any previous error message
    };

    // Function to handle password submission for retaking the test
    const handleRetakePasswordSubmit = () => {
        const correctPassword: string = "RGYC@2025"; // The specific password for retake
        if (retakePassword.trim() === correctPassword) {
            // If password is correct, perform the actual quiz reset
            setCurrentQuestionIndex(0);
            setSelectedAnswers({});
            setScore(0);
            setEnteredId(''); // Clear entered ID for new student
            setIdError('');
            setStudentInfo(null); // Clear student info
            setShowRetakePasswordScreen(false); // Hide password screen
            setShowStartScreen(true); // Go back to the student ID entry screen
            
            // Re-shuffle and select new questions for the new test session
            const shuffleArray = (array: any[]) => {
                for (let i = array.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [array[i], array[j]] = [array[j], array[i]];
                }
                return array;
            };
            const newRandomizedSubset = shuffleArray([...quizData.questions]).slice(0, 20);
            setRandomQuestions(newRandomizedSubset);
            
        } else {
            setRetakePasswordError(lang.incorrectPassword); // Show incorrect password error
        }
    };

    // Function to toggle language
    const handleLanguageToggle = () => {
        setCurrentLanguage(prevLang => (prevLang === 'en' ? 'bn' : 'en'));
        // Clear password states if language is toggled while on password screen
        if (showRetakePasswordScreen) {
            setRetakePassword('');
            setRetakePasswordError('');
        }
    };

    return (
        <div className="bg-gray-100 flex items-center justify-center min-h-screen p-4">
            <div className="max-w-3xl w-full bg-white rounded-xl shadow-lg p-8">
                <div className="flex justify-between items-center mb-4">
                    <div className="text-left">
                        {/* Remember to replace YOUR_PUBLIC_LOGO_URL_HERE with your actual public logo URL */}
                        <img
                            src={logo}
                            alt="Rajeev Gandhi Youth Computer Logo"
                            className="logo max-w-[150px] h-auto mx-auto mb-4"
                            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => { e.currentTarget.onerror = null; e.currentTarget.src="https://placehold.co/150x50/cccccc/333333?text=Logo+Unavailable"; }}
                        />
                        <p className="text-sm text-gray-600 font-semibold mt-2">{lang.trainingCenterName}</p>
                        {studentInfo && !showStartScreen && !showRetakePasswordScreen && (
                            <div className="mt-2 text-md text-gray-800 font-medium">
                                <p><strong>ID:</strong> {studentInfo.id}</p>
                                <p><strong>Name:</strong> {studentInfo.name}</p>
                            </div>
                        )}
                    </div>
                    <button
                        id="languageToggle"
                        onClick={handleLanguageToggle}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-full text-sm"
                    >
                        {currentLanguage === 'en' ? 'বাংলা' : 'English'}
                    </button>
                </div>

                <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8 rounded-lg p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                    {lang.quizTitle}
                </h1>

                {showStartScreen ? (
                    <div className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg shadow-inner border border-gray-200">
                        <p className="text-lg text-gray-700 mb-4 text-center">{lang.enterIdPrompt}</p>
                        <input
                            type="text"
                            value={enteredId}
                            onChange={handleIdInputChange}
                            placeholder={lang.idPlaceholder}
                            className="w-full max-w-sm p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
                        />
                        {idError && (
                            <p className="text-red-500 text-sm mt-2">{idError}</p>
                        )}
                        <button
                            onClick={handleStartTest}
                            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
                        >
                            {lang.startTestBtn}
                        </button>
                    </div>
                ) : showRetakePasswordScreen ? (
                    <div className="flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg shadow-inner border border-gray-200">
                        <p className="text-lg text-gray-700 mb-4 text-center">{lang.enterPasswordPrompt}</p>
                        <input
                            type="password"
                            value={retakePassword}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => { setRetakePassword(e.target.value); setRetakePasswordError(''); }}
                            placeholder={lang.passwordPlaceholder}
                            className="w-full max-w-sm p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
                        />
                        {retakePasswordError && (
                            <p className="text-red-500 text-sm mt-2">{retakePasswordError}</p>
                        )}
                        <button
                            onClick={handleRetakePasswordSubmit}
                            className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
                        >
                            {lang.submitPasswordBtn}
                        </button>
                    </div>
                ) : !showResults ? (
                    // Display current question
                    <form onSubmit={(e: React.FormEvent) => e.preventDefault()}> {/* Prevent default form submission on enter */}
                        {currentQuestion && (
                            <div className="question-card">
                                <p className="text-lg font-semibold mb-4 text-gray-700">
                                    {currentQuestionIndex + 1}. {currentLanguage === 'en' ? currentQuestion.question : currentQuestion.questionBn}
                                </p>
                                {currentQuestion.answerOptions.map((option: AnswerOption, oIndex: number) => (
                                    <div key={oIndex} className="answer-option">
                                        <input
                                            type="radio"
                                            id={`q${currentQuestionIndex}o${oIndex}`}
                                            name={`question${currentQuestionIndex}`}
                                            value={option.text}
                                            checked={selectedAnswers[currentQuestionIndex] === option.text}
                                            onChange={() => handleAnswerChange(currentQuestionIndex, option.text)}
                                            className="form-radio text-blue-600 h-5 w-5 cursor-pointer"
                                        />
                                        <label htmlFor={`q${currentQuestionIndex}o${oIndex}`} className="text-md text-gray-700 cursor-pointer">
                                            {currentLanguage === 'en' ? option.text : option.textBn}
                                        </label>
                                    </div>
                                ))}
                                {(currentLanguage === 'en' && currentQuestion.hint) && (
                                    <p className="hint-text mt-2">
                                        {lang.hint} {currentQuestion.hint}
                                    </p>
                                )}
                                {(currentLanguage === 'bn' && currentQuestion.hintBn) && (
                                    <p className="hint-text mt-2">
                                        {lang.hint} {currentQuestion.hintBn}
                                    </p>
                                )}
                            </div>
                        )}

                        <div className="text-center mt-8">
                            {currentQuestionIndex < randomQuestions.length - 1 ? (
                                <button
                                    type="button" // Use type="button" to prevent form submission
                                    onClick={handleNextQuestion}
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
                                    disabled={selectedAnswers[currentQuestionIndex] === undefined}
                                >
                                    {lang.nextQuestionBtn}
                                </button>
                            ) : (
                                <button
                                    type="button" // Use type="button" for consistency, call function directly
                                    onClick={handleFinalSubmit}
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300"
                                    disabled={selectedAnswers[currentQuestionIndex] === undefined}
                                >
                                    {lang.submitBtn}
                                </button>
                            )}
                        </div>
                    </form>
                ) : (
                    <div id="results" className="mt-10 p-6 bg-gray-50 rounded-lg shadow-inner border border-gray-200">
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">{lang.resultsTitle}</h2>
                        <p className="text-xl text-center mb-6">
                            {lang.scoreLabel} <span id="scoreDisplay" className="font-extrabold text-blue-700">{score} / {randomQuestions.length}</span>
                        </p>
                        <div id="resultsDetail">
                            {randomQuestions.map((q: Question, qIndex: number) => {
                                const selectedOptionText: string | undefined = selectedAnswers[qIndex];
                                const correctOption: AnswerOption | undefined = q.answerOptions.find((opt: AnswerOption) => opt.isCorrect);
                                const isCorrect: boolean = selectedOptionText === correctOption?.text;

                                const userAnswerDisplay: string = selectedOptionText ? (
                                    currentLanguage === 'en' ? selectedOptionText : (q.answerOptions.find((opt: AnswerOption) => opt.text === selectedOptionText)?.textBn || lang.notAnswered)
                                ) : lang.notAnswered;

                                return (
                                    <div key={qIndex} className="result-item">
                                        <p className="text-lg font-medium text-gray-800 mb-2">
                                            {qIndex + 1}. {currentLanguage === 'en' ? q.question : q.questionBn}
                                        </p>
                                        <p className={`text-md ${isCorrect ? 'text-green-600' : 'text-red-600'} font-semibold mb-1`}>
                                            {lang.yourAnswer} <strong>{userAnswerDisplay}</strong> {isCorrect ? '✓' : '✗'}
                                        </p>
                                        {!isCorrect && (
                                            <p className="text-md text-gray-600 mb-1">
                                                {lang.correctAnswer} <strong>{currentLanguage === 'en' ? correctOption?.text : correctOption?.textBn}</strong>
                                            </p>
                                        )}
                                        <p className="text-sm text-gray-500 italic mt-2">
                                            {lang.explanation} {currentLanguage === 'en' ? correctOption?.rationale : correctOption?.rationaleBn}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="text-center mt-8">
                            <button
                                onClick={handleInitiateReset}
                                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-300"
                            >
                                {lang.retakeBtn}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default App;