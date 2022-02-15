import MultiProgress from "react-multi-progress";
import { Colors, H1, H3 } from "@blueprintjs/core";
import "./App.css";
import { useState } from "react";

function App() {
	const [val, setVal] = useState(15);
	return (
		<div className="container">
			<H1>Demo: react-multi-progress </H1>
			<H3>Basic example</H3>
			<MultiProgress
				elements={[
					{
						value: 15,
						color: Colors.BLUE3,
					},
				]}
			/>
			<H3>Multiple Elements</H3>
			<MultiProgress
				elements={[
					{
						value: 15,
						color: Colors.BLUE3,
					},
					{
						value: 25,
						color: Colors.GREEN3,
					},
					{
						value: 35,
						color: Colors.ORANGE3,
					},
				]}
			/>
			<H3>Vary backround-color</H3>
			<MultiProgress
				elements={[
					{
						value: 45,
						color: Colors.BLUE3,
					},
				]}
				backgroundColor={Colors.BLUE5}
			/>
			<MultiProgress
				elements={[
					{
						value: 45,
						color: Colors.BLUE3,
					},
				]}
				backgroundColor={Colors.GREEN5}
			/>
			<MultiProgress
				elements={[
					{
						value: 45,
						color: Colors.BLUE3,
					},
				]}
				backgroundColor={Colors.RED5}
			/>
			<MultiProgress
				elements={[
					{
						value: 45,
						color: Colors.BLUE3,
					},
				]}
				backgroundColor={Colors.ORANGE5}
			/>
			<H3>Show Percentage Text</H3>
			<MultiProgress
				height={15}
				elements={[
					{
						value: 15,
						color: Colors.BLUE3,
						showPercentage: true,
						textColor: "white",
						fontSize: 12,
					},
				]}
			/>
			<MultiProgress
				height={25}
				elements={[
					{
						value: 35,
						color: Colors.BLUE3,
						showPercentage: true,
						textColor: "black",
						fontSize: 20,
					},
				]}
			/>
			<H3>Border</H3>
			<MultiProgress
				elements={[
					{
						value: 45,
						color: Colors.BLUE3,
					},
				]}
				border="3px solid black"
			/>
			<MultiProgress
				elements={[
					{
						value: 45,
						color: Colors.BLUE3,
					},
				]}
				border="3px dashed red"
			/>
			<H3>Height</H3>
			<MultiProgress
				elements={[
					{
						value: 45,
						color: Colors.BLUE3,
					},
				]}
				height={5}
			/>
			<MultiProgress
				elements={[
					{
						value: 45,
						color: Colors.BLUE3,
					},
				]}
				height={15}
			/>
			<MultiProgress
				elements={[
					{
						value: 45,
						color: Colors.BLUE3,
					},
				]}
				height={35}
			/>
			<MultiProgress
				elements={[
					{
						value: 45,
						color: Colors.BLUE3,
					},
				]}
				height={65}
			/>{" "}
			<H3>Round</H3>
			<MultiProgress
				elements={[
					{
						value: 45,
						color: Colors.BLUE3,
					},
				]}
				round={true}
			/>{" "}
			<MultiProgress
				elements={[
					{
						value: 45,
						color: Colors.BLUE3,
					},
				]}
				round={false}
			/>{" "}
			<H3>Round last element</H3>
			<MultiProgress
				elements={[
					{
						value: 45,
						color: Colors.BLUE3,
					},
				]}
				roundLastElement={true}
			/>{" "}
			<MultiProgress
				elements={[
					{
						value: 45,
						color: Colors.BLUE3,
					},
				]}
				roundLastElement={false}
			/>
			<H3>Transition Time</H3>
			<button onClick={() => setVal((val + 20) % 100)}>Step</button>
			transition time: 0
			<MultiProgress
				elements={[
					{
						value: val,
						color: Colors.BLUE3,
					},
				]}
				transitionTime={0}
			/>
			transition time: 0.5
			<MultiProgress
				elements={[
					{
						value: val,
						color: Colors.BLUE3,
					},
				]}
				transitionTime={0.5}
			/>
			transition time: 1
			<MultiProgress
				elements={[
					{
						value: val,
						color: Colors.BLUE3,
					},
				]}
				transitionTime={1}
			/>
			transition time: 1.5
			<MultiProgress
				elements={[
					{
						value: val,
						color: Colors.BLUE3,
					},
				]}
				transitionTime={1.5}
			/>
		</div>
	);
}

export default App;
