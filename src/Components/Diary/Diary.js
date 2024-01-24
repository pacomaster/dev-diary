import { useState } from 'react';
import './Diary.css';

export default function Diary(){

    var today = new Date();
    var virtualMonth = today.getMonth() + 1; // This is to debug month
    var month = virtualMonth < 10 ? '0' + virtualMonth : virtualMonth;
    var virtualDay = today.getDate(); // This is to debug day
    var day = virtualDay < 10 ? '0' + virtualDay : virtualDay;
    var dateStr = today.getFullYear() + '-' + month + '-' + day;

    const [date, setDate] = useState(dateStr);
    const [content, setContent] = useState('');
    const [entries, setEntries] = useState([]);

    function findEntry(checkDate){
        var value = entries.filter((entry) => checkDate === entry["date"]);
        return value
    }

    function addEntry(){
        var goodEntries = entries.filter((entry) => date !== entry["date"]);
        console.log("entries");
        console.log(entries);

        var item = {"date" : date, "content": content};
        setEntries([...goodEntries, item]);
    }

    function changeDate(e){
        var value = findEntry(e.target.value);
        if(value.length > 0){
            setContent(value[0]["content"]);
        } else {
            setContent('');
        }
        setDate(e.target.value);
    }

    return (
        <div className="dev-diary">
            <body>
                <h1>Dev diary</h1>
                <h4>by pacomaster</h4>
                <div>
                    <input type="date" id="date" value={date} onChange={changeDate} />
                </div>
                <textarea name="content" rows="20" cols="100" value={content} onChange={e => setContent(e.target.value)} />
                <div>
                    <button id="save" type="submit" onClick={addEntry}>Save</button>
                </div>
                <div className="entries-title">ENTRIES:</div>
                <hr className="dotted"/>
                {entries.map((entry) => {
                    return(
                        <div>
                            <div>{entry["date"]}</div>
                            <div>{entry["content"]}</div>
                            <hr className="dotted"/>
                        </div>
                    );
                })}
            </body>
        </div>
    );
}