import React, { useState, useEffect } from 'react';
import { quizData, type Question } from './quizData';
import { parseStudentList, studentListRaw } from './studentData';
import { translations } from './translations';

const Render: React.FC = () => {
  // State management
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [randomQuestions, setRandomQuestions] = useState<Question[]>([]);
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState<'en' | 'bn'>('en');
  const [showStartScreen, setShowStartScreen] = useState(true);
  const [studentId, setStudentId] = useState('');
  const [studentInfo, setStudentInfo] = useState<{id: string, name: string} | null>(null);
  const [idError, setIdError] = useState('');
  const [showRetakePasswordScreen, setShowRetakePasswordScreen] = useState(false);
  const [retakePassword, setRetakePassword] = useState('');
  const [retakePasswordError, setRetakePasswordError] = useState('');
  
  // Timer states
  const [timeRemaining, setTimeRemaining] = useState(40 * 60); // 40 minutes in seconds
  const [timerActive, setTimerActive] = useState(false);

  const lang = translations[currentLanguage];
  const studentData = parseStudentList(studentListRaw);

  // Generate random questions on component mount
  useEffect(() => {
    generateRandomQuestions();
  }, []);

  // Timer effect
  useEffect(() => {
    let interval: number | null = null;
    
    if (timerActive && timeRemaining > 0) {
      interval = setInterval(() => {
        setTimeRemaining(time => {
          if (time <= 1) {
            // Time's up - auto submit
            handleSubmitQuiz();
            setTimerActive(false);
            return 0;
          }
          return time - 1;
        });
      }, 1000);
    } else if (timeRemaining === 0) {
      setTimerActive(false);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerActive, timeRemaining]);

  // Format time for display
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const generateRandomQuestions = () => {
    const shuffled = [...quizData.questions].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 20);
    setRandomQuestions(selected);
    setUserAnswers(new Array(20).fill(undefined));
  };

  const handleStartTest = () => {
    const normalizedId = studentId.toUpperCase();
    if (studentData[normalizedId]) {
      setStudentInfo({
        id: normalizedId,
        name: studentData[normalizedId]
      });
      setShowStartScreen(false);
      setShowQuiz(true);
      setIdError('');
      // Start the timer when test begins
      setTimerActive(true);
      setTimeRemaining(40 * 60); // Reset to 40 minutes
    } else {
      setIdError(lang.invalidIdMessage);
    }
  };

  const handleAnswerSelect = (optionIndex: number) => {
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = optionIndex;
    setUserAnswers(newAnswers);
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < randomQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleSubmitQuiz = () => {
    setShowResults(true);
    setShowQuiz(false);
    setTimerActive(false); // Stop the timer when test is submitted
  };

  const handleRetakeTest = () => {
    setShowRetakePasswordScreen(true);
  };

  const handleRetakePassword = () => {
    if (retakePassword === 'retake2025') {
      setCurrentQuestionIndex(0);
      setUserAnswers(new Array(20).fill(undefined));
      setShowResults(false);
      setShowRetakePasswordScreen(false);
      setRetakePassword('');
      setRetakePasswordError('');
      generateRandomQuestions();
      setShowQuiz(true);
      // Restart the timer for retake
      setTimerActive(true);
      setTimeRemaining(40 * 60);
    } else {
      setRetakePasswordError(lang.incorrectPassword);
    }
  };

  const calculateScore = () => {
    let score = 0;
    randomQuestions.forEach((question, index) => {
      const userAnswer = userAnswers[index];
      if (userAnswer !== undefined && question.answerOptions[userAnswer].isCorrect) {
        score++;
      }
    });
    return score;
  };

  const score = calculateScore();

  const toggleLanguage = () => {
    setCurrentLanguage(prev => prev === 'en' ? 'bn' : 'en');
  };

  // Print functionality
  const handlePrint = () => {
    // Create a new window for printing
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const currentDate = new Date().toLocaleDateString();
    const currentTime = new Date().toLocaleTimeString();

    // Generate print content
    const printContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Excel Skills Test Results - ${studentInfo?.name}</title>
          <style>
            @media print {
              @page {
                margin: 1in;
                size: A4;
              }
              body {
                -webkit-print-color-adjust: exact;
                color-adjust: exact;
              }
            }
            
            body {
              font-family: 'Arial', sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 210mm;
              margin: 0 auto;
              padding: 20px;
              background: white;
            }
            
            .header {
              text-align: center;
              border-bottom: 3px solid #2563eb;
              padding-bottom: 20px;
              margin-bottom: 30px;
            }
            
            .logo {
              width: 60px;
              height: 60px;
              background: linear-gradient(135deg, #2563eb, #1d4ed8);
              border-radius: 12px;
              margin: 0 auto 15px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
              font-size: 24px;
              font-weight: bold;
            }
            
            .title {
              font-size: 28px;
              font-weight: bold;
              color: #1f2937;
              margin-bottom: 5px;
            }
            
            .subtitle {
              font-size: 16px;
              color: #6b7280;
              margin-bottom: 20px;
            }
            
            .student-info {
              background: #f8fafc;
              border: 2px solid #e2e8f0;
              border-radius: 12px;
              padding: 20px;
              margin-bottom: 30px;
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
            
            .student-details h3 {
              margin: 0 0 10px 0;
              color: #1f2937;
              font-size: 18px;
            }
            
            .student-details p {
              margin: 5px 0;
              color: #4b5563;
            }
            
            .test-info {
              text-align: right;
              color: #6b7280;
              font-size: 14px;
            }
            
            .score-summary {
              background: ${score >= 14 ? '#dcfce7' : score >= 10 ? '#fef3c7' : '#fee2e2'};
              border: 2px solid ${score >= 14 ? '#16a34a' : score >= 10 ? '#d97706' : '#dc2626'};
              border-radius: 12px;
              padding: 25px;
              text-align: center;
              margin-bottom: 30px;
            }
            
            .score-number {
              font-size: 48px;
              font-weight: bold;
              color: ${score >= 14 ? '#16a34a' : score >= 10 ? '#d97706' : '#dc2626'};
              margin-bottom: 10px;
            }
            
            .score-label {
              font-size: 18px;
              color: #374151;
              margin-bottom: 15px;
            }
            
            .score-badge {
              display: inline-block;
              padding: 8px 16px;
              border-radius: 20px;
              font-weight: bold;
              color: ${score >= 14 ? '#16a34a' : score >= 10 ? '#d97706' : '#dc2626'};
              background: ${score >= 14 ? '#dcfce7' : score >= 10 ? '#fef3c7' : '#fee2e2'};
              border: 1px solid ${score >= 14 ? '#16a34a' : score >= 10 ? '#d97706' : '#dc2626'};
            }
            
            .results-section {
              margin-top: 30px;
            }
            
            .section-title {
              font-size: 20px;
              font-weight: bold;
              color: #1f2937;
              margin-bottom: 20px;
              padding-bottom: 10px;
              border-bottom: 2px solid #e5e7eb;
            }
            
            .question-item {
              margin-bottom: 25px;
              padding: 20px;
              border: 2px solid #e5e7eb;
              border-radius: 8px;
              break-inside: avoid;
            }
            
            .question-item.correct {
              border-color: #16a34a;
              background: #f0fdf4;
            }
            
            .question-item.incorrect {
              border-color: #dc2626;
              background: #fef2f2;
            }
            
            .question-header {
              display: flex;
              align-items: flex-start;
              margin-bottom: 15px;
            }
            
            .question-number {
              width: 30px;
              height: 30px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-weight: bold;
              font-size: 14px;
              margin-right: 15px;
              flex-shrink: 0;
            }
            
            .question-number.correct {
              background: #16a34a;
              color: white;
            }
            
            .question-number.incorrect {
              background: #dc2626;
              color: white;
            }
            
            .question-text {
              font-weight: bold;
              color: #1f2937;
              font-size: 16px;
              line-height: 1.5;
            }
            
            .answer-section {
              margin-left: 45px;
            }
            
            .answer-row {
              margin-bottom: 10px;
              display: flex;
              flex-wrap: wrap;
              align-items: center;
            }
            
            .answer-label {
              font-weight: 600;
              color: #4b5563;
              margin-right: 8px;
              min-width: 120px;
            }
            
            .answer-value {
              font-weight: bold;
              flex: 1;
            }
            
            .answer-value.correct {
              color: #16a34a;
            }
            
            .answer-value.incorrect {
              color: #dc2626;
            }
            
            .explanation {
              margin-top: 15px;
              padding: 15px;
              background: #eff6ff;
              border: 1px solid #bfdbfe;
              border-radius: 6px;
            }
            
            .explanation-label {
              font-weight: bold;
              color: #1e40af;
              margin-bottom: 5px;
            }
            
            .explanation-text {
              color: #1e3a8a;
              line-height: 1.5;
            }
            
            .footer {
              margin-top: 40px;
              padding-top: 20px;
              border-top: 2px solid #e5e7eb;
              text-align: center;
              color: #6b7280;
              font-size: 14px;
            }
            
            @media print {
              .no-print {
                display: none !important;
              }
              
              body {
                font-size: 12px;
              }
              
              .question-item {
                page-break-inside: avoid;
                margin-bottom: 15px;
                padding: 15px;
              }
              
              .score-number {
                font-size: 36px;
              }
            }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="logo">📊</div>
            <div class="title">${lang.quizTitle}</div>
            <div class="subtitle">${lang.trainingCenterName}</div>
          </div>
          
          <div class="student-info">
            <div class="student-details">
              <h3>Student Information</h3>
              <p><strong>Name:</strong> ${studentInfo?.name || 'N/A'}</p>
              <p><strong>ID:</strong> ${studentInfo?.id || 'N/A'}</p>
            </div>
            <div class="test-info">
              <p><strong>Test Date:</strong> ${currentDate}</p>
              <p><strong>Test Time:</strong> ${currentTime}</p>
              <p><strong>Total Questions:</strong> ${randomQuestions.length}</p>
              <p><strong>Time Limit:</strong> 40 minutes</p>
            </div>
          </div>
          
          <div class="score-summary">
            <div class="score-number">${score}/${randomQuestions.length}</div>
            <div class="score-label">${lang.scoreLabel} ${score} out of ${randomQuestions.length}</div>
            <div class="score-badge">
              ${score >= 14 ? '🎉 Excellent!' : score >= 10 ? '👍 Good!' : '📚 Keep Learning!'}
            </div>
          </div>
          
          <div class="results-section">
            <div class="section-title">Detailed Results</div>
            ${randomQuestions.map((question, qIndex) => {
              const userAnswer = userAnswers[qIndex];
              const correctOption = question.answerOptions.find(opt => opt.isCorrect);
              const userAnswerOption = userAnswer !== undefined ? question.answerOptions[userAnswer] : null;
              const isCorrect = userAnswerOption?.isCorrect || false;
              const userAnswerDisplay = userAnswer !== undefined ? 
                `${String.fromCharCode(65 + userAnswer)}. ${currentLanguage === 'en' ? userAnswerOption?.text : userAnswerOption?.textBn}` : 
                'Not answered';

              return `
                <div class="question-item ${isCorrect ? 'correct' : 'incorrect'}">
                  <div class="question-header">
                    <div class="question-number ${isCorrect ? 'correct' : 'incorrect'}">
                      ${qIndex + 1}
                    </div>
                    <div class="question-text">
                      ${currentLanguage === 'en' ? question.question : question.questionBn}
                    </div>
                  </div>
                  
                  <div class="answer-section">
                    <div class="answer-row">
                      <span class="answer-label">${lang.yourAnswer}</span>
                      <span class="answer-value ${isCorrect ? 'correct' : 'incorrect'}">
                        ${userAnswerDisplay} ${isCorrect ? '✅' : '❌'}
                      </span>
                    </div>
                    
                    <div class="answer-row">
                      <span class="answer-label">${lang.correctAnswer}</span>
                      <span class="answer-value correct">
                        ${currentLanguage === 'en' ? correctOption?.text : correctOption?.textBn}
                      </span>
                    </div>
                    
                    <div class="explanation">
                      <div class="explanation-label">💡 ${lang.explanation}</div>
                      <div class="explanation-text">
                        ${currentLanguage === 'en' ? correctOption?.rationale : correctOption?.rationaleBn}
                      </div>
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
          
          <div class="footer">
            <p>This report was generated automatically by the Excel Skills Test system.</p>
            <p>For any questions, please contact your instructor.</p>
          </div>
        </body>
      </html>
    `;

    // Write content to the new window
    printWindow.document.write(printContent);
    printWindow.document.close();
    
    // Wait for content to load, then print
    printWindow.onload = () => {
      setTimeout(() => {
        printWindow.print();
        printWindow.close();
      }, 500);
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-gray-200 py-4 px-2 sm:p-4 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Navigation - Fixed */}
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 mb-4 sm:mb-6">
          {/* Logo and Title Section */}
          <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              {/* Logo Section */}
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md">
                  <svg className="w-5 h-5 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 leading-tight">{lang.quizTitle}</h1>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">{lang.trainingCenterName}</p>
                </div>
              </div>

              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="bg-gray-50 hover:bg-gray-100 border border-gray-300 text-gray-700 px-4 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl font-medium transition-all duration-300 hover:shadow-md text-sm sm:text-base w-full sm:w-auto"
              >
                {currentLanguage === 'en' ? '🇧🇩 বাংলা' : '🇺🇸 English'}
              </button>
            </div>
          </div>

          {/* Student Info and Timer Section */}
          {studentInfo && !showStartScreen && !showRetakePasswordScreen && (
            <div className="px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                {/* Student Info */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 p-3 sm:p-4 rounded-lg sm:rounded-xl inline-flex items-center space-x-3 sm:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm text-gray-600 truncate"><strong>Student ID:</strong> {studentInfo.id}</p>
                    <p className="text-sm sm:text-base font-semibold text-gray-800 truncate"><strong>Name:</strong> {studentInfo.name}</p>
                  </div>
                </div>

                {/* Timer */}
                {showQuiz && (
                  <div className={`bg-gradient-to-r ${timeRemaining <= 300 ? 'from-red-50 to-red-100 border-red-200' : 'from-green-50 to-green-100 border-green-200'} border p-3 sm:p-4 rounded-lg sm:rounded-xl flex items-center space-x-3`}>
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 ${timeRemaining <= 300 ? 'bg-red-500' : 'bg-green-500'} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-gray-600">Time Remaining</p>
                      <p className={`text-lg sm:text-xl font-bold ${timeRemaining <= 300 ? 'text-red-600' : 'text-green-600'}`}>
                        {formatTime(timeRemaining)}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Content Area - Scrollable */}
        <div className="min-h-[calc(100vh-200px)]">
          {/* Start Screen */}
          {showStartScreen && (
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 p-6 sm:p-8 lg:p-10 text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800">{lang.enterIdPrompt}</h3>
              
              {/* Test Info */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 max-w-md mx-auto">
                <div className="flex items-center justify-center mb-2">
                  <svg className="w-5 h-5 text-amber-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-semibold text-amber-800">Test Information</span>
                </div>
                <p className="text-sm text-amber-700">
                  • Duration: <strong>40 minutes</strong><br/>
                  • Questions: <strong>20 questions</strong><br/>
                  • Auto-submit when time expires
                </p>
              </div>

              <div className="max-w-md mx-auto w-full">
                <input
                  type="text"
                  value={studentId}
                  onChange={(e) => {
                    setStudentId(e.target.value);
                    setIdError('');
                  }}
                  placeholder={lang.idPlaceholder}
                  className="w-full p-3 sm:p-4 border-2 border-gray-300 rounded-lg sm:rounded-xl shadow-sm focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 text-gray-700 text-center mb-4 text-base sm:text-lg"
                />
                {idError && (
                  <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-lg sm:rounded-xl mb-4 text-sm sm:text-base">
                    {idError}
                  </div>
                )}
                <button
                  onClick={handleStartTest}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02]"
                >
                  🚀 {lang.startTestBtn}
                </button>
              </div>
            </div>
          )}

          {/* Retake Password Screen */}
          {showRetakePasswordScreen && (
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 p-6 sm:p-8 lg:p-10 text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-gray-800">{lang.enterPasswordPrompt}</h3>
              <div className="max-w-md mx-auto w-full">
                <input
                  type="password"
                  value={retakePassword}
                  onChange={(e) => {
                    setRetakePassword(e.target.value);
                    setRetakePasswordError('');
                  }}
                  placeholder={lang.passwordPlaceholder}
                  className="w-full p-3 sm:p-4 border-2 border-gray-300 rounded-lg sm:rounded-xl shadow-sm focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100 text-gray-700 text-center mb-4 text-base sm:text-lg"
                />
                {retakePasswordError && (
                  <div className="bg-red-50 border border-red-200 text-red-700 p-3 rounded-lg sm:rounded-xl mb-4 text-sm sm:text-base">
                    {retakePasswordError}
                  </div>
                )}
                <button
                  onClick={handleRetakePassword}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-base sm:text-lg transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02]"
                >
                  🔓 {lang.submitPasswordBtn}
                </button>
              </div>
            </div>
          )}

          {/* Quiz Interface */}
          {!showResults && showQuiz && randomQuestions.length > 0 && (
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
              {/* Progress Section */}
              <div className="p-4 sm:p-6 lg:p-8 border-b border-gray-200">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 gap-2">
                  <span className="text-gray-600 font-medium text-sm sm:text-base">Progress</span>
                  <span className="text-gray-800 font-bold text-base sm:text-lg">
                    {currentQuestionIndex + 1} / {randomQuestions.length}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3 overflow-hidden">
                  <div 
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 sm:h-3 rounded-full transition-all duration-500 ease-out" 
                    style={{ width: `${((currentQuestionIndex + 1) / randomQuestions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Scrollable Content Area */}
              <div className="max-h-[calc(100vh-300px)] overflow-y-auto">
                {/* Question Section */}
                <div className="p-4 sm:p-6 lg:p-8">
                  <div className="bg-gray-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-gray-200">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-6 sm:mb-8 text-gray-800 leading-relaxed">
                      <span className="text-blue-600">
                        Q{currentQuestionIndex + 1}.
                      </span>{' '}
                      <span className="break-words">
                        {currentLanguage === 'en' ? 
                          randomQuestions[currentQuestionIndex].question : 
                          randomQuestions[currentQuestionIndex].questionBn}
                      </span>
                    </h3>

                    {/* Hint */}
                    {randomQuestions[currentQuestionIndex].hint && (
                      <div className="mb-6 sm:mb-8 p-4 sm:p-6 bg-amber-50 border border-amber-200 rounded-lg sm:rounded-xl">
                        <div className="flex items-start space-x-3">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 bg-amber-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                            <svg className="w-3 h-3 sm:w-4 sm:h-4 text-amber-900" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div className="min-w-0">
                            <p className="font-semibold text-amber-800 mb-1 text-sm sm:text-base">💡 {lang.hint}</p>
                            <p className="text-amber-700 text-sm sm:text-base break-words">
                              {currentLanguage === 'en' ? 
                                randomQuestions[currentQuestionIndex].hint : 
                                randomQuestions[currentQuestionIndex].hintBn}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Answer Options */}
                    <div className="space-y-3 sm:space-y-4">
                      {randomQuestions[currentQuestionIndex].answerOptions.map((option, index) => (
                        <button
                          key={index}
                          onClick={() => handleAnswerSelect(index)}
                          className={`w-full p-4 sm:p-6 text-left rounded-lg sm:rounded-xl border-2 transition-all duration-300 transform hover:scale-[1.02] ${
                            userAnswers[currentQuestionIndex] === index
                              ? 'border-blue-500 bg-blue-50 text-blue-800 shadow-md'
                              : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700'
                          }`}
                        >
                          <div className="flex items-start space-x-3 sm:space-x-4">
                            <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm flex-shrink-0 mt-0.5 ${
                              userAnswers[currentQuestionIndex] === index
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-200 text-gray-600'
                            }`}>
                              {String.fromCharCode(65 + index)}
                            </div>
                            <span className="text-sm sm:text-base lg:text-lg break-words leading-relaxed">
                              {currentLanguage === 'en' ? option.text : option.textBn}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons - Fixed at bottom */}
              <div className="p-4 sm:p-6 lg:p-8 border-t border-gray-200 bg-white">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <button
                    onClick={handlePreviousQuestion}
                    disabled={currentQuestionIndex === 0}
                    className={`w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold transition-all duration-300 text-sm sm:text-base ${
                      currentQuestionIndex === 0
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-600 hover:bg-gray-700 text-white hover:shadow-md transform hover:scale-[1.02]'
                    }`}
                  >
                    ← Previous
                  </button>

                  {currentQuestionIndex < randomQuestions.length - 1 ? (
                    <button
                      onClick={handleNextQuestion}
                      disabled={userAnswers[currentQuestionIndex] === undefined}
                      className={`w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold transition-all duration-300 text-sm sm:text-base ${
                        userAnswers[currentQuestionIndex] === undefined
                          ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                          : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white hover:shadow-lg transform hover:scale-[1.02]'
                      }`}
                    >
                      Next →
                    </button>
                  ) : (
                    <button
                      onClick={handleSubmitQuiz}
                      disabled={userAnswers[currentQuestionIndex] === undefined}
                      className={`w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold transition-all duration-300 text-sm sm:text-base ${
                        userAnswers[currentQuestionIndex] === undefined
                          ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                          : 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white hover:shadow-lg transform hover:scale-[1.02]'
                      }`}
                    >
                      🎯 {lang.submitBtn}
                    </button>
                  )}
                </div>

                {/* Time Warning for last 5 minutes */}
                {timeRemaining <= 300 && timeRemaining > 0 && (
                  <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-center">
                    <p className="text-red-700 font-semibold">
                      ⚠️ Warning: Only {Math.floor(timeRemaining / 60)} minutes {timeRemaining % 60} seconds remaining!
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Results Screen */}
          {showResults && (
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg border border-gray-200">
              {/* Results Header - Fixed */}
              <div className="text-center p-6 sm:p-8 lg:p-10 border-b border-gray-200">
                <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-green-500 to-green-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">{lang.resultsTitle}</h2>
                <div className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6">
                  <span className={`${score >= 14 ? 'text-green-600' : score >= 10 ? 'text-amber-500' : 'text-red-500'}`}>
                    {score}
                  </span>
                  <span className="text-gray-400 text-2xl sm:text-3xl lg:text-5xl">/{randomQuestions.length}</span>
                </div>
                <div className={`inline-block px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base lg:text-lg border-2 ${
                  score >= 14 ? 'bg-green-50 text-green-700 border-green-200' :
                  score >= 10 ? 'bg-amber-50 text-amber-700 border-amber-200' :
                  'bg-red-50 text-red-700 border-red-200'
                }`}>
                  {score >= 14 ? '🎉 Excellent!' : score >= 10 ? '👍 Good!' : '📚 Keep Learning!'}
                </div>
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-6 sm:mb-8 mt-4">
                  {lang.scoreLabel} {score} / {randomQuestions.length}
                </p>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button
                    onClick={handleRetakeTest}
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base lg:text-lg transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02]"
                  >
                    🔄 {lang.retakeBtn}
                  </button>
                  
                  <button
                    onClick={handlePrint}
                    className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base lg:text-lg transition-all duration-300 hover:shadow-lg transform hover:scale-[1.02] flex items-center gap-2"
                  >
                    🖨️ Print Results
                  </button>
                </div>
              </div>

              {/* Detailed Results - Scrollable */}
              <div className="max-h-[calc(100vh-400px)] overflow-y-auto p-4 sm:p-6 lg:p-8 custom-scrollbar">
                <div className="space-y-4 sm:space-y-6">
                  {randomQuestions.map((question, qIndex) => {
                    const userAnswer = userAnswers[qIndex];
                    const correctOption = question.answerOptions.find(opt => opt.isCorrect);
                    const userAnswerOption = userAnswer !== undefined ? question.answerOptions[userAnswer] : null;
                    const isCorrect = userAnswerOption?.isCorrect || false;
                    const userAnswerDisplay = userAnswer !== undefined ? 
                      `${String.fromCharCode(65 + userAnswer)}. ${currentLanguage === 'en' ? userAnswerOption?.text : userAnswerOption?.textBn}` : 
                      lang.notAnswered;

                    return (
                      <div key={qIndex} className={`p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 ${
                        isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'
                      }`}>
                        <h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4 text-gray-800 flex items-start">
                          <span className={`inline-block w-6 h-6 sm:w-8 sm:h-8 rounded-full text-center text-xs sm:text-sm font-bold mr-3 flex-shrink-0 leading-6 sm:leading-8 ${
                            isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                          }`}>
                            {qIndex + 1}
                          </span>
                          <span className="break-words">
                            {currentLanguage === 'en' ? question.question : question.questionBn}
                          </span>
                        </h3>
                        
                        <div className="space-y-3 sm:space-y-4 ml-9 sm:ml-11">
                          <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
                            <span className="font-semibold text-gray-700 text-sm sm:text-base">{lang.yourAnswer}</span>
                            <span className={`font-bold text-sm sm:text-base break-words ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                              {userAnswerDisplay} {isCorrect ? '✅' : '❌'}
                            </span>
                          </div>
                          
                          <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
                            <span className="font-semibold text-gray-700 text-sm sm:text-base">{lang.correctAnswer}</span>
                            <span className="font-bold text-green-600 text-sm sm:text-base break-words">
                              {currentLanguage === 'en' ? correctOption?.text : correctOption?.textBn}
                            </span>
                          </div>
                          
                          <div className="p-3 sm:p-4 bg-blue-50 rounded-lg sm:rounded-xl border border-blue-200">
                            <span className="font-semibold text-blue-800 text-sm sm:text-base">💡 {lang.explanation}</span>
                            <p className="text-blue-700 mt-1 sm:mt-2 text-sm sm:text-base break-words leading-relaxed">
                              {currentLanguage === 'en' ? correctOption?.rationale : correctOption?.rationaleBn}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
        
        /* Mobile scrollbar styling */
        @media (max-width: 640px) {
          .custom-scrollbar::-webkit-scrollbar {
            width: 4px;
          }
        }
      `}</style>
    </div>
  );
};

export default Render;
