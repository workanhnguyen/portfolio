import React, { useEffect, useState } from "react";

import user from "../data/user";
import { useStateContext } from "../contexts/ContextProvider";

const Contacts = () => {
  const { language } = useStateContext();

  const [userInfo, setUserInfo] = useState(user[0]);

  useEffect(() => {
    setUserInfo(language === "vi" ? user[0] : user[1]);
  }, [language]);

  return (
    <div className="flex flex-col gap-y-3">
      {userInfo.contacts.map((contact, index) => (
        <div
          key={index}
          className="w-full flex items-center p-4 gap-x-3 rounded-md border-2 border-gray-300"
        >
          <img className="w-7 h-7" src={contact.icon} alt={`icon-${index}`} />
          {index === 0 ? (
            <a className="hover:underline" href={contact.link}>
              {contact.link}
            </a>
          ) : (
            <p>{contact.link}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Contacts;
