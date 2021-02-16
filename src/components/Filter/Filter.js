import translate from "../i18nProvider/translate";
import s from "../styles/radioButton.module.css";

const Filter = ({ inputChange, filterType }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.title}>{translate("filterTitle")}</div>
      <div className={s.controlWrapper} onChange={inputChange}>
        <label className={s.label}>
          <input
            className={s.input}
            type="radio"
            name="filterType"
            value="lowpass"
            defaultChecked={filterType === "lowpass"}
          />
          <span className={s.design}></span>
          <span className={s.inputName}>{translate("filterLowpass")}</span>
        </label>
        <label className={s.label}>
          <input
            className={s.input}
            type="radio"
            name="filterType"
            value="bandpass"
            defaultChecked={filterType === "bandpass"}
          />
          <span className={s.design}></span>
          <span className={s.inputName}>{translate("filterBandpass")}</span>
        </label>
        <label className={s.label}>
          <input
            className={s.input}
            type="radio"
            name="filterType"
            value="highpass"
            defaultChecked={filterType === "highpass"}
          />
          <span className={s.design}></span>
          <span className={s.inputName}>{translate("filterHighpass")}</span>
        </label>
      </div>
    </div>
  );
};

export default Filter;
