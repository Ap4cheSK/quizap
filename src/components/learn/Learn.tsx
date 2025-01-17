import { Error } from "../Error";
import { Quiz } from "../quizValidation";

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