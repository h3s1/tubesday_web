import React from 'react'
import {Input, Select} from 'antd'
import ClipCard from "./ClipCard"
import styled from "styled-components"


<<<<<<< HEAD
interface IProps {selectedResult:any;}
||||||| 303f24c... feat: add event handler to update states
interface IProps {selectedResult:any; handleInputSubmit(post:{title:string; content:string; tags:string[]}):void}
=======
interface IProps {selectedResult:any}
>>>>>>> parent of 303f24c... feat: add event handler to update states
interface IState {
    title:string; channelId:string; img:string;
    post:{title:string; content:string; tags:string[]}
}

const {TextArea} = Input
// const Option = Select.Option;

class PostForm extends React.Component<IProps, IState> {
    constructor(props:IProps) {
        super(props)
        this.state = {
            title: props.selectedResult.snippet.title,
            channelId: props.selectedResult.snippet.channelTitle,
            img: props.selectedResult.snippet.thumbnails.high.url,
            post: {
                title: "",
                content: "",
                tags: [""],
            }
        }
    }

    handleInput(e:{target:{name:string;value:string}}) {
        this.setState({
            post: {
                ...this.state.post,
                [e.target.name]: e.target.value
            }
        })
    }

<<<<<<< HEAD
    // handleSubmit() {
    //     const {post} = this.state
    //     this.props.handleInputSubmit(post)
    // }
||||||| 303f24c... feat: add event handler to update states
    handleSubmit() {
        const {post} = this.state
        this.props.handleInputSubmit(post)
    }
=======
    // handleSubmit() {

    // }
>>>>>>> parent of 303f24c... feat: add event handler to update states
    
    render() {
        const {title, channelId, img} = this.state
        return(
        <MainContainer>
            <ClipCard 
                isSelected={false}
                title={title || ""}
                channelId={channelId}
                videoId=""
                img={img}
                key={-1}
            />
            <InputContainer>
            <Title>제목</Title>
                <Input placeholder="제목" name="title" onChange={e => this.handleInput(e)}/>
                <Title>콘텐츠 소개</Title>
                <TextArea rows={10} placeholder="텐츠 소개" name="content" onChange={e => this.handleInput(e)}/>
                <Title># 태그</Title>
                <Select
                    mode="tags"
                    style={{ width: '100%' }}
                    placeholder="태그 입력"
                    onChange={() => {}}
                >
                    {/* [<Option>IU</Option>] */}
                </Select>
            </InputContainer>
        </MainContainer>
        )
    }
}

const MainContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const InputContainer = styled.div`
    width: 100%;
    margin-left: 3vw;
`

const Title = styled.p`
    margin-top: 3vh
    font-size: 18px;
`

export default PostForm