import translate from "../i18nProvider/translate";
import s from "../styles/range.module.css";

const Gain = ({ inputChange, gainValue }) => {
  return (
    <div className={s.gainWrapper}>
      <div className={s.title}>{translate("gainTitle")}</div>
      <div className="gain-control">
        <input
          className={s.gainSlider}
          name="gainValue"
          type="range"
          min="0"
          max="5"
          value={gainValue}
          onChange={inputChange}
          step="0.01"
        />
      </div>
      <div className={s.value}>{gainValue}</div>
    </div>
  );
};

export default Gain;
