 import styled from "styled-components";
const CardStyle = styled.div`
 font-size: 11px;
 background: aliceblue;
 opacity: 0.8;
 h2 {
    margin-left: .35rem;
    margin-right: .35rem;
 }
 
`
export default function Card(props: any) {
    let attributeTitle: string = props.title;
    let attributeResult: string = props.result;

    return(
        <CardStyle>
            <h2> {attributeTitle} </h2>
            <h2> {attributeResult} </h2>
        </CardStyle>
 
        
    )
}