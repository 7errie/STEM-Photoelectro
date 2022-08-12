export const tabObjDefault = {
    id: null,
    tabLabel: ["Introduction", "Learning Outcomes", "Interactive Learning"],
    content: "Empty",
    buttonLabel: null,
    buttonLink: null,
    imgStart: false,
    img: require("./assets/images/error-404.svg"),
    alt: null
  };
export const tabObjOne = {
    id: null,
    content: [
      "<p>Global demand of energy has become an important issue all over the world as we now face problem of lack of energy supply. discovered that hydrogen fuel has the potential to be a solution to these environmental problems, clean and abundant energy source, has excellent energy conversion efficiency and can converts into a variety of energy forms. However, this hydrogen energy comes from fossil fuels, which are finite, non-renewable, unsustainable and classified as grey and blue hydrogen. To address this problem, production, storage, and end-use goods of hydrogen must be ecologically benign, with renewable energy sources being used to generate this energy carrier, which is called as green hydrogen.</p>", 
      "<h4>Difference between grey, blue and green hydrogen</h4><br /><p>Grey hydrogen is created from natural gas, or methane, using steam methane reformation but without capturing the greenhouse gases made in the process. Blue hydrogen uses carbon capture and storage for the greenhouse gases produced in the creation of grey hydrogen Green hydrogen is made with water electrolysis, and energy derived from renewable sources such as solar and wind</p><br />", 
      "<h4>Why green hydrogen is important?</h4><br /><p>Generation of green hydrogen aims to remove the greenhouse gas emissions from the production of hydrogen by manufacturing it using electrolysis, powered by renewable energy. The rapid growth in production of green hydrogen is seen by many as essential for leading economies to achieve zero carbon emissions by 2050!</p>", 
      "<h4>How to produce green hydrogen?</h4><br /><p>Photoelectrochemical (PEC) water splitting known as a viable approach for converting solar-to-hydrogen energy since water is a plentiful and easily available supply of green hydrogen. This approach is essentially a water separation process that separates oxygen and hydrogen PEC water splitting has gotten a lot of attention since it combines solar energy gathering and water electrolysis in one device!</p>", 
      "<h4>What is photoelectrochemical (PEC)?</h4><br /><p>Do you know water electrolysis? Water electrolysis is an electrochemical process to split water to hydrogen and oxygen gases. Water electrolysis uses metal electrodes that conduct electric current such as platinum (Pt), nickel (Ni) and iron (Fe). It also need electrolyte to increase the conductivity of the water. Different electrolyte can be used such as potassium hydroxide (KOH), Sodium hydroxide (NaOH), sodium chloride (NaCl) and sulfuric acid (H2SO4), depends on the purpose of the process.</p><p>In photoelectrochemical water splitting, one of electrode (anode or cathode) use semiconductor material that can absorbs light energy (photons) and convert it into current. Semiconductor electrode is called working electrode (WE), while the other electrode is called counter electrode (CE). By bombarding the interface of electrolyte and working electrode, with energy levels larger than the semiconductor's band gap, electron hole pairs are produced. The distribution of charge in the oxides-based semiconductor results in the formation of a space charge zone that allows the separation of the electron hole pairs.</p>", 
      "<h4>Why use PEC water splitting?</h4><br /><p>Photoelectrochemical water splitting may reduce usage of non-renewable energy, such as fossil fuels, and uses renewable energy, such as solar energy to supply current in water splitting process. This method may save electricity, lower the carbon emission and help us to save environment.</p>", 
      "<h4>Why use semiconductor material for photoelectrode?</h4><br /><p>Semiconductor materials used for the working photoelectrode due to its ability to absorb solar energy compared to metals, which have a good electrical conductivity but cannot absorb solar energy.</p>", 
      "<h4>How is the PEC water splitting performing?</h4><br />"
    ],
    dataFlowDiagram: ["<p>PEC cells utilize light energy</p>", "PEC consists of an working electrode (WE) and a counter electrode (CE)  linked to an external circuit and submerged in an electrolyte.", "The CE is commonly a metal, while the WE is made of a semiconductor that absorbs light.", "Photons having energy higher than the band gap of a semiconductor can be absorbed by the WE.", "Producing electron-hole pairs that are divided by the electric field in the space-charge area between the WE and the electrolyte.", "Water is oxidized at the WE according to the reaction: <br />2h+ + H2O (l) -> ½O2 (g) + 2H+", "The CE, H+ ions are reduced to form hydrogen gas via the reaction: <br />2H+ + 2e- -> 2H2 (g)"],
    buttonLabel: null,
    buttonLink: null,
    imgStart: false,
    img: require("./assets/images/photoelectro-img-1.png"),
    alt: null
  };
export const tabObjTwo = {
    id: null,
    content: "<center>“it is crucial to learn how to see and support science instruction that engages students in making sense of phenomena around you!”</center><br /> <p>We believe technology should be used to support content knowledge and creative pedagogy grounded in contemporary theories of thinking and learning! Simulation tools support STEM learning by providing opportunities to manipulate the virtual environments. <br \>PEC simulators will reach and deepen your understanding on the whole process of photochemical water splitting process! And it’s Fun!</p><br /><ol><li>Understand the chemical reaction taking place during water splitting process</li><li>Able to set-up an electrolytic cell and label its cathode, anode, the direction that electrons and ions flow, the locations of the oxidation and reduction half-reactions</li><li>Determine the effects of light intensity towards the current reading and the amount of H2 and O2 produced</li><li>Understand how the electrolysis reaction can be used in fuel cell technology</li><li>Explain the differences between conventional water electrolysis with photoelectrochemical water electrolysis cells.</li></ol>",
    buttonLabel: null,
    buttonLink: null,
    imgStart: false,
    img: null,
    alt: null
  };
export const tabObjThree = {
    id: null,
    content: null,
    buttonLabel: "Run simulation",
    buttonLink: process.env.PUBLIC_URL + "/simulation/1.html",
    imgStart: false,
    img: null,
    alt: null
  };