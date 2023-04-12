import "../../styles/privacyPolicy.css";
import { useState } from "react";

export default function Accordion(props) {
  const [selected, setSelected] = useState(null);

  const toggle = (idx) => {
    if (selected === idx) {
      return setSelected(null);
    }
    setSelected(idx);
  };

  return (
    <div>
      {props.data.map((item, idx) => (
        <div className="privacyItem" key={idx}>
          <div className="privacyItemHeading" onClick={() => toggle(idx)}>
            <span>{selected === idx ? "- " : "+ "} &nbsp;&nbsp;</span>
            <span>{item.heading}</span>
          </div>
          {item.body.map((type, i) => {
            if (type.paragraph) {
              return (
                <div
                  className={
                    selected === idx ? "privacyBody show" : "privacyBody"
                  }
                  id="content"
                  key={i}
                >
                  {type.paragraph}
                </div>
              );
            } else if (type.title) {
              return (
                <div
                  className={
                    selected === idx ? "privacyBody show" : "privacyBody"
                  }
                  id="title"
                  key={i}
                >
                  {type.title}
                </div>
              );
            } else if (type.list) {
              if (type.sublist) {
                return (
                  <ul
                    className={
                      selected === idx ? "privacyBody show" : "privacyBody"
                    }
                    id="content"
                    key={i}
                  >
                    {type.list.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                    <ul
                      className={
                        selected === idx ? "privacyBody show" : "privacyBody"
                      }
                      id="content"
                    >
                      {type.sublist.map((bullet, i) => (
                        <li key={i}>{bullet}</li>
                      ))}
                    </ul>
                  </ul>
                );
              }
              return (
                <ul
                  className={
                    selected === idx ? "privacyBody show" : "privacyBody"
                  }
                  id="content"
                  key={i}
                >
                  {type.list.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              );
            }
            return null;
          })}
        </div>
      ))}
    </div>
  );
}
