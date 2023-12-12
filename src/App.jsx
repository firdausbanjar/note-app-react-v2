import React from "react";
import { Route, Routes, useSearchParams } from "react-router-dom";
import Navigation from "./components/Navigation";
import NotePageWrapper from "./pages/NotePage";
import DetailNotePage from "./pages/DetailNotePage";
import AddNotePage from "./pages/AddNotePage";
import PageNotFound from "./pages/PageNotFound";
import ArchivePageWrapper from "./pages/ArchivePage";

const App = () => {
    return (
        <div className="app-container">
            <header>
                <h1 className="app-title">Note App</h1>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<NotePageWrapper />} />
                    <Route path="/notes/new" element={<AddNotePage />} />
                    <Route path="/archives" element={<ArchivePageWrapper />} />
                    <Route path="/notes/:id" element={<DetailNotePage />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
                <Navigation />
            </main>
        </div>
    );
};

export default App;
