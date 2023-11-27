import React, { useState } from "react";
import Card from "./Card";
import { cardsData } from "../card";
import Dialog from "./Dialog";
import { generateUniqueTeamNames } from "./GenerateRandomName";
import TeamSidebar from "./TeamSideBar";
import PictureDialog from "./PIctureDialog";

function Game() {
    // states
    const [cardsState, setCardsState] = useState(cardsData);

    // kep first card info
    const [firstCard, setFirstCard] = useState(null);
    // is it first click?
    const [secondClick, setSecondClick] = useState(false);
    // set flag to wait for 1500ms
    const [wait, setWait] = useState(false);

    const [currTeamIdx, setCurrTeamIdx] = useState(0);

    const [teams, setTeams] = useState([]);

    const [gameState, setGameState] = useState(0);

    // functions
    const checker = async (card) => {
        if (card.name === firstCard.name) {
            setGameState(2);

        } else {
            setWait(true);
            setTimeout(() => {
                changeCardStatusHandler(card);
                changeCardStatusHandler(firstCard);
                setWait(false);
            }, 1500);
        }
    };

    const changeCardStatusHandler = (clickedCard) => {
        if (!clickedCard.passed) clickedCard.isFlipped = !clickedCard.isFlipped;
        let index = cardsState.findIndex((card) => card.id === clickedCard.id);
        let newState = [...cardsState];
        newState.splice(index, 1, clickedCard);
        setCardsState(newState);
    };

    const handleClose = (e, didGetPoint) => {
        const cards = getFlippedCard();
        if (didGetPoint) {
            giveScoreToCurrTeam();
            
            cards.forEach(card => {
                card["passed"] = true;
                changeCardStatusHandler(card);
            })
        } else{
            cards.forEach(card => {
                changeCardStatusHandler(card);
            })
        }
        setGameState(1);
    }

    const getFlippedCard = () => {
        return cardsState.filter(card => card.isFlipped && !card.passed);
    }

    const handleClick = async (e, clickedCard) => {

        if (wait) {
            return;
        }

        if (!secondClick) {
            setFirstCard(clickedCard);
            setSecondClick(true);
            changeCardStatusHandler(clickedCard);
        } else {
            setSecondClick(false);
            changeCardStatusHandler(clickedCard);
            await checker(clickedCard);
            setFirstCard(null);
            nextTeam();
        }
    };

    const handleTeamInitializer = (num) => {
        console.log("handleTeamInitializer", num);
        const teamName = generateUniqueTeamNames(num);
        const teamData = teamName.map((name, idx) => {
            return {
                id: idx,
                name: name,
                score: 0,
            }
        });
        setTeams(teamData);
        setGameState(1);
    }
    const nextTeam = () => {
        setCurrTeamIdx(current => (current + 1) % teams.length);
    }
    const giveScoreToCurrTeam = () => {
        setTeams(teams.map(team => team.id === currTeamIdx ? { ...team, score: team.score + 100 } : team));
    }

    return (
        <div className="board">
            <TeamSidebar teams={teams} currTeamIdx={currTeamIdx} />
            <section className="memory-game">
                <PictureDialog
                    isOpen={gameState === 2}
                    onClose={handleClose}
                    cards={getFlippedCard()}
                />
                <Dialog isOpen={gameState === 0} onNumberOfTeamsSubmit={handleTeamInitializer} />
                {cardsState?.map((card) => {
                    return (
                        <Card
                            key={card.id}
                            id={card.id}
                            card={card}
                            onClick={(e) => handleClick(e, card)}
                        />
                    );
                })}
                {/* <Card card={card} onClick={} /> */}
            </section>
        </div>
    );
}

export default Game;
