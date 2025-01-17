import { Error } from "../Error";
import { Quiz } from "../index/quizValidation";

function Overview({quizData}: {quizData: Quiz}) {
	if(quizData === undefined) {
		return (
			<Error errNum={601}/>
		);
	}

	return (
		<p>overview</p>
	);
}

export default Overview;