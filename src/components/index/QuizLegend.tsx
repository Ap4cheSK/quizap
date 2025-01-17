function QuizLegend() {
	return (
		<section className="index-quiz-legend">
			<h2>Quiz Modes</h2>
			<section className="legend-item">
				<h3>Test</h3>
				<p>Mode that will generate a random order of questions with randomized order of answers. Correct answer is shown <b>after</b> completing whole test. On the end of quiz you will get a score.</p>
				<ul>
					<li>Random question order</li>
					<li>Random answer order</li>
					<li>Correct answers after answering all questions</li>
					<li>Score after completing quiz</li>
				</ul>
			</section>

			<section className="legend-item">
				<h3>Learning</h3>
				<p>Mode that will generate a random order of questions with randomized order of answers. Correct answer for each question is shown <b>after</b> answering each question. There is no score after completing whole quiz.</p>
				<ul>
					<li>Random question order</li>
					<li>Random answer order</li>
					<li>Correct answers after each question</li>
					<li>No score after completing quiz</li>
				</ul>
			</section>

			<section className="legend-item">
				<h3>Q&A</h3>
				<p>Mode that will show questions in created order. Correct answers <b>are always visible</b>. Primarily designed for verifying quiz after creating it - quick overview of whole quiz. Answers are always in the same order. No scoring.</p>
				<ul>
					<li>Same question order</li>
					<li>Same answer order</li>
					<li>Correct answers always visible</li>
					<li>No score after completing quiz</li>
				</ul>
			</section>
		</section>
	);
}

export default QuizLegend;