import React from 'react'
import {Input, Select} from 'antd'
import ClipCard from "./ClipCard"
import styled from "styled-components"


interface IProps {selectedResult:any}
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

    // handleSubmit() {

    // }
    
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
`

const InputContainer = styled.div`
flex: 1
    margin-left: 3vw;
`

const Title = styled.p`
    margin-top: 3vh
    font-size: 18px;
`

export default PostForm