// Define interfaces for type safety
export interface AnswerOption {
    text: string;
    textBn: string;
    rationale: string;
    rationaleBn: string;
    isCorrect: boolean;
}

export interface Question {
    question: string;
    questionBn: string;
    answerOptions: AnswerOption[];
    hint?: string; // Optional property
    hintBn?: string; // Optional property
}

export interface QuizData {
    questions: Question[];
}

// Quiz data with both English and Bengali translations (60 questions)
export const quizData: QuizData = {
    "questions": [
        // Week 1: Introduction & Basics
        {
            "question": "What is the primary function of the Ribbon in Excel?",
            "questionBn": "এক্সেলে রিবনের প্রধান কাজ কী?",
            "answerOptions": [
                { "text": "To display the worksheet content.", "textBn": "ওয়ার্কশীটের বিষয়বস্তু প্রদর্শন করা।", "rationale": "The worksheet itself displays the content, not the Ribbon.", "rationaleBn": "ওয়ার্কশীট নিজেই বিষয়বস্তু প্রদর্শন করে, রিবন নয়।", "isCorrect": false },
                { "text": "To organize commands into logical groups called Tabs.", "textBn": "কমান্ডগুলিকে ট্যাব নামক লজিক্যাল গ্রুপে সংগঠিত করা।", "rationale": "The Ribbon is the primary interface for grouping and displaying all commands and features in Excel.", "rationaleBn": "রিবন হলো এক্সেলে সমস্ত কমান্ড এবং বৈশিষ্ট্যগুলিকে গ্রুপ এবং প্রদর্শন করার প্রধান ইন্টারফেস।", "isCorrect": true },
                { "text": "To provide a quick way to save the workbook.", "textBn": "ওয়ার্কবুকটি দ্রুত সংরক্ষণ করার একটি উপায় সরবরাহ করা।", "rationale": "The Quick Access Toolbar is better suited for this purpose, though a save button is on the Ribbon.", "rationaleBn": "কুইক অ্যাক্সেস টুলবার এই উদ্দেশ্যে আরও উপযুক্ত, যদিও একটি সংরক্ষণ বোতাম রিবনে থাকে।", "isCorrect": false },
                { "text": "To show the active cell's address.", "textBn": "সক্রিয় সেলের ঠিকানা দেখানো।", "rationale": "The Name Box displays the active cell's address.", "rationaleBn": "নেম বক্স সক্রিয় সেলের ঠিকানা প্রদর্শন করে।", "isCorrect": false }
            ],
            "hint": "Think about the structure at the top of the Excel window.",
            "hintBn": "এক্সেল উইন্ডোর উপরের কাঠামোটি নিয়ে ভাবুন।"
        },
        {
            "question": "The intersection of a row and a column is called a:",
            "questionBn": "একটি সারি এবং একটি কলামের ছেদকে কী বলা হয়?",
            "answerOptions": [
                { "text": "Worksheet", "textBn": "ওয়ার্কশীট", "rationale": "A worksheet is a grid of cells.", "rationaleBn": "একটি ওয়ার্কশীট হলো সেলগুলির একটি গ্রিড।", "isCorrect": false },
                { "text": "Workbook", "textBn": "ওয়ার্কবুক", "rationale": "A workbook is a collection of worksheets.", "rationaleBn": "একটি ওয়ার্কবুক হলো ওয়ার্কশীটগুলির একটি সংগ্রহ।", "isCorrect": false },
                { "text": "Cell", "textBn": "সেল", "rationale": "A cell is the basic unit of a worksheet, formed by the intersection of a row and a column.", "rationaleBn": "একটি সেল হলো একটি ওয়ার্কশীটের মৌলিক একক, যা একটি সারি এবং একটি কলামের ছেদ দ্বারা গঠিত।", "isCorrect": true },
                { "text": "Range", "textBn": "রেঞ্জ", "rationale": "A range is a group of two or more cells.", "rationaleBn": "একটি রেঞ্জ হলো দুই বা ততোধিক সেলের একটি গ্রুপ।", "isCorrect": false }
            ]
        },
        {
            "question": "What is the shortcut to enter the current date into a cell?",
            "questionBn": "একটি সেলে বর্তমান তারিখ প্রবেশ করানোর শর্টকাট কী?",
            "answerOptions": [
                { "text": "Ctrl + Shift + ;", "textBn": "Ctrl + Shift + ;", "rationale": "This shortcut enters the current time.", "rationaleBn": "এই শর্টকাটটি বর্তমান সময় প্রবেশ করায়।", "isCorrect": false },
                { "text": "Ctrl + ;", "textBn": "Ctrl + ;", "rationale": "This shortcut inserts the current date into the active cell.", "rationaleBn": "এই শর্টকাটটি সক্রিয় সেলে বর্তমান তারিখ সন্নিবেশ করে।", "isCorrect": true },
                { "text": "Ctrl + D", "textBn": "Ctrl + D", "rationale": "Ctrl + D fills down from the cell above.", "rationaleBn": "Ctrl + D উপরের সেল থেকে নিচে পূরণ করে।", "isCorrect": false },
                { "text": "Ctrl + T", "textBn": "Ctrl + T", "rationale": "Ctrl + T converts a range into an Excel Table.", "rationaleBn": "Ctrl + T একটি পরিসরকে একটি এক্সেল টেবিলে রূপান্তরিত করে।", "isCorrect": false }
            ]
        },
        {
            "question": "To add a symbol like '€' or '¥' to a number, which formatting category should you use?",
            "questionBn": "একটি সংখ্যায় '€' বা '¥' এর মতো একটি প্রতীক যোগ করতে, আপনার কোন ফরম্যাটিং বিভাগ ব্যবহার করা উচিত?",
            "answerOptions": [
                { "text": "General", "textBn": "সাধারণ", "rationale": "General format has no specific number formatting.", "rationaleBn": "সাধারণ ফরম্যাটে কোনো নির্দিষ্ট সংখ্যা ফরম্যাটিং নেই।", "isCorrect": false },
                { "text": "Text", "textBn": "টেক্সট", "rationale": "Text format treats numbers as text and prevents calculations.", "rationaleBn": "টেক্সট ফরম্যাট সংখ্যাগুলিকে টেক্সট হিসাবে গণ্য করে এবং গণনা প্রতিরোধ করে।", "isCorrect": false },
                { "text": "Currency", "textBn": "মুদ্রা", "rationale": "The Currency format is designed to display monetary values, which includes a currency symbol and specific decimal places.", "rationaleBn": "মুদ্রা ফরম্যাটটি আর্থিক মান প্রদর্শন করার জন্য ডিজাইন করা হয়েছে, যার মধ্যে একটি মুদ্রা প্রতীক এবং নির্দিষ্ট দশমিক স্থান অন্তর্ভুক্ত।", "isCorrect": true },
                { "text": "Date", "textBn": "তারিখ", "rationale": "Date format is for displaying dates and times.", "rationaleBn": "তারিখ ফরম্যাট তারিখ এবং সময় প্রদর্শনের জন্য।", "isCorrect": false }
            ]
        },
        {
            "question": "Which of these is the default file extension for an Excel workbook?",
            "questionBn": "এইগুলির মধ্যে কোনটি একটি এক্সেল ওয়ার্কবুকের জন্য ডিফল্ট ফাইল এক্সটেনশন?",
            "answerOptions": [
                { "text": ".CSV", "textBn": ".CSV", "rationale": "CSV is a text-based format for storing tabular data, not a native Excel format.", "rationaleBn": "CSV হলো সারিবদ্ধ ডেটা সংরক্ষণের জন্য একটি টেক্সট-ভিত্তিক ফরম্যাট, এটি একটি নেটিভ এক্সেল ফরম্যাট নয়।", "isCorrect": false },
                { "text": ".XLS", "textBn": ".XLS", "rationale": "XLS is an older Excel format used in versions prior to 2007.", "rationaleBn": "XLS হলো 2007 এর আগের সংস্করণগুলিতে ব্যবহৃত একটি পুরানো এক্সেল ফরম্যাট।", "isCorrect": false },
                { "text": ".XLSM", "textBn": ".XLSM", "rationale": "XLSM is used for workbooks that contain macros.", "rationaleBn": "XLSM ম্যাক্রো ধারণকারী ওয়ার্কবুকগুলির জন্য ব্যবহৃত হয়।", "isCorrect": false },
                { "text": ".XLSX", "textBn": ".XLSX", "rationale": "XLSX is the default file extension for modern Excel workbooks since Excel 2007.", "rationaleBn": "XLSX হলো এক্সেল 2007 থেকে আধুনিক এক্সেল ওয়ার্কবুকগুলির জন্য ডিফল্ট ফাইল এক্সটেনশন।", "isCorrect": true }
            ]
        },
        {
            "question": "How can you quickly resize a column to fit its contents automatically?",
            "questionBn": "কীভাবে আপনি একটি কলামকে তার বিষয়বস্তুর সাথে স্বয়ংক্রিয়ভাবে মাপসই করার জন্য দ্রুত আকার পরিবর্তন করতে পারেন?",
            "answerOptions": [
                { "text": "Drag the column header border.", "textBn": "কলাম হেডার বর্ডার টেনে আনুন।", "rationale": "Dragging allows for manual resizing.", "rationaleBn": "টেনে আনলে ম্যানুয়াল আকার পরিবর্তন করা যায়।", "isCorrect": false },
                { "text": "Double-click the column header border.", "textBn": "কলাম হেডার বর্ডারে ডাবল-ক্লিক করুন।", "rationale": "Double-clicking the right border of a column header automatically resizes the column to fit the widest content.", "rationaleBn": "একটি কলাম হেডারের ডান বর্ডারে ডাবল-ক্লিক করলে স্বয়ংক্রিয়ভাবে কলামটি সবচেয়ে চওড়া বিষয়বস্তুর সাথে মাপসই করার জন্য আকার পরিবর্তন হয়।", "isCorrect": true },
                { "text": "Use the 'AutoFit' option in the Format menu.", "textBn": "ফরম্যাট মেনুতে 'অটোফিট' বিকল্পটি ব্যবহার করুন।", "rationale": "This option works but is not as fast as the double-click shortcut.", "rationaleBn": "এই বিকল্পটি কাজ করে তবে ডাবল-ক্লিক শর্টকাটের মতো দ্রুত নয়।", "isCorrect": false },
                { "text": "Right-click the cell and choose 'AutoFit'.", "textBn": "সেলে ডান-ক্লিক করে 'অটোফিট' নির্বাচন করুন।", "rationale": "'AutoFit' is an option for rows and columns, but it's found in the Format menu, not directly in the cell's right-click context menu.", "rationaleBn": "'অটোফিট' সারি এবং কলামের জন্য একটি বিকল্প, তবে এটি ফরম্যাট মেনুতে পাওয়া যায়, সেলের ডান-ক্লিক কনটেক্সট মেনুতে সরাসরি নয়।", "isCorrect": false }
            ]
        },
        {
            "question": "What is the purpose of the **Quick Access Toolbar**?",
            "questionBn": "**কুইক অ্যাক্সেস টুলবার** এর উদ্দেশ্য কী?",
            "answerOptions": [
                { "text": "To display recently opened workbooks.", "textBn": "সম্প্রতি খোলা ওয়ার্কবুকগুলি প্রদর্শন করা।", "rationale": "Recently opened workbooks are typically found in the File tab (Backstage View).", "rationaleBn": "সম্প্রতি খোলা ওয়ার্কবুকগুলি সাধারণত ফাইল ট্যাবে (ব্যাকস্টেজ ভিউ) পাওয়া যায়।", "isCorrect": false },
                { "text": "To provide quick access to frequently used commands.", "textBn": "ঘন ঘন ব্যবহৃত কমান্ডগুলিতে দ্রুত অ্যাক্সেস সরবরাহ করা।", "rationale": "The Quick Access Toolbar is a customizable toolbar that allows you to add commands you use most often, regardless of which Ribbon tab is active.", "rationaleBn": "কুইক অ্যাক্সেস টুলবার হলো একটি কাস্টমাইজযোগ্য টুলবার যা আপনাকে সবচেয়ে বেশি ব্যবহৃত কমান্ডগুলি যোগ করার অনুমতি দেয়, বর্তমানে কোন রিবন ট্যাব সক্রিয় আছে তা নির্বিশেষে।", "isCorrect": true },
                { "text": "To navigate between different worksheets.", "textBn": "বিভিন্ন ওয়ার্কশীটের মধ্যে নেভিগেট করা।", "rationale": "Worksheet navigation occurs using the sheet tabs at the bottom of the window.", "rationaleBn": "ওয়ার্কশীট নেভিগেশন উইন্ডোর নীচে থাকা শীট ট্যাবগুলি ব্যবহার করে ঘটে।", "isCorrect": false },
                { "text": "To adjust the zoom level of the worksheet.", "textBn": "ওয়ার্কশীটের জুম লেভেল সামঞ্জস্য করা।", "rationale": "Zoom controls are typically found on the View tab or the status bar.", "rationaleBn": "জুম নিয়ন্ত্রণগুলি সাধারণত ভিউ ট্যাব বা স্ট্যাটাস বারে পাওয়া যায়।", "isCorrect": false }
            ]
        },
        {
            "question": "How do you select non-adjacent cells or ranges?",
            "questionBn": "আপনি কীভাবে অ-সংলগ্ন সেল বা পরিসরগুলি নির্বাচন করবেন?",
            "answerOptions": [
                { "text": "Hold down the Shift key while clicking.", "textBn": "ক্লিক করার সময় Shift কী ধরে রাখুন।", "rationale": "Holding Shift selects a continuous range of cells.", "rationaleBn": "Shift ধরে রাখলে সেলগুলির একটি অবিচ্ছিন্ন পরিসর নির্বাচিত হয়।", "isCorrect": false },
                { "text": "Hold down the Ctrl key while clicking.", "textBn": "ক্লিক করার সময় Ctrl কী ধরে রাখুন।", "rationale": "Holding Ctrl allows you to select multiple non-adjacent cells or ranges.", "rationaleBn": "Ctrl ধরে রাখলে আপনি একাধিক অ-সংলগ্ন সেল বা পরিসর নির্বাচন করতে পারেন।", "isCorrect": true },
                { "text": "Use the mouse to drag a box around them.", "textBn": "তাদের চারপাশে একটি বাক্স টানতে মাউস ব্যবহার করুন।", "rationale": "This selects a continuous, rectangular range.", "rationaleBn": "এটি একটি অবিচ্ছিন্ন, আয়তাকার পরিসর নির্বাচন করে।", "isCorrect": false },
                { "text": "Use the arrow keys after selecting a cell.", "textBn": "একটি সেল নির্বাচন করার পরে তীর কীগুলি ব্যবহার করুন।", "rationale": "This moves the active cell, it doesn't select multiple non-adjacent cells.", "rationaleBn": "এটি সক্রিয় সেলকে সরিয়ে নেয়, একাধিক অ-সংলগ্ন সেল নির্বাচন করে না।", "isCorrect": false }
            ]
        },
        {
            "question": "Which of the following is NOT a standard tab on the Excel Ribbon?",
            "questionBn": "নিচের কোনটি এক্সেল রিবনে পাওয়া একটি স্ট্যান্ডার্ড ট্যাব নয়?",
            "answerOptions": [
                { "text": "Home", "textBn": "হোম", "rationale": "The Home tab is a standard tab.", "rationaleBn": "হোম ট্যাব একটি স্ট্যান্ডার্ড ট্যাব।", "isCorrect": false },
                { "text": "Data", "textBn": "ডেটা", "rationale": "The Data tab is a standard tab.", "rationaleBn": "ডেটা ট্যাব একটি স্ট্যান্ডার্ড ট্যাব।", "isCorrect": false },
                { "text": "Reports", "textBn": "রিপোর্টস", "rationale": "There is no standard 'Reports' tab. Reporting features are found in other tabs like Insert and Data.", "rationaleBn": "কোনো স্ট্যান্ডার্ড 'রিপোর্টস' ট্যাব নেই। রিপোর্টিং বৈশিষ্ট্যগুলি ইনসার্ট এবং ডেটার মতো অন্যান্য ট্যাবে পাওয়া যায়।", "isCorrect": true },
                { "text": "Formulas", "textBn": "ফর্মুলাস", "rationale": "The Formulas tab is a standard tab.", "rationaleBn": "ফর্মুলাস ট্যাব একটি স্ট্যান্ডার্ড ট্যাব।", "isCorrect": false }
            ]
        },
        {
            "question": "What is the fastest way to navigate to the last used cell in a worksheet?",
            "questionBn": "একটি ওয়ার্কশীটে শেষ ব্যবহৃত সেলে নেভিগেট করার দ্রুততম উপায় কী?",
            "answerOptions": [
                { "text": "Scroll manually with the mouse.", "textBn": "মাউস দিয়ে ম্যানুয়ালি স্ক্রোল করা।", "rationale": "This is often slow and inefficient for large datasets.", "rationaleBn": "এটি প্রায়শই বড় ডেটাসেটের জন্য ধীর এবং অদক্ষ।", "isCorrect": false },
                { "text": "Press Ctrl + End.", "textBn": "Ctrl + End চাপুন।", "rationale": "Ctrl + End moves the cursor to the bottom-most and right-most cell of the data region.", "rationaleBn": "Ctrl + End কার্সারকে ডেটা অঞ্চলের সবচেয়ে নিচের এবং সবচেয়ে ডান দিকের সেলে সরিয়ে নেয়।", "isCorrect": true },
                { "text": "Press F5 and type in the last cell address.", "textBn": "", "rationale": "This requires you to know the last cell address beforehand.", "rationaleBn": "এর জন্য আপনাকে আগে থেকে শেষ সেলের ঠিকানা জানতে হবে।", "isCorrect": false },
                { "text": "Click the 'Go To' button on the Home tab.", "textBn": "হোম ট্যাবে 'গো টু' বোতামে ক্লিক করুন।", "rationale": "The 'Go To' dialog can take you to a specific cell, but Ctrl+End is faster for the last cell.", "rationaleBn": "'গো টু' ডায়ালগ আপনাকে একটি নির্দিষ্ট সেলে নিয়ে যেতে পারে, কিন্তু শেষ সেলের জন্য Ctrl+End দ্রুততর।", "isCorrect": false }
            ]
        },
        {
            "question": "When entering data, what does a single apostrophe (') at the beginning of the entry tell Excel?",
            "questionBn": "ডেটা প্রবেশ করানোর সময়, এন্ট্রির শুরুতে একটি একক অ্যাপোস্ট্রফি (') এক্সেলকে কী বলে?",
            "answerOptions": [
                { "text": "To treat the entry as a formula.", "textBn": "এন্ট্রিটিকে একটি ফর্মুলা হিসাবে গণ্য করা।", "rationale": "Formulas start with an equals sign (=).", "rationaleBn": "ফর্মুলাগুলি একটি সমান চিহ্ন (=) দিয়ে শুরু হয়।", "isCorrect": false },
                { "text": "To treat the entry as text, regardless of its content.", "textBn": "এর বিষয়বস্তু নির্বিশেষে এন্ট্রিটিকে টেক্সট হিসাবে গণ্য করা।", "rationale": "A leading apostrophe is a common way to force Excel to treat what would normally be a number or a date as a text string.", "rationaleBn": "একটি অগ্রণী অ্যাপোস্ট্রফি হলো এক্সেলকে সাধারণত একটি সংখ্যা বা একটি তারিখ যা টেক্সট স্ট্রিং হিসাবে গণ্য করার জন্য বাধ্য করার একটি সাধারণ উপায়।", "isCorrect": true },
                { "text": "To hide the content of the cell.", "textBn": "সেলের বিষয়বস্তু লুকানো।", "rationale": "Hiding a cell's content is done via cell formatting or column/row hiding.", "rationaleBn": "একটি সেলের বিষয়বস্তু লুকানো সেল ফরম্যাটিং বা কলাম/সারি লুকানোর মাধ্যমে করা হয়।", "isCorrect": false },
                { "text": "To apply a specific font style.", "textBn": "একটি নির্দিষ্ট ফন্ট শৈলী প্রয়োগ করা।", "rationale": "Font styles are managed in the Font group of the Home tab.", "rationaleBn": "ফন্ট শৈলীগুলি হোম ট্যাবের ফন্ট গ্রুপে পরিচালিত হয়।", "isCorrect": false }
            ]
        },
        {
            "question": "Which tab would you go to in order to change the default font and font size for the entire worksheet?",
            "questionBn": "আপনি সম্পূর্ণ ওয়ার্কশীটের জন্য ডিফল্ট ফন্ট এবং ফন্ট আকার পরিবর্তন করতে কোন ট্যাবে যাবেন?",
            "answerOptions": [
                { "text": "Home", "textBn": "হোম", "rationale": "The Home tab has font controls, but not for the default font of the entire workbook.", "rationaleBn": "হোম ট্যাবে ফন্ট নিয়ন্ত্রণ আছে, কিন্তু সম্পূর্ণ ওয়ার্কবুকের ডিফল্ট ফন্টের জন্য নয়।", "isCorrect": false },
                { "text": "File", "textBn": "ফাইল", "rationale": "The File tab contains 'Options', where you can set the default font.", "rationaleBn": "ফাইল ট্যাবে 'অপশন' থাকে, যেখানে আপনি ডিফল্ট ফন্ট সেট করতে পারেন।", "isCorrect": true },
                { "text": "View", "textBn": "ভিউ", "rationale": "The View tab controls how the workbook is displayed on the screen.", "rationaleBn": "ভিউ ট্যাব নিয়ন্ত্রণ করে কিভাবে ওয়ার্কবুক স্ক্রিনে প্রদর্শিত হয়।", "isCorrect": false },
                { "text": "Page Layout", "textBn": "পেজ লেআউট", "rationale": "Page Layout is for print settings, not default workbook font.", "rationaleBn": "পেজ লেআউট প্রিন্ট সেটিংসের জন্য, ডিফল্ট ওয়ার্কবুক ফন্টের জন্য নয়।", "isCorrect": false }
            ]
        },
        {
            "question": "What is a **Workbook** in Excel?",
            "questionBn": "এক্সেলে একটি **ওয়ার্কবুক** কী?",
            "answerOptions": [
                { "text": "A single grid of cells where you enter data.", "textBn": "একটি একক সেলগুলির গ্রিড যেখানে আপনি ডেটা প্রবেশ করান।", "rationale": "This describes a Worksheet.", "rationaleBn": "এটি একটি ওয়ার্কশীট বর্ণনা করে।", "isCorrect": false },
                { "text": "A file that contains one or more worksheets.", "textBn": "একটি ফাইল যা এক বা একাধিক ওয়ার্কশীট ধারণ করে।", "rationale": "A workbook is the main Excel file and can contain multiple worksheets.", "rationaleBn": "একটি ওয়ার্কবুক হলো প্রধান এক্সেল ফাইল এবং একাধিক ওয়ার্কশীট ধারণ করতে পারে।", "isCorrect": true },
                { "text": "A collection of formulas and functions.", "textBn": "ফর্মুলা এবং ফাংশনগুলির একটি সংগ্রহ।", "rationale": "This is a feature within a workbook, not the definition of a workbook.", "rationaleBn": "এটি একটি ওয়ার্কবুকের মধ্যে একটি বৈশিষ্ট্য, ওয়ার্কবুকের সংজ্ঞা নয়।", "isCorrect": false },
                { "text": "A graphical representation of data.", "textBn": "ডেটার একটি গ্রাফিক্যাল উপস্থাপনা।", "rationale": "This describes a Chart.", "rationaleBn": "এটি একটি চার্ট বর্ণনা করে।", "isCorrect": false }
            ]
        },
        {
            "question": "The keyboard shortcut to open the 'Format Cells' dialog box is:",
            "questionBn": "'ফরম্যাট সেলস' ডায়ালগ বক্স খোলার জন্য কিবোর্ড শর্টকাট হলো:",
            "answerOptions": [
                { "text": "Ctrl + F", "textBn": "Ctrl + F", "rationale": "Ctrl + F opens the Find dialog box.", "rationaleBn": "Ctrl + F ফাইন্ড ডায়ালগ বক্স খোলে।", "isCorrect": false },
                { "text": "Ctrl + 1", "textBn": "Ctrl + 1", "rationale": "Ctrl + 1 is the shortcut to open the Format Cells dialog box.", "rationaleBn": "Ctrl + 1 হলো ফরম্যাট সেলস ডায়ালগ বক্স খোলার শর্টকাট।", "isCorrect": true },
                { "text": "Alt + C", "textBn": "Alt + C", "rationale": "There is no standard shortcut for this function with Alt + C.", "rationaleBn": "Alt + C দিয়ে এই ফাংশনের জন্য কোনো স্ট্যান্ডার্ড শর্টকাট নেই।", "isCorrect": false },
                { "text": "Ctrl + E", "textBn": "Ctrl + E", "rationale": "Ctrl + E initiates Flash Fill.", "rationaleBn": "Ctrl + E ফ্ল্যাশ ফিল শুরু করে।", "isCorrect": false }
            ]
        },
        {
            "question": "Which of these file types would you use to save an Excel file that needs to be opened in a basic text editor?",
            "questionBn": "একটি এক্সেল ফাইল যা একটি মৌলিক টেক্সট এডিটরে খুলতে হবে, সেটি সংরক্ষণ করতে আপনি এই ফাইল টাইপগুলির মধ্যে কোনটি ব্যবহার করবেন?",
            "answerOptions": [
                { "text": "XLSX", "textBn": "XLSX", "rationale": "XLSX files are a complex, compressed XML format and cannot be read by a basic text editor.", "rationaleBn": "XLSX ফাইলগুলি একটি জটিল, সংকুচিত XML ফরম্যাট এবং একটি মৌলিক টেক্সট এডিটর দ্বারা পড়া যায় না।", "isCorrect": false },
                { "text": "XLSM", "textBn": "XLSM", "rationale": "XLSM files contain macros and cannot be read by a basic text editor.", "rationaleBn": "XLSM ফাইলগুলি ম্যাক্রো ধারণ করে এবং একটি মৌলিক টেক্সট এডিটর দ্বারা পড়া যায় না।", "isCorrect": false },
                { "text": "PDF", "textBn": "PDF", "rationale": "PDF is a non-editable document format.", "rationaleBn": "PDF হলো একটি অ-সম্পাদনাযোগ্য ডকুমেন্ট ফরম্যাট।", "isCorrect": false },
                { "text": "CSV", "textBn": "CSV", "rationale": "CSV (Comma Separated Values) is a plain text format that stores tabular data and can be opened in any text editor.", "rationaleBn": "CSV (কমা সেপারেটেড ভ্যালুস) হলো একটি প্লেইন টেক্সট ফরম্যাট যা সারিবদ্ধ ডেটা সংরক্ষণ করে এবং যেকোনো টেক্সট এডিটরে খোলা যায়।", "isCorrect": true }
            ]
        },

        // Week 2: Formatting & Basic Formulas
        {
            "question": "Which function would you use to find the lowest value in a range of cells?",
            "questionBn": "একটি পরিসরের সেলগুলিতে সর্বনিম্ন মান বের করতে আপনি কোন ফাংশনটি ব্যবহার করবেন?",
            "answerOptions": [
                { "text": "LOWER()", "textBn": "LOWER()", "rationale": "LOWER() converts text to lowercase.", "rationaleBn": "LOWER() টেক্সটকে ছোট হাতে রূপান্তরিত করে।", "isCorrect": false },
                { "text": "MIN()", "textBn": "MIN()", "rationale": "The MIN function returns the smallest value in a set of values.", "rationaleBn": "MIN ফাংশনটি মানগুলির একটি সেটে সর্বনিম্ন মান ফেরত দেয়।", "isCorrect": true },
                { "text": "LOW()", "textBn": "LOW()", "rationale": "LOW() is not a valid Excel function.", "rationaleBn": "LOW() একটি বৈধ এক্সেল ফাংশন নয়।", "isCorrect": false },
                { "text": "SMALLEST()", "textBn": "SMALLEST()", "rationale": "SMALLEST() is not a valid Excel function.", "rationaleBn": "SMALLEST() একটি বৈধ এক্সেল ফাংশন নয়।", "isCorrect": false }
            ]
        },
        {
            "question": "What is the purpose of **Conditional Formatting**?",
            "questionBn": "**শর্তাধীন ফরম্যাটিং** এর উদ্দেশ্য কী?",
            "answerOptions": [
                { "text": "To manually change the font and color of a cell.", "textBn": "ম্যানুয়ালি একটি সেলের ফন্ট এবং রঙ পরিবর্তন করা।", "rationale": "This is manual formatting, not conditional.", "rationaleBn": "এটি ম্যানুয়াল ফরম্যাটিং, শর্তাধীন নয়।", "isCorrect": false },
                { "text": "To change the appearance of cells based on specific rules or conditions.", "textBn": "নির্দিষ্ট নিয়ম বা শর্তের উপর ভিত্তি করে সেলগুলির চেহারা পরিবর্তন করা।", "rationale": "Conditional formatting automatically applies formatting like colors, data bars, or icons when a cell's value meets a specific condition.", "rationaleBn": "শর্তাধীন ফরম্যাটিং স্বয়ংক্রিয়ভাবে রঙ, ডেটা বার বা আইকনের মতো ফরম্যাটিং প্রয়োগ করে যখন একটি সেলের মান একটি নির্দিষ্ট শর্ত পূরণ করে।", "isCorrect": true },
                { "text": "To make a cell a drop-down list.", "textBn": "একটি সেলকে একটি ড্রপ-ডাউন তালিকা তৈরি করা।", "rationale": "Data Validation is used for this.", "rationaleBn": "এর জন্য ডেটা ভ্যালিডেশন ব্যবহৃত হয়।", "isCorrect": false },
                { "text": "To create a chart.", "textBn": "একটি চার্ট তৈরি করা।", "rationale": "Charts are created from the Insert tab.", "rationaleBn": "চার্টগুলি ইনসার্ট ট্যাব থেকে তৈরি করা হয়।", "isCorrect": false }
            ]
        },
        {
            "question": "Which of these is a relative cell reference?",
            "questionBn": "এইগুলির মধ্যে কোনটি একটি রিলেটিভ সেল রেফারেন্স?",
            "answerOptions": [
                { "text": "$A$1", "textBn": "$A$1", "rationale": "This is an absolute reference.", "rationaleBn": "এটি একটি অ্যাবসোলিউট রেফারেন্স।", "isCorrect": false },
                { "text": "A1", "textBn": "A1", "rationale": "A relative reference changes when the formula is copied to another cell.", "rationaleBn": "একটি রিলেটিভ রেফারেন্স যখন ফর্মুলা অন্য সেলে কপি করা হয় তখন পরিবর্তিত হয়।", "isCorrect": true },
                { "text": "A$1", "textBn": "A$1", "rationale": "This is a mixed reference, with the row being absolute.", "rationaleBn": "এটি একটি মিশ্র রেফারেন্স, যেখানে সারিটি অ্যাবসোলিউট।", "isCorrect": false },
                { "text": "$A1", "textBn": "$A1", "rationale": "This is a mixed reference, with the column being absolute.", "rationaleBn": "এটি একটি মিশ্র রেফারেন্স, যেখানে কলামটি অ্যাবসোলিউট।", "isCorrect": false }
            ]
        },
        {
            "question": "What is the purpose of the **Format Painter**?",
            "questionBn": "**ফরম্যাট পেইন্টার** এর উদ্দেশ্য কী?",
            "answerOptions": [
                { "text": "To copy a formula from one cell to another.", "textBn": "একটি ফর্মুলা একটি সেল থেকে অন্যটিতে কপি করা।", "rationale": "Copy and Paste are used for formulas.", "rationaleBn": "ফর্মুলার জন্য কপি এবং পেস্ট ব্যবহৃত হয়।", "isCorrect": false },
                { "text": "To copy the value from one cell to another.", "textBn": "একটি সেলের মান অন্যটিতে কপি করা।", "rationale": "Copy and Paste are used for values.", "rationaleBn": "মানগুলির জন্য কপি এবং পেস্ট ব্যবহৃত হয়।", "isCorrect": false },
                { "text": "To copy the formatting from one cell to another.", "textBn": "একটি সেলের ফরম্যাটিং অন্যটিতে কপি করা।", "rationale": "Format Painter copies only the formatting (e.g., font, color, borders) and applies it to a new location.", "rationaleBn": "ফরম্যাট পেইন্টার শুধুমাত্র ফরম্যাটিং (যেমন, ফন্ট, রঙ, বর্ডার) কপি করে এবং এটি একটি নতুন স্থানে প্রয়োগ করে।", "isCorrect": true },
                { "text": "To clear all formatting from a cell.", "textBn": "একটি সেল থেকে সমস্ত ফরম্যাটিং মুছে ফেলা।", "rationale": "The 'Clear Formats' option is used for this.", "rationaleBn": "'ক্লিয়ার ফরম্যাটস' বিকল্পটি এর জন্য ব্যবহৃত হয়।", "isCorrect": false }
            ]
        },
        {
            "question": "The formula `=SUM(A1:A5)` is an example of what type of reference?",
            "questionBn": "ফর্মুলা `=SUM(A1:A5)` কোন ধরনের রেফারেন্সের একটি উদাহরণ?",
            "answerOptions": [
                { "text": "Absolute Reference", "textBn": "অ্যাবসোলিউট রেফারেন্স", "rationale": "An absolute reference would include dollar signs ($).", "rationaleBn": "একটি অ্যাবসোলিউট রেফারেন্স ডলার চিহ্ন ($) অন্তর্ভুক্ত করবে।", "isCorrect": false },
                { "text": "Relative Reference", "textBn": "রিলেটিভ রেফারেন্স", "rationale": "This is a relative reference because the range `A1:A5` will change if the formula is copied to another cell.", "rationaleBn": "এটি একটি রিলেটিভ রেফারেন্স কারণ ফর্মুলাটি অন্য সেলে কপি করা হলে পরিসর `A1:A5` পরিবর্তিত হবে।", "isCorrect": true },
                { "text": "Mixed Reference", "textBn": "মিশ্র রেফারেন্স", "rationale": "A mixed reference has one dollar sign, either before the column or the row.", "rationaleBn": "একটি মিশ্র রেফারেন্সে একটি ডলার চিহ্ন থাকে, হয় কলামের আগে বা সারির আগে।", "isCorrect": false },
                { "text": "Named Reference", "textBn": "নামযুক্ত রেফারেন্স", "rationale": "A named reference uses a descriptive name instead of cell coordinates.", "rationaleBn": "একটি নামযুক্ত রেফারেন্স সেলের স্থানাঙ্কের পরিবর্তে একটি বর্ণনামূলক নাম ব্যবহার করে।", "isCorrect": false }
            ]
        },
        {
            "question": "If you want to apply a single format (e.g., bold, red text) to a range of cells, what is the most efficient method?",
            "questionBn": "আপনি যদি সেলগুলির একটি পরিসরে একটি একক ফরম্যাট (যেমন, গাঢ়, লাল টেক্সট) প্রয়োগ করতে চান, তাহলে সবচেয়ে কার্যকরী পদ্ধতি কোনটি?",
            "answerOptions": [
                { "text": "Format each cell individually.", "textBn": "প্রতিটি সেল আলাদাভাবে ফরম্যাট করা।", "rationale": "This is inefficient for a range of cells.", "rationaleBn": "এটি সেলগুলির একটি পরিসরের জন্য অদক্ষ।", "isCorrect": false },
                { "text": "Apply Conditional Formatting.", "textBn": "শর্তাধীন ফরম্যাটিং প্রয়োগ করা।", "rationale": "Conditional formatting is for rules-based formatting, not simple manual formatting.", "rationaleBn": "শর্তাধীন ফরম্যাটিং নিয়ম-ভিত্তিক ফরম্যাটিংয়ের জন্য, সাধারণ ম্যানুয়াল ফরম্যাটিংয়ের জন্য নয়।", "isCorrect": false },
                { "text": "Select the entire range and apply the formatting once.", "textBn": "পুরো পরিসরটি নির্বাচন করে একবার ফরম্যাটিং প্রয়োগ করা।", "rationale": "By selecting the entire range first, you can apply any manual formatting to all selected cells at once.", "rationaleBn": "প্রথমে পুরো পরিসরটি নির্বাচন করে, আপনি একবারে সমস্ত নির্বাচিত সেলে যেকোনো ম্যানুয়াল ফরম্যাটিং প্রয়োগ করতে পারেন।", "isCorrect": true },
                { "text": "Use the 'Fill' handle to copy the format.", "textBn": "'ফিল' হ্যান্ডেল ব্যবহার করে ফরম্যাট কপি করা।", "rationale": "The Fill handle copies content and formatting but is not the most direct way to apply a new format to a blank range.", "rationaleBn": "ফিল হ্যান্ডেল বিষয়বস্তু এবং ফরম্যাটিং কপি করে কিন্তু একটি খালি পরিসরে একটি নতুন ফরম্যাট প্রয়োগ করার সবচেয়ে সরাসরি উপায় নয়।", "isCorrect": false }
            ]
        },
        {
            "question": "Which of these formulas correctly calculates the average of cells A1 through A10?",
            "questionBn": "এই ফর্মুলাগুলির মধ্যে কোনটি সঠিকভাবে A1 থেকে A10 সেলগুলির গড় গণনা করে?",
            "answerOptions": [
                { "text": "=AVG(A1:A10)", "textBn": "=AVG(A1:A10)", "rationale": "AVG is not a valid Excel function.", "rationaleBn": "AVG একটি বৈধ এক্সেল ফাংশন নয়।", "isCorrect": false },
                { "text": "=SUM(A1:A10)/10", "textBn": "=SUM(A1:A10)/10", "rationale": "This works but is less robust than using the dedicated AVERAGE function, as the count is hard-coded.", "rationaleBn": "এটি কাজ করে তবে ডেডিকেটেড AVERAGE ফাংশন ব্যবহার করার চেয়ে কম শক্তিশালী, কারণ গণনাটি হার্ড-কোডেড।", "isCorrect": false },
                { "text": "=AVERAGE(A1:A10)", "textBn": "=AVERAGE(A1:A10)", "rationale": "The AVERAGE function is the correct and most efficient way to calculate the arithmetic mean of a range.", "rationaleBn": "AVERAGE ফাংশনটি একটি পরিসরের গাণিতিক গড় গণনা করার জন্য সঠিক এবং সবচেয়ে কার্যকরী উপায়।", "isCorrect": true },
                { "text": "=AVERAGE(A1,A2,A3,A4,A5,A6,A7,A8,A9,A10)", "textBn": "=AVERAGE(A1,A2,A3,A4,A5,A6,A7,A8,A9,A10)", "rationale": "This is a valid way to write it, but specifying the range `A1:A10` is much more concise and scalable.", "rationaleBn": "এটি লেখার একটি বৈধ উপায়, তবে পরিসর `A1:A10` নির্দিষ্ট করা অনেক বেশি সংক্ষিপ্ত এবং স্কেলেবল।", "isCorrect": false }
            ]
        },
        {
            "question": "What is the key difference between a cell's number format 'Currency' and 'Accounting'?",
            "questionBn": "একটি সেলের সংখ্যা ফরম্যাট 'মুদ্রা' এবং 'অ্যাকাউন্টিং'-এর মধ্যে মূল পার্থক্য কী?",
            "answerOptions": [
                { "text": "Currency displays negative numbers in red, while Accounting does not.", "textBn": "মুদ্রা ঋণাত্মক সংখ্যাগুলিকে লাল রঙে প্রদর্শন করে, যখন অ্যাকাউন্টিং করে না।", "rationale": "This can be a customization option for both, but is not the main difference.", "rationaleBn": "এটি উভয়ের জন্যই একটি কাস্টমাইজেশন বিকল্প হতে পারে, তবে এটি প্রধান পার্থক্য নয়।", "isCorrect": false },
                { "text": "Accounting aligns currency symbols and decimal points for better readability, while Currency places the symbol right next to the number.", "textBn": "অ্যাকাউন্টিং মুদ্রা প্রতীক এবং দশমিক বিন্দুগুলিকে আরও ভালো পঠনযোগ্যতার জন্য সারিবদ্ধ করে, যখন মুদ্রা প্রতীকটিকে সংখ্যার ঠিক পাশে রাখে।", "rationale": "Accounting format is specifically designed for financial data presentation, with symbols and decimals aligning in columns.", "rationaleBn": "অ্যাকাউন্টিং ফরম্যাটটি বিশেষভাবে আর্থিক ডেটা উপস্থাপনার জন্য ডিজাইন করা হয়েছে, যেখানে প্রতীক এবং দশমিকগুলি কলামে সারিবদ্ধ থাকে।", "isCorrect": true },
                { "text": "Currency can only be used for dollars, while Accounting can use any currency symbol.", "textBn": "মুদ্রা শুধুমাত্র ডলারের জন্য ব্যবহার করা যেতে পারে, যখন অ্যাকাউন্টিং যেকোনো মুদ্রা প্রতীক ব্যবহার করতে পারে।", "rationale": "Both formats can use any currency symbol.", "rationaleBn": "উভয় ফরম্যাটই যেকোনো মুদ্রা প্রতীক ব্যবহার করতে পারে।", "isCorrect": false },
                { "text": "Accounting does not display a currency symbol at all.", "textBn": "অ্যাকাউন্টিং কোনো মুদ্রা প্রতীক প্রদর্শন করে না।", "rationale": "Accounting format displays a currency symbol.", "rationaleBn": "অ্যাকাউন্টিং ফরম্যাট একটি মুদ্রা প্রতীক প্রদর্শন করে।", "isCorrect": false }
            ]
        },
        {
            "question": "You enter the formula `=A1+A2`. If you copy this formula to the cell directly below it (A4), what will the new formula be?",
            "questionBn": "আপনি ফর্মুলা `=A1+A2` প্রবেশ করালেন। যদি আপনি এই ফর্মুলাটি এর ঠিক নিচের সেলে (A4) কপি করেন, তাহলে নতুন ফর্মুলাটি কী হবে?",
            "answerOptions": [
                { "text": "=A1+A2", "textBn": "=A1+A2", "rationale": "The reference would change as it's relative.", "rationaleBn": "রেফারেন্সটি আপেক্ষিক হওয়ায় এটি পরিবর্তিত হবে।", "isCorrect": false },
                { "text": "=B1+B2", "textBn": "=B1+B2", "rationale": "The column would not change.", "rationaleBn": "কলাম পরিবর্তিত হবে না।", "isCorrect": false },
                { "text": "=A2+A3", "textBn": "=A2+A3", "rationale": "When a relative reference is copied down, the row numbers increment. A3 would be a cell below A2, so the formula will be =A2+A3.", "rationaleBn": "যখন একটি আপেক্ষিক রেফারেন্স নিচে কপি করা হয়, তখন সারির সংখ্যা বৃদ্ধি পায়। A3 A2 এর নিচের একটি সেল হবে, তাই ফর্মুলাটি হবে =A2+A3।", "isCorrect": true },
                { "text": "=A3+A4", "textBn": "=A3+A4", "rationale": "The formula would be in A4, so it would reference cells A3 and A4. It will be =A2+A3 in A3.", "rationaleBn": "ফর্মুলাটি A4 এ থাকবে, তাই এটি A3 এবং A4 সেলগুলিকে রেফার করবে। এটি A3 তে =A2+A3 হবে।", "isCorrect": false }
            ]
        },
        {
            "question": "What happens if you use the keyboard shortcut `Ctrl + D` on a cell?",
            "questionBn": "আপনি যদি একটি সেলে কিবোর্ড শর্টকাট `Ctrl + D` ব্যবহার করেন, তাহলে কী ঘটে?",
            "answerOptions": [
                { "text": "The cell is deleted.", "textBn": "সেলটি মুছে ফেলা হয়।", "rationale": "The 'Delete' key is used for this.", "rationaleBn": "'ডিলিট' কী এর জন্য ব্যবহৃত হয়।", "isCorrect": false },
                { "text": "The content of the cell above is copied down.", "textBn": "উপরের সেলের বিষয়বস্তু নিচে কপি করা হয়।", "rationale": "Ctrl + D fills the selected cells with the contents and formatting of the topmost cell in the selection.", "rationaleBn": "Ctrl + D নির্বাচিত সেলগুলিকে নির্বাচনের উপরের সেলের বিষয়বস্তু এবং ফরম্যাটিং দিয়ে পূরণ করে।", "isCorrect": true },
                { "text": "A new row is inserted.", "textBn": "একটি নতুন সারি সন্নিবেশ করা হয়।", "rationale": "Ctrl + + is used to insert rows or columns.", "rationaleBn": "সারি বা কলাম সন্নিবেশ করার জন্য Ctrl + + ব্যবহৃত হয়।", "isCorrect": false },
                { "text": "The text is double-underlined.", "textBn": "টেক্সটের নিচে ডাবল-আন্ডারলাইন করা হয়।", "rationale": "There is no standard shortcut for this.", "rationaleBn": "এর জন্য কোনো স্ট্যান্ডার্ড শর্টকাট নেই।", "isCorrect": false }
            ]
        },
        {
            "question": "Which of these is the correct formula to calculate the total sum of cells in the range B2:B10?",
            "questionBn": "এই ফর্মুলাগুলির মধ্যে কোনটি সঠিকভাবে B2:B10 পরিসরের সেলগুলির মোট যোগফল গণনা করে?",
            "answerOptions": [
                { "text": "=SUM(B2-B10)", "textBn": "=SUM(B2-B10)", "rationale": "The hyphen (-) is for subtraction, not defining a range.", "rationaleBn": "হাইফেন (-) বিয়োগের জন্য, একটি পরিসর সংজ্ঞায়িত করার জন্য নয়।", "isCorrect": false },
                { "text": "=TOTAL(B2:B10)", "textBn": "=TOTAL(B2:B10)", "rationale": "TOTAL is not a valid Excel function for summation.", "rationaleBn": "TOTAL যোগফলের জন্য একটি বৈধ এক্সেল ফাংশন নয়।", "isCorrect": false },
                { "text": "=SUM(B2:B10)", "textBn": "=SUM(B2:B10)", "rationale": "The SUM function with a colon (:) is the correct syntax to sum a range of cells.", "rationaleBn": "কোলন (:) সহ SUM ফাংশনটি একটি পরিসরের সেল যোগ করার জন্য সঠিক সিনট্যাক্স।", "isCorrect": true },
                { "text": "=ADD(B2:B10)", "textBn": "=ADD(B2:B10)", "rationale": "ADD is not a valid Excel function.", "rationaleBn": "ADD একটি বৈধ এক্সেল ফাংশন নয়।", "isCorrect": false }
            ]
        },
        {
            "question": "When you apply conditional formatting to highlight duplicate values, which tab is the `Conditional Formatting` button located on?",
            "questionBn": "আপনি যখন ডুপ্লিকেট মানগুলি হাইলাইট করার জন্য শর্তাধীন ফরম্যাটিং প্রয়োগ করেন, তখন `শর্তাধীন ফরম্যাটিং` বোতামটি কোন ট্যাবে অবস্থিত?",
            "answerOptions": [
                { "text": "Insert", "textBn": "ইনসার্ট", "rationale": "The Insert tab is for adding objects like charts and tables.", "rationaleBn": "ইনসার্ট ট্যাব চার্ট এবং টেবিলের মতো অবজেক্ট যোগ করার জন্য।", "isCorrect": false },
                { "text": "Data", "textBn": "ডেটা", "rationale": "The Data tab is for data management and analysis tools like sorting and filtering.", "rationaleBn": "ডেটা ট্যাব ডেটা ব্যবস্থাপনা এবং সাজানো ও ফিল্টারিংয়ের মতো বিশ্লেষণের সরঞ্জামগুলির জন্য।", "isCorrect": false },
                { "text": "Home", "textBn": "হোম", "rationale": "Conditional Formatting is part of the 'Styles' group on the Home tab.", "rationaleBn": "শর্তাধীন ফরম্যাটিং হোম ট্যাবের 'স্টাইলস' গ্রুপের অংশ।", "isCorrect": true },
                { "text": "View", "textBn": "ভিউ", "rationale": "The View tab controls how the workbook is displayed.", "rationaleBn": "ভিউ ট্যাব নিয়ন্ত্রণ করে কিভাবে ওয়ার্কবুক প্রদর্শিত হয়।", "isCorrect": false }
            ]
        },
        {
            "question": "What does a mixed cell reference like `A$1` mean?",
            "questionBn": "`A$1` এর মতো একটি মিশ্র সেল রেফারেন্সের অর্থ কী?",
            "answerOptions": [
                { "text": "Both the row and column are fixed.", "textBn": "সারি এবং কলাম উভয়ই স্থির।", "rationale": "This would be an absolute reference, `$A$1`.", "rationaleBn": "এটি একটি অ্যাবসোলিউট রেফারেন্স হবে, `$A$1`।", "isCorrect": false },
                { "text": "The column is fixed, and the row is relative.", "textBn": "কলাম স্থির, এবং সারি আপেক্ষিক।", "rationale": "This would be `$A1`.", "rationaleBn": "এটি `$A1` হবে।", "isCorrect": false },
                { "text": "The row is fixed, and the column is relative.", "textBn": "সারি স্থির, এবং কলাম আপেক্ষিক।", "rationale": "The dollar sign before the row number locks the row, while the column letter without a dollar sign is relative.", "rationaleBn": "সারি সংখ্যার আগে ডলার চিহ্ন সারিকে লক করে, যখন ডলার চিহ্ন ছাড়া কলামের অক্ষর আপেক্ষিক থাকে।", "isCorrect": true },
                { "text": "Both the row and column are relative.", "textBn": "সারি এবং কলাম উভয়ই আপেক্ষিক।", "rationale": "This would be `A1`.", "rationaleBn": "এটি `A1` হবে।", "isCorrect": false }
            ]
        },
        {
            "question": "To add a new row in a worksheet, which shortcut key combination would you use?",
            "questionBn": "একটি ওয়ার্কশীটে একটি নতুন সারি যোগ করতে, আপনি কোন শর্টকাট কী সংমিশ্রণ ব্যবহার করবেন?",
            "answerOptions": [
                { "text": "Ctrl + -", "textBn": "Ctrl + -", "rationale": "Ctrl + - deletes a selected row or column.", "rationaleBn": "Ctrl + - একটি নির্বাচিত সারি বা কলাম মুছে দেয়।", "isCorrect": false },
                { "text": "Ctrl + +", "textBn": "Ctrl + +", "rationale": "This shortcut inserts a new row or column.", "rationaleBn": "এই শর্টকাটটি একটি নতুন সারি বা কলাম সন্নিবেশ করে।", "isCorrect": true },
                { "text": "Ctrl + I", "textBn": "Ctrl + I", "rationale": "Ctrl + I applies italic formatting.", "rationaleBn": "Ctrl + I ইটালিক ফরম্যাটিং প্রয়োগ করে।", "isCorrect": false },
                { "text": "Ctrl + R", "textBn": "Ctrl + R", "rationale": "Ctrl + R fills the selected cells to the right.", "rationaleBn": "Ctrl + R নির্বাচিত সেলগুলি ডানদিকে পূরণ করে।", "isCorrect": false }
            ]
        },

        // Week 3: Intermediate Formulas & Functions
        {
            "question": "Which of the following logical functions returns TRUE if ALL of its arguments are TRUE?",
            "questionBn": "নিচের কোন লজিক্যাল ফাংশনটি TRUE ফেরত দেয় যদি এর সমস্ত আর্গুমেন্ট TRUE হয়?",
            "answerOptions": [
                { "text": "OR()", "textBn": "OR()", "rationale": "OR returns TRUE if at least one argument is true.", "rationaleBn": "OR TRUE ফেরত দেয় যদি অন্তত একটি আর্গুমেন্ট সত্য হয়।", "isCorrect": false },
                { "text": "IF()", "textBn": "IF()", "rationale": "IF performs a logical test and returns one value if true, another if false.", "rationaleBn": "IF একটি লজিক্যাল পরীক্ষা সম্পাদন করে এবং সত্য হলে একটি মান, মিথ্যা হলে অন্যটি ফেরত দেয়।", "isCorrect": false },
                { "text": "AND()", "textBn": "AND()", "rationale": "The AND function returns TRUE only if all of its logical arguments are true.", "rationaleBn": "AND ফাংশনটি শুধুমাত্র তখনই TRUE ফেরত দেয় যদি এর সমস্ত লজিক্যাল আর্গুমেন্ট সত্য হয়।", "isCorrect": true },
                { "text": "NOT()", "textBn": "NOT()", "rationale": "NOT reverses the logical value of its argument.", "rationaleBn": "NOT তার আর্গুমেন্টের লজিক্যাল মানকে উল্টে দেয়।", "isCorrect": false }
            ]
        },
        {
            "question": "What is the purpose of the `LEN()` function?",
            "questionBn": "`LEN()` ফাংশনের উদ্দেশ্য কী?",
            "answerOptions": [
                { "text": "To extract characters from a text string.", "textBn": "একটি টেক্সট স্ট্রিং থেকে অক্ষর বের করা।", "rationale": "Functions like LEFT(), RIGHT(), and MID() are used for this.", "rationaleBn": "LEFT(), RIGHT(), এবং MID() এর মতো ফাংশনগুলি এর জন্য ব্যবহৃত হয়।", "isCorrect": false },
                { "text": "To convert text to lowercase.", "textBn": "টেক্সটকে ছোট হাতে রূপান্তরিত করা।", "rationale": "The LOWER() function is used for this.", "rationaleBn": "LOWER() ফাংশনটি এর জন্য ব্যবহৃত হয়।", "isCorrect": false },
                { "text": "To find the number of characters in a text string.", "textBn": "একটি টেক্সট স্ট্রিং-এ অক্ষরের সংখ্যা বের করা।", "rationale": "LEN() returns the length of a text string, including spaces.", "rationaleBn": "LEN() একটি টেক্সট স্ট্রিং-এর দৈর্ঘ্য ফেরত দেয়, স্পেস সহ।", "isCorrect": true },
                { "text": "To join two or more text strings.", "textBn": "দুই বা তার বেশি টেক্সট স্ট্রিং যোগ করা।", "rationale": "The CONCATENATE() or `&` operator is used for this.", "rationaleBn": "CONCATENATE() বা `&` অপারেটর এর জন্য ব্যবহৃত হয়।", "isCorrect": false }
            ]
        },
        {
            "question": "Which formula counts the number of cells in a range that contain numbers?",
            "questionBn": "কোন ফর্মুলাটি একটি পরিসরের সেলগুলির মধ্যে সংখ্যা ধারণ করে এমন সেলগুলির সংখ্যা গণনা করে?",
            "answerOptions": [
                { "text": "COUNTA()", "textBn": "COUNTA()", "rationale": "COUNTA counts all non-empty cells.", "rationaleBn": "COUNTA সমস্ত খালি নয় এমন সেলগুলি গণনা করে।", "isCorrect": false },
                { "text": "COUNT()", "textBn": "COUNT()", "rationale": "COUNT is designed to count only the cells that contain numerical data.", "rationaleBn": "COUNT শুধুমাত্র সংখ্যাগত ডেটা ধারণকারী সেলগুলি গণনা করার জন্য ডিজাইন করা হয়েছে।", "isCorrect": true },
                { "text": "COUNTIF()", "textBn": "COUNTIF()", "rationale": "COUNTIF counts cells based on a specific criterion.", "rationaleBn": "COUNTIF একটি নির্দিষ্ট মানদণ্ডের উপর ভিত্তি করে সেলগুলি গণনা করে।", "isCorrect": false },
                { "text": "SUM()", "textBn": "SUM()", "rationale": "SUM adds numbers, it does not count them.", "rationaleBn": "SUM সংখ্যা যোগ করে, এটি সেগুলিকে গণনা করে না।", "isCorrect": false }
            ]
        },
        {
            "question": "You have a list of dates in column A. Which function would you use to calculate the number of years between each date and today's date?",
            "questionBn": "আপনার কাছে A কলামে তারিখগুলির একটি তালিকা আছে। প্রতিটি তারিখ এবং আজকের তারিখের মধ্যে বছরের সংখ্যা গণনা করতে আপনি কোন ফাংশনটি ব্যবহার করবেন?",
            "answerOptions": [
                { "text": "TODAY()", "textBn": "TODAY()", "rationale": "TODAY() returns the current date but doesn't calculate differences.", "rationaleBn": "TODAY() বর্তমান তারিখ ফেরত দেয় কিন্তু পার্থক্য গণনা করে না।", "isCorrect": false },
                { "text": "DATEDIF()", "textBn": "DATEDIF()", "rationale": "DATEDIF calculates the number of days, months, or years between two dates, making it perfect for this task.", "rationaleBn": "DATEDIF দুটি তারিখের মধ্যে দিন, মাস বা বছরের সংখ্যা গণনা করে, যা এই কাজের জন্য এটিকে নিখুঁত করে তোলে।", "isCorrect": true },
                { "text": "YEAR()", "textBn": "YEAR()", "rationale": "YEAR() extracts the year from a date.", "rationaleBn": "YEAR() একটি তারিখ থেকে বছর বের করে।", "isCorrect": false },
                { "text": "DAYS()", "textBn": "DAYS()", "rationale": "DAYS() calculates the number of days between two dates, not years.", "rationaleBn": "DAYS() দুটি তারিখের মধ্যে দিনের সংখ্যা গণনা করে, বছরের নয়।", "isCorrect": false }
            ]
        },
        {
            "question": "Which logical function would you use if you want to check if a number is greater than 10 AND less than 20?",
            "questionBn": "আপনি যদি একটি সংখ্যা 10 এর চেয়ে বড় এবং 20 এর চেয়ে ছোট কিনা তা পরীক্ষা করতে চান তবে আপনি কোন লজিক্যাল ফাংশনটি ব্যবহার করবেন?",
            "answerOptions": [
                { "text": "OR()", "textBn": "OR()", "rationale": "OR() would be true if the number is >10 OR <20, which is always true.", "rationaleBn": "OR() সত্য হবে যদি সংখ্যাটি >10 বা <20 হয়, যা সর্বদা সত্য।", "isCorrect": false },
                { "text": "IF()", "textBn": "IF()", "rationale": "IF() is for performing a logical test, but it does not combine multiple conditions itself.", "rationaleBn": "IF() একটি লজিক্যাল পরীক্ষা সম্পাদনের জন্য, কিন্তু এটি নিজেই একাধিক শর্ত একত্রিত করে না।", "isCorrect": false },
                { "text": "NOT()", "textBn": "NOT()", "rationale": "NOT() reverses a logical value.", "rationaleBn": "NOT() একটি লজিক্যাল মানকে উল্টে দেয়।", "isCorrect": false },
                { "text": "AND()", "textBn": "AND()", "rationale": "The AND() function is used to check if all given conditions are true, which is what is required here.", "rationaleBn": "AND() ফাংশনটি সমস্ত প্রদত্ত শর্ত সত্য কিনা তা পরীক্ষা করার জন্য ব্যবহৃত হয়, যা এখানে প্রয়োজন।", "isCorrect": true }
            ]
        },
        {
            "question": "What does the formula `=LEFT('Excel Basics', 5)` return?",
            "questionBn": "ফর্মুলা `=LEFT('Excel Basics', 5)` কী ফেরত দেয়?",
            "answerOptions": [
                { "text": "Basics", "textBn": "বেসিকস", "rationale": "This would be part of a MID() or RIGHT() function.", "rationaleBn": "এটি একটি MID() বা RIGHT() ফাংশনের অংশ হবে।", "isCorrect": false },
                { "text": "Excel", "textBn": "এক্সেল", "rationale": "LEFT() extracts the first specified number of characters from a text string. The first five characters of 'Excel Basics' are 'Excel'.", "rationaleBn": "LEFT() একটি টেক্সট স্ট্রিং থেকে প্রথম নির্দিষ্ট সংখ্যক অক্ষর বের করে। 'Excel Basics' এর প্রথম পাঁচটি অক্ষর হলো 'Excel'।", "isCorrect": true },
                { "text": "Basics", "textBn": "বেসিকস", "rationale": "This would be part of a MID() or RIGHT() function.", "rationaleBn": "এটি একটি MID() বা RIGHT() ফাংশনের অংশ হবে।", "isCorrect": false },
                { "text": "Excel Basics", "textBn": "এক্সেল বেসিকস", "rationale": "This would be the full string.", "rationaleBn": "এটি সম্পূর্ণ স্ট্রিং হবে।", "isCorrect": false }
            ]
        },
        {
            "question": "The function `TODAY()` returns:",
            "questionBn": "ফাংশন `TODAY()` কী ফেরত দেয়?",
            "answerOptions": [
                { "text": "The current date and time.", "textBn": "বর্তমান তারিখ এবং সময়।", "rationale": "NOW() returns the current date and time.", "rationaleBn": "NOW() বর্তমান তারিখ এবং সময় ফেরত দেয়।", "isCorrect": false },
                { "text": "The current date, with no time.", "textBn": "বর্তমান তারিখ, কোনো সময় ছাড়া।", "rationale": "TODAY() returns the current date and is updated every time the workbook is opened or recalculated.", "rationaleBn": "TODAY() বর্তমান তারিখ ফেরত দেয় এবং প্রতিবার ওয়ার্কবুক খোলা বা পুনরায় গণনা করা হলে আপডেট হয়।", "isCorrect": true },
                { "text": "A fixed date from when the workbook was last saved.", "textBn": "ওয়ার্কবুকটি শেষবার সংরক্ষণ করার সময় থেকে একটি নির্দিষ্ট তারিখ।", "rationale": "TODAY() is a volatile function that updates.", "rationaleBn": "TODAY() হলো একটি অস্থির ফাংশন যা আপডেট হয়।", "isCorrect": false },
                { "text": "The current time only.", "textBn": "শুধুমাত্র বর্তমান সময়।", "rationale": "This is incorrect. This function returns the date.", "rationaleBn": "এটি ভুল। এই ফাংশনটি তারিখ ফেরত দেয়।", "isCorrect": false }
            ]
        },
        {
            "question": "What does the formula `=MID('Excel is fun', 8, 2)` return?",
            "questionBn": "ফর্মুলা `=MID('Excel is fun', 8, 2)` কী ফেরত দেয়?",
            "answerOptions": [
                { "text": "fun", "textBn": "ফান", "rationale": "The start position is 8 and the number of characters is 2, so this is incorrect.", "rationaleBn": "শুরুর অবস্থান 8 এবং অক্ষরের সংখ্যা 2, তাই এটি ভুল।", "isCorrect": false },
                { "text": "is", "textBn": "ইজ", "rationale": "The 8th character is 'i', and the function extracts two characters from there.", "rationaleBn": "8ম অক্ষরটি হলো 'i', এবং ফাংশনটি সেখান থেকে দুটি অক্ষর বের করে।", "isCorrect": true },
                { "text": "is ", "textBn": "ইজ ", "rationale": "The 8th character is 'i' and the 9th is 's', so it will not include a space at the end.", "rationaleBn": "8ম অক্ষরটি হলো 'i' এবং 9মটি হলো 's', তাই এটি শেষে একটি স্পেস অন্তর্ভুক্ত করবে না।", "isCorrect": false },
                { "text": "Ex", "textBn": "এক্স", "rationale": "This would be from the LEFT() function.", "rationaleBn": "এটি LEFT() ফাংশন থেকে হবে।", "isCorrect": false }
            ]
        },
        {
            "question": "Which of these functions counts cells that meet a single criterion?",
            "questionBn": "এই ফাংশনগুলির মধ্যে কোনটি একটি একক মানদণ্ড পূরণ করে এমন সেলগুলি গণনা করে?",
            "answerOptions": [
                { "text": "COUNT()", "textBn": "COUNT()", "rationale": "COUNT counts cells with numbers, not based on a criterion.", "rationaleBn": "COUNT একটি মানদণ্ডের উপর ভিত্তি করে নয়, সংখ্যা সহ সেলগুলি গণনা করে।", "isCorrect": false },
                { "text": "COUNTIF()", "textBn": "COUNTIF()", "rationale": "COUNTIF is specifically designed to count cells within a range that meet a given condition.", "rationaleBn": "COUNTIF একটি প্রদত্ত শর্ত পূরণ করে এমন একটি পরিসরের মধ্যে সেলগুলি গণনা করার জন্য বিশেষভাবে ডিজাইন করা হয়েছে।", "isCorrect": true },
                { "text": "SUMIF()", "textBn": "SUMIF()", "rationale": "SUMIF adds up values based on a single criterion, it does not count.", "rationaleBn": "SUMIF একটি একক মানদণ্ডের উপর ভিত্তি করে মান যোগ করে, এটি গণনা করে না।", "isCorrect": false },
                { "text": "COUNTIFS()", "textBn": "COUNTIFS()", "rationale": "COUNTIFS counts cells that meet multiple criteria.", "rationaleBn": "COUNTIFS একাধিক মানদণ্ড পূরণ করে এমন সেলগুলি গণনা করে।", "isCorrect": false }
            ]
        },
        {
            "question": "The formula `=DATEDIF(A1, B1, 'y')` is used to:",
            "questionBn": "ফর্মুলা `=DATEDIF(A1, B1, 'y')` কীসের জন্য ব্যবহৃত হয়?",
            "answerOptions": [
                { "text": "Calculate the number of days between two dates.", "textBn": "দুটি তারিখের মধ্যে দিনের সংখ্যা গণনা করা।", "rationale": "The third argument for days is 'd'.", "rationaleBn": "দিনের জন্য তৃতীয় আর্গুমেন্ট হলো 'd'।", "isCorrect": false },
                { "text": "Calculate the number of months between two dates.", "textBn": "দুটি তারিখের মধ্যে মাসের সংখ্যা গণনা করা।", "rationale": "The third argument for months is 'm'.", "rationaleBn": "মাসের জন্য তৃতীয় আর্গুমেন্ট হলো 'm'।", "isCorrect": false },
                { "text": "Calculate the number of years between two dates.", "textBn": "দুটি তারিখের মধ্যে বছরের সংখ্যা গণনা করা।", "rationale": "The 'y' argument returns the number of full years between the two dates.", "rationaleBn": "'y' আর্গুমেন্টটি দুটি তারিখের মধ্যে পূর্ণ বছরের সংখ্যা ফেরত দেয়।", "isCorrect": true },
                { "text": "Calculate the day of the year.", "textBn": "বছরের দিন গণনা করা।", "rationale": "The DAY() function is used for this.", "rationaleBn": "DAY() ফাংশনটি এর জন্য ব্যবহৃত হয়।", "isCorrect": false }
            ]
        },
        {
            "question": "What is the result of `=IF(10>5, 'Yes', 'No')`?",
            "questionBn": "`=IF(10>5, 'Yes', 'No')` এর ফলাফল কী?",
            "answerOptions": [
                { "text": "No", "textBn": "নো", "rationale": "The logical test `10 > 5` is true.", "rationaleBn": "লজিক্যাল পরীক্ষা `10 > 5` সত্য।", "isCorrect": false },
                { "text": "Yes", "textBn": "ইয়েস", "rationale": "The logical test `10 > 5` is true, so the formula returns the `value_if_true` argument, which is 'Yes'.", "rationaleBn": "লজিক্যাল পরীক্ষা `10 > 5` সত্য, তাই ফর্মুলাটি `value_if_true` আর্গুমেন্ট ফেরত দেয়, যা 'Yes'।", "isCorrect": true },
                { "text": "10>5", "textBn": "10>5", "rationale": "The formula returns the result of the logical test, not the test itself.", "rationaleBn": "ফর্মুলাটি লজিক্যাল পরীক্ষার ফলাফল ফেরত দেয়, পরীক্ষাটি নয়।", "isCorrect": false },
                { "text": "Error", "textBn": "এরর", "rationale": "The formula is correctly written.", "rationaleBn": "ফর্মুলাটি সঠিকভাবে লেখা হয়েছে।", "isCorrect": false }
            ]
        },
        {
            "question": "Which function would you use to get the last 3 characters from a text string in cell A1?",
            "questionBn": "A1 সেলের একটি টেক্সট স্ট্রিং থেকে শেষ 3টি অক্ষর পেতে আপনি কোন ফাংশনটি ব্যবহার করবেন?",
            "answerOptions": [
                { "text": "LEFT()", "textBn": "LEFT()", "rationale": "LEFT() extracts characters from the beginning.", "rationaleBn": "LEFT() শুরু থেকে অক্ষর বের করে।", "isCorrect": false },
                { "text": "MID()", "textBn": "MID()", "rationale": "MID() extracts characters from the middle.", "rationaleBn": "MID() মাঝখান থেকে অক্ষর বের করে।", "isCorrect": false },
                { "text": "RIGHT()", "textBn": "RIGHT()", "rationale": "RIGHT() extracts the specified number of characters from the end of a text string.", "rationaleBn": "RIGHT() একটি টেক্সট স্ট্রিং এর শেষ থেকে নির্দিষ্ট সংখ্যক অক্ষর বের করে।", "isCorrect": true },
                { "text": "LAST()", "textBn": "LAST()", "rationale": "LAST() is not a valid Excel function.", "rationaleBn": "LAST() একটি বৈধ এক্সেল ফাংশন নয়।", "isCorrect": false }
            ]
        },
        {
            "question": "The formula `=COUNTIF(A1:A10, \"Complete\")` will count the number of cells that:",
            "questionBn": "ফর্মুলা `=COUNTIF(A1:A10, \"Complete\")` কোন সেলগুলির সংখ্যা গণনা করবে?",
            "answerOptions": [
                { "text": "Are not empty.", "textBn": "খালি নয়।", "rationale": "COUNTA() would count all non-empty cells.", "rationaleBn": "COUNTA() সমস্ত খালি নয় এমন সেল গণনা করবে।", "isCorrect": false },
                { "text": "Contain the text 'Complete'.", "textBn": "'Complete' টেক্সট ধারণ করে।", "rationale": "The `COUNTIF` function counts cells that match a specific text string.", "rationaleBn": "`COUNTIF` ফাংশনটি একটি নির্দিষ্ট টেক্সট স্ট্রিং-এর সাথে মেলে এমন সেলগুলি গণনা করে।", "isCorrect": true },
                { "text": "Contain any text.", "textBn": "যেকোনো টেক্সট ধারণ করে।", "rationale": "COUNTIF would need a wildcard (`*`) to count any text.", "rationaleBn": "যেকোনো টেক্সট গণনা করার জন্য COUNTIF এর একটি ওয়াইল্ডকার্ড (`*`) প্রয়োজন হবে।", "isCorrect": false },
                { "text": "Contain numbers.", "textBn": "সংখ্যা ধারণ করে।", "rationale": "COUNT() is used for counting numbers.", "rationaleBn": "COUNT() সংখ্যা গণনা করার জন্য ব্যবহৃত হয়।", "isCorrect": false }
            ]
        },
        {
            "question": "What is the result of `=OR(FALSE, TRUE, FALSE)`?",
            "questionBn": "`=OR(FALSE, TRUE, FALSE)` এর ফলাফল কী?",
            "answerOptions": [
                { "text": "FALSE", "textBn": "FALSE", "rationale": "The OR function returns TRUE if at least one of the arguments is TRUE.", "rationaleBn": "OR ফাংশনটি TRUE ফেরত দেয় যদি অন্তত একটি আর্গুমেন্ট TRUE হয়।", "isCorrect": false },
                { "text": "TRUE", "textBn": "TRUE", "rationale": "Since one of the arguments is TRUE, the OR function returns TRUE.", "rationaleBn": "যেহেতু একটি আর্গুমেন্ট TRUE, তাই OR ফাংশনটি TRUE ফেরত দেয়।", "isCorrect": true },
                { "text": "Error", "textBn": "এরর", "rationale": "The syntax is correct.", "rationaleBn": "সিনট্যাক্স সঠিক।", "isCorrect": false },
                { "text": "0", "textBn": "0", "rationale": "The result is a logical value, not a number.", "rationaleBn": "ফলাফলটি একটি লজিক্যাল মান, সংখ্যা নয়।", "isCorrect": false }
            ]
        },
        {
            "question": "What does the formula `='Text' & ' ' & 'Concatenated'` return?",
            "questionBn": "ফর্মুলা `='Text' & ' ' & 'Concatenated'` কী ফেরত দেয়?",
            "answerOptions": [
                { "text": "Text Concatenated", "textBn": "টেক্সট কনক্যাটিনেটেড", "rationale": "The '&' operator concatenates (joins) text strings. The formula joins 'Text', a space, and 'Concatenated'.", "rationaleBn": "'&' অপারেটর টেক্সট স্ট্রিং সংযুক্ত করে। ফর্মুলাটি 'Text', একটি স্পেস এবং 'Concatenated' যোগ করে।", "isCorrect": true },
                { "text": "TextConcatenated", "textBn": "টেক্সটকনক্যাটিনেটেড", "rationale": "The formula includes a space between the words.", "rationaleBn": "ফর্মুলাটি শব্দগুলির মধ্যে একটি স্পেস অন্তর্ভুক্ত করে।", "isCorrect": false },
                { "text": "Error", "textBn": "এরর", "rationale": "The syntax is correct for concatenation.", "rationaleBn": "সংযোজনের জন্য সিনট্যাক্স সঠিক।", "isCorrect": false },
                { "text": "Text", "textBn": "টেক্সট", "rationale": "The formula concatenates all parts.", "rationaleBn": "ফর্মুলাটি সমস্ত অংশ সংযুক্ত করে।", "isCorrect": false }
            ]
        },
        {
            "question": "To get the first 4 characters from a text string in cell A1, which formula is the most efficient?",
            "questionBn": "A1 সেলের একটি টেক্সট স্ট্রিং থেকে প্রথম 4টি অক্ষর পেতে, কোন ফর্মুলাটি সবচেয়ে কার্যকরী?",
            "answerOptions": [
                { "text": "=LEFT(A1, 4)", "textBn": "=LEFT(A1, 4)", "rationale": "The LEFT() function is specifically designed to extract characters from the beginning of a string.", "rationaleBn": "LEFT() ফাংশনটি বিশেষভাবে একটি স্ট্রিং এর শুরু থেকে অক্ষর বের করার জন্য ডিজাইন করা হয়েছে।", "isCorrect": true },
                { "text": "=MID(A1, 1, 4)", "textBn": "=MID(A1, 1, 4)", "rationale": "This formula also works, but LEFT() is a more direct and concise solution for this specific task.", "rationaleBn": "এই ফর্মুলাটিও কাজ করে, কিন্তু এই নির্দিষ্ট কাজের জন্য LEFT() একটি আরও সরাসরি এবং সংক্ষিপ্ত সমাধান।", "isCorrect": false },
                { "text": "=RIGHT(A1, 4)", "textBn": "=RIGHT(A1, 4)", "rationale": "RIGHT() extracts characters from the end of a string.", "rationaleBn": "RIGHT() একটি স্ট্রিং এর শেষ থেকে অক্ষর বের করে।", "isCorrect": false },
                { "text": "=EXTRACT(A1, 1, 4)", "textBn": "=EXTRACT(A1, 1, 4)", "rationale": "EXTRACT() is not a valid Excel function.", "rationaleBn": "EXTRACT() একটি বৈধ এক্সেল ফাংশন নয়।", "isCorrect": false }
            ]
        },
        {
            "question": "What is the purpose of the `COUNTIF()` function?",
            "questionBn": "`COUNTIF()` ফাংশনের উদ্দেশ্য কী?",
            "answerOptions": [
                { "text": "To count cells that contain text.", "textBn": "টেক্সট ধারণকারী সেলগুলি গণনা করা।", "rationale": "COUNTA() counts all non-empty cells, including text.", "rationaleBn": "COUNTA() সমস্ত খালি নয় এমন সেলগুলি গণনা করে, টেক্সট সহ।", "isCorrect": false },
                { "text": "To count cells that contain numbers.", "textBn": "সংখ্যা ধারণকারী সেলগুলি গণনা করা।", "rationale": "COUNT() is used for this purpose.", "rationaleBn": "COUNT() এই উদ্দেশ্যে ব্যবহৃত হয়।", "isCorrect": false },
                { "text": "To count cells that match a single specified criterion.", "textBn": "একটি একক নির্দিষ্ট মানদণ্ডের সাথে মেলে এমন সেলগুলি গণনা করা।", "rationale": "The 'IF' in the function name indicates that it counts based on a condition.", "rationaleBn": "ফাংশনের নামে 'IF' নির্দেশ করে যে এটি একটি শর্তের উপর ভিত্তি করে গণনা করে।", "isCorrect": true },
                { "text": "To count cells that match multiple criteria.", "textBn": "একাধিক মানদণ্ডের সাথে মেলে এমন সেলগুলি গণনা করা।", "rationale": "COUNTIFS() is used for this purpose.", "rationaleBn": "COUNTIFS() এই উদ্দেশ্যে ব্যবহৃত হয়।", "isCorrect": false }
            ]
        },
        {
            "question": "If cell A1 contains 'Product_123', what is the result of `=LEN(A1)`?",
            "questionBn": "যদি A1 সেলে 'Product_123' থাকে, তাহলে `=LEN(A1)` এর ফলাফল কী?",
            "answerOptions": [
                { "text": "10", "textBn": "10", "rationale": "The length is 10, counting all characters including the underscore.", "rationaleBn": "আন্ডারস্কোর সহ সমস্ত অক্ষর গণনা করে দৈর্ঘ্য 10।", "isCorrect": false },
                { "text": "11", "textBn": "11", "rationale": "The string 'Product_123' has 11 characters (P-r-o-d-u-c-t-_-1-2-3).", "rationaleBn": "'Product_123' স্ট্রিংটিতে 11টি অক্ষর আছে (P-r-o-d-u-c-t-_-1-2-3)।", "isCorrect": true },
                { "text": "9", "textBn": "9", "rationale": "This would be the length without the underscore and digits.", "rationaleBn": "এটি আন্ডারস্কোর এবং সংখ্যা ছাড়া দৈর্ঘ্য হবে।", "isCorrect": false },
                { "text": "Product", "textBn": "প্রোডাক্ট", "rationale": "The function returns a number, not text.", "rationaleBn": "ফাংশনটি একটি সংখ্যা ফেরত দেয়, টেক্সট নয়।", "isCorrect": false }
            ]
        },
        {
            "question": "To create a formula that always references cell C5, even when copied to other cells, how would you write the reference?",
            "questionBn": "একটি ফর্মুলা তৈরি করতে যা সবসময় C5 সেলকে রেফারেন্স করবে, এমনকি অন্যান্য সেলে কপি করা হলেও, আপনি রেফারেন্সটি কীভাবে লিখবেন?",
            "answerOptions": [
                { "text": "C5", "textBn": "C5", "rationale": "C5 is a relative reference and would change when copied.", "rationaleBn": "C5 একটি রিলেটিভ রেফারেন্স এবং কপি করা হলে পরিবর্তিত হবে।", "isCorrect": false },
                { "text": "$C$5", "textBn": "$C$5", "rationale": "Adding dollar signs before both the column letter and row number creates an absolute reference, fixing it when copied.", "rationaleBn": "কলামের অক্ষর এবং সারির সংখ্যার উভয়টির আগে ডলার সাইন যোগ করলে একটি অ্যাবসোলিউট রেফারেন্স তৈরি হয়, যা কপি করা হলে এটি স্থির থাকে।", "isCorrect": true },
                { "text": "C$5", "textBn": "C$5", "rationale": "C$5 is a mixed reference where the row is absolute, but the column is relative.", "rationaleBn": "C$5 একটি মিশ্র রেফারেন্স যেখানে সারিটি অ্যাবসোলিউট, কিন্তু কলামটি রিলেটিভ।", "isCorrect": false },
                { "text": "$C5", "textBn": "$C5", "rationale": "$C5 is a mixed reference where the column is absolute, but the row is relative.", "rationaleBn": "$C5 একটি মিশ্র রেফারেন্স যেখানে কলামটি অ্যাবসোলিউট, কিন্তু সারিটি রিলেটিভ।", "isCorrect": false }
            ]
        },

        // Week 4: Data Validation & Tables
        {
            "question": "What is the primary benefit of converting a range of data into an **Excel Table**?",
            "questionBn": "ডেটার একটি পরিসরকে একটি **এক্সেল টেবিলে** রূপান্তর করার প্রধান সুবিধা কী?",
            "answerOptions": [
                { "text": "It automatically changes the font and color of the data.", "textBn": "এটি স্বয়ংক্রিয়ভাবে ডেটার ফন্ট এবং রঙ পরিবর্তন করে।", "rationale": "While tables apply default formatting, their primary benefit is not just aesthetic.", "rationaleBn": "টেবিলগুলি ডিফল্ট ফরম্যাটিং প্রয়োগ করলেও, তাদের প্রাথমিক সুবিধা কেবল নান্দনিক নয়।", "isCorrect": false },
                { "text": "It allows you to perform calculations directly within the table cells without formulas.", "textBn": "এটি আপনাকে ফর্মুলা ছাড়াই সরাসরি টেবিলের সেলগুলির মধ্যে গণনা সম্পাদন করতে দেয়।", "rationale": "Formulas are still needed for calculations within tables.", "rationaleBn": "টেবিলের মধ্যে গণনার জন্য এখনও ফর্মুলা প্রয়োজন।", "isCorrect": false },
                { "text": "It provides built-in filtering, sorting, and automatic formula extension.","textBn": "", "rationale": "Converting to an Excel Table automatically enables features like filtering, sorting on headers, and dynamic formula extension for new rows.", "rationaleBn": "একটি এক্সেল টেবিলে রূপান্তর করলে স্বয়ংক্রিয়ভাবে ফিল্টারিং, হেডারে সাজানো এবং নতুন সারির জন্য গতিশীল ফর্মুলা এক্সটেনশনের মতো বৈশিষ্ট্যগুলি সক্ষম হয়।", "isCorrect": true },
                { "text": "It restricts data entry to only numbers and text.", "textBn": "এটি ডেটা এন্ট্রি শুধুমাত্র সংখ্যা এবং টেক্সটে সীমাবদ্ধ করে।", "rationale": "Data validation restricts input, not the table feature itself.", "rationaleBn": "ডেটা ভ্যালিডেশন ইনপুট সীমাবদ্ধ করে, টেবিল বৈশিষ্ট্য নিজেই নয়।", "isCorrect": false }
            ]
        },
        {
            "question": "To create a drop-down list in a cell that allows users to select from a predefined list of options, which Excel feature should you use?",
            "questionBn": "একটি সেলে একটি ড্রপ-ডাউন তালিকা তৈরি করতে যা ব্যবহারকারীদের পূর্বনির্ধারিত বিকল্পগুলির তালিকা থেকে নির্বাচন করতে দেয়, আপনার কোন এক্সেল বৈশিষ্ট্য ব্যবহার করা উচিত?",
            "answerOptions": [
                { "text": "Conditional Formatting", "textBn": "শর্তাধীন ফরম্যাটিং", "rationale": "Conditional formatting changes cell appearance based on rules, it doesn't create input controls like drop-down lists.", "rationaleBn": "শর্তাধীন ফরম্যাটিং নিয়মের উপর ভিত্তি করে সেলের চেহারা পরিবর্তন করে, এটি ড্রপ-ডাউন তালিকার মতো ইনপুট নিয়ন্ত্রণ তৈরি করে না।", "isCorrect": false },
                { "text": "Data Validation", "textBn": "ডেটা ভ্যালিডেশন", "rationale": "Data Validation is the correct feature to restrict data entry to a predefined list, creating a drop-down menu in the cell.", "rationaleBn": "ডেটা ভ্যালিডেশন হলো একটি পূর্বনির্ধারিত তালিকায় ডেটা এন্ট্রি সীমাবদ্ধ করার সঠিক বৈশিষ্ট্য, যা সেলে একটি ড্রপ-ডাউন মেনু তৈরি করে।", "isCorrect": true },
                { "text": "Form Controls", "textBn": "ফর্ম কন্ট্রোলস", "rationale": "Form Controls (from the Developer tab) can include combo boxes, but Data Validation is the more common and simpler method for basic in-cell drop-downs.", "rationaleBn": "ফর্ম কন্ট্রোলস (ডেভেলপার ট্যাব থেকে) কম্বো বক্স অন্তর্ভুক্ত করতে পারে, তবে ডেটা ভ্যালিডেশন হলো মৌলিক ইন-সেল ড্রপ-ডাউনগুলির জন্য আরও সাধারণ এবং সহজ পদ্ধতি।", "isCorrect": false },
                { "text": "SmartArt", "textBn": "স্মার্টআর্ট", "rationale": "SmartArt is used for creating visual diagrams and flowcharts, not for data input validation.", "rationaleBn": "স্মার্টআর্ট ভিজ্যুয়াল ডায়াগ্রাম এবং ফ্লোচার্ট তৈরি করার জন্য ব্যবহৃত হয়, ডেটা ইনপুট ভ্যালিডেশনের জন্য নয়।", "isCorrect": false }
            ]
        },
        {
            "question": "You have a list of duplicate names. Which feature would you use to quickly remove all but the first occurrence of each name?",
            "questionBn": "আপনার কাছে ডুপ্লিকেট নামের একটি তালিকা আছে। প্রতিটি নামের প্রথমটি বাদে সবগুলি দ্রুত সরাতে আপনি কোন বৈশিষ্ট্য ব্যবহার করবেন?",
            "answerOptions": [
                { "text": "Conditional Formatting", "textBn": "শর্তাধীন ফরম্যাটিং", "rationale": "Conditional formatting highlights duplicates but doesn't remove them.", "rationaleBn": "শর্তাধীন ফরম্যাটিং ডুপ্লিকেট হাইলাইট করে কিন্তু সেগুলিকে সরায় না।", "isCorrect": false },
                { "text": "Text to Columns", "textBn": "টেক্সট টু কলামস", "rationale": "Text to Columns separates data within a cell into multiple columns.", "rationaleBn": "টেক্সট টু কলামস একটি সেলের মধ্যে ডেটা একাধিক কলামে বিভক্ত করে।", "isCorrect": false },
                { "text": "Remove Duplicates", "textBn": "ডুপ্লিকেট সরান", "rationale": "The 'Remove Duplicates' feature is specifically designed to eliminate redundant rows based on selected columns.", "rationaleBn": "'ডুপ্লিকেট সরান' বৈশিষ্ট্যটি নির্বাচিত কলামগুলির উপর ভিত্তি করে অপ্রয়োজনীয় সারিগুলি নির্মূল করার জন্য বিশেষভাবে ডিজাইন করা হয়েছে।", "isCorrect": true },
                { "text": "Flash Fill", "textBn": "ফ্ল্যাশ ফিল", "rationale": "Flash Fill automatically fills data based on a pattern, it doesn't remove duplicates.", "rationaleBn": "ফ্ল্যাশ ফিল একটি প্যাটার্নের উপর ভিত্তি করে স্বয়ংক্রিয়ভাবে ডেটা পূরণ করে, এটি ডুপ্লিকেট সরায় না।", "isCorrect": false }
            ]
        },
        {
            "question": "What does a **Filter** do to a dataset?",
            "questionBn": "একটি ডেটাসেটে একটি **ফিল্টার** কী করে?",
            "answerOptions": [
                { "text": "Rearranges the data based on a specific order.", "textBn": "একটি নির্দিষ্ট ক্রমের উপর ভিত্তি করে ডেটা পুনরায় সাজানো।", "rationale": "Sorting rearranges data.", "rationaleBn": "সাজানো ডেটা পুনরায় সাজায়।", "isCorrect": false },
                { "text": "Removes data from the worksheet permanently.", "textBn": "ওয়ার্কশীট থেকে ডেটা স্থায়ীভাবে সরিয়ে দেয়।", "rationale": "Filtering hides data; it does not remove it.", "rationaleBn": "ফিল্টারিং ডেটা লুকিয়ে রাখে; এটি সরিয়ে দেয় না।", "isCorrect": false },
                { "text": "Hides rows that do not meet certain criteria.", "textBn": "নির্দিষ্ট মানদণ্ড পূরণ করে না এমন সারিগুলি লুকিয়ে রাখে।", "rationale": "The primary function of a filter is to hide rows that do not match the criteria you set, while keeping the others visible.", "rationaleBn": "একটি ফিল্টারের প্রধান কাজ হলো আপনার সেট করা মানদণ্ডের সাথে মেলে না এমন সারিগুলি লুকিয়ে রাখা, অন্যগুলি দৃশ্যমান রাখা।", "isCorrect": true },
                { "text": "Adds a new column to the dataset.", "textBn": "ডেটাসেটে একটি নতুন কলাম যোগ করা।", "rationale": "This is a manual action, not part of filtering.", "rationaleBn": "এটি একটি ম্যানুয়াল কাজ, ফিল্টারিংয়ের অংশ নয়।", "isCorrect": false }
            ]
        },
        {
            "question": "Which tab contains the **Data Validation** feature?",
            "questionBn": "কোন ট্যাবে **ডেটা ভ্যালিডেশন** বৈশিষ্ট্যটি থাকে?",
            "answerOptions": [
                { "text": "Home", "textBn": "হোম", "rationale": "The Home tab is for general formatting and editing.", "rationaleBn": "হোম ট্যাব সাধারণ ফরম্যাটিং এবং সম্পাদনার জন্য।", "isCorrect": false },
                { "text": "Insert", "textBn": "ইনসার্ট", "rationale": "The Insert tab is for adding charts, tables, and images.", "rationaleBn": "ইনসার্ট ট্যাব চার্ট, টেবিল এবং ছবি যোগ করার জন্য।", "isCorrect": false },
                { "text": "Data", "textBn": "ডেটা", "rationale": "Data Validation is a crucial tool for data management and is located in the 'Data Tools' group of the Data tab.", "rationaleBn": "ডেটা ভ্যালিডেশন ডেটা ব্যবস্থাপনার জন্য একটি গুরুত্বপূর্ণ টুল এবং এটি ডেটা ট্যাবের 'ডেটা টুলস' গ্রুপে অবস্থিত।", "isCorrect": true },
                { "text": "Formulas", "textBn": "ফর্মুলাস", "rationale": "The Formulas tab is for function libraries and formula auditing.", "rationaleBn": "ফর্মুলাস ট্যাব ফাংশন লাইব্রেরি এবং ফর্মুলা নিরীক্ষণের জন্য।", "isCorrect": false }
            ]
        },
        {
            "question": "Which of these is the shortcut to apply a filter to a selected range of data?",
            "questionBn": "এইগুলির মধ্যে কোনটি নির্বাচিত ডেটার পরিসরে একটি ফিল্টার প্রয়োগ করার শর্টকাট?",
            "answerOptions": [
                { "text": "Ctrl + T", "textBn": "Ctrl + T", "rationale": "Ctrl + T converts a range to a table, which automatically adds filters.", "rationaleBn": "Ctrl + T একটি পরিসরকে একটি টেবিলে রূপান্তরিত করে, যা স্বয়ংক্রিয়ভাবে ফিল্টার যোগ করে।", "isCorrect": false },
                { "text": "Ctrl + Shift + L", "textBn": "Ctrl + Shift + L", "rationale": "Ctrl + Shift + L is the standard shortcut to apply or remove a filter on a selected range.", "rationaleBn": "Ctrl + Shift + L হলো একটি নির্বাচিত পরিসরে একটি ফিল্টার প্রয়োগ বা সরানোর জন্য স্ট্যান্ডার্ড শর্টকাট।", "isCorrect": true },
                { "text": "Ctrl + F", "textBn": "Ctrl + F", "rationale": "Ctrl + F opens the Find dialog box.", "rationaleBn": "Ctrl + F ফাইন্ড ডায়ালগ বক্স খোলে।", "isCorrect": false },
                { "text": "Alt + F", "textBn": "Alt + F", "rationale": "Alt + F opens the File tab.", "rationaleBn": "Alt + F ফাইল ট্যাব খোলে।", "isCorrect": false }
            ]
        },
        {
            "question": "What is the benefit of a **structured reference** (e.g., `Table1[Sales]`) over a regular cell range (e.g., `C2:C10`)?",
            "questionBn": "একটি নিয়মিত সেল পরিসরের (যেমন, `C2:C10`) উপর একটি **স্ট্রাকচারড রেফারেন্স** (যেমন, `Table1[Sales]`) এর সুবিধা কী?",
            "answerOptions": [
                { "text": "It is faster for calculations.", "textBn": "এটি গণনার জন্য দ্রুততর।", "rationale": "The calculation speed is not the primary benefit.", "rationaleBn": "গণনার গতি প্রাথমিক সুবিধা নয়।", "isCorrect": false },
                { "text": "It can be used only in PivotTables.", "textBn": "এটি শুধুমাত্র পিভটটেবলে ব্যবহার করা যেতে পারে।", "rationale": "Structured references can be used in any formula.", "rationaleBn": "স্ট্রাকচারড রেফারেন্স যেকোনো ফর্মুলায় ব্যবহার করা যেতে পারে।", "isCorrect": false },
                { "text": "It automatically adjusts when rows are added or removed from the table.", "textBn": "", "rationale": "Structured references are dynamic and will always refer to the entire column in the table, even as its size changes.", "rationaleBn": "স্ট্রাকচারড রেফারেন্সগুলি গতিশীল এবং টেবিলের পুরো কলামকে সর্বদা রেফার করবে, এমনকি এর আকার পরিবর্তিত হলেও।", "isCorrect": true },
                { "text": "It can only reference the first cell in a column.", "textBn": "এটি শুধুমাত্র একটি কলামের প্রথম সেলকে রেফার করতে পারে।", "rationale": "Structured references refer to the entire column or table.", "rationaleBn": "স্ট্রাকচারড রেফারেন্সগুলি পুরো কলাম বা টেবিলকে রেফার করে।", "isCorrect": false }
            ]
        },
        {
            "question": "When sorting data by two or more columns, what is the best feature to use?",
            "questionBn": "দুই বা ততোধিক কলাম দ্বারা ডেটা সাজানোর সময়, ব্যবহার করার সেরা বৈশিষ্ট্য কোনটি?",
            "answerOptions": [
                { "text": "Applying a basic filter to each column individually.", "textBn": "প্রতিটি কলামে আলাদাভাবে একটি মৌলিক ফিল্টার প্রয়োগ করা।", "rationale": "Filtering hides data, it doesn't sort it by multiple levels.", "rationaleBn": "ফিল্টারিং ডেটা লুকিয়ে রাখে, এটি একাধিক স্তর দ্বারা সাজায় না।", "isCorrect": false },
                { "text": "The 'Custom Sort' feature.", "textBn": "'কাস্টম সর্ট' বৈশিষ্ট্য।", "rationale": "The Custom Sort dialog box allows you to add multiple sorting levels, defining the order of sorting for each column.", "rationaleBn": "কাস্টম সর্ট ডায়ালগ বক্স আপনাকে একাধিক সাজানোর স্তর যোগ করার অনুমতি দেয়, প্রতিটি কলামের জন্য সাজানোর ক্রম সংজ্ঞায়িত করে।", "isCorrect": true },
                { "text": "The 'Sort A to Z' button on the Ribbon.", "textBn": "রিবনে 'সর্ট A to Z' বোতাম।", "rationale": "This button only sorts by a single column at a time.", "rationaleBn": "এই বোতামটি একবারে শুধুমাত্র একটি কলাম দ্বারা সাজায়।", "isCorrect": false },
                { "text": "Using the `SORT()` funct ion.", "textBn": "`SORT()` ফাংশন ব্যবহার করা।", "rationale": "The `SORT()` function is for dynamic array sorting, but the 'Custom Sort' feature is the main tool for manual sorting.", "rationaleBn": "`SORT()` ফাংশনটি গতিশীল অ্যারে সাজানোর জন্য, তবে 'কাস্টম সর্ট' বৈশিষ্ট্যটি ম্যানুয়াল সাজানোর জন্য প্রধান টুল।", "isCorrect": false }
            ]
        },
        {
            "question": "What is an **Input Message** in Data Validation used for?",
            "questionBn": "ডেটা ভ্যালিডেশনে একটি **ইনপুট মেসেজ** কীসের জন্য ব্যবহৃত হয়?",
            "answerOptions": [
                { "text": "To show an error message when invalid data is entered.", "textBn": "অবৈধ ডেটা প্রবেশ করানো হলে একটি ত্রুটির বার্তা দেখানো।", "rationale": "This is the purpose of the 'Error Alert' tab in Data Validation.", "rationaleBn": "এটি ডেটা ভ্যালিডেশনের 'এরর অ্যালার্ট' ট্যাবের উদ্দেশ্য।", "isCorrect": false },
                { "text": "To provide a tooltip or guidance to the user before they enter data.", "textBn": "", "rationale": "The Input Message appears when the cell is selected, giving instructions on what kind of data should be entered.", "rationaleBn": "ইনপুট মেসেজটি সেলটি নির্বাচিত হলে প্রদর্শিত হয়, কী ধরনের ডেটা প্রবেশ করানো উচিত সে সম্পর্কে নির্দেশাবলী দেয়।", "isCorrect": true },
                { "text": "To highlight a cell based on its value.", "textBn": "একটি সেলের মানের উপর ভিত্তি করে এটি হাইলাইট করা।", "rationale": "Conditional Formatting is used for this.", "rationaleBn": "এর জন্য শর্তাধীন ফরম্যাটিং ব্যবহৃত হয়।", "isCorrect": false },
                { "text": "To automatically fill in the cell with a value.", "textBn": "একটি মান দিয়ে স্বয়ংক্রিয়ভাবে সেলটি পূরণ করা।", "rationale": "Flash Fill is used for this.", "rationaleBn": "এর জন্য ফ্ল্যাশ ফিল ব্যবহৃত হয়।", "isCorrect": false }
            ]
        },
        {
            "question": "Which of these is a disadvantage of using a filter?",
            "questionBn": "এইগুলির মধ্যে কোনটি একটি ফিল্টার ব্যবহারের একটি অসুবিধা?",
            "answerOptions": [
                { "text": "It permanently deletes the data that does not meet the criteria.", "textBn": "এটি মানদণ্ড পূরণ করে না এমন ডেটা স্থায়ীভাবে মুছে দেয়।", "rationale": "A filter only hides data, it does not delete it.", "rationaleBn": "একটি ফিল্টার শুধুমাত্র ডেটা লুকিয়ে রাখে, এটি মুছে দেয় না।", "isCorrect": false },
                { "text": "It can only be applied to one column at a time.", "textBn": "এটি একবারে শুধুমাত্র একটি কলামে প্রয়োগ করা যেতে পারে।", "rationale": "A filter can be applied to multiple columns simultaneously.", "rationaleBn": "একটি ফিল্টার একবারে একাধিক কলামে প্রয়োগ করা যেতে পারে।", "isCorrect": false },
                { "text": "It does not re-sort the data, it only hides rows.", "textBn": "", "rationale": "A filter hides rows, but the order of the visible rows remains the same. If you need a new order, you must sort the data separately.", "rationaleBn": "এটি ডেটা পুনরায় সাজায় না, এটি শুধুমাত্র সারিগুলি লুকিয়ে রাখে। আপনার যদি একটি নতুন ক্রম প্রয়োজন হয়, তাহলে আপনাকে আলাদাভাবে ডেটা সাজাতে হবে।", "isCorrect": true },
                { "text": "It is difficult to use for large datasets.", "textBn": "এটি বড় ডেটাসেটের জন্য ব্যবহার করা কঠিন।", "rationale": "Filters are designed specifically to make large datasets easier to manage.", "rationaleBn": "ফিল্টারগুলি বিশেষভাবে বড় ডেটাসেটগুলি পরিচালনা করা সহজ করার জন্য ডিজাইন করা হয়েছে।", "isCorrect": false }
            ]
        }
    ]
};
