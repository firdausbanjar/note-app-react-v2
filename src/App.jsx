import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import NotePageWrapper from './pages/NotePage';
import DetailNotePage from './pages/DetailNotePage';

const App = () => {
	return (
		<div className="app-container">
			<header>
				<h1 className="app-title">Note App</h1>
			</header>
			<main>
				<Routes>
					<Route path="/" element={<NotePageWrapper />} />
					<Route path="/notes/new" element={<></>} />
					<Route path="/archive" element={<></>} />
					<Route path="/notes/:id" element={<DetailNotePage />} />
				</Routes>
				<Navigation />
			</main>
		</div>
	);
};

export default App;
