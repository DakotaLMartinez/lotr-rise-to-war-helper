import { useState } from "react";
import { lands } from "../../mocks/data";

export default function EXPCalculator({ data }) {
  const [result, setResult] = useState(null);
  const [commanderLevel, setCommanderLevel] = useState(1);
  const [currentExp, setCurrentExp] = useState(0);
  const [tileStrength, setTileStrength] = useState(130);
  const [action, setAction] = useState("Mock Battle");
  const [abilityPoints, setAbilityPoints] = useState(1);
  const [ringPointsInExp, setRingPointsInExp] = useState(10);
  const [ringPointsInYield, setRingPointsInYield] = useState(10);

  const levelData = data.find((d) => d.level === commanderLevel);

  const ExpToNextLevel = () => {
    return levelData?.expToLevelUp;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const land = lands.find((l) => l.powerLevel === tileStrength);
    const expBonus = 1 + ringPointsInExp * 0.005 + ringPointsInYield * 0.01;
    const expToEarn = abilityPoints * (land.mockBattleExp * expBonus);
    const currentTotalExp = currentExp + levelData.totalExp;
    const newTotalExp = currentTotalExp + expToEarn;
    const newLevel = data.reverse().find((l) => l.totalExp < newTotalExp);
    const str = `level ${newLevel?.level} with ${
      newTotalExp - newLevel?.totalExp
    }/${newLevel?.expToLevelUp} to level ${newLevel?.level + 1}`;
    setResult(str);
  };

  return (
    <section>
      <form className="mb-4" onSubmit={handleSubmit}>
        <fieldset className="flex gap-2 w-72 my-2 justify-between">
          <label>Commander Level</label>
          <input
            type="number"
            className="w-12"
            min="1"
            max="50"
            onChange={(e) => setCommanderLevel(Number(e.target.value))}
            value={commanderLevel}
          />
        </fieldset>
        <fieldset className="flex gap-2 w-72 my-2 justify-between">
          <label>Current EXP</label>
          <span>
            <input
              type="number"
              className="w-24"
              onChange={(e) => setCurrentExp(Number(e.target.value))}
              value={currentExp}
            />{" "}
            / {ExpToNextLevel()}
          </span>
        </fieldset>
        <fieldset className="flex gap-2 w-72 my-2 justify-between">
          <label>Land for Mock Battle</label>
          <select
            value={tileStrength}
            onChange={(e) => setTileStrength(Number(e.target.value))}
          >
            <option>1</option>
            <option>10</option>
            <option>15</option>
            <option>30</option>
            <option>40</option>
            <option>60</option>
            <option>90</option>
            <option>130</option>
            <option>150</option>
            <option>200</option>
            <option>230</option>
            <option>260</option>
            <option>300</option>
          </select>
        </fieldset>
        <fieldset className="flex gap-2 w-72 my-2 justify-between">
          <label>March or Mock Battle</label>
          <select value={action} onChange={(e) => setAction(e.target.value)}>
            <option>Mock Battle</option>
            <option>March</option>
          </select>
        </fieldset>
        <fieldset className="flex gap-2 w-72 my-2 justify-between">
          <label>Ability Points to Spend</label>
          <input
            type="number"
            className="w-12"
            min="1"
            max="15"
            onChange={(e) => setAbilityPoints(Number(e.target.value))}
            value={abilityPoints}
          />
        </fieldset>
        <fieldset className="flex gap-2 w-72 my-2 justify-between">
          <label>Ring points in Experience</label>
          <input
            type="number"
            className="w-12"
            min="0"
            max="10"
            onChange={(e) => setRingPointsInExp(Number(e.target.value))}
            value={ringPointsInExp}
          />
        </fieldset>
        <fieldset className="flex gap-2 w-72 my-2 justify-between">
          <label>Ring points in yield</label>
          <input
            type="number"
            className="w-12"
            min="0"
            max="10"
            onChange={(e) => setRingPointsInYield(Number(e.target.value))}
            value={ringPointsInYield}
          />
        </fieldset>
        <input
          className="px-4 py-2 bg-sky-500"
          type="submit"
          value="Calculate Level after Battle"
        />
      </form>
      {result && <div>Result of Mock Battle: {result}</div>}
    </section>
  );
}
