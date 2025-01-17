import { Error } from "../Error";
import { Quiz } from "../quizValidation";

function Test({quizData}: {quizData: Quiz}) {
	if(quizData === undefined) {
		return (
			<Error errNum={601}/>
		);
	}

	return (
		<p>test</p>
	);
}

export default Test;