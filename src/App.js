import { useState } from "react";
import {
  I18nPropvider,
  ENGLISH,
  UKRAINE,
  RUSSIA,
} from "./components/i18nProvider";
import translate from "./components/i18nProvider/translate";

import Oscillator from "./components/Oscillator";
import ChangeWaveform from "./components/Waveform";
import Filter from "./components/Filter";
import Gain from "./components/Gain";
import ChangeFrequency from "./components/Frequency";
import Background from "./components/Background";

import s from "./App.module.css";

const App = () => {
  const [waveform, setWaveform] = useState("sine");
  const [filterType, setFilterType] = useState("lowpass");
  const [gainValue, setGainValue] = useState(0.5);
  const [frequency, setFrequency] = useState(5000);

  const [locale, setLocale] = useState(UKRAINE);

  const handleChangeWaveform = (event) => {
    setWaveform(event.target.value);
    // console.log(event.target.value);
    //work
  };

  const handleChangeFilterType = (event) => {
    setFilterType(event.target.value);
    // console.log(event.target.value);
    //work
  };

  const handleChangeGainValue = (event) => {
    setGainValue(event.target.value);
    // console.log(newValue);
    //work
  };

  const handleChangeFrequency = (event) => {
    setFrequency(event.target.value);
    // console.log(newValue);
    //work
  };

  return (
    <>
      <I18nPropvider locale={locale}>
        <h1 className={s.title}>{translate("title")}</h1>
        <div className={s.wrapper}>
          <Background />
          <div className={s.synthesizer}>
            <Oscillator
              waveform={waveform}
              filterType={filterType}
              gainValue={gainValue}
              filterFreq={frequency}
            />
          </div>

          <div className={s.buttonWrapper}>
            <p className={s.buttonDescription}>{translate("language")}</p>
            <button
              className={[s.localeButton, s.localeButtonUkraine].join(" ")}
              onClick={() => setLocale(UKRAINE)}
            >
              Українська
            </button>
            <button
              className={[s.localeButton, s.localeButtonEnglish].join(" ")}
              onClick={() => setLocale(ENGLISH)}
            >
              English
            </button>
            <button
              className={[s.localeButton, s.localeButtonRussian].join(" ")}
              onClick={() => setLocale(RUSSIA)}
            >
              Русский
            </button>
          </div>

          <div className={s.parameters}>
            <h2 className={s.settingsTitle}>{translate("settingsTitle")}</h2>
            <ChangeWaveform
              inputChange={handleChangeWaveform}
              waveform={waveform}
            />
            <Filter
              inputChange={handleChangeFilterType}
              filterType={filterType}
            />
            <Gain inputChange={handleChangeGainValue} gainValue={gainValue} />
            <ChangeFrequency
              inputChange={handleChangeFrequency}
              filterFreq={frequency}
            />
          </div>
        </div>
      </I18nPropvider>
    </>
  );
};

export default App;
