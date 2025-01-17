// Libraries
import { useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
// Modules
import { Error } from "./components/Error";
import { quiz } from "./components/quizValidation";
// Components
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Index from "./components/index/Index";
import Overview from "./components/overview/Overview";
import Learn from "./components/learn/Learn";
import Test from "./components/quiz/Test";
// CSS
import "./css/global.css";

function App() {
	const [quizData, setQuizData] = useState<quiz>();

	return (
		<>
			<Header/>
			<HashRouter>
				<Routes>
					<Route index path="/" element={<Index setData={setQuizData}/>}/>
					{/* quiz modes */}
					<Route path="/test" element={<Test quizData={quizData!}/>}/>
					<Route path="/learn" element={<Learn quizData={quizData!}/>}/>
					<Route path="/overview" element={<Overview quizData={quizData!}/>}/>
					{/* error pages */}
					<Route path="/*" element={<Error errNum={404}/>}/>
					<Route path="*" element={<Error errNum={404}/>}/>
				</Routes>
			</HashRouter>
			<Footer/>
		</>
	)
}

export default App;