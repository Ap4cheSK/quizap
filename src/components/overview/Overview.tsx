import { Error } from "../Error";
import { question, quiz } from "../quizValidation";
import "../../css/quiz.css";

function Answer({answerText, isCorrect}: {answerText: string; isCorrect: boolean}) {
	if(isCorrect)
		return (
			<div className="answer answer-correct"><b>{answerText}</b></div>
		);

	return (
		<div className="answer">{answerText}</div>
	);
}

function Question({questionData, qIdx}: {questionData: question, qIdx: number}) {
	return (
		<div className="question">
			<h3><b>{qIdx}.</b> {questionData.question}</h3>
			<section className="question-answers">
				{questionData.correct.map((answer) => (
					<Answer answerText={answer} isCorrect={true}/>
				))}
				{questionData.incorrect.map((answer) => (
					<Answer answerText={answer} isCorrect={false}/>
				))}
			</section>
		</div>
	);
}

function Overview({quizData}: {quizData: quiz}) {
	if(quizData === undefined) {
		return (
			<Error errNum={601}/>
		);
	}

	return (
		<main className="overview">
			<h2 className="quiz-name">{quizData.name}</h2>
			<section className="quiz-wrapper">
				{quizData.questions.map((questionData, idx) => (
					<Question key={idx} questionData={questionData} qIdx={idx}/>
				))}
			</section>
		</main>
	);
}

export default Overview;