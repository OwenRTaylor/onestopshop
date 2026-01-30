import {
	SandpackCodeEditor,
	SandpackLayout,
	SandpackPreview,
	SandpackProvider,
} from "@codesandbox/sandpack-react";

var files = {
	"/App.js": `
        import {Sandpack} from "@codesandbox/sandpack-react";
        export default function App() {
        return (
        <Sandpack
          template="react"
          files={{
            
            "/App.js": \`
              export default function App() {
                return <h1>Hello World3</h1>;
              }
            \`,
          }}
        />

        )
}`,
};
export default function CodeDemo() {
	return (
		<SandpackProvider
			template="react"
			files={files}
			customSetup={{
				dependencies: {
					"@codesandbox/sandpack-react": "^2.20.0",
					"@codesandbox/sandpack-themes": "^2.0.21",
				},
			}}
		>
			<SandpackLayout className="h-[300px]">
				<SandpackPreview
					className=""
					showRefreshButton={false}
					showOpenInCodeSandbox={false}
				/>
			</SandpackLayout>

			<div className="flex">
				<div className="w-1/2">
					<SandpackCodeEditor className="h-[300px]" />
				</div>
				<div className="w-1/2 p-8">
					<h3>Explanation</h3>
					<p>Your explanation text goes here...</p>
				</div>
			</div>
		</SandpackProvider>
	);
}
