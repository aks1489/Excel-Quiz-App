// Define interfaces for type safety
export interface StudentInfo {
    id: string;
    name: string;
}

export interface StudentDataMap {
    [key: string]: string; // Maps student ID (string) to student name (string)
}

// Raw student list string
export const studentListRaw: string = "NYSDB0140-00006Sayani Biswas,NYSDB0140-00007Krish Biswas,NYSDB0140-00009Suvajit Das,NYSDB0140-00011Bipasha Sarkar,NYSDB0140-00013Nishit Adhikary,NYSDB0140-00014Debjyoti Adhikary,NYSDB0140-00015Mamoni Ray,NYSDB0140-00016Sakib Mondal,NYSDB0140-00017Satadru Pal,NYSDB0140-00018Dip Sardar,NYSDB0140-00022Tuhin Debnath,NYSDB0140-00023Anupam Das,NYSDB0140-00026Raktimava Thakur,WB759Y2025E6584635479Binoy Das,WB759Y2025E6584635202Nayan Adhikari,WB759Y2025E6584634886Gopal Sarkar,WB759Y2025E6584634855Pritam Sadhukhan";

/**
 * Parses the raw student list string into an object mapping IDs to names.
 * @param {string} rawList - The comma-separated string of student IDs and names.
 * @returns {StudentDataMap} An object where keys are normalized IDs and values are names.
 */
export const parseStudentList = (rawList: string): StudentDataMap => {
    const students: StudentDataMap = {};
    const entries: string[] = rawList.split(',');
    entries.forEach(entry => {
        const trimmedEntry: string = entry.trim();
        // Regex to find the ID pattern at the beginning of the string
        const idMatch: RegExpMatchArray | null = trimmedEntry.match(/^(NYSDB\d{4}-\d{5}|WB\d{4}Y\d{4}E\d{10})/);
        if (idMatch && idMatch[1]) {
            const id: string = idMatch[1].toUpperCase(); // Normalize ID
            const name: string = trimmedEntry.substring(id.length).trim();
            students[id] = name;
        }
    });
    return students;
};
