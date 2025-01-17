import { Error } from "../Error";
import { Quiz } from "../index/quizValidation";

function Learn({quizData}: {quizData: Quiz}) {
	if(quizData === undefined) {
		return (
			<Error errNum={601}/>
		);
	}

	return (
		<p>learn</p>
	);
}

export default Learn;