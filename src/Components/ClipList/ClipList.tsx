import React from 'react'
import styled from 'styled-components'
import ClipCard from "../ClipCard/ClipCard"

interface IProps{searchedResults: any[]; handleNext(selected: number): void}
interface IState{searchedResults: any[]; selected: number}

class ClipList extends React.Component<IProps, IState> {
    state = {searchedResults: [], selected: -1}
    
    componentDidUpdate(prevProps: {searchedResults: any[]}, prevState: {}) {
        if (prevProps.searchedResults !== this.props.searchedResults) {
            this.setState({searchedResults: this.props.searchedResults})
        }
    }

    handleSelect(idx:number) {
        const {searchedResults, selected} = this.state
        this.setState({selected: selected === idx ? -1 : idx })
        this.props.handleNext(searchedResults[idx])
    }

    renderCard() {
        const {searchedResults, selected} = this.state
        if(searchedResults.length) {
            return searchedResults.map((item:{snippet: {thumbnails:{high:{url:string}};title:string;channelTitle:string}}, i) => {
                const {thumbnails, title, channelTitle} = item.snippet
                return (
                <GhostButton key={i} onClick={() => this.handleSelect(i)}>
                <ClipCard 
        key={i}
        isSelected={selected === i ? true : false}
        title={title}
        img={thumbnails.high.url}
        channelId={channelTitle}
        videoId=""
        />
        </GhostButton>
        )
            })
        }
        return "찾는 영상 혹은 채널을 검색해 주세요"
    }

    render() {
        return (
            <Container>
                {this.renderCard()}
            </Container>
        )
    }
}

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const GhostButton = styled.button`
    background: #fff;
    border: none;
`

export default ClipList