import React from 'react';
import Collapsible from '../../containers/Collapsible/Collapsible';
import DatabaseText from '../../containers/DatabaseText/DatabaseText';

function generatePriceMod(rep) {
    const modIsPositive = (rep < -2) ? true : false;

    // price modifier is reputation / 4 and rounded. e.g. 2.75 - 3.5 becomes 3
    const base = Math.abs(rep / 4);
    let priceMod;
    // numbers up to x.5 get rounded down, above x.5 get rounded up
    if (base % 1 <= 0.5) {
        priceMod = Math.floor(base);
    } else {
        priceMod = Math.ceil(base)
    }

    // correct the sign if needed
    priceMod = modIsPositive ? `+${priceMod}` : -priceMod;

    return priceMod;
};

function RenderParty(props) {
    const party = props.children;
    const reputation = (party.reputation > 0) ? `+${party.reputation}` : party.reputation;
    const priceMod = generatePriceMod(reputation);

    return (
        <Collapsible title={`Party: ${party.party_name}`}>
            <ul>
                <li>Name: {party.party_name}</li>
                <li>Location: {party.party_location}</li>
                <li>Reputation: {reputation}</li>
                <li>Shop Price Modifier: {priceMod}</li>
                <li>Notes: <DatabaseText>{party.party_notes}</DatabaseText></li>
                <li>Achievements: <DatabaseText>{party.achievements}</DatabaseText></li>
            </ul>
        </Collapsible>
    );
}

export default RenderParty;