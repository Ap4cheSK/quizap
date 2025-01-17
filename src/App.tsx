import { HashRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Index from "./components/index/Index";
import { Error } from "./components/Error";

import "./css/global.css";
import { useState } from "react";
import { Quiz } from "./components/index/quizValidation";
import Overview from "./components/overview/Overview";

function App() {
	const [quizData, setQuizData] = useState<Quiz>();

	return (
		<>
			<Header/>
			<HashRouter>
				<Routes>
					<Route index path="/" element={<Index setData={setQuizData}/>}/>
					<Route path="/test" element={null}/>
					<Route path="/learn" element={null}/>
					<Route path="/overview" element={<Overview quizData={quizData!}/>}/>
					<Route path="/*" element={<Error errNum={404}/>}/>
					<Route path="*" element={<Error errNum={404}/>}/>
				</Routes>
			</HashRouter>
			<Footer/>
		</>
	)
}

export default App;