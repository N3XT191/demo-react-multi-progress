import MultiProgress, { ProgressComponentProps } from "react-multi-progress";
import "./App.css";
import React, { useState } from "react";

const Colors = {
	BLUE3: "#2D72D2",
	BLUE5: "#8ABBFF",
	GREEN3: "#238551",
	GREEN5: "#72CA9B",
	ORANGE3: "#C87619",
	ORANGE5: "#FBB360",
	RED5: "#FA999C",
};

type ExtraData = { isBold: boolean };

function CustomComponent({
	children,
	element,
	...rest
}: ProgressComponentProps<ExtraData>) {
	return (
		<div
			{...rest} // adds all styles for rendering the progress bar
			style={{
				fontWeight: element.isBold ? 900 : 300,
			}}
		>
			{children}
		</div>
	);
}

function App() {
	const [val, setVal] = useState(15);
	return (
		<div className="container">
			<h1>Demo: react-multi-progress </h1>
			<h3>Basic example</h3>
			<MultiProgress
				elements={[
					{
						value: 15,
						color: Colors.BLUE3,
					},
				]}
			/>
			<h3>Multiple Elements</h3>
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
			<h3>Vary backround-color</h3>
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
			<h3>Show Percentage Text</h3>
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
			<h3>Border</h3>
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
			<h3>Height</h3>
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
			<h3>Round</h3>
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
			<h3>Round last element</h3>
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
			<h3>Transition Time</h3>
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
			<h3>Custom CSS ClassName</h3>
			<MultiProgress
				elements={[
					{
						value: 45,
						color: Colors.BLUE3,
					},
				]}
				className="box-shadow"
			/>
			<h3>Custom Component</h3>
			<MultiProgress<ExtraData>
				transitionTime={1.2}
				elements={[
					{
						value: 15,
						color: "blue",
						isBold: false,
					},
					{
						value: 35,
						color: "rgb(100,0,0)",
						showPercentage: true,
						fontSize: 12,
						textColor: "white",
						isBold: true,
					},
					{
						value: 25,
						color: "black",
						showPercentage: true,
						textColor: "white",
						fontSize: 12,
						isBold: false,
					},
				]}
				height={15}
				component={CustomComponent}
			/>
		</div>
	);
}

export default App;
