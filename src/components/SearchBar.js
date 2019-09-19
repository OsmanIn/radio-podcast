import React, { useState } from 'react';

const SearchPodcast = () => {
    const [name, setName] = useState('');

    const updateName = (e) => {
        setName(e.target.value);
    }

    return (
        <form >
            <input type="text" name="" alt="Search Text" />
            <button>Click</button>
        </form>
    )
}

export default SearchPodcast;