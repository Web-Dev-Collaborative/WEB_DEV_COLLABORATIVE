/**
 * <div>
		<p>
			This's a test
		</p>		
	</div>
 */

export let struct1 = [
  {
    p: [{ text: "This's a test" }]
  }
];

/**
 * <div>
		<p>
			This's a test
			<img src="./test" alt="">
		</p>		
	</div>
 */

export let struct2 = [
  {
    p: [{ text: "This's a test" }, { img: [{ src: "./test" }, { alt: "" }] }]
  }
];

/**
 * <div>
		<p>
			This's a test
			<img src="./test" alt="">
        </p>
        
        <div></div>
	</div>
 */
export let struct3 = [
  {
    p: [{ text: "This's a test" }, { img: [{ src: "./test" }, { alt: "" }] }]
  },

  {
    div: []
  }
];
