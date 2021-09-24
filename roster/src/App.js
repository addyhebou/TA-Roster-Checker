import { useEffect, useState } from 'react';
import NYULogo from './icons/nyu_logo_new_york_university.png';
import './App.css';

let CLABstudents = {
  'Apshora,Afra': true,
  'Cai,Pierson': true,
  'Chowdhury,Mukut': true,
  'Diao,Sara': true,
  'Doyle,Sean': true,
  'Esencan,Berk': true,
  'Hayfield,Will': true,
  'Huang,Heming': true,
  'Koné,Tintié': true,
  'Krukauskas,Henry': true,
  'Kumar,Shaur': true,
  'Kumra,Arush': true,
  'Levy,Frederico': true,
  'Li,Ziyi': true,
  'Liu,Ashley': true,
  'Piasek,Martyna': true,
  'Rakheja,Akshat': true,
  'Shiryayev,Almadi': true,
  'Thomas,Daniel': true,
  'Wang,Minghe': true,
  'Wang,Wilson': true,
  'Yan,Carina': true,
  'Yu,Chloe': true,
  'Zhang,Catherine': true,
  'Zhang,Jalen': true,
  'Zhou,Andrea': true,
};
let FLABstudents = {
  'Bai,Jiamu': true,
  'Chen,Danny': true,
  'Chowdhury,Alaya': true,
  'Geng,Neal': true,
  'Guo,Cris': true,
  'Gutierrez,Tomas': true,
  'Han,Steven': true,
  'Huang,Shenyi': true,
  'Kabita,Nishat': true,
  'Lalani,Mahin': true,
  'Li,Shuhua': true,
  'Li,Yuheng': true,
  'Lin,Jason': true,
  'Liu,Feranno': true,
  'Lu,Sanford': true,
  'Mohamed,Saleema': true,
  'Nachiappan,Uma': true,
  'Pham,Travis': true,
  'Rafi,Adib': true,
  'Sanrakumar, Kajini': true,
  'Selep, Fiona': true,
  'Shieh,Ethan': true,
  'Tang, Preston': true,
  'Wen, Cato': true,
};
let namesLst = Object.keys(FLABstudents);
let getRandomName = () => {
  return namesLst[Math.floor(Math.random() * namesLst.length)];
};

function App() {
  const [name, setname] = useState('');
  useEffect(() => {
    refresh();
  });

  let refresh = () => {
    setname(getRandomName());
  };

  let markAbsent = () => {
    FLABstudents[name] = false;
    let index = namesLst.indexOf(name);
    console.log(namesLst);
    console.log(index);
    namesLst.splice(index, 1);
    console.log(namesLst);
    refresh();
  };
  let markHere = () => {
    let index = namesLst.indexOf(name);
    console.log(namesLst);
    namesLst.splice(index, 1);
    console.log(namesLst);
    refresh();
  };

  let markLate = (name) => {
    FLABstudents[name] = true;
  };

  let logoURL = NYULogo;

  return (
    <div className='App'>
      <img alt='NYU Logo' src={logoURL} />
      <h1>CS Lab 1134 Roll Call</h1>
      <h2>Section FLAB</h2>
      <h1>{name}</h1>
      <div class='actionBtns'>
        <button onClick={markHere}>Yes</button>
        <button onClick={markAbsent}>No</button>
      </div>
      {/* <button
        onClick={() => {
          console.log(FLABstudents);
        }}
      >
        Display attendance
      </button> */}
      <div className='attendees'>
        <h3>Present</h3>
        <ul>
          {Object.keys(FLABstudents).map((name) => {
            if (FLABstudents[name]) return <li onClick={markLate}>{name}</li>;
          })}
        </ul>
        <h3>Absent</h3>
        <ul>
          {Object.keys(FLABstudents).map((name) => {
            if (!FLABstudents[name]) return <li onClick={markLate}>{name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
