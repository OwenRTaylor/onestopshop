import {CodeDemoExample} from "../../components/Code Demo/CodeDemoUnstlyed"
import {CodeDemo} from "../../components/Code Demo"
export default function SandpackTopic() {
	return (
		<div>
			<h1>Sandpack Topic</h1>
			<h2>What is Sandpack?</h2>
			<p>
				From the offical FAQ: Sandpack is an open ecosystem of components and
				utilities that allow you to compile and run modern JavaScript frameworks
				in the browser. You can either use one of our predefined components for
				embedding the CodeSandbox experience into your projects, or you can
				build your own version of sandpack, on top of our standard components
				and utilities.
			</p>
			<a href="https://sandpack.codesandbox.io/docs/resources/faq"></a>
			<h2>In this project:</h2>
			<p>
				Sandpacker is used in this project exntesively for code exampeles in the
				javascript ecosystem
			</p>
			<h2>Example CodeDemo:</h2>
			<p>
				this is an example of a Code Example I would use in this site Sandpack allows
				me to render a code editor and preview of most of the javascript ecosystem this
				for instance is an example of  a simple hello world in react
			</p>
			<CodeDemo/>
			<h2>Example of the example:</h2>
			<p>
				this is an example of the previous example being made in Sandpack
				
			</p>
			<CodeDemoExample />
		</div>
	);
}
