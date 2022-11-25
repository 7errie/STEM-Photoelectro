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
      "<p><span style=\"color: #000; font-size: larger;\">Global demand</span> of <span>energy</span> has become an important issue all over the world as we now face problem of <span>lack of energy supply</span>. discovered that <span>hydrogen fuel</span> has the potential to be a solution to these environmental problems, <span>clean and abundant</span> energy source, has <span>excellent energy conversion efficiency</span> and can converts into a variety of energy forms. However, this hydrogen energy comes from <span>fossil fuels</span>, which are <span>finite, non-renewable, unsustainable</span> and classified as <span>grey</span> and <span>blue</span> hydrogen. To address this problem, production, storage, and end-use goods of hydrogen must be ecologically benign, with renewable energy sources being used to generate this energy carrier, which is called as <span>green hydrogen</span>.</p>", 
      "<h4>Difference between grey, blue and green hydrogen</h4><br /><p><span>Grey</span> hydrogen is created from <span>natural gas, or methane</span>, using steam methane reformation but without capturing the greenhouse gases made in the process. <span>Blue</span> hydrogen <span>uses carbon capture and storage</span> for the greenhouse gases produced in the creation of grey hydrogen <span>Green hydrogen is made with water electrolysis</span>, and energy derived from <span>renewable sources</span> such as solar and wind</p><br />", 
      "<h4>Why green hydrogen is important?</h4><br /><p>Generation of green hydrogen <span>aims to remove the greenhouse gas emissions from the production of hydrogen</span> by manufacturing it using electrolysis, powered by renewable energy. The rapid growth in production of green hydrogen is seen by many as essential for leading economies to achieve <span>zero carbon emissions</span> by 2050!</p>", 
      "<h4>How to produce green hydrogen?</h4><br /><p>Photoelectrochemical (PEC) water splitting known as a viable approach for <span>converting solar-to-hydrogen energy</span> since water is a plentiful and easily available supply of green hydrogen. This approach is essentially a water separation process that <span>separates oxygen and hydrogen</span> PEC water splitting has gotten a lot of attention since it combines solar energy gathering and water electrolysis in one device!</p>", 
      "<h4>What is photoelectrochemical (PEC)?</h4><br /><p>Do you know water electrolysis? <span>Water electrolysis</span> is an <span>electrochemical process to split water to hydrogen and oxygen gases</span>. Water electrolysis uses <span>metal electrodes that conduct electric</span> current such as platinum (Pt), nickel (Ni) and iron (Fe). It also need electrolyte to increase the conductivity of the water. Different electrolyte can be used such as potassium hydroxide (KOH), Sodium hydroxide (NaOH), sodium chloride (NaCl) and sulfuric acid (H2SO4), depends on the purpose of the process.</p><p>In photoelectrochemical water splitting, one of electrode (anode or cathode) <span>use semiconductor material</span> that can <span>absorbs light energy</span> (photons) and <span>convert it into current</span>. Semiconductor electrode is called <span>working electrode (WE)</span>, while the other electrode is called <span>counter electrode (CE)</span>. By bombarding the interface of electrolyte and working electrode, with energy levels larger than the semiconductor's band gap, electron hole pairs are produced. The distribution of charge in the oxides-based semiconductor results in the formation of a space charge zone that allows the separation of the electron hole pairs.</p>", 
      "<h4>Why use PEC water splitting?</h4><br /><p>Photoelectrochemical water splitting may <span>reduce usage of non-renewable energy</span>, such as fossil fuels, and uses renewable energy, such as <span>solar energy to supply current</span> in water splitting process. This method may <span>save electricity</span>, lower the carbon emission and help us to save environment.</p>", 
      "<h4>Why use semiconductor material for photoelectrode?</h4><br /><p>Semiconductor materials used for the working photoelectrode due to its <span>ability to absorb solar energy</span> compared to metals, which have a good electrical conductivity but cannot absorb solar energy.</p>", 
      "<h4>How is the PEC water splitting performing?</h4><br />"
    ],
    dataFlowDiagram: ["<p>PEC cells utilize light energy</p>", "PEC consists of an working electrode (WE) and a counter electrode (CE)  linked to an external circuit and submerged in an electrolyte.", "The CE is commonly a metal, while the WE is made of a semiconductor that absorbs light.", "Photons having energy higher than the band gap of a semiconductor can be absorbed by the WE.", "Producing electron-hole pairs that are divided by the electric field in the space-charge area between the WE and the electrolyte.", "Water is oxidized at the WE according to the reaction: <br />2h+ + H2O (l) -> ½O2 (g) + 2H+", "The CE, H+ ions are reduced to form hydrogen gas via the reaction: <br />2H+ + 2e- -> 2H2 (g)"],
    buttonLabel: null,
    buttonLink: null,
    imgStart: false,
    img: require("./assets/images/photoelectro-img-1.png"),
    img2: require("./assets/images/photoelectro-img-2.png"),
    img3: require("./assets/images/photoelectro-img-3.png"),
    alt: null
  };
export const tabObjTwo = {
    id: null,
    content: "<p style=\"text-align: center; font-size: 1.295em; font-style: italic;\">“it is crucial to learn how to see and support science instruction that engages students in making sense of phenomena around you!”</p><br /> <p>We believe <span>technology</span> should be used <span>to support content knowledge</span> and creative pedagogy grounded in contemporary theories of thinking and learning! Simulation tools support STEM learning by providing opportunities to manipulate the virtual environments. <br \>PEC simulators will reach and <span>deepen your understanding</span> on the whole process of photochemical water splitting process! And it’s Fun!</p><br /><ol><li>Understand the chemical reaction taking place during water splitting process</li><li>Able to set-up an electrolytic cell and label its cathode, anode, the direction that electrons and ions flow, the locations of the oxidation and reduction half-reactions</li><li>Determine the effects of light intensity towards the current reading and the amount of H2 and O2 produced</li><li>Understand how the electrolysis reaction can be used in fuel cell technology</li><li>Explain the differences between conventional water electrolysis with photoelectrochemical water electrolysis cells.</li></ol>",
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