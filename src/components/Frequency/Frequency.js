import s from "../styles/range.module.css";
import translate from "../i18nProvider/translate";

const ChangeFrequency = ({ inputChange, filterFreq }) => {
  return (
    <div className={s.gainWrapper}>
      <div className={s.title}>{translate("frequencyTitle")}</div>
      <div className="gain-control"></div>
      <input
        className={s.gainSlider}
        name="filterFreq"
        type="range"
        min="0"
        max="20000"
        value={filterFreq}
        onChange={inputChange}
        step="1"
      />
      <div className={s.value}>
        {filterFreq}
        {translate("hz")}
      </div>
    </div>
  );
};

export default ChangeFrequency;
