import { useState } from 'react';

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

    function removeEntry(checkDate){
            //var goodEntries = entries.filter((entry) => checkDate !== entry["date"]);
            //console.log("goodEntries");
            //console.log(goodEntries);
            setEntries(entries.filter((entry) => checkDate !== entry["date"]));
        }

    function findEntry(checkDate){
        var value = entries.filter((entry) => checkDate === entry["date"]);
        return value
    }

    function addEntry(e){
        removeEntry(date);
        console.log("entries");
        console.log(entries);

        var item = {"date" : date, "content": content};
        setEntries([...entries, item]);
    }

    function changeDate(e){
        var value = findEntry(e.target.value);
        if(value.length > 0){
            setContent(value[0]["content"]);
        }
        setDate(e.target.value);
    }

    return (
        <div className="dev-diary">
            <header>
                <button id="read">Read</button>
                <button id="write">Write</button>
                <input type="date" id="date" value={date} onChange={changeDate} />
            </header>
            <body>
                <textarea name="content" value={content} onChange={e => setContent(e.target.value)} />
                <button id="save" onClick={addEntry}>Save</button>
                <div>ENTRIES:</div>
                {entries.map((entry) => {
                    return(
                        <div>
                            <div>{entry["date"]}</div>
                            <div>{entry["content"]}</div>
                        </div>
                    );
                })}
            </body>
        </div>
    );
}