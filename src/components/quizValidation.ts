function isStringArray(data: unknown): boolean {
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
export type question = {
	question: string;
	correct: string[];
	incorrect: string[];
}

export type quiz = {
	name: string;
	questions: question[];
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isQuiz(data: any): boolean {
	if (typeof data !== "object" || data === null)
		return false;
	if (typeof data.name !== "string")
		return false;
	if (!Array.isArray(data.questions))
		return false;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	return data.questions.every(function (item: any) { return isQuestion(item); });
}