import translate from "../i18nProvider/translate";
import s from "../styles/radioButton.module.css";

const ChangeWaveform = ({ inputChange, waveform }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.title}>{translate("waveformTitle")}</div>
      <div className={s.controlWrapper} onChange={inputChange}>
        <label className={s.label}>
          <input
            className={s.input}
            type="radio"
            name="waveform"
            value="sine"
            defaultChecked={waveform === "sine"}
          />
          <span className={s.design}></span>
          <span className={s.inputName}>{translate("waveformSine")}</span>
        </label>
        <label className={s.label}>
          <input
            className={s.input}
            type="radio"
            name="waveform"
            value="square"
            defaultChecked={waveform === "square"}
          />
          <span className={s.design}></span>
          <span className={s.inputName}>{translate("waveformSquare")}</span>
        </label>
        <label className={s.label}>
          <input
            className={s.input}
            type="radio"
            name="waveform"
            value="triangle"
            defaultChecked={waveform === "triangle"}
          />
          <span className={s.design}></span>
          <span className={s.inputName}>{translate("waveformTriangle")}</span>
        </label>
        <label className={s.label}>
          <input
            className={s.input}
            type="radio"
            name="waveform"
            value="sawtooth"
            defaultChecked={waveform === "sawtooth"}
          />
          <span className={s.design}></span>
          <span className={s.inputName}>{translate("waveformSawtooth")}</span>
        </label>
      </div>
    </div>
  );
};

export default ChangeWaveform;
