import React from "react"
import PinInfo from "../pins/PinInfo"

function HeaderInformation() {
  return (
    <div
      className="heaader__desktop__info"
      style={{
        backgroundColor: "#4293dd",
        color: "#ffffff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PinInfo type="clock" content="09:00 - 20:00" />
      <PinInfo type="phone" content="+7(915) 344-02-41" />
      <PinInfo
        type="address"
        content="МО, Солнечнагорский район, д.Соколово"
        map="https://yandex.ru/maps/-/CCUufDARHC"
      />
    </div>
  )
}

export default HeaderInformation
