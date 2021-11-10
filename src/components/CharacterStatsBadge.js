import React from 'react'

const getBackgroundColor = (status) => {
    if (status === 'Alive') {
        return 'blue';
    }
    if (status === 'Dead') {
        return 'badge-danger';
    }
    return 'badge-light';
}
const CharacterStatsBadge = ({ character_status }) => {

    let badge_class = getBackgroundColor(character_status);

    return (
        <>
            <span className={"badge ml-2 " + badge_class}>{character_status}</span>
        </>
    )
}

export default CharacterStatsBadge
