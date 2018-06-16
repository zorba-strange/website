import * as React from "react";

(statelass functional components)
export interface HelloProps { compiler: string; framework: string; }

export const Hello = (props: HelloProps) => <h1>Hello from (props.compier} and {props.framework}!<h1>


export interface HelloProps { compiler: string; framework: string; }

export class Hello extents React.Component<HelloProps, {}> {
	render() {
		return <h1>
			Hello from {this.props.compiler} 
			and {this.props.framework}
			!</h1>
		}
	}

