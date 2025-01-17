// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isStringArray(data: any): boolean {
	if (!Array.isArray(data)) {
		return false;
	}
	return data.every(function (item) {
		return typeof item === "string";
	});
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isQuestion(data: any): boolean {
	if (typeof data !== "object" || data === null)
		return false;
	if (typeof data.question !== "string")
		return false;
	if (!isStringArray(data.correct) || data.correct.length === 0)
		return false;
	if (!isStringArray(data.incorrect))
		return false;
	return true;
}

// EXPORT
export type Question = {
	question: string;
	correct: string[];
	incorrect: string[];
}

export type Quiz = Question[];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isQuiz(data: any): boolean {
	if (!Array.isArray(data))
		return false;
	return data.every(function (item) {return isQuestion(item)});
}