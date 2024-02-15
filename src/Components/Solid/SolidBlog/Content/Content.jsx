import React from "react";
import classes from "./Content.module.css";

const Content = () => {
  return (
    <div className={classes.solid_Content}>
      <div className={classes.contents}>
        <h3>Solid minerals in Nigeria</h3>
        <p>
          In Nigeria, some key mineralsmined include limestone for cement
          production, tin and columbite for electronics and alloys, coal for
          energy generation, lead ore, zinc ore, lithium, copper,
          petroleum/natural gas, bitumen, iron ore, gypsum, talc, bentonite and
          baryte, gemstones, kaolin, rock salt,limestone, tin, marble, bitumen,
          bentonite, gemstones, kaolin, rock salt, and gold.
        </p>

        <h3>Coal:</h3>
        <p>
          Nigerian coal is one of the most bituminous in the world owing to its
          low sulphur and ash content and therefore the most
          environment-friendly and most preferred form of coal. There are nearly
          3 billion tonnes of indicated reserves in 17 identified coalfields and
          600 million of proven reserves.
        </p>
        <p>It can be located predominantly in Enugu and Kogi states.</p>

        <h3>Kaolin:</h3>
        <p>
          An estimated reserve of 3 billion tonnes of excellent kaolin clay has
          been identified. It has been discovered in nearly every state.
        </p>

        <h3>Lead/Zinc:</h3>
        <p>
          An estimated 10 million tonnes of lead/zinc veins are spread over
          eight states of Nigeria: Abia, Abuja, AkwaIbom, Bauchi, Ebonyi, Gombe,
          Nasarrawa, and Plateau and probably more states.
        </p>
        <h3>Bentonite and Barite Ore:</h3>
        <p>
          {" "}
          Though not commonly known, these are the main constituents of the mud
          used in the drilling of all types of oil wells. Barite, together with
          other compounds is used as a weighing agent for drilling fluids in oil
          and gas exploration to suppress high formation pressures and prevent
          blowouts. The Nigerian barite possesses a specific specific gravity of
          about 4.3.
        </p>
        <p>
          Over 7.5 million tonnes of barite have been identified in Taraba and
          Bauchi states. Large bentonite reserves of 700 million tonnes are
          available in many states of the federation ready for massive
          exploitation and development
        </p>

        <h3>Gold:</h3>
        <p>
          {" "}
          There are proven reserves of both alluvial and primary deposits of
          gold with proven reserves in the schist belt covering the western half
          of Nigeria. At present, exploitation is carried out mostly by artisan
          miners in a few areas in the country. A number of primary deposits,
          which are adequately big enough for large mechanized mining, have been
          identified in the north west and south west. The primary deposits are
          of relatively high grade and at shallow depth. Proven deposits have
          been discovered in Osun, Kwara, amongst others.
        </p>

        <h3>Bitumen</h3>
        <p>
          The occurrence of bitumen deposits in Nigeria is indicated at about 42
          billion tonnes, almost twice the amount of existing reserves of crude
          oil. If fully developed, the industry will no doubt meet local
          requirements for road construction and also become a foreign exchange
          for Nigeria.
        </p>
      </div>
    </div>
  );
};

export default Content;
