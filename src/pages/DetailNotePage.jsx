import React from 'react';
import { useParams } from 'react-router-dom';
import { getNote } from '../utils/local-data';
import { showFormattedDate } from '../utils';

const DetailNotePage = () => {
	const { id } = useParams();
	const note = getNote(id);

	return (
		<div className="note-detail">
			<h2 className="detail-title">{note.title}</h2>
			<p className="detail-date">{showFormattedDate(note.createdAt)}</p>
			<p className="detail-content">{note.body}</p>
		</div>
	);
};

export default DetailNotePage;
