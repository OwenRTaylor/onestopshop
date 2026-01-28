import { Sandpack } from "@codesandbox/sandpack-react";

export default function CodeDemo() {
	return (
		<Sandpack
			template="react"
			files={{
				"/App.js": `
        import {Sandpack} from "@codesandbox/sandpack-react";
        export default function App() {
        return (
        <Sandpack
          template="react"
          files={{
            
            "/App.js": \`
              export default function App() {
                return <h1>Hello World</h1>;
              }
            \`,
          }}
        />

        )
}`,
			}}
			customSetup={{
				dependencies: {
					"@codesandbox/sandpack-react": "^2.20.0",
					"@codesandbox/sandpack-themes": "^2.0.21",
				},
			}}
		/>
	);
}
