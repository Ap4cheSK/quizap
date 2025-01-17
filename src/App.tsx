import { HashRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Index from "./components/index/Index";
import { Error } from "./components/Error";

import "./css/global.css";

function App() {
	return (
		<>
			<Header/>
			<HashRouter>
				<Routes>
					<Route index path="/" element={<Index/>}/>
					<Route path="/test" element={null}/>
					<Route path="/*" element={<Error errNum={404}/>}/>
					<Route path="*" element={<Error errNum={404}/>}/>
				</Routes>
			</HashRouter>
			<Footer/>
		</>
	)
}

export default App;