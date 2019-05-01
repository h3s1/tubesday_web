import React from 'react'
// import styled from 'styled-components'
import ClipCard from "./ClipCard"

interface IProps{searchedResults: any[]}
interface IState{searchedResults: any[]}

class ClipList extends React.Component<IProps, IState> {
    state = {searchedResults: []}
    
    componentDidUpdate(prevProps: {searchedResults: any[]}, prevState: {}) {
        if (prevProps.searchedResults !== this.props.searchedResults) {
            this.setState({searchedResults: this.props.searchedResults})
        }
    }

    renderCard() {
        const {searchedResults} = this.state
        if(searchedResults.length) {
            return searchedResults.map((item:{snippet: {thumbnails:{high:{url:string}};title:string;channelTitle:string}}, i) => {
                const {thumbnails, title, channelTitle} = item.snippet
                return <ClipCard 
        key={i}
        isSelected={true}
        title={title}
        img={thumbnails.high.url}
        channelId={channelTitle}
        videoId=""
        />
            })
        }
        return "nothing ready"
    }
    render() {
        console.log(this.props)
        return (
            <div>
                {this.renderCard()}
            </div>
        )
    }
}

export default ClipList