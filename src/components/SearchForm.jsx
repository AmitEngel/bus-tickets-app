import { createRef } from "react";


function SearchForm(props) {
    const STATES = {
        'AL': 'Alabama',
        'AK': 'Alaska',
        'AZ': 'Arizona',
        'AR': 'Arkansas',
        'CA': 'California',
        'CO': 'Colorado',
        'CT': 'Connecticut',
        'DE': 'Delaware',
        'FL': 'Florida',
        'GA': 'Georgia',
        'HI': 'Hawaii',
        'ID': 'Idaho',
        'IL': 'Illinois',
        'IN': 'Indiana',
        'IA': 'Iowa',
        'KS': 'Kansas',
        'KY': 'Kentucky',
        'LA': 'Louisiana',
        'ME': 'Maine',
        'MD': 'Maryland',
        'MA': 'Massachusetts',
        'MI': 'Michigan',
        'MN': 'Minnesota',
        'MS': 'Mississippi',
        'MO': 'Missouri',
        'MT': 'Montana',
        'NE': 'Nebraska',
        'NV': 'Nevada',
        'NH': 'New Hampshire',
        'NJ': 'New Jersey',
        'NM': 'New Mexico',
        'NY': 'New York',
        'NC': 'North Carolina',
        'ND': 'North Dakota',
        'OH': 'Ohio',
        'OK': 'Oklahoma',
        'OR': 'Oregon',
        'PA': 'Pennsylvania',
        'RI': 'Rhode Island',
        'SC': 'South Carolina',
        'SD': 'South Dakota',
        'TN': 'Tennessee',
        'TX': 'Texas',
        'UT': 'Utah',
        'VT': 'Vermont',
        'VA': 'Virginia',
        'WA': 'Washington',
        'WV': 'West Virginia',
        'WI': 'Wisconsin',
        'WY': 'Wyoming'
    }

    const sourceInputRef = createRef();
    const destinationInputRef = createRef();
    const dateInputRef = createRef();

    const onSearchClick = e => props.onSearchClick({
        source: sourceInputRef.current.value,
        destination: destinationInputRef.current.value,
        date: new Date(dateInputRef.current.value).toDateString()
    });


    return (
        <>
            <label>Source: </label>
            <select ref={sourceInputRef}>
                {Object.entries(STATES).map((s,i) => <option key={i}>{s[1] + ', ' + s[0]}</option>)}
            </select>
            <label> Destination: </label>
            <select ref={destinationInputRef}>
                {Object.entries(STATES).map((s, i) => <option key={i}>{s[1] + ', ' + s[0]}</option>)}
            </select>
            <input type='date' ref={dateInputRef} />
            <button onClick={onSearchClick}>Search</button>
        </>
    );
}

export default SearchForm;