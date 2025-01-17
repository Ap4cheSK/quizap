import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isQuiz, quiz } from "../quizValidation";
import QuizLegend from "./QuizLegend";
import "../../css/index.css";

function Index({setData}: {setData: React.Dispatch<React.SetStateAction<quiz | undefined>>}) {
	const [uploadError, setUploadError] = useState("");
	const [fileContent, setFileContent] = useState<string>("");
	const [isValidQuiz, setIsValidQuiz] = useState(false);
	const navigate = useNavigate();

	function handleUpload(event: React.ChangeEvent<HTMLInputElement>) {
		const file = event.target.files?.[0];
		
		setUploadError("");
		if(file === null) {
			setUploadError("No File Uploaded!");
			return;
		}

		setUploadError("");
		if(file?.type !== "application/json") {
			setUploadError("Invalid File Format!");
			return;
		}

		setUploadError("");
		const reader = new FileReader();

		reader.onload = function(e) {
			const content = e.target?.result;
			if(content) {
				setUploadError("");

				if(content instanceof ArrayBuffer) {
					setUploadError("Invalid or empty file!");
					return;
				}

				setFileContent(content);
			} else
				setUploadError("Invalid or empty file!");
		}

		reader.readAsText(file);
	}

	useEffect(() => {
		if(fileContent === "") {
			return;
		}

		setUploadError("");

		const parsedData = JSON.parse(fileContent);
		if(isQuiz(parsedData)) {
			setIsValidQuiz(true);
			setData(parsedData);
		} else {
			setUploadError("Invalid Quiz Structure!");
			setIsValidQuiz(false);
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [fileContent]);

	function handleQuizMode(quizMode: string) {
		switch (quizMode) {
			case "test":
				setTimeout(function() {navigate("/test")}, 50);
				break;
			case "learn":
				setTimeout(function() {navigate("/learn")}, 50);
				break;
			case "overview":
				setTimeout(function() {navigate("/overview")}, 50);
				break;
			default:
				break;
		}
	}

	function ErrorField({msg}: {msg: string}) {
		return (
			<div className="upload-err">{msg}</div>
		);
	}
	
	function StartQuizMenu() {
		return(
			<>
				<h3>Select Quiz Mode</h3>
				<section className="index-quiz-mode">
					<button onClick={() => handleQuizMode("test")}>Test</button>
					<button onClick={() => handleQuizMode("learn")}>Learning</button>
					<button onClick={() => handleQuizMode("overview")}>Q&A</button>
				</section>
			</>
		);
	}

	return (
		<main className="index-menu">
			<ol>
				<li>Upload <b>valid</b> quiz structure [.json]</li>
				<li>Start quiz selecting quiz mode</li>
			</ol>

			<section>
				<h3>Upload Quiz</h3>
				<input type="file" id="index-json-input" accept=".json" onChange={handleUpload}/>
				{uploadError ? <ErrorField msg={uploadError}/> : ""}
			</section>

			{isValidQuiz ? <StartQuizMenu/> : ""}

			<QuizLegend/>
		</main>
	);
}

export default Index;