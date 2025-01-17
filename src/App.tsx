// import { useState } from 'react';

import { HashRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Index from "./components/Index";
import { Error } from "./components/Error";

function App() {
	return (
		<>
			<Header/>
			<main>
				<HashRouter>
					<Routes>
						<Route index path="/" element={<Index/>}/>
						<Route path="/test" element={null}/>
						<Route path="/*" element={<Error errNum={404}/>}/>
						<Route path="*" element={<Error errNum={404}/>}/>
					</Routes>
				</HashRouter>
			</main>
			<Footer/>
		</>
	)
}

export default App;