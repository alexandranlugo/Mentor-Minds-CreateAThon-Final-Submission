import { useState, useEffect } from 'react';
import './App.css';
import FlashcardArray from "./components/FlashcardArray/FlashcardArray.tsx";

function App() {
  const qa = `What led to the rise of nationalism in Europe?; The big takeaway is how Nationalism helped Napoleon at home and undermined him abroad.
Why was the Directory established after Robespierre's Reign of Terror?; To reward merit rather than birth and expand education.
How did Napoleon's economic policies impact Russia?; He imposed a "scorched earth" policy on Russia during the invasion, which led to significant losses for both sides.
What was the significance of the Treaty of Pressburg?; It marked a significant defeat for Napoleon and led to the recognition of Britain as his ultimate enemy.
How did the Congress of Vienna attempt to maintain peace in Europe?; By strengthening states that border France, creating a confederation among German states, and preventing any one power from dominating others.
What was the main goal of the Holy Alliance formed by Austria, Prussia, and Russia?; To prevent war and promote stability across Europe.
What were the Carlsbad Decrees aimed at?; Anything liberal was outlawed as part of an extreme reaction to conservative forces.
How did the Romantic Movement challenge enlightenment thought?; By prioritizing emotion over rationalism, glorifying the individual, and promoting a people's culture.`

  let i = 1
  const fc = qa.split("\n").map(x => x.split("; ")).map(x => ({id: i++, frontHTML: <>{x[0]}</>, backHTML: <>{x[1]}</>}))

  return (
    <FlashcardArray
      cards={fc}
      frontContentStyle={{display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center", padding: "30px"}}
      backContentStyle={{display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center", padding: "30px"}}
      FlashcardArrayStyle={{fontFamily: "Patrick Hand", fontSize: "30px"}}
    />
  )
}

export default App;