import { useState } from "react";
import { useTranslation } from "react-i18next";
import downArrow from "../../public/down-arrow.png";

function LanguageChanger() {
  const { t, i18n } = useTranslation();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setDropdownOpen(false);
  };
  return (
    <div>
      <div className="relative " onClick={toggleDropdown}>
        <span className="text-black cursor-pointer hidden-on-small">
          {i18n.language === "en" ? "English" : "ქართული"}
        </span>
        <img
          src={downArrow}
          alt="down arrow"
          className="w-4 h-4 cursor-pointer ml-2 inline-block"
        />
        <div
          className={`z-20 absolute top-full mt-4 bg-white border -ml-4 shadow-lg rounded-lg p-2 transition-all duration-300 ease-in-out overflow-hidden ${
            isDropdownOpen
              ? "max-h-40 opacity-100 visible"
              : "max-h-0 opacity-0 invisible"
          }`}
        >
          <div
            className="cursor-pointer p-2 hover:bg-gray-200 rounded-lg"
            onClick={() => changeLanguage("en")}
          >
            {t("english")}
          </div>
          <div
            className="cursor-pointer p-2 hover:bg-gray-200 rounded-lg"
            onClick={() => changeLanguage("ka")}
          >
            {t("georgian")}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LanguageChanger;
