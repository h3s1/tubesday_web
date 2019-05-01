import React from "react"

interface IProps {created: {
    selectedResult: {};
    post:{title:string;
    content: string;
    tags: string[]}
}}

interface IState {}


class PostView extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        this.state = {}
    }
    render() {
        return(

            <div>hi</div>
        )
    }
}

export default PostView