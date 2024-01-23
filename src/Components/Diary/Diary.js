import { useState } from 'react';

export default function Diary(){

    const [date, setDate] = useState('');
    const [content, setContent] = useState('');
    const [entries, setEntries] = useState([]);

    function addEntry(){
        alert(`You said ${date} to ${content}`);
        setEntries([...entries, content]);
    }

    return (
        <div className="dev-diary">
            <header>
                <button id="read">Read</button>
                <button id="write">Write</button>
                <input type="date" id="date" value={date} onChange={e => setDate(e.target.value)} />
            </header>
            <body>
                <textarea name="content" value={content} onChange={e => setContent(e.target.value)} />
                <button id="save" onClick={addEntry}>Save</button>
                <div>ENTRIES:</div>
                {entries.map((entry) => {
                    return(
                        <div>{entry}</div>
                    );
                })}
            </body>
        </div>
    );
}