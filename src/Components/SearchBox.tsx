import React from "react"
import styled from 'styled-components'
import {Input} from "antd"

const Search = Input.Search;

const SearchBox: React.SFC<{}> = ({}) => (
    <Container>
        <Search style={{width: "50vw"}}/>
    </Container>
  );

const Container = styled.div``

export default SearchBox